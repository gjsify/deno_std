// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import Dir from "./_fs_dir.js";
import { Buffer } from "../buffer.js";
import { getOptions, getValidatedPath } from "../internal/fs/utils.mjs";
import { denoErrorToNodeError } from "../internal/errors.js";
import { validateFunction, validateInteger } from "../internal/validators.mjs";
import { promisify } from "../internal/util.mjs";

/** These options aren't funcitonally used right now, as `Dir` doesn't yet support them.
 * However, these values are still validated.
 */
type Options = {
  encoding?: string;
  bufferSize?: number;
};
type Callback = (err?: Error | null, dir?: Dir) => void;

function _validateFunction(callback: unknown): asserts callback is Callback {
  validateFunction(callback, "callback");
}

/** @link https://nodejs.org/api/fs.html#fsopendirsyncpath-options */
export function opendir(
  path: string | Buffer | URL,
  options: Options | Callback,
  callback?: Callback,
) {
  callback = typeof options === "function" ? options : callback;
  _validateFunction(callback);

  path = getValidatedPath(path).toString();

  let err, dir;
  try {
    const { bufferSize } = getOptions(options, {
      encoding: "utf8",
      bufferSize: 32,
    });
    validateInteger(bufferSize, "options.bufferSize", 1, 4294967295);

    /** Throws if path is invalid */
    Deno.readDirSync(path);

    dir = new Dir(path);
  } catch (error) {
    err = denoErrorToNodeError(error as Error, { syscall: "opendir" });
  }
  if (err) {
    callback(err);
  } else {
    callback(null, dir);
  }
}

/** @link https://nodejs.org/api/fs.html#fspromisesopendirpath-options */
export const opendirPromise = promisify(opendir) as (
  path: string | Buffer | URL,
  options?: Options,
) => Promise<Dir>;

export function opendirSync(
  path: string | Buffer | URL,
  options?: Options,
): Dir {
  path = getValidatedPath(path).toString();

  const { bufferSize } = getOptions(options, {
    encoding: "utf8",
    bufferSize: 32,
  });

  validateInteger(bufferSize, "options.bufferSize", 1, 4294967295);

  try {
    /** Throws if path is invalid */
    Deno.readDirSync(path);

    return new Dir(path);
  } catch (err) {
    throw denoErrorToNodeError(err as Error, { syscall: "opendir" });
  }
}
