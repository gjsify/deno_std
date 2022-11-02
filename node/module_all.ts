// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import _http_agent from "./_http_agent.mjs";
import _http_outgoing from "./_http_outgoing.js";
import _stream_duplex from "./internal/streams/duplex.mjs";
import _stream_passthrough from "./internal/streams/passthrough.mjs";
import _stream_readable from "./internal/streams/readable.mjs";
import _stream_transform from "./internal/streams/transform.mjs";
import _stream_writable from "./internal/streams/writable.mjs";
import assert from "./assert.js";
import assertStrict from "./assert/strict.js";
import async_hooks from "./async_hooks.js";
import buffer from "./buffer.js";
import childProcess from "./child_process.js";
import cluster from "./cluster.js";
import console from "./console.js";
import constants from "./constants.js";
import crypto from "./crypto.js";
import dgram from "./dgram.js";
import diagnosticsChannel from "./diagnostics_channel.js";
import dns from "./dns.js";
import dnsPromises from "./dns/promises.js";
import domain from "./domain.js";
import events from "./events.js";
import fs from "./fs.js";
import fsPromises from "./fs/promises.js";
import http from "./http.js";
import http2 from "./http2.js";
import https from "./https.js";
import inspector from "./inspector.js";
import internalCp from "./internal/child_process.js";
import internalCryptoCertificate from "./internal/crypto/certificate.js";
import internalCryptoCipher from "./internal/crypto/cipher.js";
import internalCryptoDiffiehellman from "./internal/crypto/diffiehellman.js";
import internalCryptoHash from "./internal/crypto/hash.js";
import internalCryptoHkdf from "./internal/crypto/hkdf.js";
import internalCryptoKeygen from "./internal/crypto/keygen.js";
import internalCryptoKeys from "./internal/crypto/keys.js";
import internalCryptoPbkdf2 from "./internal/crypto/pbkdf2.js";
import internalCryptoRandom from "./internal/crypto/random.js";
import internalCryptoScrypt from "./internal/crypto/scrypt.js";
import internalCryptoSig from "./internal/crypto/sig.js";
import internalCryptoUtil from "./internal/crypto/util.js";
import internalCryptoX509 from "./internal/crypto/x509.js";
import internalDgram from "./internal/dgram.js";
import internalDnsPromises from "./internal/dns/promises.js";
import internalErrors from "./internal/errors.js";
import internalEventTarget from "./internal/event_target.mjs";
import internalFsUtils from "./internal/fs/utils.mjs";
import internalHttp from "./internal/http.js";
import internalReadlineUtils from "./internal/readline/utils.mjs";
import internalStreamsAddAbortSignal from "./internal/streams/add-abort-signal.mjs";
import internalStreamsBufferList from "./internal/streams/buffer_list.mjs";
import internalStreamsLazyTransform from "./internal/streams/lazy_transform.mjs";
import internalStreamsState from "./internal/streams/state.mjs";
import internalTestBinding from "./internal/test/binding.js";
import internalTimers from "./internal/timers.mjs";
import internalUtil from "./internal/util.mjs";
import internalUtilInspect from "./internal/util/inspect.mjs";
import net from "./net.js";
import os from "./os.js";
import pathPosix from "./path/posix.js";
import pathWin32 from "./path/win32.js";
import path from "./path.js";
import perfHooks from "./perf_hooks.js";
import punycode from "./punycode.js";
import process from "./process.js";
import querystring from "./querystring.js";
import readline from "./readline.js";
import readlinePromises from "./readline/promises.js";
import repl from "./repl.js";
import stream from "./stream.js";
import streamConsumers from "./stream/consumers.mjs";
import streamPromises from "./stream/promises.mjs";
import streamWeb from "./stream/web.js";
import stringDecoder from "./string_decoder.js";
import sys from "./sys.js";
import timers from "./timers.js";
import timersPromises from "./timers/promises.js";
import tls from "./tls.js";
import tty from "./tty.js";
import url from "./url.js";
import utilTypes from "./util/types.js";
import util from "./util.js";
import v8 from "./v8.js";
import vm from "./vm.js";
import workerThreads from "./worker_threads.js";
import wasi from "./wasi.js";
import zlib from "./zlib.js";

// Canonical mapping of supported modules
export default {
  _http_agent,
  _http_outgoing,
  _stream_duplex,
  _stream_passthrough,
  _stream_readable,
  _stream_transform,
  _stream_writable,
  assert,
  "assert/strict": assertStrict,
  async_hooks,
  buffer,
  crypto,
  console,
  constants,
  child_process: childProcess,
  cluster,
  dgram,
  diagnostics_channel: diagnosticsChannel,
  dns,
  "dns/promises": dnsPromises,
  domain,
  events,
  fs,
  "fs/promises": fsPromises,
  http,
  http2,
  https,
  inspector,
  "internal/child_process": internalCp,
  "internal/crypto/certificate": internalCryptoCertificate,
  "internal/crypto/cipher": internalCryptoCipher,
  "internal/crypto/diffiehellman": internalCryptoDiffiehellman,
  "internal/crypto/hash": internalCryptoHash,
  "internal/crypto/hkdf": internalCryptoHkdf,
  "internal/crypto/keygen": internalCryptoKeygen,
  "internal/crypto/keys": internalCryptoKeys,
  "internal/crypto/pbkdf2": internalCryptoPbkdf2,
  "internal/crypto/random": internalCryptoRandom,
  "internal/crypto/scrypt": internalCryptoScrypt,
  "internal/crypto/sig": internalCryptoSig,
  "internal/crypto/util": internalCryptoUtil,
  "internal/crypto/x509": internalCryptoX509,
  "internal/dgram": internalDgram,
  "internal/dns/promises": internalDnsPromises,
  "internal/errors": internalErrors,
  "internal/event_target": internalEventTarget,
  "internal/fs/utils": internalFsUtils,
  "internal/http": internalHttp,
  "internal/readline/utils": internalReadlineUtils,
  "internal/streams/add-abort-signal": internalStreamsAddAbortSignal,
  "internal/streams/buffer_list": internalStreamsBufferList,
  "internal/streams/lazy_transform": internalStreamsLazyTransform,
  "internal/streams/state": internalStreamsState,
  "internal/test/binding": internalTestBinding,
  "internal/timers": internalTimers,
  "internal/util/inspect": internalUtilInspect,
  "internal/util": internalUtil,
  net,
  os,
  "path/posix": pathPosix,
  "path/win32": pathWin32,
  path,
  perf_hooks: perfHooks,
  process,
  get punycode() {
    process.emitWarning(
      "The `punycode` module is deprecated. Please use a userland " +
        "alternative instead.",
      "DeprecationWarning",
      "DEP0040",
    );
    return punycode;
  },
  querystring,
  readline,
  "readline/promises": readlinePromises,
  repl,
  stream,
  "stream/consumers": streamConsumers,
  "stream/promises": streamPromises,
  "stream/web": streamWeb,
  string_decoder: stringDecoder,
  sys,
  timers,
  "timers/promises": timersPromises,
  tls,
  tty,
  url,
  util,
  "util/types": utilTypes,
  v8,
  vm,
  wasi,
  worker_threads: workerThreads,
  zlib,
} as Record<string, unknown>;
