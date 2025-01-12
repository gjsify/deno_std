// Copyright the Browserify authors. MIT License.
// Ported mostly from https://github.com/browserify/path-browserify/
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

import { isWindows } from "../../_util/os.js";
import _win32 from "./win32.js";
import _posix from "./posix.js";

const path = isWindows ? _win32 : _posix;

export const win32 = _win32;
export const posix = _posix;
export const {
  basename,
  delimiter,
  dirname,
  extname,
  format,
  fromFileUrl,
  isAbsolute,
  join,
  normalize,
  parse,
  relative,
  resolve,
  sep,
  toFileUrl,
  toNamespacedPath,
} = path;

export * from "./common.js";
export { SEP, SEP_PATTERN } from "./separator.js";
export * from "./_interface.js";
export * from "./glob.js";
