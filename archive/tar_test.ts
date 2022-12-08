// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

import {files, fs } from '@gjsify/deno-runtime/index';
import { test } from '@gjsify/deno-runtime/cli';

/**
 * Tar test
 *
 * **test summary**
 * - create a tar archive in memory containing output.txt and dir/tar.ts.
 * - read and deflate a tar archive containing output.txt
 *
 * **to run this test**
 * deno run --allow-read archive/tar_test.ts
 */
import { assert, assertEquals } from "../testing/asserts.js";
import { resolve } from "../path/mod.js";
import { Tar } from "./tar.js";
import { Untar } from "./untar.js";
import { Buffer } from "../io/buffer.js";
import { copy } from "../streams/copy.js";
import { readAll } from "../streams/read_all.js";
import { filePath, testdataDir } from "./_test_common.js";

test("createTarArchive", async function () {
  // initialize
  const tar = new Tar();

  // put data on memory
  const content = new TextEncoder().encode("hello tar world!");
  await tar.append("output.txt", {
    reader: new Buffer(content),
    contentSize: content.byteLength,
  });

  // put a file
  await tar.append("dir/tar.ts", { filePath });

  // write tar data to a buffer
  const writer = new Buffer();
  const wrote = await copy(tar.getReader(), writer);

  /**
   * 3072 = 512 (header) + 512 (content) + 512 (header) + 512 (content)
   *       + 1024 (footer)
   */
  assertEquals(wrote, 3072);
});

test("deflateTarArchive", async function () {
  const fileName = "output.txt";
  const text = "hello tar world!";

  // create a tar archive
  const tar = new Tar();
  const content = new TextEncoder().encode(text);
  await tar.append(fileName, {
    reader: new Buffer(content),
    contentSize: content.byteLength,
  });

  // read data from a tar archive
  const untar = new Untar(tar.getReader());
  const result = await untar.extract();
  assert(result !== null);
  const untarText = new TextDecoder("utf-8").decode(await readAll(result));

  assertEquals(await untar.extract(), null); // EOF
  // tests
  assertEquals(result.fileName, fileName);
  assertEquals(untarText, text);
});

test("appendFileWithLongNameToTarArchive", async function (): Promise<
  void
> {
  // 9 * 15 + 13 = 148 bytes
  const fileName = "long-file-name/".repeat(10) + "file-name.txt";
  const text = "hello tar world!";

  // create a tar archive
  const tar = new Tar();
  const content = new TextEncoder().encode(text);
  await tar.append(fileName, {
    reader: new Buffer(content),
    contentSize: content.byteLength,
  });

  // read data from a tar archive
  const untar = new Untar(tar.getReader());
  const result = await untar.extract();
  assert(result !== null);
  assert(!result.consumed);
  const untarText = new TextDecoder("utf-8").decode(await readAll(result));
  assert(result.consumed);

  // tests
  assertEquals(result.fileName, fileName);
  assertEquals(untarText, text);
});

test("directoryEntryType", async function () {
  const tar = new Tar();

  tar.append("directory/", {
    reader: new Buffer(),
    contentSize: 0,
    type: "directory",
  });

  const filePath = resolve(testdataDir);
  tar.append("archive/testdata/", {
    filePath,
  });

  const outputFile = resolve(testdataDir, "directory_type_test.tar");
  const file = await files.open(outputFile, { create: true, write: true });
  await copy(tar.getReader(), file);
  file.close();

  const reader = await files.open(outputFile, { read: true });
  const untar = new Untar(reader);
  for await (const entry of untar) {
    assertEquals(entry.type, "directory");
  }

  reader.close();
  await fs.remove(outputFile);
});
