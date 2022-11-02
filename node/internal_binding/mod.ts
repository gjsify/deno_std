// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as asyncWrap from "./async_wrap.js";
import * as buffer from "./buffer.js";
import * as config from "./config.js";
import * as caresWrap from "./cares_wrap.js";
import * as constants from "./constants.js";
import * as contextify from "./contextify.js";
import * as crypto from "./crypto.js";
import * as credentials from "./credentials.js";
import * as errors from "./errors.js";
import * as fs from "./fs.js";
import * as fsDir from "./fs_dir.js";
import * as fsEventWrap from "./fs_event_wrap.js";
import * as heapUtils from "./heap_utils.js";
import * as httpParser from "./http_parser.js";
import * as icu from "./icu.js";
import * as inspector from "./inspector.js";
import * as jsStream from "./js_stream.js";
import * as messaging from "./messaging.js";
import * as moduleWrap from "./module_wrap.js";
import * as nativeModule from "./native_module.js";
import * as natives from "./natives.js";
import * as options from "./options.js";
import * as os from "./os.js";
import * as pipeWrap from "./pipe_wrap.js";
import * as performance from "./performance.js";
import * as processMethods from "./process_methods.js";
import * as report from "./report.js";
import * as serdes from "./serdes.js";
import * as signalWrap from "./signal_wrap.js";
import * as spawnSync from "./spawn_sync.js";
import * as streamWrap from "./stream_wrap.js";
import * as stringDecoder from "./string_decoder.js";
import * as symbols from "./symbols.js";
import * as taskQueue from "./task_queue.js";
import * as tcpWrap from "./tcp_wrap.js";
import * as timers from "./timers.js";
import * as tlsWrap from "./tls_wrap.js";
import * as traceEvents from "./trace_events.js";
import * as ttyWrap from "./tty_wrap.js";
import * as types from "./types.js";
import * as udpWrap from "./udp_wrap.js";
import * as url from "./url.js";
import * as util from "./util.js";
import * as uv from "./uv.js";
import * as v8 from "./v8.js";
import * as worker from "./worker.js";
import * as zlib from "./zlib.js";

const modules = {
  "async_wrap": asyncWrap,
  buffer,
  "cares_wrap": caresWrap,
  config,
  constants,
  contextify,
  credentials,
  crypto,
  errors,
  fs,
  "fs_dir": fsDir,
  "fs_event_wrap": fsEventWrap,
  "heap_utils": heapUtils,
  "http_parser": httpParser,
  icu,
  inspector,
  "js_stream": jsStream,
  messaging,
  "module_wrap": moduleWrap,
  "native_module": nativeModule,
  natives,
  options,
  os,
  performance,
  "pipe_wrap": pipeWrap,
  "process_methods": processMethods,
  report,
  serdes,
  "signal_wrap": signalWrap,
  "spawn_sync": spawnSync,
  "stream_wrap": streamWrap,
  "string_decoder": stringDecoder,
  symbols,
  "task_queue": taskQueue,
  "tcp_wrap": tcpWrap,
  timers,
  "tls_wrap": tlsWrap,
  "trace_events": traceEvents,
  "tty_wrap": ttyWrap,
  types,
  "udp_wrap": udpWrap,
  url,
  util,
  uv,
  v8,
  worker,
  zlib,
};

export type BindingName = keyof typeof modules;

export function getBinding(name: BindingName) {
  const mod = modules[name];
  if (!mod) {
    throw new Error(`No such module: ${name}`);
  }
  return mod;
}
