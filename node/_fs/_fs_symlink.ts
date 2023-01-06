// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { CallbackWithError } from "./_fs_common.ts";
import { fromFileUrl } from "../path.ts";
import { promisify } from "../internal/util.mjs";
import { URL } from '../url.js';
import { symlink as denoSymlink, symlinkSync as denoSymlinkSync, stat, statSync } from "@gjsify/deno-runtime/runtime/js/30_fs";

type SymlinkType = "file" | "dir";

export function symlink(
  target: string | URL,
  path: string | URL,
  typeOrCallback: SymlinkType | CallbackWithError,
  maybeCallback?: CallbackWithError,
) {
  target = target instanceof URL ? fromFileUrl(target) : target;
  path = path instanceof URL ? fromFileUrl(path) : path;

  let type: SymlinkType = typeof typeOrCallback === "string"
    ? typeOrCallback
    : undefined;

  const callback: CallbackWithError = typeof typeOrCallback === "function"
    ? typeOrCallback
    : (maybeCallback as CallbackWithError);

  if (!callback) throw new Error("No callback function supplied");

  // Gjsify: TODO contribute this to Deno: The type is auto detected in Node.js
  if(!type) {
    stat(target).then((fileInfo) => {
      if(fileInfo.isDirectory) {
        type = 'dir';
      } else {
        type = 'file';
      }
      denoSymlink(target as string, path as string, { type }).then(() => callback(null), callback);
      return;
    })
  }


  denoSymlink(target, path, { type }).then(() => callback(null), callback);
}

export const symlinkPromise = promisify(symlink) as (
  target: string | URL,
  path: string | URL,
  type?: SymlinkType,
) => Promise<void>;

export function symlinkSync(
  target: string | URL,
  path: string | URL,
  type?: SymlinkType,
) {
  target = target instanceof URL ? fromFileUrl(target) : target;
  path = path instanceof URL ? fromFileUrl(path) : path;
  // type = type || "file";

  // Gjsify: TODO contribute this to Deno: The type is auto detected in Node.js
  if(!type) {
    if(statSync(target).isDirectory) {
      type = 'dir';
    } else {
      type = 'file';
    }
  }

  denoSymlinkSync(target, path, { type });
}
