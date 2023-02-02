// Copyright 2011 The Go Authors. All rights reserved. BSD license.
// https://github.com/golang/go/blob/master/LICENSE
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

// This module is browser compatible.

/** Port of the Go
 * [encoding/csv](https://github.com/golang/go/blob/go1.12.5/src/encoding/csv/)
 * library.
 *
 * @module
 */

import { assert } from "../_util/asserts.ts";
import type { ReadOptions } from "./csv/_io.ts";
import { Parser } from "./csv/_parser.ts";

export {
  ERR_BARE_QUOTE,
  ERR_FIELD_COUNT,
  ERR_INVALID_DELIM,
  ERR_QUOTE,
  ParseError,
} from "./csv/_io.ts";
export type { ReadOptions } from "./csv/_io.ts";

const QUOTE = '"';
const LF = "\n";
const CRLF = "\r\n";

export class StringifyError extends Error {
  override readonly name = "StringifyError";
}

function getEscapedString(value: unknown, sep: string): string {
  if (value === undefined || value === null) return "";
  let str = "";

  if (typeof value === "object") str = JSON.stringify(value);
  else str = String(value);

  // Is regex.test more performant here? If so, how to dynamically create?
  // https://stackoverflow.com/questions/3561493/
  if (str.includes(sep) || str.includes(LF) || str.includes(QUOTE)) {
    return `${QUOTE}${str.replaceAll(QUOTE, `${QUOTE}${QUOTE}`)}${QUOTE}`;
  }

  return str;
}

type PropertyAccessor = number | string;

/**
 * @param header Explicit column header name. If omitted,
 * the (final) property accessor is used for this value.
 *
 * @param prop Property accessor(s) used to access the value on the object
 */
export type ColumnDetails = {
  header?: string;
  prop: PropertyAccessor | PropertyAccessor[];
};

/**
 * The most essential aspect of a column is accessing the property holding the
 * data for that column on each object in the data array. If that member is at
 * the top level, `Column` can simply be a property accessor, which is either a
 * `string` (if it's a plain object) or a `number` (if it's an array).
 *
 * ```ts
 * const columns = [
 *   "name",
 * ];
 * ```
 *
 * Each property accessor will be used as the header for the column:
 *
 * | name |
 * | :--: |
 * | Deno |
 *
 * - If the required data is not at the top level (it's nested in other
 *   objects/arrays), then a simple property accessor won't work, so an array of
 *   them will be required.
 *
 *   ```ts
 *   const columns = [
 *     ["repo", "name"],
 *     ["repo", "org"],
 *   ];
 *   ```
 *
 *   When using arrays of property accessors, the header names inherit the value
 *   of the last accessor in each array:
 *
 *   | name |   org    |
 *   | :--: | :------: |
 *   | deno | denoland |
 *
 *  - If a different column header is desired, then a `ColumnDetails` object type
 *     can be used for each column:
 *
 *   - **`header?: string`** is the optional value to use for the column header
 *     name
 *
 *   - **`prop: PropertyAccessor | PropertyAccessor[]`** is the property accessor
 *     (`string` or `number`) or array of property accessors used to access the
 *     data on each object
 *
 *   ```ts
 *   const columns = [
 *     "name",
 *     {
 *       prop: ["runsOn", 0],
 *       header: "language 1",
 *     },
 *     {
 *       prop: ["runsOn", 1],
 *       header: "language 2",
 *     },
 *   ];
 *   ```
 *
 *   | name | language 1 | language 2 |
 *   | :--: | :--------: | :--------: |
 *   | Deno |    Rust    | TypeScript |
 */
export type Column = ColumnDetails | PropertyAccessor | PropertyAccessor[];

type NormalizedColumn = Omit<ColumnDetails, "header" | "prop"> & {
  header: string;
  prop: PropertyAccessor[];
};

function normalizeColumn(column: Column): NormalizedColumn {
  let header: NormalizedColumn["header"],
    prop: NormalizedColumn["prop"];

  if (typeof column === "object") {
    if (Array.isArray(column)) {
      header = String(column[column.length - 1]);
      prop = column;
    } else {
      prop = Array.isArray(column.prop) ? column.prop : [column.prop];
      header = typeof column.header === "string"
        ? column.header
        : String(prop[prop.length - 1]);
    }
  } else {
    header = String(column);
    prop = [column];
  }

  return { header, prop };
}

type ObjectWithStringPropertyKeys = Record<string, unknown>;

/** An object (plain or array) */
export type DataItem = ObjectWithStringPropertyKeys | unknown[];

/**
 * Returns an array of values from an object using the property accessors
 * (and optional transform function) in each column
 */
function getValuesFromItem(
  item: DataItem,
  normalizedColumns: NormalizedColumn[],
): unknown[] {
  const values: unknown[] = [];

  if (normalizedColumns.length) {
    for (const column of normalizedColumns) {
      let value: unknown = item;

      for (const prop of column.prop) {
        if (typeof value !== "object" || value === null) continue;
        if (Array.isArray(value)) {
          if (typeof prop === "number") value = value[prop];
          else {
            throw new StringifyError(
              'Property accessor is not of type "number"',
            );
          }
        } // I think this assertion is safe. Confirm?
        else value = (value as ObjectWithStringPropertyKeys)[prop];
      }

      values.push(value);
    }
  } else {
    if (Array.isArray(item)) {
      values.push(...item);
    } else if (typeof item === "object") {
      throw new StringifyError(
        "No property accessor function was provided for object",
      );
    } else {
      values.push(item);
    }
  }

  return values;
}

export type StringifyOptions = {
  /** Whether to include the row of headers or not.
   *
   * @default {true}
   */
  headers?: boolean;
  /**
   * Delimiter used to separate values. Examples:
   *  - `","` _comma_
   *  - `"\t"` _tab_
   *  - `"|"` _pipe_
   *  - etc.
   *
   *  @default {","}
   */
  separator?: string;
  /**
   * a list of instructions for how to target and transform the data for each
   * column of output. This is also where you can provide an explicit header
   * name for the column.
   */
  columns?: Column[];
};

/**
 * @param data The source data to stringify. It's an array of items which are
 * plain objects or arrays.
 *
 * `DataItem: Record<string, unknown> | unknown[]`
 *
 * ```ts
 * const data = [
 *   {
 *     name: "Deno",
 *     repo: { org: "denoland", name: "deno" },
 *     runsOn: ["Rust", "TypeScript"],
 *   },
 * ];
 * ```
 *
 * @example
 * ```ts
 * import {
 *   Column,
 *   stringify,
 * } from "https://deno.land/std@$STD_VERSION/encoding/csv.ts";
 *
 * type Character = {
 *   age: number;
 *   name: {
 *     first: string;
 *     last: string;
 *   };
 * };
 *
 * const data: Character[] = [
 *   {
 *     age: 70,
 *     name: {
 *       first: "Rick",
 *       last: "Sanchez",
 *     },
 *   },
 *   {
 *     age: 14,
 *     name: {
 *       first: "Morty",
 *       last: "Smith",
 *     },
 *   },
 * ];
 *
 * let columns: Column[] = [
 *   ["name", "first"],
 *   "age",
 * ];
 *
 * console.log(stringify(data, { columns }));
 * // first,age
 * // Rick,70
 * // Morty,14
 * ```
 *
 * @param options Output formatting options
 */
export function stringify(
  data: DataItem[],
  { headers = true, separator: sep = ",", columns = [] }: StringifyOptions = {},
): string {
  if (sep.includes(QUOTE) || sep.includes(CRLF)) {
    const message = [
      "Separator cannot include the following strings:",
      '  - U+0022: Quotation mark (")',
      "  - U+000D U+000A: Carriage Return + Line Feed (\\r\\n)",
    ].join("\n");
    throw new StringifyError(message);
  }

  const normalizedColumns = columns.map(normalizeColumn);
  let output = "";

  if (headers) {
    output += normalizedColumns
      .map((column) => getEscapedString(column.header, sep))
      .join(sep);
    output += CRLF;
  }

  for (const item of data) {
    const values = getValuesFromItem(item, normalizedColumns);
    output += values
      .map((value) => getEscapedString(value, sep))
      .join(sep);
    output += CRLF;
  }

  return output;
}

export interface ParseOptions extends ReadOptions {
  /**
   * If you provide `skipFirstRow: true` and `columns`, the first line will be
   * skipped.
   * If you provide `skipFirstRow: true` but not `columns`, the first line will
   * be skipped and used as header definitions.
   */
  skipFirstRow?: boolean;

  /** List of names used for header definition. */
  columns?: string[];
}

/**
 * Csv parse helper to manipulate data.
 * Provides an auto/custom mapper for columns.
 *
 * @example
 * ```ts
 * import { parse } from "https://deno.land/std@$STD_VERSION/encoding/csv.ts";
 * const string = "a,b,c\nd,e,f";
 *
 * console.log(
 *   await parse(string, {
 *     skipFirstRow: false,
 *   }),
 * );
 * // output:
 * // [["a", "b", "c"], ["d", "e", "f"]]
 * ```
 *
 * @param input Input to parse.
 * @param opt options of the parser.
 * @returns If you don't provide `opt.skipFirstRow` and `opt.columns`, it returns `string[][]`.
 *   If you provide `opt.skipFirstRow` or `opt.columns`, it returns `Record<string, unkown>[]`.
 */
export function parse(
  input: string,
): string[][];
export function parse(
  input: string,
  opt: Omit<ParseOptions, "columns" | "skipFirstRow">,
): string[][];
export function parse(
  input: string,
  opt: Omit<ParseOptions, "columns"> & {
    columns: string[];
  },
): Record<string, unknown>[];
export function parse(
  input: string,
  opt: Omit<ParseOptions, "skipFirstRow"> & {
    skipFirstRow: true;
  },
): Record<string, unknown>[];
export function parse(
  input: string,
  opt: ParseOptions,
): string[][] | Record<string, unknown>[];
export function parse(
  input: string,
  opt: ParseOptions = {
    skipFirstRow: false,
  },
): string[][] | Record<string, unknown>[] {
  const parser = new Parser(opt);
  const r = parser.parse(input);

  if (opt.skipFirstRow || opt.columns) {
    let headers: string[] = [];
    let i = 0;

    if (opt.skipFirstRow) {
      const head = r.shift();
      assert(head != null);
      headers = head;
      i++;
    }

    if (opt.columns) {
      headers = opt.columns;
    }

    return r.map((e) => {
      if (e.length !== headers.length) {
        throw new Error(
          `Error number of fields line: ${i}\nNumber of fields found: ${headers.length}\nExpected number of fields: ${e.length}`,
        );
      }
      i++;
      const out: Record<string, unknown> = {};
      for (let j = 0; j < e.length; j++) {
        out[headers[j]] = e[j];
      }
      return out;
    });
  }
  return r;
}
