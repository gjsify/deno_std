// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { createInterface, Interface } from "./readline.js";
import { assertInstanceOf } from "../testing/asserts.js";
import { Readable, Writable } from "./stream.js";

Deno.test("[node/readline] createInstance", () => {
  const rl = createInterface({
    input: new Readable({ read() {} }),
    output: new Writable(),
  });

  // deno-lint-ignore no-explicit-any
  assertInstanceOf(rl, Interface as any);
});
