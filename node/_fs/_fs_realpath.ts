// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { promisify } from "../internal/util.mjs";
import { realPath, realPathSync } from "@gjsify/deno-runtime/runtime/js/30_fs";

type Options = { encoding: string };
type Callback = (err: Error | null, path?: string) => void;

export function realpath(
  path: string,
  options?: Options | Callback,
  callback?: Callback,
) {
  if (typeof options === "function") {
    callback = options;
  }
  if (!callback) {
    throw new Error("No callback function supplied");
  }
  realPath(path).then(
    (path) => callback!(null, path),
    (err) => callback!(err),
  );
}

realpath.native = realpath;

export const realpathPromise = promisify(realpath) as (
  path: string,
  options?: Options,
) => Promise<string>;

export function realpathSync(path: string): string {
  return realPathSync(path);
}

realpathSync.native = realpathSync;
