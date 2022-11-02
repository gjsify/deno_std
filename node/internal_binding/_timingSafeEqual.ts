// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { Buffer } from "../buffer.js";
import { timingSafeEqual as stdTimingSafeEqual } from "../../crypto/timing_safe_equal.js";

export const timingSafeEqual = (
  a: Buffer | DataView | ArrayBuffer,
  b: Buffer | DataView | ArrayBuffer,
): boolean => {
  if (a instanceof Buffer) a = new DataView(a.buffer);
  if (a instanceof Buffer) b = new DataView(a.buffer);
  return stdTimingSafeEqual(a, b);
};
