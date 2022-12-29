// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { fromFileUrl } from "../path.js";
import { promisify } from "../internal/util.mjs";
import { URL } from '../url.js';

export function rename(
  oldPath: string | URL,
  newPath: string | URL,
  callback: (err?: Error) => void,
) {
  oldPath = oldPath instanceof URL ? fromFileUrl(oldPath) : oldPath;
  newPath = newPath instanceof URL ? fromFileUrl(newPath) : newPath;

  if (!callback) throw new Error("No callback function supplied");

  Deno.rename(oldPath, newPath).then((_) => callback(), callback);
}

export const renamePromise = promisify(rename) as (
  oldPath: string | URL,
  newPath: string | URL,
) => Promise<void>;

export function renameSync(oldPath: string | URL, newPath: string | URL) {
  oldPath = oldPath instanceof URL ? fromFileUrl(oldPath) : oldPath;
  newPath = newPath instanceof URL ? fromFileUrl(newPath) : newPath;

  Deno.renameSync(oldPath, newPath);
}
