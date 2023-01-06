// Test ported from Golang
// https://github.com/golang/go/blob/2cc15b1/src/encoding/csv/reader_test.go
// Copyright 2011 The Go Authors. All rights reserved. BSD license.
// https://github.com/golang/go/blob/master/LICENSE
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { assertEquals, assertThrows } from "../testing/asserts.ts";
import {
  NEWLINE,
  parse,
  ParseError,
  stringify,
  StringifyError,
} from "./csv.ts";

Deno.test({
  name: "parse",
  async fn(t) {
    await t.step({
      name: "Simple",
      fn() {
        const input = "a,b,c\n";
        assertEquals(
          parse(input),
          [["a", "b", "c"]],
        );
      },
    });
    await t.step({
      name: "CRLF",
      fn() {
        const input = "a,b\r\nc,d\r\n";
        assertEquals(
          parse(input),
          [
            ["a", "b"],
            ["c", "d"],
          ],
        );
      },
    });

    await t.step({
      name: "BareCR",
      fn() {
        const input = "a,b\rc,d\r\n";
        assertEquals(
          parse(input),
          [["a", "b\rc", "d"]],
        );
      },
    });

    await t.step({
      name: "RFC4180test",
      fn() {
        const input =
          '#field1,field2,field3\n"aaa","bbb","ccc"\n"a,a","bbb","ccc"\nzzz,yyy,xxx';
        assertEquals(
          parse(input),
          [
            ["#field1", "field2", "field3"],
            ["aaa", "bbb", "ccc"],
            ["a,a", `bbb`, "ccc"],
            ["zzz", "yyy", "xxx"],
          ],
        );
      },
    });
    await t.step({
      name: "NoEOLTest",
      fn() {
        const input = "a,b,c";
        assertEquals(
          parse(input),
          [["a", "b", "c"]],
        );
      },
    });

    await t.step({
      name: "Semicolon",
      fn() {
        const input = "a;b;c\n";
        assertEquals(
          parse(input, { separator: ";" }),
          [["a", "b", "c"]],
        );
      },
    });

    await t.step({
      name: "MultiLine",
      fn() {
        const input = '"two\nline","one line","three\nline\nfield"';
        assertEquals(
          parse(input),
          [["two\nline", "one line", "three\nline\nfield"]],
        );
      },
    });

    await t.step({
      name: "BlankLine",
      fn() {
        const input = "a,b,c\n\nd,e,f\n\n";
        assertEquals(
          parse(input),
          [
            ["a", "b", "c"],
            ["d", "e", "f"],
          ],
        );
      },
    });

    await t.step({
      name: "BlankLineFieldCount",
      fn() {
        const input = "a,b,c\n\nd,e,f\n\n";
        assertEquals(
          parse(input, { fieldsPerRecord: 0 }),
          [
            ["a", "b", "c"],
            ["d", "e", "f"],
          ],
        );
      },
    });

    await t.step({
      name: "TrimSpace",
      fn() {
        const input = " a,  b,   c\n";
        assertEquals(
          parse(input, { trimLeadingSpace: true }),
          [["a", "b", "c"]],
        );
      },
    });

    await t.step({
      name: "LeadingSpace",
      fn() {
        const input = " a,  b,   c\n";
        const output = [[" a", "  b", "   c"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "Comment",
      fn() {
        const input = "#1,2,3\na,b,c\n#comment";
        const output = [["a", "b", "c"]];
        assertEquals(parse(input, { comment: "#" }), output);
      },
    });
    await t.step({
      name: "NoComment",
      fn() {
        const input = "#1,2,3\na,b,c";
        const output = [
          ["#1", "2", "3"],
          ["a", "b", "c"],
        ];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "LazyQuotes",
      fn() {
        const input = `a "word","1"2",a","b`;
        const output = [[`a "word"`, `1"2`, `a"`, `b`]];
        assertEquals(parse(input, { lazyQuotes: true }), output);
      },
    });
    await t.step({
      name: "BareQuotes",
      fn() {
        const input = `a "word","1"2",a"`;
        const output = [[`a "word"`, `1"2`, `a"`]];
        assertEquals(parse(input, { lazyQuotes: true }), output);
      },
    });
    await t.step({
      name: "BareDoubleQuotes",
      fn() {
        const input = `a""b,c`;
        const output = [[`a""b`, `c`]];
        assertEquals(parse(input, { lazyQuotes: true }), output);
      },
    });
    await t.step({
      name: "BadDoubleQuotes",
      fn() {
        const input = `a""b,c`;
        assertThrows(
          () => parse(input),
          ParseError,
          'parse error on line 1, column 1: bare " in non-quoted-field',
        );
      },
    });
    await t.step({
      name: "TrimQuote",
      fn() {
        const input = ` "a"," b",c`;
        const output = [["a", " b", "c"]];
        assertEquals(parse(input, { trimLeadingSpace: true }), output);
      },
    });
    await t.step({
      name: "BadBareQuote",
      fn() {
        const input = `a "word","b"`;
        assertThrows(
          () => parse(input),
          ParseError,
          'parse error on line 1, column 2: bare " in non-quoted-field',
        );
      },
    });
    await t.step({
      name: "BadTrailingQuote",
      fn() {
        const input = `"a word",b"`;
        assertThrows(
          () => parse(input),
          ParseError,
          'parse error on line 1, column 10: bare " in non-quoted-field',
        );
      },
    });
    await t.step({
      name: "ExtraneousQuote",
      fn() {
        const input = `"a "word","b"`;
        assertThrows(
          () => parse(input),
          ParseError,
          `parse error on line 1, column 3: extraneous or missing " in quoted-field`,
        );
      },
    });
    await t.step({
      name: "BadFieldCount",
      fn() {
        const input = "a,b,c\nd,e";
        assertThrows(
          () => parse(input, { fieldsPerRecord: 0 }),
          ParseError,
          "record on line 2: wrong number of fields",
        );
      },
    });
    await t.step({
      name: "BadFieldCount1",
      fn() {
        const input = `a,b,c`;
        assertThrows(
          () => parse(input, { fieldsPerRecord: 2 }),
          ParseError,
          "record on line 1: wrong number of fields",
        );
      },
    });
    await t.step({
      name: "FieldCount",
      fn() {
        const input = "a,b,c\nd,e";
        const output = [
          ["a", "b", "c"],
          ["d", "e"],
        ];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "TrailingCommaEOF",
      fn() {
        const input = "a,b,c,";
        const output = [["a", "b", "c", ""]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "TrailingCommaEOL",
      fn() {
        const input = "a,b,c,\n";
        const output = [["a", "b", "c", ""]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "TrailingCommaSpaceEOF",
      fn() {
        const input = "a,b,c, ";
        const output = [["a", "b", "c", ""]];
        assertEquals(parse(input, { trimLeadingSpace: true }), output);
      },
    });
    await t.step({
      name: "TrailingCommaSpaceEOL",
      fn() {
        const input = "a,b,c, \n";
        const output = [["a", "b", "c", ""]];
        assertEquals(parse(input, { trimLeadingSpace: true }), output);
      },
    });
    await t.step({
      name: "TrailingCommaLine3",
      fn() {
        const input = "a,b,c\nd,e,f\ng,hi,";
        const output = [
          ["a", "b", "c"],
          ["d", "e", "f"],
          ["g", "hi", ""],
        ];
        assertEquals(parse(input, { trimLeadingSpace: true }), output);
      },
    });
    await t.step({
      name: "NotTrailingComma3",
      fn() {
        const input = "a,b,c, \n";
        const output = [["a", "b", "c", " "]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "CommaFieldTest",
      fn() {
        const input =
          `x,y,z,w\nx,y,z,\nx,y,,\nx,,,\n,,,\n"x","y","z","w"\n"x","y","z",""\n"x","y","",""\n"x","","",""\n"","","",""\n`;
        const output = [
          ["x", "y", "z", "w"],
          ["x", "y", "z", ""],
          ["x", "y", "", ""],
          ["x", "", "", ""],
          ["", "", "", ""],
          ["x", "y", "z", "w"],
          ["x", "y", "z", ""],
          ["x", "y", "", ""],
          ["x", "", "", ""],
          ["", "", "", ""],
        ];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "TrailingCommaIneffective1",
      fn() {
        const input = "a,b,\nc,d,e";
        const output = [
          ["a", "b", ""],
          ["c", "d", "e"],
        ];
        assertEquals(parse(input, { trimLeadingSpace: true }), output);
      },
    });
    await t.step({
      name: "ReadAllReuseRecord",
      fn() {
        const input = "a,b\nc,d";
        const output = [
          ["a", "b"],
          ["c", "d"],
        ];
        assertEquals(parse(input), output);
        // ReuseRecord: true,
      },
    });
    await t.step({
      name: "StartLine1", // Issue 19019
      fn() {
        const input = 'a,"b\nc"d,e';
        assertThrows(
          () => parse(input, { fieldsPerRecord: 2 }),
          ParseError,
          'record on line 1; parse error on line 2, column 1: extraneous or missing " in quoted-field',
        );
      },
    });
    await t.step({
      name: "StartLine2",
      fn() {
        const input = 'a,b\n"d\n\n,e';
        assertThrows(
          () => parse(input, { fieldsPerRecord: 2 }),
          ParseError,
          'record on line 2; parse error on line 5, column 0: extraneous or missing " in quoted-field',
        );
      },
    });
    await t.step({
      name: "CRLFInQuotedField", // Issue 21201
      fn() {
        const input = 'A,"Hello\r\nHi",B\r\n';
        const output = [["A", "Hello\nHi", "B"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "BinaryBlobField", // Issue 19410
      fn() {
        const input = "x09\x41\xb4\x1c,aktau";
        const output = [["x09A\xb4\x1c", "aktau"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "TrailingCR",
      fn() {
        const input = "field1,field2\r";
        const output = [["field1", "field2"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "QuotedTrailingCR",
      fn() {
        const input = '"field"\r';
        const output = [["field"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "QuotedTrailingCRCR",
      fn() {
        const input = '"field"\r\r';
        assertThrows(
          () => parse(input, { fieldsPerRecord: 2 }),
          ParseError,
          'parse error on line 1, column 6: extraneous or missing " in quoted-field',
        );
      },
    });
    await t.step({
      name: "FieldCR",
      fn() {
        const input = "field\rfield\r";
        const output = [["field\rfield"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "FieldCRCR",
      fn() {
        const input = "field\r\rfield\r\r";
        const output = [["field\r\rfield\r"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "FieldCRCRLF",
      fn() {
        const input = "field\r\r\nfield\r\r\n";
        const output = [["field\r"], ["field\r"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "FieldCRCRLFCR",
      fn() {
        const input = "field\r\r\n\rfield\r\r\n\r";
        const output = [["field\r"], ["\rfield\r"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "FieldCRCRLFCRCR",
      fn() {
        const input = "field\r\r\n\r\rfield\r\r\n\r\r";
        const output = [["field\r"], ["\r\rfield\r"], ["\r"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "MultiFieldCRCRLFCRCR",
      fn() {
        const input = "field1,field2\r\r\n\r\rfield1,field2\r\r\n\r\r,";
        const output = [
          ["field1", "field2\r"],
          ["\r\rfield1", "field2\r"],
          ["\r\r", ""],
        ];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "NonASCIICommaAndComment",
      fn() {
        const input = "a£b,c£ \td,e\n€ comment\n";
        const output = [["a", "b,c", "d,e"]];
        assertEquals(
          parse(input, {
            trimLeadingSpace: true,
            separator: "£",
            comment: "€",
          }),
          output,
        );
      },
    });
    await t.step({
      name: "NonASCIICommaAndCommentWithQuotes",
      fn() {
        const input = 'a€"  b,"€ c\nλ comment\n';
        const output = [["a", "  b,", " c"]];
        assertEquals(
          parse(input, { separator: "€", comment: "λ" }),
          output,
        );
      },
    });
    await t.step(
      {
        // λ and θ start with the same byte.
        // This tests that the parser doesn't confuse such characters.
        name: "NonASCIICommaConfusion",
        fn() {
          const input = '"abθcd"λefθgh';
          const output = [["abθcd", "efθgh"]];
          assertEquals(
            parse(input, { separator: "λ", comment: "€" }),
            output,
          );
        },
      },
    );
    await t.step({
      name: "NonASCIICommentConfusion",
      fn() {
        const input = "λ\nλ\nθ\nλ\n";
        const output = [["λ"], ["λ"], ["λ"]];
        assertEquals(parse(input, { comment: "θ" }), output);
      },
    });
    await t.step({
      name: "QuotedFieldMultipleLF",
      fn() {
        const input = '"\n\n\n\n"';
        const output = [["\n\n\n\n"]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "MultipleCRLF",
      fn() {
        const input = "\r\n\r\n\r\n\r\n";
        const output: string[][] = [];
        assertEquals(parse(input), output);
      },
      /**
       * The implementation may read each line in several chunks if
       * it doesn't fit entirely.
       * in the read buffer, so we should test the code to handle that condition.
       */
    } /* TODO(kt3k): Enable this test case)
     await t.step({
        name: "HugeLines",
        fn() {
        const input = "#ignore\n".repeat(10000) + "@".repeat(5000) + ","
          "*".repeat(5000),
        const output = [["@".repeat(5000), "*".repeat(5000)]]
        assertEquals(parse(input), output)
        Comment: "#",
      },
      }*/);
    await t.step({
      name: "QuoteWithTrailingCRLF",
      fn() {
        const input = '"foo"bar"\r\n';
        assertThrows(
          () => parse(input),
          ParseError,
          `parse error on line 1, column 4: extraneous or missing " in quoted-field`,
        );
      },
    });
    await t.step({
      name: "LazyQuoteWithTrailingCRLF",
      fn() {
        const input = '"foo"bar"\r\n';
        const output = [[`foo"bar`]];
        assertEquals(parse(input, { lazyQuotes: true }), output);
      },
    });
    await t.step({
      name: "DoubleQuoteWithTrailingCRLF",
      fn() {
        const input = '"foo""bar"\r\n';
        const output = [[`foo"bar`]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "EvenQuotes",
      fn() {
        const input = `""""""""`;
        const output = [[`"""`]];
        assertEquals(parse(input), output);
      },
    });
    await t.step({
      name: "OddQuotes",
      fn() {
        const input = `"""""""`;
        assertThrows(
          () => parse(input),
          ParseError,
          `parse error on line 1, column 7: extraneous or missing " in quoted-field`,
        );
      },
    });
    await t.step({
      name: "LazyOddQuotes",
      fn() {
        const input = `"""""""`;
        const output = [[`"""`]];
        assertEquals(parse(input, { lazyQuotes: true }), output);
      },
    });
    await t.step({
      name: "BadComma1",
      fn() {
        const input = "";
        assertThrows(
          () => parse(input, { separator: "\n" }),
          Error,
          "Invalid Delimiter",
        );
      },
    });
    await t.step({
      name: "BadComma2",
      fn() {
        const input = "";
        assertThrows(
          () => parse(input, { separator: "\r" }),
          Error,
          "Invalid Delimiter",
        );
      },
    });
    await t.step({
      name: "BadComma3",
      fn() {
        const input = "";
        assertThrows(
          () => parse(input, { separator: '"' }),
          Error,
          "Invalid Delimiter",
        );
      },
    });
    await t.step({
      name: "BadComment1",
      fn() {
        const input = "";
        assertThrows(
          () => parse(input, { comment: "\n" }),
          Error,
          "Invalid Delimiter",
        );
      },
    });
    await t.step({
      name: "BadComment2",
      fn() {
        const input = "";
        assertThrows(
          () => parse(input, { comment: "\r" }),
          Error,
          "Invalid Delimiter",
        );
      },
    });
    await t.step({
      name: "BadCommaComment",
      fn() {
        const input = "";
        assertThrows(
          () => parse(input, { separator: "X", comment: "X" }),
          Error,
          "Invalid Delimiter",
        );
      },
    });

    await t.step({
      name: "simple",
      fn() {
        const input = "a,b,c";
        const output = [["a", "b", "c"]];
        assertEquals(parse(input, { skipFirstRow: false }), output);
      },
    });
    await t.step({
      name: "simple Bufreader",
      fn() {
        const input = "a,b,c";
        const output = [["a", "b", "c"]];
        assertEquals(parse(input, { skipFirstRow: false }), output);
      },
    });
    await t.step({
      name: "multiline",
      fn() {
        const input = "a,b,c\ne,f,g\n";
        const output = [
          ["a", "b", "c"],
          ["e", "f", "g"],
        ];
        assertEquals(parse(input, { skipFirstRow: false }), output);
      },
    });
    await t.step({
      name: "header mapping boolean",
      fn() {
        const input = "a,b,c\ne,f,g\n";
        const output = [{ a: "e", b: "f", c: "g" }];
        assertEquals(parse(input, { skipFirstRow: true }), output);
      },
    });
    await t.step({
      name: "header mapping array",
      fn() {
        const input = "a,b,c\ne,f,g\n";
        const output = [
          { this: "a", is: "b", sparta: "c" },
          { this: "e", is: "f", sparta: "g" },
        ];
        assertEquals(
          parse(input, { columns: ["this", "is", "sparta"] }),
          output,
        );
      },
    });

    await t.step({
      name: "provides both opts.skipFirstRow and opts.columns",
      fn() {
        const input = "a,b,1\nc,d,2\ne,f,3";
        const output = [
          { foo: "c", bar: "d", baz: "2" },
          { foo: "e", bar: "f", baz: "3" },
        ];
        assertEquals(
          parse(input, {
            skipFirstRow: true,
            columns: ["foo", "bar", "baz"],
          }),
          output,
        );
      },
    });
    await t.step({
      name: "mismatching number of headers and fields",
      fn() {
        const input = "a,b,c\nd,e";
        assertThrows(
          () =>
            parse(input, {
              skipFirstRow: true,
              columns: ["foo", "bar", "baz"],
            }),
          Error,
          "Error number of fields line: 1\nNumber of fields found: 3\nExpected number of fields: 2",
        );
      },
    });
  },
});

Deno.test({
  name: "stringify",
  async fn(t) {
    await t.step({
      name: "Access array index using string",
      fn() {
        const columns = ["a"];
        const data = [["foo"], ["bar"]];
        const errorMessage = 'Property accessor is not of type "number"';
        assertThrows(
          () => stringify(data, { columns }),
          StringifyError,
          errorMessage,
        );
      },
    });
    await t.step(
      {
        name: "Double quote in separator",

        fn() {
          const columns = [0];
          const data = [["foo"], ["bar"]];
          const errorMessage = [
            "Separator cannot include the following strings:",
            '  - U+0022: Quotation mark (")',
            "  - U+000D U+000A: Carriage Return + Line Feed (\\r\\n)",
          ].join("\n");
          const options = { separator: '"', columns };
          assertThrows(
            () => stringify(data, options),
            StringifyError,
            errorMessage,
          );
        },
      },
    );
    await t.step(
      {
        name: "CRLF in separator",
        fn() {
          const columns = [0];
          const data = [["foo"], ["bar"]];
          const errorMessage = [
            "Separator cannot include the following strings:",
            '  - U+0022: Quotation mark (")',
            "  - U+000D U+000A: Carriage Return + Line Feed (\\r\\n)",
          ].join("\n");
          const options = { separator: "\r\n", columns };
          assertThrows(
            () => stringify(data, options),
            StringifyError,
            errorMessage,
          );
        },
      },
    );

    await t.step(
      {
        name: "Invalid data, no columns",
        fn() {
          const data = [{ a: 1 }, { a: 2 }];
          assertThrows(
            () => stringify(data),
            StringifyError,
            "No property accessor function was provided for object",
          );
        },
      },
    );
    await t.step(
      {
        name: "Invalid data, no columns",
        fn() {
          const data = [{ a: 1 }, { a: 2 }];
          assertThrows(
            () => stringify(data),
            StringifyError,
            "No property accessor function was provided for object",
          );
        },
      },
    );
    await t.step(
      {
        name: "No data, no columns",

        fn() {
          const columns: string[] = [];
          const data: string[][] = [];
          const output = NEWLINE;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "No data, no columns, no headers",
        fn() {
          const columns: string[] = [];
          const data: string[][] = [];
          const output = ``;
          const options = { headers: false, columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step(
      {
        name: "No data, columns",
        fn() {
          const columns = ["a"];
          const data: string[][] = [];
          const output = `a${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "No data, columns, no headers",

        fn() {
          const columns = ["a"];
          const data: string[][] = [];
          const output = ``;
          const options = { headers: false, columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step(
      {
        name: "Separator: CR",
        fn() {
          const columns = [0, 1];
          const data = [["foo", "bar"], ["baz", "qux"]];
          const output = `0\r1${NEWLINE}foo\rbar${NEWLINE}baz\rqux${NEWLINE}`;
          const options = { separator: "\r", columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step(
      {
        name: "Separator: LF",

        fn() {
          const columns = [0, 1];
          const data = [["foo", "bar"], ["baz", "qux"]];
          const output = `0\n1${NEWLINE}foo\nbar${NEWLINE}baz\nqux${NEWLINE}`;
          const options = { separator: "\n", columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: number accessor",
        fn() {
          const columns = [1];
          const data = [{ 1: 1 }, { 1: 2 }];
          const output = `1${NEWLINE}1${NEWLINE}2${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Explicit header value, no headers",

        fn() {
          const columns = [{ header: "Value", prop: "value" }];
          const data = [{ value: "foo" }, { value: "bar" }];
          const output = `foo${NEWLINE}bar${NEWLINE}`;
          const options = { headers: false, columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: number accessor,const data = array",
        fn() {
          const columns = [1];
          const data = [["key", "foo"], ["key", "bar"]];
          const output = `1${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: array number accessor",

        fn() {
          const columns = [[1]];
          const data = [{ 1: 1 }, { 1: 2 }];
          const output = `1${NEWLINE}1${NEWLINE}2${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: array number accessor,const data = array",
        fn() {
          const columns = [[1]];
          const data = [["key", "foo"], ["key", "bar"]];
          const output = `1${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: array number accessor,const data = array",

        fn() {
          const columns = [[1, 1]];
          const data = [["key", ["key", "foo"]], ["key", ["key", "bar"]]];
          const output = `1${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: string accessor",
        fn() {
          const columns = ["value"];
          const data = [{ value: "foo" }, { value: "bar" }];
          const output = `value${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: array string accessor",
        fn() {
          const columns = [["value"]];
          const data = [{ value: "foo" }, { value: "bar" }];
          const output = `value${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Column: array string accessor",
        fn() {
          const columns = [["msg", "value"]];
          const data = [{ msg: { value: "foo" } }, { msg: { value: "bar" } }];
          const output = `value${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Explicit header",
        fn() {
          const columns = [
            {
              header: "Value",
              prop: ["msg", "value"],
            },
          ];
          const data = [{ msg: { value: "foo" } }, { msg: { value: "bar" } }];
          const output = `Value${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );

    await t.step(
      {
        name: "Targeted value: object",
        fn() {
          const columns = [0];
          const data = [[{ value: "foo" }], [{ value: "bar" }]];
          const output =
            `0${NEWLINE}"{""value"":""foo""}"${NEWLINE}"{""value"":""bar""}"${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: arary of objects",
        fn() {
          const columns = [0];
          const data = [
            [[{ value: "foo" }, { value: "bar" }]],
            [[{ value: "baz" }, { value: "qux" }]],
          ];
          const output =
            `0${NEWLINE}"[{""value"":""foo""},{""value"":""bar""}]"${NEWLINE}"[{""value"":""baz""},{""value"":""qux""}]"${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: array",
        fn() {
          const columns = [0];
          const data = [[["foo", "bar"]], [["baz", "qux"]]];
          const output =
            `0${NEWLINE}"[""foo"",""bar""]"${NEWLINE}"[""baz"",""qux""]"${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: array, separator: tab",

        fn() {
          const columns = [0];
          const data = [[["foo", "bar"]], [["baz", "qux"]]];
          const output =
            `0${NEWLINE}"[""foo"",""bar""]"${NEWLINE}"[""baz"",""qux""]"${NEWLINE}`;
          const options = { separator: "\t", columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: undefined",
        fn() {
          const columns = [0];
          const data = [[], []];
          const output = `0${NEWLINE}${NEWLINE}${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: null",
        fn() {
          const columns = [0];
          const data = [[null], [null]];
          const output = `0${NEWLINE}${NEWLINE}${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: hex number",
        fn() {
          const columns = [0];
          const data = [[0xa], [0xb]];
          const output = `0${NEWLINE}10${NEWLINE}11${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: BigInt",
        fn() {
          const columns = [0];
          const data = [[BigInt("1")], [BigInt("2")]];
          const output = `0${NEWLINE}1${NEWLINE}2${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: boolean",
        fn() {
          const columns = [0];
          const data = [[true], [false]];
          const output = `0${NEWLINE}true${NEWLINE}false${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: string",
        fn() {
          const columns = [0];
          const data = [["foo"], ["bar"]];
          const output = `0${NEWLINE}foo${NEWLINE}bar${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: symbol",
        fn() {
          const columns = [0];
          const data = [[Symbol("foo")], [Symbol("bar")]];
          const output =
            `0${NEWLINE}Symbol(foo)${NEWLINE}Symbol(bar)${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Targeted value: function",
        fn() {
          const columns = [0];
          const data = [[(n: number) => n]];
          const output = `0${NEWLINE}(n)=>n${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Value with double quote",
        fn() {
          const columns = [0];
          const data = [['foo"']];
          const output = `0${NEWLINE}"foo"""${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Value with CRLF",
        fn() {
          const columns = [0];
          const data = [["foo\r\n"]];
          const output = `0${NEWLINE}"foo\r\n"${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Value with CR",
        fn() {
          const columns = [0];
          const data = [["foo\r"]];
          const output = `0${NEWLINE}foo\r${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Value with LF",
        fn() {
          const columns = [0];
          const data = [["foo\n"]];
          const output = `0${NEWLINE}foo\n${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Value with comma",
        fn() {
          const columns = [0];
          const data = [["foo,"]];
          const output = `0${NEWLINE}"foo,"${NEWLINE}`;
          assertEquals(stringify(data, { columns }), output);
        },
      },
    );
    await t.step(
      {
        name: "Value with comma, tab separator",
        fn() {
          const columns = [0];
          const data = [["foo,"]];
          const output = `0${NEWLINE}foo,${NEWLINE}`;

          const options = { separator: "\t", columns };
          assertEquals(stringify(data, options), output);
        },
      },
    );
    await t.step({
      name: "Valid data, no columns",
      async fn() {
        const data = [[1, 2, 3], [4, 5, 6]];
        const output = `${NEWLINE}1,2,3${NEWLINE}4,5,6${NEWLINE}`;

        assertEquals(await stringify(data), output);
      },
    });
  },
});
