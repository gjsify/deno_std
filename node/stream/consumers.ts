// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent and Node contributors. All rights reserved. MIT license.

import { Buffer } from "../buffer.ts";

import type { ReadableStream } from "../_global.d.ts"
import type { Readable } from "../_stream.d.mts"

/**
 * @param {AsyncIterable|ReadableStream|Readable} stream
 * @returns {Promise<Blob>}
 */
async function blob(stream: AsyncIterable<any>|ReadableStream|Readable): Promise<Blob> {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return new Blob(chunks);
}

/**
 * @param {AsyncIterable<any>|ReadableStream|Readable} stream
 * @returns {Promise<ArrayBuffer>}
 */
async function arrayBuffer(stream: AsyncIterable<any>|ReadableStream|Readable): Promise<ArrayBuffer> {
  const ret = await blob(stream);
  return ret.arrayBuffer();
}

/**
 * @param {AsyncIterable<any>|ReadableStream|Readable} stream
 * @returns {Promise<Buffer>}
 */
async function buffer(stream: AsyncIterable<any>|ReadableStream|Readable): Promise<Buffer> {
  return Buffer.from(await arrayBuffer(stream));
}

/**
 * @param {AsyncIterable<any>|ReadableStream|Readable} stream
 * @returns {Promise<string>}
 */
async function text(stream: AsyncIterable<any>|ReadableStream|Readable): Promise<string> {
  const dec = new TextDecoder();
  let str = "";
  for await (const chunk of stream) {
    if (typeof chunk === "string") {
      str += chunk;
    } else {
      str += dec.decode(chunk, { stream: true });
    }
  }
  // Flush the streaming TextDecoder so that any pending
  // incomplete multibyte characters are handled.
  str += dec.decode(undefined, { stream: false });
  return str;
}

/**
 * @param {AsyncIterable<any>|ReadableStream|Readable} stream
 * @returns {Promise<any>}
 */
async function json(stream: AsyncIterable<any>|ReadableStream|Readable): Promise<any> {
  const str = await text(stream);
  return JSON.parse(str);
}

export default {
  arrayBuffer,
  blob,
  buffer,
  json,
  text,
};
export { arrayBuffer, blob, buffer, json, text };
