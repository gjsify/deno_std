// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import type { CallbackWithError } from "./_fs_common.ts";
import { getValidatedPath } from "../internal/fs/utils.mjs";
import * as pathModule from "../../path/mod.js";
import { parseFileMode } from "../internal/validators.mjs";
import { Buffer } from "../buffer.js";
import { promisify } from "../internal/util.mjs";

export function chmod(
  path: string | Buffer | URL,
  mode: string | number,
  callback: CallbackWithError,
) {
  path = getValidatedPath(path).toString();
  mode = parseFileMode(mode, "mode");

  Deno.chmod(pathModule.toNamespacedPath(path), mode).catch((error) => {
    // Ignore NotSupportedError that occurs on windows
    // https://github.com/denoland/deno_std/issues/2995
    if (!(error instanceof Deno.errors.NotSupported)) {
      throw error;
    }
  }).then(
    () => callback(null),
    callback,
  );
}

export const chmodPromise = promisify(chmod) as (
  path: string | Buffer | URL,
  mode: string | number,
) => Promise<void>;

export function chmodSync(path: string | URL, mode: string | number) {
  path = getValidatedPath(path).toString();
  mode = parseFileMode(mode, "mode");

  try {
    Deno.chmodSync(pathModule.toNamespacedPath(path), mode);
  } catch (error) {
    // Ignore NotSupportedError that occurs on windows
    // https://github.com/denoland/deno_std/issues/2995
    if (!(error instanceof Deno.errors.NotSupported)) {
      throw error;
    }
  }
}
