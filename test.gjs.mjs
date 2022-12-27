var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod5) => function __require() {
  return mod5 || (0, cb[__getOwnPropNames(cb)[0]])((mod5 = { exports: {} }).exports, mod5), mod5.exports;
};
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from5, except, desc) => {
  if (from5 && typeof from5 === "object" || typeof from5 === "function") {
    for (let key of __getOwnPropNames(from5))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from5[key], enumerable: !(desc = __getOwnPropDesc(from5, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod5, isNodeMode, target2) => (target2 = mod5 != null ? __create(__getProtoOf(mod5)) : {}, __copyProps(
  isNodeMode || !mod5 || !mod5.__esModule ? __defProp(target2, "default", { value: mod5, enumerable: true }) : target2,
  mod5
));
var __toCommonJS = (mod5) => __copyProps(__defProp({}, "__esModule", { value: true }), mod5);

// ../../node/util/lib/esm/is-buffer.js
var init_is_buffer = __esm({
  "../../node/util/lib/esm/is-buffer.js"() {
  }
});

// ../../gjs/types/@types/Gjs/index.js
var _imports, Gjs_default;
var init_Gjs = __esm({
  "../../gjs/types/@types/Gjs/index.js"() {
    _imports = globalThis.imports || {};
    Gjs_default = _imports;
  }
});

// ../../gjs/types/@types/Gjs/Gio-2.0.js
import Gio from "gi://Gio?version=2.0";
var Gio_2_0_default;
var init_Gio_2_0 = __esm({
  "../../gjs/types/@types/Gjs/Gio-2.0.js"() {
    Gio_2_0_default = Gio;
  }
});

// ../../gjs/types/@types/Gjs/GLib-2.0.js
import GLib from "gi://GLib?version=2.0";
var GLib_2_0_default;
var init_GLib_2_0 = __esm({
  "../../gjs/types/@types/Gjs/GLib-2.0.js"() {
    GLib_2_0_default = GLib;
  }
});

// ../../gjs/utils/lib/cli.js
var byteArray, cli;
var init_cli = __esm({
  "../../gjs/utils/lib/cli.js"() {
    init_GLib_2_0();
    byteArray = imports.byteArray;
    cli = (commandLine) => {
      const [res, out, err, status] = GLib_2_0_default.spawn_command_line_sync(commandLine);
      if (err.byteLength)
        throw new Error(byteArray.toString(err));
      return byteArray.toString(out);
    };
  }
});

// ../../gjs/utils/lib/fs.js
function existsSync(path2) {
  if (typeof path2 !== "string" || path2 === "") {
    return false;
  }
  const file = Gio_2_0_default.File.new_for_path(path2);
  return file.query_exists(null);
}
var init_fs = __esm({
  "../../gjs/utils/lib/fs.js"() {
    init_Gio_2_0();
  }
});

// ../../gjs/utils/lib/os.js
var arch, os, vendor, env, target;
var init_os = __esm({
  "../../gjs/utils/lib/os.js"() {
    init_cli();
    arch = cli("uname -o");
    os = () => {
      const os22 = cli("uname -o");
      if (/\bDarwin\b/i.test(os22))
        return "darwin";
      if (/\bLinux\b/i.test(os22))
        return "linux";
      return "win32";
    };
    vendor = "gjsify";
    env = "gnu";
    target = `${arch}-${vendor}-${os()}-${env}`;
  }
});

// ../../gjs/utils/lib/process.js
var init_process = __esm({
  "../../gjs/utils/lib/process.js"() {
    init_Gio_2_0();
    init_GLib_2_0();
  }
});

// ../../gjs/utils/lib/system.js
var File;
var init_system = __esm({
  "../../gjs/utils/lib/system.js"() {
    init_GLib_2_0();
    init_Gio_2_0();
    init_fs();
    File = Gio_2_0_default.File;
  }
});

// ../../gjs/utils/lib/tty.js
var init_tty = __esm({
  "../../gjs/utils/lib/tty.js"() {
    init_fs();
  }
});

// ../../gjs/utils/lib/index.js
var byteArray2, File2, notImplemented, warnNotImplemented;
var init_lib = __esm({
  "../../gjs/utils/lib/index.js"() {
    init_Gjs();
    init_Gio_2_0();
    init_GLib_2_0();
    init_cli();
    init_fs();
    init_os();
    init_process();
    init_system();
    init_tty();
    byteArray2 = imports.byteArray;
    ({ File: File2 } = Gio_2_0_default);
    notImplemented = (msg) => {
      const message = msg ? `Not implemented: ${msg}` : "Not implemented";
      throw new Error(message);
    };
    warnNotImplemented = (msg) => {
      const message = msg ? `Not implemented: ${msg}` : "Not implemented";
      console.warn(message);
      return message;
    };
  }
});

// ../../../node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../../../node_modules/has-symbols/shams.js"(exports2, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../../node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "../../../node_modules/has-tostringtag/shams.js"(exports2, module) {
    "use strict";
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// ../../../node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../../../node_modules/has-symbols/index.js"(exports2, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../../../node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "../../../node_modules/function-bind/implementation.js"(exports2, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice3 = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target2 = this;
      if (typeof target2 !== "function" || toStr.call(target2) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target2);
      }
      var args = slice3.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target2.apply(
            this,
            args.concat(slice3.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target2.apply(
            that,
            args.concat(slice3.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target2.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target2.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target2.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../../../node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../../../node_modules/function-bind/index.js"(exports2, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// ../../../node_modules/has/src/index.js
var require_src = __commonJS({
  "../../../node_modules/has/src/index.js"(exports2, module) {
    "use strict";
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// ../../../node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../../../node_modules/get-intrinsic/index.js"(exports2, module) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match3, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match3;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../../../node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../../../node_modules/call-bind/index.js"(exports2, module) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// ../../../node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "../../../node_modules/call-bind/callBound.js"(exports2, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic2(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// ../../../node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "../../../node_modules/is-arguments/index.js"(exports2, module) {
    "use strict";
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// ../../../node_modules/is-generator-function/index.js
var require_is_generator_function = __commonJS({
  "../../../node_modules/is-generator-function/index.js"(exports2, module) {
    "use strict";
    var toStr = Object.prototype.toString;
    var fnToStr = Function.prototype.toString;
    var isFnRegex = /^\s*(?:function)?\*/;
    var hasToStringTag = require_shams2()();
    var getProto = Object.getPrototypeOf;
    var getGeneratorFunc = function() {
      if (!hasToStringTag) {
        return false;
      }
      try {
        return Function("return function*() {}")();
      } catch (e) {
      }
    };
    var GeneratorFunction;
    module.exports = function isGeneratorFunction6(fn) {
      if (typeof fn !== "function") {
        return false;
      }
      if (isFnRegex.test(fnToStr.call(fn))) {
        return true;
      }
      if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === "[object GeneratorFunction]";
      }
      if (!getProto) {
        return false;
      }
      if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
      }
      return getProto(fn) === GeneratorFunction;
    };
  }
});

// ../../../node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "../../../node_modules/is-callable/index.js"(exports2, module) {
    "use strict";
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// ../../../node_modules/for-each/index.js
var require_for_each = __commonJS({
  "../../../node_modules/for-each/index.js"(exports2, module) {
    "use strict";
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty3 = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty3.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty3.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    var forEach2 = function forEach3(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (toStr.call(list) === "[object Array]") {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
    module.exports = forEach2;
  }
});

// ../../../node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "../../../node_modules/available-typed-arrays/index.js"(exports2, module) {
    "use strict";
    var possibleNames = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray"
    ];
    var g = typeof globalThis === "undefined" ? globalThis : globalThis;
    module.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// ../../../node_modules/gopd/index.js
var require_gopd = __commonJS({
  "../../../node_modules/gopd/index.js"(exports2, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// ../../../node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "../../../node_modules/is-typed-array/index.js"(exports2, module) {
    "use strict";
    var forEach2 = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var gOPD = require_gopd();
    var g = typeof globalThis === "undefined" ? globalThis : globalThis;
    var typedArrays = availableTypedArrays();
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf3(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach2(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var anyTrue = false;
      forEach2(toStrTags, function(getter, typedArray) {
        if (!anyTrue) {
          try {
            anyTrue = getter.call(value) === typedArray;
          } catch (e) {
          }
        }
      });
      return anyTrue;
    };
    module.exports = function isTypedArray4(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
      }
      if (!gOPD) {
        return false;
      }
      return tryTypedArrays(value);
    };
  }
});

// ../../../node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "../../../node_modules/which-typed-array/index.js"(exports2, module) {
    "use strict";
    var forEach2 = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var gOPD = require_gopd();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? globalThis : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach2(typedArrays, function(typedArray) {
        if (typeof g[typedArray] === "function") {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var foundName = false;
      forEach2(toStrTags, function(getter, typedArray) {
        if (!foundName) {
          try {
            var name = getter.call(value);
            if (name === typedArray) {
              foundName = name;
            }
          } catch (e) {
          }
        }
      });
      return foundName;
    };
    var isTypedArray4 = require_is_typed_array();
    module.exports = function whichTypedArray2(value) {
      if (!isTypedArray4(value)) {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        return $slice($toString(value), 8, -1);
      }
      return tryTypedArrays(value);
    };
  }
});

// ../../node/util/lib/esm/types.js
var types_exports = {};
__export(types_exports, {
  isAnyArrayBuffer: () => isAnyArrayBuffer,
  isArgumentsObject: () => import_is_arguments.default,
  isArray: () => isArray,
  isArrayBuffer: () => isArrayBuffer,
  isArrayBufferView: () => isArrayBufferView,
  isAsyncFunction: () => isAsyncFunction,
  isBigInt64Array: () => isBigInt64Array,
  isBigIntObject: () => isBigIntObject,
  isBigUint64Array: () => isBigUint64Array,
  isBoolean: () => isBoolean,
  isBooleanObject: () => isBooleanObject,
  isBoxedPrimitive: () => isBoxedPrimitive,
  isDataView: () => isDataView,
  isDate: () => isDate,
  isError: () => isError,
  isExternal: () => isExternal,
  isFloat32Array: () => isFloat32Array,
  isFloat64Array: () => isFloat64Array,
  isGeneratorFunction: () => import_is_generator_function.default,
  isGeneratorObject: () => isGeneratorObject,
  isInt16Array: () => isInt16Array,
  isInt32Array: () => isInt32Array,
  isInt8Array: () => isInt8Array,
  isMap: () => isMap,
  isMapIterator: () => isMapIterator,
  isModuleNamespaceObject: () => isModuleNamespaceObject,
  isNativeError: () => isNativeError,
  isNull: () => isNull,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isNumberObject: () => isNumberObject,
  isObject: () => isObject,
  isPromise: () => isPromise,
  isProxy: () => isProxy,
  isRegExp: () => isRegExp,
  isSet: () => isSet,
  isSetIterator: () => isSetIterator,
  isSharedArrayBuffer: () => isSharedArrayBuffer,
  isString: () => isString,
  isStringObject: () => isStringObject,
  isSymbol: () => isSymbol,
  isSymbolObject: () => isSymbolObject,
  isTypedArray: () => import_is_typed_array.default,
  isUint16Array: () => isUint16Array,
  isUint32Array: () => isUint32Array,
  isUint8Array: () => isUint8Array,
  isUint8ClampedArray: () => isUint8ClampedArray,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap,
  isWeakSet: () => isWeakSet,
  isWebAssemblyCompiledModule: () => isWebAssemblyCompiledModule
});
function uncurryThis(f) {
  return f.call.bind(f);
}
function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== "object") {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch (e) {
    return false;
  }
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isSymbol(arg) {
  return typeof arg === "symbol";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === "[object RegExp]";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isPromise(input) {
  return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
}
function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }
  return (0, import_is_typed_array.default)(value) || isDataView(value);
}
function isUint8Array(value) {
  return (0, import_which_typed_array.default)(value) === "Uint8Array";
}
function isUint8ClampedArray(value) {
  return (0, import_which_typed_array.default)(value) === "Uint8ClampedArray";
}
function isUint16Array(value) {
  return (0, import_which_typed_array.default)(value) === "Uint16Array";
}
function isUint32Array(value) {
  return (0, import_which_typed_array.default)(value) === "Uint32Array";
}
function isInt8Array(value) {
  return (0, import_which_typed_array.default)(value) === "Int8Array";
}
function isInt16Array(value) {
  return (0, import_which_typed_array.default)(value) === "Int16Array";
}
function isInt32Array(value) {
  return (0, import_which_typed_array.default)(value) === "Int32Array";
}
function isFloat32Array(value) {
  return (0, import_which_typed_array.default)(value) === "Float32Array";
}
function isFloat64Array(value) {
  return (0, import_which_typed_array.default)(value) === "Float64Array";
}
function isBigInt64Array(value) {
  return (0, import_which_typed_array.default)(value) === "BigInt64Array";
}
function isBigUint64Array(value) {
  return (0, import_which_typed_array.default)(value) === "BigUint64Array";
}
function isMapToString(value) {
  return ObjectToString(value) === "[object Map]";
}
function isMap(value) {
  if (typeof Map === "undefined") {
    return false;
  }
  return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
function isSetToString(value) {
  return ObjectToString(value) === "[object Set]";
}
function isSet(value) {
  if (typeof Set === "undefined") {
    return false;
  }
  return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
function isWeakMapToString(value) {
  return ObjectToString(value) === "[object WeakMap]";
}
function isWeakMap(value) {
  if (typeof WeakMap === "undefined") {
    return false;
  }
  return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
function isWeakSetToString(value) {
  return ObjectToString(value) === "[object WeakSet]";
}
function isWeakSet(value) {
  return isWeakSetToString(value);
}
function isArrayBufferToString(value) {
  return ObjectToString(value) === "[object ArrayBuffer]";
}
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === "undefined") {
    return false;
  }
  return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
function isDataViewToString(value) {
  return ObjectToString(value) === "[object DataView]";
}
function isDataView(value) {
  if (typeof DataView === "undefined") {
    return false;
  }
  return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === "[object SharedArrayBuffer]";
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === "undefined") {
    return false;
  }
  if (typeof isSharedArrayBufferToString.working === "undefined") {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy(1));
  }
  return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
function isAsyncFunction(value) {
  return ObjectToString(value) === "[object AsyncFunction]";
}
function isMapIterator(value) {
  return ObjectToString(value) === "[object Map Iterator]";
}
function isSetIterator(value) {
  return ObjectToString(value) === "[object Set Iterator]";
}
function isGeneratorObject(value) {
  return ObjectToString(value) === "[object Generator]";
}
function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === "[object WebAssembly.Module]";
}
function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
function isBoxedPrimitive(value) {
  return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
function isProxy(value) {
  warnNotImplemented("node.util.types.isProxy");
  return false;
}
function isExternal(value) {
  warnNotImplemented("node.util.types.isExternal");
  return false;
}
function isModuleNamespaceObject(value) {
  warnNotImplemented("node.util.types.isModuleNamespaceObject");
  return false;
}
var import_is_arguments, import_is_generator_function, import_which_typed_array, import_is_typed_array, BigIntSupported, SymbolSupported, ObjectToString, numberValue, stringValue, booleanValue, bigIntValue, symbolValue, isNativeError, SharedArrayBufferCopy;
var init_types = __esm({
  "../../node/util/lib/esm/types.js"() {
    init_lib();
    import_is_arguments = __toESM(require_is_arguments());
    import_is_generator_function = __toESM(require_is_generator_function());
    import_which_typed_array = __toESM(require_which_typed_array());
    import_is_typed_array = __toESM(require_is_typed_array());
    BigIntSupported = typeof BigInt !== "undefined";
    SymbolSupported = typeof Symbol !== "undefined";
    ObjectToString = uncurryThis(Object.prototype.toString);
    numberValue = uncurryThis(Number.prototype.valueOf);
    stringValue = uncurryThis(String.prototype.valueOf);
    booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    if (SymbolSupported) {
      symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    isNativeError = isError;
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer(1));
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
  }
});

// ../../node/util/lib/esm/inherits.js
var init_inherits = __esm({
  "../../node/util/lib/esm/inherits.js"() {
  }
});

// ../../node/util/lib/esm/get-system-error-name.js
function getSystemErrorName(code) {
  if (typeof code !== "number") {
    throw new codes.ERR_INVALID_ARG_TYPE("err", "number", code);
  }
  if (code >= 0 || !Number.isSafeInteger(code)) {
    throw new codes.ERR_OUT_OF_RANGE("err", "a negative integer", code);
  }
  const result = errorMap.get(code)?.[0];
  if (!result) {
    return `Unknown system error ${code}`;
  }
  return result;
}
var init_get_system_error_name = __esm({
  "../../node/util/lib/esm/get-system-error-name.js"() {
    init_lib2();
  }
});

// ../../node/util/lib/esm/index.js
function inspect(object, opts, ...args) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = inspectDefaultOptions.showHidden;
  if (isUndefined(ctx.depth))
    ctx.depth = inspectDefaultOptions.depth;
  if (isUndefined(ctx.colors))
    ctx.colors = inspectDefaultOptions.colors;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = inspectDefaultOptions.customInspect;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, object, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys3 = Object.keys(value);
  var visibleKeys = arrayToHash(keys3);
  if (ctx.showHidden) {
    keys3 = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys3.indexOf("message") >= 0 || keys3.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys3.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base = "", array = false, braces = ["{", "}"];
  if (isArray(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction(value)) {
    var n = value.name ? ": " + value.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base = " " + formatError(value);
  }
  if (keys3.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys3);
  } else {
    output = keys3.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys3) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(
        ctx,
        value,
        recurseTimes,
        visibleKeys,
        String(i),
        true
      ));
    } else {
      output.push("");
    }
  }
  keys3.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(
        ctx,
        value,
        recurseTimes,
        visibleKeys,
        key,
        true
      ));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").slice(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.slice(1, -1);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length2 = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf("\n") >= 0)
      numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length2 > 60) {
    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
function isFunction(arg) {
  return typeof arg === "function";
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var getOwnPropertyDescriptors, debugs, debugEnvRegex, debugEnv2, debuglog, inspectDefaultOptions, _extend, kCustomPromisifiedSymbol, promisify, TextDecoder2, TextEncoder2;
var init_esm = __esm({
  "../../node/util/lib/esm/index.js"() {
    init_is_buffer();
    init_types();
    init_inherits();
    init_get_system_error_name();
    init_types();
    getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys3 = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys3.length; i++) {
        descriptors[keys3[i]] = Object.getOwnPropertyDescriptor(obj, keys3[i]);
      }
      return descriptors;
    };
    debugs = {};
    debugEnvRegex = /^$/;
    if (globalThis.process?.env.NODE_DEBUG) {
      debugEnv2 = process.env.NODE_DEBUG;
      debugEnv2 = debugEnv2.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv2 + "$", "i");
    }
    debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid2 = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid2, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    inspectDefaultOptions = {
      showHidden: false,
      depth: 2,
      colors: false,
      customInspect: true,
      showProxy: false,
      maxArrayLength: 100,
      maxStringLength: 1e4,
      breakLength: 80,
      compact: 3,
      sorted: false,
      getters: false
    };
    inspect.defaultOptions = inspectDefaultOptions;
    _extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys3 = Object.keys(add);
      var i = keys3.length;
      while (i--) {
        origin[keys3[i]] = add[keys3[i]];
      }
      return origin;
    };
    kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    promisify = function promisify2(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var ofn = original[kCustomPromisifiedSymbol];
        if (typeof ofn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(ofn, kCustomPromisifiedSymbol, {
          value: ofn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return ofn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve3, reject) {
          promiseResolve = resolve3;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol)
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
      return Object.defineProperties(
        fn,
        getOwnPropertyDescriptors(original)
      );
    };
    promisify.custom = kCustomPromisifiedSymbol;
    TextDecoder2 = globalThis.TextDecoder;
    TextEncoder2 = globalThis.TextEncoder;
  }
});

// ../../node/node-internal/lib/error_codes.js
var codes;
var init_error_codes = __esm({
  "../../node/node-internal/lib/error_codes.js"() {
    codes = {};
  }
});

// ../../node/node-internal/lib/internal_binding/_winerror.js
var init_winerror = __esm({
  "../../node/node-internal/lib/internal_binding/_winerror.js"() {
  }
});

// ../../node/node-internal/lib/internal_binding/_libuv_winerror.js
var init_libuv_winerror = __esm({
  "../../node/node-internal/lib/internal_binding/_libuv_winerror.js"() {
    init_winerror();
  }
});

// ../../node/node-internal/lib/internal_binding/constants.js
var os2;
var init_constants = __esm({
  "../../node/node-internal/lib/internal_binding/constants.js"() {
    os2 = {
      UV_UDP_IPV6ONLY: 1,
      UV_UDP_PARTIAL: 2,
      UV_UDP_REUSEADDR: 4,
      UV_UDP_MMSG_CHUNK: 8,
      UV_UDP_MMSG_FREE: 16,
      UV_UDP_LINUX_RECVERR: 32,
      UV_UDP_RECVMMSG: 256,
      dlopen: {
        RTLD_LAZY: 1,
        RTLD_NOW: 2,
        RTLD_GLOBAL: 8,
        RTLD_LOCAL: 4
      },
      errno: {
        E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 48,
        EADDRNOTAVAIL: 49,
        EAFNOSUPPORT: 47,
        EAGAIN: 35,
        EALREADY: 37,
        EBADF: 9,
        EBADMSG: 94,
        EBUSY: 16,
        ECANCELED: 89,
        ECHILD: 10,
        ECONNABORTED: 53,
        ECONNREFUSED: 61,
        ECONNRESET: 54,
        EDEADLK: 11,
        EDESTADDRREQ: 39,
        EDOM: 33,
        EDQUOT: 69,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 65,
        EIDRM: 90,
        EILSEQ: 92,
        EINPROGRESS: 36,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 56,
        EISDIR: 21,
        ELOOP: 62,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 40,
        EMULTIHOP: 95,
        ENAMETOOLONG: 63,
        ENETDOWN: 50,
        ENETRESET: 52,
        ENETUNREACH: 51,
        ENFILE: 23,
        ENOBUFS: 55,
        ENODATA: 96,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 77,
        ENOLINK: 97,
        ENOMEM: 12,
        ENOMSG: 91,
        ENOPROTOOPT: 42,
        ENOSPC: 28,
        ENOSR: 98,
        ENOSTR: 99,
        ENOSYS: 78,
        ENOTCONN: 57,
        ENOTDIR: 20,
        ENOTEMPTY: 66,
        ENOTSOCK: 38,
        ENOTSUP: 45,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 102,
        EOVERFLOW: 84,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 100,
        EPROTONOSUPPORT: 43,
        EPROTOTYPE: 41,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ESTALE: 70,
        ETIME: 101,
        ETIMEDOUT: 60,
        ETXTBSY: 26,
        EWOULDBLOCK: 35,
        EXDEV: 18
      },
      signals: {
        SIGHUP: 1,
        SIGINT: 2,
        SIGQUIT: 3,
        SIGILL: 4,
        SIGTRAP: 5,
        SIGABRT: 6,
        SIGIOT: 6,
        SIGBUS: 10,
        SIGFPE: 8,
        SIGKILL: 9,
        SIGUSR1: 30,
        SIGSEGV: 11,
        SIGUSR2: 31,
        SIGPIPE: 13,
        SIGALRM: 14,
        SIGTERM: 15,
        SIGCHLD: 20,
        SIGCONT: 19,
        SIGSTOP: 17,
        SIGTSTP: 18,
        SIGTTIN: 21,
        SIGBREAK: 21,
        SIGTTOU: 22,
        SIGURG: 16,
        SIGXCPU: 24,
        SIGXFSZ: 25,
        SIGVTALRM: 26,
        SIGPROF: 27,
        SIGWINCH: 28,
        SIGIO: 23,
        SIGINFO: 29,
        SIGSYS: 12,
        SIGEMT: 7,
        SIGPWR: 30,
        SIGSTKFLT: 16
      },
      priority: {
        PRIORITY_LOW: 19,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_NORMAL: 0,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20
      }
    };
  }
});

// ../../node/node-internal/lib/internal_binding/uv.js
var unreachable, osType, UV_EEXIST, UV_ENOENT, codeToErrorWindows, errorToCodeWindows, codeToErrorDarwin, errorToCodeDarwin, codeToErrorLinux, errorToCodeLinux, errorMap, codeMap, UV_EAI_MEMORY, UV_UNKNOWN, UV_EBADF, UV_EINVAL, UV_ENOTSOCK;
var init_uv = __esm({
  "../../node/node-internal/lib/internal_binding/uv.js"() {
    init_libuv_winerror();
    init_constants();
    unreachable = () => {
      throw new Error("unreachable");
    };
    osType = "linux";
    UV_EEXIST = os2.errno.EEXIST;
    UV_ENOENT = os2.errno.ENOENT;
    codeToErrorWindows = [
      [-4093, ["E2BIG", "argument list too long"]],
      [-4092, ["EACCES", "permission denied"]],
      [-4091, ["EADDRINUSE", "address already in use"]],
      [-4090, ["EADDRNOTAVAIL", "address not available"]],
      [-4089, ["EAFNOSUPPORT", "address family not supported"]],
      [-4088, ["EAGAIN", "resource temporarily unavailable"]],
      [-3e3, ["EAI_ADDRFAMILY", "address family not supported"]],
      [-3001, ["EAI_AGAIN", "temporary failure"]],
      [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
      [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
      [-3003, ["EAI_CANCELED", "request canceled"]],
      [-3004, ["EAI_FAIL", "permanent failure"]],
      [-3005, ["EAI_FAMILY", "ai_family not supported"]],
      [-3006, ["EAI_MEMORY", "out of memory"]],
      [-3007, ["EAI_NODATA", "no address"]],
      [-3008, ["EAI_NONAME", "unknown node or service"]],
      [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
      [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
      [-3010, ["EAI_SERVICE", "service not available for socket type"]],
      [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
      [-4084, ["EALREADY", "connection already in progress"]],
      [-4083, ["EBADF", "bad file descriptor"]],
      [-4082, ["EBUSY", "resource busy or locked"]],
      [-4081, ["ECANCELED", "operation canceled"]],
      [-4080, ["ECHARSET", "invalid Unicode character"]],
      [-4079, ["ECONNABORTED", "software caused connection abort"]],
      [-4078, ["ECONNREFUSED", "connection refused"]],
      [-4077, ["ECONNRESET", "connection reset by peer"]],
      [-4076, ["EDESTADDRREQ", "destination address required"]],
      [-4075, ["EEXIST", "file already exists"]],
      [-4074, ["EFAULT", "bad address in system call argument"]],
      [-4036, ["EFBIG", "file too large"]],
      [-4073, ["EHOSTUNREACH", "host is unreachable"]],
      [-4072, ["EINTR", "interrupted system call"]],
      [-4071, ["EINVAL", "invalid argument"]],
      [-4070, ["EIO", "i/o error"]],
      [-4069, ["EISCONN", "socket is already connected"]],
      [-4068, ["EISDIR", "illegal operation on a directory"]],
      [-4067, ["ELOOP", "too many symbolic links encountered"]],
      [-4066, ["EMFILE", "too many open files"]],
      [-4065, ["EMSGSIZE", "message too long"]],
      [-4064, ["ENAMETOOLONG", "name too long"]],
      [-4063, ["ENETDOWN", "network is down"]],
      [-4062, ["ENETUNREACH", "network is unreachable"]],
      [-4061, ["ENFILE", "file table overflow"]],
      [-4060, ["ENOBUFS", "no buffer space available"]],
      [-4059, ["ENODEV", "no such device"]],
      [-4058, ["ENOENT", "no such file or directory"]],
      [-4057, ["ENOMEM", "not enough memory"]],
      [-4056, ["ENONET", "machine is not on the network"]],
      [-4035, ["ENOPROTOOPT", "protocol not available"]],
      [-4055, ["ENOSPC", "no space left on device"]],
      [-4054, ["ENOSYS", "function not implemented"]],
      [-4053, ["ENOTCONN", "socket is not connected"]],
      [-4052, ["ENOTDIR", "not a directory"]],
      [-4051, ["ENOTEMPTY", "directory not empty"]],
      [-4050, ["ENOTSOCK", "socket operation on non-socket"]],
      [-4049, ["ENOTSUP", "operation not supported on socket"]],
      [-4048, ["EPERM", "operation not permitted"]],
      [-4047, ["EPIPE", "broken pipe"]],
      [-4046, ["EPROTO", "protocol error"]],
      [-4045, ["EPROTONOSUPPORT", "protocol not supported"]],
      [-4044, ["EPROTOTYPE", "protocol wrong type for socket"]],
      [-4034, ["ERANGE", "result too large"]],
      [-4043, ["EROFS", "read-only file system"]],
      [-4042, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
      [-4041, ["ESPIPE", "invalid seek"]],
      [-4040, ["ESRCH", "no such process"]],
      [-4039, ["ETIMEDOUT", "connection timed out"]],
      [-4038, ["ETXTBSY", "text file is busy"]],
      [-4037, ["EXDEV", "cross-device link not permitted"]],
      [-4094, ["UNKNOWN", "unknown error"]],
      [-4095, ["EOF", "end of file"]],
      [-4033, ["ENXIO", "no such device or address"]],
      [-4032, ["EMLINK", "too many links"]],
      [-4031, ["EHOSTDOWN", "host is down"]],
      [-4030, ["EREMOTEIO", "remote I/O error"]],
      [-4029, ["ENOTTY", "inappropriate ioctl for device"]],
      [-4028, ["EFTYPE", "inappropriate file type or format"]],
      [-4027, ["EILSEQ", "illegal byte sequence"]]
    ];
    errorToCodeWindows = codeToErrorWindows.map(([status, [error]]) => [error, status]);
    codeToErrorDarwin = [
      [-7, ["E2BIG", "argument list too long"]],
      [-13, ["EACCES", "permission denied"]],
      [-48, ["EADDRINUSE", "address already in use"]],
      [-49, ["EADDRNOTAVAIL", "address not available"]],
      [-47, ["EAFNOSUPPORT", "address family not supported"]],
      [-35, ["EAGAIN", "resource temporarily unavailable"]],
      [-3e3, ["EAI_ADDRFAMILY", "address family not supported"]],
      [-3001, ["EAI_AGAIN", "temporary failure"]],
      [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
      [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
      [-3003, ["EAI_CANCELED", "request canceled"]],
      [-3004, ["EAI_FAIL", "permanent failure"]],
      [-3005, ["EAI_FAMILY", "ai_family not supported"]],
      [-3006, ["EAI_MEMORY", "out of memory"]],
      [-3007, ["EAI_NODATA", "no address"]],
      [-3008, ["EAI_NONAME", "unknown node or service"]],
      [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
      [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
      [-3010, ["EAI_SERVICE", "service not available for socket type"]],
      [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
      [-37, ["EALREADY", "connection already in progress"]],
      [-9, ["EBADF", "bad file descriptor"]],
      [-16, ["EBUSY", "resource busy or locked"]],
      [-89, ["ECANCELED", "operation canceled"]],
      [-4080, ["ECHARSET", "invalid Unicode character"]],
      [-53, ["ECONNABORTED", "software caused connection abort"]],
      [-61, ["ECONNREFUSED", "connection refused"]],
      [-54, ["ECONNRESET", "connection reset by peer"]],
      [-39, ["EDESTADDRREQ", "destination address required"]],
      [-17, ["EEXIST", "file already exists"]],
      [-14, ["EFAULT", "bad address in system call argument"]],
      [-27, ["EFBIG", "file too large"]],
      [-65, ["EHOSTUNREACH", "host is unreachable"]],
      [-4, ["EINTR", "interrupted system call"]],
      [-22, ["EINVAL", "invalid argument"]],
      [-5, ["EIO", "i/o error"]],
      [-56, ["EISCONN", "socket is already connected"]],
      [-21, ["EISDIR", "illegal operation on a directory"]],
      [-62, ["ELOOP", "too many symbolic links encountered"]],
      [-24, ["EMFILE", "too many open files"]],
      [-40, ["EMSGSIZE", "message too long"]],
      [-63, ["ENAMETOOLONG", "name too long"]],
      [-50, ["ENETDOWN", "network is down"]],
      [-51, ["ENETUNREACH", "network is unreachable"]],
      [-23, ["ENFILE", "file table overflow"]],
      [-55, ["ENOBUFS", "no buffer space available"]],
      [-19, ["ENODEV", "no such device"]],
      [-2, ["ENOENT", "no such file or directory"]],
      [-12, ["ENOMEM", "not enough memory"]],
      [-4056, ["ENONET", "machine is not on the network"]],
      [-42, ["ENOPROTOOPT", "protocol not available"]],
      [-28, ["ENOSPC", "no space left on device"]],
      [-78, ["ENOSYS", "function not implemented"]],
      [-57, ["ENOTCONN", "socket is not connected"]],
      [-20, ["ENOTDIR", "not a directory"]],
      [-66, ["ENOTEMPTY", "directory not empty"]],
      [-38, ["ENOTSOCK", "socket operation on non-socket"]],
      [-45, ["ENOTSUP", "operation not supported on socket"]],
      [-1, ["EPERM", "operation not permitted"]],
      [-32, ["EPIPE", "broken pipe"]],
      [-100, ["EPROTO", "protocol error"]],
      [-43, ["EPROTONOSUPPORT", "protocol not supported"]],
      [-41, ["EPROTOTYPE", "protocol wrong type for socket"]],
      [-34, ["ERANGE", "result too large"]],
      [-30, ["EROFS", "read-only file system"]],
      [-58, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
      [-29, ["ESPIPE", "invalid seek"]],
      [-3, ["ESRCH", "no such process"]],
      [-60, ["ETIMEDOUT", "connection timed out"]],
      [-26, ["ETXTBSY", "text file is busy"]],
      [-18, ["EXDEV", "cross-device link not permitted"]],
      [-4094, ["UNKNOWN", "unknown error"]],
      [-4095, ["EOF", "end of file"]],
      [-6, ["ENXIO", "no such device or address"]],
      [-31, ["EMLINK", "too many links"]],
      [-64, ["EHOSTDOWN", "host is down"]],
      [-4030, ["EREMOTEIO", "remote I/O error"]],
      [-25, ["ENOTTY", "inappropriate ioctl for device"]],
      [-79, ["EFTYPE", "inappropriate file type or format"]],
      [-92, ["EILSEQ", "illegal byte sequence"]]
    ];
    errorToCodeDarwin = codeToErrorDarwin.map(([status, [code]]) => [code, status]);
    codeToErrorLinux = [
      [-7, ["E2BIG", "argument list too long"]],
      [-13, ["EACCES", "permission denied"]],
      [-98, ["EADDRINUSE", "address already in use"]],
      [-99, ["EADDRNOTAVAIL", "address not available"]],
      [-97, ["EAFNOSUPPORT", "address family not supported"]],
      [-11, ["EAGAIN", "resource temporarily unavailable"]],
      [-3e3, ["EAI_ADDRFAMILY", "address family not supported"]],
      [-3001, ["EAI_AGAIN", "temporary failure"]],
      [-3002, ["EAI_BADFLAGS", "bad ai_flags value"]],
      [-3013, ["EAI_BADHINTS", "invalid value for hints"]],
      [-3003, ["EAI_CANCELED", "request canceled"]],
      [-3004, ["EAI_FAIL", "permanent failure"]],
      [-3005, ["EAI_FAMILY", "ai_family not supported"]],
      [-3006, ["EAI_MEMORY", "out of memory"]],
      [-3007, ["EAI_NODATA", "no address"]],
      [-3008, ["EAI_NONAME", "unknown node or service"]],
      [-3009, ["EAI_OVERFLOW", "argument buffer overflow"]],
      [-3014, ["EAI_PROTOCOL", "resolved protocol is unknown"]],
      [-3010, ["EAI_SERVICE", "service not available for socket type"]],
      [-3011, ["EAI_SOCKTYPE", "socket type not supported"]],
      [-114, ["EALREADY", "connection already in progress"]],
      [-9, ["EBADF", "bad file descriptor"]],
      [-16, ["EBUSY", "resource busy or locked"]],
      [-125, ["ECANCELED", "operation canceled"]],
      [-4080, ["ECHARSET", "invalid Unicode character"]],
      [-103, ["ECONNABORTED", "software caused connection abort"]],
      [-111, ["ECONNREFUSED", "connection refused"]],
      [-104, ["ECONNRESET", "connection reset by peer"]],
      [-89, ["EDESTADDRREQ", "destination address required"]],
      [-17, ["EEXIST", "file already exists"]],
      [-14, ["EFAULT", "bad address in system call argument"]],
      [-27, ["EFBIG", "file too large"]],
      [-113, ["EHOSTUNREACH", "host is unreachable"]],
      [-4, ["EINTR", "interrupted system call"]],
      [-22, ["EINVAL", "invalid argument"]],
      [-5, ["EIO", "i/o error"]],
      [-106, ["EISCONN", "socket is already connected"]],
      [-21, ["EISDIR", "illegal operation on a directory"]],
      [-40, ["ELOOP", "too many symbolic links encountered"]],
      [-24, ["EMFILE", "too many open files"]],
      [-90, ["EMSGSIZE", "message too long"]],
      [-36, ["ENAMETOOLONG", "name too long"]],
      [-100, ["ENETDOWN", "network is down"]],
      [-101, ["ENETUNREACH", "network is unreachable"]],
      [-23, ["ENFILE", "file table overflow"]],
      [-105, ["ENOBUFS", "no buffer space available"]],
      [-19, ["ENODEV", "no such device"]],
      [-2, ["ENOENT", "no such file or directory"]],
      [-12, ["ENOMEM", "not enough memory"]],
      [-64, ["ENONET", "machine is not on the network"]],
      [-92, ["ENOPROTOOPT", "protocol not available"]],
      [-28, ["ENOSPC", "no space left on device"]],
      [-38, ["ENOSYS", "function not implemented"]],
      [-107, ["ENOTCONN", "socket is not connected"]],
      [-20, ["ENOTDIR", "not a directory"]],
      [-39, ["ENOTEMPTY", "directory not empty"]],
      [-88, ["ENOTSOCK", "socket operation on non-socket"]],
      [-95, ["ENOTSUP", "operation not supported on socket"]],
      [-1, ["EPERM", "operation not permitted"]],
      [-32, ["EPIPE", "broken pipe"]],
      [-71, ["EPROTO", "protocol error"]],
      [-93, ["EPROTONOSUPPORT", "protocol not supported"]],
      [-91, ["EPROTOTYPE", "protocol wrong type for socket"]],
      [-34, ["ERANGE", "result too large"]],
      [-30, ["EROFS", "read-only file system"]],
      [-108, ["ESHUTDOWN", "cannot send after transport endpoint shutdown"]],
      [-29, ["ESPIPE", "invalid seek"]],
      [-3, ["ESRCH", "no such process"]],
      [-110, ["ETIMEDOUT", "connection timed out"]],
      [-26, ["ETXTBSY", "text file is busy"]],
      [-18, ["EXDEV", "cross-device link not permitted"]],
      [-4094, ["UNKNOWN", "unknown error"]],
      [-4095, ["EOF", "end of file"]],
      [-6, ["ENXIO", "no such device or address"]],
      [-31, ["EMLINK", "too many links"]],
      [-112, ["EHOSTDOWN", "host is down"]],
      [-121, ["EREMOTEIO", "remote I/O error"]],
      [-25, ["ENOTTY", "inappropriate ioctl for device"]],
      [-4028, ["EFTYPE", "inappropriate file type or format"]],
      [-84, ["EILSEQ", "illegal byte sequence"]]
    ];
    errorToCodeLinux = codeToErrorLinux.map(([status, [code]]) => [code, status]);
    errorMap = new Map(
      osType === "windows" ? codeToErrorWindows : osType === "darwin" ? codeToErrorDarwin : osType === "linux" ? codeToErrorLinux : unreachable()
    );
    codeMap = new Map(
      osType === "windows" ? errorToCodeWindows : osType === "darwin" ? errorToCodeDarwin : osType === "linux" ? errorToCodeLinux : unreachable()
    );
    UV_EAI_MEMORY = codeMap.get("EAI_MEMORY");
    UV_UNKNOWN = codeMap.get("UNKNOWN");
    UV_EBADF = codeMap.get("EBADF");
    UV_EINVAL = codeMap.get("EINVAL");
    UV_ENOTSOCK = codeMap.get("ENOTSOCK");
  }
});

// ../../node/node-internal/lib/hide_stack_frames.js
function hideStackFrames(fn) {
  const hidden = "__node_internal_" + fn.name;
  Object.defineProperty(fn, "name", { value: hidden });
  return fn;
}
var init_hide_stack_frames = __esm({
  "../../node/node-internal/lib/hide_stack_frames.js"() {
  }
});

// ../../node/node-internal/lib/errors.js
function addNumericalSeparator(val) {
  let res = "";
  let i = val.length;
  const start = val[0] === "-" ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`;
}
function uvErrmapGet(name) {
  return errorMap.get(name);
}
function makeSystemErrorWithCode(key, msgPrfix) {
  return class NodeError extends NodeSystemError {
    constructor(ctx) {
      super(key, ctx, msgPrfix);
    }
  };
}
function createInvalidArgType(name, expected) {
  expected = Array.isArray(expected) ? expected : [expected];
  let msg = "The ";
  if (name.endsWith(" argument")) {
    msg += `${name} `;
  } else {
    const type = name.includes(".") ? "property" : "argument";
    msg += `"${name}" ${type} `;
  }
  msg += "must be ";
  const types2 = [];
  const instances = [];
  const other = [];
  for (const value of expected) {
    if (kTypes.includes(value)) {
      types2.push(value.toLocaleLowerCase());
    } else if (classRegExp.test(value)) {
      instances.push(value);
    } else {
      other.push(value);
    }
  }
  if (instances.length > 0) {
    const pos = types2.indexOf("object");
    if (pos !== -1) {
      types2.splice(pos, 1);
      instances.push("Object");
    }
  }
  if (types2.length > 0) {
    if (types2.length > 2) {
      const last = types2.pop();
      msg += `one of type ${types2.join(", ")}, or ${last}`;
    } else if (types2.length === 2) {
      msg += `one of type ${types2[0]} or ${types2[1]}`;
    } else {
      msg += `of type ${types2[0]}`;
    }
    if (instances.length > 0 || other.length > 0) {
      msg += " or ";
    }
  }
  if (instances.length > 0) {
    if (instances.length > 2) {
      const last = instances.pop();
      msg += `an instance of ${instances.join(", ")}, or ${last}`;
    } else {
      msg += `an instance of ${instances[0]}`;
      if (instances.length === 2) {
        msg += ` or ${instances[1]}`;
      }
    }
    if (other.length > 0) {
      msg += " or ";
    }
  }
  if (other.length > 0) {
    if (other.length > 2) {
      const last = other.pop();
      msg += `one of ${other.join(", ")}, or ${last}`;
    } else if (other.length === 2) {
      msg += `one of ${other[0]} or ${other[1]}`;
    } else {
      if (other[0].toLowerCase() !== other[0]) {
        msg += "an ";
      }
      msg += `${other[0]}`;
    }
  }
  return msg;
}
function invalidArgTypeHelper(input) {
  if (input == null) {
    return ` Received ${input}`;
  }
  if (typeof input === "function" && input.name) {
    return ` Received function ${input.name}`;
  }
  if (typeof input === "object") {
    if (input.constructor && input.constructor.name) {
      return ` Received an instance of ${input.constructor.name}`;
    }
    return ` Received ${inspect(input, { depth: -1 })}`;
  }
  let inspected = inspect(input, { colors: false });
  if (inspected.length > 25) {
    inspected = `${inspected.slice(0, 25)}...`;
  }
  return ` Received type ${typeof input} (${inspected})`;
}
var ENOTDIR, ENOENT, kIsNodeError, classRegExp, kTypes, captureLargerStackTrace, uvExceptionWithHostPort, errnoException, uvUnmappedError, uvException, exceptionWithHostPort, dnsException, NodeErrorAbstraction, NodeError, NodeRangeError, NodeTypeError, NodeSystemError, ERR_FS_EISDIR, ERR_INVALID_ARG_TYPE_RANGE, ERR_INVALID_ARG_TYPE2, ERR_INVALID_ARG_VALUE_RANGE, ERR_INVALID_ARG_VALUE2, ERR_OUT_OF_RANGE2, ERR_BUFFER_OUT_OF_BOUNDS, ERR_IPC_CHANNEL_CLOSED, ERR_SOCKET_BAD_PORT2, ERR_UNKNOWN_ENCODING, genericNodeError;
var init_errors = __esm({
  "../../node/node-internal/lib/errors.js"() {
    init_esm();
    init_error_codes();
    init_uv();
    init_esm3();
    init_constants();
    init_hide_stack_frames();
    ({
      errno: { ENOTDIR, ENOENT }
    } = os2);
    kIsNodeError = Symbol("kIsNodeError");
    classRegExp = /^([A-Z][a-z0-9]*)+$/;
    kTypes = [
      "string",
      "function",
      "number",
      "object",
      "Function",
      "Object",
      "boolean",
      "bigint",
      "symbol"
    ];
    captureLargerStackTrace = hideStackFrames(
      function captureLargerStackTrace2(err) {
        Error.captureStackTrace(err);
        return err;
      }
    );
    uvExceptionWithHostPort = hideStackFrames(
      function uvExceptionWithHostPort2(err, syscall, address, port) {
        const { 0: code, 1: uvmsg } = uvErrmapGet(err) || uvUnmappedError;
        const message = `${syscall} ${code}: ${uvmsg}`;
        let details = "";
        if (port && port > 0) {
          details = ` ${address}:${port}`;
        } else if (address) {
          details = ` ${address}`;
        }
        const ex = new Error(`${message}${details}`);
        ex.code = code;
        ex.errno = err;
        ex.syscall = syscall;
        ex.address = address;
        if (port) {
          ex.port = port;
        }
        return captureLargerStackTrace(ex);
      }
    );
    errnoException = hideStackFrames(function errnoException2(err, syscall, original) {
      const code = getSystemErrorName(err);
      const message = original ? `${syscall} ${code} ${original}` : `${syscall} ${code}`;
      const ex = new Error(message);
      ex.errno = err;
      ex.code = code;
      ex.syscall = syscall;
      return captureLargerStackTrace(ex);
    });
    uvUnmappedError = ["UNKNOWN", "unknown error"];
    uvException = hideStackFrames(function uvException2(ctx) {
      const { 0: code, 1: uvmsg } = uvErrmapGet(ctx.errno) || uvUnmappedError;
      let message = `${code}: ${ctx.message || uvmsg}, ${ctx.syscall}`;
      let path2;
      let dest;
      if (ctx.path) {
        path2 = ctx.path.toString();
        message += ` '${path2}'`;
      }
      if (ctx.dest) {
        dest = ctx.dest.toString();
        message += ` -> '${dest}'`;
      }
      const err = new Error(message);
      for (const prop of Object.keys(ctx)) {
        if (prop === "message" || prop === "path" || prop === "dest") {
          continue;
        }
        err[prop] = ctx[prop];
      }
      err.code = code;
      if (path2) {
        err.path = path2;
      }
      if (dest) {
        err.dest = dest;
      }
      return captureLargerStackTrace(err);
    });
    exceptionWithHostPort = hideStackFrames(
      function exceptionWithHostPort2(err, syscall, address, port, additional) {
        const code = getSystemErrorName(err);
        let details = "";
        if (port && port > 0) {
          details = ` ${address}:${port}`;
        } else if (address) {
          details = ` ${address}`;
        }
        if (additional) {
          details += ` - Local (${additional})`;
        }
        const ex = new Error(`${syscall} ${code}${details}`);
        ex.errno = err;
        ex.code = code;
        ex.syscall = syscall;
        ex.address = address;
        if (port) {
          ex.port = port;
        }
        return captureLargerStackTrace(ex);
      }
    );
    dnsException = hideStackFrames(function(code, syscall, hostname) {
      let errno;
      if (typeof code === "number") {
        errno = code;
        if (code === codeMap.get("EAI_NODATA") || code === codeMap.get("EAI_NONAME")) {
          code = "ENOTFOUND";
        } else {
          code = getSystemErrorName(code);
        }
      }
      const message = `${syscall} ${code}${hostname ? ` ${hostname}` : ""}`;
      const ex = new Error(message);
      ex.errno = errno;
      ex.code = code;
      ex.syscall = syscall;
      if (hostname) {
        ex.hostname = hostname;
      }
      return captureLargerStackTrace(ex);
    });
    NodeErrorAbstraction = class extends Error {
      constructor(name, code, message) {
        super(message);
        this.code = code;
        this.name = name;
        this.stack = this.stack && `${name} [${this.code}]${this.stack.slice(20)}`;
      }
      toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
      }
    };
    NodeError = class extends NodeErrorAbstraction {
      constructor(code, message) {
        super(Error.prototype.name, code, message);
      }
    };
    NodeRangeError = class extends NodeErrorAbstraction {
      constructor(code, message) {
        super(RangeError.prototype.name, code, message);
        Object.setPrototypeOf(this, RangeError.prototype);
        this.toString = function() {
          return `${this.name} [${this.code}]: ${this.message}`;
        };
      }
    };
    NodeTypeError = class extends NodeErrorAbstraction {
      constructor(code, message) {
        super(TypeError.prototype.name, code, message);
        Object.setPrototypeOf(this, TypeError.prototype);
        this.toString = function() {
          return `${this.name} [${this.code}]: ${this.message}`;
        };
      }
    };
    NodeSystemError = class extends NodeErrorAbstraction {
      constructor(key, context, msgPrefix) {
        let message = `${msgPrefix}: ${context.syscall} returned ${context.code} (${context.message})`;
        if (context.path !== void 0) {
          message += ` ${context.path}`;
        }
        if (context.dest !== void 0) {
          message += ` => ${context.dest}`;
        }
        super("SystemError", key, message);
        captureLargerStackTrace(this);
        Object.defineProperties(this, {
          [kIsNodeError]: {
            value: true,
            enumerable: false,
            writable: false,
            configurable: true
          },
          info: {
            value: context,
            enumerable: true,
            configurable: true,
            writable: false
          },
          errno: {
            get() {
              return context.errno;
            },
            set: (value) => {
              context.errno = value;
            },
            enumerable: true,
            configurable: true
          },
          syscall: {
            get() {
              return context.syscall;
            },
            set: (value) => {
              context.syscall = value;
            },
            enumerable: true,
            configurable: true
          }
        });
        if (context.path !== void 0) {
          Object.defineProperty(this, "path", {
            get() {
              return context.path;
            },
            set: (value) => {
              context.path = value;
            },
            enumerable: true,
            configurable: true
          });
        }
        if (context.dest !== void 0) {
          Object.defineProperty(this, "dest", {
            get() {
              return context.dest;
            },
            set: (value) => {
              context.dest = value;
            },
            enumerable: true,
            configurable: true
          });
        }
      }
      toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
      }
    };
    ERR_FS_EISDIR = makeSystemErrorWithCode(
      "ERR_FS_EISDIR",
      "Path is a directory"
    );
    ERR_INVALID_ARG_TYPE_RANGE = class extends NodeRangeError {
      constructor(name, expected, actual) {
        const msg = createInvalidArgType(name, expected);
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`);
      }
    };
    ERR_INVALID_ARG_TYPE2 = class extends NodeTypeError {
      constructor(name, expected, actual) {
        const msg = createInvalidArgType(name, expected);
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`);
      }
    };
    ERR_INVALID_ARG_TYPE2.RangeError = ERR_INVALID_ARG_TYPE_RANGE;
    ERR_INVALID_ARG_VALUE_RANGE = class extends NodeRangeError {
      constructor(name, value, reason = "is invalid") {
        const type = name.includes(".") ? "property" : "argument";
        const inspected = inspect(value);
        super(
          "ERR_INVALID_ARG_VALUE",
          `The ${type} '${name}' ${reason}. Received ${inspected}`
        );
      }
    };
    ERR_INVALID_ARG_VALUE2 = class extends NodeTypeError {
      constructor(name, value, reason = "is invalid") {
        const type = name.includes(".") ? "property" : "argument";
        const inspected = inspect(value);
        super(
          "ERR_INVALID_ARG_VALUE",
          `The ${type} '${name}' ${reason}. Received ${inspected}`
        );
      }
    };
    ERR_INVALID_ARG_VALUE2.RangeError = ERR_INVALID_ARG_VALUE_RANGE;
    ERR_OUT_OF_RANGE2 = class extends RangeError {
      constructor(str, range, input, replaceDefaultBoolean = false) {
        src_default(range, 'Missing "range" argument');
        let msg = replaceDefaultBoolean ? str : `The value of "${str}" is out of range.`;
        let received;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > 2n ** 32n || input < -(2n ** 32n)) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        } else {
          received = inspect(input);
        }
        msg += ` It must be ${range}. Received ${received}`;
        super(msg);
        this.code = "ERR_OUT_OF_RANGE";
        const { name } = this;
        this.name = `${name} [${this.code}]`;
        this.stack;
        this.name = name;
      }
    };
    ERR_BUFFER_OUT_OF_BOUNDS = class extends NodeRangeError {
      constructor(name) {
        super(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          name ? `"${name}" is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        );
      }
    };
    ERR_IPC_CHANNEL_CLOSED = class extends NodeError {
      constructor() {
        super("ERR_IPC_CHANNEL_CLOSED", `Channel closed`);
      }
    };
    ERR_SOCKET_BAD_PORT2 = class extends NodeRangeError {
      constructor(name, port, allowZero = true) {
        src_default(
          typeof allowZero === "boolean",
          "The 'allowZero' argument must be of type boolean."
        );
        const operator = allowZero ? ">=" : ">";
        super(
          "ERR_SOCKET_BAD_PORT",
          `${name} should be ${operator} 0 and < 65536. Received ${port}.`
        );
      }
    };
    ERR_UNKNOWN_ENCODING = class extends NodeTypeError {
      constructor(x) {
        super("ERR_UNKNOWN_ENCODING", `Unknown encoding: ${x}`);
      }
    };
    codes.ERR_IPC_CHANNEL_CLOSED = ERR_IPC_CHANNEL_CLOSED;
    codes.ERR_INVALID_ARG_TYPE = ERR_INVALID_ARG_TYPE2;
    codes.ERR_INVALID_ARG_VALUE = ERR_INVALID_ARG_VALUE2;
    codes.ERR_OUT_OF_RANGE = ERR_OUT_OF_RANGE2;
    codes.ERR_SOCKET_BAD_PORT = ERR_SOCKET_BAD_PORT2;
    codes.ERR_BUFFER_OUT_OF_BOUNDS = ERR_BUFFER_OUT_OF_BOUNDS;
    codes.ERR_UNKNOWN_ENCODING = ERR_UNKNOWN_ENCODING;
    genericNodeError = hideStackFrames(
      function genericNodeError2(message, errorProperties) {
        const err = new Error(message);
        Object.assign(err, errorProperties);
        return err;
      }
    );
  }
});

// ../../node/node-internal/lib/normalize_encoding.js
var init_normalize_encoding = __esm({
  "../../node/node-internal/lib/normalize_encoding.js"() {
  }
});

// ../../node/node-internal/lib/internal_binding/types.js
var types_exports2 = {};
__export(types_exports2, {
  default: () => types_default,
  isAnyArrayBuffer: () => isAnyArrayBuffer2,
  isArgumentsObject: () => isArgumentsObject2,
  isArrayBuffer: () => isArrayBuffer2,
  isAsyncFunction: () => isAsyncFunction2,
  isBigIntObject: () => isBigIntObject2,
  isBooleanObject: () => isBooleanObject2,
  isBoxedPrimitive: () => isBoxedPrimitive2,
  isDataView: () => isDataView2,
  isDate: () => isDate2,
  isGeneratorFunction: () => isGeneratorFunction2,
  isGeneratorObject: () => isGeneratorObject2,
  isMap: () => isMap2,
  isMapIterator: () => isMapIterator2,
  isModuleNamespaceObject: () => isModuleNamespaceObject2,
  isNativeError: () => isNativeError2,
  isNumberObject: () => isNumberObject2,
  isPromise: () => isPromise2,
  isRegExp: () => isRegExp2,
  isSet: () => isSet2,
  isSetIterator: () => isSetIterator2,
  isSharedArrayBuffer: () => isSharedArrayBuffer2,
  isStringObject: () => isStringObject2,
  isSymbolObject: () => isSymbolObject2,
  isWeakMap: () => isWeakMap2,
  isWeakSet: () => isWeakSet2
});
function isAnyArrayBuffer2(value) {
  return _isObjectLike(value) && (_toString.call(value) === "[object ArrayBuffer]" || _toString.call(value) === "[object SharedArrayBuffer]");
}
function isArgumentsObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Arguments]";
}
function isArrayBuffer2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object ArrayBuffer]";
}
function isAsyncFunction2(value) {
  return _isFunctionLike(value) && _toString.call(value) === "[object AsyncFunction]";
}
function isBooleanObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Boolean]";
}
function isBoxedPrimitive2(value) {
  return isBooleanObject2(value) || isStringObject2(value) || isNumberObject2(value) || isSymbolObject2(value) || isBigIntObject2(value);
}
function isDataView2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object DataView]";
}
function isDate2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Date]";
}
function isGeneratorFunction2(value) {
  return _isFunctionLike(value) && _toString.call(value) === "[object GeneratorFunction]";
}
function isGeneratorObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Generator]";
}
function isMap2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Map]";
}
function isMapIterator2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Map Iterator]";
}
function isModuleNamespaceObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Module]";
}
function isNativeError2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Error]";
}
function isNumberObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Number]";
}
function isBigIntObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object BigInt]";
}
function isPromise2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Promise]";
}
function isRegExp2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object RegExp]";
}
function isSet2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Set]";
}
function isSetIterator2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Set Iterator]";
}
function isSharedArrayBuffer2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object SharedArrayBuffer]";
}
function isStringObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object String]";
}
function isSymbolObject2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object Symbol]";
}
function isWeakMap2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object WeakMap]";
}
function isWeakSet2(value) {
  return _isObjectLike(value) && _toString.call(value) === "[object WeakSet]";
}
var _toString, _isObjectLike, _isFunctionLike, types_default;
var init_types2 = __esm({
  "../../node/node-internal/lib/internal_binding/types.js"() {
    _toString = Object.prototype.toString;
    _isObjectLike = (value) => value !== null && typeof value === "object";
    _isFunctionLike = (value) => value !== null && typeof value === "function";
    types_default = {
      isAsyncFunction: isAsyncFunction2,
      isGeneratorFunction: isGeneratorFunction2,
      isAnyArrayBuffer: isAnyArrayBuffer2,
      isArrayBuffer: isArrayBuffer2,
      isArgumentsObject: isArgumentsObject2,
      isBoxedPrimitive: isBoxedPrimitive2,
      isDataView: isDataView2,
      isMap: isMap2,
      isMapIterator: isMapIterator2,
      isModuleNamespaceObject: isModuleNamespaceObject2,
      isNativeError: isNativeError2,
      isPromise: isPromise2,
      isSet: isSet2,
      isSetIterator: isSetIterator2,
      isWeakMap: isWeakMap2,
      isWeakSet: isWeakSet2,
      isRegExp: isRegExp2,
      isDate: isDate2,
      isStringObject: isStringObject2,
      isNumberObject: isNumberObject2,
      isBooleanObject: isBooleanObject2,
      isBigIntObject: isBigIntObject2
    };
  }
});

// ../../node/node-internal/lib/crypto/constants.js
var kHandle, kKeyObject;
var init_constants2 = __esm({
  "../../node/node-internal/lib/crypto/constants.js"() {
    kHandle = Symbol("kHandle");
    kKeyObject = Symbol("kKeyObject");
  }
});

// ../../node/node-internal/lib/crypto/_keys.js
var kKeyType;
var init_keys = __esm({
  "../../node/node-internal/lib/crypto/_keys.js"() {
    init_constants2();
    kKeyType = Symbol("kKeyType");
  }
});

// ../../node/node-internal/lib/util/types.js
function isArrayBufferView2(value) {
  return ArrayBuffer.isView(value);
}
function isFloat32Array2(value) {
  return _getTypedArrayToStringTag.call(value) === "Float32Array";
}
function isFloat64Array2(value) {
  return _getTypedArrayToStringTag.call(value) === "Float64Array";
}
function isTypedArray2(value) {
  return _getTypedArrayToStringTag.call(value) !== void 0;
}
var _getTypedArrayToStringTag, isDate3, isArgumentsObject3, isBigIntObject3, isBooleanObject3, isNumberObject3, isStringObject3, isSymbolObject3, isNativeError3, isRegExp3, isAsyncFunction3, isGeneratorFunction3, isGeneratorObject3, isPromise3, isMap3, isSet3, isMapIterator3, isSetIterator3, isWeakMap3, isWeakSet3, isArrayBuffer3, isDataView3, isSharedArrayBuffer3, isModuleNamespaceObject3, isAnyArrayBuffer3, isBoxedPrimitive3;
var init_types3 = __esm({
  "../../node/node-internal/lib/util/types.js"() {
    init_types2();
    init_keys();
    _getTypedArrayToStringTag = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(Uint8Array).prototype,
      Symbol.toStringTag
    ).get;
    ({
      isDate: isDate3,
      isArgumentsObject: isArgumentsObject3,
      isBigIntObject: isBigIntObject3,
      isBooleanObject: isBooleanObject3,
      isNumberObject: isNumberObject3,
      isStringObject: isStringObject3,
      isSymbolObject: isSymbolObject3,
      isNativeError: isNativeError3,
      isRegExp: isRegExp3,
      isAsyncFunction: isAsyncFunction3,
      isGeneratorFunction: isGeneratorFunction3,
      isGeneratorObject: isGeneratorObject3,
      isPromise: isPromise3,
      isMap: isMap3,
      isSet: isSet3,
      isMapIterator: isMapIterator3,
      isSetIterator: isSetIterator3,
      isWeakMap: isWeakMap3,
      isWeakSet: isWeakSet3,
      isArrayBuffer: isArrayBuffer3,
      isDataView: isDataView3,
      isSharedArrayBuffer: isSharedArrayBuffer3,
      isModuleNamespaceObject: isModuleNamespaceObject3,
      isAnyArrayBuffer: isAnyArrayBuffer3,
      isBoxedPrimitive: isBoxedPrimitive3
    } = types_exports2);
  }
});

// ../../node/node-internal/lib/validators.js
function isInt32(value) {
  return value === (value | 0);
}
function isUint32(value) {
  return value === value >>> 0;
}
var validateBuffer, validateInteger, validateObject, validateInt32, validateUint32, validateOneOf, validateAbortSignal, validateFunction, validateArray;
var init_validators = __esm({
  "../../node/node-internal/lib/validators.js"() {
    init_hide_stack_frames();
    init_error_codes();
    init_types3();
    init_normalize_encoding();
    validateBuffer = hideStackFrames((buffer, name = "buffer") => {
      if (!isArrayBufferView2(buffer)) {
        throw new codes.ERR_INVALID_ARG_TYPE(
          name,
          ["Buffer", "TypedArray", "DataView"],
          buffer
        );
      }
    });
    validateInteger = hideStackFrames(
      (value, name, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
        if (typeof value !== "number") {
          throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
          throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        if (value < min || value > max) {
          throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
        }
      }
    );
    validateObject = hideStackFrames((value, name, options) => {
      const useDefaultOptions = options == null;
      const allowArray = useDefaultOptions ? false : options.allowArray;
      const allowFunction = useDefaultOptions ? false : options.allowFunction;
      const nullable = useDefaultOptions ? false : options.nullable;
      if (!nullable && value === null || !allowArray && Array.isArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Object", value);
      }
    });
    validateInt32 = hideStackFrames(
      (value, name, min = -2147483648, max = 2147483647) => {
        if (!isInt32(value)) {
          if (typeof value !== "number") {
            throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
          }
          if (!Number.isInteger(value)) {
            throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
          }
          throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
        }
        if (value < min || value > max) {
          throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
        }
      }
    );
    validateUint32 = hideStackFrames(
      (value, name, positive) => {
        if (!isUint32(value)) {
          if (typeof value !== "number") {
            throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
          }
          if (!Number.isInteger(value)) {
            throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
          }
          const min = positive ? 1 : 0;
          throw new codes.ERR_OUT_OF_RANGE(
            name,
            `>= ${min} && < 4294967296`,
            value
          );
        }
        if (positive && value === 0) {
          throw new codes.ERR_OUT_OF_RANGE(name, ">= 1 && < 4294967296", value);
        }
      }
    );
    validateOneOf = hideStackFrames(
      (value, name, oneOf) => {
        if (!Array.prototype.includes.call(oneOf, value)) {
          const allowed = Array.prototype.join.call(
            Array.prototype.map.call(
              oneOf,
              (v) => typeof v === "string" ? `'${v}'` : String(v)
            ),
            ", "
          );
          const reason = "must be one of: " + allowed;
          throw new codes.ERR_INVALID_ARG_VALUE(name, value, reason);
        }
      }
    );
    validateAbortSignal = hideStackFrames(
      (signal, name) => {
        if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
          throw new codes.ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
        }
      }
    );
    validateFunction = hideStackFrames(
      (value, name) => {
        if (typeof value !== "function") {
          throw new codes.ERR_INVALID_ARG_TYPE(name, "Function", value);
        }
      }
    );
    validateArray = hideStackFrames(
      (value, name, minLength = 0) => {
        if (!Array.isArray(value)) {
          throw new codes.ERR_INVALID_ARG_TYPE(name, "Array", value);
        }
        if (value.length < minLength) {
          const reason = `must be longer than ${minLength}`;
          throw new codes.ERR_INVALID_ARG_VALUE(name, value, reason);
        }
      }
    );
  }
});

// ../../node/node-internal/lib/util.js
function promisify3(original) {
  validateFunction(original, "original");
  if (original[kCustomPromisifiedSymbol2]) {
    const fn2 = original[kCustomPromisifiedSymbol2];
    validateFunction(fn2, "util.promisify.custom");
    return Object.defineProperty(fn2, kCustomPromisifiedSymbol2, {
      value: fn2,
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  const argumentNames = original[kCustomPromisifyArgsSymbol];
  function fn(...args) {
    return new Promise((resolve3, reject) => {
      args.push((err, ...values) => {
        if (err) {
          return reject(err);
        }
        if (argumentNames !== void 0 && values.length > 1) {
          const obj = {};
          for (let i = 0; i < argumentNames.length; i++) {
            obj[argumentNames[i]] = values[i];
          }
          resolve3(obj);
        } else {
          resolve3(values[0]);
        }
      });
      Reflect.apply(original, this, args);
    });
  }
  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  Object.defineProperty(fn, kCustomPromisifiedSymbol2, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(
    fn,
    Object.getOwnPropertyDescriptors(original)
  );
}
var customInspectSymbol, kEnumerableProperty, kEmptyObject, kCustomPromisifiedSymbol2, kCustomPromisifyArgsSymbol;
var init_util = __esm({
  "../../node/node-internal/lib/util.js"() {
    init_validators();
    init_normalize_encoding();
    customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
    kEnumerableProperty = /* @__PURE__ */ Object.create(null);
    kEnumerableProperty.enumerable = true;
    kEmptyObject = Object.freeze(/* @__PURE__ */ Object.create(null));
    kCustomPromisifiedSymbol2 = Symbol.for("nodejs.util.promisify.custom");
    kCustomPromisifyArgsSymbol = Symbol.for(
      "nodejs.util.promisify.customArgs"
    );
    promisify3.custom = kCustomPromisifiedSymbol2;
  }
});

// ../../node/node-internal/lib/index.js
var init_lib2 = __esm({
  "../../node/node-internal/lib/index.js"() {
    init_errors();
    init_hide_stack_frames();
    init_normalize_encoding();
    init_validators();
    init_util();
  }
});

// ../../node/buffer/lib/esm/buffer.deno.js
var buffer_deno_exports = {};
__export(buffer_deno_exports, {
  Blob: () => Blob,
  Buffer: () => Buffer2,
  SlowBuffer: () => SlowBuffer,
  atob: () => atob1,
  btoa: () => btoa,
  constants: () => constants,
  default: () => __default1,
  kMaxLength: () => kMaxLength,
  kStringMaxLength: () => kStringMaxLength
});
function isAnyArrayBuffer4(value) {
  return _isObjectLike2(value) && (_toString2.call(value) === "[object ArrayBuffer]" || _toString2.call(value) === "[object SharedArrayBuffer]");
}
function isArgumentsObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Arguments]";
}
function isArrayBuffer4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object ArrayBuffer]";
}
function isAsyncFunction4(value) {
  return _isFunctionLike2(value) && _toString2.call(value) === "[object AsyncFunction]";
}
function isBooleanObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Boolean]";
}
function isBoxedPrimitive4(value) {
  return isBooleanObject4(value) || isStringObject4(value) || isNumberObject4(value) || isSymbolObject4(value) || isBigIntObject4(value);
}
function isDataView4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object DataView]";
}
function isDate4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Date]";
}
function isGeneratorFunction4(value) {
  return _isFunctionLike2(value) && _toString2.call(value) === "[object GeneratorFunction]";
}
function isGeneratorObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Generator]";
}
function isMap4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Map]";
}
function isMapIterator4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Map Iterator]";
}
function isModuleNamespaceObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Module]";
}
function isNativeError4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Error]";
}
function isNumberObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Number]";
}
function isBigIntObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object BigInt]";
}
function isPromise4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Promise]";
}
function isRegExp4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object RegExp]";
}
function isSet4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Set]";
}
function isSetIterator4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Set Iterator]";
}
function isSharedArrayBuffer4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object SharedArrayBuffer]";
}
function isStringObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object String]";
}
function isSymbolObject4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object Symbol]";
}
function isWeakMap4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object WeakMap]";
}
function isWeakSet4(value) {
  return _isObjectLike2(value) && _toString2.call(value) === "[object WeakSet]";
}
function isArrayBufferView3(value) {
  return ArrayBuffer.isView(value);
}
function isUint8Array2(value) {
  return _getTypedArrayToStringTag2.call(value) === "Uint8Array";
}
function hideStackFrames2(fn) {
  const hidden = "__node_internal_" + fn.name;
  Object.defineProperty(fn, "name", {
    value: hidden
  });
  return fn;
}
function normalizeEncoding2(enc) {
  if (enc == null || enc === "utf8" || enc === "utf-8")
    return "utf8";
  return slowCases2(enc);
}
function slowCases2(enc) {
  switch (enc.length) {
    case 4:
      if (enc === "UTF8")
        return "utf8";
      if (enc === "ucs2" || enc === "UCS2")
        return "utf16le";
      enc = `${enc}`.toLowerCase();
      if (enc === "utf8")
        return "utf8";
      if (enc === "ucs2")
        return "utf16le";
      break;
    case 3:
      if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
        return "hex";
      }
      break;
    case 5:
      if (enc === "ascii")
        return "ascii";
      if (enc === "ucs-2")
        return "utf16le";
      if (enc === "UTF-8")
        return "utf8";
      if (enc === "ASCII")
        return "ascii";
      if (enc === "UCS-2")
        return "utf16le";
      enc = `${enc}`.toLowerCase();
      if (enc === "utf-8")
        return "utf8";
      if (enc === "ascii")
        return "ascii";
      if (enc === "ucs-2")
        return "utf16le";
      break;
    case 6:
      if (enc === "base64")
        return "base64";
      if (enc === "latin1" || enc === "binary")
        return "latin1";
      if (enc === "BASE64")
        return "base64";
      if (enc === "LATIN1" || enc === "BINARY")
        return "latin1";
      enc = `${enc}`.toLowerCase();
      if (enc === "base64")
        return "base64";
      if (enc === "latin1" || enc === "binary")
        return "latin1";
      break;
    case 7:
      if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
        return "utf16le";
      }
      break;
    case 8:
      if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
        return "utf16le";
      }
      break;
    case 9:
      if (enc === "base64url" || enc === "BASE64URL" || `${enc}`.toLowerCase() === "base64url") {
        return "base64url";
      }
      break;
    default:
      if (enc === "")
        return "utf8";
  }
}
function isInt322(value) {
  return value === (value | 0);
}
function isUint322(value) {
  return value === value >>> 0;
}
function promisify4(original) {
  validateFunction2(original, "original");
  if (original[kCustomPromisifiedSymbol3]) {
    const fn = original[kCustomPromisifiedSymbol3];
    validateFunction2(fn, "util.promisify.custom");
    return Object.defineProperty(fn, kCustomPromisifiedSymbol3, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  const argumentNames = original[kCustomPromisifyArgsSymbol2];
  function fn1(...args) {
    return new Promise((resolve3, reject) => {
      args.push((err, ...values) => {
        if (err) {
          return reject(err);
        }
        if (argumentNames !== void 0 && values.length > 1) {
          const obj = {};
          for (let i = 0; i < argumentNames.length; i++) {
            obj[argumentNames[i]] = values[i];
          }
          resolve3(obj);
        } else {
          resolve3(values[0]);
        }
      });
      Reflect.apply(original, this, args);
    });
  }
  Object.setPrototypeOf(fn1, Object.getPrototypeOf(original));
  Object.defineProperty(fn1, kCustomPromisifiedSymbol3, {
    value: fn1,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn1, Object.getOwnPropertyDescriptors(original));
}
function indexOfNeedle(source, needle, start = 0) {
  if (start >= source.length) {
    return -1;
  }
  if (start < 0) {
    start = Math.max(0, source.length + start);
  }
  const s = needle[0];
  for (let i = start; i < source.length; i++) {
    if (source[i] !== s)
      continue;
    const pin = i;
    let matched = 1;
    let j = i;
    while (matched < needle.length) {
      j++;
      if (source[j] !== needle[j - pin]) {
        break;
      }
      matched++;
    }
    if (matched === needle.length) {
      return pin;
    }
  }
  return -1;
}
function numberToBytes(n) {
  if (n === 0)
    return new Uint8Array([
      0
    ]);
  const bytes = [];
  bytes.unshift(n & 255);
  while (n >= 256) {
    n = n >>> 8;
    bytes.unshift(n & 255);
  }
  return new Uint8Array(bytes);
}
function findLastIndex(targetBuffer, buffer, offset) {
  offset = offset > targetBuffer.length ? targetBuffer.length : offset;
  const searchableBuffer = targetBuffer.slice(0, offset + buffer.length);
  const searchableBufferLastIndex = searchableBuffer.length - 1;
  const bufferLastIndex = buffer.length - 1;
  let lastMatchIndex = -1;
  let matches = 0;
  let index = -1;
  for (let x = 0; x <= searchableBufferLastIndex; x++) {
    if (searchableBuffer[searchableBufferLastIndex - x] === buffer[bufferLastIndex - matches]) {
      if (lastMatchIndex === -1) {
        lastMatchIndex = x;
      }
      matches++;
    } else {
      matches = 0;
      if (lastMatchIndex !== -1) {
        x = lastMatchIndex + 1;
        lastMatchIndex = -1;
      }
      continue;
    }
    if (matches === buffer.length) {
      index = x;
      break;
    }
  }
  if (index === -1)
    return index;
  return searchableBufferLastIndex - index;
}
function indexOfBuffer(targetBuffer, buffer, byteOffset, encoding, forwardDirection) {
  if (!Encodings[encoding] === void 0) {
    throw new Error(`Unknown encoding code ${encoding}`);
  }
  if (!forwardDirection) {
    if (byteOffset < 0) {
      byteOffset = targetBuffer.length + byteOffset;
    }
    if (buffer.length === 0) {
      return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length;
    }
    return findLastIndex(targetBuffer, buffer, byteOffset);
  }
  if (buffer.length === 0) {
    return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length;
  }
  return indexOfNeedle(targetBuffer, buffer, byteOffset);
}
function indexOfNumber(targetBuffer, number, byteOffset, forwardDirection) {
  const bytes = numberToBytes(number);
  if (bytes.length > 1) {
    throw new Error("Multi byte number search is not supported");
  }
  return indexOfBuffer(targetBuffer, numberToBytes(number), byteOffset, Encodings.UTF8, forwardDirection);
}
function encode(data) {
  const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
  let result = "", i;
  const l = uint8.length;
  for (i = 2; i < l; i += 3) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc[(uint8[i - 1] & 15) << 2 | uint8[i] >> 6];
    result += base64abc[uint8[i] & 63];
  }
  if (i === l + 1) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc[(uint8[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
function decode(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bytes[i] = binString.charCodeAt(i);
  }
  return bytes;
}
function addPaddingToBase64url(base64url) {
  if (base64url.length % 4 === 2)
    return base64url + "==";
  if (base64url.length % 4 === 3)
    return base64url + "=";
  if (base64url.length % 4 === 1) {
    throw new TypeError("Illegal base64url string!");
  }
  return base64url;
}
function convertBase64urlToBase64(b64url) {
  if (!/^[-_A-Z0-9]*?={0,2}$/i.test(b64url)) {
    throw new TypeError("Failed to decode base64url: invalid character");
  }
  return addPaddingToBase64url(b64url).replace(/\-/g, "+").replace(/_/g, "/");
}
function convertBase64ToBase64url(b64) {
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function encode1(data) {
  return convertBase64ToBase64url(encode(data));
}
function decode1(b64url) {
  return decode(convertBase64urlToBase64(b64url));
}
function asciiToBytes(str) {
  const byteArray3 = [];
  for (let i = 0; i < str.length; ++i) {
    byteArray3.push(str.charCodeAt(i) & 255);
  }
  return new Uint8Array(byteArray3);
}
function base64ToBytes(str) {
  str = base64clean(str);
  str = str.replaceAll("-", "+").replaceAll("_", "/");
  return decode(str);
}
function base64clean(str) {
  str = str.split("=")[0];
  str = str.trim().replace(INVALID_BASE64_RE, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function base64UrlToBytes(str) {
  str = base64clean(str);
  str = str.replaceAll("+", "-").replaceAll("/", "_");
  return decode1(str);
}
function hexToBytes(str) {
  const byteArray3 = new Uint8Array(Math.floor((str || "").length / 2));
  let i;
  for (i = 0; i < byteArray3.length; i++) {
    const a = Number.parseInt(str[i * 2], 16);
    const b = Number.parseInt(str[i * 2 + 1], 16);
    if (Number.isNaN(a) && Number.isNaN(b)) {
      break;
    }
    byteArray3[i] = a << 4 | b;
  }
  return new Uint8Array(i === byteArray3.length ? byteArray3 : byteArray3.slice(0, i));
}
function utf16leToBytes(str, units) {
  let c, hi, lo;
  const byteArray3 = [];
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) {
      break;
    }
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray3.push(lo);
    byteArray3.push(hi);
  }
  return new Uint8Array(byteArray3);
}
function bytesToAscii(bytes) {
  let ret = "";
  for (let i = 0; i < bytes.length; ++i) {
    ret += String.fromCharCode(bytes[i] & 127);
  }
  return ret;
}
function bytesToUtf16le(bytes) {
  let res = "";
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function readUInt48LE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 6);
  }
  return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + (buf[++offset] + last * 2 ** 8) * 2 ** 32;
}
function readUInt40LE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 5);
  }
  return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + last * 2 ** 32;
}
function readUInt24LE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 3);
  }
  return first + buf[++offset] * 2 ** 8 + last * 2 ** 16;
}
function readUInt48BE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 6);
  }
  return (first * 2 ** 8 + buf[++offset]) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt40BE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 5);
  }
  return first * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt24BE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 3);
  }
  return first * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt16BE(offset = 0) {
  validateNumber(offset, "offset");
  const first = this[offset];
  const last = this[offset + 1];
  if (first === void 0 || last === void 0) {
    boundsError(offset, this.length - 2);
  }
  return first * 2 ** 8 + last;
}
function readUInt32BE(offset = 0) {
  validateNumber(offset, "offset");
  const first = this[offset];
  const last = this[offset + 3];
  if (first === void 0 || last === void 0) {
    boundsError(offset, this.length - 4);
  }
  return first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
}
function readDoubleBackwards(buffer, offset = 0) {
  validateNumber(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 7];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buffer.length - 8);
  }
  uInt8Float64Array[7] = first;
  uInt8Float64Array[6] = buffer[++offset];
  uInt8Float64Array[5] = buffer[++offset];
  uInt8Float64Array[4] = buffer[++offset];
  uInt8Float64Array[3] = buffer[++offset];
  uInt8Float64Array[2] = buffer[++offset];
  uInt8Float64Array[1] = buffer[++offset];
  uInt8Float64Array[0] = last;
  return float64Array[0];
}
function readDoubleForwards(buffer, offset = 0) {
  validateNumber(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 7];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buffer.length - 8);
  }
  uInt8Float64Array[0] = first;
  uInt8Float64Array[1] = buffer[++offset];
  uInt8Float64Array[2] = buffer[++offset];
  uInt8Float64Array[3] = buffer[++offset];
  uInt8Float64Array[4] = buffer[++offset];
  uInt8Float64Array[5] = buffer[++offset];
  uInt8Float64Array[6] = buffer[++offset];
  uInt8Float64Array[7] = last;
  return float64Array[0];
}
function writeDoubleForwards(buffer, val, offset = 0) {
  val = +val;
  checkBounds(buffer, offset, 7);
  float64Array[0] = val;
  buffer[offset++] = uInt8Float64Array[0];
  buffer[offset++] = uInt8Float64Array[1];
  buffer[offset++] = uInt8Float64Array[2];
  buffer[offset++] = uInt8Float64Array[3];
  buffer[offset++] = uInt8Float64Array[4];
  buffer[offset++] = uInt8Float64Array[5];
  buffer[offset++] = uInt8Float64Array[6];
  buffer[offset++] = uInt8Float64Array[7];
  return offset;
}
function writeDoubleBackwards(buffer, val, offset = 0) {
  val = +val;
  checkBounds(buffer, offset, 7);
  float64Array[0] = val;
  buffer[offset++] = uInt8Float64Array[7];
  buffer[offset++] = uInt8Float64Array[6];
  buffer[offset++] = uInt8Float64Array[5];
  buffer[offset++] = uInt8Float64Array[4];
  buffer[offset++] = uInt8Float64Array[3];
  buffer[offset++] = uInt8Float64Array[2];
  buffer[offset++] = uInt8Float64Array[1];
  buffer[offset++] = uInt8Float64Array[0];
  return offset;
}
function readFloatBackwards(buffer, offset = 0) {
  validateNumber(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 3];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buffer.length - 4);
  }
  uInt8Float32Array[3] = first;
  uInt8Float32Array[2] = buffer[++offset];
  uInt8Float32Array[1] = buffer[++offset];
  uInt8Float32Array[0] = last;
  return float32Array[0];
}
function readFloatForwards(buffer, offset = 0) {
  validateNumber(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 3];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buffer.length - 4);
  }
  uInt8Float32Array[0] = first;
  uInt8Float32Array[1] = buffer[++offset];
  uInt8Float32Array[2] = buffer[++offset];
  uInt8Float32Array[3] = last;
  return float32Array[0];
}
function writeFloatForwards(buffer, val, offset = 0) {
  val = +val;
  checkBounds(buffer, offset, 3);
  float32Array[0] = val;
  buffer[offset++] = uInt8Float32Array[0];
  buffer[offset++] = uInt8Float32Array[1];
  buffer[offset++] = uInt8Float32Array[2];
  buffer[offset++] = uInt8Float32Array[3];
  return offset;
}
function writeFloatBackwards(buffer, val, offset = 0) {
  val = +val;
  checkBounds(buffer, offset, 3);
  float32Array[0] = val;
  buffer[offset++] = uInt8Float32Array[3];
  buffer[offset++] = uInt8Float32Array[2];
  buffer[offset++] = uInt8Float32Array[1];
  buffer[offset++] = uInt8Float32Array[0];
  return offset;
}
function readInt24LE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 3);
  }
  const val = first + buf[++offset] * 2 ** 8 + last * 2 ** 16;
  return val | (val & 2 ** 23) * 510;
}
function readInt40LE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 5);
  }
  return (last | (last & 2 ** 7) * 33554430) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24;
}
function readInt48LE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 6);
  }
  const val = buf[offset + 4] + last * 2 ** 8;
  return (val | (val & 2 ** 15) * 131070) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24;
}
function readInt24BE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 3);
  }
  const val = first * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
  return val | (val & 2 ** 23) * 510;
}
function readInt48BE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 6);
  }
  const val = buf[++offset] + first * 2 ** 8;
  return (val | (val & 2 ** 15) * 131070) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readInt40BE(buf, offset = 0) {
  validateNumber(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError(offset, buf.length - 5);
  }
  return (first | (first & 2 ** 7) * 33554430) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function byteLengthUtf8(str) {
  return utf8Encoder.encode(str).length;
}
function base64ByteLength(str, bytes) {
  if (str.charCodeAt(bytes - 1) === 61) {
    bytes--;
  }
  if (bytes > 1 && str.charCodeAt(bytes - 1) === 61) {
    bytes--;
  }
  return bytes * 3 >>> 2;
}
function getEncodingOps(encoding) {
  encoding = String(encoding).toLowerCase();
  switch (encoding.length) {
    case 4:
      if (encoding === "utf8")
        return encodingOps.utf8;
      if (encoding === "ucs2")
        return encodingOps.ucs2;
      break;
    case 5:
      if (encoding === "utf-8")
        return encodingOps.utf8;
      if (encoding === "ascii")
        return encodingOps.ascii;
      if (encoding === "ucs-2")
        return encodingOps.ucs2;
      break;
    case 7:
      if (encoding === "utf16le") {
        return encodingOps.utf16le;
      }
      break;
    case 8:
      if (encoding === "utf-16le") {
        return encodingOps.utf16le;
      }
      break;
    case 6:
      if (encoding === "latin1" || encoding === "binary") {
        return encodingOps.latin1;
      }
      if (encoding === "base64")
        return encodingOps.base64;
    case 3:
      if (encoding === "hex") {
        return encodingOps.hex;
      }
      break;
    case 9:
      if (encoding === "base64url") {
        return encodingOps.base64url;
      }
      break;
  }
}
function _copyActual(source, target2, targetStart, sourceStart, sourceEnd) {
  if (sourceEnd - sourceStart > target2.length - targetStart) {
    sourceEnd = sourceStart + target2.length - targetStart;
  }
  let nb = sourceEnd - sourceStart;
  const sourceLen = source.length - sourceStart;
  if (nb > sourceLen) {
    nb = sourceLen;
  }
  if (sourceStart !== 0 || sourceEnd < source.length) {
    source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb);
  }
  target2.set(source, targetStart);
  return nb;
}
function boundsError(value, length2, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type);
    throw new codes2.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
  }
  if (length2 < 0) {
    throw new codes2.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new codes2.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length2}`, value);
}
function validateNumber(value, name) {
  if (typeof value !== "number") {
    throw new codes2.ERR_INVALID_ARG_TYPE(name, "number", value);
  }
}
function checkBounds(buf, offset, byteLength22) {
  validateNumber(offset, "offset");
  if (buf[offset] === void 0 || buf[offset + byteLength22] === void 0) {
    boundsError(offset, buf.length - (byteLength22 + 1));
  }
}
function checkInt(value, min, max, buf, offset, byteLength22) {
  if (value > max || value < min) {
    const n = typeof min === "bigint" ? "n" : "";
    let range;
    if (byteLength22 > 3) {
      if (min === 0 || min === 0n) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength22 + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength22 + 1) * 8 - 1}${n}) and < 2${n} ** ${(byteLength22 + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }
    throw new codes2.ERR_OUT_OF_RANGE("value", range, value);
  }
  checkBounds(buf, offset, byteLength22);
}
function toInteger(n, defaultVal) {
  n = +n;
  if (!Number.isNaN(n) && n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) {
    return n % 1 === 0 ? n : Math.floor(n);
  }
  return defaultVal;
}
function writeU_Int8(buf, value, offset, min, max) {
  value = +value;
  validateNumber(offset, "offset");
  if (value > max || value < min) {
    throw new codes2.ERR_OUT_OF_RANGE("value", `>= ${min} and <= ${max}`, value);
  }
  if (buf[offset] === void 0) {
    boundsError(offset, buf.length - 1);
  }
  buf[offset] = value;
  return offset + 1;
}
function writeU_Int16BE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 1);
  buf[offset++] = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function _writeUInt32LE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 3);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function writeU_Int16LE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 1);
  buf[offset++] = value;
  buf[offset++] = value >>> 8;
  return offset;
}
function _writeUInt32BE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 3);
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int48BE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 5);
  const newVal = Math.floor(value * 2 ** -32);
  buf[offset++] = newVal >>> 8;
  buf[offset++] = newVal;
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int40BE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 4);
  buf[offset++] = Math.floor(value * 2 ** -32);
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int32BE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 3);
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int24BE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 2);
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 3;
}
function validateOffset(value, name, min = 0, max = Number.MAX_SAFE_INTEGER) {
  if (typeof value !== "number") {
    throw new codes2.ERR_INVALID_ARG_TYPE(name, "number", value);
  }
  if (!Number.isInteger(value)) {
    throw new codes2.ERR_OUT_OF_RANGE(name, "an integer", value);
  }
  if (value < min || value > max) {
    throw new codes2.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
  }
}
function writeU_Int48LE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 5);
  const newVal = Math.floor(value * 2 ** -32);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  buf[offset++] = newVal;
  buf[offset++] = newVal >>> 8;
  return offset;
}
function writeU_Int40LE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 4);
  const newVal = value;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  buf[offset++] = Math.floor(newVal * 2 ** -32);
  return offset;
}
function writeU_Int32LE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 3);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function writeU_Int24LE(buf, value, offset, min, max) {
  value = +value;
  checkInt(value, min, max, buf, offset, 2);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function createBuffer(length2) {
  if (length2 > 2147483647) {
    throw new RangeError('The value "' + length2 + '" is invalid for option "size"');
  }
  const buf = new Uint8Array(length2);
  Object.setPrototypeOf(buf, Buffer2.prototype);
  return buf;
}
function Buffer2(arg, encodingOrOffset, length2) {
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new codes2.ERR_INVALID_ARG_TYPE("string", "string", arg);
    }
    return _allocUnsafe(arg);
  }
  return _from(arg, encodingOrOffset, length2);
}
function _from(value, encodingOrOffset, length2) {
  if (typeof value === "string") {
    return fromString(value, encodingOrOffset);
  }
  if (typeof value === "object" && value !== null) {
    if (isAnyArrayBuffer1(value)) {
      return fromArrayBuffer(value, encodingOrOffset, length2);
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value && (typeof valueOf === "string" || typeof valueOf === "object")) {
      return _from(valueOf, encodingOrOffset, length2);
    }
    const b = fromObject(value);
    if (b) {
      return b;
    }
    if (typeof value[Symbol.toPrimitive] === "function") {
      const primitive = value[Symbol.toPrimitive]("string");
      if (typeof primitive === "string") {
        return fromString(primitive, encodingOrOffset);
      }
    }
  }
  throw new codes2.ERR_INVALID_ARG_TYPE("first argument", [
    "string",
    "Buffer",
    "ArrayBuffer",
    "Array",
    "Array-like Object"
  ], value);
}
function assertSize(size) {
  validateNumber(size, "size");
  if (!(size >= 0 && size <= 2147483647)) {
    throw new codes2.ERR_INVALID_ARG_VALUE.RangeError("size", size);
  }
}
function _alloc(size, fill22, encoding) {
  assertSize(size);
  const buffer = createBuffer(size);
  if (fill22 !== void 0) {
    if (encoding !== void 0 && typeof encoding !== "string") {
      throw new codes2.ERR_INVALID_ARG_TYPE("encoding", "string", encoding);
    }
    return buffer.fill(fill22, encoding);
  }
  return buffer;
}
function _allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
function fromString(string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer2.isEncoding(encoding)) {
    throw new codes2.ERR_UNKNOWN_ENCODING(encoding);
  }
  const length2 = byteLength(string, encoding) | 0;
  let buf = createBuffer(length2);
  const actual = buf.write(string, encoding);
  if (actual !== length2) {
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(array) {
  const length2 = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length2);
  for (let i = 0; i < length2; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromObject(obj) {
  if (obj.length !== void 0 || isAnyArrayBuffer1(obj.buffer)) {
    if (typeof obj.length !== "number") {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }
  if (obj.type === "Buffer" && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}
function checked(length2) {
  if (length2 >= 2147483647) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  }
  return length2 | 0;
}
function SlowBuffer(length2) {
  assertSize(length2);
  return Buffer2.alloc(+length2);
}
function byteLength(string, encoding) {
  if (typeof string !== "string") {
    if (isArrayBufferView3(string) || isAnyArrayBuffer1(string)) {
      return string.byteLength;
    }
    throw new codes2.ERR_INVALID_ARG_TYPE("string", [
      "string",
      "Buffer",
      "ArrayBuffer"
    ], string);
  }
  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) {
    return 0;
  }
  if (!encoding) {
    return mustMatch ? -1 : byteLengthUtf8(string);
  }
  const ops = getEncodingOps(encoding);
  if (ops === void 0) {
    return mustMatch ? -1 : byteLengthUtf8(string);
  }
  return ops.byteLength(string);
}
function swap(b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  validateBuffer2(buffer);
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = void 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (Number.isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length || buffer.byteLength;
  }
  dir = !!dir;
  if (typeof val === "number") {
    return indexOfNumber(buffer, val >>> 0, byteOffset, dir);
  }
  let ops;
  if (encoding === void 0) {
    ops = encodingOps.utf8;
  } else {
    ops = getEncodingOps(encoding);
  }
  if (typeof val === "string") {
    if (ops === void 0) {
      throw new codes2.ERR_UNKNOWN_ENCODING(encoding);
    }
    return ops.indexOf(buffer, val, byteOffset, dir);
  }
  if (isUint8Array2(val)) {
    const encodingVal = ops === void 0 ? encodingsMap.utf8 : ops.encodingVal;
    return indexOfBuffer(buffer, val, byteOffset, encodingVal, dir);
  }
  throw new codes2.ERR_INVALID_ARG_TYPE("value", [
    "number",
    "string",
    "Buffer",
    "Uint8Array"
  ], val);
}
function fromArrayBuffer(obj, byteOffset, length2) {
  if (byteOffset === void 0) {
    byteOffset = 0;
  } else {
    byteOffset = +byteOffset;
    if (Number.isNaN(byteOffset)) {
      byteOffset = 0;
    }
  }
  const maxLength = obj.byteLength - byteOffset;
  if (maxLength < 0) {
    throw new codes2.ERR_BUFFER_OUT_OF_BOUNDS("offset");
  }
  if (length2 === void 0) {
    length2 = maxLength;
  } else {
    length2 = +length2;
    if (length2 > 0) {
      if (length2 > maxLength) {
        throw new codes2.ERR_BUFFER_OUT_OF_BOUNDS("length");
      }
    } else {
      length2 = 0;
    }
  }
  const buffer = new Uint8Array(obj, byteOffset, length2);
  Object.setPrototypeOf(buffer, Buffer2.prototype);
  return buffer;
}
function _utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= 4096) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = "";
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function _latin1Slice(buf, start, end) {
  let ret = "";
  end = Math.min(buf.length, end);
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function _hexSlice(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0) {
    start = 0;
  }
  if (!end || end < 0 || end > len) {
    end = len;
  }
  let out = "";
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }
  return out;
}
function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}
function checkBounds1(buf, offset, byteLength22) {
  validateNumber(offset, "offset");
  if (buf[offset] === void 0 || buf[offset + byteLength22] === void 0) {
    boundsError(offset, buf.length - (byteLength22 + 1));
  }
}
function checkIntBI(value, min, max, buf, offset, byteLength22) {
  if (value > max || value < min) {
    const n = typeof min === "bigint" ? "n" : "";
    let range;
    if (byteLength22 > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength22 + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength22 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength22 + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }
    throw new codes2.ERR_OUT_OF_RANGE("value", range, value);
  }
  checkBounds1(buf, offset, byteLength22);
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  let codePoint;
  const length2 = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length2; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        } else if (i + 1 === length2) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1) {
          bytes.push(239, 191, 189);
        }
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) {
        bytes.push(239, 191, 189);
      }
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0) {
        break;
      }
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) {
        break;
      }
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) {
        break;
      }
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) {
        break;
      }
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function blitBuffer(src, dst, offset, byteLength22) {
  let i;
  const length2 = byteLength22 === void 0 ? src.length : byteLength22;
  for (i = 0; i < length2; ++i) {
    if (i + offset >= dst.length || i >= src.length) {
      break;
    }
    dst[i + offset] = src[i];
  }
  return i;
}
function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function defineBigIntMethod(fn) {
  return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
var codes2, _toString2, _isObjectLike2, _isFunctionLike2, __default, mod, _getTypedArrayToStringTag2, isDate1, isArgumentsObject1, isBigIntObject1, isBooleanObject1, isNumberObject1, isStringObject1, isSymbolObject1, isNativeError1, isRegExp1, isAsyncFunction1, isGeneratorFunction1, isGeneratorObject1, isPromise1, isMap1, isSet1, isMapIterator1, isSetIterator1, isWeakMap1, isWeakSet1, isArrayBuffer1, isDataView1, isSharedArrayBuffer1, isModuleNamespaceObject1, isAnyArrayBuffer1, isBoxedPrimitive1, validateBuffer2, validateFunction2, kEnumerableProperty2, kCustomPromisifiedSymbol3, kCustomPromisifyArgsSymbol2, Encodings, encodings, base64abc, INVALID_BASE64_RE, utf8Encoder, float32Array, uInt8Float32Array, float64Array, uInt8Float64Array, bigEndian, encodingsMap, encodingOps, kMaxLength, kStringMaxLength, MAX_UINT32, customInspectSymbol2, INSPECT_MAX_BYTES, constants, MAX_ARGUMENTS_LENGTH, hexSliceLookupTable, atob1, Blob, btoa, __default1;
var init_buffer_deno = __esm({
  "../../node/buffer/lib/esm/buffer.deno.js"() {
    codes2 = {};
    _toString2 = Object.prototype.toString;
    _isObjectLike2 = (value) => value !== null && typeof value === "object";
    _isFunctionLike2 = (value) => value !== null && typeof value === "function";
    __default = {
      isAsyncFunction: isAsyncFunction4,
      isGeneratorFunction: isGeneratorFunction4,
      isAnyArrayBuffer: isAnyArrayBuffer4,
      isArrayBuffer: isArrayBuffer4,
      isArgumentsObject: isArgumentsObject4,
      isBoxedPrimitive: isBoxedPrimitive4,
      isDataView: isDataView4,
      isMap: isMap4,
      isMapIterator: isMapIterator4,
      isModuleNamespaceObject: isModuleNamespaceObject4,
      isNativeError: isNativeError4,
      isPromise: isPromise4,
      isSet: isSet4,
      isSetIterator: isSetIterator4,
      isWeakMap: isWeakMap4,
      isWeakSet: isWeakSet4,
      isRegExp: isRegExp4,
      isDate: isDate4,
      isStringObject: isStringObject4,
      isNumberObject: isNumberObject4,
      isBooleanObject: isBooleanObject4,
      isBigIntObject: isBigIntObject4
    };
    mod = {
      isAnyArrayBuffer: isAnyArrayBuffer4,
      isArgumentsObject: isArgumentsObject4,
      isArrayBuffer: isArrayBuffer4,
      isAsyncFunction: isAsyncFunction4,
      isBooleanObject: isBooleanObject4,
      isBoxedPrimitive: isBoxedPrimitive4,
      isDataView: isDataView4,
      isDate: isDate4,
      isGeneratorFunction: isGeneratorFunction4,
      isGeneratorObject: isGeneratorObject4,
      isMap: isMap4,
      isMapIterator: isMapIterator4,
      isModuleNamespaceObject: isModuleNamespaceObject4,
      isNativeError: isNativeError4,
      isNumberObject: isNumberObject4,
      isBigIntObject: isBigIntObject4,
      isPromise: isPromise4,
      isRegExp: isRegExp4,
      isSet: isSet4,
      isSetIterator: isSetIterator4,
      isSharedArrayBuffer: isSharedArrayBuffer4,
      isStringObject: isStringObject4,
      isSymbolObject: isSymbolObject4,
      isWeakMap: isWeakMap4,
      isWeakSet: isWeakSet4,
      default: __default
    };
    Symbol("kHandle");
    Symbol("kKeyObject");
    Symbol("kKeyType");
    _getTypedArrayToStringTag2 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get;
    ({ isDate: isDate1, isArgumentsObject: isArgumentsObject1, isBigIntObject: isBigIntObject1, isBooleanObject: isBooleanObject1, isNumberObject: isNumberObject1, isStringObject: isStringObject1, isSymbolObject: isSymbolObject1, isNativeError: isNativeError1, isRegExp: isRegExp1, isAsyncFunction: isAsyncFunction1, isGeneratorFunction: isGeneratorFunction1, isGeneratorObject: isGeneratorObject1, isPromise: isPromise1, isMap: isMap1, isSet: isSet1, isMapIterator: isMapIterator1, isSetIterator: isSetIterator1, isWeakMap: isWeakMap1, isWeakSet: isWeakSet1, isArrayBuffer: isArrayBuffer1, isDataView: isDataView1, isSharedArrayBuffer: isSharedArrayBuffer1, isModuleNamespaceObject: isModuleNamespaceObject1, isAnyArrayBuffer: isAnyArrayBuffer1, isBoxedPrimitive: isBoxedPrimitive1 } = mod);
    validateBuffer2 = hideStackFrames2((buffer, name = "buffer") => {
      if (!isArrayBufferView3(buffer)) {
        throw new codes2.ERR_INVALID_ARG_TYPE(name, [
          "Buffer",
          "TypedArray",
          "DataView"
        ], buffer);
      }
    });
    hideStackFrames2((value, name, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
      if (typeof value !== "number") {
        throw new codes2.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
      if (!Number.isInteger(value)) {
        throw new codes2.ERR_OUT_OF_RANGE(name, "an integer", value);
      }
      if (value < min || value > max) {
        throw new codes2.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
    });
    hideStackFrames2((value, name, options) => {
      const useDefaultOptions = options == null;
      const allowArray = useDefaultOptions ? false : options.allowArray;
      const allowFunction = useDefaultOptions ? false : options.allowFunction;
      const nullable = useDefaultOptions ? false : options.nullable;
      if (!nullable && value === null || !allowArray && Array.isArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
        throw new codes2.ERR_INVALID_ARG_TYPE(name, "Object", value);
      }
    });
    hideStackFrames2((value, name, min = -2147483648, max = 2147483647) => {
      if (!isInt322(value)) {
        if (typeof value !== "number") {
          throw new codes2.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
          throw new codes2.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        throw new codes2.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
      if (value < min || value > max) {
        throw new codes2.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
    });
    hideStackFrames2((value, name, positive) => {
      if (!isUint322(value)) {
        if (typeof value !== "number") {
          throw new codes2.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
          throw new codes2.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        const min = positive ? 1 : 0;
        throw new codes2.ERR_OUT_OF_RANGE(name, `>= ${min} && < 4294967296`, value);
      }
      if (positive && value === 0) {
        throw new codes2.ERR_OUT_OF_RANGE(name, ">= 1 && < 4294967296", value);
      }
    });
    hideStackFrames2((value, name, oneOf) => {
      if (!Array.prototype.includes.call(oneOf, value)) {
        const allowed = Array.prototype.join.call(Array.prototype.map.call(oneOf, (v) => typeof v === "string" ? `'${v}'` : String(v)), ", ");
        const reason = "must be one of: " + allowed;
        throw new codes2.ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    hideStackFrames2((callback) => {
      if (typeof callback !== "function") {
        throw new codes2.ERR_INVALID_CALLBACK(callback);
      }
    });
    hideStackFrames2((signal, name) => {
      if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new codes2.ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
      }
    });
    validateFunction2 = hideStackFrames2((value, name) => {
      if (typeof value !== "function") {
        throw new codes2.ERR_INVALID_ARG_TYPE(name, "Function", value);
      }
    });
    hideStackFrames2((value, name, minLength = 0) => {
      if (!Array.isArray(value)) {
        throw new codes2.ERR_INVALID_ARG_TYPE(name, "Array", value);
      }
      if (value.length < minLength) {
        const reason = `must be longer than ${minLength}`;
        throw new codes2.ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    Symbol.for("nodejs.util.inspect.custom");
    kEnumerableProperty2 = /* @__PURE__ */ Object.create(null);
    kEnumerableProperty2.enumerable = true;
    kCustomPromisifiedSymbol3 = Symbol.for("nodejs.util.promisify.custom");
    kCustomPromisifyArgsSymbol2 = Symbol.for("nodejs.util.promisify.customArgs");
    promisify4.custom = kCustomPromisifiedSymbol3;
    (function(Encodings22) {
      Encodings22[Encodings22["ASCII"] = 0] = "ASCII";
      Encodings22[Encodings22["UTF8"] = 1] = "UTF8";
      Encodings22[Encodings22["BASE64"] = 2] = "BASE64";
      Encodings22[Encodings22["UCS2"] = 3] = "UCS2";
      Encodings22[Encodings22["BINARY"] = 4] = "BINARY";
      Encodings22[Encodings22["HEX"] = 5] = "HEX";
      Encodings22[Encodings22["BUFFER"] = 6] = "BUFFER";
      Encodings22[Encodings22["BASE64URL"] = 7] = "BASE64URL";
      Encodings22[Encodings22["LATIN1"] = 4] = "LATIN1";
    })(Encodings || (Encodings = {}));
    encodings = [];
    encodings[Encodings.ASCII] = "ascii";
    encodings[Encodings.BASE64] = "base64";
    encodings[Encodings.BASE64URL] = "base64url";
    encodings[Encodings.BUFFER] = "buffer";
    encodings[Encodings.HEX] = "hex";
    encodings[Encodings.LATIN1] = "latin1";
    encodings[Encodings.UCS2] = "utf16le";
    encodings[Encodings.UTF8] = "utf8";
    base64abc = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "/"
    ];
    INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    utf8Encoder = new TextEncoder();
    float32Array = new Float32Array(1);
    uInt8Float32Array = new Uint8Array(float32Array.buffer);
    float64Array = new Float64Array(1);
    uInt8Float64Array = new Uint8Array(float64Array.buffer);
    float32Array[0] = -1;
    bigEndian = uInt8Float32Array[3] === 0;
    encodingsMap = /* @__PURE__ */ Object.create(null);
    for (let i = 0; i < encodings.length; ++i) {
      encodingsMap[encodings[i]] = i;
    }
    encodingOps = {
      ascii: {
        byteLength: (string) => string.length,
        encoding: "ascii",
        encodingVal: encodingsMap.ascii,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, asciiToBytes(val), byteOffset, encodingsMap.ascii, dir),
        slice: (buf, start, end) => buf.asciiSlice(start, end),
        write: (buf, string, offset, len) => buf.asciiWrite(string, offset, len)
      },
      base64: {
        byteLength: (string) => base64ByteLength(string, string.length),
        encoding: "base64",
        encodingVal: encodingsMap.base64,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, base64ToBytes(val), byteOffset, encodingsMap.base64, dir),
        slice: (buf, start, end) => buf.base64Slice(start, end),
        write: (buf, string, offset, len) => buf.base64Write(string, offset, len)
      },
      base64url: {
        byteLength: (string) => base64ByteLength(string, string.length),
        encoding: "base64url",
        encodingVal: encodingsMap.base64url,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, base64UrlToBytes(val), byteOffset, encodingsMap.base64url, dir),
        slice: (buf, start, end) => buf.base64urlSlice(start, end),
        write: (buf, string, offset, len) => buf.base64urlWrite(string, offset, len)
      },
      hex: {
        byteLength: (string) => string.length >>> 1,
        encoding: "hex",
        encodingVal: encodingsMap.hex,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, hexToBytes(val), byteOffset, encodingsMap.hex, dir),
        slice: (buf, start, end) => buf.hexSlice(start, end),
        write: (buf, string, offset, len) => buf.hexWrite(string, offset, len)
      },
      latin1: {
        byteLength: (string) => string.length,
        encoding: "latin1",
        encodingVal: encodingsMap.latin1,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, asciiToBytes(val), byteOffset, encodingsMap.latin1, dir),
        slice: (buf, start, end) => buf.latin1Slice(start, end),
        write: (buf, string, offset, len) => buf.latin1Write(string, offset, len)
      },
      ucs2: {
        byteLength: (string) => string.length * 2,
        encoding: "ucs2",
        encodingVal: encodingsMap.utf16le,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, utf16leToBytes(val), byteOffset, encodingsMap.utf16le, dir),
        slice: (buf, start, end) => buf.ucs2Slice(start, end),
        write: (buf, string, offset, len) => buf.ucs2Write(string, offset, len)
      },
      utf8: {
        byteLength: byteLengthUtf8,
        encoding: "utf8",
        encodingVal: encodingsMap.utf8,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, utf8Encoder.encode(val), byteOffset, encodingsMap.utf8, dir),
        slice: (buf, start, end) => buf.utf8Slice(start, end),
        write: (buf, string, offset, len) => buf.utf8Write(string, offset, len)
      },
      utf16le: {
        byteLength: (string) => string.length * 2,
        encoding: "utf16le",
        encodingVal: encodingsMap.utf16le,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer(buf, utf16leToBytes(val), byteOffset, encodingsMap.utf16le, dir),
        slice: (buf, start, end) => buf.ucs2Slice(start, end),
        write: (buf, string, offset, len) => buf.ucs2Write(string, offset, len)
      }
    };
    kMaxLength = 2147483647;
    kStringMaxLength = 536870888;
    MAX_UINT32 = 2 ** 32;
    customInspectSymbol2 = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    INSPECT_MAX_BYTES = 50;
    constants = {
      MAX_LENGTH: 2147483647,
      MAX_STRING_LENGTH: 536870888
    };
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) {
          return void 0;
        }
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) {
          return void 0;
        }
        return this.byteOffset;
      }
    });
    Buffer2.poolSize = 8192;
    Buffer2.from = function from(value, encodingOrOffset, length2) {
      return _from(value, encodingOrOffset, length2);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    Buffer2.alloc = function alloc(size, fill22, encoding) {
      return _alloc(size, fill22, encoding);
    };
    Buffer2.allocUnsafe = function allocUnsafe(size) {
      return _allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function allocUnsafeSlow(size) {
      return _allocUnsafe(size);
    };
    Object.setPrototypeOf(SlowBuffer.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(SlowBuffer, Uint8Array);
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) {
        a = Buffer2.from(a, a.offset, a.byteLength);
      }
      if (isInstance(b, Uint8Array)) {
        b = Buffer2.from(b, b.offset, b.byteLength);
      }
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) {
        return 0;
      }
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      return typeof encoding === "string" && encoding.length !== 0 && normalizeEncoding2(encoding) !== void 0;
    };
    Buffer2.concat = function concat(list, length2) {
      if (!Array.isArray(list)) {
        throw new codes2.ERR_INVALID_ARG_TYPE("list", "Array", list);
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      if (length2 === void 0) {
        length2 = 0;
        for (let i = 0; i < list.length; i++) {
          if (list[i].length) {
            length2 += list[i].length;
          }
        }
      } else {
        validateOffset(length2, "length");
      }
      const buffer = Buffer2.allocUnsafe(length2);
      let pos = 0;
      for (let i1 = 0; i1 < list.length; i1++) {
        const buf = list[i1];
        if (!isUint8Array2(buf)) {
          throw new codes2.ERR_INVALID_ARG_TYPE(`list[${i1}]`, [
            "Buffer",
            "Uint8Array"
          ], list[i1]);
        }
        pos += _copyActual(buf, buffer, pos, 0, buf.length);
      }
      if (pos < length2) {
        buffer.fill(0, pos, length2);
      }
      return buffer;
    };
    Buffer2.byteLength = byteLength;
    Buffer2.prototype._isBuffer = true;
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString(encoding, start, end) {
      if (arguments.length === 0) {
        return this.utf8Slice(0, this.length);
      }
      const len = this.length;
      if (start <= 0) {
        start = 0;
      } else if (start >= len) {
        return "";
      } else {
        start |= 0;
      }
      if (end === void 0 || end > len) {
        end = len;
      } else {
        end |= 0;
      }
      if (end <= start) {
        return "";
      }
      if (encoding === void 0) {
        return this.utf8Slice(start, end);
      }
      const ops = getEncodingOps(encoding);
      if (ops === void 0) {
        throw new codes2.ERR_UNKNOWN_ENCODING(encoding);
      }
      return ops.slice(this, start, end);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!isUint8Array2(b)) {
        throw new codes2.ERR_INVALID_ARG_TYPE("otherBuffer", [
          "Buffer",
          "Uint8Array"
        ], b);
      }
      if (this === b) {
        return true;
      }
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect2() {
      let str = "";
      const max = INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) {
        str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol2) {
      Buffer2.prototype[customInspectSymbol2] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare2(target2, start, end, thisStart, thisEnd) {
      if (isInstance(target2, Uint8Array)) {
        target2 = Buffer2.from(target2, target2.offset, target2.byteLength);
      }
      if (!Buffer2.isBuffer(target2)) {
        throw new codes2.ERR_INVALID_ARG_TYPE("target", [
          "Buffer",
          "Uint8Array"
        ], target2);
      }
      if (start === void 0) {
        start = 0;
      } else {
        validateOffset(start, "targetStart", 0, kMaxLength);
      }
      if (end === void 0) {
        end = target2.length;
      } else {
        validateOffset(end, "targetEnd", 0, target2.length);
      }
      if (thisStart === void 0) {
        thisStart = 0;
      } else {
        validateOffset(start, "sourceStart", 0, kMaxLength);
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      } else {
        validateOffset(end, "sourceEnd", 0, this.length);
      }
      if (start < 0 || end > target2.length || thisStart < 0 || thisEnd > this.length) {
        throw new codes2.ERR_OUT_OF_RANGE("out of range index", "range");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target2) {
        return 0;
      }
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target2.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    };
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    Buffer2.prototype.asciiSlice = function asciiSlice(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return bytesToAscii(this);
      } else {
        return bytesToAscii(this.slice(offset, length2));
      }
    };
    Buffer2.prototype.asciiWrite = function asciiWrite(string, offset, length2) {
      return blitBuffer(asciiToBytes(string), this, offset, length2);
    };
    Buffer2.prototype.base64Slice = function base64Slice(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return encode(this);
      } else {
        return encode(this.slice(offset, length2));
      }
    };
    Buffer2.prototype.base64Write = function base64Write(string, offset, length2) {
      return blitBuffer(base64ToBytes(string), this, offset, length2);
    };
    Buffer2.prototype.base64urlSlice = function base64urlSlice(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return encode1(this);
      } else {
        return encode1(this.slice(offset, length2));
      }
    };
    Buffer2.prototype.base64urlWrite = function base64urlWrite(string, offset, length2) {
      return blitBuffer(base64UrlToBytes(string), this, offset, length2);
    };
    Buffer2.prototype.hexWrite = function hexWrite(string, offset, length2) {
      return blitBuffer(hexToBytes(string, this.length - offset), this, offset, length2);
    };
    Buffer2.prototype.hexSlice = function hexSlice(string, offset, length2) {
      return _hexSlice(this, string, offset, length2);
    };
    Buffer2.prototype.latin1Slice = function latin1Slice(string, offset, length2) {
      return _latin1Slice(this, string, offset, length2);
    };
    Buffer2.prototype.latin1Write = function latin1Write(string, offset, length2) {
      return blitBuffer(asciiToBytes(string), this, offset, length2);
    };
    Buffer2.prototype.ucs2Slice = function ucs2Slice(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return bytesToUtf16le(this);
      } else {
        return bytesToUtf16le(this.slice(offset, length2));
      }
    };
    Buffer2.prototype.ucs2Write = function ucs2Write(string, offset, length2) {
      return blitBuffer(utf16leToBytes(string, this.length - offset), this, offset, length2);
    };
    Buffer2.prototype.utf8Slice = function utf8Slice(string, offset, length2) {
      return _utf8Slice(this, string, offset, length2);
    };
    Buffer2.prototype.utf8Write = function utf8Write(string, offset, length2) {
      return blitBuffer(utf8ToBytes(string, this.length - offset), this, offset, length2);
    };
    Buffer2.prototype.write = function write(string, offset, length2, encoding) {
      if (offset === void 0) {
        return this.utf8Write(string, 0, this.length);
      }
      if (length2 === void 0 && typeof offset === "string") {
        encoding = offset;
        length2 = this.length;
        offset = 0;
      } else {
        validateOffset(offset, "offset", 0, this.length);
        const remaining = this.length - offset;
        if (length2 === void 0) {
          length2 = remaining;
        } else if (typeof length2 === "string") {
          encoding = length2;
          length2 = remaining;
        } else {
          validateOffset(length2, "length", 0, this.length);
          if (length2 > remaining) {
            length2 = remaining;
          }
        }
      }
      if (!encoding) {
        return this.utf8Write(string, offset, length2);
      }
      const ops = getEncodingOps(encoding);
      if (ops === void 0) {
        throw new codes2.ERR_UNKNOWN_ENCODING(encoding);
      }
      return ops.write(this, string, offset, length2);
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH = 4096;
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) {
          start = 0;
        }
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
      if (end < start) {
        end = start;
      }
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes2.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readUInt48LE(this, offset);
      }
      if (byteLength22 === 5) {
        return readUInt40LE(this, offset);
      }
      if (byteLength22 === 3) {
        return readUInt24LE(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readUInt32LE(offset);
      }
      if (byteLength22 === 2) {
        return this.readUInt16LE(offset);
      }
      if (byteLength22 === 1) {
        return this.readUInt8(offset);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes2.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readUInt48BE(this, offset);
      }
      if (byteLength22 === 5) {
        return readUInt40BE(this, offset);
      }
      if (byteLength22 === 3) {
        return readUInt24BE(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readUInt32BE(offset);
      }
      if (byteLength22 === 2) {
        return this.readUInt16BE(offset);
      }
      if (byteLength22 === 1) {
        return this.readUInt8(offset);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset = 0) {
      validateNumber(offset, "offset");
      const val = this[offset];
      if (val === void 0) {
        boundsError(offset, this.length - 1);
      }
      return val;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = readUInt16BE;
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset = 0) {
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 1];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 2);
      }
      return first + last * 2 ** 8;
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset = 0) {
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 3];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 4);
      }
      return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = readUInt32BE;
    Buffer2.prototype.readBigUint64LE = Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUint64BE = Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes2.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readInt48LE(this, offset);
      }
      if (byteLength22 === 5) {
        return readInt40LE(this, offset);
      }
      if (byteLength22 === 3) {
        return readInt24LE(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readInt32LE(offset);
      }
      if (byteLength22 === 2) {
        return this.readInt16LE(offset);
      }
      if (byteLength22 === 1) {
        return this.readInt8(offset);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes2.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readInt48BE(this, offset);
      }
      if (byteLength22 === 5) {
        return readInt40BE(this, offset);
      }
      if (byteLength22 === 3) {
        return readInt24BE(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readInt32BE(offset);
      }
      if (byteLength22 === 2) {
        return this.readInt16BE(offset);
      }
      if (byteLength22 === 1) {
        return this.readInt8(offset);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.readInt8 = function readInt8(offset = 0) {
      validateNumber(offset, "offset");
      const val = this[offset];
      if (val === void 0) {
        boundsError(offset, this.length - 1);
      }
      return val | (val & 2 ** 7) * 33554430;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset = 0) {
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 1];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 2);
      }
      const val = first + last * 2 ** 8;
      return val | (val & 2 ** 15) * 131070;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset = 0) {
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 1];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 2);
      }
      const val = first * 2 ** 8 + last;
      return val | (val & 2 ** 15) * 131070;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset = 0) {
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 3];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 4);
      }
      return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + (last << 24);
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset = 0) {
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 3];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 4);
      }
      return (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset) {
      return bigEndian ? readFloatBackwards(this, offset) : readFloatForwards(this, offset);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset) {
      return bigEndian ? readFloatForwards(this, offset) : readFloatBackwards(this, offset);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset) {
      return bigEndian ? readDoubleBackwards(this, offset) : readDoubleForwards(this, offset);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset) {
      return bigEndian ? readDoubleForwards(this, offset) : readDoubleBackwards(this, offset);
    };
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48LE(this, value, offset, 0, 281474976710655);
      }
      if (byteLength22 === 5) {
        return writeU_Int40LE(this, value, offset, 0, 1099511627775);
      }
      if (byteLength22 === 3) {
        return writeU_Int24LE(this, value, offset, 0, 16777215);
      }
      if (byteLength22 === 4) {
        return writeU_Int32LE(this, value, offset, 0, 4294967295);
      }
      if (byteLength22 === 2) {
        return writeU_Int16LE(this, value, offset, 0, 65535);
      }
      if (byteLength22 === 1) {
        return writeU_Int8(this, value, offset, 0, 255);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48BE(this, value, offset, 0, 281474976710655);
      }
      if (byteLength22 === 5) {
        return writeU_Int40BE(this, value, offset, 0, 1099511627775);
      }
      if (byteLength22 === 3) {
        return writeU_Int24BE(this, value, offset, 0, 16777215);
      }
      if (byteLength22 === 4) {
        return writeU_Int32BE(this, value, offset, 0, 4294967295);
      }
      if (byteLength22 === 2) {
        return writeU_Int16BE(this, value, offset, 0, 65535);
      }
      if (byteLength22 === 1) {
        return writeU_Int8(this, value, offset, 0, 255);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset = 0) {
      return writeU_Int8(this, value, offset, 0, 255);
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset = 0) {
      return writeU_Int16LE(this, value, offset, 0, 65535);
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset = 0) {
      return writeU_Int16BE(this, value, offset, 0, 65535);
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset = 0) {
      return _writeUInt32LE(this, value, offset, 0, 4294967295);
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset = 0) {
      return _writeUInt32BE(this, value, offset, 0, 4294967295);
    };
    Buffer2.prototype.writeBigUint64LE = Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUint64BE = Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48LE(this, value, offset, -140737488355328, 140737488355327);
      }
      if (byteLength22 === 5) {
        return writeU_Int40LE(this, value, offset, -549755813888, 549755813887);
      }
      if (byteLength22 === 3) {
        return writeU_Int24LE(this, value, offset, -8388608, 8388607);
      }
      if (byteLength22 === 4) {
        return writeU_Int32LE(this, value, offset, -2147483648, 2147483647);
      }
      if (byteLength22 === 2) {
        return writeU_Int16LE(this, value, offset, -32768, 32767);
      }
      if (byteLength22 === 1) {
        return writeU_Int8(this, value, offset, -128, 127);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48BE(this, value, offset, -140737488355328, 140737488355327);
      }
      if (byteLength22 === 5) {
        return writeU_Int40BE(this, value, offset, -549755813888, 549755813887);
      }
      if (byteLength22 === 3) {
        return writeU_Int24BE(this, value, offset, -8388608, 8388607);
      }
      if (byteLength22 === 4) {
        return writeU_Int32BE(this, value, offset, -2147483648, 2147483647);
      }
      if (byteLength22 === 2) {
        return writeU_Int16BE(this, value, offset, -32768, 32767);
      }
      if (byteLength22 === 1) {
        return writeU_Int8(this, value, offset, -128, 127);
      }
      boundsError(byteLength22, 6, "byteLength");
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset = 0) {
      return writeU_Int8(this, value, offset, -128, 127);
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset = 0) {
      return writeU_Int16LE(this, value, offset, -32768, 32767);
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset = 0) {
      return writeU_Int16BE(this, value, offset, -32768, 32767);
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset = 0) {
      return writeU_Int32LE(this, value, offset, -2147483648, 2147483647);
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset = 0) {
      return writeU_Int32BE(this, value, offset, -2147483648, 2147483647);
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset) {
      return bigEndian ? writeFloatBackwards(this, value, offset) : writeFloatForwards(this, value, offset);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset) {
      return bigEndian ? writeFloatForwards(this, value, offset) : writeFloatBackwards(this, value, offset);
    };
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset) {
      return bigEndian ? writeDoubleBackwards(this, value, offset) : writeDoubleForwards(this, value, offset);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset) {
      return bigEndian ? writeDoubleForwards(this, value, offset) : writeDoubleBackwards(this, value, offset);
    };
    Buffer2.prototype.copy = function copy(target2, targetStart, sourceStart, sourceEnd) {
      if (!isUint8Array2(this)) {
        throw new codes2.ERR_INVALID_ARG_TYPE("source", [
          "Buffer",
          "Uint8Array"
        ], this);
      }
      if (!isUint8Array2(target2)) {
        throw new codes2.ERR_INVALID_ARG_TYPE("target", [
          "Buffer",
          "Uint8Array"
        ], target2);
      }
      if (targetStart === void 0) {
        targetStart = 0;
      } else {
        targetStart = toInteger(targetStart, 0);
        if (targetStart < 0) {
          throw new codes2.ERR_OUT_OF_RANGE("targetStart", ">= 0", targetStart);
        }
      }
      if (sourceStart === void 0) {
        sourceStart = 0;
      } else {
        sourceStart = toInteger(sourceStart, 0);
        if (sourceStart < 0) {
          throw new codes2.ERR_OUT_OF_RANGE("sourceStart", ">= 0", sourceStart);
        }
        if (sourceStart >= MAX_UINT32) {
          throw new codes2.ERR_OUT_OF_RANGE("sourceStart", `< ${MAX_UINT32}`, sourceStart);
        }
      }
      if (sourceEnd === void 0) {
        sourceEnd = this.length;
      } else {
        sourceEnd = toInteger(sourceEnd, 0);
        if (sourceEnd < 0) {
          throw new codes2.ERR_OUT_OF_RANGE("sourceEnd", ">= 0", sourceEnd);
        }
        if (sourceEnd >= MAX_UINT32) {
          throw new codes2.ERR_OUT_OF_RANGE("sourceEnd", `< ${MAX_UINT32}`, sourceEnd);
        }
      }
      if (targetStart >= target2.length) {
        return 0;
      }
      if (sourceEnd > 0 && sourceEnd < sourceStart) {
        sourceEnd = sourceStart;
      }
      if (sourceEnd === sourceStart) {
        return 0;
      }
      if (target2.length === 0 || this.length === 0) {
        return 0;
      }
      if (sourceEnd > this.length) {
        sourceEnd = this.length;
      }
      if (target2.length - targetStart < sourceEnd - sourceStart) {
        sourceEnd = target2.length - targetStart + sourceStart;
      }
      const len = sourceEnd - sourceStart;
      if (this === target2 && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, sourceStart, sourceEnd);
      } else {
        Uint8Array.prototype.set.call(target2, this.subarray(sourceStart, sourceEnd), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) {
        val = 0;
      }
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new codes2.ERR_INVALID_ARG_VALUE("value", val);
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    atob1 = globalThis.atob;
    Blob = globalThis.Blob;
    btoa = globalThis.btoa;
    __default1 = {
      atob: atob1,
      btoa,
      Blob,
      Buffer: Buffer2,
      constants,
      kMaxLength: 2147483647,
      kStringMaxLength: 536870888,
      SlowBuffer
    };
  }
});

// ../../node/buffer/lib/esm/buffer.js
var buffer_default;
var init_buffer = __esm({
  "../../node/buffer/lib/esm/buffer.js"() {
    init_buffer_deno();
    init_buffer_deno();
    buffer_default = buffer_deno_exports;
  }
});

// ../../node/buffer/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Blob: () => Blob,
  Buffer: () => Buffer2,
  SlowBuffer: () => SlowBuffer,
  atob: () => atob1,
  btoa: () => btoa,
  constants: () => constants,
  default: () => src_default2,
  kMaxLength: () => kMaxLength,
  kStringMaxLength: () => kStringMaxLength
});
var src_default2;
var init_esm2 = __esm({
  "../../node/buffer/lib/esm/index.js"() {
    init_buffer();
    init_buffer();
    src_default2 = buffer_default;
  }
});

// ../../node/node-internal/lib/internal_binding/util.js
function isArrayIndex(value) {
  switch (typeof value) {
    case "number":
      return value >= 0 && (value | 0) === value;
    case "string": {
      const result = isNumericLookup[value];
      if (result !== void 0) {
        return result;
      }
      const length2 = value.length;
      if (length2 === 0) {
        return isNumericLookup[value] = false;
      }
      let ch = 0;
      let i = 0;
      for (; i < length2; ++i) {
        ch = value.charCodeAt(i);
        if (i === 0 && ch === 48 && length2 > 1 || ch < 48 || ch > 57) {
          return isNumericLookup[value] = false;
        }
      }
      return isNumericLookup[value] = true;
    }
    default:
      return false;
  }
}
function getOwnNonIndexProperties(obj, filter2) {
  let allProperties = [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj)
  ];
  if (Array.isArray(obj)) {
    allProperties = allProperties.filter((k) => !isArrayIndex(k));
  }
  if (filter2 === ALL_PROPERTIES) {
    return allProperties;
  }
  const result = [];
  for (const key of allProperties) {
    const desc = Object.getOwnPropertyDescriptor(obj, key);
    if (desc === void 0) {
      continue;
    }
    if (filter2 & ONLY_WRITABLE && !desc.writable) {
      continue;
    }
    if (filter2 & ONLY_ENUMERABLE && !desc.enumerable) {
      continue;
    }
    if (filter2 & ONLY_CONFIGURABLE && !desc.configurable) {
      continue;
    }
    if (filter2 & SKIP_STRINGS && typeof key === "string") {
      continue;
    }
    if (filter2 & SKIP_SYMBOLS && typeof key === "symbol") {
      continue;
    }
    result.push(key);
  }
  return result;
}
var ALL_PROPERTIES, ONLY_WRITABLE, ONLY_ENUMERABLE, ONLY_CONFIGURABLE, SKIP_STRINGS, SKIP_SYMBOLS, isNumericLookup;
var init_util2 = __esm({
  "../../node/node-internal/lib/internal_binding/util.js"() {
    init_lib();
    ALL_PROPERTIES = 0;
    ONLY_WRITABLE = 1;
    ONLY_ENUMERABLE = 2;
    ONLY_CONFIGURABLE = 4;
    SKIP_STRINGS = 8;
    SKIP_SYMBOLS = 16;
    isNumericLookup = {};
  }
});

// ../../node/node-internal/lib/util/comparisons.js
function isDeepStrictEqual(val1, val2) {
  return innerDeepEqual(val1, val2, true);
}
function isDeepEqual(val1, val2) {
  return innerDeepEqual(val1, val2, false);
}
function innerDeepEqual(val1, val2, strict2, memos = memo) {
  if (val1 === val2) {
    if (val1 !== 0)
      return true;
    return strict2 ? Object.is(val1, val2) : true;
  }
  if (strict2) {
    if (typeof val1 !== "object") {
      return typeof val1 === "number" && Number.isNaN(val1) && Number.isNaN(val2);
    }
    if (typeof val2 !== "object" || val1 === null || val2 === null) {
      return false;
    }
    if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
      return false;
    }
  } else {
    if (val1 === null || typeof val1 !== "object") {
      if (val2 === null || typeof val2 !== "object") {
        return val1 == val2 || Number.isNaN(val1) && Number.isNaN(val2);
      }
      return false;
    }
    if (val2 === null || typeof val2 !== "object") {
      return false;
    }
  }
  const val1Tag = Object.prototype.toString.call(val1);
  const val2Tag = Object.prototype.toString.call(val2);
  if (val1Tag !== val2Tag) {
    return false;
  }
  if (Array.isArray(val1)) {
    if (!Array.isArray(val2) || val1.length !== val2.length) {
      return false;
    }
    const filter2 = strict2 ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    const keys1 = getOwnNonIndexProperties(val1, filter2);
    const keys22 = getOwnNonIndexProperties(val2, filter2);
    if (keys1.length !== keys22.length) {
      return false;
    }
    return keyCheck(val1, val2, strict2, memos, 1, keys1);
  } else if (val1Tag === "[object Object]") {
    return keyCheck(
      val1,
      val2,
      strict2,
      memos,
      0
    );
  } else if (val1 instanceof Date) {
    if (!(val2 instanceof Date) || val1.getTime() !== val2.getTime()) {
      return false;
    }
  } else if (val1 instanceof RegExp) {
    if (!(val2 instanceof RegExp) || !areSimilarRegExps(val1, val2)) {
      return false;
    }
  } else if (isNativeError3(val1) || val1 instanceof Error) {
    if (!isNativeError3(val2) && !(val2 instanceof Error) || val1.message !== val2.message || val1.name !== val2.name) {
      return false;
    }
  } else if (isArrayBufferView2(val1)) {
    const TypedArrayPrototypeGetSymbolToStringTag = (val) => Object.getOwnPropertySymbols(val).map((item) => item.toString()).toString();
    if (isTypedArray2(val1) && isTypedArray2(val2) && TypedArrayPrototypeGetSymbolToStringTag(val1) !== TypedArrayPrototypeGetSymbolToStringTag(val2)) {
      return false;
    }
    if (!strict2 && (isFloat32Array2(val1) || isFloat64Array2(val1))) {
      if (!areSimilarFloatArrays(val1, val2)) {
        return false;
      }
    } else if (!areSimilarTypedArrays(val1, val2)) {
      return false;
    }
    const filter2 = strict2 ? ONLY_ENUMERABLE : ONLY_ENUMERABLE | SKIP_SYMBOLS;
    const keysVal1 = getOwnNonIndexProperties(val1, filter2);
    const keysVal2 = getOwnNonIndexProperties(val2, filter2);
    if (keysVal1.length !== keysVal2.length) {
      return false;
    }
    return keyCheck(
      val1,
      val2,
      strict2,
      memos,
      0,
      keysVal1
    );
  } else if (isSet3(val1)) {
    if (!isSet3(val2) || val1.size !== val2.size) {
      return false;
    }
    return keyCheck(
      val1,
      val2,
      strict2,
      memos,
      2
    );
  } else if (isMap3(val1)) {
    if (!isMap3(val2) || val1.size !== val2.size) {
      return false;
    }
    return keyCheck(
      val1,
      val2,
      strict2,
      memos,
      3
    );
  } else if (isAnyArrayBuffer3(val1)) {
    if (!isAnyArrayBuffer3(val2) || !areEqualArrayBuffers(val1, val2)) {
      return false;
    }
  } else if (isBoxedPrimitive3(val1)) {
    if (!isEqualBoxedPrimitive(val1, val2)) {
      return false;
    }
  } else if (Array.isArray(val2) || isArrayBufferView2(val2) || isSet3(val2) || isMap3(val2) || isDate3(val2) || isRegExp3(val2) || isAnyArrayBuffer3(val2) || isBoxedPrimitive3(val2) || isNativeError3(val2) || val2 instanceof Error) {
    return false;
  }
  return keyCheck(
    val1,
    val2,
    strict2,
    memos,
    0
  );
}
function keyCheck(val1, val2, strict2, memos, iterationType, aKeys = []) {
  if (arguments.length === 5) {
    aKeys = Object.keys(val1);
    const bKeys = Object.keys(val2);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
  }
  let i = 0;
  for (; i < aKeys.length; i++) {
    if (!val2.propertyIsEnumerable(aKeys[i])) {
      return false;
    }
  }
  if (strict2 && arguments.length === 5) {
    const symbolKeysA = Object.getOwnPropertySymbols(val1);
    if (symbolKeysA.length !== 0) {
      let count = 0;
      for (i = 0; i < symbolKeysA.length; i++) {
        const key = symbolKeysA[i];
        if (val1.propertyIsEnumerable(key)) {
          if (!val2.propertyIsEnumerable(key)) {
            return false;
          }
          aKeys.push(key.toString());
          count++;
        } else if (val2.propertyIsEnumerable(key)) {
          return false;
        }
      }
      const symbolKeysB = Object.getOwnPropertySymbols(val2);
      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
        return false;
      }
    } else {
      const symbolKeysB = Object.getOwnPropertySymbols(val2);
      if (symbolKeysB.length !== 0 && getEnumerables(val2, symbolKeysB).length !== 0) {
        return false;
      }
    }
  }
  if (aKeys.length === 0 && (iterationType === 0 || iterationType === 1 && val1.length === 0 || val1.size === 0)) {
    return true;
  }
  if (memos === void 0) {
    memos = {
      val1: /* @__PURE__ */ new Map(),
      val2: /* @__PURE__ */ new Map(),
      position: 0
    };
  } else {
    const val2MemoA = memos.val1.get(val1);
    if (val2MemoA !== void 0) {
      const val2MemoB = memos.val2.get(val2);
      if (val2MemoB !== void 0) {
        return val2MemoA === val2MemoB;
      }
    }
    memos.position++;
  }
  memos.val1.set(val1, memos.position);
  memos.val2.set(val2, memos.position);
  const areEq = objEquiv(val1, val2, strict2, aKeys, memos, iterationType);
  memos.val1.delete(val1);
  memos.val2.delete(val2);
  return areEq;
}
function areSimilarRegExps(a, b) {
  return a.source === b.source && a.flags === b.flags && a.lastIndex === b.lastIndex;
}
function areSimilarFloatArrays(arr1, arr2) {
  if (arr1.byteLength !== arr2.byteLength) {
    return false;
  }
  for (let i = 0; i < arr1.byteLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function areSimilarTypedArrays(arr1, arr2) {
  if (arr1.byteLength !== arr2.byteLength) {
    return false;
  }
  return Buffer2.compare(
    new Uint8Array(arr1.buffer, arr1.byteOffset, arr1.byteLength),
    new Uint8Array(arr2.buffer, arr2.byteOffset, arr2.byteLength)
  ) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
  return buf1.byteLength === buf2.byteLength && Buffer2.compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(a, b) {
  if (Object.getOwnPropertyNames(a).length !== Object.getOwnPropertyNames(b).length) {
    return false;
  }
  if (Object.getOwnPropertySymbols(a).length !== Object.getOwnPropertySymbols(b).length) {
    return false;
  }
  if (isNumberObject3(a)) {
    return isNumberObject3(b) && Object.is(
      Number.prototype.valueOf.call(a),
      Number.prototype.valueOf.call(b)
    );
  }
  if (isStringObject3(a)) {
    return isStringObject3(b) && String.prototype.valueOf.call(a) === String.prototype.valueOf.call(b);
  }
  if (isBooleanObject3(a)) {
    return isBooleanObject3(b) && Boolean.prototype.valueOf.call(a) === Boolean.prototype.valueOf.call(b);
  }
  if (isBigIntObject3(a)) {
    return isBigIntObject3(b) && BigInt.prototype.valueOf.call(a) === BigInt.prototype.valueOf.call(b);
  }
  if (isSymbolObject3(a)) {
    return isSymbolObject3(b) && Symbol.prototype.valueOf.call(a) === Symbol.prototype.valueOf.call(b);
  }
  throw Error(`Unknown boxed type`);
}
function getEnumerables(val, keys3) {
  return keys3.filter((key) => val.propertyIsEnumerable(key));
}
function objEquiv(obj1, obj2, strict2, keys3, memos, iterationType) {
  let i = 0;
  if (iterationType === 2) {
    if (!setEquiv(obj1, obj2, strict2, memos)) {
      return false;
    }
  } else if (iterationType === 3) {
    if (!mapEquiv(obj1, obj2, strict2, memos)) {
      return false;
    }
  } else if (iterationType === 1) {
    for (; i < obj1.length; i++) {
      if (obj1.hasOwnProperty(i)) {
        if (!obj2.hasOwnProperty(i) || !innerDeepEqual(obj1[i], obj2[i], strict2, memos)) {
          return false;
        }
      } else if (obj2.hasOwnProperty(i)) {
        return false;
      } else {
        const keys1 = Object.keys(obj1);
        for (; i < keys1.length; i++) {
          const key = keys1[i];
          if (!obj2.hasOwnProperty(key) || !innerDeepEqual(obj1[key], obj2[key], strict2, memos)) {
            return false;
          }
        }
        if (keys1.length !== Object.keys(obj2).length) {
          return false;
        }
        if (keys1.length !== Object.keys(obj2).length) {
          return false;
        }
        return true;
      }
    }
  }
  for (i = 0; i < keys3.length; i++) {
    const key = keys3[i];
    if (!innerDeepEqual(obj1[key], obj2[key], strict2, memos)) {
      return false;
    }
  }
  return true;
}
function findLooseMatchingPrimitives(primitive) {
  switch (typeof primitive) {
    case "undefined":
      return null;
    case "object":
      return void 0;
    case "symbol":
      return false;
    case "string":
      primitive = +primitive;
    case "number":
      if (Number.isNaN(primitive)) {
        return false;
      }
  }
  return true;
}
function setMightHaveLoosePrim(set1, set2, primitive) {
  const altValue = findLooseMatchingPrimitives(primitive);
  if (altValue != null)
    return altValue;
  return set2.has(altValue) && !set1.has(altValue);
}
function setHasEqualElement(set, val1, strict2, memos) {
  for (const val2 of set) {
    if (innerDeepEqual(val1, val2, strict2, memos)) {
      set.delete(val2);
      return true;
    }
  }
  return false;
}
function setEquiv(set1, set2, strict2, memos) {
  let set = null;
  for (const item of set1) {
    if (typeof item === "object" && item !== null) {
      if (set === null) {
        set = /* @__PURE__ */ new Set();
      }
      set.add(item);
    } else if (!set2.has(item)) {
      if (strict2)
        return false;
      if (!setMightHaveLoosePrim(set1, set2, item)) {
        return false;
      }
      if (set === null) {
        set = /* @__PURE__ */ new Set();
      }
      set.add(item);
    }
  }
  if (set !== null) {
    for (const item of set2) {
      if (typeof item === "object" && item !== null) {
        if (!setHasEqualElement(set, item, strict2, memos))
          return false;
      } else if (!strict2 && !set1.has(item) && !setHasEqualElement(set, item, strict2, memos)) {
        return false;
      }
    }
    return set.size === 0;
  }
  return true;
}
function mapMightHaveLoosePrimitive(map1, map2, primitive, item, memos) {
  const altValue = findLooseMatchingPrimitives(primitive);
  if (altValue != null) {
    return altValue;
  }
  const curB = map2.get(altValue);
  if (curB === void 0 && !map2.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
    return false;
  }
  return !map1.has(altValue) && innerDeepEqual(item, curB, false, memos);
}
function mapEquiv(map1, map2, strict2, memos) {
  let set = null;
  for (const { 0: key, 1: item1 } of map1) {
    if (typeof key === "object" && key !== null) {
      if (set === null) {
        set = /* @__PURE__ */ new Set();
      }
      set.add(key);
    } else {
      const item2 = map2.get(key);
      if (item2 === void 0 && !map2.has(key) || !innerDeepEqual(item1, item2, strict2, memos)) {
        if (strict2)
          return false;
        if (!mapMightHaveLoosePrimitive(map1, map2, key, item1, memos)) {
          return false;
        }
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(key);
      }
    }
  }
  if (set !== null) {
    for (const { 0: key, 1: item } of map2) {
      if (typeof key === "object" && key !== null) {
        if (!mapHasEqualEntry(set, map1, key, item, strict2, memos)) {
          return false;
        }
      } else if (!strict2 && (!map1.has(key) || !innerDeepEqual(map1.get(key), item, false, memos)) && !mapHasEqualEntry(set, map1, key, item, false, memos)) {
        return false;
      }
    }
    return set.size === 0;
  }
  return true;
}
function mapHasEqualEntry(set, map2, key1, item1, strict2, memos) {
  for (const key2 of set) {
    if (innerDeepEqual(key1, key2, strict2, memos) && innerDeepEqual(item1, map2.get(key2), strict2, memos)) {
      set.delete(key2);
      return true;
    }
  }
  return false;
}
var memo;
var init_comparisons = __esm({
  "../../node/node-internal/lib/util/comparisons.js"() {
    init_types3();
    init_esm2();
    init_util2();
  }
});

// ../../node/node-internal/lib/fmt/colors.js
function stripColor(string) {
  return string.replace(ANSI_PATTERN, "");
}
var Deno2, noColor, ANSI_PATTERN;
var init_colors = __esm({
  "../../node/node-internal/lib/fmt/colors.js"() {
    ({ Deno: Deno2 } = globalThis);
    noColor = typeof Deno2?.noColor === "boolean" ? Deno2.noColor : true;
    ANSI_PATTERN = new RegExp(
      [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
      ].join("|"),
      "g"
    );
  }
});

// ../../node/node-internal/lib/assertion_error.js
function copyError(source) {
  const keys3 = ObjectKeys(source);
  const target2 = ObjectCreate(ObjectGetPrototypeOf(source));
  for (const key of keys3) {
    const desc = ObjectGetOwnPropertyDescriptor(source, key);
    if (desc !== void 0) {
      ObjectDefineProperty(target2, key, desc);
    }
  }
  ObjectDefineProperty(target2, "message", { value: source.message });
  return target2;
}
function inspectValue(val) {
  return inspect(
    val,
    {
      compact: true,
      customInspect: false,
      depth: 1e3,
      maxArrayLength: Infinity,
      showHidden: false,
      showProxy: false,
      sorted: true,
      getters: true
    }
  );
}
function createErrDiff(actual, expected, operator) {
  let other = "";
  let res = "";
  let end = "";
  let skipped = false;
  const actualInspected = inspectValue(actual);
  const actualLines = actualInspected.split("\n");
  const expectedLines = inspectValue(expected).split("\n");
  let i = 0;
  let indicator = "";
  if (operator === "strictEqual" && (typeof actual === "object" && actual !== null && typeof expected === "object" && expected !== null || typeof actual === "function" && typeof expected === "function")) {
    operator = "strictEqualObject";
  }
  if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
    const c = inspect.defaultOptions.colors;
    const actualRaw = c ? stripColor(actualLines[0]) : actualLines[0];
    const expectedRaw = c ? stripColor(expectedLines[0]) : expectedLines[0];
    const inputLength = actualRaw.length + expectedRaw.length;
    if (inputLength <= kMaxShortLength) {
      if ((typeof actual !== "object" || actual === null) && (typeof expected !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
        return `${kReadableOperator[operator]}

${actualLines[0]} !== ${expectedLines[0]}
`;
      }
    } else if (operator !== "strictEqualObject") {
      const maxLength2 = 80;
      if (inputLength < maxLength2) {
        while (actualRaw[i] === expectedRaw[i]) {
          i++;
        }
        if (i > 2) {
          indicator = `
  ${" ".repeat(i)}^`;
          i = 0;
        }
      }
    }
  }
  let a = actualLines[actualLines.length - 1];
  let b = expectedLines[expectedLines.length - 1];
  while (a === b) {
    if (i++ < 3) {
      end = `
  ${a}${end}`;
    } else {
      other = a;
    }
    actualLines.pop();
    expectedLines.pop();
    if (actualLines.length === 0 || expectedLines.length === 0) {
      break;
    }
    a = actualLines[actualLines.length - 1];
    b = expectedLines[expectedLines.length - 1];
  }
  const maxLines = MathMax(actualLines.length, expectedLines.length);
  if (maxLines === 0) {
    const actualLines2 = actualInspected.split("\n");
    if (actualLines2.length > 50) {
      actualLines2[46] = `${blue}...${defaultColor}`;
      while (actualLines2.length > 47) {
        actualLines2.pop();
      }
    }
    return `${kReadableOperator.notIdentical}

${actualLines2.join("\n")}
`;
  }
  if (i >= 5) {
    end = `
${blue}...${defaultColor}${end}`;
    skipped = true;
  }
  if (other !== "") {
    end = `
  ${other}${end}`;
    other = "";
  }
  let printedLines = 0;
  let identical = 0;
  const msg = kReadableOperator[operator] + `
${green}+ actual${defaultColor} ${red}- expected${defaultColor}`;
  const skippedMsg = ` ${blue}...${defaultColor} Lines skipped`;
  let lines = actualLines;
  let plusMinus = `${green}+${defaultColor}`;
  let maxLength = expectedLines.length;
  if (actualLines.length < maxLines) {
    lines = expectedLines;
    plusMinus = `${red}-${defaultColor}`;
    maxLength = actualLines.length;
  }
  for (i = 0; i < maxLines; i++) {
    if (maxLength < i + 1) {
      if (identical > 2) {
        if (identical > 3) {
          if (identical > 4) {
            if (identical === 5) {
              res += `
  ${lines[i - 3]}`;
              printedLines++;
            } else {
              res += `
${blue}...${defaultColor}`;
              skipped = true;
            }
          }
          res += `
  ${lines[i - 2]}`;
          printedLines++;
        }
        res += `
  ${lines[i - 1]}`;
        printedLines++;
      }
      identical = 0;
      if (lines === actualLines) {
        res += `
${plusMinus} ${lines[i]}`;
      } else {
        other += `
${plusMinus} ${lines[i]}`;
      }
      printedLines++;
    } else {
      const expectedLine = expectedLines[i];
      let actualLine = actualLines[i];
      let divergingLines = actualLine !== expectedLine && (!actualLine.endsWith(",") || actualLine.slice(0, -1) !== expectedLine);
      if (divergingLines && expectedLine.endsWith(",") && expectedLine.slice(0, -1) === actualLine) {
        divergingLines = false;
        actualLine += ",";
      }
      if (divergingLines) {
        if (identical > 2) {
          if (identical > 3) {
            if (identical > 4) {
              if (identical === 5) {
                res += `
  ${actualLines[i - 3]}`;
                printedLines++;
              } else {
                res += `
${blue}...${defaultColor}`;
                skipped = true;
              }
            }
            res += `
  ${actualLines[i - 2]}`;
            printedLines++;
          }
          res += `
  ${actualLines[i - 1]}`;
          printedLines++;
        }
        identical = 0;
        res += `
${green}+${defaultColor} ${actualLine}`;
        other += `
${red}-${defaultColor} ${expectedLine}`;
        printedLines += 2;
      } else {
        res += other;
        other = "";
        identical++;
        if (identical <= 2) {
          res += `
  ${actualLine}`;
          printedLines++;
        }
      }
    }
    if (printedLines > 50 && i < maxLines - 2) {
      return `${msg}${skippedMsg}
${res}
${blue}...${defaultColor}${other}
${blue}...${defaultColor}`;
    }
  }
  return `${msg}${skipped ? skippedMsg : ""}
${res}${other}${end}${indicator}`;
}
var MathMax, Error2, ObjectCreate, ObjectDefineProperty, ObjectGetPrototypeOf, ObjectGetOwnPropertyDescriptor, ObjectKeys, blue, green, red, defaultColor, kReadableOperator, kMaxShortLength, AssertionError;
var init_assertion_error = __esm({
  "../../node/node-internal/lib/assertion_error.js"() {
    init_esm();
    init_colors();
    init_errors();
    MathMax = Math.max;
    ({ Error: Error2 } = globalThis);
    ({
      create: ObjectCreate,
      defineProperty: ObjectDefineProperty,
      getPrototypeOf: ObjectGetPrototypeOf,
      getOwnPropertyDescriptor: ObjectGetOwnPropertyDescriptor,
      keys: ObjectKeys
    } = Object);
    blue = "";
    green = "";
    red = "";
    defaultColor = "";
    kReadableOperator = {
      deepStrictEqual: "Expected values to be strictly deep-equal:",
      strictEqual: "Expected values to be strictly equal:",
      strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
      deepEqual: "Expected values to be loosely deep-equal:",
      notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
      notStrictEqual: 'Expected "actual" to be strictly unequal to:',
      notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
      notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
      notIdentical: "Values have same structure but are not reference-equal:",
      notDeepEqualUnequal: "Expected values not to be loosely deep-equal:"
    };
    kMaxShortLength = 12;
    AssertionError = class extends Error2 {
      constructor(options) {
        var __super = (...args) => {
          super(...args);
        };
        if (typeof options !== "object" || options === null) {
          throw new ERR_INVALID_ARG_TYPE2("options", "Object", options);
        }
        const {
          message,
          operator,
          stackStartFn,
          details,
          stackStartFunction
        } = options;
        let {
          actual,
          expected
        } = options;
        const limit = Error2.stackTraceLimit;
        Error2.stackTraceLimit = 0;
        if (message != null) {
          __super(String(message));
        } else {
          if (true) {
            blue = "\x1B[34m";
            green = "\x1B[32m";
            defaultColor = "\x1B[39m";
            red = "\x1B[31m";
          }
          if (typeof actual === "object" && actual !== null && typeof expected === "object" && expected !== null && "stack" in actual && actual instanceof Error2 && "stack" in expected && expected instanceof Error2) {
            actual = copyError(actual);
            expected = copyError(expected);
          }
          if (operator === "deepStrictEqual" || operator === "strictEqual") {
            __super(createErrDiff(actual, expected, operator));
          } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
            let base = kReadableOperator[operator];
            const res = inspectValue(actual).split("\n");
            if (operator === "notStrictEqual" && (typeof actual === "object" && actual !== null || typeof actual === "function")) {
              base = kReadableOperator.notStrictEqualObject;
            }
            if (res.length > 50) {
              res[46] = `${blue}...${defaultColor}`;
              while (res.length > 47) {
                res.pop();
              }
            }
            if (res.length === 1) {
              __super(`${base}${res[0].length > 5 ? "\n\n" : " "}${res[0]}`);
            } else {
              __super(`${base}

${res.join("\n")}
`);
            }
          } else {
            let res = inspectValue(actual);
            let other = inspectValue(expected);
            const knownOperator = kReadableOperator[operator ?? ""];
            if (operator === "notDeepEqual" && res === other) {
              res = `${knownOperator}

${res}`;
              if (res.length > 1024) {
                res = `${res.slice(0, 1021)}...`;
              }
              __super(res);
            } else {
              if (res.length > 512) {
                res = `${res.slice(0, 509)}...`;
              }
              if (other.length > 512) {
                other = `${other.slice(0, 509)}...`;
              }
              if (operator === "deepEqual") {
                res = `${knownOperator}

${res}

should loosely deep-equal

`;
              } else {
                const newOp = kReadableOperator[`${operator}Unequal`];
                if (newOp) {
                  res = `${newOp}

${res}

should not loosely deep-equal

`;
                } else {
                  other = ` ${operator} ${other}`;
                }
              }
              __super(`${res}${other}`);
            }
          }
        }
        Error2.stackTraceLimit = limit;
        this.generatedMessage = !message;
        ObjectDefineProperty(this, "name", {
          __proto__: null,
          value: "AssertionError [ERR_ASSERTION]",
          enumerable: false,
          writable: true,
          configurable: true
        });
        this.code = "ERR_ASSERTION";
        if (details) {
          this.actual = void 0;
          this.expected = void 0;
          this.operator = void 0;
          for (let i = 0; i < details.length; i++) {
            this["message " + i] = details[i].message;
            this["actual " + i] = details[i].actual;
            this["expected " + i] = details[i].expected;
            this["operator " + i] = details[i].operator;
            this["stack trace " + i] = details[i].stack;
          }
        } else {
          this.actual = actual;
          this.expected = expected;
          this.operator = operator;
        }
        Error2.captureStackTrace(this, stackStartFn || stackStartFunction);
        this.stack;
        this.name = "AssertionError";
      }
      toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
      }
      [inspect.custom](_recurseTimes, ctx) {
        const tmpActual = this.actual;
        const tmpExpected = this.expected;
        for (const name of ["actual", "expected"]) {
          if (typeof this[name] === "string") {
            const value = this[name];
            const lines = value.split("\n");
            if (lines.length > 10) {
              lines.length = 10;
              this[name] = `${lines.join("\n")}
...`;
            } else if (value.length > 512) {
              this[name] = `${value.slice(512)}...`;
            }
          }
        }
        const result = inspect(this, {
          ...ctx,
          customInspect: false,
          depth: 0
        });
        this.actual = tmpActual;
        this.expected = tmpExpected;
        return result;
      }
    };
  }
});

// ../../node/assert/lib/esm/index.js
function innerFail(obj) {
  if (obj.message instanceof Error)
    throw obj.message;
  throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
  const argsLen = arguments.length;
  let internalMessage;
  if (argsLen === 0) {
    internalMessage = "Failed";
  } else if (argsLen === 1) {
    message = actual;
    actual = void 0;
  } else {
    if (warned === false) {
      warned = true;
      const warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
      warn(
        "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
        "DeprecationWarning",
        "DEP0094"
      );
    }
    if (argsLen === 2)
      operator = "!=";
  }
  if (message instanceof Error)
    throw message;
  const errArgs = {
    actual,
    expected,
    operator: operator === void 0 ? "fail" : operator,
    stackStartFn: stackStartFn || fail
  };
  if (message !== void 0) {
    errArgs.message = message;
  }
  const err = new AssertionError(errArgs);
  if (internalMessage) {
    err.message = internalMessage;
    err.generatedMessage = true;
  }
  throw err;
}
function innerOk(fn, argLen, value, message) {
  if (!value) {
    let generatedMessage = false;
    if (argLen === 0) {
      generatedMessage = true;
      message = "No value argument passed to `assert.ok()`";
    } else if (message instanceof Error) {
      throw message;
    }
    const err = new AssertionError({
      actual: value,
      expected: true,
      message,
      operator: "==",
      stackStartFn: fn
    });
    err.generatedMessage = generatedMessage;
    throw err;
  }
}
function ok(...args) {
  innerOk(ok, args.length, args[0], args[1]);
}
function compareExceptionKey(actual, expected, key, message, keys3, fn) {
  if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
    if (!message) {
      const a = new Comparison(actual, keys3);
      const b = new Comparison(expected, keys3, actual);
      const err = new AssertionError({
        actual: a,
        expected: b,
        operator: "deepStrictEqual",
        stackStartFn: fn
      });
      err.actual = actual;
      err.expected = expected;
      err.operator = fn.name;
      throw err;
    }
    innerFail({
      actual,
      expected,
      message,
      operator: fn.name,
      stackStartFn: fn
    });
  }
}
function expectedException(actual, expected, msg, fn) {
  if (typeof expected !== "function") {
    if (isRegExp5(expected))
      return RegExpPrototypeTest(expected, actual);
    if (arguments.length === 2) {
      throw new ERR_INVALID_ARG_TYPE3(
        "expected",
        ["Function", "RegExp"],
        expected
      );
    }
    if (typeof actual !== "object" || actual === null) {
      const err = new AssertionError({
        actual,
        expected,
        message: msg,
        operator: "deepStrictEqual",
        stackStartFn: fn
      });
      err.operator = fn.name;
      throw err;
    }
    const keys3 = Object.keys(expected);
    if (expected instanceof Error) {
      keys3.push("name", "message");
    } else if (keys3.length === 0) {
      throw new ERR_INVALID_ARG_VALUE3(
        "error",
        expected,
        "may not be an empty object"
      );
    }
    keys3.forEach((key) => {
      if (typeof actual[key] === "string" && isRegExp5(expected[key]) && RegExpPrototypeTest(expected[key], actual[key])) {
        return;
      }
      compareExceptionKey(actual, expected, key, msg, keys3, fn);
    });
    return true;
  }
  if (expected.prototype !== void 0 && actual instanceof expected) {
    return true;
  }
  if (Error.isPrototypeOf(expected)) {
    return false;
  }
  return expected.call({}, actual) === true;
}
function getActual(fn) {
  if (typeof fn !== "function") {
    throw new ERR_INVALID_ARG_TYPE3("fn", "Function", fn);
  }
  try {
    fn();
  } catch (e) {
    return e;
  }
  return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
  return isPromise5(obj) || obj !== null && typeof obj === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
}
function waitForActual(promiseFn) {
  return Promise.resolve().then(() => {
    let resultPromise;
    if (typeof promiseFn === "function") {
      resultPromise = promiseFn();
      if (!checkIsPromise(resultPromise)) {
        throw new ERR_INVALID_RETURN_VALUE(
          "instance of Promise",
          "promiseFn",
          resultPromise
        );
      }
    } else if (checkIsPromise(promiseFn)) {
      resultPromise = promiseFn;
    } else {
      throw new ERR_INVALID_ARG_TYPE3("promiseFn", ["Function", "Promise"], promiseFn);
    }
    return Promise.resolve().then(() => resultPromise).then(() => NO_EXCEPTION_SENTINEL).catch((e) => e);
  });
}
function expectsError(stackStartFn, actual, error, message) {
  if (typeof error === "string") {
    if (arguments.length === 4) {
      throw new ERR_INVALID_ARG_TYPE3(
        "error",
        ["Object", "Error", "Function", "RegExp"],
        error
      );
    }
    if (typeof actual === "object" && actual !== null) {
      if (actual.message === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT(
          "error/message",
          `The error message "${actual.message}" is identical to the message.`
        );
      }
    } else if (actual === error) {
      throw new ERR_AMBIGUOUS_ARGUMENT(
        "error/message",
        `The error "${actual}" is identical to the message.`
      );
    }
    message = error;
    error = void 0;
  } else if (error != null && typeof error !== "object" && typeof error !== "function") {
    throw new ERR_INVALID_ARG_TYPE3(
      "error",
      ["Object", "Error", "Function", "RegExp"],
      error
    );
  }
  if (actual === NO_EXCEPTION_SENTINEL) {
    let details = "";
    if (error && error.name) {
      details += ` (${error.name})`;
    }
    details += message ? `: ${message}` : ".";
    const fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
    innerFail({
      actual: void 0,
      expected: error,
      operator: stackStartFn.name,
      message: `Missing expected ${fnType}${details}`,
      stackStartFn
    });
  }
  if (error && !expectedException(actual, error, message, stackStartFn)) {
    throw actual;
  }
}
function expectsNoError(stackStartFn, actual, error, message) {
  if (actual === NO_EXCEPTION_SENTINEL)
    return;
  if (typeof error === "string") {
    message = error;
    error = void 0;
  }
  if (!error || expectedException(actual, error)) {
    const details = message ? `: ${message}` : ".";
    const fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
    innerFail({
      actual,
      expected: error,
      operator: stackStartFn.name,
      message: `Got unwanted ${fnType}${details}
Actual message: "${actual && actual.message}"`,
      stackStartFn
    });
  }
  throw actual;
}
function throws(promiseFn, ...args) {
  expectsError(throws, getActual(promiseFn), args[0], args[1]);
}
async function rejects(promiseFn, ...args) {
  return waitForActual(promiseFn).then((result) => {
    return expectsError(rejects, result, args[0], args[1]);
  });
}
function doesNotThrow(fn, ...args) {
  expectsNoError(doesNotThrow, getActual(fn), args[0], args[1]);
}
async function doesNotReject(fn, ...args) {
  return waitForActual(fn).then((result) => {
    return expectsNoError(doesNotReject, result, args[0], args[1]);
  });
}
function ifError(err) {
  if (err !== null && err !== void 0) {
    let message = "ifError got unwanted exception: ";
    if (typeof err === "object" && typeof err.message === "string") {
      if (err.message.length === 0 && err.constructor) {
        message += err.constructor.name;
      } else {
        message += err.message;
      }
    } else {
      message += inspect(err);
    }
    const newErr = new AssertionError({
      actual: err,
      expected: null,
      operator: "ifError",
      message,
      stackStartFn: ifError
    });
    const origStack = err.stack;
    if (typeof origStack === "string") {
      const tmp2 = origStack.split("\n");
      tmp2.shift();
      let tmp1 = newErr.stack.split("\n");
      for (var i = 0; i < tmp2.length; i++) {
        const pos = tmp1.indexOf(tmp2[i]);
        if (pos !== -1) {
          tmp1 = tmp1.slice(0, pos);
          break;
        }
      }
      newErr.stack = `${tmp1.join("\n")}
${tmp2.join("\n")}`;
    }
    throw newErr;
  }
}
function internalMatch(string, regexp, message, fn, fnName) {
  if (!isRegExp5(regexp)) {
    throw new ERR_INVALID_ARG_TYPE3(
      "regexp",
      "RegExp",
      regexp
    );
  }
  const match3 = fnName === "match";
  if (typeof string !== "string" || RegExpPrototypeTest(regexp, string) !== match3) {
    if (message instanceof Error) {
      throw message;
    }
    const generatedMessage = !message;
    message = message || (typeof string !== "string" ? `The "string" argument must be of type string. Received type ${typeof string} (${inspect(string)})` : (match3 ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + `${inspect(regexp)}. Input:

${inspect(string)}
`);
    const err = new AssertionError({
      actual: string,
      expected: regexp,
      message,
      operator: fnName,
      stackStartFn: fn
    });
    err.generatedMessage = generatedMessage;
    throw err;
  }
}
function strict(...args) {
  innerOk(strict, args.length, args[0], args[1]);
}
var import_callBound, ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE3, ERR_INVALID_ARG_VALUE3, ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS, isPromise5, isRegExp5, RegExpPrototypeTest, warned, NO_EXCEPTION_SENTINEL, assert, equal2, notEqual2, deepEqual2, notDeepEqual2, deepStrictEqual2, notDeepStrictEqual2, strictEqual2, notStrictEqual2, Comparison, match2, doesNotMatch2, src_default;
var init_esm3 = __esm({
  "../../node/assert/lib/esm/index.js"() {
    init_lib2();
    init_esm();
    init_comparisons();
    init_assertion_error();
    import_callBound = __toESM(require_callBound());
    ({
      ERR_AMBIGUOUS_ARGUMENT,
      ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE3,
      ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE3,
      ERR_INVALID_RETURN_VALUE,
      ERR_MISSING_ARGS
    } = codes);
    ({ isPromise: isPromise5, isRegExp: isRegExp5 } = types_exports);
    RegExpPrototypeTest = (0, import_callBound.default)("RegExp.prototype.test");
    warned = false;
    NO_EXCEPTION_SENTINEL = {};
    assert = ok;
    assert.fail = fail;
    assert.AssertionError = AssertionError;
    assert.ok = ok;
    assert.equal = function equal(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (actual != expected) {
        innerFail({
          actual,
          expected,
          message,
          operator: "==",
          stackStartFn: equal
        });
      }
    };
    equal2 = assert.equal;
    assert.notEqual = function notEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (actual == expected) {
        innerFail({
          actual,
          expected,
          message,
          operator: "!=",
          stackStartFn: notEqual
        });
      }
    };
    notEqual2 = assert.notEqual;
    assert.deepEqual = function deepEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (!isDeepEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "deepEqual",
          stackStartFn: deepEqual
        });
      }
    };
    deepEqual2 = assert.deepEqual;
    assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notDeepEqual",
          stackStartFn: notDeepEqual
        });
      }
    };
    notDeepEqual2 = assert.notDeepEqual;
    assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (!isDeepStrictEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "deepStrictEqual",
          stackStartFn: deepStrictEqual
        });
      }
    };
    deepStrictEqual2 = assert.deepStrictEqual;
    assert.notDeepStrictEqual = function notDeepStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (isDeepStrictEqual(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notDeepStrictEqual",
          stackStartFn: notDeepStrictEqual
        });
      }
    };
    notDeepStrictEqual2 = assert.notDeepStrictEqual;
    assert.strictEqual = function strictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (!Object.is(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "strictEqual",
          stackStartFn: strictEqual
        });
      }
    };
    strictEqual2 = assert.strictEqual;
    assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
      if (arguments.length < 2) {
        throw new ERR_MISSING_ARGS("actual", "expected");
      }
      if (Object.is(actual, expected)) {
        innerFail({
          actual,
          expected,
          message,
          operator: "notStrictEqual",
          stackStartFn: notStrictEqual
        });
      }
    };
    notStrictEqual2 = assert.notStrictEqual;
    Comparison = class {
      constructor(obj, keys3, actual) {
        keys3.forEach((key) => {
          if (key in obj) {
            if (actual !== void 0 && typeof actual[key] === "string" && isRegExp5(obj[key]) && RegExpPrototypeTest(obj[key], actual[key])) {
              this[key] = actual[key];
            } else {
              this[key] = obj[key];
            }
          }
        });
      }
    };
    assert.throws = throws;
    assert.rejects = rejects;
    assert.doesNotThrow = doesNotThrow;
    assert.doesNotReject = doesNotReject;
    assert.ifError = ifError;
    assert.match = function match(string, regexp, message) {
      internalMatch(string, regexp, message, match, "match");
    };
    match2 = assert.match;
    assert.doesNotMatch = function doesNotMatch(string, regexp, message) {
      internalMatch(string, regexp, message, doesNotMatch, "doesNotMatch");
    };
    doesNotMatch2 = assert.doesNotMatch;
    assert.strict = Object.assign(strict, assert, {
      equal: assert.strictEqual,
      deepEqual: assert.deepStrictEqual,
      notEqual: assert.notStrictEqual,
      notDeepEqual: assert.notDeepStrictEqual
    });
    assert.strict.strict = assert.strict;
    src_default = assert;
  }
});

// ../../node/events/lib/esm/event-emitter.js
function init() {
  this._events = {};
  if (this._conf) {
    configure.call(this, this._conf);
  }
}
function configure(conf) {
  if (conf) {
    this._conf = conf;
    conf.delimiter && (this.delimiter = conf.delimiter);
    if (conf.maxListeners !== void 0) {
      this._maxListeners = conf.maxListeners;
    }
    conf.wildcard && (this.wildcard = conf.wildcard);
    conf.newListener && (this._newListener = conf.newListener);
    conf.removeListener && (this._removeListener = conf.removeListener);
    conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
    conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
    if (this.wildcard) {
      this.listenerTree = {};
    }
  }
}
function logPossibleMemoryLeak(count, eventName) {
  var errorMsg = "(node) warning: possible EventEmitter memory leak detected. " + count + " listeners added. Use emitter.setMaxListeners() to increase limit.";
  if (this.verboseMemoryLeak) {
    errorMsg += " Event name: " + eventName + ".";
  }
  if (typeof process !== "undefined" && process.emitWarning) {
    var e = new Error(errorMsg);
    e.name = "MaxListenersExceededWarning";
    e.emitter = this;
    e.count = count;
    process.emitWarning(e);
  } else {
    console.error(errorMsg);
    if (console.trace) {
      console.trace();
    }
  }
}
function toObject(keys3, values) {
  var obj = {};
  var key;
  var len = keys3.length;
  var valuesCount = values ? values.length : 0;
  for (var i = 0; i < len; i++) {
    key = keys3[i];
    obj[key] = i < valuesCount ? values[i] : void 0;
  }
  return obj;
}
function TargetObserver(emitter, target2, options) {
  this._emitter = emitter;
  this._target = target2;
  this._listeners = {};
  this._listenersCount = 0;
  var on, off;
  if (options.on || options.off) {
    on = options.on;
    off = options.off;
  }
  if (target2.addEventListener) {
    on = target2.addEventListener;
    off = target2.removeEventListener;
  } else if (target2.addListener) {
    on = target2.addListener;
    off = target2.removeListener;
  } else if (target2.on) {
    on = target2.on;
    off = target2.off;
  }
  if (!on && !off) {
    throw Error("target does not implement any known event API");
  }
  if (typeof on !== "function") {
    throw TypeError("on method must be a function");
  }
  if (typeof off !== "function") {
    throw TypeError("off method must be a function");
  }
  this._on = on;
  this._off = off;
  var _observers = emitter._observers;
  if (_observers) {
    _observers.push(this);
  } else {
    emitter._observers = [this];
  }
}
function resolveOptions(options, schema, reducers, allowUnknown) {
  var computedOptions = Object.assign({}, schema);
  if (!options)
    return computedOptions;
  if (typeof options !== "object") {
    throw TypeError("options must be an object");
  }
  var keys3 = Object.keys(options);
  var length2 = keys3.length;
  var option, value;
  var reducer;
  function reject(reason) {
    throw Error('Invalid "' + option + '" option value' + (reason ? ". Reason: " + reason : ""));
  }
  for (var i = 0; i < length2; i++) {
    option = keys3[i];
    if (!allowUnknown && !hasOwnProperty2.call(schema, option)) {
      throw Error('Unknown "' + option + '" option');
    }
    value = options[option];
    if (value !== void 0) {
      reducer = reducers[option];
      computedOptions[option] = reducer ? reducer(value, reject) : value;
    }
  }
  return computedOptions;
}
function constructorReducer(value, reject) {
  if (typeof value !== "function" || !value.hasOwnProperty("prototype")) {
    reject("value must be a constructor");
  }
  return value;
}
function makeTypeReducer(types2) {
  var message = "value must be type of " + types2.join("|");
  var len = types2.length;
  var firstType = types2[0];
  var secondType = types2[1];
  if (len === 1) {
    return function(v, reject) {
      if (typeof v === firstType) {
        return v;
      }
      reject(message);
    };
  }
  if (len === 2) {
    return function(v, reject) {
      var kind = typeof v;
      if (kind === firstType || kind === secondType)
        return v;
      reject(message);
    };
  }
  return function(v, reject) {
    var kind = typeof v;
    var i = len;
    while (i-- > 0) {
      if (kind === types2[i])
        return v;
    }
    reject(message);
  };
}
function makeCancelablePromise(Promise22, executor, options) {
  var isCancelable;
  var callbacks;
  var timer = 0;
  var subscriptionClosed;
  var promise = new Promise22(function(resolve3, reject, onCancel) {
    options = resolveOptions(options, {
      timeout: 0,
      overload: false
    }, {
      timeout: function(value, reject2) {
        value *= 1;
        if (typeof value !== "number" || value < 0 || !Number.isFinite(value)) {
          reject2("timeout must be a positive number");
        }
        return value;
      }
    });
    isCancelable = !options.overload && typeof Promise22.prototype.cancel === "function" && typeof onCancel === "function";
    function cleanup() {
      if (callbacks) {
        callbacks = null;
      }
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
    }
    var _resolve = function(value) {
      cleanup();
      resolve3(value);
    };
    var _reject = function(err) {
      cleanup();
      reject(err);
    };
    if (isCancelable) {
      executor(_resolve, _reject, onCancel);
    } else {
      callbacks = [function(reason) {
        _reject(reason || Error("canceled"));
      }];
      executor(_resolve, _reject, function(cb) {
        if (subscriptionClosed) {
          throw Error("Unable to subscribe on cancel event asynchronously");
        }
        if (typeof cb !== "function") {
          throw TypeError("onCancel callback must be a function");
        }
        callbacks.push(cb);
      });
      subscriptionClosed = true;
    }
    if (options.timeout > 0) {
      timer = setTimeout(function() {
        var reason = Error("timeout");
        reason.code = "ETIMEDOUT";
        timer = 0;
        promise.cancel(reason);
        reject(reason);
      }, options.timeout);
    }
  });
  if (!isCancelable) {
    promise.cancel = function(reason) {
      if (!callbacks) {
        return;
      }
      var length2 = callbacks.length;
      for (var i = 1; i < length2; i++) {
        callbacks[i](reason);
      }
      callbacks[0](reason);
      callbacks = null;
    };
  }
  return promise;
}
function findTargetIndex(observer) {
  var observers = this._observers;
  if (!observers) {
    return -1;
  }
  var len = observers.length;
  for (var i = 0; i < len; i++) {
    if (observers[i]._target === observer)
      return i;
  }
  return -1;
}
function searchListenerTree(handlers, type, tree, i, typeLength) {
  if (!tree) {
    return null;
  }
  if (i === 0) {
    var kind = typeof type;
    if (kind === "string") {
      var ns, n, l = 0, j = 0, delimiter3 = this.delimiter, dl = delimiter3.length;
      if ((n = type.indexOf(delimiter3)) !== -1) {
        ns = new Array(5);
        do {
          ns[l++] = type.slice(j, n);
          j = n + dl;
        } while ((n = type.indexOf(delimiter3, j)) !== -1);
        ns[l++] = type.slice(j);
        type = ns;
        typeLength = l;
      } else {
        type = [type];
        typeLength = 1;
      }
    } else if (kind === "object") {
      typeLength = type.length;
    } else {
      type = [type];
      typeLength = 1;
    }
  }
  var listeners = null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i], nextType = type[i + 1], branches, _listeners;
  if (i === typeLength) {
    if (tree._listeners) {
      if (typeof tree._listeners === "function") {
        handlers && handlers.push(tree._listeners);
        listeners = [tree];
      } else {
        handlers && handlers.push.apply(handlers, tree._listeners);
        listeners = [tree];
      }
    }
  } else {
    if (currentType === "*") {
      branches = ownKeys(tree);
      n = branches.length;
      while (n-- > 0) {
        branch = branches[n];
        if (branch !== "_listeners") {
          _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
          if (_listeners) {
            if (listeners) {
              listeners.push.apply(listeners, _listeners);
            } else {
              listeners = _listeners;
            }
          }
        }
      }
      return listeners;
    } else if (currentType === "**") {
      endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === "*";
      if (endReached && tree._listeners) {
        listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
      }
      branches = ownKeys(tree);
      n = branches.length;
      while (n-- > 0) {
        branch = branches[n];
        if (branch !== "_listeners") {
          if (branch === "*" || branch === "**") {
            if (tree[branch]._listeners && !endReached) {
              _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
              if (_listeners) {
                if (listeners) {
                  listeners.push.apply(listeners, _listeners);
                } else {
                  listeners = _listeners;
                }
              }
            }
            _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
          } else if (branch === nextType) {
            _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
          } else {
            _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
          }
          if (_listeners) {
            if (listeners) {
              listeners.push.apply(listeners, _listeners);
            } else {
              listeners = _listeners;
            }
          }
        }
      }
      return listeners;
    } else if (tree[currentType]) {
      listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
    }
  }
  xTree = tree["*"];
  if (xTree) {
    searchListenerTree(handlers, type, xTree, i + 1, typeLength);
  }
  xxTree = tree["**"];
  if (xxTree) {
    if (i < typeLength) {
      if (xxTree._listeners) {
        searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
      }
      branches = ownKeys(xxTree);
      n = branches.length;
      while (n-- > 0) {
        branch = branches[n];
        if (branch !== "_listeners") {
          if (branch === nextType) {
            searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
          } else if (branch === currentType) {
            searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
          } else {
            isolatedBranch = {};
            isolatedBranch[branch] = xxTree[branch];
            searchListenerTree(handlers, type, { "**": isolatedBranch }, i + 1, typeLength);
          }
        }
      }
    } else if (xxTree._listeners) {
      searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
    } else if (xxTree["*"] && xxTree["*"]._listeners) {
      searchListenerTree(handlers, type, xxTree["*"], typeLength, typeLength);
    }
  }
  return listeners;
}
function growListenerTree(type, listener, prepend) {
  var len = 0, j = 0, i, delimiter3 = this.delimiter, dl = delimiter3.length, ns;
  if (typeof type === "string") {
    if ((i = type.indexOf(delimiter3)) !== -1) {
      ns = new Array(5);
      do {
        ns[len++] = type.slice(j, i);
        j = i + dl;
      } while ((i = type.indexOf(delimiter3, j)) !== -1);
      ns[len++] = type.slice(j);
    } else {
      ns = [type];
      len = 1;
    }
  } else {
    ns = type;
    len = type.length;
  }
  if (len > 1) {
    for (i = 0; i + 1 < len; i++) {
      if (ns[i] === "**" && ns[i + 1] === "**") {
        return;
      }
    }
  }
  var tree = this.listenerTree, name;
  for (i = 0; i < len; i++) {
    name = ns[i];
    tree = tree[name] || (tree[name] = {});
    if (i === len - 1) {
      if (!tree._listeners) {
        tree._listeners = listener;
      } else {
        if (typeof tree._listeners === "function") {
          tree._listeners = [tree._listeners];
        }
        if (prepend) {
          tree._listeners.unshift(listener);
        } else {
          tree._listeners.push(listener);
        }
        if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
          tree._listeners.warned = true;
          logPossibleMemoryLeak.call(this, tree._listeners.length, name);
        }
      }
      return true;
    }
  }
  return true;
}
function collectTreeEvents(tree, events, root, asArray) {
  var branches = ownKeys(tree);
  var i = branches.length;
  var branch, branchName, path2;
  var hasListeners = tree["_listeners"];
  var isArrayPath;
  while (i-- > 0) {
    branchName = branches[i];
    branch = tree[branchName];
    if (branchName === "_listeners") {
      path2 = root;
    } else {
      path2 = root ? root.concat(branchName) : [branchName];
    }
    isArrayPath = asArray || typeof branchName === "symbol";
    hasListeners && events.push(isArrayPath ? path2 : path2.join(this.delimiter));
    if (typeof branch === "object") {
      collectTreeEvents.call(this, branch, events, path2, isArrayPath);
    }
  }
  return events;
}
function recursivelyGarbageCollect(root) {
  var keys3 = ownKeys(root);
  var i = keys3.length;
  var obj, key, flag;
  while (i-- > 0) {
    key = keys3[i];
    obj = root[key];
    if (obj) {
      flag = true;
      if (key !== "_listeners" && !recursivelyGarbageCollect(obj)) {
        delete root[key];
      }
    }
  }
  return flag;
}
function Listener(emitter, event, listener) {
  this.emitter = emitter;
  this.event = event;
  this.listener = listener;
}
function setupListener(event, listener, options) {
  if (options === true) {
    promisify7 = true;
  } else if (options === false) {
    async = true;
  } else {
    if (!options || typeof options !== "object") {
      throw TypeError("options should be an object or true");
    }
    var async = options.async;
    var promisify7 = options.promisify;
    var nextTick2 = options.nextTick;
    var objectify = options.objectify;
  }
  if (async || nextTick2 || promisify7) {
    var _listener = listener;
    var _origin = listener._origin || listener;
    if (nextTick2 && !nextTickSupported) {
      throw Error("process.nextTick is not supported");
    }
    if (promisify7 === void 0) {
      promisify7 = listener.constructor.name === "AsyncFunction";
    }
    listener = function() {
      var args = arguments;
      var context = this;
      var event2 = this.event;
      return promisify7 ? nextTick2 ? Promise.resolve() : new Promise(function(resolve3) {
        _setImmediate(resolve3);
      }).then(function() {
        context.event = event2;
        return _listener.apply(context, args);
      }) : (nextTick2 ? process.nextTick : _setImmediate)(function() {
        context.event = event2;
        _listener.apply(context, args);
      });
    };
    listener._async = true;
    listener._origin = _origin;
  }
  return [listener, objectify ? new Listener(this, event, listener) : this];
}
function once(emitter, name, options) {
  options = resolveOptions(options, {
    Promise,
    timeout: 0,
    overload: false
  }, {
    Promise: constructorReducer
  });
  var _Promise = options.Promise;
  return makeCancelablePromise(_Promise, function(resolve3, reject, onCancel) {
    var handler;
    if (typeof emitter.addEventListener === "function") {
      handler = function() {
        resolve3(toArray.apply(null, arguments));
      };
      onCancel(function() {
        emitter.removeEventListener(name, handler);
      });
      emitter.addEventListener(
        name,
        handler,
        { once: true }
      );
      return;
    }
    var eventListener = function() {
      errorListener && emitter.removeListener("error", errorListener);
      resolve3(toArray.apply(null, arguments));
    };
    var errorListener;
    if (name !== "error") {
      errorListener = function(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };
      emitter.once("error", errorListener);
    }
    onCancel(function() {
      errorListener && emitter.removeListener("error", errorListener);
      emitter.removeListener(name, eventListener);
    });
    emitter.once(name, eventListener);
  }, {
    timeout: options.timeout,
    overload: options.overload
  });
}
var hasOwnProperty2, isArray2, defaultMaxListeners, nextTickSupported, symbolsSupported, reflectSupported, setImmediateSupported, _setImmediate, ownKeys, toArray, functionReducer, objectFunctionReducer, EventEmitter, prototype;
var init_event_emitter = __esm({
  "../../node/events/lib/esm/event-emitter.js"() {
    hasOwnProperty2 = Object.hasOwnProperty;
    isArray2 = Array.isArray ? Array.isArray : function _isArray(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    };
    defaultMaxListeners = 10;
    nextTickSupported = typeof process == "object" && typeof process.nextTick == "function";
    symbolsSupported = typeof Symbol === "function";
    reflectSupported = typeof Reflect === "object";
    setImmediateSupported = typeof setImmediate === "function";
    _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
    ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === "function" ? Reflect.ownKeys : function(obj) {
      var arr = Object.getOwnPropertyNames(obj);
      arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
      return arr;
    } : Object.keys;
    toArray = function(a, b, c) {
      var n = arguments.length;
      switch (n) {
        case 0:
          return [];
        case 1:
          return [a];
        case 2:
          return [a, b];
        case 3:
          return [a, b, c];
        default:
          var arr = new Array(n);
          while (n--) {
            arr[n] = arguments[n];
          }
          return arr;
      }
    };
    Object.assign(TargetObserver.prototype, {
      subscribe: function(event, localEvent, reducer) {
        var observer = this;
        var target2 = this._target;
        var emitter = this._emitter;
        var listeners = this._listeners;
        var handler = function() {
          var args = toArray.apply(null, arguments);
          var eventObj = {
            data: args,
            name: localEvent,
            original: event
          };
          if (reducer) {
            var result = reducer.call(target2, eventObj);
            if (result !== false) {
              emitter.emit.apply(emitter, [eventObj.name].concat(args));
            }
            return;
          }
          emitter.emit.apply(emitter, [localEvent].concat(args));
        };
        if (listeners[event]) {
          throw Error("Event '" + event + "' is already listening");
        }
        this._listenersCount++;
        if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
          this._onNewListener = function(_event) {
            if (_event === localEvent && listeners[event] === null) {
              listeners[event] = handler;
              observer._on.call(target2, event, handler);
            }
          };
          emitter.on("newListener", this._onNewListener);
          this._onRemoveListener = function(_event) {
            if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
              listeners[event] = null;
              observer._off.call(target2, event, handler);
            }
          };
          listeners[event] = null;
          emitter.on("removeListener", this._onRemoveListener);
        } else {
          listeners[event] = handler;
          observer._on.call(target2, event, handler);
        }
      },
      unsubscribe: function(event) {
        var observer = this;
        var listeners = this._listeners;
        var emitter = this._emitter;
        var handler;
        var events;
        var off = this._off;
        var target2 = this._target;
        var i;
        if (event && typeof event !== "string") {
          throw TypeError("event must be a string");
        }
        function clearRefs() {
          if (observer._onNewListener) {
            emitter.off("newListener", observer._onNewListener);
            emitter.off("removeListener", observer._onRemoveListener);
            observer._onNewListener = null;
            observer._onRemoveListener = null;
          }
          var index = findTargetIndex.call(emitter, observer);
          emitter._observers.splice(index, 1);
        }
        if (event) {
          handler = listeners[event];
          if (!handler)
            return;
          off.call(target2, event, handler);
          delete listeners[event];
          if (!--this._listenersCount) {
            clearRefs();
          }
        } else {
          events = ownKeys(listeners);
          i = events.length;
          while (i-- > 0) {
            event = events[i];
            off.call(target2, event, listeners[event]);
          }
          this._listeners = {};
          this._listenersCount = 0;
          clearRefs();
        }
      }
    });
    functionReducer = makeTypeReducer(["function"]);
    objectFunctionReducer = makeTypeReducer(["object", "function"]);
    Listener.prototype.off = function() {
      this.emitter.off(this.event, this.listener);
      return this;
    };
    EventEmitter = class {
      constructor(conf) {
        this.delimiter = ".";
        this.event = "";
        this.addListener = this.on;
        this.removeListener = this.off;
        this._events = {};
        this._newListener = false;
        this._removeListener = false;
        this.verboseMemoryLeak = false;
        configure.call(this, conf);
      }
      listenTo(target2, events, options) {
        if (typeof target2 !== "object") {
          throw TypeError("target musts be an object");
        }
        var emitter = this;
        options = resolveOptions(options, {
          on: void 0,
          off: void 0,
          reducers: void 0
        }, {
          on: functionReducer,
          off: functionReducer,
          reducers: objectFunctionReducer
        });
        function listen(events2) {
          if (typeof events2 !== "object") {
            throw TypeError("events must be an object");
          }
          var reducers = options.reducers;
          var index = findTargetIndex.call(emitter, target2);
          var observer;
          if (index === -1) {
            observer = new TargetObserver(emitter, target2, options);
          } else {
            observer = emitter._observers[index];
          }
          var keys3 = ownKeys(events2);
          var len = keys3.length;
          var event;
          var isSingleReducer = typeof reducers === "function";
          for (var i = 0; i < len; i++) {
            event = keys3[i];
            observer.subscribe(
              event,
              events2[event] || event,
              isSingleReducer ? reducers : reducers && reducers[event]
            );
          }
        }
        isArray2(events) ? listen(toObject(events)) : typeof events === "string" ? listen(toObject(events.split(/\s+/))) : listen(events);
        return this;
      }
      stopListeningTo(target2, event) {
        var observers = this._observers;
        if (!observers) {
          return false;
        }
        var i = observers.length;
        var observer;
        var matched = false;
        if (target2 && typeof target2 !== "object") {
          throw TypeError("target should be an object");
        }
        while (i-- > 0) {
          observer = observers[i];
          if (!target2 || observer._target === target2) {
            observer.unsubscribe(event);
            matched = true;
          }
        }
        return matched;
      }
      setMaxListeners(n) {
        if (n !== void 0) {
          this._maxListeners = n;
          if (!this._conf)
            this._conf = {};
          this._conf.maxListeners = n;
        }
      }
      getMaxListeners() {
        return this._maxListeners;
      }
      once(event, fn, options) {
        return this._once(event, fn, false, options);
      }
      prependOnceListener(event, fn, options) {
        return this._once(event, fn, true, options);
      }
      _once(event, fn, prepend, options) {
        return this._many(event, 1, fn, prepend, options);
      }
      many(event, ttl, fn, options) {
        return this._many(event, ttl, fn, false, options);
      }
      prependMany(event, ttl, fn, options) {
        return this._many(event, ttl, fn, true, options);
      }
      _many(event, ttl, fn, prepend, options) {
        var self2 = this;
        if (typeof fn !== "function") {
          throw new Error("many only accepts instances of Function");
        }
        function listener() {
          if (--ttl === 0) {
            self2.off(event, listener);
          }
          return fn.apply(this, arguments);
        }
        listener._origin = fn;
        return this._on(event, listener, prepend, options);
      }
      emit() {
        if (!this._events && !this._all) {
          return false;
        }
        this._events || init.call(this);
        var type = arguments[0], ns, wildcard = this.wildcard;
        var args, l, i, j, containsSymbol;
        if (type === "newListener" && !this._newListener) {
          if (!this._events.newListener) {
            return false;
          }
        }
        if (wildcard) {
          ns = type;
          if (type !== "newListener" && type !== "removeListener") {
            if (typeof type === "object") {
              l = type.length;
              if (symbolsSupported) {
                for (i = 0; i < l; i++) {
                  if (typeof type[i] === "symbol") {
                    containsSymbol = true;
                    break;
                  }
                }
              }
              if (!containsSymbol) {
                type = type.join(this.delimiter);
              }
            }
          }
        }
        var al = arguments.length;
        var handler;
        if (this._all && this._all.length) {
          handler = this._all.slice();
          for (i = 0, l = handler.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                handler[i].call(this, type);
                break;
              case 2:
                handler[i].call(this, type, arguments[1]);
                break;
              case 3:
                handler[i].call(this, type, arguments[1], arguments[2]);
                break;
              default:
                handler[i].apply(this, arguments);
            }
          }
        }
        if (wildcard) {
          handler = [];
          searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
        } else {
          handler = this._events[type];
          if (typeof handler === "function") {
            this.event = type;
            switch (al) {
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
              default:
                args = new Array(al - 1);
                for (j = 1; j < al; j++)
                  args[j - 1] = arguments[j];
                handler.apply(this, args);
            }
            return true;
          } else if (handler) {
            handler = handler.slice();
          }
        }
        if (handler && handler.length) {
          if (al > 3) {
            args = new Array(al - 1);
            for (j = 1; j < al; j++)
              args[j - 1] = arguments[j];
          }
          for (i = 0, l = handler.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                handler[i].call(this);
                break;
              case 2:
                handler[i].call(this, arguments[1]);
                break;
              case 3:
                handler[i].call(this, arguments[1], arguments[2]);
                break;
              default:
                handler[i].apply(this, args);
            }
          }
          return true;
        } else if (!this.ignoreErrors && !this._all && type === "error") {
          if (arguments[1] instanceof Error) {
            throw arguments[1];
          } else {
            throw new Error("Uncaught, unspecified 'error' event.");
          }
        }
        return !!this._all;
      }
      emitAsync() {
        if (!this._events && !this._all) {
          return false;
        }
        this._events || init.call(this);
        var type = arguments[0], wildcard = this.wildcard, ns, containsSymbol;
        var args, l, i, j;
        if (type === "newListener" && !this._newListener) {
          if (!this._events.newListener) {
            return Promise.resolve([false]);
          }
        }
        if (wildcard) {
          ns = type;
          if (type !== "newListener" && type !== "removeListener") {
            if (typeof type === "object") {
              l = type.length;
              if (symbolsSupported) {
                for (i = 0; i < l; i++) {
                  if (typeof type[i] === "symbol") {
                    containsSymbol = true;
                    break;
                  }
                }
              }
              if (!containsSymbol) {
                type = type.join(this.delimiter);
              }
            }
          }
        }
        var promises = [];
        var al = arguments.length;
        var handler;
        if (this._all) {
          for (i = 0, l = this._all.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                promises.push(this._all[i].call(this, type));
                break;
              case 2:
                promises.push(this._all[i].call(this, type, arguments[1]));
                break;
              case 3:
                promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
                break;
              default:
                promises.push(this._all[i].apply(this, arguments));
            }
          }
        }
        if (wildcard) {
          handler = [];
          searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
        } else {
          handler = this._events[type];
        }
        if (typeof handler === "function") {
          this.event = type;
          switch (al) {
            case 1:
              promises.push(handler.call(this));
              break;
            case 2:
              promises.push(handler.call(this, arguments[1]));
              break;
            case 3:
              promises.push(handler.call(this, arguments[1], arguments[2]));
              break;
            default:
              args = new Array(al - 1);
              for (j = 1; j < al; j++)
                args[j - 1] = arguments[j];
              promises.push(handler.apply(this, args));
          }
        } else if (handler && handler.length) {
          handler = handler.slice();
          if (al > 3) {
            args = new Array(al - 1);
            for (j = 1; j < al; j++)
              args[j - 1] = arguments[j];
          }
          for (i = 0, l = handler.length; i < l; i++) {
            this.event = type;
            switch (al) {
              case 1:
                promises.push(handler[i].call(this));
                break;
              case 2:
                promises.push(handler[i].call(this, arguments[1]));
                break;
              case 3:
                promises.push(handler[i].call(this, arguments[1], arguments[2]));
                break;
              default:
                promises.push(handler[i].apply(this, args));
            }
          }
        } else if (!this.ignoreErrors && !this._all && type === "error") {
          if (arguments[1] instanceof Error) {
            return Promise.reject(arguments[1]);
          } else {
            return Promise.reject("Uncaught, unspecified 'error' event.");
          }
        }
        return Promise.all(promises);
      }
      on(type, listener, options) {
        return this._on(type, listener, false, options);
      }
      prependListener(type, listener, options) {
        return this._on(type, listener, true, options);
      }
      onAny(fn) {
        return this._onAny(fn, false);
      }
      prependAny(fn) {
        return this._onAny(fn, true);
      }
      _onAny(fn, prepend) {
        if (typeof fn !== "function") {
          throw new Error("onAny only accepts instances of Function");
        }
        if (!this._all) {
          this._all = [];
        }
        if (prepend) {
          this._all.unshift(fn);
        } else {
          this._all.push(fn);
        }
        return this;
      }
      _on(type, listener, prepend, options) {
        if (typeof type === "function") {
          this._onAny(type, listener);
          return this;
        }
        if (typeof listener !== "function") {
          throw new Error("on only accepts instances of Function");
        }
        this._events || init.call(this);
        var returnValue = this, temp;
        if (options !== void 0) {
          temp = setupListener.call(this, type, listener, options);
          listener = temp[0];
          returnValue = temp[1];
        }
        if (this._newListener) {
          this.emit("newListener", type, listener);
        }
        if (this.wildcard) {
          growListenerTree.call(this, type, listener, prepend);
          return returnValue;
        }
        if (!this._events[type]) {
          this._events[type] = listener;
        } else {
          if (typeof this._events[type] === "function") {
            this._events[type] = [this._events[type]];
          }
          if (prepend) {
            this._events[type].unshift(listener);
          } else {
            this._events[type].push(listener);
          }
          if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
            this._events[type].warned = true;
            logPossibleMemoryLeak.call(this, this._events[type].length, type);
          }
        }
        return returnValue;
      }
      off(type, listener) {
        if (typeof listener !== "function") {
          throw new Error("removeListener only takes instances of Function");
        }
        var handlers, leafs = [];
        if (this.wildcard) {
          var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
          leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
          if (!leafs)
            return this;
        } else {
          if (!this._events[type])
            return this;
          handlers = this._events[type];
          leafs.push({ _listeners: handlers });
        }
        for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
          var leaf = leafs[iLeaf];
          handlers = leaf._listeners;
          if (isArray2(handlers)) {
            var position = -1;
            for (var i = 0, length2 = handlers.length; i < length2; i++) {
              if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
                position = i;
                break;
              }
            }
            if (position < 0) {
              continue;
            }
            if (this.wildcard) {
              leaf._listeners.splice(position, 1);
            } else {
              this._events[type].splice(position, 1);
            }
            if (handlers.length === 0) {
              if (this.wildcard) {
                delete leaf._listeners;
              } else {
                delete this._events[type];
              }
            }
            if (this._removeListener)
              this.emit("removeListener", type, listener);
            return this;
          } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
            if (this.wildcard) {
              delete leaf._listeners;
            } else {
              delete this._events[type];
            }
            if (this._removeListener)
              this.emit("removeListener", type, listener);
          }
        }
        this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        return this;
      }
      offAny(fn) {
        var i = 0, l = 0, fns;
        if (fn && this._all && this._all.length > 0) {
          fns = this._all;
          for (i = 0, l = fns.length; i < l; i++) {
            if (fn === fns[i]) {
              fns.splice(i, 1);
              if (this._removeListener)
                this.emit("removeListenerAny", fn);
              return this;
            }
          }
        } else {
          fns = this._all;
          if (this._removeListener) {
            for (i = 0, l = fns.length; i < l; i++)
              this.emit("removeListenerAny", fns[i]);
          }
          this._all = [];
        }
        return this;
      }
      removeAllListeners(type) {
        if (type === void 0) {
          !this._events || init.call(this);
          return this;
        }
        if (this.wildcard) {
          var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
          if (!leafs)
            return this;
          for (i = 0; i < leafs.length; i++) {
            leaf = leafs[i];
            leaf._listeners = null;
          }
          this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
        } else if (this._events) {
          this._events[type] = null;
        }
        return this;
      }
      listeners(type) {
        var _events = this._events;
        var keys3, listeners, allListeners;
        var i;
        var listenerTree;
        if (type === void 0) {
          if (this.wildcard) {
            throw Error("event name required for wildcard emitter");
          }
          if (!_events) {
            return [];
          }
          keys3 = ownKeys(_events);
          i = keys3.length;
          allListeners = [];
          while (i-- > 0) {
            listeners = _events[keys3[i]];
            if (typeof listeners === "function") {
              allListeners.push(listeners);
            } else {
              allListeners.push.apply(allListeners, listeners);
            }
          }
          return allListeners;
        } else {
          if (this.wildcard) {
            listenerTree = this.listenerTree;
            if (!listenerTree)
              return [];
            var handlers = [];
            var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
            searchListenerTree.call(this, handlers, ns, listenerTree, 0);
            return handlers;
          }
          if (!_events) {
            return [];
          }
          listeners = _events[type];
          if (!listeners) {
            return [];
          }
          return typeof listeners === "function" ? [listeners] : listeners;
        }
      }
      eventNames(nsAsArray) {
        var _events = this._events;
        return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
      }
      listenerCount(type) {
        return this.listeners(type).length;
      }
      hasListeners(type) {
        if (this.wildcard) {
          var handlers = [];
          var ns = typeof type === "string" ? type.split(this.delimiter) : type.slice();
          searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
          return handlers.length > 0;
        }
        var _events = this._events;
        var _all = this._all;
        return !!(_all && _all.length || _events && (type === void 0 ? ownKeys(_events).length : _events[type]));
      }
      listenersAny() {
        if (this._all) {
          return this._all;
        } else {
          return [];
        }
      }
      waitFor(event, options) {
        var self2 = this;
        var type = typeof options;
        if (type === "number") {
          options = { timeout: options };
        } else if (type === "function") {
          options = { filter: options };
        }
        options = resolveOptions(options, {
          timeout: 0,
          filter: void 0,
          handleError: false,
          Promise,
          overload: false
        }, {
          filter: functionReducer,
          Promise: constructorReducer
        });
        return makeCancelablePromise(options.Promise, function(resolve3, reject, onCancel) {
          function listener() {
            var filter2 = options.filter;
            if (filter2 && !filter2.apply(self2, arguments)) {
              return;
            }
            self2.off(event, listener);
            if (options.handleError) {
              var err = arguments[0];
              err ? reject(err) : resolve3(toArray.apply(null, arguments).slice(1));
            } else {
              resolve3(toArray.apply(null, arguments));
            }
          }
          onCancel(function() {
            self2.off(event, listener);
          });
          self2._on(event, listener, false);
        }, {
          timeout: options.timeout,
          overload: options.overload
        });
      }
    };
    prototype = EventEmitter.prototype;
    Object.defineProperties(EventEmitter, {
      defaultMaxListeners: {
        get: function() {
          return prototype._maxListeners;
        },
        set: function(n) {
          if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
            throw TypeError("n must be a non-negative number");
          }
          prototype._maxListeners = n;
        },
        enumerable: true
      },
      once: {
        value: once,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperties(prototype, {
      _maxListeners: {
        value: defaultMaxListeners,
        writable: true,
        configurable: true
      },
      _observers: { value: null, writable: true, configurable: true }
    });
    EventEmitter.EventEmitter = EventEmitter;
  }
});

// ../../web/event-target/lib/misc.js
function assertType(condition, message, ...args) {
  if (!condition) {
    throw new TypeError(format(message, args));
  }
}
function format(message, args) {
  let i = 0;
  return message.replace(/%[os]/gu, () => anyToString(args[i++]));
}
function anyToString(x) {
  if (typeof x !== "object" || x === null) {
    return String(x);
  }
  return Object.prototype.toString.call(x);
}
var init_misc = __esm({
  "../../web/event-target/lib/misc.js"() {
  }
});

// ../../web/event-target/lib/error-handler.js
function reportError(maybeError) {
  try {
    const error = maybeError instanceof Error ? maybeError : new Error(anyToString(maybeError));
    if (currentErrorHandler) {
      currentErrorHandler(error);
      return;
    }
    if (typeof dispatchEvent === "function" && typeof ErrorEvent === "function") {
      dispatchEvent(
        new ErrorEvent("error", { error, message: error.message })
      );
    } else if (typeof process !== "undefined" && typeof process.emit === "function") {
      process.emit("uncaughtException", error);
      return;
    }
    console.error(error);
  } catch {
  }
}
var currentErrorHandler;
var init_error_handler = __esm({
  "../../web/event-target/lib/error-handler.js"() {
    init_misc();
  }
});

// ../../web/event-target/lib/warning-handler.js
var currentWarnHandler, Warning;
var init_warning_handler = __esm({
  "../../web/event-target/lib/warning-handler.js"() {
    init_misc();
    Warning = class {
      constructor(code, message) {
        this.code = code;
        this.message = message;
      }
      warn(...args) {
        try {
          if (currentWarnHandler) {
            currentWarnHandler({ ...this, args });
            return;
          }
          const stack = (new Error().stack ?? "").replace(
            /^(?:.+?\n){2}/gu,
            "\n"
          );
          console.warn(this.message, ...args, stack);
        } catch {
        }
      }
    };
  }
});

// ../../web/event-target/lib/warnings.js
var InitEventWasCalledWhileDispatching, FalsyWasAssignedToCancelBubble, TruthyWasAssignedToReturnValue, NonCancelableEventWasCanceled, CanceledInPassiveListener, EventListenerWasDuplicated, OptionWasIgnored, InvalidEventListener, InvalidAttributeHandler;
var init_warnings = __esm({
  "../../web/event-target/lib/warnings.js"() {
    init_warning_handler();
    InitEventWasCalledWhileDispatching = new Warning(
      "W01",
      "Unable to initialize event under dispatching."
    );
    FalsyWasAssignedToCancelBubble = new Warning(
      "W02",
      "Assigning any falsy value to 'cancelBubble' property has no effect."
    );
    TruthyWasAssignedToReturnValue = new Warning(
      "W03",
      "Assigning any truthy value to 'returnValue' property has no effect."
    );
    NonCancelableEventWasCanceled = new Warning(
      "W04",
      "Unable to preventDefault on non-cancelable events."
    );
    CanceledInPassiveListener = new Warning(
      "W05",
      "Unable to preventDefault inside passive event listener invocation."
    );
    EventListenerWasDuplicated = new Warning(
      "W06",
      "An event listener wasn't added because it has been added already: %o, %o"
    );
    OptionWasIgnored = new Warning(
      "W07",
      "The %o option value was abandoned because the event listener wasn't added as duplicated."
    );
    InvalidEventListener = new Warning(
      "W08",
      "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"
    );
    InvalidAttributeHandler = new Warning("W09", "Event attribute handler must be a function: %o");
  }
});

// ../../web/event-target/lib/event.js
function $(event, name = "this") {
  const retv = internalDataMap.get(event);
  assertType(
    retv != null,
    "'%s' must be an object that Event constructor created, but got another one: %o",
    name,
    event
  );
  return retv;
}
function setCancelFlag(data) {
  if (data.inPassiveListenerFlag) {
    CanceledInPassiveListener.warn();
    return;
  }
  if (!data.cancelable) {
    NonCancelableEventWasCanceled.warn();
    return;
  }
  data.canceledFlag = true;
}
var Event, NONE, CAPTURING_PHASE, AT_TARGET, BUBBLING_PHASE, internalDataMap, keys;
var init_event = __esm({
  "../../web/event-target/lib/event.js"() {
    init_misc();
    init_warnings();
    Event = class {
      static get NONE() {
        return NONE;
      }
      static get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
      }
      static get AT_TARGET() {
        return AT_TARGET;
      }
      static get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
      }
      constructor(type, eventInitDict) {
        Object.defineProperty(this, "isTrusted", {
          value: false,
          enumerable: true
        });
        const opts = eventInitDict ?? {};
        internalDataMap.set(this, {
          type: String(type),
          bubbles: Boolean(opts.bubbles),
          cancelable: Boolean(opts.cancelable),
          composed: Boolean(opts.composed),
          target: null,
          currentTarget: null,
          stopPropagationFlag: false,
          stopImmediatePropagationFlag: false,
          canceledFlag: false,
          inPassiveListenerFlag: false,
          dispatchFlag: false,
          timeStamp: Date.now()
        });
      }
      get type() {
        return $(this).type;
      }
      get target() {
        return $(this).target;
      }
      get srcElement() {
        return $(this).target;
      }
      get currentTarget() {
        return $(this).currentTarget;
      }
      composedPath() {
        const currentTarget = $(this).currentTarget;
        if (currentTarget) {
          return [currentTarget];
        }
        return [];
      }
      get NONE() {
        return NONE;
      }
      get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
      }
      get AT_TARGET() {
        return AT_TARGET;
      }
      get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
      }
      get eventPhase() {
        return $(this).dispatchFlag ? 2 : 0;
      }
      stopPropagation() {
        $(this).stopPropagationFlag = true;
      }
      get cancelBubble() {
        return $(this).stopPropagationFlag;
      }
      set cancelBubble(value) {
        if (value) {
          $(this).stopPropagationFlag = true;
        } else {
          FalsyWasAssignedToCancelBubble.warn();
        }
      }
      stopImmediatePropagation() {
        const data = $(this);
        data.stopPropagationFlag = data.stopImmediatePropagationFlag = true;
      }
      get bubbles() {
        return $(this).bubbles;
      }
      get cancelable() {
        return $(this).cancelable;
      }
      get returnValue() {
        return !$(this).canceledFlag;
      }
      set returnValue(value) {
        if (!value) {
          setCancelFlag($(this));
        } else {
          TruthyWasAssignedToReturnValue.warn();
        }
      }
      preventDefault() {
        setCancelFlag($(this));
      }
      get defaultPrevented() {
        return $(this).canceledFlag;
      }
      get composed() {
        return $(this).composed;
      }
      get isTrusted() {
        return false;
      }
      get timeStamp() {
        return $(this).timeStamp;
      }
      initEvent(type, bubbles = false, cancelable = false) {
        const data = $(this);
        if (data.dispatchFlag) {
          InitEventWasCalledWhileDispatching.warn();
          return;
        }
        internalDataMap.set(this, {
          ...data,
          type: String(type),
          bubbles: Boolean(bubbles),
          cancelable: Boolean(cancelable),
          target: null,
          currentTarget: null,
          stopPropagationFlag: false,
          stopImmediatePropagationFlag: false,
          canceledFlag: false
        });
      }
    };
    NONE = 0;
    CAPTURING_PHASE = 1;
    AT_TARGET = 2;
    BUBBLING_PHASE = 3;
    internalDataMap = /* @__PURE__ */ new WeakMap();
    Object.defineProperty(Event, "NONE", { enumerable: true });
    Object.defineProperty(Event, "CAPTURING_PHASE", { enumerable: true });
    Object.defineProperty(Event, "AT_TARGET", { enumerable: true });
    Object.defineProperty(Event, "BUBBLING_PHASE", { enumerable: true });
    keys = Object.getOwnPropertyNames(Event.prototype);
    for (let i = 0; i < keys.length; ++i) {
      if (keys[i] === "constructor") {
        continue;
      }
      Object.defineProperty(Event.prototype, keys[i], { enumerable: true });
    }
    if (typeof globalThis !== "undefined" && typeof globalThis.Event !== "undefined") {
      Object.setPrototypeOf(Event.prototype, globalThis.Event.prototype);
    }
  }
});

// ../../web/event-target/lib/custom-event.js
var init_custom_event = __esm({
  "../../web/event-target/lib/custom-event.js"() {
    init_event();
    init_lib();
  }
});

// ../../web/event-target/lib/dom-exception.js
function createInvalidStateError(message) {
  if (globalThis.DOMException) {
    return new globalThis.DOMException(message, "InvalidStateError");
  }
  if (DOMException2 == null) {
    DOMException2 = class DOMException22 extends Error {
      constructor(msg) {
        super(msg);
        if (Error.captureStackTrace) {
          ;
          Error.captureStackTrace(this, DOMException22);
        }
      }
      get code() {
        return 11;
      }
      get name() {
        return "InvalidStateError";
      }
    };
    Object.defineProperties(DOMException2.prototype, {
      code: { enumerable: true },
      name: { enumerable: true }
    });
    defineErrorCodeProperties(DOMException2);
    defineErrorCodeProperties(DOMException2.prototype);
  }
  return new DOMException2(message);
}
function defineErrorCodeProperties(obj) {
  const keys3 = Object.keys(ErrorCodeMap);
  for (let i = 0; i < keys3.length; ++i) {
    const key = keys3[i];
    const value = ErrorCodeMap[key];
    Object.defineProperty(obj, key, {
      get() {
        return value;
      },
      configurable: true,
      enumerable: true
    });
  }
}
var DOMException2, ErrorCodeMap;
var init_dom_exception = __esm({
  "../../web/event-target/lib/dom-exception.js"() {
    ErrorCodeMap = {
      INDEX_SIZE_ERR: 1,
      DOMSTRING_SIZE_ERR: 2,
      HIERARCHY_REQUEST_ERR: 3,
      WRONG_DOCUMENT_ERR: 4,
      INVALID_CHARACTER_ERR: 5,
      NO_DATA_ALLOWED_ERR: 6,
      NO_MODIFICATION_ALLOWED_ERR: 7,
      NOT_FOUND_ERR: 8,
      NOT_SUPPORTED_ERR: 9,
      INUSE_ATTRIBUTE_ERR: 10,
      INVALID_STATE_ERR: 11,
      SYNTAX_ERR: 12,
      INVALID_MODIFICATION_ERR: 13,
      NAMESPACE_ERR: 14,
      INVALID_ACCESS_ERR: 15,
      VALIDATION_ERR: 16,
      TYPE_MISMATCH_ERR: 17,
      SECURITY_ERR: 18,
      NETWORK_ERR: 19,
      ABORT_ERR: 20,
      URL_MISMATCH_ERR: 21,
      QUOTA_EXCEEDED_ERR: 22,
      TIMEOUT_ERR: 23,
      INVALID_NODE_TYPE_ERR: 24,
      DATA_CLONE_ERR: 25
    };
  }
});

// ../../web/event-target/lib/event-wrapper.js
function $2(event) {
  const retv = internalDataMap2.get(event);
  assertType(
    retv != null,
    "'this' is expected an Event object, but got",
    event
  );
  return retv;
}
function getWrapperClassOf(originalEvent) {
  const prototype4 = Object.getPrototypeOf(originalEvent);
  if (prototype4 == null) {
    return EventWrapper;
  }
  let wrapper = wrapperClassCache.get(prototype4);
  if (wrapper == null) {
    wrapper = defineWrapper(getWrapperClassOf(prototype4), prototype4);
    wrapperClassCache.set(prototype4, wrapper);
  }
  return wrapper;
}
function defineWrapper(BaseEventWrapper, originalPrototype) {
  class CustomEventWrapper extends BaseEventWrapper {
  }
  const keys3 = Object.keys(originalPrototype);
  for (let i = 0; i < keys3.length; ++i) {
    Object.defineProperty(
      CustomEventWrapper.prototype,
      keys3[i],
      defineRedirectDescriptor(originalPrototype, keys3[i])
    );
  }
  return CustomEventWrapper;
}
function defineRedirectDescriptor(obj, key) {
  const d = Object.getOwnPropertyDescriptor(obj, key);
  return {
    get() {
      const original = $2(this).original;
      const value = original[key];
      if (typeof value === "function") {
        return value.bind(original);
      }
      return value;
    },
    set(value) {
      const original = $2(this).original;
      original[key] = value;
    },
    configurable: d.configurable,
    enumerable: d.enumerable
  };
}
var EventWrapper, internalDataMap2, wrapperClassCache;
var init_event_wrapper = __esm({
  "../../web/event-target/lib/event-wrapper.js"() {
    init_event();
    init_misc();
    EventWrapper = class extends Event {
      static wrap(event) {
        return new (getWrapperClassOf(event))(event);
      }
      constructor(event) {
        super(event.type, {
          bubbles: event.bubbles,
          cancelable: event.cancelable,
          composed: event.composed
        });
        if (event.cancelBubble) {
          super.stopPropagation();
        }
        if (event.defaultPrevented) {
          super.preventDefault();
        }
        internalDataMap2.set(this, { original: event });
        const keys3 = Object.keys(event);
        for (let i = 0; i < keys3.length; ++i) {
          const key = keys3[i];
          if (!(key in this)) {
            Object.defineProperty(
              this,
              key,
              defineRedirectDescriptor(event, key)
            );
          }
        }
      }
      stopPropagation() {
        super.stopPropagation();
        const { original } = $2(this);
        if ("stopPropagation" in original) {
          original.stopPropagation();
        }
      }
      get cancelBubble() {
        return super.cancelBubble;
      }
      set cancelBubble(value) {
        super.cancelBubble = value;
        const { original } = $2(this);
        if ("cancelBubble" in original) {
          original.cancelBubble = value;
        }
      }
      stopImmediatePropagation() {
        super.stopImmediatePropagation();
        const { original } = $2(this);
        if ("stopImmediatePropagation" in original) {
          original.stopImmediatePropagation();
        }
      }
      get returnValue() {
        return super.returnValue;
      }
      set returnValue(value) {
        super.returnValue = value;
        const { original } = $2(this);
        if ("returnValue" in original) {
          original.returnValue = value;
        }
      }
      preventDefault() {
        super.preventDefault();
        const { original } = $2(this);
        if ("preventDefault" in original) {
          original.preventDefault();
        }
      }
      get timeStamp() {
        const { original } = $2(this);
        if ("timeStamp" in original) {
          return original.timeStamp;
        }
        return super.timeStamp;
      }
    };
    internalDataMap2 = /* @__PURE__ */ new WeakMap();
    wrapperClassCache = /* @__PURE__ */ new WeakMap();
    wrapperClassCache.set(Object.prototype, EventWrapper);
    if (typeof globalThis !== "undefined" && typeof globalThis.Event !== "undefined") {
      wrapperClassCache.set(globalThis.Event.prototype, EventWrapper);
    }
  }
});

// ../../web/event-target/lib/listener.js
function createListener(callback, capture, passive, once3, signal, signalListener) {
  return {
    callback,
    flags: (capture ? ListenerFlags.Capture : 0) | (passive ? ListenerFlags.Passive : 0) | (once3 ? ListenerFlags.Once : 0),
    signal,
    signalListener
  };
}
function setRemoved(listener) {
  listener.flags |= ListenerFlags.Removed;
}
function isCapture(listener) {
  return (listener.flags & ListenerFlags.Capture) === ListenerFlags.Capture;
}
function isPassive(listener) {
  return (listener.flags & ListenerFlags.Passive) === ListenerFlags.Passive;
}
function isOnce(listener) {
  return (listener.flags & ListenerFlags.Once) === ListenerFlags.Once;
}
function isRemoved(listener) {
  return (listener.flags & ListenerFlags.Removed) === ListenerFlags.Removed;
}
function invokeCallback({ callback }, target2, event) {
  try {
    if (typeof callback === "function") {
      callback.call(target2, event);
    } else if (typeof callback.handleEvent === "function") {
      callback.handleEvent(event);
    }
  } catch (thrownError) {
    reportError(thrownError);
  }
}
var ListenerFlags;
var init_listener = __esm({
  "../../web/event-target/lib/listener.js"() {
    init_error_handler();
    ListenerFlags = /* @__PURE__ */ ((ListenerFlags2) => {
      ListenerFlags2[ListenerFlags2["Capture"] = 1] = "Capture";
      ListenerFlags2[ListenerFlags2["Passive"] = 2] = "Passive";
      ListenerFlags2[ListenerFlags2["Once"] = 4] = "Once";
      ListenerFlags2[ListenerFlags2["Removed"] = 8] = "Removed";
      return ListenerFlags2;
    })(ListenerFlags || {});
  }
});

// ../../web/event-target/lib/listener-list.js
function findIndexOfListener({ listeners }, callback, capture) {
  for (let i = 0; i < listeners.length; ++i) {
    if (listeners[i].callback === callback && isCapture(listeners[i]) === capture) {
      return i;
    }
  }
  return -1;
}
function addListener(list, callback, capture, passive, once3, signal) {
  let signalListener;
  if (signal) {
    signalListener = removeListener.bind(null, list, callback, capture);
    signal.addEventListener("abort", signalListener);
  }
  const listener = createListener(
    callback,
    capture,
    passive,
    once3,
    signal,
    signalListener
  );
  if (list.cow) {
    list.cow = false;
    list.listeners = [...list.listeners, listener];
  } else {
    list.listeners.push(listener);
  }
  return listener;
}
function removeListener(list, callback, capture) {
  const index = findIndexOfListener(list, callback, capture);
  if (index !== -1) {
    return removeListenerAt(list, index);
  }
  return false;
}
function removeListenerAt(list, index, disableCow = false) {
  const listener = list.listeners[index];
  setRemoved(listener);
  if (listener.signal) {
    listener.signal.removeEventListener("abort", listener.signalListener);
  }
  if (list.cow && !disableCow) {
    list.cow = false;
    list.listeners = list.listeners.filter((_, i) => i !== index);
    return false;
  }
  list.listeners.splice(index, 1);
  return true;
}
var init_listener_list = __esm({
  "../../web/event-target/lib/listener-list.js"() {
    init_listener();
  }
});

// ../../web/event-target/lib/listener-list-map.js
function createListenerListMap() {
  return /* @__PURE__ */ Object.create(null);
}
function ensureListenerList(listenerMap, type) {
  return listenerMap[type] ??= {
    attrCallback: void 0,
    attrListener: void 0,
    cow: false,
    listeners: []
  };
}
var init_listener_list_map = __esm({
  "../../web/event-target/lib/listener-list-map.js"() {
  }
});

// ../../web/event-target/lib/event-target.js
function $3(target2, name = "this") {
  const retv = internalDataMap3.get(target2);
  assertType(
    retv != null,
    "'%s' must be an object that EventTarget constructor created, but got another one: %o",
    name,
    target2
  );
  return retv;
}
function normalizeAddOptions(type, callback, options) {
  assertCallback(callback);
  if (typeof options === "object" && options !== null) {
    return {
      type: String(type),
      callback: callback ?? void 0,
      capture: Boolean(options.capture),
      passive: Boolean(options.passive),
      once: Boolean(options.once),
      signal: options.signal ?? void 0
    };
  }
  return {
    type: String(type),
    callback: callback ?? void 0,
    capture: Boolean(options),
    passive: false,
    once: false,
    signal: void 0
  };
}
function normalizeOptions(type, callback, options) {
  assertCallback(callback);
  if (typeof options === "object" && options !== null) {
    return {
      type: String(type),
      callback: callback ?? void 0,
      capture: Boolean(options.capture)
    };
  }
  return {
    type: String(type),
    callback: callback ?? void 0,
    capture: Boolean(options)
  };
}
function assertCallback(callback) {
  if (typeof callback === "function" || typeof callback === "object" && callback !== null && typeof callback.handleEvent === "function") {
    return;
  }
  if (callback == null || typeof callback === "object") {
    InvalidEventListener.warn(callback);
    return;
  }
  throw new TypeError(format(InvalidEventListener.message, [callback]));
}
function warnDuplicate(listener, passive, once3, signal) {
  EventListenerWasDuplicated.warn(
    isCapture(listener) ? "capture" : "bubble",
    listener.callback
  );
  if (isPassive(listener) !== passive) {
    OptionWasIgnored.warn("passive");
  }
  if (isOnce(listener) !== once3) {
    OptionWasIgnored.warn("once");
  }
  if (listener.signal !== signal) {
    OptionWasIgnored.warn("signal");
  }
}
var EventTarget, internalDataMap3, keys2;
var init_event_target = __esm({
  "../../web/event-target/lib/event-target.js"() {
    init_dom_exception();
    init_event();
    init_event_wrapper();
    init_listener();
    init_listener_list();
    init_listener_list_map();
    init_misc();
    init_warnings();
    EventTarget = class {
      constructor() {
        internalDataMap3.set(this, createListenerListMap());
      }
      addEventListener(type0, callback0, options0) {
        const listenerMap = $3(this);
        const {
          callback,
          capture,
          once: once3,
          passive,
          signal,
          type
        } = normalizeAddOptions(type0, callback0, options0);
        if (callback == null || signal?.aborted) {
          return;
        }
        const list = ensureListenerList(listenerMap, type);
        const i = findIndexOfListener(list, callback, capture);
        if (i !== -1) {
          warnDuplicate(list.listeners[i], passive, once3, signal);
          return;
        }
        addListener(list, callback, capture, passive, once3, signal);
      }
      removeEventListener(type0, callback0, options0) {
        const listenerMap = $3(this);
        const { callback, capture, type } = normalizeOptions(
          type0,
          callback0,
          options0
        );
        const list = listenerMap[type];
        if (callback != null && list) {
          removeListener(list, callback, capture);
        }
      }
      dispatchEvent(e) {
        const list = $3(this)[String(e.type)];
        if (list == null) {
          return true;
        }
        const event = e instanceof Event ? e : EventWrapper.wrap(e);
        const eventData = $(event, "event");
        if (eventData.dispatchFlag) {
          throw createInvalidStateError("This event has been in dispatching.");
        }
        eventData.dispatchFlag = true;
        eventData.target = eventData.currentTarget = this;
        if (!eventData.stopPropagationFlag) {
          const { cow, listeners } = list;
          list.cow = true;
          for (let i = 0; i < listeners.length; ++i) {
            const listener = listeners[i];
            if (isRemoved(listener)) {
              continue;
            }
            if (isOnce(listener) && removeListenerAt(list, i, !cow)) {
              i -= 1;
            }
            eventData.inPassiveListenerFlag = isPassive(listener);
            invokeCallback(listener, this, event);
            eventData.inPassiveListenerFlag = false;
            if (eventData.stopImmediatePropagationFlag) {
              break;
            }
          }
          if (!cow) {
            list.cow = false;
          }
        }
        eventData.target = null;
        eventData.currentTarget = null;
        eventData.stopImmediatePropagationFlag = false;
        eventData.stopPropagationFlag = false;
        eventData.dispatchFlag = false;
        return !eventData.canceledFlag;
      }
    };
    internalDataMap3 = /* @__PURE__ */ new WeakMap();
    keys2 = Object.getOwnPropertyNames(EventTarget.prototype);
    for (let i = 0; i < keys2.length; ++i) {
      if (keys2[i] === "constructor") {
        continue;
      }
      Object.defineProperty(EventTarget.prototype, keys2[i], { enumerable: true });
    }
    if (typeof globalThis !== "undefined" && typeof globalThis.EventTarget !== "undefined") {
      Object.setPrototypeOf(EventTarget.prototype, globalThis.EventTarget.prototype);
    }
  }
});

// ../../web/event-target/lib/event-attribute-handler.js
function getEventAttributeValue(target2, type) {
  const listMap = $3(target2, "target");
  return listMap[type]?.attrCallback ?? null;
}
function setEventAttributeValue(target2, type, callback) {
  if (callback != null && typeof callback !== "function") {
    InvalidAttributeHandler.warn(callback);
  }
  if (typeof callback === "function" || typeof callback === "object" && callback !== null) {
    upsertEventAttributeListener(target2, type, callback);
  } else {
    removeEventAttributeListener(target2, type);
  }
}
function upsertEventAttributeListener(target2, type, callback) {
  const list = ensureListenerList(
    $3(target2, "target"),
    String(type)
  );
  list.attrCallback = callback;
  if (list.attrListener == null) {
    list.attrListener = addListener(
      list,
      defineEventAttributeCallback(list),
      false,
      false,
      false,
      void 0
    );
  }
}
function removeEventAttributeListener(target2, type) {
  const listMap = $3(target2, "target");
  const list = listMap[String(type)];
  if (list && list.attrListener) {
    removeListener(list, list.attrListener.callback, false);
    list.attrCallback = list.attrListener = void 0;
  }
}
function defineEventAttributeCallback(list) {
  return function(event) {
    const callback = list.attrCallback;
    if (typeof callback === "function") {
      callback.call(this, event);
    }
  };
}
var init_event_attribute_handler = __esm({
  "../../web/event-target/lib/event-attribute-handler.js"() {
    init_event_target();
    init_listener_list();
    init_listener_list_map();
    init_warnings();
  }
});

// ../../web/event-target/lib/legacy.js
var init_legacy = __esm({
  "../../web/event-target/lib/legacy.js"() {
    init_event_attribute_handler();
    init_event_target();
  }
});

// ../../web/event-target/lib/index.js
var init_lib3 = __esm({
  "../../web/event-target/lib/index.js"() {
    init_error_handler();
    init_event();
    init_custom_event();
    init_event_attribute_handler();
    init_event_target();
    init_legacy();
    init_warning_handler();
  }
});

// ../../node/events/lib/esm/node-event-target.js
var NodeEventTarget;
var init_node_event_target = __esm({
  "../../node/events/lib/esm/node-event-target.js"() {
    init_lib3();
    init_lib();
    init_util();
    NodeEventTarget = class extends EventTarget {
      constructor() {
        super();
      }
      setMaxListeners(n) {
        warnNotImplemented("NodeEventTarget.setMaxListeners");
      }
      getMaxListeners() {
        warnNotImplemented("NodeEventTarget.getMaxListeners");
        return 0;
      }
      eventNames() {
        warnNotImplemented("NodeEventTarget.eventNames");
        return [];
      }
      listenerCount(type) {
        warnNotImplemented("NodeEventTarget.listenerCount");
        return 0;
      }
      off(type, listener, options) {
        this.removeEventListener(type, listener, options);
        return this;
      }
      removeListener(type, listener, options) {
        this.removeEventListener(type, listener, options);
        return this;
      }
      on(type, listener) {
        this.addEventListener(type, listener);
        return this;
      }
      addListener(type, listener) {
        this.addEventListener(type, listener);
        return this;
      }
      emit(type, arg) {
        const hadListeners = this.listenerCount(type) > 0;
        warnNotImplemented("NodeEventTarget.emit");
        return hadListeners;
      }
      once(type, listener) {
        this.addEventListener(type, listener, {
          once: true
        });
        return this;
      }
      removeAllListeners(type) {
        warnNotImplemented("NodeEventTarget.removeAllListeners");
        return this;
      }
    };
    NodeEventTarget.defaultMaxListeners = 10;
    Object.defineProperties(NodeEventTarget.prototype, {
      setMaxListeners: kEnumerableProperty,
      getMaxListeners: kEnumerableProperty,
      eventNames: kEnumerableProperty,
      listenerCount: kEnumerableProperty,
      off: kEnumerableProperty,
      removeListener: kEnumerableProperty,
      on: kEnumerableProperty,
      addListener: kEnumerableProperty,
      once: kEnumerableProperty,
      emit: kEnumerableProperty,
      removeAllListeners: kEnumerableProperty
    });
  }
});

// ../../node/events/lib/esm/index.js
var captureRejectionSymbol, errorMonitor;
var init_esm4 = __esm({
  "../../node/events/lib/esm/index.js"() {
    init_lib();
    init_event_emitter();
    init_node_event_target();
    captureRejectionSymbol = Symbol.for("nodejs.rejection");
    errorMonitor = Symbol("events.errorMonitor");
  }
});

// ../../node/readable-stream/out/ours/primordials.js
function ArrayIsArray(self2) {
  return Array.isArray(self2);
}
function ArrayPrototypeIncludes(self2, el) {
  return self2.includes(el);
}
function ArrayPrototypeIndexOf(self2, el) {
  return self2.indexOf(el);
}
function ArrayPrototypeJoin(self2, sep3) {
  return self2.join(sep3);
}
function ArrayPrototypeMap(self2, fn) {
  return self2.map(fn);
}
function ArrayPrototypePop(self2, el) {
  return self2.pop(el);
}
function ArrayPrototypePush(self2, el) {
  return self2.push(el);
}
function ArrayPrototypeSlice(self2, start, end) {
  return self2.slice(start, end);
}
function FunctionPrototypeSymbolHasInstance(self2, instance) {
  return Function.prototype[Symbol2.hasInstance].call(self2, instance);
}
function ObjectDefineProperties(self2, props) {
  return Object.defineProperties(self2, props);
}
function ObjectDefineProperty2(self2, name, prop) {
  return Object.defineProperty(self2, name, prop);
}
function ObjectGetOwnPropertyDescriptor2(self2, name) {
  return Object.getOwnPropertyDescriptor(self2, name);
}
function ObjectKeys2(obj) {
  return Object.keys(obj);
}
function ObjectSetPrototypeOf(target2, proto) {
  return Object.setPrototypeOf(target2, proto);
}
function PromisePrototypeThen(self2, thenFn, catchFn) {
  return self2.then(thenFn, catchFn);
}
function PromiseReject(err) {
  return Promise2.reject(err);
}
function StringPrototypeSlice(self2, start, end) {
  return self2.slice(start, end);
}
function StringPrototypeToLowerCase(self2) {
  return self2.toLowerCase();
}
function TypedArrayPrototypeSet(self2, buf, len) {
  return self2.set(buf, len);
}
var Error3, MathFloor, Number2, NumberIsInteger, NumberIsNaN, NumberMAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER, NumberParseInt, Promise2, ReflectApply, SafeSet, String2, Symbol2, SymbolAsyncIterator, SymbolHasInstance, SymbolIterator, Uint8Array2, ObjectPrototypeHasOwnProperty;
var init_primordials = __esm({
  "../../node/readable-stream/out/ours/primordials.js"() {
    Error3 = Error3;
    MathFloor = globalThis.Math.floor;
    Number2 = globalThis.Number;
    NumberIsInteger = globalThis.Number.isInteger;
    NumberIsNaN = globalThis.Number.isNaN;
    NumberMAX_SAFE_INTEGER = globalThis.Number.MAX_SAFE_INTEGER;
    NumberMIN_SAFE_INTEGER = globalThis.Number.MIN_SAFE_INTEGER;
    NumberParseInt = globalThis.Number.parseInt;
    Promise2 = Promise2;
    ReflectApply = Reflect.apply;
    SafeSet = globalThis.Set;
    String2 = globalThis.String;
    Symbol2 = globalThis.Symbol;
    SymbolAsyncIterator = Symbol2.asyncIterator;
    SymbolHasInstance = Symbol2.hasInstance;
    SymbolIterator = Symbol2.iterator;
    Uint8Array2 = globalThis.Uint8Array;
    ObjectPrototypeHasOwnProperty = Object.hasOwn;
  }
});

// ../../node/readable-stream/out/ours/util.js
function once2(callback) {
  let called = false;
  return function(...args) {
    if (called) {
      return;
    }
    called = true;
    callback.apply(this, args);
  };
}
function promisify5(fn) {
  return new Promise((resolve3, reject) => {
    fn((err, ...args) => {
      if (err) {
        return reject(err);
      }
      return resolve3(...args);
    });
  });
}
function format2(format23, ...args) {
  return format23.replace(/%([sdifj])/g, function(...[_unused, type]) {
    const replacement = args.shift();
    if (type === "f") {
      return replacement.toFixed(6);
    } else if (type === "j") {
      return JSON.stringify(replacement);
    } else if (type === "s" && typeof replacement === "object") {
      const ctor = replacement.constructor !== Object ? replacement.constructor.name : "";
      return `${ctor} {}`.trim();
    } else {
      return replacement.toString();
    }
  });
}
function inspect3(value) {
  switch (typeof value) {
    case "string":
      if (value.includes("'")) {
        if (!value.includes('"')) {
          return `"${value}"`;
        } else if (!value.includes("`") && !value.includes("${")) {
          return `\`${value}\``;
        }
      }
      return `'${value}'`;
    case "number":
      if (isNaN(value)) {
        return "NaN";
      } else if (Object.is(value, -0)) {
        return String(value);
      }
      return value;
    case "bigint":
      return `${String(value)}n`;
    case "boolean":
    case "undefined":
      return String(value);
    case "object":
      return "{}";
  }
}
var AsyncFunction, Blob2, AggregateError2, kEmptyObject2, types;
var init_util3 = __esm({
  "../../node/readable-stream/out/ours/util.js"() {
    init_esm2();
    AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    Blob2 = globalThis.Blob || Blob;
    AggregateError2 = class extends Error {
      constructor(errors) {
        if (!Array.isArray(errors)) {
          throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
        }
        let message = "";
        for (let i = 0; i < errors.length; i++) {
          message += `    ${errors[i].stack}
`;
        }
        super(message);
        this.name = "AggregateError";
        this.errors = errors;
      }
    };
    kEmptyObject2 = Object.freeze({});
    promisify5.custom = Symbol.for("nodejs.util.promisify.custom");
    types = {
      isAsyncFunction(fn) {
        return fn instanceof AsyncFunction;
      },
      isArrayBufferView(arr) {
        return ArrayBuffer.isView(arr);
      }
    };
  }
});

// ../../web/abort-controller/lib/esm/abort-signal.js
function createAbortSignal() {
  const signal = GjsifyAbortSignal._create();
  abortedFlags.set(signal, false);
  return signal;
}
function abortSignal(signal) {
  if (abortedFlags.get(signal) !== false) {
    return;
  }
  abortedFlags.set(signal, true);
  signal.dispatchEvent(new Event("abort"));
}
var GjsifyAbortSignal, abortedFlags;
var init_abort_signal = __esm({
  "../../web/abort-controller/lib/esm/abort-signal.js"() {
    init_lib3();
    GjsifyAbortSignal = class extends EventTarget {
      constructor(internal) {
        super();
        this.reason = void 0;
        if (!internal) {
          throw new TypeError("AbortSignal cannot be constructed directly");
        }
      }
      throwIfAborted() {
        console.warn("AbortSignal.throwIfAborted");
      }
      get onabort() {
        return getEventAttributeValue(this, "abort");
      }
      set onabort(callback) {
        setEventAttributeValue(this, "abort", callback);
      }
      static _create() {
        return new this(true);
      }
      get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
          throw new TypeError(
            `Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`
          );
        }
        return aborted;
      }
    };
    abortedFlags = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(GjsifyAbortSignal.prototype, {
      aborted: { enumerable: true }
    });
    if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
      Object.defineProperty(GjsifyAbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal"
      });
    }
  }
});

// ../../web/abort-controller/lib/esm/abort-controller.js
function getSignal(controller) {
  const signal = signals.get(controller);
  if (signal == null) {
    throw new TypeError(
      `Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`
    );
  }
  return signal;
}
var GjsifyAbortController, signals;
var init_abort_controller = __esm({
  "../../web/abort-controller/lib/esm/abort-controller.js"() {
    init_abort_signal();
    GjsifyAbortController = class {
      constructor() {
        signals.set(this, createAbortSignal());
      }
      get signal() {
        return getSignal(this);
      }
      abort() {
        abortSignal(getSignal(this));
      }
    };
    signals = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(GjsifyAbortController.prototype, {
      signal: { enumerable: true },
      abort: { enumerable: true }
    });
    if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
      Object.defineProperty(GjsifyAbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController"
      });
    }
  }
});

// ../../web/abort-controller/lib/esm/index.js
var AbortController2, AbortSignal;
var init_esm5 = __esm({
  "../../web/abort-controller/lib/esm/index.js"() {
    init_abort_controller();
    AbortController2 = globalThis.AbortController || GjsifyAbortController;
    AbortSignal = globalThis.AbortSignal || GjsifyAbortSignal;
  }
});

// ../../node/readable-stream/out/ours/errors.js
function assert2(value, message) {
  if (!value) {
    throw new codes3.ERR_INTERNAL_ASSERTION(message);
  }
}
function addNumericalSeparator2(val) {
  let res = "";
  let i = val.length;
  const start = val[0] === "-" ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`;
}
function getMessage(key, msg, args) {
  if (typeof msg === "function") {
    assert2(
      msg.length <= args.length,
      `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${msg.length}).`
    );
    return msg(...args);
  }
  const expectedLength = (msg.match(/%[dfijoOs]/g) || []).length;
  assert2(
    expectedLength === args.length,
    `Code: ${key}; The provided arguments length (${args.length}) does not match the required ones (${expectedLength}).`
  );
  if (args.length === 0) {
    return msg;
  }
  return format2(msg, ...args);
}
function E(code, message, Base) {
  if (!Base) {
    Base = Error;
  }
  class NodeError3 extends Base {
    constructor(...args) {
      super(getMessage(code, message, args));
    }
    toString() {
      return `${this.name} [${code}]: ${this.message}`;
    }
  }
  Object.defineProperties(NodeError3.prototype, {
    name: {
      value: Base.name,
      writable: true,
      enumerable: false,
      configurable: true
    },
    toString: {
      value() {
        return `${this.name} [${code}]: ${this.message}`;
      },
      writable: true,
      enumerable: false,
      configurable: true
    }
  });
  NodeError3.prototype.code = code;
  NodeError3.prototype[kIsNodeError2] = true;
  codes3[code] = NodeError3;
}
function _aggregateTwoErrors(innerError, outerError) {
  if (innerError && outerError && innerError !== outerError) {
    if (Array.isArray(outerError.errors)) {
      outerError.errors.push(innerError);
      return outerError;
    }
    const err = new AggregateError3([outerError, innerError], outerError.message);
    err.code = outerError.code;
    return err;
  }
  return innerError || outerError;
}
var AggregateError3, kIsNodeError2, kTypes2, classRegExp2, codes3, AbortError, aggregateTwoErrors, errors_default;
var init_errors2 = __esm({
  "../../node/readable-stream/out/ours/errors.js"() {
    init_util3();
    init_lib2();
    AggregateError3 = globalThis.AggregateError || AggregateError2;
    kIsNodeError2 = Symbol("kIsNodeError");
    kTypes2 = [
      "string",
      "function",
      "number",
      "object",
      "Function",
      "Object",
      "boolean",
      "bigint",
      "symbol"
    ];
    classRegExp2 = /^([A-Z][a-z0-9]*)+$/;
    codes3 = {};
    AbortError = class extends Error {
      constructor(message = "The operation was aborted", options = void 0) {
        if (options !== void 0 && typeof options !== "object") {
          throw new codes3.ERR_INVALID_ARG_TYPE("options", "Object", options);
        }
        super(message, options);
        this.code = "ABORT_ERR";
        this.name = "AbortError";
      }
    };
    E("ERR_ASSERTION", "%s", Error);
    E(
      "ERR_INVALID_ARG_TYPE",
      (name, expected, actual) => {
        assert2(typeof name === "string", "'name' must be a string");
        if (!Array.isArray(expected)) {
          expected = [expected];
        }
        let msg = "The ";
        if (name.endsWith(" argument")) {
          msg += `${name} `;
        } else {
          msg += `"${name}" ${name.includes(".") ? "property" : "argument"} `;
        }
        msg += "must be ";
        const types2 = [];
        const instances = [];
        const other = [];
        for (const value of expected) {
          assert2(typeof value === "string", "All expected entries have to be of type string");
          if (kTypes2.includes(value)) {
            types2.push(value.toLowerCase());
          } else if (classRegExp2.test(value)) {
            instances.push(value);
          } else {
            assert2(value !== "object", 'The value "object" should be written as "Object"');
            other.push(value);
          }
        }
        if (instances.length > 0) {
          const pos = types2.indexOf("object");
          if (pos !== -1) {
            types2.splice(types2, pos, 1);
            instances.push("Object");
          }
        }
        if (types2.length > 0) {
          switch (types2.length) {
            case 1:
              msg += `of type ${types2[0]}`;
              break;
            case 2:
              msg += `one of type ${types2[0]} or ${types2[1]}`;
              break;
            default: {
              const last = types2.pop();
              msg += `one of type ${types2.join(", ")}, or ${last}`;
            }
          }
          if (instances.length > 0 || other.length > 0) {
            msg += " or ";
          }
        }
        if (instances.length > 0) {
          switch (instances.length) {
            case 1:
              msg += `an instance of ${instances[0]}`;
              break;
            case 2:
              msg += `an instance of ${instances[0]} or ${instances[1]}`;
              break;
            default: {
              const last = instances.pop();
              msg += `an instance of ${instances.join(", ")}, or ${last}`;
            }
          }
          if (other.length > 0) {
            msg += " or ";
          }
        }
        switch (other.length) {
          case 0:
            break;
          case 1:
            if (other[0].toLowerCase() !== other[0]) {
              msg += "an ";
            }
            msg += `${other[0]}`;
            break;
          case 2:
            msg += `one of ${other[0]} or ${other[1]}`;
            break;
          default: {
            const last = other.pop();
            msg += `one of ${other.join(", ")}, or ${last}`;
          }
        }
        if (actual == null) {
          msg += `. Received ${actual}`;
        } else if (typeof actual === "function" && actual.name) {
          msg += `. Received function ${actual.name}`;
        } else if (typeof actual === "object") {
          var _actual$constructor;
          if ((_actual$constructor = actual.constructor) !== null && _actual$constructor !== void 0 && _actual$constructor.name) {
            msg += `. Received an instance of ${actual.constructor.name}`;
          } else {
            const inspected = inspect3(actual, {
              depth: -1
            });
            msg += `. Received ${inspected}`;
          }
        } else {
          let inspected = inspect3(actual, {
            colors: false
          });
          if (inspected.length > 25) {
            inspected = `${inspected.slice(0, 25)}...`;
          }
          msg += `. Received type ${typeof actual} (${inspected})`;
        }
        return msg;
      },
      TypeError
    );
    E(
      "ERR_INVALID_ARG_VALUE",
      (name, value, reason = "is invalid") => {
        let inspected = inspect3(value);
        if (inspected.length > 128) {
          inspected = inspected.slice(0, 128) + "...";
        }
        const type = name.includes(".") ? "property" : "argument";
        return `The ${type} '${name}' ${reason}. Received ${inspected}`;
      },
      TypeError
    );
    E(
      "ERR_INVALID_RETURN_VALUE",
      (input, name, value) => {
        var _value$constructor;
        const type = value !== null && value !== void 0 && (_value$constructor = value.constructor) !== null && _value$constructor !== void 0 && _value$constructor.name ? `instance of ${value.constructor.name}` : `type ${typeof value}`;
        return `Expected ${input} to be returned from the "${name}" function but got ${type}.`;
      },
      TypeError
    );
    E(
      "ERR_MISSING_ARGS",
      (...args) => {
        assert2(args.length > 0, "At least one arg needs to be specified");
        let msg;
        const len = args.length;
        args = (Array.isArray(args) ? args : [args]).map((a) => `"${a}"`).join(" or ");
        switch (len) {
          case 1:
            msg += `The ${args[0]} argument`;
            break;
          case 2:
            msg += `The ${args[0]} and ${args[1]} arguments`;
            break;
          default:
            {
              const last = args.pop();
              msg += `The ${args.join(", ")}, and ${last} arguments`;
            }
            break;
        }
        return `${msg} must be specified`;
      },
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      (str, range, input) => {
        assert2(range, 'Missing "range" argument');
        let received;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator2(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > 2n ** 32n || input < -(2n ** 32n)) {
            received = addNumericalSeparator2(received);
          }
          received += "n";
        } else {
          received = inspect3(input);
        }
        return `The value of "${str}" is out of range. It must be ${range}. Received ${received}`;
      },
      RangeError
    );
    E("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    E("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    E("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    E("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    E("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    E("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    E("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    E("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    E("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    E("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    E("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    aggregateTwoErrors = hideStackFrames(_aggregateTwoErrors);
    errors_default = {
      AbortError,
      aggregateTwoErrors,
      hideStackFrames,
      codes: codes3
    };
  }
});

// ../../node/readable-stream/out/internal/validators.js
function getOwnPropertyValueOrDefault(options, key, defaultValue) {
  return options == null || !ObjectPrototypeHasOwnProperty(options, key) ? defaultValue : options[key];
}
var isAsyncFunction5, isArrayBufferView4, validateInteger2, validateInt322, validateUint322, validateOneOf2, validateObject2, validateArray2, validateBuffer3, validateAbortSignal2, validateFunction3, validatePlainFunction, validateUndefined;
var init_validators2 = __esm({
  "../../node/readable-stream/out/internal/validators.js"() {
    init_primordials();
    init_lib2();
    init_util3();
    ({ isAsyncFunction: isAsyncFunction5, isArrayBufferView: isArrayBufferView4 } = types);
    validateInteger2 = hideStackFrames((value, name, min = NumberMIN_SAFE_INTEGER, max = NumberMAX_SAFE_INTEGER) => {
      if (typeof value !== "number")
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      if (!NumberIsInteger(value))
        throw new ERR_OUT_OF_RANGE(name, "an integer", value);
      if (value < min || value > max)
        throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    });
    validateInt322 = hideStackFrames((value, name, min = -2147483648, max = 2147483647) => {
      if (typeof value !== "number") {
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      }
      if (!NumberIsInteger(value)) {
        throw new ERR_OUT_OF_RANGE(name, "an integer", value);
      }
      if (value < min || value > max) {
        throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
    });
    validateUint322 = hideStackFrames((value, name, positive = false) => {
      if (typeof value !== "number") {
        throw new ERR_INVALID_ARG_TYPE(name, "number", value);
      }
      if (!NumberIsInteger(value)) {
        throw new ERR_OUT_OF_RANGE(name, "an integer", value);
      }
      const min = positive ? 1 : 0;
      const max = 4294967295;
      if (value < min || value > max) {
        throw new ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
      }
    });
    validateOneOf2 = hideStackFrames((value, name, oneOf) => {
      if (!ArrayPrototypeIncludes(oneOf, value)) {
        const allowed = ArrayPrototypeJoin(
          ArrayPrototypeMap(oneOf, (v) => typeof v === "string" ? `'${v}'` : String2(v)),
          ", "
        );
        const reason = "must be one of: " + allowed;
        throw new ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    validateObject2 = hideStackFrames((value, name, options = null) => {
      const allowArray = getOwnPropertyValueOrDefault(options, "allowArray", false);
      const allowFunction = getOwnPropertyValueOrDefault(options, "allowFunction", false);
      const nullable = getOwnPropertyValueOrDefault(options, "nullable", false);
      if (!nullable && value === null || !allowArray && ArrayIsArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
        throw new ERR_INVALID_ARG_TYPE(name, "Object", value);
      }
    });
    validateArray2 = hideStackFrames((value, name, minLength = 0) => {
      if (!ArrayIsArray(value)) {
        throw new ERR_INVALID_ARG_TYPE(name, "Array", value);
      }
      if (value.length < minLength) {
        const reason = `must be longer than ${minLength}`;
        throw new ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    validateBuffer3 = hideStackFrames((buffer, name = "buffer") => {
      if (!isArrayBufferView4(buffer)) {
        throw new ERR_INVALID_ARG_TYPE(name, ["Buffer", "TypedArray", "DataView"], buffer);
      }
    });
    validateAbortSignal2 = hideStackFrames((signal, name) => {
      if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
      }
    });
    validateFunction3 = hideStackFrames((value, name) => {
      if (typeof value !== "function")
        throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
    });
    validatePlainFunction = hideStackFrames((value, name) => {
      if (typeof value !== "function" || isAsyncFunction5(value))
        throw new ERR_INVALID_ARG_TYPE(name, "Function", value);
    });
    validateUndefined = hideStackFrames((value, name) => {
      if (value !== void 0)
        throw new ERR_INVALID_ARG_TYPE(name, "undefined", value);
    });
  }
});

// ../../node/readable-stream/out/internal/streams/utils.js
function isReadableNodeStream(obj, strict2 = false) {
  var _obj$_readableState;
  return !!(obj && typeof obj.pipe === "function" && typeof obj.on === "function" && (!strict2 || typeof obj.pause === "function" && typeof obj.resume === "function") && (!obj._writableState || ((_obj$_readableState = obj._readableState) === null || _obj$_readableState === void 0 ? void 0 : _obj$_readableState.readable) !== false) && (!obj._writableState || obj._readableState));
}
function isWritableNodeStream(obj) {
  var _obj$_writableState;
  return !!(obj && typeof obj.write === "function" && typeof obj.on === "function" && (!obj._readableState || ((_obj$_writableState = obj._writableState) === null || _obj$_writableState === void 0 ? void 0 : _obj$_writableState.writable) !== false));
}
function isNodeStream(obj) {
  return obj && (obj._readableState || obj._writableState || typeof obj.write === "function" && typeof obj.on === "function" || typeof obj.pipe === "function" && typeof obj.on === "function");
}
function isIterable(obj, isAsync) {
  if (obj == null)
    return false;
  if (isAsync === true)
    return typeof obj[SymbolAsyncIterator] === "function";
  if (isAsync === false)
    return typeof obj[SymbolIterator] === "function";
  return typeof obj[SymbolAsyncIterator] === "function" || typeof obj[SymbolIterator] === "function";
}
function isDestroyed(stream) {
  if (!isNodeStream(stream))
    return null;
  const wState = stream._writableState;
  const rState = stream._readableState;
  const state = wState || rState;
  return !!(stream.destroyed || stream[kDestroyed] || state !== null && state !== void 0 && state.destroyed);
}
function isWritableEnded(stream) {
  if (!isWritableNodeStream(stream))
    return null;
  if (stream.writableEnded === true)
    return true;
  const wState = stream._writableState;
  if (wState !== null && wState !== void 0 && wState.errored)
    return false;
  if (typeof (wState === null || wState === void 0 ? void 0 : wState.ended) !== "boolean")
    return null;
  return wState.ended;
}
function isWritableFinished(stream, strict2) {
  if (!isWritableNodeStream(stream))
    return null;
  if (stream.writableFinished === true)
    return true;
  const wState = stream._writableState;
  if (wState !== null && wState !== void 0 && wState.errored)
    return false;
  if (typeof (wState === null || wState === void 0 ? void 0 : wState.finished) !== "boolean")
    return null;
  return !!(wState.finished || strict2 === false && wState.ended === true && wState.length === 0);
}
function isReadableFinished(stream, strict2) {
  if (!isReadableNodeStream(stream))
    return null;
  const rState = stream._readableState;
  if (rState !== null && rState !== void 0 && rState.errored)
    return false;
  if (typeof (rState === null || rState === void 0 ? void 0 : rState.endEmitted) !== "boolean")
    return null;
  return !!(rState.endEmitted || strict2 === false && rState.ended === true && rState.length === 0);
}
function isReadable(stream) {
  if (stream && stream[kIsReadable] != null)
    return stream[kIsReadable];
  if (typeof (stream === null || stream === void 0 ? void 0 : stream.readable) !== "boolean")
    return null;
  if (isDestroyed(stream))
    return false;
  return isReadableNodeStream(stream) && stream.readable && !isReadableFinished(stream);
}
function isWritable(stream) {
  if (typeof (stream === null || stream === void 0 ? void 0 : stream.writable) !== "boolean")
    return null;
  if (isDestroyed(stream))
    return false;
  return isWritableNodeStream(stream) && stream.writable && !isWritableEnded(stream);
}
function isFinished(stream, opts) {
  if (!isNodeStream(stream)) {
    return null;
  }
  if (isDestroyed(stream)) {
    return true;
  }
  if ((opts === null || opts === void 0 ? void 0 : opts.readable) !== false && isReadable(stream)) {
    return false;
  }
  if ((opts === null || opts === void 0 ? void 0 : opts.writable) !== false && isWritable(stream)) {
    return false;
  }
  return true;
}
function isWritableErrored(stream) {
  var _stream$_writableStat, _stream$_writableStat2;
  if (!isNodeStream(stream)) {
    return null;
  }
  if (stream.writableErrored) {
    return stream.writableErrored;
  }
  return (_stream$_writableStat = (_stream$_writableStat2 = stream._writableState) === null || _stream$_writableStat2 === void 0 ? void 0 : _stream$_writableStat2.errored) !== null && _stream$_writableStat !== void 0 ? _stream$_writableStat : null;
}
function isReadableErrored(stream) {
  var _stream$_readableStat, _stream$_readableStat2;
  if (!isNodeStream(stream)) {
    return null;
  }
  if (stream.readableErrored) {
    return stream.readableErrored;
  }
  return (_stream$_readableStat = (_stream$_readableStat2 = stream._readableState) === null || _stream$_readableStat2 === void 0 ? void 0 : _stream$_readableStat2.errored) !== null && _stream$_readableStat !== void 0 ? _stream$_readableStat : null;
}
function isClosed(stream) {
  if (!isNodeStream(stream)) {
    return null;
  }
  if (typeof stream.closed === "boolean") {
    return stream.closed;
  }
  const wState = stream._writableState;
  const rState = stream._readableState;
  if (typeof (wState === null || wState === void 0 ? void 0 : wState.closed) === "boolean" || typeof (rState === null || rState === void 0 ? void 0 : rState.closed) === "boolean") {
    return (wState === null || wState === void 0 ? void 0 : wState.closed) || (rState === null || rState === void 0 ? void 0 : rState.closed);
  }
  if (typeof stream._closed === "boolean" && isOutgoingMessage(stream)) {
    return stream._closed;
  }
  return null;
}
function isOutgoingMessage(stream) {
  return typeof stream._closed === "boolean" && typeof stream._defaultKeepAlive === "boolean" && typeof stream._removedConnection === "boolean" && typeof stream._removedContLen === "boolean";
}
function isServerResponse(stream) {
  return typeof stream._sent100 === "boolean" && isOutgoingMessage(stream);
}
function isServerRequest(stream) {
  var _stream$req;
  return typeof stream._consuming === "boolean" && typeof stream._dumped === "boolean" && ((_stream$req = stream.req) === null || _stream$req === void 0 ? void 0 : _stream$req.upgradeOrConnect) === void 0;
}
function willEmitClose(stream) {
  if (!isNodeStream(stream))
    return null;
  const wState = stream._writableState;
  const rState = stream._readableState;
  const state = wState || rState;
  return !state && isServerResponse(stream) || !!(state && state.autoDestroy && state.emitClose && state.closed === false);
}
function isDisturbed(stream) {
  var _stream$kIsDisturbed;
  return !!(stream && ((_stream$kIsDisturbed = stream[kIsDisturbed]) !== null && _stream$kIsDisturbed !== void 0 ? _stream$kIsDisturbed : stream.readableDidRead || stream.readableAborted));
}
function isErrored(stream) {
  var _ref, _ref2, _ref3, _ref4, _ref5, _stream$kIsErrored, _stream$_readableStat3, _stream$_writableStat3, _stream$_readableStat4, _stream$_writableStat4;
  return !!(stream && ((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_stream$kIsErrored = stream[kIsErrored]) !== null && _stream$kIsErrored !== void 0 ? _stream$kIsErrored : stream.readableErrored) !== null && _ref5 !== void 0 ? _ref5 : stream.writableErrored) !== null && _ref4 !== void 0 ? _ref4 : (_stream$_readableStat3 = stream._readableState) === null || _stream$_readableStat3 === void 0 ? void 0 : _stream$_readableStat3.errorEmitted) !== null && _ref3 !== void 0 ? _ref3 : (_stream$_writableStat3 = stream._writableState) === null || _stream$_writableStat3 === void 0 ? void 0 : _stream$_writableStat3.errorEmitted) !== null && _ref2 !== void 0 ? _ref2 : (_stream$_readableStat4 = stream._readableState) === null || _stream$_readableStat4 === void 0 ? void 0 : _stream$_readableStat4.errored) !== null && _ref !== void 0 ? _ref : (_stream$_writableStat4 = stream._writableState) === null || _stream$_writableStat4 === void 0 ? void 0 : _stream$_writableStat4.errored));
}
var kDestroyed, kIsErrored, kIsReadable, kIsDisturbed;
var init_utils = __esm({
  "../../node/readable-stream/out/internal/streams/utils.js"() {
    init_primordials();
    kDestroyed = Symbol2("kDestroyed");
    kIsErrored = Symbol2("kIsErrored");
    kIsReadable = Symbol2("kIsReadable");
    kIsDisturbed = Symbol2("kIsDisturbed");
  }
});

// ../../node/readable-stream/out/internal/streams/end-of-stream.js
function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === "function";
}
function eos(stream, options, callback) {
  var _options$readable, _options$writable;
  if (arguments.length === 2) {
    callback = options;
    options = kEmptyObject2;
  } else if (options == null) {
    options = kEmptyObject2;
  } else {
    validateObject2(options, "options");
  }
  validateFunction3(callback, "callback");
  validateAbortSignal2(options.signal, "options.signal");
  callback = once2(callback);
  const readable = (_options$readable = options.readable) !== null && _options$readable !== void 0 ? _options$readable : isReadableNodeStream(stream);
  const writable = (_options$writable = options.writable) !== null && _options$writable !== void 0 ? _options$writable : isWritableNodeStream(stream);
  if (!isNodeStream(stream)) {
    throw new ERR_INVALID_ARG_TYPE4("stream", "Stream", stream);
  }
  const wState = stream._writableState;
  const rState = stream._readableState;
  const onlegacyfinish = () => {
    if (!stream.writable) {
      onfinish();
    }
  };
  let willEmitClose2 = willEmitClose(stream) && isReadableNodeStream(stream) === readable && isWritableNodeStream(stream) === writable;
  let writableFinished = isWritableFinished(stream, false);
  const onfinish = () => {
    writableFinished = true;
    if (stream.destroyed) {
      willEmitClose2 = false;
    }
    if (willEmitClose2 && (!stream.readable || readable)) {
      return;
    }
    if (!readable || readableFinished) {
      callback.call(stream);
    }
  };
  let readableFinished = isReadableFinished(stream, false);
  const onend = () => {
    readableFinished = true;
    if (stream.destroyed) {
      willEmitClose2 = false;
    }
    if (willEmitClose2 && (!stream.writable || writable)) {
      return;
    }
    if (!writable || writableFinished) {
      callback.call(stream);
    }
  };
  const onerror = (err) => {
    callback.call(stream, err);
  };
  let closed = isClosed(stream);
  const onclose = () => {
    closed = true;
    const errored = isWritableErrored(stream) || isReadableErrored(stream);
    if (errored && typeof errored !== "boolean") {
      return callback.call(stream, errored);
    }
    if (readable && !readableFinished && isReadableNodeStream(stream, true)) {
      if (!isReadableFinished(stream, false))
        return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
    }
    if (writable && !writableFinished) {
      if (!isWritableFinished(stream, false))
        return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
    }
    callback.call(stream);
  };
  const onrequest = () => {
    stream.req.on("finish", onfinish);
  };
  if (isRequest(stream)) {
    stream.on("complete", onfinish);
    if (!willEmitClose2) {
      stream.on("abort", onclose);
    }
    if (stream.req) {
      onrequest();
    } else {
      stream.on("request", onrequest);
    }
  } else if (writable && !wState) {
    stream.on("end", onlegacyfinish);
    stream.on("close", onlegacyfinish);
  }
  if (!willEmitClose2 && typeof stream.aborted === "boolean") {
    stream.on("aborted", onclose);
  }
  stream.on("end", onend);
  stream.on("finish", onfinish);
  if (options.error !== false) {
    stream.on("error", onerror);
  }
  stream.on("close", onclose);
  if (closed) {
    src_default3.nextTick(onclose);
  } else if (wState !== null && wState !== void 0 && wState.errorEmitted || rState !== null && rState !== void 0 && rState.errorEmitted) {
    if (!willEmitClose2) {
      src_default3.nextTick(onclose);
    }
  } else if (!readable && (!willEmitClose2 || isReadable(stream)) && (writableFinished || isWritable(stream) === false)) {
    src_default3.nextTick(onclose);
  } else if (!writable && (!willEmitClose2 || isWritable(stream)) && (readableFinished || isReadable(stream) === false)) {
    src_default3.nextTick(onclose);
  } else if (rState && stream.req && stream.aborted) {
    src_default3.nextTick(onclose);
  }
  const cleanup = () => {
    callback = nop;
    stream.removeListener("aborted", onclose);
    stream.removeListener("complete", onfinish);
    stream.removeListener("abort", onclose);
    stream.removeListener("request", onrequest);
    if (stream.req)
      stream.req.removeListener("finish", onfinish);
    stream.removeListener("end", onlegacyfinish);
    stream.removeListener("close", onlegacyfinish);
    stream.removeListener("finish", onfinish);
    stream.removeListener("end", onend);
    stream.removeListener("error", onerror);
    stream.removeListener("close", onclose);
  };
  if (options.signal && !closed) {
    const abort2 = () => {
      const endCallback = callback;
      cleanup();
      endCallback.call(
        stream,
        new AbortError(void 0, {
          cause: options.signal.reason
        })
      );
    };
    if (options.signal.aborted) {
      src_default3.nextTick(abort2);
    } else {
      const originalCallback = callback;
      callback = once2((...args) => {
        options.signal.removeEventListener("abort", abort2);
        originalCallback.apply(stream, args);
      });
      options.signal.addEventListener("abort", abort2);
    }
  }
  return cleanup;
}
function finished(stream, opts) {
  return new Promise2((resolve3, reject) => {
    eos(stream, opts, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve3();
      }
    });
  });
}
var ERR_INVALID_ARG_TYPE4, ERR_STREAM_PREMATURE_CLOSE, nop, end_of_stream_default, _finished;
var init_end_of_stream = __esm({
  "../../node/readable-stream/out/internal/streams/end-of-stream.js"() {
    init_esm10();
    init_errors2();
    init_util3();
    init_validators2();
    init_primordials();
    init_utils();
    ({ ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE4, ERR_STREAM_PREMATURE_CLOSE } = codes3);
    nop = () => {
    };
    end_of_stream_default = eos;
    _finished = finished;
  }
});

// ../../node/readable-stream/out/internal/streams/operators.js
function map(fn, options) {
  if (typeof fn !== "function") {
    throw new ERR_INVALID_ARG_TYPE5("fn", ["Function", "AsyncFunction"], fn);
  }
  if (options != null) {
    validateObject2(options, "options");
  }
  if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
    validateAbortSignal2(options.signal, "options.signal");
  }
  let concurrency = 1;
  if ((options === null || options === void 0 ? void 0 : options.concurrency) != null) {
    concurrency = MathFloor(options.concurrency);
  }
  validateInteger2(concurrency, "concurrency", 1);
  return async function* map2() {
    var _options$signal, _options$signal2;
    const ac = new AbortController3();
    const stream = this;
    const queue2 = [];
    const signal = ac.signal;
    const signalOpt = {
      signal
    };
    const abort2 = () => ac.abort();
    if (options !== null && options !== void 0 && (_options$signal = options.signal) !== null && _options$signal !== void 0 && _options$signal.aborted) {
      abort2();
    }
    options === null || options === void 0 ? void 0 : (_options$signal2 = options.signal) === null || _options$signal2 === void 0 ? void 0 : _options$signal2.addEventListener("abort", abort2);
    let next;
    let resume2;
    let done = false;
    function onDone() {
      done = true;
    }
    async function pump2() {
      try {
        for await (let val of stream) {
          var _val;
          if (done) {
            return;
          }
          if (signal.aborted) {
            throw new AbortError2();
          }
          try {
            val = fn(val, signalOpt);
          } catch (err) {
            val = PromiseReject(err);
          }
          if (val === kEmpty) {
            continue;
          }
          if (typeof ((_val = val) === null || _val === void 0 ? void 0 : _val.catch) === "function") {
            val.catch(onDone);
          }
          queue2.push(val);
          if (next) {
            next();
            next = null;
          }
          if (!done && queue2.length && queue2.length >= concurrency) {
            await new Promise2((resolve3) => {
              resume2 = resolve3;
            });
          }
        }
        queue2.push(kEof);
      } catch (err) {
        const val = PromiseReject(err);
        PromisePrototypeThen(val, void 0, onDone);
        queue2.push(val);
      } finally {
        var _options$signal3;
        done = true;
        if (next) {
          next();
          next = null;
        }
        options === null || options === void 0 ? void 0 : (_options$signal3 = options.signal) === null || _options$signal3 === void 0 ? void 0 : _options$signal3.removeEventListener("abort", abort2);
      }
    }
    pump2();
    try {
      while (true) {
        while (queue2.length > 0) {
          const val = await queue2[0];
          if (val === kEof) {
            return;
          }
          if (signal.aborted) {
            throw new AbortError2();
          }
          if (val !== kEmpty) {
            yield val;
          }
          queue2.shift();
          if (resume2) {
            resume2();
            resume2 = null;
          }
        }
        await new Promise2((resolve3) => {
          next = resolve3;
        });
      }
    } finally {
      ac.abort();
      done = true;
      if (resume2) {
        resume2();
        resume2 = null;
      }
    }
  }.call(this);
}
function asIndexedPairs(options = void 0) {
  if (options != null) {
    validateObject2(options, "options");
  }
  if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
    validateAbortSignal2(options.signal, "options.signal");
  }
  return async function* asIndexedPairs2() {
    let index = 0;
    for await (const val of this) {
      var _options$signal4;
      if (options !== null && options !== void 0 && (_options$signal4 = options.signal) !== null && _options$signal4 !== void 0 && _options$signal4.aborted) {
        throw new AbortError2({
          cause: options.signal.reason
        });
      }
      yield [index++, val];
    }
  }.call(this);
}
async function some(fn, options = void 0) {
  for await (const unused of filter.call(this, fn, options)) {
    return true;
  }
  return false;
}
async function every(fn, options = void 0) {
  if (typeof fn !== "function") {
    throw new ERR_INVALID_ARG_TYPE5("fn", ["Function", "AsyncFunction"], fn);
  }
  return !await some.call(
    this,
    async (...args) => {
      return !await fn(...args);
    },
    options
  );
}
async function find(fn, options) {
  for await (const result of filter.call(this, fn, options)) {
    return result;
  }
  return void 0;
}
async function forEach(fn, options) {
  if (typeof fn !== "function") {
    throw new ERR_INVALID_ARG_TYPE5("fn", ["Function", "AsyncFunction"], fn);
  }
  async function forEachFn(value, options2) {
    await fn(value, options2);
    return kEmpty;
  }
  for await (const unused of map.call(this, forEachFn, options))
    ;
}
function filter(fn, options) {
  if (typeof fn !== "function") {
    throw new ERR_INVALID_ARG_TYPE5("fn", ["Function", "AsyncFunction"], fn);
  }
  async function filterFn(value, options2) {
    if (await fn(value, options2)) {
      return value;
    }
    return kEmpty;
  }
  return map.call(this, filterFn, options);
}
async function reduce(reducer, initialValue, options) {
  var _options$signal5;
  if (typeof reducer !== "function") {
    throw new ERR_INVALID_ARG_TYPE5("reducer", ["Function", "AsyncFunction"], reducer);
  }
  if (options != null) {
    validateObject2(options, "options");
  }
  if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
    validateAbortSignal2(options.signal, "options.signal");
  }
  let hasInitialValue = arguments.length > 1;
  if (options !== null && options !== void 0 && (_options$signal5 = options.signal) !== null && _options$signal5 !== void 0 && _options$signal5.aborted) {
    const err = new AbortError2(void 0, {
      cause: options.signal.reason
    });
    this.once("error", () => {
    });
    await _finished(this.destroy(err));
    throw err;
  }
  const ac = new AbortController3();
  const signal = ac.signal;
  if (options !== null && options !== void 0 && options.signal) {
    const opts = {
      once: true,
      [kWeakHandler]: this
    };
    options.signal.addEventListener("abort", () => ac.abort(), opts);
  }
  let gotAnyItemFromStream = false;
  try {
    for await (const value of this) {
      var _options$signal6;
      gotAnyItemFromStream = true;
      if (options !== null && options !== void 0 && (_options$signal6 = options.signal) !== null && _options$signal6 !== void 0 && _options$signal6.aborted) {
        throw new AbortError2();
      }
      if (!hasInitialValue) {
        initialValue = value;
        hasInitialValue = true;
      } else {
        initialValue = await reducer(initialValue, value, {
          signal
        });
      }
    }
    if (!gotAnyItemFromStream && !hasInitialValue) {
      throw new ReduceAwareErrMissingArgs();
    }
  } finally {
    ac.abort();
  }
  return initialValue;
}
async function toArray2(options) {
  if (options != null) {
    validateObject2(options, "options");
  }
  if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
    validateAbortSignal2(options.signal, "options.signal");
  }
  const result = [];
  for await (const val of this) {
    var _options$signal7;
    if (options !== null && options !== void 0 && (_options$signal7 = options.signal) !== null && _options$signal7 !== void 0 && _options$signal7.aborted) {
      throw new AbortError2(void 0, {
        cause: options.signal.reason
      });
    }
    ArrayPrototypePush(result, val);
  }
  return result;
}
function flatMap(fn, options) {
  const values = map.call(this, fn, options);
  return async function* flatMap2() {
    for await (const val of values) {
      yield* val;
    }
  }.call(this);
}
function toIntegerOrInfinity(number) {
  number = Number2(number);
  if (NumberIsNaN(number)) {
    return 0;
  }
  if (number < 0) {
    throw new ERR_OUT_OF_RANGE3("number", ">= 0", number);
  }
  return number;
}
function drop(number, options = void 0) {
  if (options != null) {
    validateObject2(options, "options");
  }
  if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
    validateAbortSignal2(options.signal, "options.signal");
  }
  number = toIntegerOrInfinity(number);
  return async function* drop2() {
    var _options$signal8;
    if (options !== null && options !== void 0 && (_options$signal8 = options.signal) !== null && _options$signal8 !== void 0 && _options$signal8.aborted) {
      throw new AbortError2();
    }
    for await (const val of this) {
      var _options$signal9;
      if (options !== null && options !== void 0 && (_options$signal9 = options.signal) !== null && _options$signal9 !== void 0 && _options$signal9.aborted) {
        throw new AbortError2();
      }
      if (number-- <= 0) {
        yield val;
      }
    }
  }.call(this);
}
function take(number, options = void 0) {
  if (options != null) {
    validateObject2(options, "options");
  }
  if ((options === null || options === void 0 ? void 0 : options.signal) != null) {
    validateAbortSignal2(options.signal, "options.signal");
  }
  number = toIntegerOrInfinity(number);
  return async function* take2() {
    var _options$signal10;
    if (options !== null && options !== void 0 && (_options$signal10 = options.signal) !== null && _options$signal10 !== void 0 && _options$signal10.aborted) {
      throw new AbortError2();
    }
    for await (const val of this) {
      var _options$signal11;
      if (options !== null && options !== void 0 && (_options$signal11 = options.signal) !== null && _options$signal11 !== void 0 && _options$signal11.aborted) {
        throw new AbortError2();
      }
      if (number-- > 0) {
        yield val;
      } else {
        return;
      }
    }
  }.call(this);
}
var AbortController3, ERR_INVALID_ARG_TYPE5, ERR_MISSING_ARGS2, ERR_OUT_OF_RANGE3, AbortError2, kWeakHandler, kEmpty, kEof, ReduceAwareErrMissingArgs, streamReturningOperators, promiseReturningOperators;
var init_operators = __esm({
  "../../node/readable-stream/out/internal/streams/operators.js"() {
    init_esm5();
    init_errors2();
    init_validators2();
    init_end_of_stream();
    init_primordials();
    AbortController3 = globalThis.AbortController || AbortController2;
    ({
      codes: { ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE5, ERR_MISSING_ARGS: ERR_MISSING_ARGS2, ERR_OUT_OF_RANGE: ERR_OUT_OF_RANGE3 },
      AbortError: AbortError2
    } = errors_default);
    kWeakHandler = Symbol2("kWeak");
    kEmpty = Symbol2("kEmpty");
    kEof = Symbol2("kEof");
    ReduceAwareErrMissingArgs = class extends ERR_MISSING_ARGS2 {
      constructor() {
        super("reduce");
        this.message = "Reduce of an empty stream requires an initial value";
      }
    };
    streamReturningOperators = {
      asIndexedPairs,
      drop,
      filter,
      flatMap,
      map,
      take
    };
    promiseReturningOperators = {
      every,
      forEach,
      reduce,
      toArray: toArray2,
      some,
      find
    };
  }
});

// ../../node/readable-stream/out/internal/streams/destroy.js
function checkError(err, w, r) {
  if (err) {
    err.stack;
    if (w && !w.errored) {
      w.errored = err;
    }
    if (r && !r.errored) {
      r.errored = err;
    }
  }
}
function destroy(err, cb) {
  const r = this._readableState;
  const w = this._writableState;
  const s = w || r;
  if (w && w.destroyed || r && r.destroyed) {
    if (typeof cb === "function") {
      cb();
    }
    return this;
  }
  checkError(err, w, r);
  if (w) {
    w.destroyed = true;
  }
  if (r) {
    r.destroyed = true;
  }
  if (!s.constructed) {
    this.once(kDestroy, function(er) {
      _destroy(this, aggregateTwoErrors(er, err), cb);
    });
  } else {
    _destroy(this, err, cb);
  }
  return this;
}
function _destroy(self2, err, cb) {
  let called = false;
  function onDestroy(err2) {
    if (called) {
      return;
    }
    called = true;
    const r = self2._readableState;
    const w = self2._writableState;
    checkError(err2, w, r);
    if (w) {
      w.closed = true;
    }
    if (r) {
      r.closed = true;
    }
    if (typeof cb === "function") {
      cb(err2);
    }
    if (err2) {
      src_default3.nextTick(emitErrorCloseNT, self2, err2);
    } else {
      src_default3.nextTick(emitCloseNT, self2);
    }
  }
  try {
    self2._destroy(err || null, onDestroy);
  } catch (err2) {
    onDestroy(err2);
  }
}
function emitErrorCloseNT(self2, err) {
  emitErrorNT(self2, err);
  emitCloseNT(self2);
}
function emitCloseNT(self2) {
  const r = self2._readableState;
  const w = self2._writableState;
  if (w) {
    w.closeEmitted = true;
  }
  if (r) {
    r.closeEmitted = true;
  }
  if (w && w.emitClose || r && r.emitClose) {
    self2.emit("close");
  }
}
function emitErrorNT(self2, err) {
  const r = self2._readableState;
  const w = self2._writableState;
  if (w && w.errorEmitted || r && r.errorEmitted) {
    return;
  }
  if (w) {
    w.errorEmitted = true;
  }
  if (r) {
    r.errorEmitted = true;
  }
  self2.emit("error", err);
}
function undestroy() {
  const r = this._readableState;
  const w = this._writableState;
  if (r) {
    r.constructed = true;
    r.closed = false;
    r.closeEmitted = false;
    r.destroyed = false;
    r.errored = null;
    r.errorEmitted = false;
    r.reading = false;
    r.ended = r.readable === false;
    r.endEmitted = r.readable === false;
  }
  if (w) {
    w.constructed = true;
    w.destroyed = false;
    w.closed = false;
    w.closeEmitted = false;
    w.errored = null;
    w.errorEmitted = false;
    w.finalCalled = false;
    w.prefinished = false;
    w.ended = w.writable === false;
    w.ending = w.writable === false;
    w.finished = w.writable === false;
  }
}
function errorOrDestroy(stream, err, sync) {
  const r = stream._readableState;
  const w = stream._writableState;
  if (w && w.destroyed || r && r.destroyed) {
    return this;
  }
  if (r && r.autoDestroy || w && w.autoDestroy)
    stream.destroy(err);
  else if (err) {
    err.stack;
    if (w && !w.errored) {
      w.errored = err;
    }
    if (r && !r.errored) {
      r.errored = err;
    }
    if (sync) {
      src_default3.nextTick(emitErrorNT, stream, err);
    } else {
      emitErrorNT(stream, err);
    }
  }
}
function construct(stream, cb) {
  if (typeof stream._construct !== "function") {
    return;
  }
  const r = stream._readableState;
  const w = stream._writableState;
  if (r) {
    r.constructed = false;
  }
  if (w) {
    w.constructed = false;
  }
  stream.once(kConstruct, cb);
  if (stream.listenerCount(kConstruct) > 1) {
    return;
  }
  src_default3.nextTick(constructNT, stream);
}
function constructNT(stream) {
  let called = false;
  function onConstruct(err) {
    if (called) {
      errorOrDestroy(stream, err !== null && err !== void 0 ? err : new ERR_MULTIPLE_CALLBACK());
      return;
    }
    called = true;
    const r = stream._readableState;
    const w = stream._writableState;
    const s = w || r;
    if (r) {
      r.constructed = true;
    }
    if (w) {
      w.constructed = true;
    }
    if (s.destroyed) {
      stream.emit(kDestroy, err);
    } else if (err) {
      errorOrDestroy(stream, err, true);
    } else {
      src_default3.nextTick(emitConstructNT, stream);
    }
  }
  try {
    stream._construct(onConstruct);
  } catch (err) {
    onConstruct(err);
  }
}
function emitConstructNT(stream) {
  stream.emit(kConstruct);
}
function isRequest2(stream) {
  return stream && stream.setHeader && typeof stream.abort === "function";
}
function emitCloseLegacy(stream) {
  stream.emit("close");
}
function emitErrorCloseLegacy(stream, err) {
  stream.emit("error", err);
  src_default3.nextTick(emitCloseLegacy, stream);
}
function destroyer(stream, err) {
  if (!stream || isDestroyed(stream)) {
    return;
  }
  if (!err && !isFinished(stream)) {
    err = new AbortError();
  }
  if (isServerRequest(stream)) {
    stream.socket = null;
    stream.destroy(err);
  } else if (isRequest2(stream)) {
    stream.abort();
  } else if (isRequest2(stream.req)) {
    stream.req.abort();
  } else if (typeof stream.destroy === "function") {
    stream.destroy(err);
  } else if (typeof stream.close === "function") {
    stream.close();
  } else if (err) {
    src_default3.nextTick(emitErrorCloseLegacy, stream, err);
  } else {
    src_default3.nextTick(emitCloseLegacy, stream);
  }
  if (!stream.destroyed) {
    stream[kDestroyed] = true;
  }
}
var ERR_MULTIPLE_CALLBACK, kDestroy, kConstruct, destroy_default;
var init_destroy = __esm({
  "../../node/readable-stream/out/internal/streams/destroy.js"() {
    init_esm10();
    init_errors2();
    init_primordials();
    init_utils();
    ({ ERR_MULTIPLE_CALLBACK } = codes3);
    kDestroy = Symbol2("kDestroy");
    kConstruct = Symbol2("kConstruct");
    destroy_default = {
      construct,
      destroyer,
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// ../../node/readable-stream/out/internal/streams/duplex-holder.js
var DupleyHolder, duplex_holder_default;
var init_duplex_holder = __esm({
  "../../node/readable-stream/out/internal/streams/duplex-holder.js"() {
    DupleyHolder = {
      Duplex: {},
      duplexify: {}
    };
    duplex_holder_default = DupleyHolder;
  }
});

// ../../node/readable-stream/out/internal/streams/legacy.js
function prependListener(emitter, event, fn) {
  if (typeof emitter.prependListener === "function")
    return emitter.prependListener(event, fn);
  if (!emitter._events || !emitter._events[event])
    emitter.on(event, fn);
  else if (ArrayIsArray(emitter._events[event]))
    emitter._events[event].unshift(fn);
  else
    emitter._events[event] = [fn, emitter._events[event]];
}
var Stream;
var init_legacy2 = __esm({
  "../../node/readable-stream/out/internal/streams/legacy.js"() {
    init_esm4();
    init_primordials();
    Stream = class extends EventEmitter {
      constructor(opts) {
        super(opts);
      }
      pipe(dest, options) {
        const source = this;
        function ondata(chunk) {
          if (dest.writable && dest.write(chunk) === false && source.pause) {
            source.pause();
          }
        }
        source.on("data", ondata);
        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }
        dest.on("drain", ondrain);
        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on("end", onend);
          source.on("close", onclose);
        }
        let didOnEnd = false;
        function onend() {
          if (didOnEnd)
            return;
          didOnEnd = true;
          dest.end();
        }
        function onclose() {
          if (didOnEnd)
            return;
          didOnEnd = true;
          if (typeof dest.destroy === "function")
            dest.destroy();
        }
        function onerror(er) {
          cleanup();
          if (EventEmitter.listenerCount(this, "error") === 0) {
            this.emit("error", er);
          }
        }
        prependListener(source, "error", onerror);
        prependListener(dest, "error", onerror);
        function cleanup() {
          source.removeListener("data", ondata);
          dest.removeListener("drain", ondrain);
          source.removeListener("end", onend);
          source.removeListener("close", onclose);
          source.removeListener("error", onerror);
          dest.removeListener("error", onerror);
          source.removeListener("end", cleanup);
          source.removeListener("close", cleanup);
          dest.removeListener("close", cleanup);
        }
        source.on("end", cleanup);
        source.on("close", cleanup);
        dest.on("close", cleanup);
        dest.emit("pipe", source);
        return dest;
      }
    };
  }
});

// ../../node/readable-stream/out/internal/streams/add-abort-signal.js
function isNodeStream2(obj) {
  return !!(obj && typeof obj.pipe === "function");
}
var ERR_INVALID_ARG_TYPE6, validateAbortSignal3, addAbortSignal, addAbortSignalNoValidate;
var init_add_abort_signal = __esm({
  "../../node/readable-stream/out/internal/streams/add-abort-signal.js"() {
    init_errors2();
    init_end_of_stream();
    ({ ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE6 } = codes3);
    validateAbortSignal3 = (signal, name) => {
      if (typeof signal !== "object" || !("aborted" in signal)) {
        throw new ERR_INVALID_ARG_TYPE6(name, "AbortSignal", signal);
      }
    };
    addAbortSignal = function addAbortSignal2(signal, stream) {
      validateAbortSignal3(signal, "signal");
      if (!isNodeStream2(stream)) {
        throw new ERR_INVALID_ARG_TYPE6("stream", "stream.Stream", stream);
      }
      return addAbortSignalNoValidate(signal, stream);
    };
    addAbortSignalNoValidate = function(signal, stream) {
      if (typeof signal !== "object" || !("aborted" in signal)) {
        return stream;
      }
      const onAbort = () => {
        stream.destroy(
          new AbortError(void 0, {
            cause: signal.reason
          })
        );
      };
      if (signal.aborted) {
        onAbort();
      } else {
        signal.addEventListener("abort", onAbort);
        end_of_stream_default(stream, () => signal.removeEventListener("abort", onAbort));
      }
      return stream;
    };
  }
});

// ../../node/readable-stream/out/internal/streams/buffer_list.js
var BufferList;
var init_buffer_list = __esm({
  "../../node/readable-stream/out/internal/streams/buffer_list.js"() {
    init_primordials();
    init_esm2();
    init_util3();
    BufferList = class {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      push(v) {
        const entry = {
          data: v,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
      unshift(v) {
        const entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
      shift() {
        if (this.length === 0)
          return;
        const ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
      clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
      join(s) {
        if (this.length === 0)
          return "";
        let p = this.head;
        let ret = "" + p.data;
        while ((p = p.next) !== null)
          ret += s + p.data;
        return ret;
      }
      concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        const ret = Buffer2.allocUnsafe(n >>> 0);
        let p = this.head;
        let i = 0;
        while (p) {
          TypedArrayPrototypeSet(ret, p.data, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      }
      consume(n, hasStrings) {
        const data = this.head.data;
        if (n < data.length) {
          const slice3 = data.slice(0, n);
          this.head.data = data.slice(n);
          return slice3;
        }
        if (n === data.length) {
          return this.shift();
        }
        return hasStrings ? this._getString(n) : this._getBuffer(n);
      }
      first() {
        return this.head.data;
      }
      *[SymbolIterator]() {
        for (let p = this.head; p; p = p.next) {
          yield p.data;
        }
      }
      _getString(n) {
        let ret = "";
        let p = this.head;
        let c = 0;
        do {
          const str = p.data;
          if (n > str.length) {
            ret += str;
            n -= str.length;
          } else {
            if (n === str.length) {
              ret += str;
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              ret += StringPrototypeSlice(str, 0, n);
              this.head = p;
              p.data = StringPrototypeSlice(str, n);
            }
            break;
          }
          ++c;
        } while ((p = p.next) !== null);
        this.length -= c;
        return ret;
      }
      _getBuffer(n) {
        const ret = Buffer2.allocUnsafe(n);
        const retLen = n;
        let p = this.head;
        let c = 0;
        do {
          const buf = p.data;
          if (n > buf.length) {
            TypedArrayPrototypeSet(ret, buf, retLen - n);
            n -= buf.length;
          } else {
            if (n === buf.length) {
              TypedArrayPrototypeSet(ret, buf, retLen - n);
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              TypedArrayPrototypeSet(ret, new Uint8Array2(buf.buffer, buf.byteOffset, n), retLen - n);
              this.head = p;
              p.data = buf.slice(n);
            }
            break;
          }
          ++c;
        } while ((p = p.next) !== null);
        this.length -= c;
        return ret;
      }
      [Symbol.for("nodejs.util.inspect.custom")](_, options) {
        return inspect3(this, {
          ...options,
          depth: 0,
          customInspect: false
        });
      }
    };
  }
});

// ../../node/readable-stream/out/internal/streams/state.js
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getDefaultHighWaterMark(objectMode) {
  return objectMode ? 16 : 16 * 1024;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
  const hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!NumberIsInteger(hwm) || hwm < 0) {
      const name = isDuplex ? `options.${duplexKey}` : "options.highWaterMark";
      throw new ERR_INVALID_ARG_VALUE4(name, hwm);
    }
    return MathFloor(hwm);
  }
  return getDefaultHighWaterMark(state.objectMode);
}
var ERR_INVALID_ARG_VALUE4;
var init_state = __esm({
  "../../node/readable-stream/out/internal/streams/state.js"() {
    init_primordials();
    init_errors2();
    ({ ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE4 } = codes3);
  }
});

// ../../../node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "../../../node_modules/safe-buffer/index.js"(exports2, module) {
    var buffer = (init_esm2(), __toCommonJS(esm_exports));
    var Buffer4 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer4.from && Buffer4.alloc && Buffer4.allocUnsafe && Buffer4.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length2) {
      return Buffer4(arg, encodingOrOffset, length2);
    }
    SafeBuffer.prototype = Object.create(Buffer4.prototype);
    copyProps(Buffer4, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length2) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer4(arg, encodingOrOffset, length2);
    };
    SafeBuffer.alloc = function(size, fill3, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer4(size);
      if (fill3 !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill3, encoding);
        } else {
          buf.fill(fill3);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer4(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// ../../../node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "../../../node_modules/string_decoder/lib/string_decoder.js"(exports2) {
    "use strict";
    var Buffer4 = require_safe_buffer().Buffer;
    var isEncoding3 = Buffer4.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding4(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer4.isEncoding === isEncoding3 || !isEncoding3(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports2.StringDecoder = StringDecoder2;
    function StringDecoder2(encoding) {
      this.encoding = normalizeEncoding4(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer4.allocUnsafe(nb);
    }
    StringDecoder2.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder2.prototype.end = utf8End;
    StringDecoder2.prototype.text = utf8Text;
    StringDecoder2.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// ../../node/readable-stream/out/internal/streams/from.js
function from2(Readable4, iterable, opts) {
  let iterator;
  if (typeof iterable === "string" || iterable instanceof Buffer2) {
    return new Readable4({
      objectMode: true,
      ...opts,
      read() {
        this.push(iterable);
        this.push(null);
      }
    });
  }
  let isAsync;
  if (iterable && iterable[SymbolAsyncIterator]) {
    isAsync = true;
    iterator = iterable[SymbolAsyncIterator]();
  } else if (iterable && iterable[SymbolIterator]) {
    isAsync = false;
    iterator = iterable[SymbolIterator]();
  } else {
    throw new ERR_INVALID_ARG_TYPE7("iterable", ["Iterable"], iterable);
  }
  const readable = new Readable4({
    objectMode: true,
    highWaterMark: 1,
    ...opts
  });
  let reading = false;
  readable._read = function() {
    if (!reading) {
      reading = true;
      next();
    }
  };
  readable._destroy = function(error, cb) {
    PromisePrototypeThen(
      close2(error),
      () => src_default3.nextTick(cb, error),
      (e) => src_default3.nextTick(cb, e || error)
    );
  };
  async function close2(error) {
    const hadError = error !== void 0 && error !== null;
    const hasThrow = typeof iterator.throw === "function";
    if (hadError && hasThrow) {
      const { value, done } = await iterator.throw(error);
      await value;
      if (done) {
        return;
      }
    }
    if (typeof iterator.return === "function") {
      const { value } = await iterator.return();
      await value;
    }
  }
  async function next() {
    for (; ; ) {
      try {
        const { value, done } = isAsync ? await iterator.next() : iterator.next();
        if (done) {
          readable.push(null);
        } else {
          const res = value && typeof value.then === "function" ? await value : value;
          if (res === null) {
            reading = false;
            throw new ERR_STREAM_NULL_VALUES();
          } else if (readable.push(res)) {
            continue;
          } else {
            reading = false;
          }
        }
      } catch (err) {
        readable.destroy(err);
      }
      break;
    }
  }
  return readable;
}
var ERR_INVALID_ARG_TYPE7, ERR_STREAM_NULL_VALUES, from_default;
var init_from = __esm({
  "../../node/readable-stream/out/internal/streams/from.js"() {
    init_esm10();
    init_primordials();
    init_esm2();
    init_errors2();
    ({ ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE7, ERR_STREAM_NULL_VALUES } = codes3);
    from_default = from2;
  }
});

// ../../node/readable-stream/out/internal/streams/readable.js
var readable_exports = {};
__export(readable_exports, {
  Readable: () => Readable,
  default: () => readable_default
});
function readableAddChunk(stream, chunk, encoding, addToFront) {
  debug("readableAddChunk", chunk);
  const state = stream._readableState;
  let err;
  if (!state.objectMode) {
    if (typeof chunk === "string") {
      encoding = encoding || state.defaultEncoding;
      if (state.encoding !== encoding) {
        if (addToFront && state.encoding) {
          chunk = Buffer2.from(chunk, encoding).toString(state.encoding);
        } else {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
      }
    } else if (chunk instanceof Buffer2) {
      encoding = "";
    } else if (Stream._isUint8Array(chunk)) {
      chunk = Stream._uint8ArrayToBuffer(chunk);
      encoding = "";
    } else if (chunk != null) {
      err = new ERR_INVALID_ARG_TYPE8("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
  }
  if (err) {
    errorOrDestroy2(stream, err);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (addToFront) {
      if (state.endEmitted)
        errorOrDestroy2(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
      else if (state.destroyed || state.errored)
        return false;
      else
        addChunk(stream, state, chunk, true);
    } else if (state.ended) {
      errorOrDestroy2(stream, new ERR_STREAM_PUSH_AFTER_EOF());
    } else if (state.destroyed || state.errored) {
      return false;
    } else {
      state.reading = false;
      if (state.decoder && !encoding) {
        chunk = state.decoder.write(chunk);
        if (state.objectMode || chunk.length !== 0)
          addChunk(stream, state, chunk, false);
        else
          maybeReadMore(stream, state);
      } else {
        addChunk(stream, state, chunk, false);
      }
    }
  } else if (!addToFront) {
    state.reading = false;
    maybeReadMore(stream, state);
  }
  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync && stream.listenerCount("data") > 0) {
    if (state.multiAwaitDrain) {
      state.awaitDrainWriters.clear();
    } else {
      state.awaitDrainWriters = null;
    }
    state.dataEmitted = true;
    stream.emit("data", chunk);
  } else {
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront)
      state.buffer.unshift(chunk);
    else
      state.buffer.push(chunk);
    if (state.needReadable)
      emitReadable(stream);
  }
  maybeReadMore(stream, state);
}
function computeNewHighWaterMark(n) {
  if (n > MAX_HWM) {
    throw new ERR_OUT_OF_RANGE4("size", "<= 1GiB", n);
  } else {
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended)
    return 0;
  if (state.objectMode)
    return 1;
  if (NumberIsNaN(n)) {
    if (state.flowing && state.length)
      return state.buffer.first().length;
    return state.length;
  }
  if (n <= state.length)
    return n;
  return state.ended ? state.length : 0;
}
function onEofChunk(stream, state) {
  debug("onEofChunk");
  if (state.ended)
    return;
  if (state.decoder) {
    const chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;
  if (state.sync) {
    emitReadable(stream);
  } else {
    state.needReadable = false;
    state.emittedReadable = true;
    emitReadable_(stream);
  }
}
function emitReadable(stream) {
  const state = stream._readableState;
  debug("emitReadable", state.needReadable, state.emittedReadable);
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug("emitReadable", state.flowing);
    state.emittedReadable = true;
    src_default3.nextTick(emitReadable_, stream);
  }
}
function emitReadable_(stream) {
  const state = stream._readableState;
  debug("emitReadable_", state.destroyed, state.length, state.ended);
  if (!state.destroyed && !state.errored && (state.length || state.ended)) {
    stream.emit("readable");
    state.emittedReadable = false;
  }
  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
}
function maybeReadMore(stream, state) {
  if (!state.readingMore && state.constructed) {
    state.readingMore = true;
    src_default3.nextTick(maybeReadMore_, stream, state);
  }
}
function maybeReadMore_(stream, state) {
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    const len = state.length;
    debug("maybeReadMore read 0");
    stream.read(0);
    if (len === state.length)
      break;
  }
  state.readingMore = false;
}
function pipeOnDrain(src, dest) {
  return function pipeOnDrainFunctionResult() {
    const state = src._readableState;
    if (state.awaitDrainWriters === dest) {
      debug("pipeOnDrain", 1);
      state.awaitDrainWriters = null;
    } else if (state.multiAwaitDrain) {
      debug("pipeOnDrain", state.awaitDrainWriters.size);
      state.awaitDrainWriters.delete(dest);
    }
    if ((!state.awaitDrainWriters || state.awaitDrainWriters.size === 0) && src.listenerCount("data")) {
      src.resume();
    }
  };
}
function updateReadableListening(self2) {
  const state = self2._readableState;
  state.readableListening = self2.listenerCount("readable") > 0;
  if (state.resumeScheduled && state[kPaused] === false) {
    state.flowing = true;
  } else if (self2.listenerCount("data") > 0) {
    self2.resume();
  } else if (!state.readableListening) {
    state.flowing = null;
  }
}
function nReadingNextTick(self2) {
  debug("readable nexttick read 0");
  self2.read(0);
}
function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    src_default3.nextTick(resume_, stream, state);
  }
}
function resume_(stream, state) {
  debug("resume", state.reading);
  if (!state.reading) {
    stream.read(0);
  }
  state.resumeScheduled = false;
  stream.emit("resume");
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}
function flow(stream) {
  const state = stream._readableState;
  debug("flow", state.flowing);
  while (state.flowing && stream.read() !== null)
    ;
}
function streamToAsyncIterator(stream, options) {
  if (typeof stream.read !== "function") {
    stream = Readable.wrap(stream, {
      objectMode: true
    });
  }
  const iter = createAsyncIterator(stream, options);
  iter.stream = stream;
  return iter;
}
async function* createAsyncIterator(stream, options) {
  let callback = nop2;
  function next(resolve3) {
    if (this === stream) {
      callback();
      callback = nop2;
    } else {
      callback = resolve3;
    }
  }
  stream.on("readable", next);
  let error;
  const cleanup = end_of_stream_default(
    stream,
    {
      writable: false
    },
    (err) => {
      error = err ? aggregateTwoErrors(error, err) : null;
      callback();
      callback = nop2;
    }
  );
  try {
    while (true) {
      const chunk = stream.destroyed ? null : stream.read();
      if (chunk !== null) {
        yield chunk;
      } else if (error) {
        throw error;
      } else if (error === null) {
        return;
      } else {
        await new Promise2(next);
      }
    }
  } catch (err) {
    error = aggregateTwoErrors(error, err);
    throw error;
  } finally {
    if ((error || (options === null || options === void 0 ? void 0 : options.destroyOnReturn) !== false) && (error === void 0 || stream._readableState.autoDestroy)) {
      destroy_default.destroyer(stream, null);
    } else {
      stream.off("readable", next);
      cleanup();
    }
  }
}
function fromList(n, state) {
  if (state.length === 0)
    return null;
  let ret;
  if (state.objectMode)
    ret = state.buffer.shift();
  else if (!n || n >= state.length) {
    if (state.decoder)
      ret = state.buffer.join("");
    else if (state.buffer.length === 1)
      ret = state.buffer.first();
    else
      ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}
function endReadable(stream) {
  const state = stream._readableState;
  debug("endReadable", state.endEmitted);
  if (!state.endEmitted) {
    state.ended = true;
    src_default3.nextTick(endReadableNT, state, stream);
  }
}
function endReadableNT(state, stream) {
  debug("endReadableNT", state.endEmitted, state.length);
  if (!state.errored && !state.closeEmitted && !state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.emit("end");
    if (stream.writable && stream.allowHalfOpen === false) {
      src_default3.nextTick(endWritableNT, stream);
    } else if (state.autoDestroy) {
      const wState = stream._writableState;
      const autoDestroy = !wState || wState.autoDestroy && (wState.finished || wState.writable === false);
      if (autoDestroy) {
        stream.destroy();
      }
    }
  }
}
function endWritableNT(stream) {
  const writable = stream.writable && !stream.writableEnded && !stream.destroyed;
  if (writable) {
    stream.end();
  }
}
function lazyWebStreams() {
  if (webStreamsAdapters === void 0)
    webStreamsAdapters = {};
  return webStreamsAdapters;
}
var import_string_decoder, debug, ERR_INVALID_ARG_TYPE8, ERR_METHOD_NOT_IMPLEMENTED, ERR_OUT_OF_RANGE4, ERR_STREAM_PUSH_AFTER_EOF, ERR_STREAM_UNSHIFT_AFTER_END_EVENT, kPaused, nop2, errorOrDestroy2, ReadableState, _Readable, Readable, MAX_HWM, webStreamsAdapters, readable_default;
var init_readable = __esm({
  "../../node/readable-stream/out/internal/streams/readable.js"() {
    init_esm10();
    init_esm4();
    init_primordials();
    init_legacy2();
    init_add_abort_signal();
    init_end_of_stream();
    init_esm2();
    init_esm();
    init_buffer_list();
    init_destroy();
    init_state();
    init_errors2();
    init_validators2();
    import_string_decoder = __toESM(require_string_decoder());
    init_from();
    init_duplex_holder();
    debug = debuglog("stream", (fn) => {
      debug = fn;
    });
    ({
      ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE8,
      ERR_METHOD_NOT_IMPLEMENTED,
      ERR_OUT_OF_RANGE: ERR_OUT_OF_RANGE4,
      ERR_STREAM_PUSH_AFTER_EOF,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT
    } = codes3);
    kPaused = Symbol2("kPaused");
    nop2 = () => {
    };
    ({ errorOrDestroy: errorOrDestroy2 } = destroy_default);
    ReadableState = class {
      constructor(options, stream, isDuplex) {
        if (typeof isDuplex !== "boolean")
          isDuplex = stream instanceof duplex_holder_default.Duplex;
        this.objectMode = !!(options && options.objectMode);
        if (isDuplex)
          this.objectMode = this.objectMode || !!(options && options.readableObjectMode);
        this.highWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = [];
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.constructed = true;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this[kPaused] = null;
        this.errorEmitted = false;
        this.emitClose = !options || options.emitClose !== false;
        this.autoDestroy = !options || options.autoDestroy !== false;
        this.destroyed = false;
        this.errored = null;
        this.closed = false;
        this.closeEmitted = false;
        this.defaultEncoding = options && options.defaultEncoding || "utf8";
        this.awaitDrainWriters = null;
        this.multiAwaitDrain = false;
        this.readingMore = false;
        this.dataEmitted = false;
        this.decoder = null;
        this.encoding = null;
        if (options && options.encoding) {
          this.decoder = new import_string_decoder.StringDecoder(options.encoding);
          this.encoding = options.encoding;
        }
      }
    };
    _Readable = class extends Stream {
      constructor(options) {
        super(options);
        if (!(this instanceof _Readable))
          return new _Readable(options);
        const isDuplex = this instanceof duplex_holder_default.Duplex;
        this._readableState = new ReadableState(options, this, isDuplex);
        if (options) {
          if (typeof options.read === "function")
            this._read = options.read;
          if (typeof options.destroy === "function")
            this._destroy = options.destroy;
          if (typeof options.construct === "function")
            this._construct = options.construct;
          if (options.signal && !isDuplex)
            addAbortSignal(options.signal, this);
        }
        destroy_default.construct(this, () => {
          if (this._readableState.needReadable) {
            maybeReadMore(this, this._readableState);
          }
        });
      }
      static from(iterable, opts) {
        return from_default(_Readable, iterable, opts);
      }
      static fromWeb(readableStream, options) {
        return lazyWebStreams().newStreamReadableFromReadableStream(readableStream, options);
      }
      static toWeb(streamReadable, options) {
        return lazyWebStreams().newReadableStreamFromStreamReadable(streamReadable, options);
      }
      static wrap(src, options) {
        var _ref, _src$readableObjectMo;
        return new _Readable({
          objectMode: (_ref = (_src$readableObjectMo = src.readableObjectMode) !== null && _src$readableObjectMo !== void 0 ? _src$readableObjectMo : src.objectMode) !== null && _ref !== void 0 ? _ref : true,
          ...options,
          destroy(err, callback) {
            destroy_default.destroyer(src, err);
            callback(err);
          }
        }).wrap(src);
      }
      push(chunk, encoding) {
        return readableAddChunk(this, chunk, encoding, false);
      }
      unshift(chunk, encoding) {
        return readableAddChunk(this, chunk, encoding, true);
      }
      isPaused() {
        const state = this._readableState;
        return state[kPaused] === true || state.flowing === false;
      }
      setEncoding(enc) {
        const decoder = new import_string_decoder.StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        const buffer = this._readableState.buffer;
        let content = "";
        for (const data of buffer) {
          content += decoder.write(data);
        }
        buffer.clear();
        if (content !== "")
          buffer.push(content);
        this._readableState.length = content.length;
        return this;
      }
      read(n) {
        debug("read", n);
        if (n === void 0) {
          n = NaN;
        } else if (!NumberIsInteger(n)) {
          n = NumberParseInt(n, 10);
        }
        const state = this._readableState;
        const nOrig = n;
        if (n > state.highWaterMark)
          state.highWaterMark = computeNewHighWaterMark(n);
        if (n !== 0)
          state.emittedReadable = false;
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
          debug("read: emitReadable", state.length, state.ended);
          if (state.length === 0 && state.ended)
            endReadable(this);
          else
            emitReadable(this);
          return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
          if (state.length === 0)
            endReadable(this);
          return null;
        }
        let doRead = state.needReadable;
        debug("need readable", doRead);
        if (state.length === 0 || state.length - n < state.highWaterMark) {
          doRead = true;
          debug("length less than watermark", doRead);
        }
        if (state.ended || state.reading || state.destroyed || state.errored || !state.constructed) {
          doRead = false;
          debug("reading, ended or constructing", doRead);
        } else if (doRead) {
          debug("do read");
          state.reading = true;
          state.sync = true;
          if (state.length === 0)
            state.needReadable = true;
          try {
            this._read(state.highWaterMark);
          } catch (err) {
            errorOrDestroy2(this, err);
          }
          state.sync = false;
          if (!state.reading)
            n = howMuchToRead(nOrig, state);
        }
        let ret;
        if (n > 0)
          ret = fromList(n, state);
        else
          ret = null;
        if (ret === null) {
          state.needReadable = state.length <= state.highWaterMark;
          n = 0;
        } else {
          state.length -= n;
          if (state.multiAwaitDrain) {
            state.awaitDrainWriters.clear();
          } else {
            state.awaitDrainWriters = null;
          }
        }
        if (state.length === 0) {
          if (!state.ended)
            state.needReadable = true;
          if (nOrig !== n && state.ended)
            endReadable(this);
        }
        if (ret !== null && !state.errorEmitted && !state.closeEmitted) {
          state.dataEmitted = true;
          this.emit("data", ret);
        }
        return ret;
      }
      pipe(dest, pipeOpts) {
        const src = this;
        const state = this._readableState;
        if (state.pipes.length === 1) {
          if (!state.multiAwaitDrain) {
            state.multiAwaitDrain = true;
            state.awaitDrainWriters = new SafeSet(state.awaitDrainWriters ? [state.awaitDrainWriters] : []);
          }
        }
        state.pipes.push(dest);
        debug("pipe count=%d opts=%j", state.pipes.length, pipeOpts);
        const doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== src_default3.stdout && dest !== src_default3.stderr;
        const endFn = doEnd ? onend : unpipe;
        if (state.endEmitted)
          src_default3.nextTick(endFn);
        else
          src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
          debug("onunpipe");
          if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
              unpipeInfo.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          debug("onend");
          dest.end();
        }
        let ondrain;
        let cleanedUp = false;
        function cleanup() {
          debug("cleanup");
          dest.removeListener("close", onclose);
          dest.removeListener("finish", onfinish);
          if (ondrain) {
            dest.removeListener("drain", ondrain);
          }
          dest.removeListener("error", onerror);
          dest.removeListener("unpipe", onunpipe);
          src.removeListener("end", onend);
          src.removeListener("end", unpipe);
          src.removeListener("data", ondata);
          cleanedUp = true;
          if (ondrain && state.awaitDrainWriters && (!dest._writableState || dest._writableState.needDrain))
            ondrain();
        }
        function pause() {
          if (!cleanedUp) {
            if (state.pipes.length === 1 && state.pipes[0] === dest) {
              debug("false write response, pause", 0);
              state.awaitDrainWriters = dest;
              state.multiAwaitDrain = false;
            } else if (state.pipes.length > 1 && state.pipes.includes(dest)) {
              debug("false write response, pause", state.awaitDrainWriters.size);
              state.awaitDrainWriters.add(dest);
            }
            src.pause();
          }
          if (!ondrain) {
            ondrain = pipeOnDrain(src, dest);
            dest.on("drain", ondrain);
          }
        }
        src.on("data", ondata);
        function ondata(chunk) {
          debug("ondata");
          const ret = dest.write(chunk);
          debug("dest.write", ret);
          if (ret === false) {
            pause();
          }
        }
        function onerror(er) {
          debug("onerror", er);
          unpipe();
          dest.removeListener("error", onerror);
          if (dest.listenerCount("error") === 0) {
            const s = dest._writableState || dest._readableState;
            if (s && !s.errorEmitted) {
              errorOrDestroy2(dest, er);
            } else {
              dest.emit("error", er);
            }
          }
        }
        prependListener(dest, "error", onerror);
        function onclose() {
          dest.removeListener("finish", onfinish);
          unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
          debug("onfinish");
          dest.removeListener("close", onclose);
          unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
          debug("unpipe");
          src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (dest.writableNeedDrain === true) {
          if (state.flowing) {
            pause();
          }
        } else if (!state.flowing) {
          debug("pipe resume");
          src.resume();
        }
        return dest;
      }
      unpipe(dest) {
        const state = this._readableState;
        const unpipeInfo = {
          hasUnpiped: false
        };
        if (state.pipes.length === 0)
          return this;
        if (!dest) {
          const dests = state.pipes;
          state.pipes = [];
          this.pause();
          for (let i = 0; i < dests.length; i++)
            dests[i].emit("unpipe", this, {
              hasUnpiped: false
            });
          return this;
        }
        const index = ArrayPrototypeIndexOf(state.pipes, dest);
        if (index === -1)
          return this;
        state.pipes.splice(index, 1);
        if (state.pipes.length === 0)
          this.pause();
        dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      on(ev, fn) {
        const res = Stream.prototype.on.call(this, ev, fn);
        const state = this._readableState;
        if (ev === "data") {
          state.readableListening = this.listenerCount("readable") > 0;
          if (state.flowing !== false)
            this.resume();
        } else if (ev === "readable") {
          if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) {
              emitReadable(this);
            } else if (!state.reading) {
              src_default3.nextTick(nReadingNextTick, this);
            }
          }
        }
        return res;
      }
      removeListener(ev, fn) {
        const res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
          src_default3.nextTick(updateReadableListening, this);
        }
        return res;
      }
      removeAllListeners(ev) {
        const res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === void 0) {
          src_default3.nextTick(updateReadableListening, this);
        }
        return res;
      }
      resume() {
        const state = this._readableState;
        if (!state.flowing) {
          debug("resume");
          state.flowing = !state.readableListening;
          resume(this, state);
        }
        state[kPaused] = false;
        return this;
      }
      pause() {
        debug("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
          debug("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        this._readableState[kPaused] = true;
        return this;
      }
      iterator(options) {
        if (options !== void 0) {
          validateObject2(options, "options");
        }
        return streamToAsyncIterator(this, options);
      }
    };
    Readable = _Readable;
    Readable.ReadableState = ReadableState;
    Readable.prototype.destroy = destroy_default.destroy;
    Readable.prototype._undestroy = destroy_default.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype[EventEmitter.captureRejectionSymbol] = function(err) {
      this.destroy(err);
    };
    MAX_HWM = 1073741824;
    Readable.prototype._read = function(n) {
      throw new ERR_METHOD_NOT_IMPLEMENTED("_read()");
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.off = Readable.prototype.removeListener;
    Readable.prototype.wrap = function(stream) {
      let paused = false;
      stream.on("data", (chunk) => {
        if (!this.push(chunk) && stream.pause) {
          paused = true;
          stream.pause();
        }
      });
      stream.on("end", () => {
        this.push(null);
      });
      stream.on("error", (err) => {
        errorOrDestroy2(this, err);
      });
      stream.on("close", () => {
        this.destroy();
      });
      stream.on("destroy", () => {
        this.destroy();
      });
      this._read = () => {
        if (paused && stream.resume) {
          paused = false;
          stream.resume();
        }
      };
      const streamKeys = ObjectKeys2(stream);
      for (let j = 1; j < streamKeys.length; j++) {
        const i = streamKeys[j];
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = stream[i].bind(stream);
        }
      }
      return this;
    };
    Readable.prototype[SymbolAsyncIterator] = function() {
      return streamToAsyncIterator(this);
    };
    ObjectDefineProperties(Readable.prototype, {
      readable: {
        __proto__: null,
        get() {
          const r = this._readableState;
          return !!r && r.readable !== false && !r.destroyed && !r.errorEmitted && !r.endEmitted;
        },
        set(val) {
          if (this._readableState) {
            this._readableState.readable = !!val;
          }
        }
      },
      readableDidRead: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState.dataEmitted;
        }
      },
      readableAborted: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
        }
      },
      readableHighWaterMark: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState.highWaterMark;
        }
      },
      readableBuffer: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState && this._readableState.buffer;
        }
      },
      readableFlowing: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return this._readableState.flowing;
        },
        set: function(state) {
          if (this._readableState) {
            this._readableState.flowing = state;
          }
        }
      },
      readableLength: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState.length;
        }
      },
      readableObjectMode: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.objectMode : false;
        }
      },
      readableEncoding: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.encoding : null;
        }
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.errored : null;
        }
      },
      closed: {
        __proto__: null,
        get() {
          return this._readableState ? this._readableState.closed : false;
        }
      },
      destroyed: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.destroyed : false;
        },
        set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      },
      readableEnded: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._readableState ? this._readableState.endEmitted : false;
        }
      }
    });
    ObjectDefineProperties(ReadableState.prototype, {
      pipesCount: {
        __proto__: null,
        get() {
          return this.pipes.length;
        }
      },
      paused: {
        __proto__: null,
        get() {
          return this[kPaused] !== false;
        },
        set(value) {
          this[kPaused] = !!value;
        }
      }
    });
    Readable._fromList = fromList;
    readable_default = Readable;
  }
});

// ../../node/readable-stream/out/internal/streams/writable.js
function nop3() {
}
function resetBuffer(state) {
  state.buffered = [];
  state.bufferedIndex = 0;
  state.allBuffers = true;
  state.allNoop = true;
}
function _write(stream, chunk, encoding, cb) {
  const state = stream._writableState;
  if (typeof encoding === "function") {
    cb = encoding;
    encoding = state.defaultEncoding;
  } else {
    if (!encoding)
      encoding = state.defaultEncoding;
    else if (encoding !== "buffer" && !Buffer2.isEncoding(encoding))
      throw new ERR_UNKNOWN_ENCODING2(encoding);
    if (typeof cb !== "function")
      cb = nop3;
  }
  if (chunk === null) {
    throw new ERR_STREAM_NULL_VALUES2();
  } else if (!state.objectMode) {
    if (typeof chunk === "string") {
      if (state.decodeStrings !== false) {
        chunk = Buffer2.from(chunk, encoding);
        encoding = "buffer";
      }
    } else if (chunk instanceof Buffer2) {
      encoding = "buffer";
    } else if (Stream._isUint8Array(chunk)) {
      chunk = Stream._uint8ArrayToBuffer(chunk);
      encoding = "buffer";
    } else {
      throw new ERR_INVALID_ARG_TYPE9("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
  }
  let err;
  if (state.ending) {
    err = new ERR_STREAM_WRITE_AFTER_END();
  } else if (state.destroyed) {
    err = new ERR_STREAM_DESTROYED("write");
  }
  if (err) {
    src_default3.nextTick(cb, err);
    errorOrDestroy3(stream, err, true);
    return err;
  }
  state.pendingcb++;
  return writeOrBuffer(stream, state, chunk, encoding, cb);
}
function writeOrBuffer(stream, state, chunk, encoding, callback) {
  const len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  const ret = state.length < state.highWaterMark;
  if (!ret)
    state.needDrain = true;
  if (state.writing || state.corked || state.errored || !state.constructed) {
    state.buffered.push({
      chunk,
      encoding,
      callback
    });
    if (state.allBuffers && encoding !== "buffer") {
      state.allBuffers = false;
    }
    if (state.allNoop && callback !== nop3) {
      state.allNoop = false;
    }
  } else {
    state.writelen = len;
    state.writecb = callback;
    state.writing = true;
    state.sync = true;
    stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  return ret && !state.errored && !state.destroyed;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed)
    state.onwrite(new ERR_STREAM_DESTROYED("write"));
  else if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}
function onwriteError(stream, state, er, cb) {
  --state.pendingcb;
  cb(er);
  errorBuffer(state);
  errorOrDestroy3(stream, er);
}
function onwrite(stream, er) {
  const state = stream._writableState;
  const sync = state.sync;
  const cb = state.writecb;
  if (typeof cb !== "function") {
    errorOrDestroy3(stream, new ERR_MULTIPLE_CALLBACK2());
    return;
  }
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
  if (er) {
    er.stack;
    if (!state.errored) {
      state.errored = er;
    }
    if (stream._readableState && !stream._readableState.errored) {
      stream._readableState.errored = er;
    }
    if (sync) {
      src_default3.nextTick(onwriteError, stream, state, er, cb);
    } else {
      onwriteError(stream, state, er, cb);
    }
  } else {
    if (state.buffered.length > state.bufferedIndex) {
      clearBuffer(stream, state);
    }
    if (sync) {
      if (state.afterWriteTickInfo !== null && state.afterWriteTickInfo.cb === cb) {
        state.afterWriteTickInfo.count++;
      } else {
        state.afterWriteTickInfo = {
          count: 1,
          cb,
          stream,
          state
        };
        src_default3.nextTick(afterWriteTick, state.afterWriteTickInfo);
      }
    } else {
      afterWrite(stream, state, 1, cb);
    }
  }
}
function afterWriteTick({ stream, state, count, cb }) {
  state.afterWriteTickInfo = null;
  return afterWrite(stream, state, count, cb);
}
function afterWrite(stream, state, count, cb) {
  const needDrain = !state.ending && !stream.destroyed && state.length === 0 && state.needDrain;
  if (needDrain) {
    state.needDrain = false;
    stream.emit("drain");
  }
  while (count-- > 0) {
    state.pendingcb--;
    cb();
  }
  if (state.destroyed) {
    errorBuffer(state);
  }
  finishMaybe(stream, state);
}
function errorBuffer(state) {
  if (state.writing) {
    return;
  }
  for (let n = state.bufferedIndex; n < state.buffered.length; ++n) {
    var _state$errored;
    const { chunk, callback } = state.buffered[n];
    const len = state.objectMode ? 1 : chunk.length;
    state.length -= len;
    callback(
      (_state$errored = state.errored) !== null && _state$errored !== void 0 ? _state$errored : new ERR_STREAM_DESTROYED("write")
    );
  }
  const onfinishCallbacks = state[kOnFinished].splice(0);
  for (let i = 0; i < onfinishCallbacks.length; i++) {
    var _state$errored2;
    onfinishCallbacks[i](
      (_state$errored2 = state.errored) !== null && _state$errored2 !== void 0 ? _state$errored2 : new ERR_STREAM_DESTROYED("end")
    );
  }
  resetBuffer(state);
}
function clearBuffer(stream, state) {
  if (state.corked || state.bufferProcessing || state.destroyed || !state.constructed) {
    return;
  }
  const { buffered, bufferedIndex, objectMode } = state;
  const bufferedLength = buffered.length - bufferedIndex;
  if (!bufferedLength) {
    return;
  }
  let i = bufferedIndex;
  state.bufferProcessing = true;
  if (bufferedLength > 1 && stream._writev) {
    state.pendingcb -= bufferedLength - 1;
    const callback = state.allNoop ? nop3 : (err) => {
      for (let n = i; n < buffered.length; ++n) {
        buffered[n].callback(err);
      }
    };
    const chunks = state.allNoop && i === 0 ? buffered : ArrayPrototypeSlice(buffered, i);
    chunks.allBuffers = state.allBuffers;
    doWrite(stream, state, true, state.length, chunks, "", callback);
    resetBuffer(state);
  } else {
    do {
      const { chunk, encoding, callback } = buffered[i];
      buffered[i++] = null;
      const len = objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, callback);
    } while (i < buffered.length && !state.writing);
    if (i === buffered.length) {
      resetBuffer(state);
    } else if (i > 256) {
      buffered.splice(0, i);
      state.bufferedIndex = 0;
    } else {
      state.bufferedIndex = i;
    }
  }
  state.bufferProcessing = false;
}
function needFinish(state) {
  return state.ending && !state.destroyed && state.constructed && state.length === 0 && !state.errored && state.buffered.length === 0 && !state.finished && !state.writing && !state.errorEmitted && !state.closeEmitted;
}
function callFinal(stream, state) {
  let called = false;
  function onFinish(err) {
    if (called) {
      errorOrDestroy3(stream, err !== null && err !== void 0 ? err : ERR_MULTIPLE_CALLBACK2());
      return;
    }
    called = true;
    state.pendingcb--;
    if (err) {
      const onfinishCallbacks = state[kOnFinished].splice(0);
      for (let i = 0; i < onfinishCallbacks.length; i++) {
        onfinishCallbacks[i](err);
      }
      errorOrDestroy3(stream, err, state.sync);
    } else if (needFinish(state)) {
      state.prefinished = true;
      stream.emit("prefinish");
      state.pendingcb++;
      src_default3.nextTick(finish, stream, state);
    }
  }
  state.sync = true;
  state.pendingcb++;
  try {
    stream._final(onFinish);
  } catch (err) {
    onFinish(err);
  }
  state.sync = false;
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === "function" && !state.destroyed) {
      state.finalCalled = true;
      callFinal(stream, state);
    } else {
      state.prefinished = true;
      stream.emit("prefinish");
    }
  }
}
function finishMaybe(stream, state, sync) {
  if (needFinish(state)) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      if (sync) {
        state.pendingcb++;
        src_default3.nextTick(
          (stream2, state2) => {
            if (needFinish(state2)) {
              finish(stream2, state2);
            } else {
              state2.pendingcb--;
            }
          },
          stream,
          state
        );
      } else if (needFinish(state)) {
        state.pendingcb++;
        finish(stream, state);
      }
    }
  }
}
function finish(stream, state) {
  state.pendingcb--;
  state.finished = true;
  const onfinishCallbacks = state[kOnFinished].splice(0);
  for (let i = 0; i < onfinishCallbacks.length; i++) {
    onfinishCallbacks[i]();
  }
  stream.emit("finish");
  if (state.autoDestroy) {
    const rState = stream._readableState;
    const autoDestroy = !rState || rState.autoDestroy && (rState.endEmitted || rState.readable === false);
    if (autoDestroy) {
      stream.destroy();
    }
  }
}
function lazyWebStreams2() {
  if (webStreamsAdapters2 === void 0)
    webStreamsAdapters2 = {};
  return webStreamsAdapters2;
}
var ERR_INVALID_ARG_TYPE9, ERR_METHOD_NOT_IMPLEMENTED2, ERR_MULTIPLE_CALLBACK2, ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED, ERR_STREAM_ALREADY_FINISHED, ERR_STREAM_NULL_VALUES2, ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING2, errorOrDestroy3, kOnFinished, WritableState, _Writable, Writable, destroy2, webStreamsAdapters2;
var init_writable = __esm({
  "../../node/readable-stream/out/internal/streams/writable.js"() {
    init_esm10();
    init_primordials();
    init_esm4();
    init_legacy2();
    init_destroy();
    init_add_abort_signal();
    init_esm2();
    init_state();
    init_duplex_holder();
    init_errors2();
    ({
      ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE9,
      ERR_METHOD_NOT_IMPLEMENTED: ERR_METHOD_NOT_IMPLEMENTED2,
      ERR_MULTIPLE_CALLBACK: ERR_MULTIPLE_CALLBACK2,
      ERR_STREAM_CANNOT_PIPE,
      ERR_STREAM_DESTROYED,
      ERR_STREAM_ALREADY_FINISHED,
      ERR_STREAM_NULL_VALUES: ERR_STREAM_NULL_VALUES2,
      ERR_STREAM_WRITE_AFTER_END,
      ERR_UNKNOWN_ENCODING: ERR_UNKNOWN_ENCODING2
    } = codes3);
    ({ errorOrDestroy: errorOrDestroy3 } = destroy_default);
    kOnFinished = Symbol2("kOnFinished");
    WritableState = class {
      constructor(options, stream, isDuplex) {
        if (typeof isDuplex !== "boolean")
          isDuplex = stream instanceof duplex_holder_default.Duplex;
        this.objectMode = !!(options && options.objectMode);
        if (isDuplex)
          this.objectMode = this.objectMode || !!(options && options.writableObjectMode);
        this.highWaterMark = options ? getHighWaterMark(this, options, "writableHighWaterMark", isDuplex) : getDefaultHighWaterMark(false);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        const noDecode = !!(options && options.decodeStrings === false);
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options && options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = onwrite.bind(void 0, stream);
        this.writecb = null;
        this.writelen = 0;
        this.afterWriteTickInfo = null;
        resetBuffer(this);
        this.pendingcb = 0;
        this.constructed = true;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = !options || options.emitClose !== false;
        this.autoDestroy = !options || options.autoDestroy !== false;
        this.errored = null;
        this.closed = false;
        this.closeEmitted = false;
        this[kOnFinished] = [];
      }
      getBuffer() {
        return ArrayPrototypeSlice(this.buffered, this.bufferedIndex);
      }
    };
    ObjectDefineProperty2(WritableState.prototype, "bufferedRequestCount", {
      __proto__: null,
      get() {
        return this.buffered.length - this.bufferedIndex;
      }
    });
    _Writable = class extends Stream {
      constructor(options) {
        super(options);
        const isDuplex = this instanceof duplex_holder_default.Duplex;
        if (!isDuplex && !FunctionPrototypeSymbolHasInstance(_Writable, this))
          return new _Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        if (options) {
          if (typeof options.write === "function")
            this._write = options.write;
          if (typeof options.writev === "function")
            this._writev = options.writev;
          if (typeof options.destroy === "function")
            this._destroy = options.destroy;
          if (typeof options.final === "function")
            this._final = options.final;
          if (typeof options.construct === "function")
            this._construct = options.construct;
          if (options.signal)
            addAbortSignal(options.signal, this);
        }
        destroy_default.construct(this, () => {
          const state = this._writableState;
          if (!state.writing) {
            clearBuffer(this, state);
          }
          finishMaybe(this, state);
        });
      }
      static fromWeb(writableStream, options) {
        return lazyWebStreams2().newStreamWritableFromWritableStream(writableStream, options);
      }
      static toWeb(streamWritable) {
        return lazyWebStreams2().newWritableStreamFromStreamWritable(streamWritable);
      }
      pipe() {
        errorOrDestroy3(this, new ERR_STREAM_CANNOT_PIPE());
      }
      write(chunk, encoding, cb) {
        return _write(this, chunk, encoding, cb) === true;
      }
      cork() {
        this._writableState.corked++;
      }
      uncork() {
        const state = this._writableState;
        if (state.corked) {
          state.corked--;
          if (!state.writing)
            clearBuffer(this, state);
        }
      }
      setDefaultEncoding(encoding) {
        if (typeof encoding === "string")
          encoding = StringPrototypeToLowerCase(encoding);
        if (!Buffer2.isEncoding(encoding))
          throw new ERR_UNKNOWN_ENCODING2(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
      }
      end(chunk, encoding, cb) {
        const state = this._writableState;
        if (typeof chunk === "function") {
          cb = chunk;
          chunk = null;
          encoding = null;
        } else if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        let err;
        if (chunk !== null && chunk !== void 0) {
          const ret = _write(this, chunk, encoding);
          if (ret instanceof Error3) {
            err = ret;
          }
        }
        if (state.corked) {
          state.corked = 1;
          this.uncork();
        }
        if (err) {
        } else if (!state.errored && !state.ending) {
          state.ending = true;
          finishMaybe(this, state, true);
          state.ended = true;
        } else if (state.finished) {
          err = new ERR_STREAM_ALREADY_FINISHED("end");
        } else if (state.destroyed) {
          err = new ERR_STREAM_DESTROYED("end");
        }
        if (typeof cb === "function") {
          if (err || state.finished) {
            src_default3.nextTick(cb, err);
          } else {
            state[kOnFinished].push(cb);
          }
        }
        return this;
      }
      destroy(err, cb) {
        const state = this._writableState;
        if (!state.destroyed && (state.bufferedIndex < state.buffered.length || state[kOnFinished].length)) {
          src_default3.nextTick(errorBuffer, state);
        }
        destroy2.call(this, err, cb);
        return this;
      }
    };
    Writable = _Writable;
    Writable.WritableState = WritableState;
    ObjectDefineProperty2(Writable, SymbolHasInstance, {
      __proto__: null,
      value: function(object) {
        if (FunctionPrototypeSymbolHasInstance(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
    Writable.prototype._write = function(chunk, encoding, cb) {
      if (this._writev) {
        this._writev(
          [
            {
              chunk,
              encoding
            }
          ],
          cb
        );
      } else {
        throw new ERR_METHOD_NOT_IMPLEMENTED2("_write()");
      }
    };
    Writable.prototype._writev = null;
    ObjectDefineProperties(Writable.prototype, {
      closed: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.closed : false;
        }
      },
      destroyed: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.destroyed : false;
        },
        set(value) {
          if (this._writableState) {
            this._writableState.destroyed = value;
          }
        }
      },
      writable: {
        __proto__: null,
        get() {
          const w = this._writableState;
          return !!w && w.writable !== false && !w.destroyed && !w.errored && !w.ending && !w.ended;
        },
        set(val) {
          if (this._writableState) {
            this._writableState.writable = !!val;
          }
        }
      },
      writableFinished: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.finished : false;
        }
      },
      writableObjectMode: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.objectMode : false;
        }
      },
      writableBuffer: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.getBuffer();
        }
      },
      writableEnded: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.ending : false;
        }
      },
      writableNeedDrain: {
        __proto__: null,
        get() {
          const wState = this._writableState;
          if (!wState)
            return false;
          return !wState.destroyed && !wState.ending && wState.needDrain;
        }
      },
      writableHighWaterMark: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.highWaterMark;
        }
      },
      writableCorked: {
        __proto__: null,
        get() {
          return this._writableState ? this._writableState.corked : 0;
        }
      },
      writableLength: {
        __proto__: null,
        get() {
          return this._writableState && this._writableState.length;
        }
      },
      errored: {
        __proto__: null,
        enumerable: false,
        get() {
          return this._writableState ? this._writableState.errored : null;
        }
      },
      writableAborted: {
        __proto__: null,
        enumerable: false,
        get: function() {
          return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
        }
      }
    });
    destroy2 = destroy_default.destroy;
    Writable.prototype._undestroy = destroy_default.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Writable.prototype[EventEmitter.captureRejectionSymbol] = function(err) {
      this.destroy(err);
    };
  }
});

// ../../node/readable-stream/out/internal/streams/duplex.js
function lazyWebStreams3() {
  if (webStreamsAdapters3 === void 0)
    webStreamsAdapters3 = {};
  return webStreamsAdapters3;
}
var duplexify, Duplex, webStreamsAdapters3, from3, duplex_default;
var init_duplex = __esm({
  "../../node/readable-stream/out/internal/streams/duplex.js"() {
    init_primordials();
    init_duplex_holder();
    init_readable();
    init_writable();
    Duplex = class {
      constructor(options) {
        if (!(this instanceof duplex_holder_default.Duplex))
          return new Duplex(options);
        Readable.call(this, options);
        Writable.call(this, options);
        if (options) {
          this.allowHalfOpen = options.allowHalfOpen !== false;
          if (options.readable === false) {
            this._readableState.readable = false;
            this._readableState.ended = true;
            this._readableState.endEmitted = true;
          }
          if (options.writable === false) {
            this._writableState.writable = false;
            this._writableState.ending = true;
            this._writableState.ended = true;
            this._writableState.finished = true;
          }
        } else {
          this.allowHalfOpen = true;
        }
      }
      static fromWeb(pair, options) {
        return lazyWebStreams3().newStreamDuplexFromReadableWritablePair(pair, options);
      }
      static toWeb(duplex) {
        return lazyWebStreams3().newReadableWritablePairFromDuplex(duplex);
      }
      static from(body) {
        if (!duplexify) {
          duplexify = duplex_holder_default.duplexify;
        }
        return duplexify(body, "body");
      }
    };
    ObjectDefineProperties(Duplex.prototype, {
      writable: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writable")
      },
      writableHighWaterMark: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableHighWaterMark")
      },
      writableObjectMode: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableObjectMode")
      },
      writableBuffer: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableBuffer")
      },
      writableLength: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableLength")
      },
      writableFinished: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableFinished")
      },
      writableCorked: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableCorked")
      },
      writableEnded: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableEnded")
      },
      writableNeedDrain: {
        __proto__: null,
        ...ObjectGetOwnPropertyDescriptor2(Writable.prototype, "writableNeedDrain")
      },
      destroyed: {
        __proto__: null,
        get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set(value) {
          if (this._readableState && this._writableState) {
            this._readableState.destroyed = value;
            this._writableState.destroyed = value;
          }
        }
      }
    });
    ObjectSetPrototypeOf(Duplex.prototype, Readable.prototype);
    ObjectSetPrototypeOf(Duplex, Readable);
    {
      const keys3 = ObjectKeys2(Writable.prototype);
      for (let i = 0; i < keys3.length; i++) {
        const method = keys3[i];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    duplex_holder_default.Duplex = Duplex;
    from3 = Duplex.from;
    duplex_default = Duplex;
  }
});

// ../../node/readable-stream/out/internal/streams/transform.js
function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);
  const readableHighWaterMark = options ? getHighWaterMark(this, options, "readableHighWaterMark", true) : null;
  if (readableHighWaterMark === 0) {
    options = {
      ...options,
      highWaterMark: null,
      readableHighWaterMark,
      writableHighWaterMark: options.writableHighWaterMark || 0
    };
  }
  duplex_default.call(this, options);
  this._readableState.sync = false;
  this[kCallback] = null;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.on("prefinish", prefinish2);
}
function final(cb) {
  if (typeof this._flush === "function" && !this.destroyed) {
    this._flush((er, data) => {
      if (er) {
        if (cb) {
          cb(er);
        } else {
          this.destroy(er);
        }
        return;
      }
      if (data != null) {
        this.push(data);
      }
      this.push(null);
      if (cb) {
        cb();
      }
    });
  } else {
    this.push(null);
    if (cb) {
      cb();
    }
  }
}
function prefinish2() {
  if (this._final !== final) {
    final.call(this);
  }
}
var ERR_METHOD_NOT_IMPLEMENTED3, prototype2, call, kCallback, transform_default;
var init_transform = __esm({
  "../../node/readable-stream/out/internal/streams/transform.js"() {
    init_primordials();
    init_errors2();
    init_duplex();
    init_state();
    ({ ERR_METHOD_NOT_IMPLEMENTED: ERR_METHOD_NOT_IMPLEMENTED3 } = codes3);
    ({ prototype: prototype2, call } = duplex_default);
    ObjectSetPrototypeOf(Transform.prototype, duplex_default.prototype);
    ObjectSetPrototypeOf(Transform, duplex_default);
    kCallback = Symbol2("kCallback");
    ObjectSetPrototypeOf(Transform.prototype, prototype2);
    ObjectSetPrototypeOf(Transform, duplex_default);
    Transform.prototype._final = final;
    Transform.prototype._transform = function(chunk, encoding, callback) {
      throw new ERR_METHOD_NOT_IMPLEMENTED3("_transform()");
    };
    Transform.prototype._write = function(chunk, encoding, callback) {
      const rState = this._readableState;
      const wState = this._writableState;
      const length2 = rState.length;
      this._transform(chunk, encoding, (err, val) => {
        if (err) {
          callback(err);
          return;
        }
        if (val != null) {
          this.push(val);
        }
        if (wState.ended || length2 === rState.length || rState.length < rState.highWaterMark) {
          callback();
        } else {
          this[kCallback] = callback;
        }
      });
    };
    Transform.prototype._read = function() {
      if (this[kCallback]) {
        const callback = this[kCallback];
        this[kCallback] = null;
        callback();
      }
    };
    transform_default = Transform;
  }
});

// ../../node/readable-stream/out/internal/streams/passthrough.js
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  call2(this, options);
}
var prototype3, call2, passthrough_default;
var init_passthrough = __esm({
  "../../node/readable-stream/out/internal/streams/passthrough.js"() {
    init_primordials();
    init_transform();
    ({ prototype: prototype3, call: call2 } = transform_default);
    ObjectSetPrototypeOf(PassThrough.prototype, prototype3);
    ObjectSetPrototypeOf(PassThrough, transform_default);
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
    passthrough_default = PassThrough;
  }
});

// ../../node/readable-stream/out/internal/streams/pipeline.js
function destroyer2(stream, reading, writing) {
  let finished3 = false;
  stream.on("close", () => {
    finished3 = true;
  });
  const cleanup = end_of_stream_default(
    stream,
    {
      readable: reading,
      writable: writing
    },
    (err) => {
      finished3 = !err;
    }
  );
  return {
    destroy: (err) => {
      if (finished3)
        return;
      finished3 = true;
      destroy_default.destroyer(stream, err || new ERR_STREAM_DESTROYED2("pipe"));
    },
    cleanup
  };
}
function popCallback(streams) {
  validateFunction3(streams[streams.length - 1], "streams[stream.length - 1]");
  return streams.pop();
}
function makeAsyncIterable(val) {
  if (isIterable(val)) {
    return val;
  } else if (isReadableNodeStream(val)) {
    return fromReadable(val);
  }
  throw new ERR_INVALID_ARG_TYPE10("val", ["Readable", "Iterable", "AsyncIterable"], val);
}
async function* fromReadable(val) {
  if (!Readable2) {
    Readable2 = await Promise.resolve().then(() => (init_readable(), readable_exports));
  }
  yield* Readable2.prototype[SymbolAsyncIterator].call(val);
}
async function pump(iterable, writable, finish2, { end }) {
  let error;
  let onresolve = null;
  const resume2 = (err) => {
    if (err) {
      error = err;
    }
    if (onresolve) {
      const callback = onresolve;
      onresolve = null;
      callback();
    }
  };
  const wait = () => new Promise2((resolve3, reject) => {
    if (error) {
      reject(error);
    } else {
      onresolve = () => {
        if (error) {
          reject(error);
        } else {
          resolve3();
        }
      };
    }
  });
  writable.on("drain", resume2);
  const cleanup = end_of_stream_default(
    writable,
    {
      readable: false
    },
    resume2
  );
  try {
    if (writable.writableNeedDrain) {
      await wait();
    }
    for await (const chunk of iterable) {
      if (!writable.write(chunk)) {
        await wait();
      }
    }
    if (end) {
      writable.end();
    }
    await wait();
    finish2();
  } catch (err) {
    finish2(error !== err ? aggregateTwoErrors(error, err) : err);
  } finally {
    cleanup();
    writable.off("drain", resume2);
  }
}
function pipeline(...streams) {
  return pipelineImpl(streams, once2(popCallback(streams)));
}
function pipelineImpl(streams, callback, opts) {
  if (streams.length === 1 && ArrayIsArray(streams[0])) {
    streams = streams[0];
  }
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS3("streams");
  }
  const ac = new AbortController4();
  const signal = ac.signal;
  const outerSignal = opts === null || opts === void 0 ? void 0 : opts.signal;
  const lastStreamCleanup = [];
  validateAbortSignal2(outerSignal, "options.signal");
  function abort2() {
    finishImpl(new AbortError());
  }
  outerSignal === null || outerSignal === void 0 ? void 0 : outerSignal.addEventListener("abort", abort2);
  let error;
  let value;
  const destroys = [];
  let finishCount = 0;
  function finish2(err) {
    finishImpl(err, --finishCount === 0);
  }
  function finishImpl(err, final2) {
    if (err && (!error || error.code === "ERR_STREAM_PREMATURE_CLOSE")) {
      error = err;
    }
    if (!error && !final2) {
      return;
    }
    while (destroys.length) {
      destroys.shift()(error);
    }
    outerSignal === null || outerSignal === void 0 ? void 0 : outerSignal.removeEventListener("abort", abort2);
    ac.abort();
    if (final2) {
      if (!error) {
        lastStreamCleanup.forEach((fn) => fn());
      }
      src_default3.nextTick(callback, error, value);
    }
  }
  let ret;
  for (let i = 0; i < streams.length; i++) {
    const stream = streams[i];
    const reading = i < streams.length - 1;
    const writing = i > 0;
    const end = reading || (opts === null || opts === void 0 ? void 0 : opts.end) !== false;
    const isLastStream = i === streams.length - 1;
    if (isNodeStream(stream)) {
      let onError = function(err) {
        if (err && err.name !== "AbortError" && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          finish2(err);
        }
      };
      if (end) {
        const { destroy: destroy3, cleanup } = destroyer2(stream, reading, writing);
        destroys.push(destroy3);
        if (isReadable(stream) && isLastStream) {
          lastStreamCleanup.push(cleanup);
        }
      }
      stream.on("error", onError);
      if (isReadable(stream) && isLastStream) {
        lastStreamCleanup.push(() => {
          stream.removeListener("error", onError);
        });
      }
    }
    if (i === 0) {
      if (typeof stream === "function") {
        ret = stream({
          signal
        });
        if (!isIterable(ret)) {
          throw new ERR_INVALID_RETURN_VALUE2("Iterable, AsyncIterable or Stream", "source", ret);
        }
      } else if (isIterable(stream) || isReadableNodeStream(stream)) {
        ret = stream;
      } else {
        ret = duplex_default.from(stream);
      }
    } else if (typeof stream === "function") {
      ret = makeAsyncIterable(ret);
      ret = stream(ret, {
        signal
      });
      if (reading) {
        if (!isIterable(ret, true)) {
          throw new ERR_INVALID_RETURN_VALUE2("AsyncIterable", `transform[${i - 1}]`, ret);
        }
      } else {
        var _ret;
        const pt = new passthrough_default({
          objectMode: true
        });
        const then = (_ret = ret) === null || _ret === void 0 ? void 0 : _ret.then;
        if (typeof then === "function") {
          finishCount++;
          then.call(
            ret,
            (val) => {
              value = val;
              if (val != null) {
                pt.write(val);
              }
              if (end) {
                pt.end();
              }
              src_default3.nextTick(finish2);
            },
            (err) => {
              pt.destroy(err);
              src_default3.nextTick(finish2, err);
            }
          );
        } else if (isIterable(ret, true)) {
          finishCount++;
          pump(ret, pt, finish2, {
            end
          });
        } else {
          throw new ERR_INVALID_RETURN_VALUE2("AsyncIterable or Promise", "destination", ret);
        }
        ret = pt;
        const { destroy: destroy3, cleanup } = destroyer2(ret, false, true);
        destroys.push(destroy3);
        if (isLastStream) {
          lastStreamCleanup.push(cleanup);
        }
      }
    } else if (isNodeStream(stream)) {
      if (isReadableNodeStream(ret)) {
        finishCount += 2;
        const cleanup = pipe(ret, stream, finish2, {
          end
        });
        if (isReadable(stream) && isLastStream) {
          lastStreamCleanup.push(cleanup);
        }
      } else if (isIterable(ret)) {
        finishCount++;
        pump(ret, stream, finish2, {
          end
        });
      } else {
        throw new ERR_INVALID_ARG_TYPE10("val", ["Readable", "Iterable", "AsyncIterable"], ret);
      }
      ret = stream;
    } else {
      ret = duplex_default.from(stream);
    }
  }
  if (signal !== null && signal !== void 0 && signal.aborted || outerSignal !== null && outerSignal !== void 0 && outerSignal.aborted) {
    src_default3.nextTick(abort2);
  }
  return ret;
}
function pipe(src, dst, finish2, { end }) {
  let ended = false;
  dst.on("close", () => {
    if (!ended) {
      finish2(new ERR_STREAM_PREMATURE_CLOSE2());
    }
  });
  src.pipe(dst, {
    end
  });
  if (end) {
    src.once("end", () => {
      ended = true;
      dst.end();
    });
  } else {
    finish2();
  }
  end_of_stream_default(
    src,
    {
      readable: true,
      writable: false
    },
    (err) => {
      const rState = src._readableState;
      if (err && err.code === "ERR_STREAM_PREMATURE_CLOSE" && rState && rState.ended && !rState.errored && !rState.errorEmitted) {
        src.once("end", finish2).once("error", finish2);
      } else {
        finish2(err);
      }
    }
  );
  return end_of_stream_default(
    dst,
    {
      readable: false,
      writable: true
    },
    finish2
  );
}
var ERR_INVALID_ARG_TYPE10, ERR_INVALID_RETURN_VALUE2, ERR_MISSING_ARGS3, ERR_STREAM_DESTROYED2, ERR_STREAM_PREMATURE_CLOSE2, AbortController4, Readable2;
var init_pipeline = __esm({
  "../../node/readable-stream/out/internal/streams/pipeline.js"() {
    init_esm10();
    init_primordials();
    init_end_of_stream();
    init_util3();
    init_destroy();
    init_duplex();
    init_errors2();
    init_validators2();
    init_utils();
    init_esm5();
    init_passthrough();
    ({
      ERR_INVALID_ARG_TYPE: ERR_INVALID_ARG_TYPE10,
      ERR_INVALID_RETURN_VALUE: ERR_INVALID_RETURN_VALUE2,
      ERR_MISSING_ARGS: ERR_MISSING_ARGS3,
      ERR_STREAM_DESTROYED: ERR_STREAM_DESTROYED2,
      ERR_STREAM_PREMATURE_CLOSE: ERR_STREAM_PREMATURE_CLOSE2
    } = codes3);
    AbortController4 = globalThis.AbortController || AbortController2;
  }
});

// ../../node/readable-stream/out/internal/streams/compose.js
function compose(...streams) {
  if (streams.length === 0) {
    throw new ERR_MISSING_ARGS4("streams");
  }
  if (streams.length === 1) {
    return from3(streams[0]);
  }
  const orgStreams = [...streams];
  if (typeof streams[0] === "function") {
    streams[0] = from3(streams[0]);
  }
  if (typeof streams[streams.length - 1] === "function") {
    const idx = streams.length - 1;
    streams[idx] = from3(streams[idx]);
  }
  for (let n = 0; n < streams.length; ++n) {
    if (!isNodeStream(streams[n])) {
      continue;
    }
    if (n < streams.length - 1 && !isReadable(streams[n])) {
      throw new ERR_INVALID_ARG_VALUE5(`streams[${n}]`, orgStreams[n], "must be readable");
    }
    if (n > 0 && !isWritable(streams[n])) {
      throw new ERR_INVALID_ARG_VALUE5(`streams[${n}]`, orgStreams[n], "must be writable");
    }
  }
  let ondrain;
  let onfinish;
  let onreadable;
  let onclose;
  let d;
  function onfinished(err) {
    const cb = onclose;
    onclose = null;
    if (cb) {
      cb(err);
    } else if (err) {
      d.destroy(err);
    } else if (!readable && !writable) {
      d.destroy();
    }
  }
  const head = streams[0];
  const tail = pipeline(streams, onfinished);
  const writable = !!isWritable(head);
  const readable = !!isReadable(tail);
  d = new duplex_default({
    writableObjectMode: !!(head !== null && head !== void 0 && head.writableObjectMode),
    readableObjectMode: !!(tail !== null && tail !== void 0 && tail.writableObjectMode),
    writable,
    readable
  });
  if (writable) {
    d._write = function(chunk, encoding, callback) {
      if (head.write(chunk, encoding)) {
        callback();
      } else {
        ondrain = callback;
      }
    };
    d._final = function(callback) {
      head.end();
      onfinish = callback;
    };
    head.on("drain", function() {
      if (ondrain) {
        const cb = ondrain;
        ondrain = null;
        cb();
      }
    });
    tail.on("finish", function() {
      if (onfinish) {
        const cb = onfinish;
        onfinish = null;
        cb();
      }
    });
  }
  if (readable) {
    tail.on("readable", function() {
      if (onreadable) {
        const cb = onreadable;
        onreadable = null;
        cb();
      }
    });
    tail.on("end", function() {
      d.push(null);
    });
    d._read = function() {
      while (true) {
        const buf = tail.read();
        if (buf === null) {
          onreadable = d._read;
          return;
        }
        if (!d.push(buf)) {
          return;
        }
      }
    };
  }
  d._destroy = function(err, callback) {
    if (!err && onclose !== null) {
      err = new AbortError();
    }
    onreadable = null;
    ondrain = null;
    onfinish = null;
    if (onclose === null) {
      callback(err);
    } else {
      onclose = callback;
      destroyer(tail, err);
    }
  };
  return d;
}
var ERR_INVALID_ARG_VALUE5, ERR_MISSING_ARGS4, compose_default;
var init_compose = __esm({
  "../../node/readable-stream/out/internal/streams/compose.js"() {
    init_pipeline();
    init_duplex();
    init_destroy();
    init_utils();
    init_errors2();
    ({ ERR_INVALID_ARG_VALUE: ERR_INVALID_ARG_VALUE5, ERR_MISSING_ARGS: ERR_MISSING_ARGS4 } = codes3);
    compose_default = compose;
  }
});

// ../../node/readable-stream/out/stream/promises.js
var promises_exports = {};
__export(promises_exports, {
  default: () => promises_default,
  finished: () => _finished,
  pipeline: () => pipeline2
});
function pipeline2(...streams) {
  return new Promise2((resolve3, reject) => {
    let signal;
    let end;
    const lastArg = streams[streams.length - 1];
    if (lastArg && typeof lastArg === "object" && !isNodeStream(lastArg) && !isIterable(lastArg)) {
      const options = ArrayPrototypePop(streams);
      signal = options.signal;
      end = options.end;
    }
    pipelineImpl(
      streams,
      (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve3(value);
        }
      },
      {
        signal,
        end
      }
    );
  });
}
var promises_default;
var init_promises = __esm({
  "../../node/readable-stream/out/stream/promises.js"() {
    init_primordials();
    init_utils();
    init_pipeline();
    init_end_of_stream();
    promises_default = {
      finished: _finished,
      pipeline: pipeline2
    };
  }
});

// ../../node/readable-stream/out/stream.js
var customPromisify, ERR_ILLEGAL_CONSTRUCTOR;
var init_stream = __esm({
  "../../node/readable-stream/out/stream.js"() {
    init_esm2();
    init_primordials();
    init_util3();
    init_operators();
    init_errors2();
    init_compose();
    init_pipeline();
    init_destroy();
    init_end_of_stream();
    init_promises();
    init_utils();
    init_legacy2();
    init_readable();
    init_writable();
    init_duplex();
    init_transform();
    init_passthrough();
    init_add_abort_signal();
    ({ custom: customPromisify } = promisify5);
    ({
      codes: { ERR_ILLEGAL_CONSTRUCTOR }
    } = errors_default);
    Stream.isDisturbed = isDisturbed;
    Stream.isErrored = isErrored;
    Stream.isReadable = isReadable;
    Stream.Readable = Readable;
    for (const key of ObjectKeys2(streamReturningOperators)) {
      let fn = function(...args) {
        if (new.target) {
          throw ERR_ILLEGAL_CONSTRUCTOR();
        }
        return Stream.Readable.from(ReflectApply(op, this, args));
      };
      const op = streamReturningOperators[key];
      ObjectDefineProperty2(fn, "name", {
        __proto__: null,
        value: op.name
      });
      ObjectDefineProperty2(fn, "length", {
        __proto__: null,
        value: op.length
      });
      ObjectDefineProperty2(Stream.Readable.prototype, key, {
        __proto__: null,
        value: fn,
        enumerable: false,
        configurable: true,
        writable: true
      });
    }
    for (const key of ObjectKeys2(promiseReturningOperators)) {
      let fn = function(...args) {
        if (new.target) {
          throw ERR_ILLEGAL_CONSTRUCTOR();
        }
        return ReflectApply(op, this, args);
      };
      const op = promiseReturningOperators[key];
      ObjectDefineProperty2(fn, "name", {
        __proto__: null,
        value: op.name
      });
      ObjectDefineProperty2(fn, "length", {
        __proto__: null,
        value: op.length
      });
      ObjectDefineProperty2(Stream.Readable.prototype, key, {
        __proto__: null,
        value: fn,
        enumerable: false,
        configurable: true,
        writable: true
      });
    }
    Stream.Writable = Writable;
    Stream.Duplex = Duplex;
    Stream.Transform = Transform;
    Stream.PassThrough = PassThrough;
    Stream.pipeline = pipeline;
    Stream.addAbortSignal = addAbortSignal;
    Stream.finished = end_of_stream_default;
    Stream.destroy = destroyer;
    Stream.compose = compose_default;
    ObjectDefineProperty2(Stream, "promises", {
      __proto__: null,
      configurable: true,
      enumerable: true,
      get() {
        return promises_default;
      }
    });
    ObjectDefineProperty2(pipeline, customPromisify, {
      __proto__: null,
      enumerable: true,
      get() {
        return pipeline2;
      }
    });
    ObjectDefineProperty2(end_of_stream_default, customPromisify, {
      __proto__: null,
      enumerable: true,
      get() {
        return _finished;
      }
    });
    Stream.Stream = Stream;
    Stream._isUint8Array = function isUint8Array3(value) {
      return value instanceof Uint8Array;
    };
    Stream._uint8ArrayToBuffer = function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    };
  }
});

// ../../node/readable-stream/out/ours/index.js
var originalDestroy, _uint8ArrayToBuffer2, _isUint8Array, isDisturbed2, isErrored2, isReadable2, Readable3, Writable2, Duplex2, Transform2, PassThrough2, addAbortSignal3, finished2, pipeline3, compose2, ours_default;
var init_ours = __esm({
  "../../node/readable-stream/out/ours/index.js"() {
    init_stream();
    init_promises();
    originalDestroy = Stream.Readable.destroy;
    _uint8ArrayToBuffer2 = Stream._uint8ArrayToBuffer;
    _isUint8Array = Stream._isUint8Array;
    isDisturbed2 = Stream.isDisturbed;
    isErrored2 = Stream.isErrored;
    isReadable2 = Stream.isReadable;
    Readable3 = Stream.Readable;
    Writable2 = Stream.Writable;
    Duplex2 = Stream.Duplex;
    Transform2 = Stream.Transform;
    PassThrough2 = Stream.PassThrough;
    addAbortSignal3 = Stream.addAbortSignal;
    finished2 = Stream.finished;
    pipeline3 = Stream.pipeline;
    compose2 = Stream.compose;
    Object.defineProperty(Stream, "promises", {
      configurable: true,
      enumerable: true,
      get() {
        return promises_exports;
      }
    });
    ours_default = Stream.Stream;
  }
});

// ../../node/readable-stream/out/index.js
var init_out = __esm({
  "../../node/readable-stream/out/index.js"() {
    init_ours();
    init_ours();
  }
});

// ../../node/stream/lib/esm/index.js
var _Stream, Stream2;
var init_esm6 = __esm({
  "../../node/stream/lib/esm/index.js"() {
    init_esm4();
    init_out();
    _Stream = class extends EventEmitter {
      constructor() {
        super();
      }
      pipe(dest, options) {
        var source = this;
        function ondata(chunk) {
          if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) {
              source.pause();
            }
          }
        }
        source.on("data", ondata);
        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }
        dest.on("drain", ondrain);
        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on("end", onend);
          source.on("close", onclose);
        }
        var didOnEnd = false;
        function onend() {
          if (didOnEnd)
            return;
          didOnEnd = true;
          dest.end();
        }
        function onclose() {
          if (didOnEnd)
            return;
          didOnEnd = true;
          if (typeof dest.destroy === "function")
            dest.destroy();
        }
        function onerror(er) {
          cleanup();
          if (EventEmitter.listenerCount(this, "error") === 0) {
            throw er;
          }
        }
        source.on("error", onerror);
        dest.on("error", onerror);
        function cleanup() {
          source.removeListener("data", ondata);
          dest.removeListener("drain", ondrain);
          source.removeListener("end", onend);
          source.removeListener("close", onclose);
          source.removeListener("error", onerror);
          dest.removeListener("error", onerror);
          source.removeListener("end", cleanup);
          source.removeListener("close", cleanup);
          dest.removeListener("close", cleanup);
        }
        source.on("end", cleanup);
        source.on("close", cleanup);
        dest.on("close", cleanup);
        dest.emit("pipe", source);
        return dest;
      }
    };
    Stream2 = _Stream;
    Stream2.Readable = Readable3;
    Stream2.Writable = Writable2;
    Stream2.Duplex = Duplex2;
    Stream2.Transform = Transform2;
    Stream2.PassThrough = PassThrough2;
    Stream2.finished = finished2;
    Stream2.pipeline = pipeline3;
    Stream2.Stream = _Stream;
  }
});

// ../../node/tty/lib/esm/index.js
var ReadStream, WriteStream;
var init_esm7 = __esm({
  "../../node/tty/lib/esm/index.js"() {
    init_esm6();
    init_lib();
    ReadStream = class extends Readable3 {
      constructor() {
        super(...arguments);
        this.isRaw = false;
      }
      get isTTY() {
        return true;
      }
      setRawMode(mode) {
        if (this.isRaw !== mode) {
          this.isRaw = mode;
          this.emit("modeChange");
        }
      }
    };
    WriteStream = class extends Writable2 {
      constructor(fd) {
        super();
        this.isRaw = false;
        this.columns = 80;
        this.rows = 120;
        this._print = console.log;
      }
      get isTTY() {
        return true;
      }
      clearLine(dir, callback) {
        warnNotImplemented("WriteStream.clearLine");
        if (callback)
          callback();
        return true;
      }
      clearScreenDown(callback) {
        warnNotImplemented("WriteStream.clearScreenDown");
        if (callback)
          callback();
        return true;
      }
      cursorTo(x, y, callback) {
        warnNotImplemented("WriteStream.cursorTo");
        if (callback)
          callback();
        return true;
      }
      getColorDepth(env3) {
        warnNotImplemented("WriteStream.getColorDepth");
        return 8;
      }
      getWindowSize() {
        warnNotImplemented("WriteStream.getWindowSize");
        return [this.columns, this.rows];
      }
      hasColors(count = 16, env3) {
        switch (this.getColorDepth(env3)) {
          case 1:
            return count >= 2;
          case 4:
            return count >= 16;
          case 8:
            return count >= 256;
          case 24:
            return count >= 16777216;
          default:
            return false;
        }
      }
      setRawMode(mode) {
        if (this.isRaw !== mode) {
          this.isRaw = mode;
          this.emit("modeChange");
        }
      }
      _write(chunk, enc, cb) {
        this._print(enc === "buffer" ? chunk.toString("utf-8") : chunk);
        cb(null);
      }
      _changeColumns(columns) {
        if (columns !== this.columns) {
          this.columns = columns;
          this.emit("resize");
        }
      }
      _changeRows(rows) {
        if (rows !== this.rows) {
          this.rows = rows;
          this.emit("resize");
        }
      }
    };
  }
});

// ../../../node_modules/path-browserify/index.js
var require_path_browserify = __commonJS({
  "../../../node_modules/path-browserify/index.js"(exports2, module) {
    "use strict";
    function assertPath2(path2) {
      if (typeof path2 !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
      }
    }
    function normalizeStringPosix(path2, allowAboveRoot) {
      var res = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path2.length; ++i) {
        if (i < path2.length)
          code = path2.charCodeAt(i);
        else if (code === 47)
          break;
        else
          code = 47;
        if (code === 47) {
          if (lastSlash === i - 1 || dots === 1) {
          } else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf("/");
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = "";
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                  }
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = "";
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += "/..";
              else
                res = "..";
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0)
              res += "/" + path2.slice(lastSlash + 1, i);
            else
              res = path2.slice(lastSlash + 1, i);
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format2(sep3, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep3 + base;
    }
    var posix = {
      resolve: function resolve3() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd2;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path2;
          if (i >= 0)
            path2 = arguments[i];
          else {
            if (cwd2 === void 0)
              cwd2 = process.cwd();
            path2 = cwd2;
          }
          assertPath2(path2);
          if (path2.length === 0) {
            continue;
          }
          resolvedPath = path2 + "/" + resolvedPath;
          resolvedAbsolute = path2.charCodeAt(0) === 47;
        }
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return "/" + resolvedPath;
          else
            return "/";
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return ".";
        }
      },
      normalize: function normalize4(path2) {
        assertPath2(path2);
        if (path2.length === 0)
          return ".";
        var isAbsolute3 = path2.charCodeAt(0) === 47;
        var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
        path2 = normalizeStringPosix(path2, !isAbsolute3);
        if (path2.length === 0 && !isAbsolute3)
          path2 = ".";
        if (path2.length > 0 && trailingSeparator)
          path2 += "/";
        if (isAbsolute3)
          return "/" + path2;
        return path2;
      },
      isAbsolute: function isAbsolute3(path2) {
        assertPath2(path2);
        return path2.length > 0 && path2.charCodeAt(0) === 47;
      },
      join: function join7() {
        if (arguments.length === 0)
          return ".";
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath2(arg);
          if (arg.length > 0) {
            if (joined === void 0)
              joined = arg;
            else
              joined += "/" + arg;
          }
        }
        if (joined === void 0)
          return ".";
        return posix.normalize(joined);
      },
      relative: function relative3(from5, to) {
        assertPath2(from5);
        assertPath2(to);
        if (from5 === to)
          return "";
        from5 = posix.resolve(from5);
        to = posix.resolve(to);
        if (from5 === to)
          return "";
        var fromStart = 1;
        for (; fromStart < from5.length; ++fromStart) {
          if (from5.charCodeAt(fromStart) !== 47)
            break;
        }
        var fromEnd = from5.length;
        var fromLen = fromEnd - fromStart;
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        var length2 = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length2; ++i) {
          if (i === length2) {
            if (toLen > length2) {
              if (to.charCodeAt(toStart + i) === 47) {
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                return to.slice(toStart + i);
              }
            } else if (fromLen > length2) {
              if (from5.charCodeAt(fromStart + i) === 47) {
                lastCommonSep = i;
              } else if (i === 0) {
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from5.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47)
            lastCommonSep = i;
        }
        var out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from5.charCodeAt(i) === 47) {
            if (out.length === 0)
              out += "..";
            else
              out += "/..";
          }
        }
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47)
            ++toStart;
          return to.slice(toStart);
        }
      },
      _makeLong: function _makeLong(path2) {
        return path2;
      },
      dirname: function dirname3(path2) {
        assertPath2(path2);
        if (path2.length === 0)
          return ".";
        var code = path2.charCodeAt(0);
        var hasRoot = code === 47;
        var end = -1;
        var matchedSlash = true;
        for (var i = path2.length - 1; i >= 1; --i) {
          code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1)
          return hasRoot ? "/" : ".";
        if (hasRoot && end === 1)
          return "//";
        return path2.slice(0, end);
      },
      basename: function basename5(path2, ext) {
        if (ext !== void 0 && typeof ext !== "string")
          throw new TypeError('"ext" argument must be a string');
        assertPath2(path2);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
          if (ext.length === path2.length && ext === path2)
            return "";
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path2.length - 1; i >= 0; --i) {
            var code = path2.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end)
            end = firstNonSlashEnd;
          else if (end === -1)
            end = path2.length;
          return path2.slice(start, end);
        } else {
          for (i = path2.length - 1; i >= 0; --i) {
            if (path2.charCodeAt(i) === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
          }
          if (end === -1)
            return "";
          return path2.slice(start, end);
        }
      },
      extname: function extname3(path2) {
        assertPath2(path2);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var preDotState = 0;
        for (var i = path2.length - 1; i >= 0; --i) {
          var code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path2.slice(startDot, end);
      },
      format: function format4(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format2("/", pathObject);
      },
      parse: function parse3(path2) {
        assertPath2(path2);
        var ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path2.length === 0)
          return ret;
        var code = path2.charCodeAt(0);
        var isAbsolute3 = code === 47;
        var start;
        if (isAbsolute3) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path2.length - 1;
        var preDotState = 0;
        for (; i >= start; --i) {
          code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute3)
              ret.base = ret.name = path2.slice(1, end);
            else
              ret.base = ret.name = path2.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute3) {
            ret.name = path2.slice(1, startDot);
            ret.base = path2.slice(1, end);
          } else {
            ret.name = path2.slice(startPart, startDot);
            ret.base = path2.slice(startPart, end);
          }
          ret.ext = path2.slice(startDot, end);
        }
        if (startPart > 0)
          ret.dir = path2.slice(0, startPart - 1);
        else if (isAbsolute3)
          ret.dir = "/";
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    posix.posix = posix;
    module.exports = posix;
  }
});

// ../../node/fs/lib/esm/fs-watcher.js
var init_fs_watcher = __esm({
  "../../node/fs/lib/esm/fs-watcher.js"() {
    init_Gio_2_0();
    init_esm4();
  }
});

// ../../node/fs/lib/esm/encoding.js
function getEncodingFromOptions(options = { encoding: null, flag: "r" }, defaultEncoding = "utf8") {
  if (options === null) {
    return defaultEncoding;
  }
  if (typeof options === "string") {
    return options;
  }
  if (typeof options === "object" && typeof options.encoding === "string") {
    return options.encoding;
  }
  return defaultEncoding;
}
function encodeUint8Array(encoding, data) {
  if (encoding === "buffer") {
    return Buffer.from(data);
  }
  const decoder = new TextDecoder(encoding);
  return decoder.decode(data);
}
var init_encoding = __esm({
  "../../node/fs/lib/esm/encoding.js"() {
  }
});

// ../../node/fs/lib/esm/read-stream.js
function fromFileUrl(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
var ReadStream2;
var init_read_stream = __esm({
  "../../node/fs/lib/esm/read-stream.js"() {
    init_GLib_2_0();
    init_lib();
    init_esm2();
    init_esm6();
    ReadStream2 = class extends Readable3 {
      constructor(path2, opts) {
        path2 = path2 instanceof URL ? fromFileUrl(path2) : path2;
        const hasBadOptions = opts && (opts.start || opts.end);
        if (hasBadOptions) {
          notImplemented(
            `fs.ReadStream.prototype.constructor with unsupported options (${JSON.stringify(opts)})`
          );
        }
        const file = GLib_2_0_default.IOChannel.new_file(path2.toString(), "r");
        const buffer = "";
        super({
          autoDestroy: true,
          emitClose: true,
          objectMode: false,
          read: async function(_size) {
            try {
              let n = 0;
              file.read(buffer, 16 * 1024, n);
              this.push(n ? Buffer2.from(buffer.slice(0, n)) : null);
            } catch (err) {
              this.destroy(err);
            }
          },
          destroy: (err, cb) => {
            try {
              file.close();
            } catch {
            }
            cb(err);
          }
        });
        this.path = path2.toString();
      }
      close(callback) {
        callback(notImplemented("ReadStream.close"));
      }
    };
  }
});

// ../../node/url/lib/esm/url.deno.js
function hideStackFrames3(fn) {
  const hidden = "__node_internal_" + fn.name;
  Object.defineProperty(fn, "name", {
    value: hidden
  });
  return fn;
}
function isAnyArrayBuffer5(value) {
  return _isObjectLike3(value) && (_toString3.call(value) === "[object ArrayBuffer]" || _toString3.call(value) === "[object SharedArrayBuffer]");
}
function isArgumentsObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Arguments]";
}
function isArrayBuffer5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object ArrayBuffer]";
}
function isAsyncFunction6(value) {
  return _isFunctionLike3(value) && _toString3.call(value) === "[object AsyncFunction]";
}
function isBooleanObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Boolean]";
}
function isBoxedPrimitive5(value) {
  return isBooleanObject5(value) || isStringObject5(value) || isNumberObject5(value) || isSymbolObject5(value) || isBigIntObject5(value);
}
function isDataView5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object DataView]";
}
function isDate5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Date]";
}
function isGeneratorFunction5(value) {
  return _isFunctionLike3(value) && _toString3.call(value) === "[object GeneratorFunction]";
}
function isGeneratorObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Generator]";
}
function isMap5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Map]";
}
function isMapIterator5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Map Iterator]";
}
function isModuleNamespaceObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Module]";
}
function isNativeError5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Error]";
}
function isNumberObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Number]";
}
function isBigIntObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object BigInt]";
}
function isPromise6(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Promise]";
}
function isRegExp6(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object RegExp]";
}
function isSet5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Set]";
}
function isSetIterator5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Set Iterator]";
}
function isSharedArrayBuffer5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object SharedArrayBuffer]";
}
function isStringObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object String]";
}
function isSymbolObject5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object Symbol]";
}
function isWeakMap5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object WeakMap]";
}
function isWeakSet5(value) {
  return _isObjectLike3(value) && _toString3.call(value) === "[object WeakSet]";
}
function isKeyObject2(obj) {
  return obj != null && obj[kKeyType2] !== void 0;
}
function isCryptoKey2(obj) {
  return obj != null && obj[kKeyObject2] !== void 0;
}
function isArrayBufferView5(value) {
  return ArrayBuffer.isView(value);
}
function isBigInt64Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "BigInt64Array";
}
function isBigUint64Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "BigUint64Array";
}
function isFloat32Array3(value) {
  return _getTypedArrayToStringTag3.call(value) === "Float32Array";
}
function isFloat64Array3(value) {
  return _getTypedArrayToStringTag3.call(value) === "Float64Array";
}
function isInt8Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "Int8Array";
}
function isInt16Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "Int16Array";
}
function isInt32Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "Int32Array";
}
function isTypedArray3(value) {
  return _getTypedArrayToStringTag3.call(value) !== void 0;
}
function isUint8Array4(value) {
  return _getTypedArrayToStringTag3.call(value) === "Uint8Array";
}
function isUint8ClampedArray2(value) {
  return _getTypedArrayToStringTag3.call(value) === "Uint8ClampedArray";
}
function isUint16Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "Uint16Array";
}
function isUint32Array2(value) {
  return _getTypedArrayToStringTag3.call(value) === "Uint32Array";
}
function normalizeEncoding3(enc) {
  if (enc == null || enc === "utf8" || enc === "utf-8")
    return "utf8";
  return slowCases3(enc);
}
function slowCases3(enc) {
  switch (enc.length) {
    case 4:
      if (enc === "UTF8")
        return "utf8";
      if (enc === "ucs2" || enc === "UCS2")
        return "utf16le";
      enc = `${enc}`.toLowerCase();
      if (enc === "utf8")
        return "utf8";
      if (enc === "ucs2")
        return "utf16le";
      break;
    case 3:
      if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
        return "hex";
      }
      break;
    case 5:
      if (enc === "ascii")
        return "ascii";
      if (enc === "ucs-2")
        return "utf16le";
      if (enc === "UTF-8")
        return "utf8";
      if (enc === "ASCII")
        return "ascii";
      if (enc === "UCS-2")
        return "utf16le";
      enc = `${enc}`.toLowerCase();
      if (enc === "utf-8")
        return "utf8";
      if (enc === "ascii")
        return "ascii";
      if (enc === "ucs-2")
        return "utf16le";
      break;
    case 6:
      if (enc === "base64")
        return "base64";
      if (enc === "latin1" || enc === "binary")
        return "latin1";
      if (enc === "BASE64")
        return "base64";
      if (enc === "LATIN1" || enc === "BINARY")
        return "latin1";
      enc = `${enc}`.toLowerCase();
      if (enc === "base64")
        return "base64";
      if (enc === "latin1" || enc === "binary")
        return "latin1";
      break;
    case 7:
      if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
        return "utf16le";
      }
      break;
    case 8:
      if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
        return "utf16le";
      }
      break;
    case 9:
      if (enc === "base64url" || enc === "BASE64URL" || `${enc}`.toLowerCase() === "base64url") {
        return "base64url";
      }
      break;
    default:
      if (enc === "")
        return "utf8";
  }
}
function isInt323(value) {
  return value === (value | 0);
}
function isUint323(value) {
  return value === value >>> 0;
}
function validateString2(value, name) {
  if (typeof value !== "string") {
    throw new codes4.ERR_INVALID_ARG_TYPE(name, "string", value);
  }
}
function promisify6(original) {
  validateFunction4(original, "original");
  if (original[kCustomPromisifiedSymbol4]) {
    const fn = original[kCustomPromisifiedSymbol4];
    validateFunction4(fn, "util.promisify.custom");
    return Object.defineProperty(fn, kCustomPromisifiedSymbol4, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  const argumentNames = original[kCustomPromisifyArgsSymbol3];
  function fn1(...args) {
    return new Promise((resolve4, reject) => {
      args.push((err, ...values) => {
        if (err) {
          return reject(err);
        }
        if (argumentNames !== void 0 && values.length > 1) {
          const obj = {};
          for (let i = 0; i < argumentNames.length; i++) {
            obj[argumentNames[i]] = values[i];
          }
          resolve4(obj);
        } else {
          resolve4(values[0]);
        }
      });
      Reflect.apply(original, this, args);
    });
  }
  Object.setPrototypeOf(fn1, Object.getPrototypeOf(original));
  Object.defineProperty(fn1, kCustomPromisifiedSymbol4, {
    value: fn1,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn1, Object.getOwnPropertyDescriptors(original));
}
function processTicksAndRejections() {
  let tock;
  do {
    while (tock = queue.shift()) {
      try {
        const callback = tock.callback;
        if (tock.args === void 0) {
          callback();
        } else {
          const args = tock.args;
          switch (args.length) {
            case 1:
              callback(args[0]);
              break;
            case 2:
              callback(args[0], args[1]);
              break;
            case 3:
              callback(args[0], args[1], args[2]);
              break;
            case 4:
              callback(args[0], args[1], args[2], args[3]);
              break;
            default:
              callback(...args);
          }
        }
      } finally {
      }
    }
    core.runMicrotasks();
  } while (!queue.isEmpty());
  core.setHasTickScheduled(false);
}
function deferred() {
  let methods;
  let state = "pending";
  const promise = new Promise((resolve4, reject) => {
    methods = {
      async resolve(value) {
        await value;
        state = "fulfilled";
        resolve4(value);
      },
      reject(reason) {
        state = "rejected";
        reject(reason);
      }
    };
  });
  Object.defineProperty(promise, "state", {
    get: () => state
  });
  return Object.assign(promise, methods);
}
function unreachable2() {
  throw new AssertionError2("unreachable");
}
function assert3(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError(msg);
  }
}
function indexOfNeedle2(source, needle, start = 0) {
  if (start >= source.length) {
    return -1;
  }
  if (start < 0) {
    start = Math.max(0, source.length + start);
  }
  const s = needle[0];
  for (let i = start; i < source.length; i++) {
    if (source[i] !== s)
      continue;
    const pin = i;
    let matched = 1;
    let j = i;
    while (matched < needle.length) {
      j++;
      if (source[j] !== needle[j - pin]) {
        break;
      }
      matched++;
    }
    if (matched === needle.length) {
      return pin;
    }
  }
  return -1;
}
function isArrayIndex2(value) {
  switch (typeof value) {
    case "number":
      return value >= 0 && (value | 0) === value;
    case "string": {
      const result = isNumericLookup2[value];
      if (result !== void 0) {
        return result;
      }
      const length2 = value.length;
      if (length2 === 0) {
        return isNumericLookup2[value] = false;
      }
      let ch = 0;
      let i = 0;
      for (; i < length2; ++i) {
        ch = value.charCodeAt(i);
        if (i === 0 && ch === 48 && length2 > 1 || ch < 48 || ch > 57) {
          return isNumericLookup2[value] = false;
        }
      }
      return isNumericLookup2[value] = true;
    }
    default:
      return false;
  }
}
function getOwnNonIndexProperties2(obj, filter2) {
  let allProperties = [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj)
  ];
  if (Array.isArray(obj)) {
    allProperties = allProperties.filter((k) => !isArrayIndex2(k));
  }
  if (filter2 === 0) {
    return allProperties;
  }
  const result = [];
  for (const key of allProperties) {
    const desc = Object.getOwnPropertyDescriptor(obj, key);
    if (desc === void 0) {
      continue;
    }
    if (filter2 & 1 && !desc.writable) {
      continue;
    }
    if (filter2 & 2 && !desc.enumerable) {
      continue;
    }
    if (filter2 & 4 && !desc.configurable) {
      continue;
    }
    if (filter2 & 8 && typeof key === "string") {
      continue;
    }
    if (filter2 & 16 && typeof key === "symbol") {
      continue;
    }
    result.push(key);
  }
  return result;
}
function getUserOptions(ctx, isCrossContext) {
  const ret = {
    stylize: ctx.stylize,
    showHidden: ctx.showHidden,
    depth: ctx.depth,
    colors: ctx.colors,
    customInspect: ctx.customInspect,
    showProxy: ctx.showProxy,
    maxArrayLength: ctx.maxArrayLength,
    maxStringLength: ctx.maxStringLength,
    breakLength: ctx.breakLength,
    compact: ctx.compact,
    sorted: ctx.sorted,
    getters: ctx.getters,
    ...ctx.userOptions
  };
  if (isCrossContext) {
    Object.setPrototypeOf(ret, null);
    for (const key of Object.keys(ret)) {
      if ((typeof ret[key] === "object" || typeof ret[key] === "function") && ret[key] !== null) {
        delete ret[key];
      }
    }
    ret.stylize = Object.setPrototypeOf((value, flavour) => {
      let stylized;
      try {
        stylized = `${ctx.stylize(value, flavour)}`;
      } catch {
      }
      if (typeof stylized !== "string")
        return value;
      return stylized;
    }, null);
  }
  return ret;
}
function inspect4(value, opts) {
  const ctx = {
    budget: {},
    indentationLvl: 0,
    seen: [],
    currentDepth: 0,
    stylize: stylizeNoColor2,
    showHidden: inspectDefaultOptions2.showHidden,
    depth: inspectDefaultOptions2.depth,
    colors: inspectDefaultOptions2.colors,
    customInspect: inspectDefaultOptions2.customInspect,
    showProxy: inspectDefaultOptions2.showProxy,
    maxArrayLength: inspectDefaultOptions2.maxArrayLength,
    maxStringLength: inspectDefaultOptions2.maxStringLength,
    breakLength: inspectDefaultOptions2.breakLength,
    compact: inspectDefaultOptions2.compact,
    sorted: inspectDefaultOptions2.sorted,
    getters: inspectDefaultOptions2.getters
  };
  if (arguments.length > 1) {
    if (arguments.length > 2) {
      if (arguments[2] !== void 0) {
        ctx.depth = arguments[2];
      }
      if (arguments.length > 3 && arguments[3] !== void 0) {
        ctx.colors = arguments[3];
      }
    }
    if (typeof opts === "boolean") {
      ctx.showHidden = opts;
    } else if (opts) {
      const optKeys = Object.keys(opts);
      for (let i = 0; i < optKeys.length; ++i) {
        const key = optKeys[i];
        if (inspectDefaultOptions2.hasOwnProperty(key) || key === "stylize") {
          ctx[key] = opts[key];
        } else if (ctx.userOptions === void 0) {
          ctx.userOptions = opts;
        }
      }
    }
  }
  if (ctx.colors)
    ctx.stylize = stylizeWithColor2;
  if (ctx.maxArrayLength === null)
    ctx.maxArrayLength = Infinity;
  if (ctx.maxStringLength === null)
    ctx.maxStringLength = Infinity;
  return formatValue2(ctx, value, 0);
}
function defineColorAlias(target2, alias) {
  Object.defineProperty(inspect4.colors, alias, {
    get() {
      return this[target2];
    },
    set(value) {
      this[target2] = value;
    },
    configurable: true,
    enumerable: false
  });
}
function addQuotes(str, quotes) {
  if (quotes === -1) {
    return `"${str}"`;
  }
  if (quotes === -2) {
    return `\`${str}\``;
  }
  return `'${str}'`;
}
function strEscape(str) {
  let escapeTest = strEscapeSequencesRegExp;
  let escapeReplace = strEscapeSequencesReplacer;
  let singleQuote = 39;
  if (str.includes("'")) {
    if (!str.includes('"')) {
      singleQuote = -1;
    } else if (!str.includes("`") && !str.includes("${")) {
      singleQuote = -2;
    }
    if (singleQuote !== 39) {
      escapeTest = strEscapeSequencesRegExpSingle;
      escapeReplace = strEscapeSequencesReplacerSingle;
    }
  }
  if (str.length < 5e3 && !escapeTest.test(str)) {
    return addQuotes(str, singleQuote);
  }
  if (str.length > 100) {
    str = str.replace(escapeReplace, escapeFn);
    return addQuotes(str, singleQuote);
  }
  let result = "";
  let last = 0;
  const lastIndex = str.length;
  for (let i = 0; i < lastIndex; i++) {
    const point = str.charCodeAt(i);
    if (point === singleQuote || point === 92 || point < 32 || point > 126 && point < 160) {
      if (last === i) {
        result += meta[point];
      } else {
        result += `${str.slice(last, i)}${meta[point]}`;
      }
      last = i + 1;
    }
  }
  if (last !== lastIndex) {
    result += str.slice(last);
  }
  return addQuotes(result, singleQuote);
}
function stylizeWithColor2(str, styleType) {
  const style = inspect4.styles[styleType];
  if (style !== void 0) {
    const color = inspect4.colors[style];
    if (color !== void 0) {
      return `\x1B[${color[0]}m${str}\x1B[${color[1]}m`;
    }
  }
  return str;
}
function stylizeNoColor2(str) {
  return str;
}
function formatValue2(ctx, value, recurseTimes, typedArray) {
  if (typeof value !== "object" && typeof value !== "function" && !isUndetectableObject(value)) {
    return formatPrimitive2(ctx.stylize, value, ctx);
  }
  if (value === null) {
    return ctx.stylize("null", "null");
  }
  const context = value;
  const proxy = void 0;
  if (ctx.customInspect) {
    const maybeCustom = value[customInspectSymbol3];
    if (typeof maybeCustom === "function" && maybeCustom !== inspect4 && !(value.constructor && value.constructor.prototype === value)) {
      const depth = ctx.depth === null ? null : ctx.depth - recurseTimes;
      const isCrossContext = proxy !== void 0 || !(context instanceof Object);
      const ret = maybeCustom.call(context, depth, getUserOptions(ctx, isCrossContext));
      if (ret !== context) {
        if (typeof ret !== "string") {
          return formatValue2(ctx, ret, recurseTimes);
        }
        return ret.replace(/\n/g, `
${" ".repeat(ctx.indentationLvl)}`);
      }
    }
  }
  if (ctx.seen.includes(value)) {
    let index = 1;
    if (ctx.circular === void 0) {
      ctx.circular = /* @__PURE__ */ new Map();
      ctx.circular.set(value, index);
    } else {
      index = ctx.circular.get(value);
      if (index === void 0) {
        index = ctx.circular.size + 1;
        ctx.circular.set(value, index);
      }
    }
    return ctx.stylize(`[Circular *${index}]`, "special");
  }
  return formatRaw(ctx, value, recurseTimes, typedArray);
}
function formatRaw(ctx, value, recurseTimes, typedArray) {
  let keys3;
  let protoProps;
  if (ctx.showHidden && (recurseTimes <= ctx.depth || ctx.depth === null)) {
    protoProps = [];
  }
  const constructor = getConstructorName(value, ctx, recurseTimes, protoProps);
  if (protoProps !== void 0 && protoProps.length === 0) {
    protoProps = void 0;
  }
  let tag = value[Symbol.toStringTag];
  if (typeof tag !== "string") {
    tag = "";
  }
  let base2 = "";
  let formatter = getEmptyFormatArray;
  let braces;
  let noIterator = true;
  let i = 0;
  const filter2 = ctx.showHidden ? 0 : 2;
  let extrasType = 0;
  if (value[Symbol.iterator] || constructor === null) {
    noIterator = false;
    if (Array.isArray(value)) {
      const prefix = constructor !== "Array" || tag !== "" ? getPrefix(constructor, tag, "Array", `(${value.length})`) : "";
      keys3 = getOwnNonIndexProperties2(value, filter2);
      braces = [
        `${prefix}[`,
        "]"
      ];
      if (value.length === 0 && keys3.length === 0 && protoProps === void 0) {
        return `${braces[0]}]`;
      }
      extrasType = kArrayExtrasType;
      formatter = formatArray2;
    } else if (isSet12(value)) {
      const size = value.size;
      const prefix1 = getPrefix(constructor, tag, "Set", `(${size})`);
      keys3 = getKeys(value, ctx.showHidden);
      formatter = constructor !== null ? formatSet.bind(null, value) : formatSet.bind(null, value.values());
      if (size === 0 && keys3.length === 0 && protoProps === void 0) {
        return `${prefix1}{}`;
      }
      braces = [
        `${prefix1}{`,
        "}"
      ];
    } else if (isMap12(value)) {
      const size1 = value.size;
      const prefix2 = getPrefix(constructor, tag, "Map", `(${size1})`);
      keys3 = getKeys(value, ctx.showHidden);
      formatter = constructor !== null ? formatMap.bind(null, value) : formatMap.bind(null, value.entries());
      if (size1 === 0 && keys3.length === 0 && protoProps === void 0) {
        return `${prefix2}{}`;
      }
      braces = [
        `${prefix2}{`,
        "}"
      ];
    } else if (isTypedArray3(value)) {
      keys3 = getOwnNonIndexProperties2(value, filter2);
      const bound = value;
      const fallback = "";
      if (constructor === null) {
      }
      const size2 = value.length;
      const prefix3 = getPrefix(constructor, tag, fallback, `(${size2})`);
      braces = [
        `${prefix3}[`,
        "]"
      ];
      if (value.length === 0 && keys3.length === 0 && !ctx.showHidden) {
        return `${braces[0]}]`;
      }
      formatter = formatTypedArray.bind(null, bound, size2);
      extrasType = kArrayExtrasType;
    } else if (isMapIterator12(value)) {
      keys3 = getKeys(value, ctx.showHidden);
      braces = getIteratorBraces("Map", tag);
      formatter = formatIterator.bind(null, braces);
    } else if (isSetIterator12(value)) {
      keys3 = getKeys(value, ctx.showHidden);
      braces = getIteratorBraces("Set", tag);
      formatter = formatIterator.bind(null, braces);
    } else {
      noIterator = true;
    }
  }
  if (noIterator) {
    keys3 = getKeys(value, ctx.showHidden);
    braces = [
      "{",
      "}"
    ];
    if (constructor === "Object") {
      if (isArgumentsObject12(value)) {
        braces[0] = "[Arguments] {";
      } else if (tag !== "") {
        braces[0] = `${getPrefix(constructor, tag, "Object")}{`;
      }
      if (keys3.length === 0 && protoProps === void 0) {
        return `${braces[0]}}`;
      }
    } else if (typeof value === "function") {
      base2 = getFunctionBase(value, constructor, tag);
      if (keys3.length === 0 && protoProps === void 0) {
        return ctx.stylize(base2, "special");
      }
    } else if (isRegExp12(value)) {
      base2 = RegExp(constructor !== null ? value : new RegExp(value)).toString();
      const prefix4 = getPrefix(constructor, tag, "RegExp");
      if (prefix4 !== "RegExp ") {
        base2 = `${prefix4}${base2}`;
      }
      if (keys3.length === 0 && protoProps === void 0 || recurseTimes > ctx.depth && ctx.depth !== null) {
        return ctx.stylize(base2, "regexp");
      }
    } else if (isDate12(value)) {
      base2 = Number.isNaN(value.getTime()) ? value.toString() : value.toISOString();
      const prefix5 = getPrefix(constructor, tag, "Date");
      if (prefix5 !== "Date ") {
        base2 = `${prefix5}${base2}`;
      }
      if (keys3.length === 0 && protoProps === void 0) {
        return ctx.stylize(base2, "date");
      }
    } else if (value instanceof Error) {
      base2 = formatError2(value, constructor, tag, ctx, keys3);
      if (keys3.length === 0 && protoProps === void 0) {
        return base2;
      }
    } else if (isAnyArrayBuffer12(value)) {
      const arrayType = isArrayBuffer12(value) ? "ArrayBuffer" : "SharedArrayBuffer";
      const prefix6 = getPrefix(constructor, tag, arrayType);
      if (typedArray === void 0) {
        formatter = formatArrayBuffer;
      } else if (keys3.length === 0 && protoProps === void 0) {
        return prefix6 + `{ byteLength: ${formatNumber(ctx.stylize, value.byteLength)} }`;
      }
      braces[0] = `${prefix6}{`;
      Array.prototype.unshift.call(keys3, "byteLength");
    } else if (isDataView12(value)) {
      braces[0] = `${getPrefix(constructor, tag, "DataView")}{`;
      Array.prototype.unshift.call(keys3, "byteLength", "byteOffset", "buffer");
    } else if (isPromise12(value)) {
      braces[0] = `${getPrefix(constructor, tag, "Promise")}{`;
      formatter = formatPromise;
    } else if (isWeakSet12(value)) {
      braces[0] = `${getPrefix(constructor, tag, "WeakSet")}{`;
      formatter = ctx.showHidden ? formatWeakSet : formatWeakCollection;
    } else if (isWeakMap12(value)) {
      braces[0] = `${getPrefix(constructor, tag, "WeakMap")}{`;
      formatter = ctx.showHidden ? formatWeakMap : formatWeakCollection;
    } else if (isModuleNamespaceObject12(value)) {
      braces[0] = `${getPrefix(constructor, tag, "Module")}{`;
      formatter = formatNamespaceObject.bind(null, keys3);
    } else if (isBoxedPrimitive12(value)) {
      base2 = getBoxedBase(value, ctx, keys3, constructor, tag);
      if (keys3.length === 0 && protoProps === void 0) {
        return base2;
      }
    } else {
      if (keys3.length === 0 && protoProps === void 0) {
        return `${getCtxStyle(value, constructor, tag)}{}`;
      }
      braces[0] = `${getCtxStyle(value, constructor, tag)}{`;
    }
  }
  if (recurseTimes > ctx.depth && ctx.depth !== null) {
    let constructorName = getCtxStyle(value, constructor, tag).slice(0, -1);
    if (constructor !== null) {
      constructorName = `[${constructorName}]`;
    }
    return ctx.stylize(constructorName, "special");
  }
  recurseTimes += 1;
  ctx.seen.push(value);
  ctx.currentDepth = recurseTimes;
  let output;
  const indentationLvl = ctx.indentationLvl;
  try {
    output = formatter(ctx, value, recurseTimes);
    for (i = 0; i < keys3.length; i++) {
      output.push(formatProperty2(ctx, value, recurseTimes, keys3[i], extrasType));
    }
    if (protoProps !== void 0) {
      output.push(...protoProps);
    }
  } catch (err) {
    const constructorName1 = getCtxStyle(value, constructor, tag).slice(0, -1);
    return handleMaxCallStackSize(ctx, err, constructorName1, indentationLvl);
  }
  if (ctx.circular !== void 0) {
    const index = ctx.circular.get(value);
    if (index !== void 0) {
      const reference = ctx.stylize(`<ref *${index}>`, "special");
      if (ctx.compact !== true) {
        base2 = base2 === "" ? reference : `${reference} ${base2}`;
      } else {
        braces[0] = `${reference} ${braces[0]}`;
      }
    }
  }
  ctx.seen.pop();
  if (ctx.sorted) {
    const comparator = ctx.sorted === true ? void 0 : ctx.sorted;
    if (extrasType === 0) {
      output = output.sort(comparator);
    } else if (keys3.length > 1) {
      const sorted = output.slice(output.length - keys3.length).sort(comparator);
      output.splice(output.length - keys3.length, keys3.length, ...sorted);
    }
  }
  const res = reduceToSingleString2(ctx, output, base2, braces, extrasType, recurseTimes, value);
  const budget = ctx.budget[ctx.indentationLvl] || 0;
  const newLength = budget + res.length;
  ctx.budget[ctx.indentationLvl] = newLength;
  if (newLength > 2 ** 27) {
    ctx.depth = -1;
  }
  return res;
}
function addPrototypeProperties(ctx, main, obj, recurseTimes, output) {
  let depth = 0;
  let keys3;
  let keySet;
  do {
    if (depth !== 0 || main === obj) {
      obj = Object.getPrototypeOf(obj);
      if (obj === null) {
        return;
      }
      const descriptor = Object.getOwnPropertyDescriptor(obj, "constructor");
      if (descriptor !== void 0 && typeof descriptor.value === "function" && builtInObjects.has(descriptor.value.name)) {
        return;
      }
    }
    if (depth === 0) {
      keySet = /* @__PURE__ */ new Set();
    } else {
      Array.prototype.forEach.call(keys3, (key) => keySet.add(key));
    }
    keys3 = Reflect.ownKeys(obj);
    Array.prototype.push.call(ctx.seen, main);
    for (const key of keys3) {
      if (key === "constructor" || main.hasOwnProperty(key) || depth !== 0 && keySet.has(key)) {
        continue;
      }
      const desc = Object.getOwnPropertyDescriptor(obj, key);
      if (typeof desc.value === "function") {
        continue;
      }
      const value = formatProperty2(ctx, obj, recurseTimes, key, 0, desc, main);
      if (ctx.colors) {
        Array.prototype.push.call(output, `\x1B[2m${value}\x1B[22m`);
      } else {
        Array.prototype.push.call(output, value);
      }
    }
    Array.prototype.pop.call(ctx.seen);
  } while (++depth !== 3);
}
function getConstructorName(obj, ctx, recurseTimes, protoProps) {
  let firstProto;
  const tmp = obj;
  while (obj || isUndetectableObject(obj)) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, "constructor");
    if (descriptor !== void 0 && typeof descriptor.value === "function" && descriptor.value.name !== "" && isInstanceof(tmp, descriptor.value)) {
      if (protoProps !== void 0 && (firstProto !== obj || !builtInObjects.has(descriptor.value.name))) {
        addPrototypeProperties(ctx, tmp, firstProto || tmp, recurseTimes, protoProps);
      }
      return descriptor.value.name;
    }
    obj = Object.getPrototypeOf(obj);
    if (firstProto === void 0) {
      firstProto = obj;
    }
  }
  if (firstProto === null) {
    return null;
  }
  const res = void 0;
  if (recurseTimes > ctx.depth && ctx.depth !== null) {
    return `${res} <Complex prototype>`;
  }
  const protoConstr = getConstructorName(firstProto, ctx, recurseTimes + 1, protoProps);
  if (protoConstr === null) {
    return `${res} <${inspect4(firstProto, {
      ...ctx,
      customInspect: false,
      depth: -1
    })}>`;
  }
  return `${res} <${protoConstr}>`;
}
function formatPrimitive2(fn, value, ctx) {
  if (typeof value === "string") {
    let trailer = "";
    if (value.length > ctx.maxStringLength) {
      const remaining = value.length - ctx.maxStringLength;
      value = value.slice(0, ctx.maxStringLength);
      trailer = `... ${remaining} more character${remaining > 1 ? "s" : ""}`;
    }
    if (ctx.compact !== true && value.length > 16 && value.length > ctx.breakLength - ctx.indentationLvl - 4) {
      return value.split(/(?<=\n)/).map((line) => fn(strEscape(line), "string")).join(` +
${" ".repeat(ctx.indentationLvl + 2)}`) + trailer;
    }
    return fn(strEscape(value), "string") + trailer;
  }
  if (typeof value === "number") {
    return formatNumber(fn, value);
  }
  if (typeof value === "bigint") {
    return formatBigInt(fn, value);
  }
  if (typeof value === "boolean") {
    return fn(`${value}`, "boolean");
  }
  if (typeof value === "undefined") {
    return fn("undefined", "undefined");
  }
  return fn(value.toString(), "symbol");
}
function getEmptyFormatArray() {
  return [];
}
function isInstanceof(object, proto) {
  try {
    return object instanceof proto;
  } catch {
    return false;
  }
}
function getPrefix(constructor, tag, fallback, size = "") {
  if (constructor === null) {
    if (tag !== "" && fallback !== tag) {
      return `[${fallback}${size}: null prototype] [${tag}] `;
    }
    return `[${fallback}${size}: null prototype] `;
  }
  if (tag !== "" && constructor !== tag) {
    return `${constructor}${size} [${tag}] `;
  }
  return `${constructor}${size} `;
}
function formatArray2(ctx, value, recurseTimes) {
  const valLen = value.length;
  const len = Math.min(Math.max(0, ctx.maxArrayLength), valLen);
  const remaining = valLen - len;
  const output = [];
  for (let i = 0; i < len; i++) {
    if (!value.hasOwnProperty(i)) {
      return formatSpecialArray(ctx, value, recurseTimes, len, output, i);
    }
    output.push(formatProperty2(ctx, value, recurseTimes, i, 1));
  }
  if (remaining > 0) {
    output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`);
  }
  return output;
}
function getCtxStyle(_value, constructor, tag) {
  let fallback = "";
  if (constructor === null) {
    if (fallback === tag) {
      fallback = "Object";
    }
  }
  return getPrefix(constructor, tag, fallback);
}
function getKeys(value, showHidden) {
  let keys3;
  const symbols = Object.getOwnPropertySymbols(value);
  if (showHidden) {
    keys3 = Object.getOwnPropertyNames(value);
    if (symbols.length !== 0) {
      Array.prototype.push.apply(keys3, symbols);
    }
  } else {
    try {
      keys3 = Object.keys(value);
    } catch (_err) {
      keys3 = Object.getOwnPropertyNames(value);
    }
    if (symbols.length !== 0) {
    }
  }
  return keys3;
}
function formatSet(value, ctx, _ignored, recurseTimes) {
  const output = [];
  ctx.indentationLvl += 2;
  for (const v of value) {
    Array.prototype.push.call(output, formatValue2(ctx, v, recurseTimes));
  }
  ctx.indentationLvl -= 2;
  return output;
}
function formatMap(value, ctx, _gnored, recurseTimes) {
  const output = [];
  ctx.indentationLvl += 2;
  for (const { 0: k, 1: v } of value) {
    output.push(`${formatValue2(ctx, k, recurseTimes)} => ${formatValue2(ctx, v, recurseTimes)}`);
  }
  ctx.indentationLvl -= 2;
  return output;
}
function formatTypedArray(value, length2, ctx, _ignored, recurseTimes) {
  const maxLength = Math.min(Math.max(0, ctx.maxArrayLength), length2);
  const remaining = value.length - maxLength;
  const output = new Array(maxLength);
  const elementFormatter = value.length > 0 && typeof value[0] === "number" ? formatNumber : formatBigInt;
  for (let i = 0; i < maxLength; ++i) {
    output[i] = elementFormatter(ctx.stylize, value[i]);
  }
  if (remaining > 0) {
    output[maxLength] = `... ${remaining} more item${remaining > 1 ? "s" : ""}`;
  }
  if (ctx.showHidden) {
    ctx.indentationLvl += 2;
    for (const key of [
      "BYTES_PER_ELEMENT",
      "length",
      "byteLength",
      "byteOffset",
      "buffer"
    ]) {
      const str = formatValue2(ctx, value[key], recurseTimes, true);
      Array.prototype.push.call(output, `[${key}]: ${str}`);
    }
    ctx.indentationLvl -= 2;
  }
  return output;
}
function getIteratorBraces(type, tag) {
  if (tag !== `${type} Iterator`) {
    if (tag !== "") {
      tag += "] [";
    }
    tag += `${type} Iterator`;
  }
  return [
    `[${tag}] {`,
    "}"
  ];
}
function formatIterator(braces, ctx, value, recurseTimes) {
  const { 0: entries, 1: isKeyValue } = value;
  if (isKeyValue) {
    braces[0] = braces[0].replace(/ Iterator] {$/, " Entries] {");
    return formatMapIterInner(ctx, recurseTimes, entries, 2);
  }
  return formatSetIterInner(ctx, recurseTimes, entries, 1);
}
function getFunctionBase(value, constructor, tag) {
  const stringified = Function.prototype.toString.call(value);
  if (stringified.slice(0, 5) === "class" && stringified.endsWith("}")) {
    const slice22 = stringified.slice(5, -1);
    const bracketIndex = slice22.indexOf("{");
    if (bracketIndex !== -1 && (!slice22.slice(0, bracketIndex).includes("(") || classRegExp3.test(slice22.replace(stripCommentsRegExp)))) {
      return getClassBase(value, constructor, tag);
    }
  }
  let type = "Function";
  if (isGeneratorFunction12(value)) {
    type = `Generator${type}`;
  }
  if (isAsyncFunction12(value)) {
    type = `Async${type}`;
  }
  let base2 = `[${type}`;
  if (constructor === null) {
    base2 += " (null prototype)";
  }
  if (value.name === "") {
    base2 += " (anonymous)";
  } else {
    base2 += `: ${value.name}`;
  }
  base2 += "]";
  if (constructor !== type && constructor !== null) {
    base2 += ` ${constructor}`;
  }
  if (tag !== "" && constructor !== tag) {
    base2 += ` [${tag}]`;
  }
  return base2;
}
function formatError2(err, constructor, tag, ctx, keys3) {
  const name = err.name != null ? String(err.name) : "Error";
  let len = name.length;
  let stack = err.stack ? String(err.stack) : err.toString();
  if (!ctx.showHidden && keys3.length !== 0) {
    for (const name1 of [
      "name",
      "message",
      "stack"
    ]) {
      const index = keys3.indexOf(name1);
      if (index !== -1 && stack.includes(err[name1])) {
        keys3.splice(index, 1);
      }
    }
  }
  if (constructor === null || name.endsWith("Error") && stack.startsWith(name) && (stack.length === len || stack[len] === ":" || stack[len] === "\n")) {
    let fallback = "Error";
    if (constructor === null) {
      const start = stack.match(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/) || stack.match(/^([a-z_A-Z0-9-]*Error)$/);
      fallback = start && start[1] || "";
      len = fallback.length;
      fallback = fallback || "Error";
    }
    const prefix = getPrefix(constructor, tag, fallback).slice(0, -1);
    if (name !== prefix) {
      if (prefix.includes(name)) {
        if (len === 0) {
          stack = `${prefix}: ${stack}`;
        } else {
          stack = `${prefix}${stack.slice(len)}`;
        }
      } else {
        stack = `${prefix} [${name}]${stack.slice(len)}`;
      }
    }
  }
  let pos = err.message && stack.indexOf(err.message) || -1;
  if (pos !== -1) {
    pos += err.message.length;
  }
  const stackStart = stack.indexOf("\n    at", pos);
  if (stackStart === -1) {
    stack = `[${stack}]`;
  } else if (ctx.colors) {
    let newStack = stack.slice(0, stackStart);
    const lines = stack.slice(stackStart + 1).split("\n");
    for (const line of lines) {
      let nodeModule;
      newStack += "\n";
      let pos1 = 0;
      while (nodeModule = nodeModulesRegExp.exec(line)) {
        newStack += line.slice(pos1, nodeModule.index + 14);
        newStack += ctx.stylize(nodeModule[1], "module");
        pos1 = nodeModule.index + nodeModule[0].length;
      }
      newStack += pos1 === 0 ? line : line.slice(pos1);
    }
    stack = newStack;
  }
  if (ctx.indentationLvl !== 0) {
    const indentation = " ".repeat(ctx.indentationLvl);
    stack = stack.replace(/\n/g, `
${indentation}`);
  }
  return stack;
}
function formatArrayBuffer(ctx, value) {
  let buffer;
  try {
    buffer = new Uint8Array(value);
  } catch {
    return [
      ctx.stylize("(detached)", "special")
    ];
  }
  let str = hexSlice2(buffer, 0, Math.min(ctx.maxArrayLength, buffer.length)).replace(/(.{2})/g, "$1 ").trim();
  const remaining = buffer.length - ctx.maxArrayLength;
  if (remaining > 0) {
    str += ` ... ${remaining} more byte${remaining > 1 ? "s" : ""}`;
  }
  return [
    `${ctx.stylize("[Uint8Contents]", "special")}: <${str}>`
  ];
}
function formatNumber(fn, value) {
  return fn(Object.is(value, -0) ? "-0" : `${value}`, "number");
}
function formatPromise(ctx, value, recurseTimes) {
  let output;
  const { 0: state, 1: result } = value;
  if (state === 0) {
    output = [
      ctx.stylize("<pending>", "special")
    ];
  } else {
    ctx.indentationLvl += 2;
    const str = formatValue2(ctx, result, recurseTimes);
    ctx.indentationLvl -= 2;
    output = [
      state === kRejected ? `${ctx.stylize("<rejected>", "special")} ${str}` : str
    ];
  }
  return output;
}
function formatWeakCollection(ctx) {
  return [
    ctx.stylize("<items unknown>", "special")
  ];
}
function formatWeakSet(ctx, value, recurseTimes) {
  const entries = value;
  return formatSetIterInner(ctx, recurseTimes, entries, 0);
}
function formatWeakMap(ctx, value, recurseTimes) {
  const entries = value;
  return formatMapIterInner(ctx, recurseTimes, entries, 0);
}
function formatProperty2(ctx, value, recurseTimes, key, type, desc, original = value) {
  let name, str;
  let extra = " ";
  desc = desc || Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key],
    enumerable: true
  };
  if (desc.value !== void 0) {
    const diff = ctx.compact !== true || type !== 0 ? 2 : 3;
    ctx.indentationLvl += diff;
    str = formatValue2(ctx, desc.value, recurseTimes);
    if (diff === 3 && ctx.breakLength < getStringWidth(str, ctx.colors)) {
      extra = `
${" ".repeat(ctx.indentationLvl)}`;
    }
    ctx.indentationLvl -= diff;
  } else if (desc.get !== void 0) {
    const label = desc.set !== void 0 ? "Getter/Setter" : "Getter";
    const s = ctx.stylize;
    const sp = "special";
    if (ctx.getters && (ctx.getters === true || ctx.getters === "get" && desc.set === void 0 || ctx.getters === "set" && desc.set !== void 0)) {
      try {
        const tmp = desc.get.call(original);
        ctx.indentationLvl += 2;
        if (tmp === null) {
          str = `${s(`[${label}:`, sp)} ${s("null", "null")}${s("]", sp)}`;
        } else if (typeof tmp === "object") {
          str = `${s(`[${label}]`, sp)} ${formatValue2(ctx, tmp, recurseTimes)}`;
        } else {
          const primitive = formatPrimitive2(s, tmp, ctx);
          str = `${s(`[${label}:`, sp)} ${primitive}${s("]", sp)}`;
        }
        ctx.indentationLvl -= 2;
      } catch (err) {
        const message = `<Inspection threw (${err.message})>`;
        str = `${s(`[${label}:`, sp)} ${message}${s("]", sp)}`;
      }
    } else {
      str = ctx.stylize(`[${label}]`, sp);
    }
  } else if (desc.set !== void 0) {
    str = ctx.stylize("[Setter]", "special");
  } else {
    str = ctx.stylize("undefined", "undefined");
  }
  if (type === 1) {
    return str;
  }
  if (typeof key === "symbol") {
    const tmp1 = key.toString().replace(strEscapeSequencesReplacer, escapeFn);
    name = `[${ctx.stylize(tmp1, "symbol")}]`;
  } else if (key === "__proto__") {
    name = "['__proto__']";
  } else if (desc.enumerable === false) {
    const tmp2 = key.replace(strEscapeSequencesReplacer, escapeFn);
    name = `[${tmp2}]`;
  } else if (keyStrRegExp.test(key)) {
    name = ctx.stylize(key, "name");
  } else {
    name = ctx.stylize(strEscape(key), "string");
  }
  return `${name}:${extra}${str}`;
}
function handleMaxCallStackSize(_ctx, _err, _constructorName, _indentationLvl) {
}
function removeColors(str) {
  return str.replace(colorRegExp, "");
}
function isBelowBreakLength(ctx, output, start, base2) {
  let totalLength = output.length + start;
  if (totalLength + output.length > ctx.breakLength) {
    return false;
  }
  for (let i = 0; i < output.length; i++) {
    if (ctx.colors) {
      totalLength += removeColors(output[i]).length;
    } else {
      totalLength += output[i].length;
    }
    if (totalLength > ctx.breakLength) {
      return false;
    }
  }
  return base2 === "" || !base2.includes("\n");
}
function formatBigInt(fn, value) {
  return fn(`${value}n`, "bigint");
}
function formatNamespaceObject(keys3, ctx, value, recurseTimes) {
  const output = new Array(keys3.length);
  for (let i = 0; i < keys3.length; i++) {
    try {
      output[i] = formatProperty2(ctx, value, recurseTimes, keys3[i], kObjectType);
    } catch (_err) {
      const tmp = {
        [keys3[i]]: ""
      };
      output[i] = formatProperty2(ctx, tmp, recurseTimes, keys3[i], kObjectType);
      const pos = output[i].lastIndexOf(" ");
      output[i] = output[i].slice(0, pos + 1) + ctx.stylize("<uninitialized>", "special");
    }
  }
  keys3.length = 0;
  return output;
}
function formatSpecialArray(ctx, value, recurseTimes, maxLength, output, i) {
  const keys3 = Object.keys(value);
  let index = i;
  for (; i < keys3.length && output.length < maxLength; i++) {
    const key = keys3[i];
    const tmp = +key;
    if (tmp > 2 ** 32 - 2) {
      break;
    }
    if (`${index}` !== key) {
      if (!numberRegExp.test(key)) {
        break;
      }
      const emptyItems = tmp - index;
      const ending = emptyItems > 1 ? "s" : "";
      const message = `<${emptyItems} empty item${ending}>`;
      output.push(ctx.stylize(message, "undefined"));
      index = tmp;
      if (output.length === maxLength) {
        break;
      }
    }
    output.push(formatProperty2(ctx, value, recurseTimes, key, 1));
    index++;
  }
  const remaining = value.length - index;
  if (output.length !== maxLength) {
    if (remaining > 0) {
      const ending1 = remaining > 1 ? "s" : "";
      const message1 = `<${remaining} empty item${ending1}>`;
      output.push(ctx.stylize(message1, "undefined"));
    }
  } else if (remaining > 0) {
    output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`);
  }
  return output;
}
function getBoxedBase(value, ctx, keys3, constructor, tag) {
  let type;
  if (isNumberObject12(value)) {
    type = "Number";
  } else if (isStringObject12(value)) {
    type = "String";
    keys3.splice(0, value.length);
  } else if (isBooleanObject12(value)) {
    type = "Boolean";
  } else if (isBigIntObject12(value)) {
    type = "BigInt";
  } else {
    type = "Symbol";
  }
  let base2 = `[${type}`;
  if (type !== constructor) {
    if (constructor === null) {
      base2 += " (null prototype)";
    } else {
      base2 += ` (${constructor})`;
    }
  }
  base2 += `: ${formatPrimitive2(stylizeNoColor2, value.valueOf(), ctx)}]`;
  if (tag !== "" && tag !== constructor) {
    base2 += ` [${tag}]`;
  }
  if (keys3.length !== 0 || ctx.stylize === stylizeNoColor2) {
    return base2;
  }
  return ctx.stylize(base2, type.toLowerCase());
}
function getClassBase(value, constructor, tag) {
  const hasName = value.hasOwnProperty("name");
  const name = hasName && value.name || "(anonymous)";
  let base2 = `class ${name}`;
  if (constructor !== "Function" && constructor !== null) {
    base2 += ` [${constructor}]`;
  }
  if (tag !== "" && constructor !== tag) {
    base2 += ` [${tag}]`;
  }
  if (constructor !== null) {
    const superName = Object.getPrototypeOf(value).name;
    if (superName) {
      base2 += ` extends ${superName}`;
    }
  } else {
    base2 += " extends [null prototype]";
  }
  return `[${base2}]`;
}
function reduceToSingleString2(ctx, output, base2, braces, extrasType, recurseTimes, value) {
  if (ctx.compact !== true) {
    if (typeof ctx.compact === "number" && ctx.compact >= 1) {
      const entries = output.length;
      if (extrasType === 2 && entries > 6) {
        output = groupArrayElements(ctx, output, value);
      }
      if (ctx.currentDepth - recurseTimes < ctx.compact && entries === output.length) {
        const start = output.length + ctx.indentationLvl + braces[0].length + base2.length + 10;
        if (isBelowBreakLength(ctx, output, start, base2)) {
          return `${base2 ? `${base2} ` : ""}${braces[0]} ${join(output, ", ")} ${braces[1]}`;
        }
      }
    }
    const indentation = `
${" ".repeat(ctx.indentationLvl)}`;
    return `${base2 ? `${base2} ` : ""}${braces[0]}${indentation}  ${join(output, `,${indentation}  `)}${indentation}${braces[1]}`;
  }
  if (isBelowBreakLength(ctx, output, 0, base2)) {
    return `${braces[0]}${base2 ? ` ${base2}` : ""} ${join(output, ", ")} ` + braces[1];
  }
  const indentation1 = " ".repeat(ctx.indentationLvl);
  const ln = base2 === "" && braces[0].length === 1 ? " " : `${base2 ? ` ${base2}` : ""}
${indentation1}  `;
  return `${braces[0]}${ln}${join(output, `,
${indentation1}  `)} ${braces[1]}`;
}
function join(output, separator) {
  let str = "";
  if (output.length !== 0) {
    const lastIndex = output.length - 1;
    for (let i = 0; i < lastIndex; i++) {
      str += output[i];
      str += separator;
    }
    str += output[lastIndex];
  }
  return str;
}
function groupArrayElements(ctx, output, value) {
  let totalLength = 0;
  let maxLength = 0;
  let i = 0;
  let outputLength = output.length;
  if (ctx.maxArrayLength < output.length) {
    outputLength--;
  }
  const separatorSpace = 2;
  const dataLen = new Array(outputLength);
  for (; i < outputLength; i++) {
    const len = getStringWidth(output[i], ctx.colors);
    dataLen[i] = len;
    totalLength += len + separatorSpace;
    if (maxLength < len) {
      maxLength = len;
    }
  }
  const actualMax = maxLength + 2;
  if (actualMax * 3 + ctx.indentationLvl < ctx.breakLength && (totalLength / actualMax > 5 || maxLength <= 6)) {
    const averageBias = Math.sqrt(actualMax - totalLength / output.length);
    const biasedMax = Math.max(actualMax - 3 - averageBias, 1);
    const columns = Math.min(Math.round(Math.sqrt(2.5 * biasedMax * outputLength) / biasedMax), Math.floor((ctx.breakLength - ctx.indentationLvl) / actualMax), ctx.compact * 4, 15);
    if (columns <= 1) {
      return output;
    }
    const tmp = [];
    const maxLineLength = [];
    for (let i1 = 0; i1 < columns; i1++) {
      let lineMaxLength = 0;
      for (let j = i1; j < output.length; j += columns) {
        if (dataLen[j] > lineMaxLength) {
          lineMaxLength = dataLen[j];
        }
      }
      lineMaxLength += separatorSpace;
      maxLineLength[i1] = lineMaxLength;
    }
    let order = String.prototype.padStart;
    if (value !== void 0) {
      for (let i2 = 0; i2 < output.length; i2++) {
        if (typeof value[i2] !== "number" && typeof value[i2] !== "bigint") {
          order = String.prototype.padEnd;
          break;
        }
      }
    }
    for (let i3 = 0; i3 < outputLength; i3 += columns) {
      const max = Math.min(i3 + columns, outputLength);
      let str = "";
      let j1 = i3;
      for (; j1 < max - 1; j1++) {
        const padding = maxLineLength[j1 - i3] + output[j1].length - dataLen[j1];
        str += `${output[j1]}, `.padStart(padding, " ");
      }
      if (order === String.prototype.padStart) {
        const padding1 = maxLineLength[j1 - i3] + output[j1].length - dataLen[j1] - 2;
        str += output[j1].padStart(padding1, " ");
      } else {
        str += output[j1];
      }
      Array.prototype.push.call(tmp, str);
    }
    if (ctx.maxArrayLength < output.length) {
      Array.prototype.push.call(tmp, output[outputLength]);
    }
    output = tmp;
  }
  return output;
}
function formatMapIterInner(ctx, recurseTimes, entries, state) {
  const maxArrayLength = Math.max(ctx.maxArrayLength, 0);
  const len = entries.length / 2;
  const remaining = len - maxArrayLength;
  const maxLength = Math.min(maxArrayLength, len);
  let output = new Array(maxLength);
  let i = 0;
  ctx.indentationLvl += 2;
  if (state === 0) {
    for (; i < maxLength; i++) {
      const pos = i * 2;
      output[i] = `${formatValue2(ctx, entries[pos], recurseTimes)} => ${formatValue2(ctx, entries[pos + 1], recurseTimes)}`;
    }
    if (!ctx.sorted) {
      output = output.sort();
    }
  } else {
    for (; i < maxLength; i++) {
      const pos1 = i * 2;
      const res = [
        formatValue2(ctx, entries[pos1], recurseTimes),
        formatValue2(ctx, entries[pos1 + 1], recurseTimes)
      ];
      output[i] = reduceToSingleString2(ctx, res, "", [
        "[",
        "]"
      ], kArrayExtrasType, recurseTimes);
    }
  }
  ctx.indentationLvl -= 2;
  if (remaining > 0) {
    output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`);
  }
  return output;
}
function formatSetIterInner(ctx, recurseTimes, entries, state) {
  const maxArrayLength = Math.max(ctx.maxArrayLength, 0);
  const maxLength = Math.min(maxArrayLength, entries.length);
  const output = new Array(maxLength);
  ctx.indentationLvl += 2;
  for (let i = 0; i < maxLength; i++) {
    output[i] = formatValue2(ctx, entries[i], recurseTimes);
  }
  ctx.indentationLvl -= 2;
  if (state === 0 && !ctx.sorted) {
    output.sort();
  }
  const remaining = entries.length - maxLength;
  if (remaining > 0) {
    Array.prototype.push.call(output, `... ${remaining} more item${remaining > 1 ? "s" : ""}`);
  }
  return output;
}
function getStringWidth(str, removeControlChars = true) {
  let width = 0;
  if (removeControlChars) {
    str = stripVTControlCharacters(str);
  }
  str = str.normalize("NFC");
  for (const __char of str[Symbol.iterator]()) {
    const code = __char.codePointAt(0);
    if (isFullWidthCodePoint(code)) {
      width += 2;
    } else if (!isZeroWidthCodePoint(code)) {
      width++;
    }
  }
  return width;
}
function stripVTControlCharacters(str) {
  validateString2(str, "str");
  return str.replace(ansi, "");
}
function initializeDebugEnv(debugEnv2) {
  debugImpls = /* @__PURE__ */ Object.create(null);
  if (debugEnv2) {
    debugEnv2 = debugEnv2.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replaceAll("*", ".*").replaceAll(",", "$|^");
    const debugEnvRegex2 = new RegExp(`^${debugEnv2}$`, "i");
    (str) => debugEnvRegex2.exec(str) !== null;
  } else {
    () => false;
  }
}
function numberToBytes2(n) {
  if (n === 0)
    return new Uint8Array([
      0
    ]);
  const bytes = [];
  bytes.unshift(n & 255);
  while (n >= 256) {
    n = n >>> 8;
    bytes.unshift(n & 255);
  }
  return new Uint8Array(bytes);
}
function findLastIndex2(targetBuffer, buffer, offset) {
  offset = offset > targetBuffer.length ? targetBuffer.length : offset;
  const searchableBuffer = targetBuffer.slice(0, offset + buffer.length);
  const searchableBufferLastIndex = searchableBuffer.length - 1;
  const bufferLastIndex = buffer.length - 1;
  let lastMatchIndex = -1;
  let matches = 0;
  let index = -1;
  for (let x = 0; x <= searchableBufferLastIndex; x++) {
    if (searchableBuffer[searchableBufferLastIndex - x] === buffer[bufferLastIndex - matches]) {
      if (lastMatchIndex === -1) {
        lastMatchIndex = x;
      }
      matches++;
    } else {
      matches = 0;
      if (lastMatchIndex !== -1) {
        x = lastMatchIndex + 1;
        lastMatchIndex = -1;
      }
      continue;
    }
    if (matches === buffer.length) {
      index = x;
      break;
    }
  }
  if (index === -1)
    return index;
  return searchableBufferLastIndex - index;
}
function indexOfBuffer2(targetBuffer, buffer, byteOffset, encoding, forwardDirection) {
  if (!Encodings2[encoding] === void 0) {
    throw new Error(`Unknown encoding code ${encoding}`);
  }
  if (!forwardDirection) {
    if (byteOffset < 0) {
      byteOffset = targetBuffer.length + byteOffset;
    }
    if (buffer.length === 0) {
      return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length;
    }
    return findLastIndex2(targetBuffer, buffer, byteOffset);
  }
  if (buffer.length === 0) {
    return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length;
  }
  return indexOfNeedle2(targetBuffer, buffer, byteOffset);
}
function indexOfNumber2(targetBuffer, number, byteOffset, forwardDirection) {
  const bytes = numberToBytes2(number);
  if (bytes.length > 1) {
    throw new Error("Multi byte number search is not supported");
  }
  return indexOfBuffer2(targetBuffer, numberToBytes2(number), byteOffset, Encodings2.UTF8, forwardDirection);
}
function encode2(data) {
  const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
  let result = "", i;
  const l = uint8.length;
  for (i = 2; i < l; i += 3) {
    result += base64abc2[uint8[i - 2] >> 2];
    result += base64abc2[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc2[(uint8[i - 1] & 15) << 2 | uint8[i] >> 6];
    result += base64abc2[uint8[i] & 63];
  }
  if (i === l + 1) {
    result += base64abc2[uint8[i - 2] >> 2];
    result += base64abc2[(uint8[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += base64abc2[uint8[i - 2] >> 2];
    result += base64abc2[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc2[(uint8[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
function decode2(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bytes[i] = binString.charCodeAt(i);
  }
  return bytes;
}
function addPaddingToBase64url2(base64url) {
  if (base64url.length % 4 === 2)
    return base64url + "==";
  if (base64url.length % 4 === 3)
    return base64url + "=";
  if (base64url.length % 4 === 1) {
    throw new TypeError("Illegal base64url string!");
  }
  return base64url;
}
function convertBase64urlToBase642(b64url) {
  if (!/^[-_A-Z0-9]*?={0,2}$/i.test(b64url)) {
    throw new TypeError("Failed to decode base64url: invalid character");
  }
  return addPaddingToBase64url2(b64url).replace(/\-/g, "+").replace(/_/g, "/");
}
function convertBase64ToBase64url2(b64) {
  return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function encode12(data) {
  return convertBase64ToBase64url2(encode2(data));
}
function decode12(b64url) {
  return decode2(convertBase64urlToBase642(b64url));
}
function asciiToBytes2(str) {
  const byteArray3 = [];
  for (let i = 0; i < str.length; ++i) {
    byteArray3.push(str.charCodeAt(i) & 255);
  }
  return new Uint8Array(byteArray3);
}
function base64ToBytes2(str) {
  str = base64clean2(str);
  str = str.replaceAll("-", "+").replaceAll("_", "/");
  return decode2(str);
}
function base64clean2(str) {
  str = str.split("=")[0];
  str = str.trim().replace(INVALID_BASE64_RE2, "");
  if (str.length < 2)
    return "";
  while (str.length % 4 !== 0) {
    str = str + "=";
  }
  return str;
}
function base64UrlToBytes2(str) {
  str = base64clean2(str);
  str = str.replaceAll("+", "-").replaceAll("/", "_");
  return decode12(str);
}
function hexToBytes2(str) {
  const byteArray3 = new Uint8Array(Math.floor((str || "").length / 2));
  let i;
  for (i = 0; i < byteArray3.length; i++) {
    const a = Number.parseInt(str[i * 2], 16);
    const b = Number.parseInt(str[i * 2 + 1], 16);
    if (Number.isNaN(a) && Number.isNaN(b)) {
      break;
    }
    byteArray3[i] = a << 4 | b;
  }
  return new Uint8Array(i === byteArray3.length ? byteArray3 : byteArray3.slice(0, i));
}
function utf16leToBytes2(str, units) {
  let c, hi, lo;
  const byteArray3 = [];
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) {
      break;
    }
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray3.push(lo);
    byteArray3.push(hi);
  }
  return new Uint8Array(byteArray3);
}
function bytesToAscii2(bytes) {
  let ret = "";
  for (let i = 0; i < bytes.length; ++i) {
    ret += String.fromCharCode(bytes[i] & 127);
  }
  return ret;
}
function bytesToUtf16le2(bytes) {
  let res = "";
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
function readUInt48LE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 6);
  }
  return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + (buf[++offset] + last * 2 ** 8) * 2 ** 32;
}
function readUInt40LE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 5);
  }
  return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + last * 2 ** 32;
}
function readUInt24LE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 3);
  }
  return first + buf[++offset] * 2 ** 8 + last * 2 ** 16;
}
function readUInt48BE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 6);
  }
  return (first * 2 ** 8 + buf[++offset]) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt40BE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 5);
  }
  return first * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt24BE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 3);
  }
  return first * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt16BE2(offset = 0) {
  validateNumber2(offset, "offset");
  const first = this[offset];
  const last = this[offset + 1];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, this.length - 2);
  }
  return first * 2 ** 8 + last;
}
function readUInt32BE2(offset = 0) {
  validateNumber2(offset, "offset");
  const first = this[offset];
  const last = this[offset + 3];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, this.length - 4);
  }
  return first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
}
function readDoubleBackwards2(buffer, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 7];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buffer.length - 8);
  }
  uInt8Float64Array2[7] = first;
  uInt8Float64Array2[6] = buffer[++offset];
  uInt8Float64Array2[5] = buffer[++offset];
  uInt8Float64Array2[4] = buffer[++offset];
  uInt8Float64Array2[3] = buffer[++offset];
  uInt8Float64Array2[2] = buffer[++offset];
  uInt8Float64Array2[1] = buffer[++offset];
  uInt8Float64Array2[0] = last;
  return float64Array2[0];
}
function readDoubleForwards2(buffer, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 7];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buffer.length - 8);
  }
  uInt8Float64Array2[0] = first;
  uInt8Float64Array2[1] = buffer[++offset];
  uInt8Float64Array2[2] = buffer[++offset];
  uInt8Float64Array2[3] = buffer[++offset];
  uInt8Float64Array2[4] = buffer[++offset];
  uInt8Float64Array2[5] = buffer[++offset];
  uInt8Float64Array2[6] = buffer[++offset];
  uInt8Float64Array2[7] = last;
  return float64Array2[0];
}
function writeDoubleForwards2(buffer, val, offset = 0) {
  val = +val;
  checkBounds2(buffer, offset, 7);
  float64Array2[0] = val;
  buffer[offset++] = uInt8Float64Array2[0];
  buffer[offset++] = uInt8Float64Array2[1];
  buffer[offset++] = uInt8Float64Array2[2];
  buffer[offset++] = uInt8Float64Array2[3];
  buffer[offset++] = uInt8Float64Array2[4];
  buffer[offset++] = uInt8Float64Array2[5];
  buffer[offset++] = uInt8Float64Array2[6];
  buffer[offset++] = uInt8Float64Array2[7];
  return offset;
}
function writeDoubleBackwards2(buffer, val, offset = 0) {
  val = +val;
  checkBounds2(buffer, offset, 7);
  float64Array2[0] = val;
  buffer[offset++] = uInt8Float64Array2[7];
  buffer[offset++] = uInt8Float64Array2[6];
  buffer[offset++] = uInt8Float64Array2[5];
  buffer[offset++] = uInt8Float64Array2[4];
  buffer[offset++] = uInt8Float64Array2[3];
  buffer[offset++] = uInt8Float64Array2[2];
  buffer[offset++] = uInt8Float64Array2[1];
  buffer[offset++] = uInt8Float64Array2[0];
  return offset;
}
function readFloatBackwards2(buffer, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 3];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buffer.length - 4);
  }
  uInt8Float32Array2[3] = first;
  uInt8Float32Array2[2] = buffer[++offset];
  uInt8Float32Array2[1] = buffer[++offset];
  uInt8Float32Array2[0] = last;
  return float32Array2[0];
}
function readFloatForwards2(buffer, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buffer[offset];
  const last = buffer[offset + 3];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buffer.length - 4);
  }
  uInt8Float32Array2[0] = first;
  uInt8Float32Array2[1] = buffer[++offset];
  uInt8Float32Array2[2] = buffer[++offset];
  uInt8Float32Array2[3] = last;
  return float32Array2[0];
}
function writeFloatForwards2(buffer, val, offset = 0) {
  val = +val;
  checkBounds2(buffer, offset, 3);
  float32Array2[0] = val;
  buffer[offset++] = uInt8Float32Array2[0];
  buffer[offset++] = uInt8Float32Array2[1];
  buffer[offset++] = uInt8Float32Array2[2];
  buffer[offset++] = uInt8Float32Array2[3];
  return offset;
}
function writeFloatBackwards2(buffer, val, offset = 0) {
  val = +val;
  checkBounds2(buffer, offset, 3);
  float32Array2[0] = val;
  buffer[offset++] = uInt8Float32Array2[3];
  buffer[offset++] = uInt8Float32Array2[2];
  buffer[offset++] = uInt8Float32Array2[1];
  buffer[offset++] = uInt8Float32Array2[0];
  return offset;
}
function readInt24LE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 3);
  }
  const val = first + buf[++offset] * 2 ** 8 + last * 2 ** 16;
  return val | (val & 2 ** 23) * 510;
}
function readInt40LE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 5);
  }
  return (last | (last & 2 ** 7) * 33554430) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24;
}
function readInt48LE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 6);
  }
  const val = buf[offset + 4] + last * 2 ** 8;
  return (val | (val & 2 ** 15) * 131070) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24;
}
function readInt24BE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 2];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 3);
  }
  const val = first * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
  return val | (val & 2 ** 23) * 510;
}
function readInt48BE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 5];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 6);
  }
  const val = buf[++offset] + first * 2 ** 8;
  return (val | (val & 2 ** 15) * 131070) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readInt40BE2(buf, offset = 0) {
  validateNumber2(offset, "offset");
  const first = buf[offset];
  const last = buf[offset + 4];
  if (first === void 0 || last === void 0) {
    boundsError2(offset, buf.length - 5);
  }
  return (first | (first & 2 ** 7) * 33554430) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function byteLengthUtf82(str) {
  return utf8Encoder2.encode(str).length;
}
function base64ByteLength2(str, bytes) {
  if (str.charCodeAt(bytes - 1) === 61) {
    bytes--;
  }
  if (bytes > 1 && str.charCodeAt(bytes - 1) === 61) {
    bytes--;
  }
  return bytes * 3 >>> 2;
}
function getEncodingOps2(encoding) {
  encoding = String(encoding).toLowerCase();
  switch (encoding.length) {
    case 4:
      if (encoding === "utf8")
        return encodingOps2.utf8;
      if (encoding === "ucs2")
        return encodingOps2.ucs2;
      break;
    case 5:
      if (encoding === "utf-8")
        return encodingOps2.utf8;
      if (encoding === "ascii")
        return encodingOps2.ascii;
      if (encoding === "ucs-2")
        return encodingOps2.ucs2;
      break;
    case 7:
      if (encoding === "utf16le") {
        return encodingOps2.utf16le;
      }
      break;
    case 8:
      if (encoding === "utf-16le") {
        return encodingOps2.utf16le;
      }
      break;
    case 6:
      if (encoding === "latin1" || encoding === "binary") {
        return encodingOps2.latin1;
      }
      if (encoding === "base64")
        return encodingOps2.base64;
    case 3:
      if (encoding === "hex") {
        return encodingOps2.hex;
      }
      break;
    case 9:
      if (encoding === "base64url") {
        return encodingOps2.base64url;
      }
      break;
  }
}
function _copyActual2(source, target2, targetStart, sourceStart, sourceEnd) {
  if (sourceEnd - sourceStart > target2.length - targetStart) {
    sourceEnd = sourceStart + target2.length - targetStart;
  }
  let nb = sourceEnd - sourceStart;
  const sourceLen = source.length - sourceStart;
  if (nb > sourceLen) {
    nb = sourceLen;
  }
  if (sourceStart !== 0 || sourceEnd < source.length) {
    source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb);
  }
  target2.set(source, targetStart);
  return nb;
}
function boundsError2(value, length2, type) {
  if (Math.floor(value) !== value) {
    validateNumber2(value, type);
    throw new codes4.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
  }
  if (length2 < 0) {
    throw new codes4.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new codes4.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length2}`, value);
}
function validateNumber2(value, name) {
  if (typeof value !== "number") {
    throw new codes4.ERR_INVALID_ARG_TYPE(name, "number", value);
  }
}
function checkBounds2(buf, offset, byteLength22) {
  validateNumber2(offset, "offset");
  if (buf[offset] === void 0 || buf[offset + byteLength22] === void 0) {
    boundsError2(offset, buf.length - (byteLength22 + 1));
  }
}
function checkInt2(value, min2, max, buf, offset, byteLength22) {
  if (value > max || value < min2) {
    const n = typeof min2 === "bigint" ? "n" : "";
    let range;
    if (byteLength22 > 3) {
      if (min2 === 0 || min2 === 0n) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength22 + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength22 + 1) * 8 - 1}${n}) and < 2${n} ** ${(byteLength22 + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min2}${n} and <= ${max}${n}`;
    }
    throw new codes4.ERR_OUT_OF_RANGE("value", range, value);
  }
  checkBounds2(buf, offset, byteLength22);
}
function toInteger2(n, defaultVal) {
  n = +n;
  if (!Number.isNaN(n) && n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) {
    return n % 1 === 0 ? n : Math.floor(n);
  }
  return defaultVal;
}
function writeU_Int82(buf, value, offset, min2, max) {
  value = +value;
  validateNumber2(offset, "offset");
  if (value > max || value < min2) {
    throw new codes4.ERR_OUT_OF_RANGE("value", `>= ${min2} and <= ${max}`, value);
  }
  if (buf[offset] === void 0) {
    boundsError2(offset, buf.length - 1);
  }
  buf[offset] = value;
  return offset + 1;
}
function writeU_Int16BE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 1);
  buf[offset++] = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function _writeUInt32LE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 3);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function writeU_Int16LE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 1);
  buf[offset++] = value;
  buf[offset++] = value >>> 8;
  return offset;
}
function _writeUInt32BE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 3);
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int48BE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 5);
  const newVal = Math.floor(value * 2 ** -32);
  buf[offset++] = newVal >>> 8;
  buf[offset++] = newVal;
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int40BE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 4);
  buf[offset++] = Math.floor(value * 2 ** -32);
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int32BE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 3);
  buf[offset + 3] = value;
  value = value >>> 8;
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 4;
}
function writeU_Int24BE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 2);
  buf[offset + 2] = value;
  value = value >>> 8;
  buf[offset + 1] = value;
  value = value >>> 8;
  buf[offset] = value;
  return offset + 3;
}
function validateOffset2(value, name, min2 = 0, max = Number.MAX_SAFE_INTEGER) {
  if (typeof value !== "number") {
    throw new codes4.ERR_INVALID_ARG_TYPE(name, "number", value);
  }
  if (!Number.isInteger(value)) {
    throw new codes4.ERR_OUT_OF_RANGE(name, "an integer", value);
  }
  if (value < min2 || value > max) {
    throw new codes4.ERR_OUT_OF_RANGE(name, `>= ${min2} && <= ${max}`, value);
  }
}
function writeU_Int48LE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 5);
  const newVal = Math.floor(value * 2 ** -32);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  buf[offset++] = newVal;
  buf[offset++] = newVal >>> 8;
  return offset;
}
function writeU_Int40LE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 4);
  const newVal = value;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  buf[offset++] = Math.floor(newVal * 2 ** -32);
  return offset;
}
function writeU_Int32LE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 3);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function writeU_Int24LE2(buf, value, offset, min2, max) {
  value = +value;
  checkInt2(value, min2, max, buf, offset, 2);
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  value = value >>> 8;
  buf[offset++] = value;
  return offset;
}
function createBuffer2(length2) {
  if (length2 > 2147483647) {
    throw new RangeError('The value "' + length2 + '" is invalid for option "size"');
  }
  const buf = new Uint8Array(length2);
  Object.setPrototypeOf(buf, Buffer3.prototype);
  return buf;
}
function Buffer3(arg, encodingOrOffset, length2) {
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new codes4.ERR_INVALID_ARG_TYPE("string", "string", arg);
    }
    return _allocUnsafe2(arg);
  }
  return _from2(arg, encodingOrOffset, length2);
}
function _from2(value, encodingOrOffset, length2) {
  if (typeof value === "string") {
    return fromString2(value, encodingOrOffset);
  }
  if (typeof value === "object" && value !== null) {
    if (isAnyArrayBuffer12(value)) {
      return fromArrayBuffer2(value, encodingOrOffset, length2);
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value && (typeof valueOf === "string" || typeof valueOf === "object")) {
      return _from2(valueOf, encodingOrOffset, length2);
    }
    const b = fromObject2(value);
    if (b) {
      return b;
    }
    if (typeof value[Symbol.toPrimitive] === "function") {
      const primitive = value[Symbol.toPrimitive]("string");
      if (typeof primitive === "string") {
        return fromString2(primitive, encodingOrOffset);
      }
    }
  }
  throw new codes4.ERR_INVALID_ARG_TYPE("first argument", [
    "string",
    "Buffer",
    "ArrayBuffer",
    "Array",
    "Array-like Object"
  ], value);
}
function assertSize2(size) {
  validateNumber2(size, "size");
  if (!(size >= 0 && size <= 2147483647)) {
    throw new codes4.ERR_INVALID_ARG_VALUE.RangeError("size", size);
  }
}
function _alloc2(size, fill22, encoding) {
  assertSize2(size);
  const buffer = createBuffer2(size);
  if (fill22 !== void 0) {
    if (encoding !== void 0 && typeof encoding !== "string") {
      throw new codes4.ERR_INVALID_ARG_TYPE("encoding", "string", encoding);
    }
    return buffer.fill(fill22, encoding);
  }
  return buffer;
}
function _allocUnsafe2(size) {
  assertSize2(size);
  return createBuffer2(size < 0 ? 0 : checked2(size) | 0);
}
function fromString2(string, encoding) {
  if (typeof encoding !== "string" || encoding === "") {
    encoding = "utf8";
  }
  if (!Buffer3.isEncoding(encoding)) {
    throw new codes4.ERR_UNKNOWN_ENCODING(encoding);
  }
  const length2 = byteLength2(string, encoding) | 0;
  let buf = createBuffer2(length2);
  const actual = buf.write(string, encoding);
  if (actual !== length2) {
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike2(array) {
  const length2 = array.length < 0 ? 0 : checked2(array.length) | 0;
  const buf = createBuffer2(length2);
  for (let i = 0; i < length2; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromObject2(obj) {
  if (obj.length !== void 0 || isAnyArrayBuffer12(obj.buffer)) {
    if (typeof obj.length !== "number") {
      return createBuffer2(0);
    }
    return fromArrayLike2(obj);
  }
  if (obj.type === "Buffer" && Array.isArray(obj.data)) {
    return fromArrayLike2(obj.data);
  }
}
function checked2(length2) {
  if (length2 >= 2147483647) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  }
  return length2 | 0;
}
function SlowBuffer2(length2) {
  assertSize2(length2);
  return Buffer3.alloc(+length2);
}
function byteLength2(string, encoding) {
  if (typeof string !== "string") {
    if (isArrayBufferView5(string) || isAnyArrayBuffer12(string)) {
      return string.byteLength;
    }
    throw new codes4.ERR_INVALID_ARG_TYPE("string", [
      "string",
      "Buffer",
      "ArrayBuffer"
    ], string);
  }
  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) {
    return 0;
  }
  if (!encoding) {
    return mustMatch ? -1 : byteLengthUtf82(string);
  }
  const ops = getEncodingOps2(encoding);
  if (ops === void 0) {
    return mustMatch ? -1 : byteLengthUtf82(string);
  }
  return ops.byteLength(string);
}
function swap2(b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}
function bidirectionalIndexOf2(buffer, val, byteOffset, encoding, dir) {
  validateBuffer4(buffer);
  if (typeof byteOffset === "string") {
    encoding = byteOffset;
    byteOffset = void 0;
  } else if (byteOffset > 2147483647) {
    byteOffset = 2147483647;
  } else if (byteOffset < -2147483648) {
    byteOffset = -2147483648;
  }
  byteOffset = +byteOffset;
  if (Number.isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length || buffer.byteLength;
  }
  dir = !!dir;
  if (typeof val === "number") {
    return indexOfNumber2(buffer, val >>> 0, byteOffset, dir);
  }
  let ops;
  if (encoding === void 0) {
    ops = encodingOps2.utf8;
  } else {
    ops = getEncodingOps2(encoding);
  }
  if (typeof val === "string") {
    if (ops === void 0) {
      throw new codes4.ERR_UNKNOWN_ENCODING(encoding);
    }
    return ops.indexOf(buffer, val, byteOffset, dir);
  }
  if (isUint8Array4(val)) {
    const encodingVal = ops === void 0 ? encodingsMap2.utf8 : ops.encodingVal;
    return indexOfBuffer2(buffer, val, byteOffset, encodingVal, dir);
  }
  throw new codes4.ERR_INVALID_ARG_TYPE("value", [
    "number",
    "string",
    "Buffer",
    "Uint8Array"
  ], val);
}
function fromArrayBuffer2(obj, byteOffset, length2) {
  if (byteOffset === void 0) {
    byteOffset = 0;
  } else {
    byteOffset = +byteOffset;
    if (Number.isNaN(byteOffset)) {
      byteOffset = 0;
    }
  }
  const maxLength = obj.byteLength - byteOffset;
  if (maxLength < 0) {
    throw new codes4.ERR_BUFFER_OUT_OF_BOUNDS("offset");
  }
  if (length2 === void 0) {
    length2 = maxLength;
  } else {
    length2 = +length2;
    if (length2 > 0) {
      if (length2 > maxLength) {
        throw new codes4.ERR_BUFFER_OUT_OF_BOUNDS("length");
      }
    } else {
      length2 = 0;
    }
  }
  const buffer = new Uint8Array(obj, byteOffset, length2);
  Object.setPrototypeOf(buffer, Buffer3.prototype);
  return buffer;
}
function _utf8Slice2(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray2(res);
}
function decodeCodePointsArray2(codePoints) {
  const len = codePoints.length;
  if (len <= 4096) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = "";
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH2));
  }
  return res;
}
function _latin1Slice2(buf, start, end) {
  let ret = "";
  end = Math.min(buf.length, end);
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function _hexSlice2(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0) {
    start = 0;
  }
  if (!end || end < 0 || end > len) {
    end = len;
  }
  let out = "";
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable2[buf[i]];
  }
  return out;
}
function wrtBigUInt64LE2(buf, value, offset, min2, max) {
  checkIntBI2(value, min2, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}
function wrtBigUInt64BE2(buf, value, offset, min2, max) {
  checkIntBI2(value, min2, max, buf, offset, 7);
  let lo = Number(value & BigInt(4294967295));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(4294967295));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}
function checkBounds12(buf, offset, byteLength22) {
  validateNumber2(offset, "offset");
  if (buf[offset] === void 0 || buf[offset + byteLength22] === void 0) {
    boundsError2(offset, buf.length - (byteLength22 + 1));
  }
}
function checkIntBI2(value, min2, max, buf, offset, byteLength22) {
  if (value > max || value < min2) {
    const n = typeof min2 === "bigint" ? "n" : "";
    let range;
    if (byteLength22 > 3) {
      if (min2 === 0 || min2 === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength22 + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength22 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength22 + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min2}${n} and <= ${max}${n}`;
    }
    throw new codes4.ERR_OUT_OF_RANGE("value", range, value);
  }
  checkBounds12(buf, offset, byteLength22);
}
function utf8ToBytes2(string, units) {
  units = units || Infinity;
  let codePoint;
  const length2 = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length2; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        } else if (i + 1 === length2) {
          if ((units -= 3) > -1) {
            bytes.push(239, 191, 189);
          }
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1) {
          bytes.push(239, 191, 189);
        }
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) {
        bytes.push(239, 191, 189);
      }
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0) {
        break;
      }
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0) {
        break;
      }
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0) {
        break;
      }
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0) {
        break;
      }
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function blitBuffer2(src, dst, offset, byteLength22) {
  let i;
  const length2 = byteLength22 === void 0 ? src.length : byteLength22;
  for (i = 0; i < length2; ++i) {
    if (i + offset >= dst.length || i >= src.length) {
      break;
    }
    dst[i + offset] = src[i];
  }
  return i;
}
function isInstance2(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function defineBigIntMethod2(fn) {
  return typeof BigInt === "undefined" ? BufferBigIntNotDefined2 : fn;
}
function BufferBigIntNotDefined2() {
  throw new Error("BigInt not supported");
}
function getSystemErrorName2(code) {
  if (typeof code !== "number") {
    throw new codes4.ERR_INVALID_ARG_TYPE("err", "number", code);
  }
  if (code >= 0 || !NumberIsSafeInteger(code)) {
    throw new codes4.ERR_OUT_OF_RANGE("err", "a negative integer", code);
  }
  return errorMap2.get(code)?.[0];
}
function addNumericalSeparator3(val) {
  let res = "";
  let i = val.length;
  const start = val[0] === "-" ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`;
}
function uvErrmapGet2(name) {
  return errorMap2.get(name);
}
function makeSystemErrorWithCode2(key, msgPrfix) {
  return class NodeError extends NodeSystemError2 {
    constructor(ctx) {
      super(key, ctx, msgPrfix);
    }
  };
}
function createInvalidArgType2(name, expected) {
  expected = Array.isArray(expected) ? expected : [
    expected
  ];
  let msg = "The ";
  if (name.endsWith(" argument")) {
    msg += `${name} `;
  } else {
    const type = name.includes(".") ? "property" : "argument";
    msg += `"${name}" ${type} `;
  }
  msg += "must be ";
  const types2 = [];
  const instances = [];
  const other = [];
  for (const value of expected) {
    if (kTypes3.includes(value)) {
      types2.push(value.toLocaleLowerCase());
    } else if (classRegExp1.test(value)) {
      instances.push(value);
    } else {
      other.push(value);
    }
  }
  if (instances.length > 0) {
    const pos = types2.indexOf("object");
    if (pos !== -1) {
      types2.splice(pos, 1);
      instances.push("Object");
    }
  }
  if (types2.length > 0) {
    if (types2.length > 2) {
      const last = types2.pop();
      msg += `one of type ${types2.join(", ")}, or ${last}`;
    } else if (types2.length === 2) {
      msg += `one of type ${types2[0]} or ${types2[1]}`;
    } else {
      msg += `of type ${types2[0]}`;
    }
    if (instances.length > 0 || other.length > 0) {
      msg += " or ";
    }
  }
  if (instances.length > 0) {
    if (instances.length > 2) {
      const last1 = instances.pop();
      msg += `an instance of ${instances.join(", ")}, or ${last1}`;
    } else {
      msg += `an instance of ${instances[0]}`;
      if (instances.length === 2) {
        msg += ` or ${instances[1]}`;
      }
    }
    if (other.length > 0) {
      msg += " or ";
    }
  }
  if (other.length > 0) {
    if (other.length > 2) {
      const last2 = other.pop();
      msg += `one of ${other.join(", ")}, or ${last2}`;
    } else if (other.length === 2) {
      msg += `one of ${other[0]} or ${other[1]}`;
    } else {
      if (other[0].toLowerCase() !== other[0]) {
        msg += "an ";
      }
      msg += `${other[0]}`;
    }
  }
  return msg;
}
function invalidArgTypeHelper2(input) {
  if (input == null) {
    return ` Received ${input}`;
  }
  if (typeof input === "function" && input.name) {
    return ` Received function ${input.name}`;
  }
  if (typeof input === "object") {
    if (input.constructor && input.constructor.name) {
      return ` Received an instance of ${input.constructor.name}`;
    }
    return ` Received ${inspect4(input, {
      depth: -1
    })}`;
  }
  let inspected = inspect4(input, {
    colors: false
  });
  if (inspected.length > 25) {
    inspected = `${inspected.slice(0, 25)}...`;
  }
  return ` Received type ${typeof input} (${inspected})`;
}
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new ERR_INVALID_ARG_TYPE11("path", [
      "string"
    ], path2);
  }
}
function isPosixPathSeparator(code) {
  return code === 47;
}
function isPathSeparator(code) {
  return isPosixPathSeparator(code) || code === 92;
}
function isWindowsDeviceRoot(code) {
  return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
function normalizeString(path2, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0, len = path2.length; i <= len; ++i) {
    if (i < len)
      code = path2.charCodeAt(i);
    else if (isPathSeparator2(code))
      break;
    else
      code = CHAR_FORWARD_SLASH1;
    if (isPathSeparator2(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path2.slice(lastSlash + 1, i);
        else
          res = path2.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep3, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base2 = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base2;
  if (dir === pathObject.root)
    return dir + base2;
  return dir + sep3 + base2;
}
function encodeWhitespace(string) {
  return string.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}
function resolve(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path2;
    const { Deno: Deno12 } = globalThis;
    if (i >= 0) {
      path2 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno12?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path2 = Deno12.cwd();
    } else {
      if (typeof Deno12?.env?.get !== "function" || typeof Deno12?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path2 = Deno12.cwd();
      if (path2 === void 0 || path2.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path2 = `${resolvedDevice}\\`;
      }
    }
    assertPath(path2);
    const len = path2.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute3 = false;
    const code = path2.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code)) {
        isAbsolute3 = true;
        if (isPathSeparator(path2.charCodeAt(1))) {
          let j = 2;
          let last = j;
          for (; j < len; ++j) {
            if (isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            const firstPart = path2.slice(last, j);
            last = j;
            for (; j < len; ++j) {
              if (!isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last) {
              last = j;
              for (; j < len; ++j) {
                if (isPathSeparator(path2.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path2.slice(last)}`;
                rootEnd = j;
              } else if (j !== last) {
                device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code)) {
        if (path2.charCodeAt(1) === 58) {
          device = path2.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path2.charCodeAt(2))) {
              isAbsolute3 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code)) {
      rootEnd = 1;
      isAbsolute3 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path2.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute3;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute3 = false;
  const code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute3 = true;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path2.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          const firstPart = path2.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path2.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === 58) {
        device = path2.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2))) {
            isAbsolute3 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(path2.slice(rootEnd), !isAbsolute3, "\\", isPathSeparator);
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute3)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path2.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute3) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    } else if (tail.length > 0) {
      return tail;
    } else {
      return "";
    }
  } else if (isAbsolute3) {
    if (tail.length > 0)
      return `${device}\\${tail}`;
    else
      return `${device}\\`;
  } else if (tail.length > 0) {
    return device + tail;
  } else {
    return device;
  }
}
function isAbsolute(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return false;
  const code = path2.charCodeAt(0);
  if (isPathSeparator(code)) {
    return true;
  } else if (isWindowsDeviceRoot(code)) {
    if (len > 2 && path2.charCodeAt(1) === 58) {
      if (isPathSeparator(path2.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join1(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path2 = paths[i];
    assertPath(path2);
    if (path2.length > 0) {
      if (joined === void 0)
        joined = firstPart = path2;
      else
        joined += `\\${path2}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert3(firstPart != null);
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize(joined);
}
function relative(from22, to) {
  assertPath(from22);
  assertPath(to);
  if (from22 === to)
    return "";
  const fromOrig = resolve(from22);
  const toOrig = resolve(to);
  if (fromOrig === toOrig)
    return "";
  from22 = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from22 === to)
    return "";
  let fromStart = 0;
  let fromEnd = from22.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from22.charCodeAt(fromStart) !== 92)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from22.charCodeAt(fromEnd - 1) !== 92)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== 92)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== 92)
      break;
  }
  const toLen = toEnd - toStart;
  const length2 = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length2; ++i) {
    if (i === length2) {
      if (toLen > length2) {
        if (to.charCodeAt(toStart + i) === 92) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length2) {
        if (from22.charCodeAt(fromStart + i) === 92) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from22.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === 92)
      lastCommonSep = i;
  }
  if (i !== length2 && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from22.charCodeAt(i) === 92) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === 92)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath(path2) {
  if (typeof path2 !== "string")
    return path2;
  if (path2.length === 0)
    return "";
  const resolvedPath = resolve(path2);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === 92) {
      if (resolvedPath.charCodeAt(1) === 92) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== 63 && code !== 46) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === 58 && resolvedPath.charCodeAt(2) === 92) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path2;
}
function dirname(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path2.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path2;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === 58) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return path2;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path2.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return path2.slice(0, end);
}
function basename(path2, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new ERR_INVALID_ARG_TYPE11("ext", [
      "string"
    ], ext);
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (path2.length >= 2) {
    const drive = path2.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path2.charCodeAt(1) === 58)
        start = 2;
    }
  }
  if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
    if (ext.length === path2.length && ext === path2)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path2.length - 1; i >= start; --i) {
      const code = path2.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path2.length;
    return path2.slice(start, end);
  } else {
    for (i = path2.length - 1; i >= start; --i) {
      if (isPathSeparator(path2.charCodeAt(i))) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path2.slice(start, end);
  }
}
function extname(path2) {
  assertPath(path2);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path2.length >= 2 && path2.charCodeAt(1) === 58 && isWindowsDeviceRoot(path2.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path2.length - 1; i >= start; --i) {
    const code = path2.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function format3(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new ERR_INVALID_ARG_TYPE11("pathObject", [
      "Object"
    ], pathObject);
  }
  return _format("\\", pathObject);
}
function parse(path2) {
  assertPath(path2);
  const ret = {
    root: "",
    dir: "",
    base: "",
    ext: "",
    name: ""
  };
  const len = path2.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path2.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === 58) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path2;
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path2;
          return ret;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    ret.root = ret.dir = path2;
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path2.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path2.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path2.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path2.slice(startPart, end);
    }
  } else {
    ret.name = path2.slice(startPart, startDot);
    ret.base = path2.slice(startPart, end);
    ret.ext = path2.slice(startDot, end);
  }
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path2.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path2 = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path2 = `\\\\${url.hostname}${path2}`;
  }
  return path2;
}
function toFileUrl(path2) {
  if (!isAbsolute(path2)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path2.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}
function resolve1(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path2;
    if (i >= 0)
      path2 = pathSegments[i];
    else {
      const { Deno: Deno12 } = globalThis;
      if (typeof Deno12?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path2 = Deno12.cwd();
    }
    assertPath(path2);
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH1;
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize1(path2) {
  assertPath(path2);
  if (path2.length === 0)
    return ".";
  const isAbsolute3 = path2.charCodeAt(0) === 47;
  const trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
  path2 = normalizeString(path2, !isAbsolute3, "/", isPosixPathSeparator);
  if (path2.length === 0 && !isAbsolute3)
    path2 = ".";
  if (path2.length > 0 && trailingSeparator)
    path2 += "/";
  if (isAbsolute3)
    return `/${path2}`;
  return path2;
}
function isAbsolute1(path2) {
  assertPath(path2);
  return path2.length > 0 && path2.charCodeAt(0) === 47;
}
function join2(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path2 = paths[i];
    assertPath(path2);
    if (path2.length > 0) {
      if (!joined)
        joined = path2;
      else
        joined += `/${path2}`;
    }
  }
  if (!joined)
    return ".";
  return normalize1(joined);
}
function relative1(from22, to) {
  assertPath(from22);
  assertPath(to);
  if (from22 === to)
    return "";
  from22 = resolve1(from22);
  to = resolve1(to);
  if (from22 === to)
    return "";
  let fromStart = 1;
  const fromEnd = from22.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from22.charCodeAt(fromStart) !== 47)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== 47)
      break;
  }
  const toLen = toEnd - toStart;
  const length2 = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length2; ++i) {
    if (i === length2) {
      if (toLen > length2) {
        if (to.charCodeAt(toStart + i) === 47) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length2) {
        if (from22.charCodeAt(fromStart + i) === 47) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from22.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === 47)
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from22.charCodeAt(i) === 47) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (to.charCodeAt(toStart) === 47)
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath1(path2) {
  return path2;
}
function dirname1(path2) {
  assertPath(path2);
  if (path2.length === 0)
    return ".";
  const hasRoot = path2.charCodeAt(0) === 47;
  let end = -1;
  let matchedSlash = true;
  for (let i = path2.length - 1; i >= 1; --i) {
    if (path2.charCodeAt(i) === 47) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1)
    return hasRoot ? "/" : ".";
  if (hasRoot && end === 1)
    return "//";
  return path2.slice(0, end);
}
function basename1(path2, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new ERR_INVALID_ARG_TYPE11("ext", [
      "string"
    ], ext);
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
    if (ext.length === path2.length && ext === path2)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path2.length - 1; i >= 0; --i) {
      const code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path2.length;
    return path2.slice(start, end);
  } else {
    for (i = path2.length - 1; i >= 0; --i) {
      if (path2.charCodeAt(i) === 47) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path2.slice(start, end);
  }
}
function extname1(path2) {
  assertPath(path2);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path2.length - 1; i >= 0; --i) {
    const code = path2.charCodeAt(i);
    if (code === 47) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function format1(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new ERR_INVALID_ARG_TYPE11("pathObject", [
      "Object"
    ], pathObject);
  }
  return _format("/", pathObject);
}
function parse1(path2) {
  assertPath(path2);
  const ret = {
    root: "",
    dir: "",
    base: "",
    ext: "",
    name: ""
  };
  if (path2.length === 0)
    return ret;
  const isAbsolute3 = path2.charCodeAt(0) === 47;
  let start;
  if (isAbsolute3) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path2.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path2.charCodeAt(i);
    if (code === 47) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute3) {
        ret.base = ret.name = path2.slice(1, end);
      } else {
        ret.base = ret.name = path2.slice(startPart, end);
      }
    }
  } else {
    if (startPart === 0 && isAbsolute3) {
      ret.name = path2.slice(1, startDot);
      ret.base = path2.slice(1, end);
    } else {
      ret.name = path2.slice(startPart, startDot);
      ret.base = path2.slice(startPart, end);
    }
    ret.ext = path2.slice(startDot, end);
  }
  if (startPart > 0)
    ret.dir = path2.slice(0, startPart - 1);
  else if (isAbsolute3)
    ret.dir = "/";
  return ret;
}
function fromFileUrl1(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl1(path2) {
  if (!isAbsolute1(path2)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(path2.replace(/%/g, "%25").replace(/\\/g, "%5C"));
  return url;
}
function common(paths, sep3 = SEP) {
  const [first = "", ...remaining] = paths;
  if (first === "" || remaining.length === 0) {
    return first.substring(0, first.lastIndexOf(sep3) + 1);
  }
  const parts = first.split(sep3);
  let endOfPrefix = parts.length;
  for (const path2 of remaining) {
    const compare32 = path2.split(sep3);
    for (let i = 0; i < endOfPrefix; i++) {
      if (compare32[i] !== parts[i]) {
        endOfPrefix = i;
      }
    }
    if (endOfPrefix === 0) {
      return "";
    }
  }
  const prefix = parts.slice(0, endOfPrefix).join(sep3);
  return prefix.endsWith(sep3) ? prefix : `${prefix}${sep3}`;
}
function globToRegExp(glob, { extended = true, globstar: globstarOption = true, os: os22 = osType2, caseInsensitive = false } = {}) {
  if (glob == "") {
    return /(?!)/;
  }
  const sep3 = os22 == "win32" ? "(?:\\\\|/)+" : "/+";
  const sepMaybe = os22 == "win32" ? "(?:\\\\|/)*" : "/*";
  const seps = os22 == "win32" ? [
    "\\",
    "/"
  ] : [
    "/"
  ];
  const globstar = os22 == "win32" ? "(?:[^\\\\/]*(?:\\\\|/|$)+)*" : "(?:[^/]*(?:/|$)+)*";
  const wildcard = os22 == "win32" ? "[^\\\\/]*" : "[^/]*";
  const escapePrefix = os22 == "win32" ? "`" : "\\";
  let newLength = glob.length;
  for (; newLength > 1 && seps.includes(glob[newLength - 1]); newLength--)
    ;
  glob = glob.slice(0, newLength);
  let regExpString = "";
  for (let j = 0; j < glob.length; ) {
    let segment = "";
    const groupStack = [];
    let inRange = false;
    let inEscape = false;
    let endsWithSep = false;
    let i = j;
    for (; i < glob.length && !seps.includes(glob[i]); i++) {
      if (inEscape) {
        inEscape = false;
        const escapeChars = inRange ? rangeEscapeChars : regExpEscapeChars;
        segment += escapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
        continue;
      }
      if (glob[i] == escapePrefix) {
        inEscape = true;
        continue;
      }
      if (glob[i] == "[") {
        if (!inRange) {
          inRange = true;
          segment += "[";
          if (glob[i + 1] == "!") {
            i++;
            segment += "^";
          } else if (glob[i + 1] == "^") {
            i++;
            segment += "\\^";
          }
          continue;
        } else if (glob[i + 1] == ":") {
          let k = i + 1;
          let value = "";
          while (glob[k + 1] != null && glob[k + 1] != ":") {
            value += glob[k + 1];
            k++;
          }
          if (glob[k + 1] == ":" && glob[k + 2] == "]") {
            i = k + 2;
            if (value == "alnum")
              segment += "\\dA-Za-z";
            else if (value == "alpha")
              segment += "A-Za-z";
            else if (value == "ascii")
              segment += "\0-\x7F";
            else if (value == "blank")
              segment += "	 ";
            else if (value == "cntrl")
              segment += "\0-\x7F";
            else if (value == "digit")
              segment += "\\d";
            else if (value == "graph")
              segment += "!-~";
            else if (value == "lower")
              segment += "a-z";
            else if (value == "print")
              segment += " -~";
            else if (value == "punct") {
              segment += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_\u2018{|}~`;
            } else if (value == "space")
              segment += "\\s\v";
            else if (value == "upper")
              segment += "A-Z";
            else if (value == "word")
              segment += "\\w";
            else if (value == "xdigit")
              segment += "\\dA-Fa-f";
            continue;
          }
        }
      }
      if (glob[i] == "]" && inRange) {
        inRange = false;
        segment += "]";
        continue;
      }
      if (inRange) {
        if (glob[i] == "\\") {
          segment += `\\\\`;
        } else {
          segment += glob[i];
        }
        continue;
      }
      if (glob[i] == ")" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
        segment += ")";
        const type = groupStack.pop();
        if (type == "!") {
          segment += wildcard;
        } else if (type != "@") {
          segment += type;
        }
        continue;
      }
      if (glob[i] == "|" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] == "+" && extended && glob[i + 1] == "(") {
        i++;
        groupStack.push("+");
        segment += "(?:";
        continue;
      }
      if (glob[i] == "@" && extended && glob[i + 1] == "(") {
        i++;
        groupStack.push("@");
        segment += "(?:";
        continue;
      }
      if (glob[i] == "?") {
        if (extended && glob[i + 1] == "(") {
          i++;
          groupStack.push("?");
          segment += "(?:";
        } else {
          segment += ".";
        }
        continue;
      }
      if (glob[i] == "!" && extended && glob[i + 1] == "(") {
        i++;
        groupStack.push("!");
        segment += "(?!";
        continue;
      }
      if (glob[i] == "{") {
        groupStack.push("BRACE");
        segment += "(?:";
        continue;
      }
      if (glob[i] == "}" && groupStack[groupStack.length - 1] == "BRACE") {
        groupStack.pop();
        segment += ")";
        continue;
      }
      if (glob[i] == "," && groupStack[groupStack.length - 1] == "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] == "*") {
        if (extended && glob[i + 1] == "(") {
          i++;
          groupStack.push("*");
          segment += "(?:";
        } else {
          const prevChar = glob[i - 1];
          let numStars = 1;
          while (glob[i + 1] == "*") {
            i++;
            numStars++;
          }
          const nextChar = glob[i + 1];
          if (globstarOption && numStars == 2 && [
            ...seps,
            void 0
          ].includes(prevChar) && [
            ...seps,
            void 0
          ].includes(nextChar)) {
            segment += globstar;
            endsWithSep = true;
          } else {
            segment += wildcard;
          }
        }
        continue;
      }
      segment += regExpEscapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
    }
    if (groupStack.length > 0 || inRange || inEscape) {
      segment = "";
      for (const c of glob.slice(j, i)) {
        segment += regExpEscapeChars.includes(c) ? `\\${c}` : c;
        endsWithSep = false;
      }
    }
    regExpString += segment;
    if (!endsWithSep) {
      regExpString += i < glob.length ? sep3 : sepMaybe;
      endsWithSep = true;
    }
    while (seps.includes(glob[i]))
      i++;
    if (!(i > j)) {
      throw new Error("Assertion failure: i > j (potential infinite loop)");
    }
    j = i;
  }
  regExpString = `^${regExpString}$`;
  return new RegExp(regExpString, caseInsensitive ? "i" : "");
}
function isGlob(str) {
  const chars = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  const regex = /\\(.)|(^!|\*|\?|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
  if (str === "") {
    return false;
  }
  let match3;
  while (match3 = regex.exec(str)) {
    if (match3[2])
      return true;
    let idx = match3.index + match3[0].length;
    const open3 = match3[1];
    const close2 = open3 ? chars[open3] : null;
    if (open3 && close2) {
      const n = str.indexOf(close2, idx);
      if (n !== -1) {
        idx = n + 1;
      }
    }
    str = str.slice(idx);
  }
  return false;
}
function normalizeGlob(glob, { globstar = false } = {}) {
  if (glob.match(/\0/g)) {
    throw new Error(`Glob contains invalid characters: "${glob}"`);
  }
  if (!globstar) {
    return normalize2(glob);
  }
  const s = SEP_PATTERN.source;
  const badParentPattern = new RegExp(`(?<=(${s}|^)\\*\\*${s})\\.\\.(?=${s}|$)`, "g");
  return normalize2(glob.replace(badParentPattern, "\0")).replace(/\0/g, "..");
}
function joinGlobs(globs, { extended = true, globstar = false } = {}) {
  if (!globstar || globs.length == 0) {
    return join3(...globs);
  }
  if (globs.length === 0)
    return ".";
  let joined;
  for (const glob of globs) {
    const path2 = glob;
    if (path2.length > 0) {
      if (!joined)
        joined = path2;
      else
        joined += `${SEP}${path2}`;
    }
  }
  if (!joined)
    return ".";
  return normalizeGlob(joined, {
    extended,
    globstar
  });
}
function fileURLToPath(path2) {
  if (typeof path2 === "string")
    path2 = new URL(path2);
  else if (!(path2 instanceof URL)) {
    throw new ERR_INVALID_ARG_TYPE11("path", [
      "string",
      "URL"
    ], path2);
  }
  if (path2.protocol !== "file:") {
    throw new ERR_INVALID_URL_SCHEME("file");
  }
  return isWindows ? getPathFromURLWin(path2) : getPathFromURLPosix(path2);
}
function getPathFromURLWin(url) {
  const hostname = url.hostname;
  let pathname = url.pathname;
  for (let n = 0; n < pathname.length; n++) {
    if (pathname[n] === "%") {
      const third = pathname.codePointAt(n + 2) | 32;
      if (pathname[n + 1] === "2" && third === 102 || pathname[n + 1] === "5" && third === 99) {
        throw new ERR_INVALID_FILE_URL_PATH("must not include encoded \\ or / characters");
      }
    }
  }
  pathname = pathname.replace(forwardSlashRegEx, "\\");
  pathname = decodeURIComponent(pathname);
  if (hostname !== "") {
    return `\\\\${hostname}${pathname}`;
  } else {
    const letter = pathname.codePointAt(1) | 32;
    const sep3 = pathname[2];
    if (letter < 97 || letter > 122 || sep3 !== ":") {
      throw new ERR_INVALID_FILE_URL_PATH("must be absolute");
    }
    return pathname.slice(1);
  }
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    throw new ERR_INVALID_FILE_URL_HOST(osType2);
  }
  const pathname = url.pathname;
  for (let n = 0; n < pathname.length; n++) {
    if (pathname[n] === "%") {
      const third = pathname.codePointAt(n + 2) | 32;
      if (pathname[n + 1] === "2" && third === 102) {
        throw new ERR_INVALID_FILE_URL_PATH("must not include encoded / characters");
      }
    }
  }
  return decodeURIComponent(pathname);
}
var codes4, _toString3, _isObjectLike3, _isFunctionLike3, __default2, mod2, kKeyObject2, kKeyType2, _getTypedArrayToStringTag3, isDate12, isArgumentsObject12, isBigIntObject12, isBooleanObject12, isNumberObject12, isStringObject12, isSymbolObject12, isNativeError12, isRegExp12, isAsyncFunction12, isGeneratorFunction12, isGeneratorObject12, isPromise12, isMap12, isSet12, isMapIterator12, isSetIterator12, isWeakMap12, isWeakSet12, isArrayBuffer12, isDataView12, isSharedArrayBuffer12, isModuleNamespaceObject12, isAnyArrayBuffer12, isBoxedPrimitive12, mod1, validateBuffer4, validateObject3, validateCallback, validateFunction4, kEnumerableProperty3, kCustomPromisifiedSymbol4, kCustomPromisifyArgsSymbol3, core, _exiting, kSize, kMask, FixedCircularBuffer, FixedQueue, queue, State, WorP, F, MuxAsyncIterator, Deno1, DiffType, AssertionError2, DenoStdInternalError, isNumericLookup2, kObjectType, kArrayExtrasType, kRejected, meta, isUndetectableObject, strEscapeSequencesRegExp, strEscapeSequencesReplacer, strEscapeSequencesRegExpSingle, strEscapeSequencesReplacerSingle, keyStrRegExp, numberRegExp, nodeModulesRegExp, classRegExp3, stripCommentsRegExp, inspectDefaultOptions2, customInspectSymbol3, defaultFG, defaultBG, escapeFn, builtInObjects, hexSlice2, colorRegExp, ansiPattern, ansi, isFullWidthCodePoint, isZeroWidthCodePoint, debugImpls, debugEnv, osType2, isWindows, os3, codeToErrorWindows2, errorToCodeWindows2, codeToErrorDarwin2, errorToCodeDarwin2, codeToErrorLinux2, errorToCodeLinux2, errorMap2, codeMap2, Encodings2, encodings2, base64abc2, INVALID_BASE64_RE2, utf8Encoder2, float32Array2, uInt8Float32Array2, float64Array2, uInt8Float64Array2, bigEndian2, encodingsMap2, encodingOps2, kMaxLength2, MAX_UINT322, customInspectSymbol1, INSPECT_MAX_BYTES2, MAX_ARGUMENTS_LENGTH2, hexSliceLookupTable2, valueType, NumberIsSafeInteger, ENOTDIR2, ENOENT2, kIsNodeError3, classRegExp1, kTypes3, captureLargerStackTrace3, uvUnmappedError2, NodeErrorAbstraction2, NodeError2, NodeRangeError2, NodeTypeError2, NodeSystemError2, ERR_INVALID_ARG_TYPE_RANGE2, ERR_INVALID_ARG_TYPE11, ERR_INVALID_ARG_VALUE_RANGE2, ERR_INVALID_ARG_VALUE6, ERR_OUT_OF_RANGE5, ERR_BUFFER_OUT_OF_BOUNDS2, ERR_INVALID_CALLBACK, ERR_INVALID_FILE_URL_HOST, ERR_INVALID_FILE_URL_PATH, ERR_IPC_CHANNEL_CLOSED2, ERR_SOCKET_BAD_PORT3, ERR_UNKNOWN_ENCODING3, ERR_INVALID_URL_SCHEME, CHAR_FORWARD_SLASH1, WHITESPACE_ENCODINGS, sep, delimiter, __default12, mod22, sep1, delimiter1, __default22, mod3, SEP, SEP_PATTERN, path, join3, normalize2, regExpEscapeChars, rangeEscapeChars, path1, basename2, delimiter2, dirname2, extname2, format22, fromFileUrl22, isAbsolute2, join4, normalize3, parse2, relative2, resolve2, sep2, toFileUrl2, toNamespacedPath2, mod4, baseMinusTMin, hexTable, isHexTable, noEscape, unhexTable, forwardSlashRegEx, noEscapeAuth;
var init_url_deno = __esm({
  "../../node/url/lib/esm/url.deno.js"() {
    codes4 = {};
    _toString3 = Object.prototype.toString;
    _isObjectLike3 = (value) => value !== null && typeof value === "object";
    _isFunctionLike3 = (value) => value !== null && typeof value === "function";
    __default2 = {
      isAsyncFunction: isAsyncFunction6,
      isGeneratorFunction: isGeneratorFunction5,
      isAnyArrayBuffer: isAnyArrayBuffer5,
      isArrayBuffer: isArrayBuffer5,
      isArgumentsObject: isArgumentsObject5,
      isBoxedPrimitive: isBoxedPrimitive5,
      isDataView: isDataView5,
      isMap: isMap5,
      isMapIterator: isMapIterator5,
      isModuleNamespaceObject: isModuleNamespaceObject5,
      isNativeError: isNativeError5,
      isPromise: isPromise6,
      isSet: isSet5,
      isSetIterator: isSetIterator5,
      isWeakMap: isWeakMap5,
      isWeakSet: isWeakSet5,
      isRegExp: isRegExp6,
      isDate: isDate5,
      isStringObject: isStringObject5,
      isNumberObject: isNumberObject5,
      isBooleanObject: isBooleanObject5,
      isBigIntObject: isBigIntObject5
    };
    mod2 = {
      isAnyArrayBuffer: isAnyArrayBuffer5,
      isArgumentsObject: isArgumentsObject5,
      isArrayBuffer: isArrayBuffer5,
      isAsyncFunction: isAsyncFunction6,
      isBooleanObject: isBooleanObject5,
      isBoxedPrimitive: isBoxedPrimitive5,
      isDataView: isDataView5,
      isDate: isDate5,
      isGeneratorFunction: isGeneratorFunction5,
      isGeneratorObject: isGeneratorObject5,
      isMap: isMap5,
      isMapIterator: isMapIterator5,
      isModuleNamespaceObject: isModuleNamespaceObject5,
      isNativeError: isNativeError5,
      isNumberObject: isNumberObject5,
      isBigIntObject: isBigIntObject5,
      isPromise: isPromise6,
      isRegExp: isRegExp6,
      isSet: isSet5,
      isSetIterator: isSetIterator5,
      isSharedArrayBuffer: isSharedArrayBuffer5,
      isStringObject: isStringObject5,
      isSymbolObject: isSymbolObject5,
      isWeakMap: isWeakMap5,
      isWeakSet: isWeakSet5,
      default: __default2
    };
    Symbol("kHandle");
    kKeyObject2 = Symbol("kKeyObject");
    kKeyType2 = Symbol("kKeyType");
    _getTypedArrayToStringTag3 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get;
    ({ isDate: isDate12, isArgumentsObject: isArgumentsObject12, isBigIntObject: isBigIntObject12, isBooleanObject: isBooleanObject12, isNumberObject: isNumberObject12, isStringObject: isStringObject12, isSymbolObject: isSymbolObject12, isNativeError: isNativeError12, isRegExp: isRegExp12, isAsyncFunction: isAsyncFunction12, isGeneratorFunction: isGeneratorFunction12, isGeneratorObject: isGeneratorObject12, isPromise: isPromise12, isMap: isMap12, isSet: isSet12, isMapIterator: isMapIterator12, isSetIterator: isSetIterator12, isWeakMap: isWeakMap12, isWeakSet: isWeakSet12, isArrayBuffer: isArrayBuffer12, isDataView: isDataView12, isSharedArrayBuffer: isSharedArrayBuffer12, isModuleNamespaceObject: isModuleNamespaceObject12, isAnyArrayBuffer: isAnyArrayBuffer12, isBoxedPrimitive: isBoxedPrimitive12 } = mod2);
    mod1 = {
      isCryptoKey: isCryptoKey2,
      isKeyObject: isKeyObject2,
      isArrayBufferView: isArrayBufferView5,
      isBigInt64Array: isBigInt64Array2,
      isBigUint64Array: isBigUint64Array2,
      isFloat32Array: isFloat32Array3,
      isFloat64Array: isFloat64Array3,
      isInt8Array: isInt8Array2,
      isInt16Array: isInt16Array2,
      isInt32Array: isInt32Array2,
      isTypedArray: isTypedArray3,
      isUint8Array: isUint8Array4,
      isUint8ClampedArray: isUint8ClampedArray2,
      isUint16Array: isUint16Array2,
      isUint32Array: isUint32Array2,
      isDate: isDate12,
      isArgumentsObject: isArgumentsObject12,
      isBigIntObject: isBigIntObject12,
      isBooleanObject: isBooleanObject12,
      isNumberObject: isNumberObject12,
      isStringObject: isStringObject12,
      isSymbolObject: isSymbolObject12,
      isNativeError: isNativeError12,
      isRegExp: isRegExp12,
      isAsyncFunction: isAsyncFunction12,
      isGeneratorFunction: isGeneratorFunction12,
      isGeneratorObject: isGeneratorObject12,
      isPromise: isPromise12,
      isMap: isMap12,
      isSet: isSet12,
      isMapIterator: isMapIterator12,
      isSetIterator: isSetIterator12,
      isWeakMap: isWeakMap12,
      isWeakSet: isWeakSet12,
      isArrayBuffer: isArrayBuffer12,
      isDataView: isDataView12,
      isSharedArrayBuffer: isSharedArrayBuffer12,
      isModuleNamespaceObject: isModuleNamespaceObject12,
      isAnyArrayBuffer: isAnyArrayBuffer12,
      isBoxedPrimitive: isBoxedPrimitive12
    };
    validateBuffer4 = hideStackFrames3((buffer, name = "buffer") => {
      if (!isArrayBufferView5(buffer)) {
        throw new codes4.ERR_INVALID_ARG_TYPE(name, [
          "Buffer",
          "TypedArray",
          "DataView"
        ], buffer);
      }
    });
    hideStackFrames3((value, name, min2 = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
      if (typeof value !== "number") {
        throw new codes4.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
      if (!Number.isInteger(value)) {
        throw new codes4.ERR_OUT_OF_RANGE(name, "an integer", value);
      }
      if (value < min2 || value > max) {
        throw new codes4.ERR_OUT_OF_RANGE(name, `>= ${min2} && <= ${max}`, value);
      }
    });
    validateObject3 = hideStackFrames3((value, name, options) => {
      const useDefaultOptions = options == null;
      const allowArray = useDefaultOptions ? false : options.allowArray;
      const allowFunction = useDefaultOptions ? false : options.allowFunction;
      const nullable = useDefaultOptions ? false : options.nullable;
      if (!nullable && value === null || !allowArray && Array.isArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
        throw new codes4.ERR_INVALID_ARG_TYPE(name, "Object", value);
      }
    });
    hideStackFrames3((value, name, min2 = -2147483648, max = 2147483647) => {
      if (!isInt323(value)) {
        if (typeof value !== "number") {
          throw new codes4.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
          throw new codes4.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        throw new codes4.ERR_OUT_OF_RANGE(name, `>= ${min2} && <= ${max}`, value);
      }
      if (value < min2 || value > max) {
        throw new codes4.ERR_OUT_OF_RANGE(name, `>= ${min2} && <= ${max}`, value);
      }
    });
    hideStackFrames3((value, name, positive) => {
      if (!isUint323(value)) {
        if (typeof value !== "number") {
          throw new codes4.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
          throw new codes4.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        const min2 = positive ? 1 : 0;
        throw new codes4.ERR_OUT_OF_RANGE(name, `>= ${min2} && < 4294967296`, value);
      }
      if (positive && value === 0) {
        throw new codes4.ERR_OUT_OF_RANGE(name, ">= 1 && < 4294967296", value);
      }
    });
    hideStackFrames3((value, name, oneOf) => {
      if (!Array.prototype.includes.call(oneOf, value)) {
        const allowed = Array.prototype.join.call(Array.prototype.map.call(oneOf, (v) => typeof v === "string" ? `'${v}'` : String(v)), ", ");
        const reason = "must be one of: " + allowed;
        throw new codes4.ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    validateCallback = hideStackFrames3((callback) => {
      if (typeof callback !== "function") {
        throw new codes4.ERR_INVALID_CALLBACK(callback);
      }
    });
    hideStackFrames3((signal, name) => {
      if (signal !== void 0 && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new codes4.ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
      }
    });
    validateFunction4 = hideStackFrames3((value, name) => {
      if (typeof value !== "function") {
        throw new codes4.ERR_INVALID_ARG_TYPE(name, "Function", value);
      }
    });
    hideStackFrames3((value, name, minLength = 0) => {
      if (!Array.isArray(value)) {
        throw new codes4.ERR_INVALID_ARG_TYPE(name, "Array", value);
      }
      if (value.length < minLength) {
        const reason = `must be longer than ${minLength}`;
        throw new codes4.ERR_INVALID_ARG_VALUE(name, value, reason);
      }
    });
    Symbol.for("nodejs.util.inspect.custom");
    kEnumerableProperty3 = /* @__PURE__ */ Object.create(null);
    kEnumerableProperty3.enumerable = true;
    kCustomPromisifiedSymbol4 = Symbol.for("nodejs.util.promisify.custom");
    kCustomPromisifyArgsSymbol3 = Symbol.for("nodejs.util.promisify.customArgs");
    promisify6.custom = kCustomPromisifiedSymbol4;
    if (false) {
      core = false;
    } else {
      core = {
        setNextTickCallback: void 0,
        evalContext(_code, _filename) {
          throw new Error("false.evalContext is not supported in this environment");
        },
        encode(chunk) {
          return new TextEncoder().encode(chunk);
        },
        eventLoopHasMoreWork() {
          return false;
        }
      };
    }
    _exiting = false;
    kSize = 2048;
    kMask = 2048 - 1;
    FixedCircularBuffer = class {
      constructor() {
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize);
        this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & kMask) === this.bottom;
      }
      push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
      }
      shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === void 0) {
          return null;
        }
        this.list[this.bottom] = void 0;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
      }
    };
    FixedQueue = class {
      constructor() {
        this.head = this.tail = new FixedCircularBuffer();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(data) {
        if (this.head.isFull()) {
          this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
      }
      shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
          this.tail = tail.next;
        }
        return next;
      }
    };
    queue = new FixedQueue();
    if (typeof core.setNextTickCallback !== "undefined") {
      let runNextTicks = function() {
        if (!core.hasTickScheduled()) {
          core.runMicrotasks();
        }
        if (!core.hasTickScheduled()) {
          return true;
        }
        processTicksAndRejections();
        return true;
      }, __nextTickNative = function(callback, ...args) {
        validateCallback(callback);
        if (_exiting) {
          return;
        }
        let args_;
        switch (args.length) {
          case 0:
            break;
          case 1:
            args_ = [
              args[0]
            ];
            break;
          case 2:
            args_ = [
              args[0],
              args[1]
            ];
            break;
          case 3:
            args_ = [
              args[0],
              args[1],
              args[2]
            ];
            break;
          default:
            args_ = new Array(args.length);
            for (let i = 0; i < args.length; i++) {
              args_[i] = args[i];
            }
        }
        if (queue.isEmpty()) {
          core.setHasTickScheduled(true);
        }
        const tickObject = {
          callback,
          args: args_
        };
        queue.push(tickObject);
      };
      core.setNextTickCallback(processTicksAndRejections);
      core.setMacrotaskCallback(runNextTicks);
      __nextTickNative;
    } else {
      let __nextTickQueueMicrotask = function(callback, ...args) {
        if (args) {
          queueMicrotask(() => callback.call(this, ...args));
        } else {
          queueMicrotask(callback);
        }
      };
      __nextTickQueueMicrotask;
    }
    (function(State2) {
      State2[State2["PASSTHROUGH"] = 0] = "PASSTHROUGH";
      State2[State2["PERCENT"] = 1] = "PERCENT";
      State2[State2["POSITIONAL"] = 2] = "POSITIONAL";
      State2[State2["PRECISION"] = 3] = "PRECISION";
      State2[State2["WIDTH"] = 4] = "WIDTH";
    })(State || (State = {}));
    (function(WorP2) {
      WorP2[WorP2["WIDTH"] = 0] = "WIDTH";
      WorP2[WorP2["PRECISION"] = 1] = "PRECISION";
    })(WorP || (WorP = {}));
    (function(F2) {
      F2[F2["sign"] = 1] = "sign";
      F2[F2["mantissa"] = 2] = "mantissa";
      F2[F2["fractional"] = 3] = "fractional";
      F2[F2["esign"] = 4] = "esign";
      F2[F2["exponent"] = 5] = "exponent";
    })(F || (F = {}));
    MuxAsyncIterator = class {
      #iteratorCount = 0;
      #yields = [];
      #throws = [];
      #signal = deferred();
      add(iterable) {
        ++this.#iteratorCount;
        this.#callIteratorNext(iterable[Symbol.asyncIterator]());
      }
      async #callIteratorNext(iterator) {
        try {
          const { value, done } = await iterator.next();
          if (done) {
            --this.#iteratorCount;
          } else {
            this.#yields.push({
              iterator,
              value
            });
          }
        } catch (e) {
          this.#throws.push(e);
        }
        this.#signal.resolve();
      }
      async *iterate() {
        while (this.#iteratorCount > 0) {
          await this.#signal;
          for (let i = 0; i < this.#yields.length; i++) {
            const { iterator, value } = this.#yields[i];
            yield value;
            this.#callIteratorNext(iterator);
          }
          if (this.#throws.length) {
            for (const e of this.#throws) {
              throw e;
            }
            this.#throws.length = 0;
          }
          this.#yields.length = 0;
          this.#signal = deferred();
        }
      }
      [Symbol.asyncIterator]() {
        return this.iterate();
      }
    };
    ({ Deno: Deno1 } = globalThis);
    typeof Deno1?.noColor === "boolean" ? Deno1.noColor : true;
    new RegExp([
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|"), "g");
    (function(DiffType2) {
      DiffType2["removed"] = "removed";
      DiffType2["common"] = "common";
      DiffType2["added"] = "added";
    })(DiffType || (DiffType = {}));
    AssertionError2 = class extends Error {
      constructor(message) {
        super(message);
        this.name = "AssertionError";
      }
    };
    DenoStdInternalError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "DenoStdInternalError";
      }
    };
    isNumericLookup2 = {};
    kObjectType = 0;
    kArrayExtrasType = 2;
    kRejected = 2;
    meta = [
      "\\x00",
      "\\x01",
      "\\x02",
      "\\x03",
      "\\x04",
      "\\x05",
      "\\x06",
      "\\x07",
      "\\b",
      "\\t",
      "\\n",
      "\\x0B",
      "\\f",
      "\\r",
      "\\x0E",
      "\\x0F",
      "\\x10",
      "\\x11",
      "\\x12",
      "\\x13",
      "\\x14",
      "\\x15",
      "\\x16",
      "\\x17",
      "\\x18",
      "\\x19",
      "\\x1A",
      "\\x1B",
      "\\x1C",
      "\\x1D",
      "\\x1E",
      "\\x1F",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\'",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\x7F",
      "\\x80",
      "\\x81",
      "\\x82",
      "\\x83",
      "\\x84",
      "\\x85",
      "\\x86",
      "\\x87",
      "\\x88",
      "\\x89",
      "\\x8A",
      "\\x8B",
      "\\x8C",
      "\\x8D",
      "\\x8E",
      "\\x8F",
      "\\x90",
      "\\x91",
      "\\x92",
      "\\x93",
      "\\x94",
      "\\x95",
      "\\x96",
      "\\x97",
      "\\x98",
      "\\x99",
      "\\x9A",
      "\\x9B",
      "\\x9C",
      "\\x9D",
      "\\x9E",
      "\\x9F"
    ];
    isUndetectableObject = (v) => typeof v === "undefined" && v !== void 0;
    strEscapeSequencesRegExp = /[\x00-\x1f\x27\x5c\x7f-\x9f]/;
    strEscapeSequencesReplacer = /[\x00-\x1f\x27\x5c\x7f-\x9f]/g;
    strEscapeSequencesRegExpSingle = /[\x00-\x1f\x5c\x7f-\x9f]/;
    strEscapeSequencesReplacerSingle = /[\x00-\x1f\x5c\x7f-\x9f]/g;
    keyStrRegExp = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
    numberRegExp = /^(0|[1-9][0-9]*)$/;
    nodeModulesRegExp = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g;
    classRegExp3 = /^(\s+[^(]*?)\s*{/;
    stripCommentsRegExp = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g;
    inspectDefaultOptions2 = {
      showHidden: false,
      depth: 2,
      colors: false,
      customInspect: true,
      showProxy: false,
      maxArrayLength: 100,
      maxStringLength: 1e4,
      breakLength: 80,
      compact: 3,
      sorted: false,
      getters: false
    };
    customInspectSymbol3 = Symbol.for("nodejs.util.inspect.custom");
    inspect4.custom = customInspectSymbol3;
    Object.defineProperty(inspect4, "defaultOptions", {
      get() {
        return inspectDefaultOptions2;
      },
      set(options) {
        validateObject3(options, "options");
        return Object.assign(inspectDefaultOptions2, options);
      }
    });
    defaultFG = 39;
    defaultBG = 49;
    inspect4.colors = Object.assign(/* @__PURE__ */ Object.create(null), {
      reset: [
        0,
        0
      ],
      bold: [
        1,
        22
      ],
      dim: [
        2,
        22
      ],
      italic: [
        3,
        23
      ],
      underline: [
        4,
        24
      ],
      blink: [
        5,
        25
      ],
      inverse: [
        7,
        27
      ],
      hidden: [
        8,
        28
      ],
      strikethrough: [
        9,
        29
      ],
      doubleunderline: [
        21,
        24
      ],
      black: [
        30,
        defaultFG
      ],
      red: [
        31,
        defaultFG
      ],
      green: [
        32,
        defaultFG
      ],
      yellow: [
        33,
        defaultFG
      ],
      blue: [
        34,
        defaultFG
      ],
      magenta: [
        35,
        defaultFG
      ],
      cyan: [
        36,
        defaultFG
      ],
      white: [
        37,
        defaultFG
      ],
      bgBlack: [
        40,
        defaultBG
      ],
      bgRed: [
        41,
        defaultBG
      ],
      bgGreen: [
        42,
        defaultBG
      ],
      bgYellow: [
        43,
        defaultBG
      ],
      bgBlue: [
        44,
        defaultBG
      ],
      bgMagenta: [
        45,
        defaultBG
      ],
      bgCyan: [
        46,
        defaultBG
      ],
      bgWhite: [
        47,
        defaultBG
      ],
      framed: [
        51,
        54
      ],
      overlined: [
        53,
        55
      ],
      gray: [
        90,
        defaultFG
      ],
      redBright: [
        91,
        defaultFG
      ],
      greenBright: [
        92,
        defaultFG
      ],
      yellowBright: [
        93,
        defaultFG
      ],
      blueBright: [
        94,
        defaultFG
      ],
      magentaBright: [
        95,
        defaultFG
      ],
      cyanBright: [
        96,
        defaultFG
      ],
      whiteBright: [
        97,
        defaultFG
      ],
      bgGray: [
        100,
        defaultBG
      ],
      bgRedBright: [
        101,
        defaultBG
      ],
      bgGreenBright: [
        102,
        defaultBG
      ],
      bgYellowBright: [
        103,
        defaultBG
      ],
      bgBlueBright: [
        104,
        defaultBG
      ],
      bgMagentaBright: [
        105,
        defaultBG
      ],
      bgCyanBright: [
        106,
        defaultBG
      ],
      bgWhiteBright: [
        107,
        defaultBG
      ]
    });
    defineColorAlias("gray", "grey");
    defineColorAlias("gray", "blackBright");
    defineColorAlias("bgGray", "bgGrey");
    defineColorAlias("bgGray", "bgBlackBright");
    defineColorAlias("dim", "faint");
    defineColorAlias("strikethrough", "crossedout");
    defineColorAlias("strikethrough", "strikeThrough");
    defineColorAlias("strikethrough", "crossedOut");
    defineColorAlias("hidden", "conceal");
    defineColorAlias("inverse", "swapColors");
    defineColorAlias("inverse", "swapcolors");
    defineColorAlias("doubleunderline", "doubleUnderline");
    inspect4.styles = Object.assign(/* @__PURE__ */ Object.create(null), {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red",
      module: "underline"
    });
    escapeFn = (str) => meta[str.charCodeAt(0)];
    builtInObjects = new Set(Object.getOwnPropertyNames(globalThis).filter((e) => /^[A-Z][a-zA-Z0-9]+$/.test(e)));
    colorRegExp = /\u001b\[\d\d?m/g;
    ansiPattern = "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))";
    ansi = new RegExp(ansiPattern, "g");
    isFullWidthCodePoint = (code) => {
      return code >= 4352 && (code <= 4447 || code === 9001 || code === 9002 || code >= 11904 && code <= 12871 && code !== 12351 || code >= 12880 && code <= 19903 || code >= 19968 && code <= 42182 || code >= 43360 && code <= 43388 || code >= 44032 && code <= 55203 || code >= 63744 && code <= 64255 || code >= 65040 && code <= 65049 || code >= 65072 && code <= 65131 || code >= 65281 && code <= 65376 || code >= 65504 && code <= 65510 || code >= 110592 && code <= 110593 || code >= 127488 && code <= 127569 || code >= 127744 && code <= 128591 || code >= 131072 && code <= 262141);
    };
    isZeroWidthCodePoint = (code) => {
      return code <= 31 || code >= 127 && code <= 159 || code >= 768 && code <= 879 || code >= 8203 && code <= 8207 || code >= 8400 && code <= 8447 || code >= 65024 && code <= 65039 || code >= 65056 && code <= 65071 || code >= 917760 && code <= 917999;
    };
    try {
      debugEnv = process.env.NODE_DEBUG ?? "";
    } catch (error) {
      if (error instanceof Error) {
        debugEnv = "";
      } else {
        throw error;
      }
    }
    initializeDebugEnv(debugEnv);
    osType2 = (() => {
      const { Deno: Deno12 } = globalThis;
      if (typeof Deno12?.build?.os === "string") {
        return Deno12.build.os;
      }
      const { navigator } = globalThis;
      if (navigator?.appVersion?.includes?.("Win")) {
        return "win32";
      }
      return "linux";
    })();
    isWindows = osType2 === "win32";
    os3 = {
      UV_UDP_IPV6ONLY: 1,
      UV_UDP_PARTIAL: 2,
      UV_UDP_REUSEADDR: 4,
      UV_UDP_MMSG_CHUNK: 8,
      UV_UDP_MMSG_FREE: 16,
      UV_UDP_LINUX_RECVERR: 32,
      UV_UDP_RECVMMSG: 256,
      dlopen: {
        RTLD_LAZY: 1,
        RTLD_NOW: 2,
        RTLD_GLOBAL: 8,
        RTLD_LOCAL: 4
      },
      errno: {
        E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 48,
        EADDRNOTAVAIL: 49,
        EAFNOSUPPORT: 47,
        EAGAIN: 35,
        EALREADY: 37,
        EBADF: 9,
        EBADMSG: 94,
        EBUSY: 16,
        ECANCELED: 89,
        ECHILD: 10,
        ECONNABORTED: 53,
        ECONNREFUSED: 61,
        ECONNRESET: 54,
        EDEADLK: 11,
        EDESTADDRREQ: 39,
        EDOM: 33,
        EDQUOT: 69,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 65,
        EIDRM: 90,
        EILSEQ: 92,
        EINPROGRESS: 36,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 56,
        EISDIR: 21,
        ELOOP: 62,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 40,
        EMULTIHOP: 95,
        ENAMETOOLONG: 63,
        ENETDOWN: 50,
        ENETRESET: 52,
        ENETUNREACH: 51,
        ENFILE: 23,
        ENOBUFS: 55,
        ENODATA: 96,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 77,
        ENOLINK: 97,
        ENOMEM: 12,
        ENOMSG: 91,
        ENOPROTOOPT: 42,
        ENOSPC: 28,
        ENOSR: 98,
        ENOSTR: 99,
        ENOSYS: 78,
        ENOTCONN: 57,
        ENOTDIR: 20,
        ENOTEMPTY: 66,
        ENOTSOCK: 38,
        ENOTSUP: 45,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 102,
        EOVERFLOW: 84,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 100,
        EPROTONOSUPPORT: 43,
        EPROTOTYPE: 41,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ESTALE: 70,
        ETIME: 101,
        ETIMEDOUT: 60,
        ETXTBSY: 26,
        EWOULDBLOCK: 35,
        EXDEV: 18
      },
      signals: {
        SIGHUP: 1,
        SIGINT: 2,
        SIGQUIT: 3,
        SIGILL: 4,
        SIGTRAP: 5,
        SIGABRT: 6,
        SIGIOT: 6,
        SIGBUS: 10,
        SIGFPE: 8,
        SIGKILL: 9,
        SIGUSR1: 30,
        SIGSEGV: 11,
        SIGUSR2: 31,
        SIGPIPE: 13,
        SIGALRM: 14,
        SIGTERM: 15,
        SIGCHLD: 20,
        SIGCONT: 19,
        SIGSTOP: 17,
        SIGTSTP: 18,
        SIGTTIN: 21,
        SIGBREAK: 21,
        SIGTTOU: 22,
        SIGURG: 16,
        SIGXCPU: 24,
        SIGXFSZ: 25,
        SIGVTALRM: 26,
        SIGPROF: 27,
        SIGWINCH: 28,
        SIGIO: 23,
        SIGINFO: 29,
        SIGSYS: 12,
        SIGEMT: 7,
        SIGPWR: 30,
        SIGSTKFLT: 16
      },
      priority: {
        PRIORITY_LOW: 19,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_NORMAL: 0,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20
      }
    };
    os3.errno.EEXIST;
    os3.errno.ENOENT;
    codeToErrorWindows2 = [
      [
        -4093,
        [
          "E2BIG",
          "argument list too long"
        ]
      ],
      [
        -4092,
        [
          "EACCES",
          "permission denied"
        ]
      ],
      [
        -4091,
        [
          "EADDRINUSE",
          "address already in use"
        ]
      ],
      [
        -4090,
        [
          "EADDRNOTAVAIL",
          "address not available"
        ]
      ],
      [
        -4089,
        [
          "EAFNOSUPPORT",
          "address family not supported"
        ]
      ],
      [
        -4088,
        [
          "EAGAIN",
          "resource temporarily unavailable"
        ]
      ],
      [
        -3e3,
        [
          "EAI_ADDRFAMILY",
          "address family not supported"
        ]
      ],
      [
        -3001,
        [
          "EAI_AGAIN",
          "temporary failure"
        ]
      ],
      [
        -3002,
        [
          "EAI_BADFLAGS",
          "bad ai_flags value"
        ]
      ],
      [
        -3013,
        [
          "EAI_BADHINTS",
          "invalid value for hints"
        ]
      ],
      [
        -3003,
        [
          "EAI_CANCELED",
          "request canceled"
        ]
      ],
      [
        -3004,
        [
          "EAI_FAIL",
          "permanent failure"
        ]
      ],
      [
        -3005,
        [
          "EAI_FAMILY",
          "ai_family not supported"
        ]
      ],
      [
        -3006,
        [
          "EAI_MEMORY",
          "out of memory"
        ]
      ],
      [
        -3007,
        [
          "EAI_NODATA",
          "no address"
        ]
      ],
      [
        -3008,
        [
          "EAI_NONAME",
          "unknown node or service"
        ]
      ],
      [
        -3009,
        [
          "EAI_OVERFLOW",
          "argument buffer overflow"
        ]
      ],
      [
        -3014,
        [
          "EAI_PROTOCOL",
          "resolved protocol is unknown"
        ]
      ],
      [
        -3010,
        [
          "EAI_SERVICE",
          "service not available for socket type"
        ]
      ],
      [
        -3011,
        [
          "EAI_SOCKTYPE",
          "socket type not supported"
        ]
      ],
      [
        -4084,
        [
          "EALREADY",
          "connection already in progress"
        ]
      ],
      [
        -4083,
        [
          "EBADF",
          "bad file descriptor"
        ]
      ],
      [
        -4082,
        [
          "EBUSY",
          "resource busy or locked"
        ]
      ],
      [
        -4081,
        [
          "ECANCELED",
          "operation canceled"
        ]
      ],
      [
        -4080,
        [
          "ECHARSET",
          "invalid Unicode character"
        ]
      ],
      [
        -4079,
        [
          "ECONNABORTED",
          "software caused connection abort"
        ]
      ],
      [
        -4078,
        [
          "ECONNREFUSED",
          "connection refused"
        ]
      ],
      [
        -4077,
        [
          "ECONNRESET",
          "connection reset by peer"
        ]
      ],
      [
        -4076,
        [
          "EDESTADDRREQ",
          "destination address required"
        ]
      ],
      [
        -4075,
        [
          "EEXIST",
          "file already exists"
        ]
      ],
      [
        -4074,
        [
          "EFAULT",
          "bad address in system call argument"
        ]
      ],
      [
        -4036,
        [
          "EFBIG",
          "file too large"
        ]
      ],
      [
        -4073,
        [
          "EHOSTUNREACH",
          "host is unreachable"
        ]
      ],
      [
        -4072,
        [
          "EINTR",
          "interrupted system call"
        ]
      ],
      [
        -4071,
        [
          "EINVAL",
          "invalid argument"
        ]
      ],
      [
        -4070,
        [
          "EIO",
          "i/o error"
        ]
      ],
      [
        -4069,
        [
          "EISCONN",
          "socket is already connected"
        ]
      ],
      [
        -4068,
        [
          "EISDIR",
          "illegal operation on a directory"
        ]
      ],
      [
        -4067,
        [
          "ELOOP",
          "too many symbolic links encountered"
        ]
      ],
      [
        -4066,
        [
          "EMFILE",
          "too many open files"
        ]
      ],
      [
        -4065,
        [
          "EMSGSIZE",
          "message too long"
        ]
      ],
      [
        -4064,
        [
          "ENAMETOOLONG",
          "name too long"
        ]
      ],
      [
        -4063,
        [
          "ENETDOWN",
          "network is down"
        ]
      ],
      [
        -4062,
        [
          "ENETUNREACH",
          "network is unreachable"
        ]
      ],
      [
        -4061,
        [
          "ENFILE",
          "file table overflow"
        ]
      ],
      [
        -4060,
        [
          "ENOBUFS",
          "no buffer space available"
        ]
      ],
      [
        -4059,
        [
          "ENODEV",
          "no such device"
        ]
      ],
      [
        -4058,
        [
          "ENOENT",
          "no such file or directory"
        ]
      ],
      [
        -4057,
        [
          "ENOMEM",
          "not enough memory"
        ]
      ],
      [
        -4056,
        [
          "ENONET",
          "machine is not on the network"
        ]
      ],
      [
        -4035,
        [
          "ENOPROTOOPT",
          "protocol not available"
        ]
      ],
      [
        -4055,
        [
          "ENOSPC",
          "no space left on device"
        ]
      ],
      [
        -4054,
        [
          "ENOSYS",
          "function not implemented"
        ]
      ],
      [
        -4053,
        [
          "ENOTCONN",
          "socket is not connected"
        ]
      ],
      [
        -4052,
        [
          "ENOTDIR",
          "not a directory"
        ]
      ],
      [
        -4051,
        [
          "ENOTEMPTY",
          "directory not empty"
        ]
      ],
      [
        -4050,
        [
          "ENOTSOCK",
          "socket operation on non-socket"
        ]
      ],
      [
        -4049,
        [
          "ENOTSUP",
          "operation not supported on socket"
        ]
      ],
      [
        -4048,
        [
          "EPERM",
          "operation not permitted"
        ]
      ],
      [
        -4047,
        [
          "EPIPE",
          "broken pipe"
        ]
      ],
      [
        -4046,
        [
          "EPROTO",
          "protocol error"
        ]
      ],
      [
        -4045,
        [
          "EPROTONOSUPPORT",
          "protocol not supported"
        ]
      ],
      [
        -4044,
        [
          "EPROTOTYPE",
          "protocol wrong type for socket"
        ]
      ],
      [
        -4034,
        [
          "ERANGE",
          "result too large"
        ]
      ],
      [
        -4043,
        [
          "EROFS",
          "read-only file system"
        ]
      ],
      [
        -4042,
        [
          "ESHUTDOWN",
          "cannot send after transport endpoint shutdown"
        ]
      ],
      [
        -4041,
        [
          "ESPIPE",
          "invalid seek"
        ]
      ],
      [
        -4040,
        [
          "ESRCH",
          "no such process"
        ]
      ],
      [
        -4039,
        [
          "ETIMEDOUT",
          "connection timed out"
        ]
      ],
      [
        -4038,
        [
          "ETXTBSY",
          "text file is busy"
        ]
      ],
      [
        -4037,
        [
          "EXDEV",
          "cross-device link not permitted"
        ]
      ],
      [
        -4094,
        [
          "UNKNOWN",
          "unknown error"
        ]
      ],
      [
        -4095,
        [
          "EOF",
          "end of file"
        ]
      ],
      [
        -4033,
        [
          "ENXIO",
          "no such device or address"
        ]
      ],
      [
        -4032,
        [
          "EMLINK",
          "too many links"
        ]
      ],
      [
        -4031,
        [
          "EHOSTDOWN",
          "host is down"
        ]
      ],
      [
        -4030,
        [
          "EREMOTEIO",
          "remote I/O error"
        ]
      ],
      [
        -4029,
        [
          "ENOTTY",
          "inappropriate ioctl for device"
        ]
      ],
      [
        -4028,
        [
          "EFTYPE",
          "inappropriate file type or format"
        ]
      ],
      [
        -4027,
        [
          "EILSEQ",
          "illegal byte sequence"
        ]
      ]
    ];
    errorToCodeWindows2 = codeToErrorWindows2.map(([status, [error]]) => [
      error,
      status
    ]);
    codeToErrorDarwin2 = [
      [
        -7,
        [
          "E2BIG",
          "argument list too long"
        ]
      ],
      [
        -13,
        [
          "EACCES",
          "permission denied"
        ]
      ],
      [
        -48,
        [
          "EADDRINUSE",
          "address already in use"
        ]
      ],
      [
        -49,
        [
          "EADDRNOTAVAIL",
          "address not available"
        ]
      ],
      [
        -47,
        [
          "EAFNOSUPPORT",
          "address family not supported"
        ]
      ],
      [
        -35,
        [
          "EAGAIN",
          "resource temporarily unavailable"
        ]
      ],
      [
        -3e3,
        [
          "EAI_ADDRFAMILY",
          "address family not supported"
        ]
      ],
      [
        -3001,
        [
          "EAI_AGAIN",
          "temporary failure"
        ]
      ],
      [
        -3002,
        [
          "EAI_BADFLAGS",
          "bad ai_flags value"
        ]
      ],
      [
        -3013,
        [
          "EAI_BADHINTS",
          "invalid value for hints"
        ]
      ],
      [
        -3003,
        [
          "EAI_CANCELED",
          "request canceled"
        ]
      ],
      [
        -3004,
        [
          "EAI_FAIL",
          "permanent failure"
        ]
      ],
      [
        -3005,
        [
          "EAI_FAMILY",
          "ai_family not supported"
        ]
      ],
      [
        -3006,
        [
          "EAI_MEMORY",
          "out of memory"
        ]
      ],
      [
        -3007,
        [
          "EAI_NODATA",
          "no address"
        ]
      ],
      [
        -3008,
        [
          "EAI_NONAME",
          "unknown node or service"
        ]
      ],
      [
        -3009,
        [
          "EAI_OVERFLOW",
          "argument buffer overflow"
        ]
      ],
      [
        -3014,
        [
          "EAI_PROTOCOL",
          "resolved protocol is unknown"
        ]
      ],
      [
        -3010,
        [
          "EAI_SERVICE",
          "service not available for socket type"
        ]
      ],
      [
        -3011,
        [
          "EAI_SOCKTYPE",
          "socket type not supported"
        ]
      ],
      [
        -37,
        [
          "EALREADY",
          "connection already in progress"
        ]
      ],
      [
        -9,
        [
          "EBADF",
          "bad file descriptor"
        ]
      ],
      [
        -16,
        [
          "EBUSY",
          "resource busy or locked"
        ]
      ],
      [
        -89,
        [
          "ECANCELED",
          "operation canceled"
        ]
      ],
      [
        -4080,
        [
          "ECHARSET",
          "invalid Unicode character"
        ]
      ],
      [
        -53,
        [
          "ECONNABORTED",
          "software caused connection abort"
        ]
      ],
      [
        -61,
        [
          "ECONNREFUSED",
          "connection refused"
        ]
      ],
      [
        -54,
        [
          "ECONNRESET",
          "connection reset by peer"
        ]
      ],
      [
        -39,
        [
          "EDESTADDRREQ",
          "destination address required"
        ]
      ],
      [
        -17,
        [
          "EEXIST",
          "file already exists"
        ]
      ],
      [
        -14,
        [
          "EFAULT",
          "bad address in system call argument"
        ]
      ],
      [
        -27,
        [
          "EFBIG",
          "file too large"
        ]
      ],
      [
        -65,
        [
          "EHOSTUNREACH",
          "host is unreachable"
        ]
      ],
      [
        -4,
        [
          "EINTR",
          "interrupted system call"
        ]
      ],
      [
        -22,
        [
          "EINVAL",
          "invalid argument"
        ]
      ],
      [
        -5,
        [
          "EIO",
          "i/o error"
        ]
      ],
      [
        -56,
        [
          "EISCONN",
          "socket is already connected"
        ]
      ],
      [
        -21,
        [
          "EISDIR",
          "illegal operation on a directory"
        ]
      ],
      [
        -62,
        [
          "ELOOP",
          "too many symbolic links encountered"
        ]
      ],
      [
        -24,
        [
          "EMFILE",
          "too many open files"
        ]
      ],
      [
        -40,
        [
          "EMSGSIZE",
          "message too long"
        ]
      ],
      [
        -63,
        [
          "ENAMETOOLONG",
          "name too long"
        ]
      ],
      [
        -50,
        [
          "ENETDOWN",
          "network is down"
        ]
      ],
      [
        -51,
        [
          "ENETUNREACH",
          "network is unreachable"
        ]
      ],
      [
        -23,
        [
          "ENFILE",
          "file table overflow"
        ]
      ],
      [
        -55,
        [
          "ENOBUFS",
          "no buffer space available"
        ]
      ],
      [
        -19,
        [
          "ENODEV",
          "no such device"
        ]
      ],
      [
        -2,
        [
          "ENOENT",
          "no such file or directory"
        ]
      ],
      [
        -12,
        [
          "ENOMEM",
          "not enough memory"
        ]
      ],
      [
        -4056,
        [
          "ENONET",
          "machine is not on the network"
        ]
      ],
      [
        -42,
        [
          "ENOPROTOOPT",
          "protocol not available"
        ]
      ],
      [
        -28,
        [
          "ENOSPC",
          "no space left on device"
        ]
      ],
      [
        -78,
        [
          "ENOSYS",
          "function not implemented"
        ]
      ],
      [
        -57,
        [
          "ENOTCONN",
          "socket is not connected"
        ]
      ],
      [
        -20,
        [
          "ENOTDIR",
          "not a directory"
        ]
      ],
      [
        -66,
        [
          "ENOTEMPTY",
          "directory not empty"
        ]
      ],
      [
        -38,
        [
          "ENOTSOCK",
          "socket operation on non-socket"
        ]
      ],
      [
        -45,
        [
          "ENOTSUP",
          "operation not supported on socket"
        ]
      ],
      [
        -1,
        [
          "EPERM",
          "operation not permitted"
        ]
      ],
      [
        -32,
        [
          "EPIPE",
          "broken pipe"
        ]
      ],
      [
        -100,
        [
          "EPROTO",
          "protocol error"
        ]
      ],
      [
        -43,
        [
          "EPROTONOSUPPORT",
          "protocol not supported"
        ]
      ],
      [
        -41,
        [
          "EPROTOTYPE",
          "protocol wrong type for socket"
        ]
      ],
      [
        -34,
        [
          "ERANGE",
          "result too large"
        ]
      ],
      [
        -30,
        [
          "EROFS",
          "read-only file system"
        ]
      ],
      [
        -58,
        [
          "ESHUTDOWN",
          "cannot send after transport endpoint shutdown"
        ]
      ],
      [
        -29,
        [
          "ESPIPE",
          "invalid seek"
        ]
      ],
      [
        -3,
        [
          "ESRCH",
          "no such process"
        ]
      ],
      [
        -60,
        [
          "ETIMEDOUT",
          "connection timed out"
        ]
      ],
      [
        -26,
        [
          "ETXTBSY",
          "text file is busy"
        ]
      ],
      [
        -18,
        [
          "EXDEV",
          "cross-device link not permitted"
        ]
      ],
      [
        -4094,
        [
          "UNKNOWN",
          "unknown error"
        ]
      ],
      [
        -4095,
        [
          "EOF",
          "end of file"
        ]
      ],
      [
        -6,
        [
          "ENXIO",
          "no such device or address"
        ]
      ],
      [
        -31,
        [
          "EMLINK",
          "too many links"
        ]
      ],
      [
        -64,
        [
          "EHOSTDOWN",
          "host is down"
        ]
      ],
      [
        -4030,
        [
          "EREMOTEIO",
          "remote I/O error"
        ]
      ],
      [
        -25,
        [
          "ENOTTY",
          "inappropriate ioctl for device"
        ]
      ],
      [
        -79,
        [
          "EFTYPE",
          "inappropriate file type or format"
        ]
      ],
      [
        -92,
        [
          "EILSEQ",
          "illegal byte sequence"
        ]
      ]
    ];
    errorToCodeDarwin2 = codeToErrorDarwin2.map(([status, [code]]) => [
      code,
      status
    ]);
    codeToErrorLinux2 = [
      [
        -7,
        [
          "E2BIG",
          "argument list too long"
        ]
      ],
      [
        -13,
        [
          "EACCES",
          "permission denied"
        ]
      ],
      [
        -98,
        [
          "EADDRINUSE",
          "address already in use"
        ]
      ],
      [
        -99,
        [
          "EADDRNOTAVAIL",
          "address not available"
        ]
      ],
      [
        -97,
        [
          "EAFNOSUPPORT",
          "address family not supported"
        ]
      ],
      [
        -11,
        [
          "EAGAIN",
          "resource temporarily unavailable"
        ]
      ],
      [
        -3e3,
        [
          "EAI_ADDRFAMILY",
          "address family not supported"
        ]
      ],
      [
        -3001,
        [
          "EAI_AGAIN",
          "temporary failure"
        ]
      ],
      [
        -3002,
        [
          "EAI_BADFLAGS",
          "bad ai_flags value"
        ]
      ],
      [
        -3013,
        [
          "EAI_BADHINTS",
          "invalid value for hints"
        ]
      ],
      [
        -3003,
        [
          "EAI_CANCELED",
          "request canceled"
        ]
      ],
      [
        -3004,
        [
          "EAI_FAIL",
          "permanent failure"
        ]
      ],
      [
        -3005,
        [
          "EAI_FAMILY",
          "ai_family not supported"
        ]
      ],
      [
        -3006,
        [
          "EAI_MEMORY",
          "out of memory"
        ]
      ],
      [
        -3007,
        [
          "EAI_NODATA",
          "no address"
        ]
      ],
      [
        -3008,
        [
          "EAI_NONAME",
          "unknown node or service"
        ]
      ],
      [
        -3009,
        [
          "EAI_OVERFLOW",
          "argument buffer overflow"
        ]
      ],
      [
        -3014,
        [
          "EAI_PROTOCOL",
          "resolved protocol is unknown"
        ]
      ],
      [
        -3010,
        [
          "EAI_SERVICE",
          "service not available for socket type"
        ]
      ],
      [
        -3011,
        [
          "EAI_SOCKTYPE",
          "socket type not supported"
        ]
      ],
      [
        -114,
        [
          "EALREADY",
          "connection already in progress"
        ]
      ],
      [
        -9,
        [
          "EBADF",
          "bad file descriptor"
        ]
      ],
      [
        -16,
        [
          "EBUSY",
          "resource busy or locked"
        ]
      ],
      [
        -125,
        [
          "ECANCELED",
          "operation canceled"
        ]
      ],
      [
        -4080,
        [
          "ECHARSET",
          "invalid Unicode character"
        ]
      ],
      [
        -103,
        [
          "ECONNABORTED",
          "software caused connection abort"
        ]
      ],
      [
        -111,
        [
          "ECONNREFUSED",
          "connection refused"
        ]
      ],
      [
        -104,
        [
          "ECONNRESET",
          "connection reset by peer"
        ]
      ],
      [
        -89,
        [
          "EDESTADDRREQ",
          "destination address required"
        ]
      ],
      [
        -17,
        [
          "EEXIST",
          "file already exists"
        ]
      ],
      [
        -14,
        [
          "EFAULT",
          "bad address in system call argument"
        ]
      ],
      [
        -27,
        [
          "EFBIG",
          "file too large"
        ]
      ],
      [
        -113,
        [
          "EHOSTUNREACH",
          "host is unreachable"
        ]
      ],
      [
        -4,
        [
          "EINTR",
          "interrupted system call"
        ]
      ],
      [
        -22,
        [
          "EINVAL",
          "invalid argument"
        ]
      ],
      [
        -5,
        [
          "EIO",
          "i/o error"
        ]
      ],
      [
        -106,
        [
          "EISCONN",
          "socket is already connected"
        ]
      ],
      [
        -21,
        [
          "EISDIR",
          "illegal operation on a directory"
        ]
      ],
      [
        -40,
        [
          "ELOOP",
          "too many symbolic links encountered"
        ]
      ],
      [
        -24,
        [
          "EMFILE",
          "too many open files"
        ]
      ],
      [
        -90,
        [
          "EMSGSIZE",
          "message too long"
        ]
      ],
      [
        -36,
        [
          "ENAMETOOLONG",
          "name too long"
        ]
      ],
      [
        -100,
        [
          "ENETDOWN",
          "network is down"
        ]
      ],
      [
        -101,
        [
          "ENETUNREACH",
          "network is unreachable"
        ]
      ],
      [
        -23,
        [
          "ENFILE",
          "file table overflow"
        ]
      ],
      [
        -105,
        [
          "ENOBUFS",
          "no buffer space available"
        ]
      ],
      [
        -19,
        [
          "ENODEV",
          "no such device"
        ]
      ],
      [
        -2,
        [
          "ENOENT",
          "no such file or directory"
        ]
      ],
      [
        -12,
        [
          "ENOMEM",
          "not enough memory"
        ]
      ],
      [
        -64,
        [
          "ENONET",
          "machine is not on the network"
        ]
      ],
      [
        -92,
        [
          "ENOPROTOOPT",
          "protocol not available"
        ]
      ],
      [
        -28,
        [
          "ENOSPC",
          "no space left on device"
        ]
      ],
      [
        -38,
        [
          "ENOSYS",
          "function not implemented"
        ]
      ],
      [
        -107,
        [
          "ENOTCONN",
          "socket is not connected"
        ]
      ],
      [
        -20,
        [
          "ENOTDIR",
          "not a directory"
        ]
      ],
      [
        -39,
        [
          "ENOTEMPTY",
          "directory not empty"
        ]
      ],
      [
        -88,
        [
          "ENOTSOCK",
          "socket operation on non-socket"
        ]
      ],
      [
        -95,
        [
          "ENOTSUP",
          "operation not supported on socket"
        ]
      ],
      [
        -1,
        [
          "EPERM",
          "operation not permitted"
        ]
      ],
      [
        -32,
        [
          "EPIPE",
          "broken pipe"
        ]
      ],
      [
        -71,
        [
          "EPROTO",
          "protocol error"
        ]
      ],
      [
        -93,
        [
          "EPROTONOSUPPORT",
          "protocol not supported"
        ]
      ],
      [
        -91,
        [
          "EPROTOTYPE",
          "protocol wrong type for socket"
        ]
      ],
      [
        -34,
        [
          "ERANGE",
          "result too large"
        ]
      ],
      [
        -30,
        [
          "EROFS",
          "read-only file system"
        ]
      ],
      [
        -108,
        [
          "ESHUTDOWN",
          "cannot send after transport endpoint shutdown"
        ]
      ],
      [
        -29,
        [
          "ESPIPE",
          "invalid seek"
        ]
      ],
      [
        -3,
        [
          "ESRCH",
          "no such process"
        ]
      ],
      [
        -110,
        [
          "ETIMEDOUT",
          "connection timed out"
        ]
      ],
      [
        -26,
        [
          "ETXTBSY",
          "text file is busy"
        ]
      ],
      [
        -18,
        [
          "EXDEV",
          "cross-device link not permitted"
        ]
      ],
      [
        -4094,
        [
          "UNKNOWN",
          "unknown error"
        ]
      ],
      [
        -4095,
        [
          "EOF",
          "end of file"
        ]
      ],
      [
        -6,
        [
          "ENXIO",
          "no such device or address"
        ]
      ],
      [
        -31,
        [
          "EMLINK",
          "too many links"
        ]
      ],
      [
        -112,
        [
          "EHOSTDOWN",
          "host is down"
        ]
      ],
      [
        -121,
        [
          "EREMOTEIO",
          "remote I/O error"
        ]
      ],
      [
        -25,
        [
          "ENOTTY",
          "inappropriate ioctl for device"
        ]
      ],
      [
        -4028,
        [
          "EFTYPE",
          "inappropriate file type or format"
        ]
      ],
      [
        -84,
        [
          "EILSEQ",
          "illegal byte sequence"
        ]
      ]
    ];
    errorToCodeLinux2 = codeToErrorLinux2.map(([status, [code]]) => [
      code,
      status
    ]);
    errorMap2 = new Map(osType2 === "win32" ? codeToErrorWindows2 : osType2 === "darwin" ? codeToErrorDarwin2 : osType2 === "linux" ? codeToErrorLinux2 : unreachable2());
    codeMap2 = new Map(osType2 === "win32" ? errorToCodeWindows2 : osType2 === "darwin" ? errorToCodeDarwin2 : osType2 === "linux" ? errorToCodeLinux2 : unreachable2());
    codeMap2.get("EAI_MEMORY");
    codeMap2.get("UNKNOWN");
    codeMap2.get("EBADF");
    codeMap2.get("EINVAL");
    codeMap2.get("ENOTSOCK");
    ({
      ...mod1
    });
    (function(Encodings22) {
      Encodings22[Encodings22["ASCII"] = 0] = "ASCII";
      Encodings22[Encodings22["UTF8"] = 1] = "UTF8";
      Encodings22[Encodings22["BASE64"] = 2] = "BASE64";
      Encodings22[Encodings22["UCS2"] = 3] = "UCS2";
      Encodings22[Encodings22["BINARY"] = 4] = "BINARY";
      Encodings22[Encodings22["HEX"] = 5] = "HEX";
      Encodings22[Encodings22["BUFFER"] = 6] = "BUFFER";
      Encodings22[Encodings22["BASE64URL"] = 7] = "BASE64URL";
      Encodings22[Encodings22["LATIN1"] = 4] = "LATIN1";
    })(Encodings2 || (Encodings2 = {}));
    encodings2 = [];
    encodings2[Encodings2.ASCII] = "ascii";
    encodings2[Encodings2.BASE64] = "base64";
    encodings2[Encodings2.BASE64URL] = "base64url";
    encodings2[Encodings2.BUFFER] = "buffer";
    encodings2[Encodings2.HEX] = "hex";
    encodings2[Encodings2.LATIN1] = "latin1";
    encodings2[Encodings2.UCS2] = "utf16le";
    encodings2[Encodings2.UTF8] = "utf8";
    base64abc2 = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "/"
    ];
    INVALID_BASE64_RE2 = /[^+/0-9A-Za-z-_]/g;
    utf8Encoder2 = new TextEncoder();
    float32Array2 = new Float32Array(1);
    uInt8Float32Array2 = new Uint8Array(float32Array2.buffer);
    float64Array2 = new Float64Array(1);
    uInt8Float64Array2 = new Uint8Array(float64Array2.buffer);
    float32Array2[0] = -1;
    bigEndian2 = uInt8Float32Array2[3] === 0;
    encodingsMap2 = /* @__PURE__ */ Object.create(null);
    for (let i = 0; i < encodings2.length; ++i) {
      encodingsMap2[encodings2[i]] = i;
    }
    encodingOps2 = {
      ascii: {
        byteLength: (string) => string.length,
        encoding: "ascii",
        encodingVal: encodingsMap2.ascii,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, asciiToBytes2(val), byteOffset, encodingsMap2.ascii, dir),
        slice: (buf, start, end) => buf.asciiSlice(start, end),
        write: (buf, string, offset, len) => buf.asciiWrite(string, offset, len)
      },
      base64: {
        byteLength: (string) => base64ByteLength2(string, string.length),
        encoding: "base64",
        encodingVal: encodingsMap2.base64,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, base64ToBytes2(val), byteOffset, encodingsMap2.base64, dir),
        slice: (buf, start, end) => buf.base64Slice(start, end),
        write: (buf, string, offset, len) => buf.base64Write(string, offset, len)
      },
      base64url: {
        byteLength: (string) => base64ByteLength2(string, string.length),
        encoding: "base64url",
        encodingVal: encodingsMap2.base64url,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, base64UrlToBytes2(val), byteOffset, encodingsMap2.base64url, dir),
        slice: (buf, start, end) => buf.base64urlSlice(start, end),
        write: (buf, string, offset, len) => buf.base64urlWrite(string, offset, len)
      },
      hex: {
        byteLength: (string) => string.length >>> 1,
        encoding: "hex",
        encodingVal: encodingsMap2.hex,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, hexToBytes2(val), byteOffset, encodingsMap2.hex, dir),
        slice: (buf, start, end) => buf.hexSlice(start, end),
        write: (buf, string, offset, len) => buf.hexWrite(string, offset, len)
      },
      latin1: {
        byteLength: (string) => string.length,
        encoding: "latin1",
        encodingVal: encodingsMap2.latin1,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, asciiToBytes2(val), byteOffset, encodingsMap2.latin1, dir),
        slice: (buf, start, end) => buf.latin1Slice(start, end),
        write: (buf, string, offset, len) => buf.latin1Write(string, offset, len)
      },
      ucs2: {
        byteLength: (string) => string.length * 2,
        encoding: "ucs2",
        encodingVal: encodingsMap2.utf16le,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, utf16leToBytes2(val), byteOffset, encodingsMap2.utf16le, dir),
        slice: (buf, start, end) => buf.ucs2Slice(start, end),
        write: (buf, string, offset, len) => buf.ucs2Write(string, offset, len)
      },
      utf8: {
        byteLength: byteLengthUtf82,
        encoding: "utf8",
        encodingVal: encodingsMap2.utf8,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, utf8Encoder2.encode(val), byteOffset, encodingsMap2.utf8, dir),
        slice: (buf, start, end) => buf.utf8Slice(start, end),
        write: (buf, string, offset, len) => buf.utf8Write(string, offset, len)
      },
      utf16le: {
        byteLength: (string) => string.length * 2,
        encoding: "utf16le",
        encodingVal: encodingsMap2.utf16le,
        indexOf: (buf, val, byteOffset, dir) => indexOfBuffer2(buf, utf16leToBytes2(val), byteOffset, encodingsMap2.utf16le, dir),
        slice: (buf, start, end) => buf.ucs2Slice(start, end),
        write: (buf, string, offset, len) => buf.ucs2Write(string, offset, len)
      }
    };
    kMaxLength2 = 2147483647;
    MAX_UINT322 = 2 ** 32;
    customInspectSymbol1 = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    INSPECT_MAX_BYTES2 = 50;
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) {
          return void 0;
        }
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) {
          return void 0;
        }
        return this.byteOffset;
      }
    });
    Buffer3.poolSize = 8192;
    Buffer3.from = function from4(value, encodingOrOffset, length2) {
      return _from2(value, encodingOrOffset, length2);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    Buffer3.alloc = function alloc2(size, fill22, encoding) {
      return _alloc2(size, fill22, encoding);
    };
    Buffer3.allocUnsafe = function allocUnsafe2(size) {
      return _allocUnsafe2(size);
    };
    Buffer3.allocUnsafeSlow = function allocUnsafeSlow2(size) {
      return _allocUnsafe2(size);
    };
    Object.setPrototypeOf(SlowBuffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(SlowBuffer2, Uint8Array);
    Buffer3.isBuffer = function isBuffer2(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare3(a, b) {
      if (isInstance2(a, Uint8Array)) {
        a = Buffer3.from(a, a.offset, a.byteLength);
      }
      if (isInstance2(b, Uint8Array)) {
        b = Buffer3.from(b, b.offset, b.byteLength);
      }
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) {
        return 0;
      }
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    };
    Buffer3.isEncoding = function isEncoding2(encoding) {
      return typeof encoding === "string" && encoding.length !== 0 && normalizeEncoding3(encoding) !== void 0;
    };
    Buffer3.concat = function concat2(list, length2) {
      if (!Array.isArray(list)) {
        throw new codes4.ERR_INVALID_ARG_TYPE("list", "Array", list);
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      if (length2 === void 0) {
        length2 = 0;
        for (let i = 0; i < list.length; i++) {
          if (list[i].length) {
            length2 += list[i].length;
          }
        }
      } else {
        validateOffset2(length2, "length");
      }
      const buffer = Buffer3.allocUnsafe(length2);
      let pos = 0;
      for (let i1 = 0; i1 < list.length; i1++) {
        const buf = list[i1];
        if (!isUint8Array4(buf)) {
          throw new codes4.ERR_INVALID_ARG_TYPE(`list[${i1}]`, [
            "Buffer",
            "Uint8Array"
          ], list[i1]);
        }
        pos += _copyActual2(buf, buffer, pos, 0, buf.length);
      }
      if (pos < length2) {
        buffer.fill(0, pos, length2);
      }
      return buffer;
    };
    Buffer3.byteLength = byteLength2;
    Buffer3.prototype._isBuffer = true;
    Buffer3.prototype.swap16 = function swap162() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap2(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap322() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap2(this, i, i + 3);
        swap2(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap642() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap2(this, i, i + 7);
        swap2(this, i + 1, i + 6);
        swap2(this, i + 2, i + 5);
        swap2(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString2(encoding, start, end) {
      if (arguments.length === 0) {
        return this.utf8Slice(0, this.length);
      }
      const len = this.length;
      if (start <= 0) {
        start = 0;
      } else if (start >= len) {
        return "";
      } else {
        start |= 0;
      }
      if (end === void 0 || end > len) {
        end = len;
      } else {
        end |= 0;
      }
      if (end <= start) {
        return "";
      }
      if (encoding === void 0) {
        return this.utf8Slice(start, end);
      }
      const ops = getEncodingOps2(encoding);
      if (ops === void 0) {
        throw new codes4.ERR_UNKNOWN_ENCODING(encoding);
      }
      return ops.slice(this, start, end);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals2(b) {
      if (!isUint8Array4(b)) {
        throw new codes4.ERR_INVALID_ARG_TYPE("otherBuffer", [
          "Buffer",
          "Uint8Array"
        ], b);
      }
      if (this === b) {
        return true;
      }
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect22() {
      let str = "";
      const max = INSPECT_MAX_BYTES2;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) {
        str += " ... ";
      }
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol1) {
      Buffer3.prototype[customInspectSymbol1] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare22(target2, start, end, thisStart, thisEnd) {
      if (isInstance2(target2, Uint8Array)) {
        target2 = Buffer3.from(target2, target2.offset, target2.byteLength);
      }
      if (!Buffer3.isBuffer(target2)) {
        throw new codes4.ERR_INVALID_ARG_TYPE("target", [
          "Buffer",
          "Uint8Array"
        ], target2);
      }
      if (start === void 0) {
        start = 0;
      } else {
        validateOffset2(start, "targetStart", 0, kMaxLength2);
      }
      if (end === void 0) {
        end = target2.length;
      } else {
        validateOffset2(end, "targetEnd", 0, target2.length);
      }
      if (thisStart === void 0) {
        thisStart = 0;
      } else {
        validateOffset2(start, "sourceStart", 0, kMaxLength2);
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      } else {
        validateOffset2(end, "sourceEnd", 0, this.length);
      }
      if (start < 0 || end > target2.length || thisStart < 0 || thisEnd > this.length) {
        throw new codes4.ERR_OUT_OF_RANGE("out of range index", "range");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target2) {
        return 0;
      }
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target2.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    };
    Buffer3.prototype.includes = function includes2(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf2(val, byteOffset, encoding) {
      return bidirectionalIndexOf2(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf2(val, byteOffset, encoding) {
      return bidirectionalIndexOf2(this, val, byteOffset, encoding, false);
    };
    Buffer3.prototype.asciiSlice = function asciiSlice2(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return bytesToAscii2(this);
      } else {
        return bytesToAscii2(this.slice(offset, length2));
      }
    };
    Buffer3.prototype.asciiWrite = function asciiWrite2(string, offset, length2) {
      return blitBuffer2(asciiToBytes2(string), this, offset, length2);
    };
    Buffer3.prototype.base64Slice = function base64Slice2(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return encode2(this);
      } else {
        return encode2(this.slice(offset, length2));
      }
    };
    Buffer3.prototype.base64Write = function base64Write2(string, offset, length2) {
      return blitBuffer2(base64ToBytes2(string), this, offset, length2);
    };
    Buffer3.prototype.base64urlSlice = function base64urlSlice2(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return encode12(this);
      } else {
        return encode12(this.slice(offset, length2));
      }
    };
    Buffer3.prototype.base64urlWrite = function base64urlWrite2(string, offset, length2) {
      return blitBuffer2(base64UrlToBytes2(string), this, offset, length2);
    };
    Buffer3.prototype.hexWrite = function hexWrite2(string, offset, length2) {
      return blitBuffer2(hexToBytes2(string, this.length - offset), this, offset, length2);
    };
    Buffer3.prototype.hexSlice = function hexSlice22(string, offset, length2) {
      return _hexSlice2(this, string, offset, length2);
    };
    Buffer3.prototype.latin1Slice = function latin1Slice2(string, offset, length2) {
      return _latin1Slice2(this, string, offset, length2);
    };
    Buffer3.prototype.latin1Write = function latin1Write2(string, offset, length2) {
      return blitBuffer2(asciiToBytes2(string), this, offset, length2);
    };
    Buffer3.prototype.ucs2Slice = function ucs2Slice2(offset, length2) {
      if (offset === 0 && length2 === this.length) {
        return bytesToUtf16le2(this);
      } else {
        return bytesToUtf16le2(this.slice(offset, length2));
      }
    };
    Buffer3.prototype.ucs2Write = function ucs2Write2(string, offset, length2) {
      return blitBuffer2(utf16leToBytes2(string, this.length - offset), this, offset, length2);
    };
    Buffer3.prototype.utf8Slice = function utf8Slice2(string, offset, length2) {
      return _utf8Slice2(this, string, offset, length2);
    };
    Buffer3.prototype.utf8Write = function utf8Write2(string, offset, length2) {
      return blitBuffer2(utf8ToBytes2(string, this.length - offset), this, offset, length2);
    };
    Buffer3.prototype.write = function write2(string, offset, length2, encoding) {
      if (offset === void 0) {
        return this.utf8Write(string, 0, this.length);
      }
      if (length2 === void 0 && typeof offset === "string") {
        encoding = offset;
        length2 = this.length;
        offset = 0;
      } else {
        validateOffset2(offset, "offset", 0, this.length);
        const remaining = this.length - offset;
        if (length2 === void 0) {
          length2 = remaining;
        } else if (typeof length2 === "string") {
          encoding = length2;
          length2 = remaining;
        } else {
          validateOffset2(length2, "length", 0, this.length);
          if (length2 > remaining) {
            length2 = remaining;
          }
        }
      }
      if (!encoding) {
        return this.utf8Write(string, offset, length2);
      }
      const ops = getEncodingOps2(encoding);
      if (ops === void 0) {
        throw new codes4.ERR_UNKNOWN_ENCODING(encoding);
      }
      return ops.write(this, string, offset, length2);
    };
    Buffer3.prototype.toJSON = function toJSON2() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    MAX_ARGUMENTS_LENGTH2 = 4096;
    Buffer3.prototype.slice = function slice2(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) {
          start = 0;
        }
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
      if (end < start) {
        end = start;
      }
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE2(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes4.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readUInt48LE2(this, offset);
      }
      if (byteLength22 === 5) {
        return readUInt40LE2(this, offset);
      }
      if (byteLength22 === 3) {
        return readUInt24LE2(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readUInt32LE(offset);
      }
      if (byteLength22 === 2) {
        return this.readUInt16LE(offset);
      }
      if (byteLength22 === 1) {
        return this.readUInt8(offset);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE2(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes4.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readUInt48BE2(this, offset);
      }
      if (byteLength22 === 5) {
        return readUInt40BE2(this, offset);
      }
      if (byteLength22 === 3) {
        return readUInt24BE2(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readUInt32BE(offset);
      }
      if (byteLength22 === 2) {
        return this.readUInt16BE(offset);
      }
      if (byteLength22 === 1) {
        return this.readUInt8(offset);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt82(offset = 0) {
      validateNumber2(offset, "offset");
      const val = this[offset];
      if (val === void 0) {
        boundsError2(offset, this.length - 1);
      }
      return val;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = readUInt16BE2;
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE2(offset = 0) {
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 1];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 2);
      }
      return first + last * 2 ** 8;
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE2(offset = 0) {
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 3];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 4);
      }
      return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = readUInt32BE2;
    Buffer3.prototype.readBigUint64LE = Buffer3.prototype.readBigUInt64LE = defineBigIntMethod2(function readBigUInt64LE2(offset) {
      offset = offset >>> 0;
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUint64BE = Buffer3.prototype.readBigUInt64BE = defineBigIntMethod2(function readBigUInt64BE2(offset) {
      offset = offset >>> 0;
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE2(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes4.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readInt48LE2(this, offset);
      }
      if (byteLength22 === 5) {
        return readInt40LE2(this, offset);
      }
      if (byteLength22 === 3) {
        return readInt24LE2(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readInt32LE(offset);
      }
      if (byteLength22 === 2) {
        return this.readInt16LE(offset);
      }
      if (byteLength22 === 1) {
        return this.readInt8(offset);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.readIntBE = function readIntBE2(offset, byteLength22) {
      if (offset === void 0) {
        throw new codes4.ERR_INVALID_ARG_TYPE("offset", "number", offset);
      }
      if (byteLength22 === 6) {
        return readInt48BE2(this, offset);
      }
      if (byteLength22 === 5) {
        return readInt40BE2(this, offset);
      }
      if (byteLength22 === 3) {
        return readInt24BE2(this, offset);
      }
      if (byteLength22 === 4) {
        return this.readInt32BE(offset);
      }
      if (byteLength22 === 2) {
        return this.readInt16BE(offset);
      }
      if (byteLength22 === 1) {
        return this.readInt8(offset);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.readInt8 = function readInt82(offset = 0) {
      validateNumber2(offset, "offset");
      const val = this[offset];
      if (val === void 0) {
        boundsError2(offset, this.length - 1);
      }
      return val | (val & 2 ** 7) * 33554430;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE2(offset = 0) {
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 1];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 2);
      }
      const val = first + last * 2 ** 8;
      return val | (val & 2 ** 15) * 131070;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE2(offset = 0) {
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 1];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 2);
      }
      const val = first * 2 ** 8 + last;
      return val | (val & 2 ** 15) * 131070;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE2(offset = 0) {
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 3];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 4);
      }
      return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + (last << 24);
    };
    Buffer3.prototype.readInt32BE = function readInt32BE2(offset = 0) {
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 3];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 4);
      }
      return (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod2(function readBigInt64LE2(offset) {
      offset = offset >>> 0;
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod2(function readBigInt64BE2(offset) {
      offset = offset >>> 0;
      validateNumber2(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError2(offset, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE2(offset) {
      return bigEndian2 ? readFloatBackwards2(this, offset) : readFloatForwards2(this, offset);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE2(offset) {
      return bigEndian2 ? readFloatForwards2(this, offset) : readFloatBackwards2(this, offset);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE2(offset) {
      return bigEndian2 ? readDoubleBackwards2(this, offset) : readDoubleForwards2(this, offset);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE2(offset) {
      return bigEndian2 ? readDoubleForwards2(this, offset) : readDoubleBackwards2(this, offset);
    };
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE2(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48LE2(this, value, offset, 0, 281474976710655);
      }
      if (byteLength22 === 5) {
        return writeU_Int40LE2(this, value, offset, 0, 1099511627775);
      }
      if (byteLength22 === 3) {
        return writeU_Int24LE2(this, value, offset, 0, 16777215);
      }
      if (byteLength22 === 4) {
        return writeU_Int32LE2(this, value, offset, 0, 4294967295);
      }
      if (byteLength22 === 2) {
        return writeU_Int16LE2(this, value, offset, 0, 65535);
      }
      if (byteLength22 === 1) {
        return writeU_Int82(this, value, offset, 0, 255);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE2(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48BE2(this, value, offset, 0, 281474976710655);
      }
      if (byteLength22 === 5) {
        return writeU_Int40BE2(this, value, offset, 0, 1099511627775);
      }
      if (byteLength22 === 3) {
        return writeU_Int24BE2(this, value, offset, 0, 16777215);
      }
      if (byteLength22 === 4) {
        return writeU_Int32BE2(this, value, offset, 0, 4294967295);
      }
      if (byteLength22 === 2) {
        return writeU_Int16BE2(this, value, offset, 0, 65535);
      }
      if (byteLength22 === 1) {
        return writeU_Int82(this, value, offset, 0, 255);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt82(value, offset = 0) {
      return writeU_Int82(this, value, offset, 0, 255);
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE2(value, offset = 0) {
      return writeU_Int16LE2(this, value, offset, 0, 65535);
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE2(value, offset = 0) {
      return writeU_Int16BE2(this, value, offset, 0, 65535);
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE2(value, offset = 0) {
      return _writeUInt32LE2(this, value, offset, 0, 4294967295);
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE2(value, offset = 0) {
      return _writeUInt32BE2(this, value, offset, 0, 4294967295);
    };
    Buffer3.prototype.writeBigUint64LE = Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod2(function writeBigUInt64LE2(value, offset = 0) {
      return wrtBigUInt64LE2(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUint64BE = Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod2(function writeBigUInt64BE2(value, offset = 0) {
      return wrtBigUInt64BE2(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE2(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48LE2(this, value, offset, -140737488355328, 140737488355327);
      }
      if (byteLength22 === 5) {
        return writeU_Int40LE2(this, value, offset, -549755813888, 549755813887);
      }
      if (byteLength22 === 3) {
        return writeU_Int24LE2(this, value, offset, -8388608, 8388607);
      }
      if (byteLength22 === 4) {
        return writeU_Int32LE2(this, value, offset, -2147483648, 2147483647);
      }
      if (byteLength22 === 2) {
        return writeU_Int16LE2(this, value, offset, -32768, 32767);
      }
      if (byteLength22 === 1) {
        return writeU_Int82(this, value, offset, -128, 127);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.writeIntBE = function writeIntBE2(value, offset, byteLength22) {
      if (byteLength22 === 6) {
        return writeU_Int48BE2(this, value, offset, -140737488355328, 140737488355327);
      }
      if (byteLength22 === 5) {
        return writeU_Int40BE2(this, value, offset, -549755813888, 549755813887);
      }
      if (byteLength22 === 3) {
        return writeU_Int24BE2(this, value, offset, -8388608, 8388607);
      }
      if (byteLength22 === 4) {
        return writeU_Int32BE2(this, value, offset, -2147483648, 2147483647);
      }
      if (byteLength22 === 2) {
        return writeU_Int16BE2(this, value, offset, -32768, 32767);
      }
      if (byteLength22 === 1) {
        return writeU_Int82(this, value, offset, -128, 127);
      }
      boundsError2(byteLength22, 6, "byteLength");
    };
    Buffer3.prototype.writeInt8 = function writeInt82(value, offset = 0) {
      return writeU_Int82(this, value, offset, -128, 127);
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE2(value, offset = 0) {
      return writeU_Int16LE2(this, value, offset, -32768, 32767);
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE2(value, offset = 0) {
      return writeU_Int16BE2(this, value, offset, -32768, 32767);
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE2(value, offset = 0) {
      return writeU_Int32LE2(this, value, offset, -2147483648, 2147483647);
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE2(value, offset = 0) {
      return writeU_Int32BE2(this, value, offset, -2147483648, 2147483647);
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod2(function writeBigInt64LE2(value, offset = 0) {
      return wrtBigUInt64LE2(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod2(function writeBigInt64BE2(value, offset = 0) {
      return wrtBigUInt64BE2(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeFloatLE = function writeFloatLE2(value, offset) {
      return bigEndian2 ? writeFloatBackwards2(this, value, offset) : writeFloatForwards2(this, value, offset);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE2(value, offset) {
      return bigEndian2 ? writeFloatForwards2(this, value, offset) : writeFloatBackwards2(this, value, offset);
    };
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE2(value, offset) {
      return bigEndian2 ? writeDoubleBackwards2(this, value, offset) : writeDoubleForwards2(this, value, offset);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE2(value, offset) {
      return bigEndian2 ? writeDoubleForwards2(this, value, offset) : writeDoubleBackwards2(this, value, offset);
    };
    Buffer3.prototype.copy = function copy2(target2, targetStart, sourceStart, sourceEnd) {
      if (!isUint8Array4(this)) {
        throw new codes4.ERR_INVALID_ARG_TYPE("source", [
          "Buffer",
          "Uint8Array"
        ], this);
      }
      if (!isUint8Array4(target2)) {
        throw new codes4.ERR_INVALID_ARG_TYPE("target", [
          "Buffer",
          "Uint8Array"
        ], target2);
      }
      if (targetStart === void 0) {
        targetStart = 0;
      } else {
        targetStart = toInteger2(targetStart, 0);
        if (targetStart < 0) {
          throw new codes4.ERR_OUT_OF_RANGE("targetStart", ">= 0", targetStart);
        }
      }
      if (sourceStart === void 0) {
        sourceStart = 0;
      } else {
        sourceStart = toInteger2(sourceStart, 0);
        if (sourceStart < 0) {
          throw new codes4.ERR_OUT_OF_RANGE("sourceStart", ">= 0", sourceStart);
        }
        if (sourceStart >= MAX_UINT322) {
          throw new codes4.ERR_OUT_OF_RANGE("sourceStart", `< ${MAX_UINT322}`, sourceStart);
        }
      }
      if (sourceEnd === void 0) {
        sourceEnd = this.length;
      } else {
        sourceEnd = toInteger2(sourceEnd, 0);
        if (sourceEnd < 0) {
          throw new codes4.ERR_OUT_OF_RANGE("sourceEnd", ">= 0", sourceEnd);
        }
        if (sourceEnd >= MAX_UINT322) {
          throw new codes4.ERR_OUT_OF_RANGE("sourceEnd", `< ${MAX_UINT322}`, sourceEnd);
        }
      }
      if (targetStart >= target2.length) {
        return 0;
      }
      if (sourceEnd > 0 && sourceEnd < sourceStart) {
        sourceEnd = sourceStart;
      }
      if (sourceEnd === sourceStart) {
        return 0;
      }
      if (target2.length === 0 || this.length === 0) {
        return 0;
      }
      if (sourceEnd > this.length) {
        sourceEnd = this.length;
      }
      if (target2.length - targetStart < sourceEnd - sourceStart) {
        sourceEnd = target2.length - targetStart + sourceStart;
      }
      const len = sourceEnd - sourceStart;
      if (this === target2 && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, sourceStart, sourceEnd);
      } else {
        Uint8Array.prototype.set.call(target2, this.subarray(sourceStart, sourceEnd), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill2(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) {
        val = 0;
      }
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new codes4.ERR_INVALID_ARG_VALUE("value", val);
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    hexSliceLookupTable2 = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    globalThis.atob;
    globalThis.Blob;
    globalThis.btoa;
    (function(valueType2) {
      valueType2[valueType2["noIterator"] = 0] = "noIterator";
      valueType2[valueType2["isArray"] = 1] = "isArray";
      valueType2[valueType2["isSet"] = 2] = "isSet";
      valueType2[valueType2["isMap"] = 3] = "isMap";
    })(valueType || (valueType = {}));
    NumberIsSafeInteger = Number.isSafeInteger;
    ({ errno: { ENOTDIR: ENOTDIR2, ENOENT: ENOENT2 } } = os3);
    kIsNodeError3 = Symbol("kIsNodeError");
    classRegExp1 = /^([A-Z][a-z0-9]*)+$/;
    kTypes3 = [
      "string",
      "function",
      "number",
      "object",
      "Function",
      "Object",
      "boolean",
      "bigint",
      "symbol"
    ];
    captureLargerStackTrace3 = hideStackFrames3(function captureLargerStackTrace22(err) {
      Error.captureStackTrace(err);
      return err;
    });
    hideStackFrames3(function uvExceptionWithHostPort3(err, syscall, address, port) {
      const { 0: code, 1: uvmsg } = uvErrmapGet2(err) || uvUnmappedError2;
      const message = `${syscall} ${code}: ${uvmsg}`;
      let details = "";
      if (port && port > 0) {
        details = ` ${address}:${port}`;
      } else if (address) {
        details = ` ${address}`;
      }
      const ex = new Error(`${message}${details}`);
      ex.code = code;
      ex.errno = err;
      ex.syscall = syscall;
      ex.address = address;
      if (port) {
        ex.port = port;
      }
      return captureLargerStackTrace3(ex);
    });
    hideStackFrames3(function errnoException3(err, syscall, original) {
      const code = getSystemErrorName2(err);
      const message = original ? `${syscall} ${code} ${original}` : `${syscall} ${code}`;
      const ex = new Error(message);
      ex.errno = err;
      ex.code = code;
      ex.syscall = syscall;
      return captureLargerStackTrace3(ex);
    });
    uvUnmappedError2 = [
      "UNKNOWN",
      "unknown error"
    ];
    hideStackFrames3(function uvException3(ctx) {
      const { 0: code, 1: uvmsg } = uvErrmapGet2(ctx.errno) || uvUnmappedError2;
      let message = `${code}: ${ctx.message || uvmsg}, ${ctx.syscall}`;
      let path2;
      let dest;
      if (ctx.path) {
        path2 = ctx.path.toString();
        message += ` '${path2}'`;
      }
      if (ctx.dest) {
        dest = ctx.dest.toString();
        message += ` -> '${dest}'`;
      }
      const err = new Error(message);
      for (const prop of Object.keys(ctx)) {
        if (prop === "message" || prop === "path" || prop === "dest") {
          continue;
        }
        err[prop] = ctx[prop];
      }
      err.code = code;
      if (path2) {
        err.path = path2;
      }
      if (dest) {
        err.dest = dest;
      }
      return captureLargerStackTrace3(err);
    });
    hideStackFrames3(function exceptionWithHostPort3(err, syscall, address, port, additional) {
      const code = getSystemErrorName2(err);
      let details = "";
      if (port && port > 0) {
        details = ` ${address}:${port}`;
      } else if (address) {
        details = ` ${address}`;
      }
      if (additional) {
        details += ` - Local (${additional})`;
      }
      const ex = new Error(`${syscall} ${code}${details}`);
      ex.errno = err;
      ex.code = code;
      ex.syscall = syscall;
      ex.address = address;
      if (port) {
        ex.port = port;
      }
      return captureLargerStackTrace3(ex);
    });
    hideStackFrames3(function(code, syscall, hostname) {
      let errno;
      if (typeof code === "number") {
        errno = code;
        if (code === codeMap2.get("EAI_NODATA") || code === codeMap2.get("EAI_NONAME")) {
          code = "ENOTFOUND";
        } else {
          code = getSystemErrorName2(code);
        }
      }
      const message = `${syscall} ${code}${hostname ? ` ${hostname}` : ""}`;
      const ex = new Error(message);
      ex.errno = errno;
      ex.code = code;
      ex.syscall = syscall;
      if (hostname) {
        ex.hostname = hostname;
      }
      return captureLargerStackTrace3(ex);
    });
    NodeErrorAbstraction2 = class extends Error {
      constructor(name, code, message) {
        super(message);
        this.code = code;
        this.name = name;
        this.stack = this.stack && `${name} [${this.code}]${this.stack.slice(20)}`;
      }
      toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
      }
    };
    NodeError2 = class extends NodeErrorAbstraction2 {
      constructor(code, message) {
        super(Error.prototype.name, code, message);
      }
    };
    NodeRangeError2 = class extends NodeErrorAbstraction2 {
      constructor(code, message) {
        super(RangeError.prototype.name, code, message);
        Object.setPrototypeOf(this, RangeError.prototype);
        this.toString = function() {
          return `${this.name} [${this.code}]: ${this.message}`;
        };
      }
    };
    NodeTypeError2 = class extends NodeErrorAbstraction2 {
      constructor(code, message) {
        super(TypeError.prototype.name, code, message);
        Object.setPrototypeOf(this, TypeError.prototype);
        this.toString = function() {
          return `${this.name} [${this.code}]: ${this.message}`;
        };
      }
    };
    NodeSystemError2 = class extends NodeErrorAbstraction2 {
      constructor(key, context, msgPrefix) {
        let message = `${msgPrefix}: ${context.syscall} returned ${context.code} (${context.message})`;
        if (context.path !== void 0) {
          message += ` ${context.path}`;
        }
        if (context.dest !== void 0) {
          message += ` => ${context.dest}`;
        }
        super("SystemError", key, message);
        captureLargerStackTrace3(this);
        Object.defineProperties(this, {
          [kIsNodeError3]: {
            value: true,
            enumerable: false,
            writable: false,
            configurable: true
          },
          info: {
            value: context,
            enumerable: true,
            configurable: true,
            writable: false
          },
          errno: {
            get() {
              return context.errno;
            },
            set: (value) => {
              context.errno = value;
            },
            enumerable: true,
            configurable: true
          },
          syscall: {
            get() {
              return context.syscall;
            },
            set: (value) => {
              context.syscall = value;
            },
            enumerable: true,
            configurable: true
          }
        });
        if (context.path !== void 0) {
          Object.defineProperty(this, "path", {
            get() {
              return context.path;
            },
            set: (value) => {
              context.path = value;
            },
            enumerable: true,
            configurable: true
          });
        }
        if (context.dest !== void 0) {
          Object.defineProperty(this, "dest", {
            get() {
              return context.dest;
            },
            set: (value) => {
              context.dest = value;
            },
            enumerable: true,
            configurable: true
          });
        }
      }
      toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
      }
    };
    makeSystemErrorWithCode2("ERR_FS_EISDIR", "Path is a directory");
    ERR_INVALID_ARG_TYPE_RANGE2 = class extends NodeRangeError2 {
      constructor(name, expected, actual) {
        const msg = createInvalidArgType2(name, expected);
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper2(actual)}`);
      }
    };
    ERR_INVALID_ARG_TYPE11 = class extends NodeTypeError2 {
      constructor(name, expected, actual) {
        const msg = createInvalidArgType2(name, expected);
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper2(actual)}`);
      }
    };
    ERR_INVALID_ARG_TYPE11.RangeError = ERR_INVALID_ARG_TYPE_RANGE2;
    ERR_INVALID_ARG_VALUE_RANGE2 = class extends NodeRangeError2 {
      constructor(name, value, reason = "is invalid") {
        const type = name.includes(".") ? "property" : "argument";
        const inspected = inspect4(value);
        super("ERR_INVALID_ARG_VALUE", `The ${type} '${name}' ${reason}. Received ${inspected}`);
      }
    };
    ERR_INVALID_ARG_VALUE6 = class extends NodeTypeError2 {
      constructor(name, value, reason = "is invalid") {
        const type = name.includes(".") ? "property" : "argument";
        const inspected = inspect4(value);
        super("ERR_INVALID_ARG_VALUE", `The ${type} '${name}' ${reason}. Received ${inspected}`);
      }
    };
    ERR_INVALID_ARG_VALUE6.RangeError = ERR_INVALID_ARG_VALUE_RANGE2;
    ERR_OUT_OF_RANGE5 = class extends RangeError {
      constructor(str, range, input, replaceDefaultBoolean = false) {
        assert3(range, 'Missing "range" argument');
        let msg = replaceDefaultBoolean ? str : `The value of "${str}" is out of range.`;
        let received;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator3(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > 2n ** 32n || input < -(2n ** 32n)) {
            received = addNumericalSeparator3(received);
          }
          received += "n";
        } else {
          received = inspect4(input);
        }
        msg += ` It must be ${range}. Received ${received}`;
        super(msg);
        this.code = "ERR_OUT_OF_RANGE";
        const { name } = this;
        this.name = `${name} [${this.code}]`;
        this.stack;
        this.name = name;
      }
    };
    ERR_BUFFER_OUT_OF_BOUNDS2 = class extends NodeRangeError2 {
      constructor(name) {
        super("ERR_BUFFER_OUT_OF_BOUNDS", name ? `"${name}" is outside of buffer bounds` : "Attempt to access memory outside buffer bounds");
      }
    };
    ERR_INVALID_CALLBACK = class extends NodeTypeError2 {
      constructor(object) {
        super("ERR_INVALID_CALLBACK", `Callback must be a function. Received ${inspect4(object)}`);
      }
    };
    ERR_INVALID_FILE_URL_HOST = class extends NodeTypeError2 {
      constructor(x) {
        super("ERR_INVALID_FILE_URL_HOST", `File URL host must be "localhost" or empty on ${x}`);
      }
    };
    ERR_INVALID_FILE_URL_PATH = class extends NodeTypeError2 {
      constructor(x) {
        super("ERR_INVALID_FILE_URL_PATH", `File URL path ${x}`);
      }
    };
    ERR_IPC_CHANNEL_CLOSED2 = class extends NodeError2 {
      constructor() {
        super("ERR_IPC_CHANNEL_CLOSED", `Channel closed`);
      }
    };
    ERR_SOCKET_BAD_PORT3 = class extends NodeRangeError2 {
      constructor(name, port, allowZero = true) {
        assert3(typeof allowZero === "boolean", "The 'allowZero' argument must be of type boolean.");
        const operator = allowZero ? ">=" : ">";
        super("ERR_SOCKET_BAD_PORT", `${name} should be ${operator} 0 and < 65536. Received ${port}.`);
      }
    };
    ERR_UNKNOWN_ENCODING3 = class extends NodeTypeError2 {
      constructor(x) {
        super("ERR_UNKNOWN_ENCODING", `Unknown encoding: ${x}`);
      }
    };
    ERR_INVALID_URL_SCHEME = class extends NodeTypeError2 {
      constructor(expected) {
        expected = Array.isArray(expected) ? expected : [
          expected
        ];
        const res = expected.length === 2 ? `one of scheme ${expected[0]} or ${expected[1]}` : `of scheme ${expected[0]}`;
        super("ERR_INVALID_URL_SCHEME", `The URL must be ${res}`);
      }
    };
    codes4.ERR_IPC_CHANNEL_CLOSED = ERR_IPC_CHANNEL_CLOSED2;
    codes4.ERR_INVALID_ARG_TYPE = ERR_INVALID_ARG_TYPE11;
    codes4.ERR_INVALID_ARG_VALUE = ERR_INVALID_ARG_VALUE6;
    codes4.ERR_INVALID_CALLBACK = ERR_INVALID_CALLBACK;
    codes4.ERR_OUT_OF_RANGE = ERR_OUT_OF_RANGE5;
    codes4.ERR_SOCKET_BAD_PORT = ERR_SOCKET_BAD_PORT3;
    codes4.ERR_BUFFER_OUT_OF_BOUNDS = ERR_BUFFER_OUT_OF_BOUNDS2;
    codes4.ERR_UNKNOWN_ENCODING = ERR_UNKNOWN_ENCODING3;
    hideStackFrames3(function genericNodeError3(message, errorProperties) {
      const err = new Error(message);
      Object.assign(err, errorProperties);
      return err;
    });
    CHAR_FORWARD_SLASH1 = 47;
    WHITESPACE_ENCODINGS = {
      "	": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      " ": "%20"
    };
    sep = "\\";
    delimiter = ";";
    __default12 = {
      basename,
      delimiter,
      dirname,
      extname,
      format: format3,
      fromFileUrl: fromFileUrl2,
      isAbsolute,
      join: join1,
      normalize,
      parse,
      relative,
      resolve,
      sep,
      toFileUrl,
      toNamespacedPath
    };
    mod22 = {
      sep,
      delimiter,
      resolve,
      normalize,
      isAbsolute,
      join: join1,
      relative,
      toNamespacedPath,
      dirname,
      basename,
      extname,
      format: format3,
      parse,
      fromFileUrl: fromFileUrl2,
      toFileUrl,
      default: __default12
    };
    sep1 = "/";
    delimiter1 = ":";
    __default22 = {
      basename: basename1,
      delimiter: delimiter1,
      dirname: dirname1,
      extname: extname1,
      format: format1,
      fromFileUrl: fromFileUrl1,
      isAbsolute: isAbsolute1,
      join: join2,
      normalize: normalize1,
      parse: parse1,
      relative: relative1,
      resolve: resolve1,
      sep: sep1,
      toFileUrl: toFileUrl1,
      toNamespacedPath: toNamespacedPath1
    };
    mod3 = {
      sep: sep1,
      delimiter: delimiter1,
      resolve: resolve1,
      normalize: normalize1,
      isAbsolute: isAbsolute1,
      join: join2,
      relative: relative1,
      toNamespacedPath: toNamespacedPath1,
      dirname: dirname1,
      basename: basename1,
      extname: extname1,
      format: format1,
      parse: parse1,
      fromFileUrl: fromFileUrl1,
      toFileUrl: toFileUrl1,
      default: __default22
    };
    SEP = isWindows ? "\\" : "/";
    SEP_PATTERN = isWindows ? /[\\/]+/ : /\/+/;
    path = isWindows ? mod22 : mod3;
    ({ join: join3, normalize: normalize2 } = path);
    regExpEscapeChars = [
      "!",
      "$",
      "(",
      ")",
      "*",
      "+",
      ".",
      "=",
      "?",
      "[",
      "\\",
      "^",
      "{",
      "|"
    ];
    rangeEscapeChars = [
      "-",
      "\\",
      "]"
    ];
    path1 = isWindows ? __default12 : __default22;
    ({ basename: basename2, delimiter: delimiter2, dirname: dirname2, extname: extname2, format: format22, fromFileUrl: fromFileUrl22, isAbsolute: isAbsolute2, join: join4, normalize: normalize3, parse: parse2, relative: relative2, resolve: resolve2, sep: sep2, toFileUrl: toFileUrl2, toNamespacedPath: toNamespacedPath2 } = path1);
    mod4 = {
      SEP,
      SEP_PATTERN,
      win32: __default12,
      posix: __default22,
      basename: basename2,
      delimiter: delimiter2,
      dirname: dirname2,
      extname: extname2,
      format: format22,
      fromFileUrl: fromFileUrl22,
      isAbsolute: isAbsolute2,
      join: join4,
      normalize: normalize3,
      parse: parse2,
      relative: relative2,
      resolve: resolve2,
      sep: sep2,
      toFileUrl: toFileUrl2,
      toNamespacedPath: toNamespacedPath2,
      common,
      globToRegExp,
      isGlob,
      normalizeGlob,
      joinGlobs
    };
    ({
      ...mod4
    });
    baseMinusTMin = 36 - 1;
    hexTable = new Array(256);
    for (let i1 = 0; i1 < 256; ++i1) {
      hexTable[i1] = "%" + ((i1 < 16 ? "0" : "") + i1.toString(16)).toUpperCase();
    }
    new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]);
    isHexTable = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]);
    noEscape = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0
    ]);
    unhexTable = new Int8Array([
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      10,
      11,
      12,
      13,
      14,
      15,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    ]);
    forwardSlashRegEx = /\//g;
    noEscapeAuth = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0
    ]);
  }
});

// ../../node/url/lib/esm/index.js
var init_esm8 = __esm({
  "../../node/url/lib/esm/index.js"() {
    init_url_deno();
    init_url_deno();
  }
});

// ../../node/fs/lib/esm/utils.js
var init_utils2 = __esm({
  "../../node/fs/lib/esm/utils.js"() {
    init_sync();
  }
});

// ../../node/fs/lib/esm/dirent.js
var import_path, Dirent;
var init_dirent = __esm({
  "../../node/fs/lib/esm/dirent.js"() {
    init_Gio_2_0();
    import_path = __toESM(require_path_browserify());
    Dirent = class {
      constructor(path2, filename) {
        this._isFile = false;
        this._isDirectory = false;
        this._isBlockDevice = false;
        this._isCharacterDevice = false;
        this._isSymbolicLink = false;
        this._isFIFO = false;
        this._isSocket = false;
        if (!filename)
          filename = (0, import_path.basename)(path2);
        this.name = filename;
        this._file = Gio_2_0_default.File.new_for_path(path2);
        const type = this._file.query_file_type(Gio_2_0_default.FileQueryInfoFlags.NONE, null);
        switch (type) {
          case Gio_2_0_default.FileType.DIRECTORY:
            this._isDirectory = true;
            break;
          case Gio_2_0_default.FileType.MOUNTABLE:
            break;
          case Gio_2_0_default.FileType.REGULAR:
            this._isFile = true;
            break;
          case Gio_2_0_default.FileType.SYMBOLIC_LINK:
          case Gio_2_0_default.FileType.SHORTCUT:
            this._isSymbolicLink = true;
            break;
          case Gio_2_0_default.FileType.SPECIAL:
            this._isBlockDevice = Gio_2_0_default.unix_is_system_device_path(path2);
            break;
        }
      }
      isFile() {
        return this._isFile;
      }
      isDirectory() {
        return this._isDirectory;
      }
      isBlockDevice() {
        return this._isBlockDevice;
      }
      isCharacterDevice() {
        return this._isCharacterDevice;
      }
      isSymbolicLink() {
        return this._isSymbolicLink;
      }
      isFIFO() {
        return this._isFIFO;
      }
      isSocket() {
        return this._isSocket;
      }
    };
  }
});

// ../../node/fs/lib/esm/promises.js
async function open(path2, flags, mode) {
  return new FileHandle({
    path: path2,
    flags,
    mode
  });
}
var import_path2;
var init_promises2 = __esm({
  "../../node/fs/lib/esm/promises.js"() {
    init_Gio_2_0();
    init_GLib_2_0();
    init_lib();
    import_path2 = __toESM(require_path_browserify());
    init_encoding();
    init_sync();
    init_file_handle();
    init_utils2();
    init_dirent();
  }
});

// ../../node/fs/lib/esm/callback.js
function open2(path2, ...args) {
  let flags;
  let mode;
  let callback;
  switch (args.length) {
    case 1:
      callback = args[0];
      break;
    case 2:
      flags = args[0];
      callback = args[1];
      break;
    case 3:
      flags = args[0];
      mode = args[1];
      callback = args[2];
      break;
    default:
      break;
  }
  open(path2, flags, mode).then((fileHandle) => {
    callback(null, fileHandle.fd);
  }).catch((err) => {
    callback(err, -1);
  });
}
function write3(fd, data, ...args) {
  const fileHandle = FileHandle.getInstance(fd);
  if (typeof data === "string") {
    const callback2 = args[args.length - 1];
    fileHandle.write(data, ...args.pop()).then((res) => {
      callback2(null, res.bytesWritten, res.buffer);
    }).catch((err) => {
      callback2(err, 0, "");
    });
    return;
  }
  const callback = args[args.length - 1];
  const offset = args[0];
  const length2 = args[1];
  const position = args[2];
  fileHandle.write(data, offset, length2, position).then((res) => {
    callback(null, res.bytesWritten, res.buffer);
  }).catch((err) => {
    callback(err, 0, Buffer.from([]));
  });
}
function close(fd, callback) {
  FileHandle.getInstance(fd).close().then(() => {
    callback(null);
  }).catch((err) => callback(err));
}
var init_callback = __esm({
  "../../node/fs/lib/esm/callback.js"() {
    init_promises2();
    init_lib();
    init_file_handle();
  }
});

// ../../node/fs/lib/esm/write-stream.js
function toPathIfFileURL(fileURLOrPath) {
  if (!(fileURLOrPath instanceof URL)) {
    return fileURLOrPath;
  }
  return fileURLToPath(fileURLOrPath);
}
var kIsPerformingIO, kIoDone, _a, WriteStream2;
var init_write_stream = __esm({
  "../../node/fs/lib/esm/write-stream.js"() {
    init_esm6();
    init_esm8();
    init_callback();
    kIsPerformingIO = Symbol("kIsPerformingIO");
    kIoDone = Symbol("kIoDone");
    WriteStream2 = class extends Writable2 {
      constructor(path2, opts = {}) {
        super(opts);
        this.bytesWritten = 0;
        this.fd = null;
        this.flags = "w";
        this.mode = 438;
        this.pos = 0;
        this[_a] = false;
        this.path = toPathIfFileURL(path2);
        if (opts.encoding) {
          this.setDefaultEncoding(opts.encoding);
        }
      }
      close(callback, err = null) {
        if (!this.fd) {
          callback(err);
        } else {
          close(this.fd, (er) => {
            callback(er || err);
          });
          this.fd = null;
        }
      }
      _construct(callback) {
        open2(
          this.path.toString(),
          this.flags,
          this.mode,
          (err, fd) => {
            if (err) {
              callback(err);
              return;
            }
            this.fd = fd;
            callback();
            this.emit("open", this.fd);
            this.emit("ready");
          }
        );
      }
      _write(data, _encoding, cb) {
        this[kIsPerformingIO] = true;
        write3(
          this.fd,
          data,
          0,
          data.length,
          this.pos,
          (er, bytes) => {
            this[kIsPerformingIO] = false;
            if (this.destroyed) {
              cb(er);
              return this.emit(kIoDone, er);
            }
            if (er) {
              return cb(er);
            }
            this.bytesWritten += bytes;
            cb();
          }
        );
        if (this.pos !== void 0) {
          this.pos += data.length;
        }
      }
      _destroy(err, cb) {
        if (this[kIsPerformingIO]) {
          this.once(kIoDone, (er) => this.close(cb, err || er));
        } else {
          this.close(cb, err);
        }
      }
    };
    _a = kIsPerformingIO;
  }
});

// ../../node/fs/lib/esm/stats.js
var import_path3, Stats;
var init_stats = __esm({
  "../../node/fs/lib/esm/stats.js"() {
    init_Gio_2_0();
    init_dirent();
    import_path3 = __toESM(require_path_browserify());
    Stats = class extends Dirent {
      constructor(path2, filename) {
        if (!filename)
          filename = (0, import_path3.basename)(path2);
        super(path2, filename);
        if (!this._file) {
          throw new TypeError("this._file is not defined!");
        }
        this._info = this._file.query_info("standard::", Gio_2_0_default.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null);
      }
      get birthtimeMs() {
        const creationDateTime = this._info.get_creation_date_time();
        return creationDateTime.get_microsecond() * 1e3;
      }
      get birthtime() {
        const creationDateTime = this._info.get_creation_date_time();
        return new Date(creationDateTime.format_iso8601());
      }
    };
  }
});

// ../../../node_modules/web-streams-polyfill/dist/ponyfill.mjs
function noop() {
  return void 0;
}
function getGlobals() {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  return void 0;
}
function typeIsObject(x) {
  return typeof x === "object" && x !== null || typeof x === "function";
}
function newPromise(executor) {
  return new originalPromise(executor);
}
function promiseResolvedWith(value) {
  return originalPromiseResolve(value);
}
function promiseRejectedWith(reason) {
  return originalPromiseReject(reason);
}
function PerformPromiseThen(promise, onFulfilled, onRejected) {
  return originalPromiseThen.call(promise, onFulfilled, onRejected);
}
function uponPromise(promise, onFulfilled, onRejected) {
  PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
}
function uponFulfillment(promise, onFulfilled) {
  uponPromise(promise, onFulfilled);
}
function uponRejection(promise, onRejected) {
  uponPromise(promise, void 0, onRejected);
}
function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
  return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
}
function setPromiseIsHandledToTrue(promise) {
  PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
}
function reflectCall(F2, V, args) {
  if (typeof F2 !== "function") {
    throw new TypeError("Argument is not a function");
  }
  return Function.prototype.apply.call(F2, V, args);
}
function promiseCall(F2, V, args) {
  try {
    return promiseResolvedWith(reflectCall(F2, V, args));
  } catch (value) {
    return promiseRejectedWith(value);
  }
}
function ReadableStreamReaderGenericInitialize(reader, stream) {
  reader._ownerReadableStream = stream;
  stream._reader = reader;
  if (stream._state === "readable") {
    defaultReaderClosedPromiseInitialize(reader);
  } else if (stream._state === "closed") {
    defaultReaderClosedPromiseInitializeAsResolved(reader);
  } else {
    defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
  }
}
function ReadableStreamReaderGenericCancel(reader, reason) {
  var stream = reader._ownerReadableStream;
  return ReadableStreamCancel(stream, reason);
}
function ReadableStreamReaderGenericRelease(reader) {
  if (reader._ownerReadableStream._state === "readable") {
    defaultReaderClosedPromiseReject(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
  } else {
    defaultReaderClosedPromiseResetToRejected(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
  }
  reader._ownerReadableStream._reader = void 0;
  reader._ownerReadableStream = void 0;
}
function readerLockException(name) {
  return new TypeError("Cannot " + name + " a stream using a released reader");
}
function defaultReaderClosedPromiseInitialize(reader) {
  reader._closedPromise = newPromise(function(resolve3, reject) {
    reader._closedPromise_resolve = resolve3;
    reader._closedPromise_reject = reject;
  });
}
function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
  defaultReaderClosedPromiseInitialize(reader);
  defaultReaderClosedPromiseReject(reader, reason);
}
function defaultReaderClosedPromiseInitializeAsResolved(reader) {
  defaultReaderClosedPromiseInitialize(reader);
  defaultReaderClosedPromiseResolve(reader);
}
function defaultReaderClosedPromiseReject(reader, reason) {
  if (reader._closedPromise_reject === void 0) {
    return;
  }
  setPromiseIsHandledToTrue(reader._closedPromise);
  reader._closedPromise_reject(reason);
  reader._closedPromise_resolve = void 0;
  reader._closedPromise_reject = void 0;
}
function defaultReaderClosedPromiseResetToRejected(reader, reason) {
  defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
}
function defaultReaderClosedPromiseResolve(reader) {
  if (reader._closedPromise_resolve === void 0) {
    return;
  }
  reader._closedPromise_resolve(void 0);
  reader._closedPromise_resolve = void 0;
  reader._closedPromise_reject = void 0;
}
function isDictionary(x) {
  return typeof x === "object" || typeof x === "function";
}
function assertDictionary(obj, context) {
  if (obj !== void 0 && !isDictionary(obj)) {
    throw new TypeError(context + " is not an object.");
  }
}
function assertFunction(x, context) {
  if (typeof x !== "function") {
    throw new TypeError(context + " is not a function.");
  }
}
function isObject2(x) {
  return typeof x === "object" && x !== null || typeof x === "function";
}
function assertObject(x, context) {
  if (!isObject2(x)) {
    throw new TypeError(context + " is not an object.");
  }
}
function assertRequiredArgument(x, position, context) {
  if (x === void 0) {
    throw new TypeError("Parameter " + position + " is required in '" + context + "'.");
  }
}
function assertRequiredField(x, field, context) {
  if (x === void 0) {
    throw new TypeError(field + " is required in '" + context + "'.");
  }
}
function convertUnrestrictedDouble(value) {
  return Number(value);
}
function censorNegativeZero(x) {
  return x === 0 ? 0 : x;
}
function integerPart(x) {
  return censorNegativeZero(MathTrunc(x));
}
function convertUnsignedLongLongWithEnforceRange(value, context) {
  var lowerBound = 0;
  var upperBound = Number.MAX_SAFE_INTEGER;
  var x = Number(value);
  x = censorNegativeZero(x);
  if (!NumberIsFinite(x)) {
    throw new TypeError(context + " is not a finite number");
  }
  x = integerPart(x);
  if (x < lowerBound || x > upperBound) {
    throw new TypeError(context + " is outside the accepted range of " + lowerBound + " to " + upperBound + ", inclusive");
  }
  if (!NumberIsFinite(x) || x === 0) {
    return 0;
  }
  return x;
}
function assertReadableStream(x, context) {
  if (!IsReadableStream(x)) {
    throw new TypeError(context + " is not a ReadableStream.");
  }
}
function AcquireReadableStreamDefaultReader(stream) {
  return new ReadableStreamDefaultReader(stream);
}
function ReadableStreamAddReadRequest(stream, readRequest) {
  stream._reader._readRequests.push(readRequest);
}
function ReadableStreamFulfillReadRequest(stream, chunk, done) {
  var reader = stream._reader;
  var readRequest = reader._readRequests.shift();
  if (done) {
    readRequest._closeSteps();
  } else {
    readRequest._chunkSteps(chunk);
  }
}
function ReadableStreamGetNumReadRequests(stream) {
  return stream._reader._readRequests.length;
}
function ReadableStreamHasDefaultReader(stream) {
  var reader = stream._reader;
  if (reader === void 0) {
    return false;
  }
  if (!IsReadableStreamDefaultReader(reader)) {
    return false;
  }
  return true;
}
function IsReadableStreamDefaultReader(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_readRequests")) {
    return false;
  }
  return x instanceof ReadableStreamDefaultReader;
}
function ReadableStreamDefaultReaderRead(reader, readRequest) {
  var stream = reader._ownerReadableStream;
  stream._disturbed = true;
  if (stream._state === "closed") {
    readRequest._closeSteps();
  } else if (stream._state === "errored") {
    readRequest._errorSteps(stream._storedError);
  } else {
    stream._readableStreamController[PullSteps](readRequest);
  }
}
function defaultReaderBrandCheckException(name) {
  return new TypeError("ReadableStreamDefaultReader.prototype." + name + " can only be used on a ReadableStreamDefaultReader");
}
function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
  var reader = AcquireReadableStreamDefaultReader(stream);
  var impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
  iterator._asyncIteratorImpl = impl;
  return iterator;
}
function IsReadableStreamAsyncIterator(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_asyncIteratorImpl")) {
    return false;
  }
  try {
    return x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
  } catch (_a3) {
    return false;
  }
}
function streamAsyncIteratorBrandCheckException(name) {
  return new TypeError("ReadableStreamAsyncIterator." + name + " can only be used on a ReadableSteamAsyncIterator");
}
function CreateArrayFromList(elements) {
  return elements.slice();
}
function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
  new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
}
function TransferArrayBuffer(O) {
  return O;
}
function IsDetachedBuffer(O) {
  return false;
}
function ArrayBufferSlice(buffer, begin, end) {
  if (buffer.slice) {
    return buffer.slice(begin, end);
  }
  var length2 = end - begin;
  var slice3 = new ArrayBuffer(length2);
  CopyDataBlockBytes(slice3, 0, buffer, begin, length2);
  return slice3;
}
function IsNonNegativeNumber(v) {
  if (typeof v !== "number") {
    return false;
  }
  if (NumberIsNaN2(v)) {
    return false;
  }
  if (v < 0) {
    return false;
  }
  return true;
}
function CloneAsUint8Array(O) {
  var buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
  return new Uint8Array(buffer);
}
function DequeueValue(container) {
  var pair = container._queue.shift();
  container._queueTotalSize -= pair.size;
  if (container._queueTotalSize < 0) {
    container._queueTotalSize = 0;
  }
  return pair.value;
}
function EnqueueValueWithSize(container, value, size) {
  if (!IsNonNegativeNumber(size) || size === Infinity) {
    throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
  }
  container._queue.push({ value, size });
  container._queueTotalSize += size;
}
function PeekQueueValue(container) {
  var pair = container._queue.peek();
  return pair.value;
}
function ResetQueue(container) {
  container._queue = new SimpleQueue();
  container._queueTotalSize = 0;
}
function IsReadableByteStreamController(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableByteStream")) {
    return false;
  }
  return x instanceof ReadableByteStreamController;
}
function IsReadableStreamBYOBRequest(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_associatedReadableByteStreamController")) {
    return false;
  }
  return x instanceof ReadableStreamBYOBRequest;
}
function ReadableByteStreamControllerCallPullIfNeeded(controller) {
  var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
  if (!shouldPull) {
    return;
  }
  if (controller._pulling) {
    controller._pullAgain = true;
    return;
  }
  controller._pulling = true;
  var pullPromise = controller._pullAlgorithm();
  uponPromise(pullPromise, function() {
    controller._pulling = false;
    if (controller._pullAgain) {
      controller._pullAgain = false;
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }, function(e) {
    ReadableByteStreamControllerError(controller, e);
  });
}
function ReadableByteStreamControllerClearPendingPullIntos(controller) {
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  controller._pendingPullIntos = new SimpleQueue();
}
function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
  var done = false;
  if (stream._state === "closed") {
    done = true;
  }
  var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
  if (pullIntoDescriptor.readerType === "default") {
    ReadableStreamFulfillReadRequest(stream, filledView, done);
  } else {
    ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
  }
}
function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
  var bytesFilled = pullIntoDescriptor.bytesFilled;
  var elementSize = pullIntoDescriptor.elementSize;
  return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
}
function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength3) {
  controller._queue.push({ buffer, byteOffset, byteLength: byteLength3 });
  controller._queueTotalSize += byteLength3;
}
function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
  var elementSize = pullIntoDescriptor.elementSize;
  var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
  var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
  var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
  var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
  var totalBytesToCopyRemaining = maxBytesToCopy;
  var ready = false;
  if (maxAlignedBytes > currentAlignedBytes) {
    totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
    ready = true;
  }
  var queue2 = controller._queue;
  while (totalBytesToCopyRemaining > 0) {
    var headOfQueue = queue2.peek();
    var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
    var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
    CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
    if (headOfQueue.byteLength === bytesToCopy) {
      queue2.shift();
    } else {
      headOfQueue.byteOffset += bytesToCopy;
      headOfQueue.byteLength -= bytesToCopy;
    }
    controller._queueTotalSize -= bytesToCopy;
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
    totalBytesToCopyRemaining -= bytesToCopy;
  }
  return ready;
}
function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
  pullIntoDescriptor.bytesFilled += size;
}
function ReadableByteStreamControllerHandleQueueDrain(controller) {
  if (controller._queueTotalSize === 0 && controller._closeRequested) {
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamClose(controller._controlledReadableByteStream);
  } else {
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }
}
function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
  if (controller._byobRequest === null) {
    return;
  }
  controller._byobRequest._associatedReadableByteStreamController = void 0;
  controller._byobRequest._view = null;
  controller._byobRequest = null;
}
function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
  while (controller._pendingPullIntos.length > 0) {
    if (controller._queueTotalSize === 0) {
      return;
    }
    var pullIntoDescriptor = controller._pendingPullIntos.peek();
    if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
      ReadableByteStreamControllerShiftPendingPullInto(controller);
      ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    }
  }
}
function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
  var stream = controller._controlledReadableByteStream;
  var elementSize = 1;
  if (view.constructor !== DataView) {
    elementSize = view.constructor.BYTES_PER_ELEMENT;
  }
  var ctor = view.constructor;
  var buffer = TransferArrayBuffer(view.buffer);
  var pullIntoDescriptor = {
    buffer,
    bufferByteLength: buffer.byteLength,
    byteOffset: view.byteOffset,
    byteLength: view.byteLength,
    bytesFilled: 0,
    elementSize,
    viewConstructor: ctor,
    readerType: "byob"
  };
  if (controller._pendingPullIntos.length > 0) {
    controller._pendingPullIntos.push(pullIntoDescriptor);
    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    return;
  }
  if (stream._state === "closed") {
    var emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
    readIntoRequest._closeSteps(emptyView);
    return;
  }
  if (controller._queueTotalSize > 0) {
    if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
      var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
      ReadableByteStreamControllerHandleQueueDrain(controller);
      readIntoRequest._chunkSteps(filledView);
      return;
    }
    if (controller._closeRequested) {
      var e = new TypeError("Insufficient bytes to fill elements in the given buffer");
      ReadableByteStreamControllerError(controller, e);
      readIntoRequest._errorSteps(e);
      return;
    }
  }
  controller._pendingPullIntos.push(pullIntoDescriptor);
  ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
  ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
  var stream = controller._controlledReadableByteStream;
  if (ReadableStreamHasBYOBReader(stream)) {
    while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
      ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
    }
  }
}
function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
  ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
  if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
    return;
  }
  ReadableByteStreamControllerShiftPendingPullInto(controller);
  var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
  if (remainderSize > 0) {
    var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
    var remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
  }
  pullIntoDescriptor.bytesFilled -= remainderSize;
  ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
  ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
}
function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
  var firstDescriptor = controller._pendingPullIntos.peek();
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  var state = controller._controlledReadableByteStream._state;
  if (state === "closed") {
    ReadableByteStreamControllerRespondInClosedState(controller);
  } else {
    ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
  }
  ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerShiftPendingPullInto(controller) {
  var descriptor = controller._pendingPullIntos.shift();
  return descriptor;
}
function ReadableByteStreamControllerShouldCallPull(controller) {
  var stream = controller._controlledReadableByteStream;
  if (stream._state !== "readable") {
    return false;
  }
  if (controller._closeRequested) {
    return false;
  }
  if (!controller._started) {
    return false;
  }
  if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    return true;
  }
  if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
    return true;
  }
  var desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
  if (desiredSize > 0) {
    return true;
  }
  return false;
}
function ReadableByteStreamControllerClearAlgorithms(controller) {
  controller._pullAlgorithm = void 0;
  controller._cancelAlgorithm = void 0;
}
function ReadableByteStreamControllerClose(controller) {
  var stream = controller._controlledReadableByteStream;
  if (controller._closeRequested || stream._state !== "readable") {
    return;
  }
  if (controller._queueTotalSize > 0) {
    controller._closeRequested = true;
    return;
  }
  if (controller._pendingPullIntos.length > 0) {
    var firstPendingPullInto = controller._pendingPullIntos.peek();
    if (firstPendingPullInto.bytesFilled > 0) {
      var e = new TypeError("Insufficient bytes to fill elements in the given buffer");
      ReadableByteStreamControllerError(controller, e);
      throw e;
    }
  }
  ReadableByteStreamControllerClearAlgorithms(controller);
  ReadableStreamClose(stream);
}
function ReadableByteStreamControllerEnqueue(controller, chunk) {
  var stream = controller._controlledReadableByteStream;
  if (controller._closeRequested || stream._state !== "readable") {
    return;
  }
  var buffer = chunk.buffer;
  var byteOffset = chunk.byteOffset;
  var byteLength3 = chunk.byteLength;
  var transferredBuffer = TransferArrayBuffer(buffer);
  if (controller._pendingPullIntos.length > 0) {
    var firstPendingPullInto = controller._pendingPullIntos.peek();
    if (IsDetachedBuffer(firstPendingPullInto.buffer))
      ;
    firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
  }
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  if (ReadableStreamHasDefaultReader(stream)) {
    if (ReadableStreamGetNumReadRequests(stream) === 0) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength3);
    } else {
      if (controller._pendingPullIntos.length > 0) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
      }
      var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength3);
      ReadableStreamFulfillReadRequest(stream, transferredView, false);
    }
  } else if (ReadableStreamHasBYOBReader(stream)) {
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength3);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  } else {
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength3);
  }
  ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerError(controller, e) {
  var stream = controller._controlledReadableByteStream;
  if (stream._state !== "readable") {
    return;
  }
  ReadableByteStreamControllerClearPendingPullIntos(controller);
  ResetQueue(controller);
  ReadableByteStreamControllerClearAlgorithms(controller);
  ReadableStreamError(stream, e);
}
function ReadableByteStreamControllerGetBYOBRequest(controller) {
  if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
    var firstDescriptor = controller._pendingPullIntos.peek();
    var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
    var byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
    SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
    controller._byobRequest = byobRequest;
  }
  return controller._byobRequest;
}
function ReadableByteStreamControllerGetDesiredSize(controller) {
  var state = controller._controlledReadableByteStream._state;
  if (state === "errored") {
    return null;
  }
  if (state === "closed") {
    return 0;
  }
  return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableByteStreamControllerRespond(controller, bytesWritten) {
  var firstDescriptor = controller._pendingPullIntos.peek();
  var state = controller._controlledReadableByteStream._state;
  if (state === "closed") {
    if (bytesWritten !== 0) {
      throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
    }
  } else {
    if (bytesWritten === 0) {
      throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
    }
    if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
      throw new RangeError("bytesWritten out of range");
    }
  }
  firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
  ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
}
function ReadableByteStreamControllerRespondWithNewView(controller, view) {
  var firstDescriptor = controller._pendingPullIntos.peek();
  var state = controller._controlledReadableByteStream._state;
  if (state === "closed") {
    if (view.byteLength !== 0) {
      throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
    }
  } else {
    if (view.byteLength === 0) {
      throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
    }
  }
  if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
    throw new RangeError("The region specified by view does not match byobRequest");
  }
  if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
    throw new RangeError("The buffer of view has different capacity than byobRequest");
  }
  if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
    throw new RangeError("The region specified by view is larger than byobRequest");
  }
  var viewByteLength = view.byteLength;
  firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
  ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
}
function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
  controller._controlledReadableByteStream = stream;
  controller._pullAgain = false;
  controller._pulling = false;
  controller._byobRequest = null;
  controller._queue = controller._queueTotalSize = void 0;
  ResetQueue(controller);
  controller._closeRequested = false;
  controller._started = false;
  controller._strategyHWM = highWaterMark;
  controller._pullAlgorithm = pullAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  controller._autoAllocateChunkSize = autoAllocateChunkSize;
  controller._pendingPullIntos = new SimpleQueue();
  stream._readableStreamController = controller;
  var startResult = startAlgorithm();
  uponPromise(promiseResolvedWith(startResult), function() {
    controller._started = true;
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }, function(r) {
    ReadableByteStreamControllerError(controller, r);
  });
}
function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
  var controller = Object.create(ReadableByteStreamController.prototype);
  var startAlgorithm = function() {
    return void 0;
  };
  var pullAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  var cancelAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  if (underlyingByteSource.start !== void 0) {
    startAlgorithm = function() {
      return underlyingByteSource.start(controller);
    };
  }
  if (underlyingByteSource.pull !== void 0) {
    pullAlgorithm = function() {
      return underlyingByteSource.pull(controller);
    };
  }
  if (underlyingByteSource.cancel !== void 0) {
    cancelAlgorithm = function(reason) {
      return underlyingByteSource.cancel(reason);
    };
  }
  var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
  if (autoAllocateChunkSize === 0) {
    throw new TypeError("autoAllocateChunkSize must be greater than 0");
  }
  SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
}
function SetUpReadableStreamBYOBRequest(request, controller, view) {
  request._associatedReadableByteStreamController = controller;
  request._view = view;
}
function byobRequestBrandCheckException(name) {
  return new TypeError("ReadableStreamBYOBRequest.prototype." + name + " can only be used on a ReadableStreamBYOBRequest");
}
function byteStreamControllerBrandCheckException(name) {
  return new TypeError("ReadableByteStreamController.prototype." + name + " can only be used on a ReadableByteStreamController");
}
function AcquireReadableStreamBYOBReader(stream) {
  return new ReadableStreamBYOBReader(stream);
}
function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
  stream._reader._readIntoRequests.push(readIntoRequest);
}
function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
  var reader = stream._reader;
  var readIntoRequest = reader._readIntoRequests.shift();
  if (done) {
    readIntoRequest._closeSteps(chunk);
  } else {
    readIntoRequest._chunkSteps(chunk);
  }
}
function ReadableStreamGetNumReadIntoRequests(stream) {
  return stream._reader._readIntoRequests.length;
}
function ReadableStreamHasBYOBReader(stream) {
  var reader = stream._reader;
  if (reader === void 0) {
    return false;
  }
  if (!IsReadableStreamBYOBReader(reader)) {
    return false;
  }
  return true;
}
function IsReadableStreamBYOBReader(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_readIntoRequests")) {
    return false;
  }
  return x instanceof ReadableStreamBYOBReader;
}
function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
  var stream = reader._ownerReadableStream;
  stream._disturbed = true;
  if (stream._state === "errored") {
    readIntoRequest._errorSteps(stream._storedError);
  } else {
    ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
  }
}
function byobReaderBrandCheckException(name) {
  return new TypeError("ReadableStreamBYOBReader.prototype." + name + " can only be used on a ReadableStreamBYOBReader");
}
function ExtractHighWaterMark(strategy, defaultHWM) {
  var highWaterMark = strategy.highWaterMark;
  if (highWaterMark === void 0) {
    return defaultHWM;
  }
  if (NumberIsNaN2(highWaterMark) || highWaterMark < 0) {
    throw new RangeError("Invalid highWaterMark");
  }
  return highWaterMark;
}
function ExtractSizeAlgorithm(strategy) {
  var size = strategy.size;
  if (!size) {
    return function() {
      return 1;
    };
  }
  return size;
}
function convertQueuingStrategy(init2, context) {
  assertDictionary(init2, context);
  var highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
  var size = init2 === null || init2 === void 0 ? void 0 : init2.size;
  return {
    highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
    size: size === void 0 ? void 0 : convertQueuingStrategySize(size, context + " has member 'size' that")
  };
}
function convertQueuingStrategySize(fn, context) {
  assertFunction(fn, context);
  return function(chunk) {
    return convertUnrestrictedDouble(fn(chunk));
  };
}
function convertUnderlyingSink(original, context) {
  assertDictionary(original, context);
  var abort2 = original === null || original === void 0 ? void 0 : original.abort;
  var close2 = original === null || original === void 0 ? void 0 : original.close;
  var start = original === null || original === void 0 ? void 0 : original.start;
  var type = original === null || original === void 0 ? void 0 : original.type;
  var write4 = original === null || original === void 0 ? void 0 : original.write;
  return {
    abort: abort2 === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort2, original, context + " has member 'abort' that"),
    close: close2 === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close2, original, context + " has member 'close' that"),
    start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, context + " has member 'start' that"),
    write: write4 === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write4, original, context + " has member 'write' that"),
    type
  };
}
function convertUnderlyingSinkAbortCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(reason) {
    return promiseCall(fn, original, [reason]);
  };
}
function convertUnderlyingSinkCloseCallback(fn, original, context) {
  assertFunction(fn, context);
  return function() {
    return promiseCall(fn, original, []);
  };
}
function convertUnderlyingSinkStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(controller) {
    return reflectCall(fn, original, [controller]);
  };
}
function convertUnderlyingSinkWriteCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(chunk, controller) {
    return promiseCall(fn, original, [chunk, controller]);
  };
}
function assertWritableStream(x, context) {
  if (!IsWritableStream(x)) {
    throw new TypeError(context + " is not a WritableStream.");
  }
}
function isAbortSignal(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  try {
    return typeof value.aborted === "boolean";
  } catch (_a3) {
    return false;
  }
}
function createAbortController() {
  if (supportsAbortController) {
    return new AbortController();
  }
  return void 0;
}
function AcquireWritableStreamDefaultWriter(stream) {
  return new WritableStreamDefaultWriter(stream);
}
function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
  if (highWaterMark === void 0) {
    highWaterMark = 1;
  }
  if (sizeAlgorithm === void 0) {
    sizeAlgorithm = function() {
      return 1;
    };
  }
  var stream = Object.create(WritableStream.prototype);
  InitializeWritableStream(stream);
  var controller = Object.create(WritableStreamDefaultController.prototype);
  SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
  return stream;
}
function InitializeWritableStream(stream) {
  stream._state = "writable";
  stream._storedError = void 0;
  stream._writer = void 0;
  stream._writableStreamController = void 0;
  stream._writeRequests = new SimpleQueue();
  stream._inFlightWriteRequest = void 0;
  stream._closeRequest = void 0;
  stream._inFlightCloseRequest = void 0;
  stream._pendingAbortRequest = void 0;
  stream._backpressure = false;
}
function IsWritableStream(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_writableStreamController")) {
    return false;
  }
  return x instanceof WritableStream;
}
function IsWritableStreamLocked(stream) {
  if (stream._writer === void 0) {
    return false;
  }
  return true;
}
function WritableStreamAbort(stream, reason) {
  var _a3;
  if (stream._state === "closed" || stream._state === "errored") {
    return promiseResolvedWith(void 0);
  }
  stream._writableStreamController._abortReason = reason;
  (_a3 = stream._writableStreamController._abortController) === null || _a3 === void 0 ? void 0 : _a3.abort();
  var state = stream._state;
  if (state === "closed" || state === "errored") {
    return promiseResolvedWith(void 0);
  }
  if (stream._pendingAbortRequest !== void 0) {
    return stream._pendingAbortRequest._promise;
  }
  var wasAlreadyErroring = false;
  if (state === "erroring") {
    wasAlreadyErroring = true;
    reason = void 0;
  }
  var promise = newPromise(function(resolve3, reject) {
    stream._pendingAbortRequest = {
      _promise: void 0,
      _resolve: resolve3,
      _reject: reject,
      _reason: reason,
      _wasAlreadyErroring: wasAlreadyErroring
    };
  });
  stream._pendingAbortRequest._promise = promise;
  if (!wasAlreadyErroring) {
    WritableStreamStartErroring(stream, reason);
  }
  return promise;
}
function WritableStreamClose(stream) {
  var state = stream._state;
  if (state === "closed" || state === "errored") {
    return promiseRejectedWith(new TypeError("The stream (in " + state + " state) is not in the writable state and cannot be closed"));
  }
  var promise = newPromise(function(resolve3, reject) {
    var closeRequest = {
      _resolve: resolve3,
      _reject: reject
    };
    stream._closeRequest = closeRequest;
  });
  var writer = stream._writer;
  if (writer !== void 0 && stream._backpressure && state === "writable") {
    defaultWriterReadyPromiseResolve(writer);
  }
  WritableStreamDefaultControllerClose(stream._writableStreamController);
  return promise;
}
function WritableStreamAddWriteRequest(stream) {
  var promise = newPromise(function(resolve3, reject) {
    var writeRequest = {
      _resolve: resolve3,
      _reject: reject
    };
    stream._writeRequests.push(writeRequest);
  });
  return promise;
}
function WritableStreamDealWithRejection(stream, error) {
  var state = stream._state;
  if (state === "writable") {
    WritableStreamStartErroring(stream, error);
    return;
  }
  WritableStreamFinishErroring(stream);
}
function WritableStreamStartErroring(stream, reason) {
  var controller = stream._writableStreamController;
  stream._state = "erroring";
  stream._storedError = reason;
  var writer = stream._writer;
  if (writer !== void 0) {
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
  }
  if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
    WritableStreamFinishErroring(stream);
  }
}
function WritableStreamFinishErroring(stream) {
  stream._state = "errored";
  stream._writableStreamController[ErrorSteps]();
  var storedError = stream._storedError;
  stream._writeRequests.forEach(function(writeRequest) {
    writeRequest._reject(storedError);
  });
  stream._writeRequests = new SimpleQueue();
  if (stream._pendingAbortRequest === void 0) {
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    return;
  }
  var abortRequest = stream._pendingAbortRequest;
  stream._pendingAbortRequest = void 0;
  if (abortRequest._wasAlreadyErroring) {
    abortRequest._reject(storedError);
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    return;
  }
  var promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
  uponPromise(promise, function() {
    abortRequest._resolve();
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
  }, function(reason) {
    abortRequest._reject(reason);
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
  });
}
function WritableStreamFinishInFlightWrite(stream) {
  stream._inFlightWriteRequest._resolve(void 0);
  stream._inFlightWriteRequest = void 0;
}
function WritableStreamFinishInFlightWriteWithError(stream, error) {
  stream._inFlightWriteRequest._reject(error);
  stream._inFlightWriteRequest = void 0;
  WritableStreamDealWithRejection(stream, error);
}
function WritableStreamFinishInFlightClose(stream) {
  stream._inFlightCloseRequest._resolve(void 0);
  stream._inFlightCloseRequest = void 0;
  var state = stream._state;
  if (state === "erroring") {
    stream._storedError = void 0;
    if (stream._pendingAbortRequest !== void 0) {
      stream._pendingAbortRequest._resolve();
      stream._pendingAbortRequest = void 0;
    }
  }
  stream._state = "closed";
  var writer = stream._writer;
  if (writer !== void 0) {
    defaultWriterClosedPromiseResolve(writer);
  }
}
function WritableStreamFinishInFlightCloseWithError(stream, error) {
  stream._inFlightCloseRequest._reject(error);
  stream._inFlightCloseRequest = void 0;
  if (stream._pendingAbortRequest !== void 0) {
    stream._pendingAbortRequest._reject(error);
    stream._pendingAbortRequest = void 0;
  }
  WritableStreamDealWithRejection(stream, error);
}
function WritableStreamCloseQueuedOrInFlight(stream) {
  if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
    return false;
  }
  return true;
}
function WritableStreamHasOperationMarkedInFlight(stream) {
  if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
    return false;
  }
  return true;
}
function WritableStreamMarkCloseRequestInFlight(stream) {
  stream._inFlightCloseRequest = stream._closeRequest;
  stream._closeRequest = void 0;
}
function WritableStreamMarkFirstWriteRequestInFlight(stream) {
  stream._inFlightWriteRequest = stream._writeRequests.shift();
}
function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
  if (stream._closeRequest !== void 0) {
    stream._closeRequest._reject(stream._storedError);
    stream._closeRequest = void 0;
  }
  var writer = stream._writer;
  if (writer !== void 0) {
    defaultWriterClosedPromiseReject(writer, stream._storedError);
  }
}
function WritableStreamUpdateBackpressure(stream, backpressure) {
  var writer = stream._writer;
  if (writer !== void 0 && backpressure !== stream._backpressure) {
    if (backpressure) {
      defaultWriterReadyPromiseReset(writer);
    } else {
      defaultWriterReadyPromiseResolve(writer);
    }
  }
  stream._backpressure = backpressure;
}
function IsWritableStreamDefaultWriter(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_ownerWritableStream")) {
    return false;
  }
  return x instanceof WritableStreamDefaultWriter;
}
function WritableStreamDefaultWriterAbort(writer, reason) {
  var stream = writer._ownerWritableStream;
  return WritableStreamAbort(stream, reason);
}
function WritableStreamDefaultWriterClose(writer) {
  var stream = writer._ownerWritableStream;
  return WritableStreamClose(stream);
}
function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
  var stream = writer._ownerWritableStream;
  var state = stream._state;
  if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
    return promiseResolvedWith(void 0);
  }
  if (state === "errored") {
    return promiseRejectedWith(stream._storedError);
  }
  return WritableStreamDefaultWriterClose(writer);
}
function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
  if (writer._closedPromiseState === "pending") {
    defaultWriterClosedPromiseReject(writer, error);
  } else {
    defaultWriterClosedPromiseResetToRejected(writer, error);
  }
}
function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
  if (writer._readyPromiseState === "pending") {
    defaultWriterReadyPromiseReject(writer, error);
  } else {
    defaultWriterReadyPromiseResetToRejected(writer, error);
  }
}
function WritableStreamDefaultWriterGetDesiredSize(writer) {
  var stream = writer._ownerWritableStream;
  var state = stream._state;
  if (state === "errored" || state === "erroring") {
    return null;
  }
  if (state === "closed") {
    return 0;
  }
  return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
}
function WritableStreamDefaultWriterRelease(writer) {
  var stream = writer._ownerWritableStream;
  var releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
  WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
  WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
  stream._writer = void 0;
  writer._ownerWritableStream = void 0;
}
function WritableStreamDefaultWriterWrite(writer, chunk) {
  var stream = writer._ownerWritableStream;
  var controller = stream._writableStreamController;
  var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
  if (stream !== writer._ownerWritableStream) {
    return promiseRejectedWith(defaultWriterLockException("write to"));
  }
  var state = stream._state;
  if (state === "errored") {
    return promiseRejectedWith(stream._storedError);
  }
  if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
    return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
  }
  if (state === "erroring") {
    return promiseRejectedWith(stream._storedError);
  }
  var promise = WritableStreamAddWriteRequest(stream);
  WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
  return promise;
}
function IsWritableStreamDefaultController(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_controlledWritableStream")) {
    return false;
  }
  return x instanceof WritableStreamDefaultController;
}
function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
  controller._controlledWritableStream = stream;
  stream._writableStreamController = controller;
  controller._queue = void 0;
  controller._queueTotalSize = void 0;
  ResetQueue(controller);
  controller._abortReason = void 0;
  controller._abortController = createAbortController();
  controller._started = false;
  controller._strategySizeAlgorithm = sizeAlgorithm;
  controller._strategyHWM = highWaterMark;
  controller._writeAlgorithm = writeAlgorithm;
  controller._closeAlgorithm = closeAlgorithm;
  controller._abortAlgorithm = abortAlgorithm;
  var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
  WritableStreamUpdateBackpressure(stream, backpressure);
  var startResult = startAlgorithm();
  var startPromise = promiseResolvedWith(startResult);
  uponPromise(startPromise, function() {
    controller._started = true;
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }, function(r) {
    controller._started = true;
    WritableStreamDealWithRejection(stream, r);
  });
}
function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
  var controller = Object.create(WritableStreamDefaultController.prototype);
  var startAlgorithm = function() {
    return void 0;
  };
  var writeAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  var closeAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  var abortAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  if (underlyingSink.start !== void 0) {
    startAlgorithm = function() {
      return underlyingSink.start(controller);
    };
  }
  if (underlyingSink.write !== void 0) {
    writeAlgorithm = function(chunk) {
      return underlyingSink.write(chunk, controller);
    };
  }
  if (underlyingSink.close !== void 0) {
    closeAlgorithm = function() {
      return underlyingSink.close();
    };
  }
  if (underlyingSink.abort !== void 0) {
    abortAlgorithm = function(reason) {
      return underlyingSink.abort(reason);
    };
  }
  SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
}
function WritableStreamDefaultControllerClearAlgorithms(controller) {
  controller._writeAlgorithm = void 0;
  controller._closeAlgorithm = void 0;
  controller._abortAlgorithm = void 0;
  controller._strategySizeAlgorithm = void 0;
}
function WritableStreamDefaultControllerClose(controller) {
  EnqueueValueWithSize(controller, closeSentinel, 0);
  WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
  try {
    return controller._strategySizeAlgorithm(chunk);
  } catch (chunkSizeE) {
    WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
    return 1;
  }
}
function WritableStreamDefaultControllerGetDesiredSize(controller) {
  return controller._strategyHWM - controller._queueTotalSize;
}
function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
  try {
    EnqueueValueWithSize(controller, chunk, chunkSize);
  } catch (enqueueE) {
    WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
    return;
  }
  var stream = controller._controlledWritableStream;
  if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
    var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
  }
  WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
  var stream = controller._controlledWritableStream;
  if (!controller._started) {
    return;
  }
  if (stream._inFlightWriteRequest !== void 0) {
    return;
  }
  var state = stream._state;
  if (state === "erroring") {
    WritableStreamFinishErroring(stream);
    return;
  }
  if (controller._queue.length === 0) {
    return;
  }
  var value = PeekQueueValue(controller);
  if (value === closeSentinel) {
    WritableStreamDefaultControllerProcessClose(controller);
  } else {
    WritableStreamDefaultControllerProcessWrite(controller, value);
  }
}
function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
  if (controller._controlledWritableStream._state === "writable") {
    WritableStreamDefaultControllerError(controller, error);
  }
}
function WritableStreamDefaultControllerProcessClose(controller) {
  var stream = controller._controlledWritableStream;
  WritableStreamMarkCloseRequestInFlight(stream);
  DequeueValue(controller);
  var sinkClosePromise = controller._closeAlgorithm();
  WritableStreamDefaultControllerClearAlgorithms(controller);
  uponPromise(sinkClosePromise, function() {
    WritableStreamFinishInFlightClose(stream);
  }, function(reason) {
    WritableStreamFinishInFlightCloseWithError(stream, reason);
  });
}
function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
  var stream = controller._controlledWritableStream;
  WritableStreamMarkFirstWriteRequestInFlight(stream);
  var sinkWritePromise = controller._writeAlgorithm(chunk);
  uponPromise(sinkWritePromise, function() {
    WritableStreamFinishInFlightWrite(stream);
    var state = stream._state;
    DequeueValue(controller);
    if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
      var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }, function(reason) {
    if (stream._state === "writable") {
      WritableStreamDefaultControllerClearAlgorithms(controller);
    }
    WritableStreamFinishInFlightWriteWithError(stream, reason);
  });
}
function WritableStreamDefaultControllerGetBackpressure(controller) {
  var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
  return desiredSize <= 0;
}
function WritableStreamDefaultControllerError(controller, error) {
  var stream = controller._controlledWritableStream;
  WritableStreamDefaultControllerClearAlgorithms(controller);
  WritableStreamStartErroring(stream, error);
}
function streamBrandCheckException$2(name) {
  return new TypeError("WritableStream.prototype." + name + " can only be used on a WritableStream");
}
function defaultControllerBrandCheckException$2(name) {
  return new TypeError("WritableStreamDefaultController.prototype." + name + " can only be used on a WritableStreamDefaultController");
}
function defaultWriterBrandCheckException(name) {
  return new TypeError("WritableStreamDefaultWriter.prototype." + name + " can only be used on a WritableStreamDefaultWriter");
}
function defaultWriterLockException(name) {
  return new TypeError("Cannot " + name + " a stream using a released writer");
}
function defaultWriterClosedPromiseInitialize(writer) {
  writer._closedPromise = newPromise(function(resolve3, reject) {
    writer._closedPromise_resolve = resolve3;
    writer._closedPromise_reject = reject;
    writer._closedPromiseState = "pending";
  });
}
function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
  defaultWriterClosedPromiseInitialize(writer);
  defaultWriterClosedPromiseReject(writer, reason);
}
function defaultWriterClosedPromiseInitializeAsResolved(writer) {
  defaultWriterClosedPromiseInitialize(writer);
  defaultWriterClosedPromiseResolve(writer);
}
function defaultWriterClosedPromiseReject(writer, reason) {
  if (writer._closedPromise_reject === void 0) {
    return;
  }
  setPromiseIsHandledToTrue(writer._closedPromise);
  writer._closedPromise_reject(reason);
  writer._closedPromise_resolve = void 0;
  writer._closedPromise_reject = void 0;
  writer._closedPromiseState = "rejected";
}
function defaultWriterClosedPromiseResetToRejected(writer, reason) {
  defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterClosedPromiseResolve(writer) {
  if (writer._closedPromise_resolve === void 0) {
    return;
  }
  writer._closedPromise_resolve(void 0);
  writer._closedPromise_resolve = void 0;
  writer._closedPromise_reject = void 0;
  writer._closedPromiseState = "resolved";
}
function defaultWriterReadyPromiseInitialize(writer) {
  writer._readyPromise = newPromise(function(resolve3, reject) {
    writer._readyPromise_resolve = resolve3;
    writer._readyPromise_reject = reject;
  });
  writer._readyPromiseState = "pending";
}
function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
  defaultWriterReadyPromiseInitialize(writer);
  defaultWriterReadyPromiseReject(writer, reason);
}
function defaultWriterReadyPromiseInitializeAsResolved(writer) {
  defaultWriterReadyPromiseInitialize(writer);
  defaultWriterReadyPromiseResolve(writer);
}
function defaultWriterReadyPromiseReject(writer, reason) {
  if (writer._readyPromise_reject === void 0) {
    return;
  }
  setPromiseIsHandledToTrue(writer._readyPromise);
  writer._readyPromise_reject(reason);
  writer._readyPromise_resolve = void 0;
  writer._readyPromise_reject = void 0;
  writer._readyPromiseState = "rejected";
}
function defaultWriterReadyPromiseReset(writer) {
  defaultWriterReadyPromiseInitialize(writer);
}
function defaultWriterReadyPromiseResetToRejected(writer, reason) {
  defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterReadyPromiseResolve(writer) {
  if (writer._readyPromise_resolve === void 0) {
    return;
  }
  writer._readyPromise_resolve(void 0);
  writer._readyPromise_resolve = void 0;
  writer._readyPromise_reject = void 0;
  writer._readyPromiseState = "fulfilled";
}
function isDOMExceptionConstructor(ctor) {
  if (!(typeof ctor === "function" || typeof ctor === "object")) {
    return false;
  }
  try {
    new ctor();
    return true;
  } catch (_a3) {
    return false;
  }
}
function createDOMExceptionPolyfill() {
  var ctor = function DOMException3(message, name) {
    this.message = message || "";
    this.name = name || "Error";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  };
  ctor.prototype = Object.create(Error.prototype);
  Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
  return ctor;
}
function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
  var reader = AcquireReadableStreamDefaultReader(source);
  var writer = AcquireWritableStreamDefaultWriter(dest);
  source._disturbed = true;
  var shuttingDown = false;
  var currentWrite = promiseResolvedWith(void 0);
  return newPromise(function(resolve3, reject) {
    var abortAlgorithm;
    if (signal !== void 0) {
      abortAlgorithm = function() {
        var error = new DOMException$1("Aborted", "AbortError");
        var actions = [];
        if (!preventAbort) {
          actions.push(function() {
            if (dest._state === "writable") {
              return WritableStreamAbort(dest, error);
            }
            return promiseResolvedWith(void 0);
          });
        }
        if (!preventCancel) {
          actions.push(function() {
            if (source._state === "readable") {
              return ReadableStreamCancel(source, error);
            }
            return promiseResolvedWith(void 0);
          });
        }
        shutdownWithAction(function() {
          return Promise.all(actions.map(function(action) {
            return action();
          }));
        }, true, error);
      };
      if (signal.aborted) {
        abortAlgorithm();
        return;
      }
      signal.addEventListener("abort", abortAlgorithm);
    }
    function pipeLoop() {
      return newPromise(function(resolveLoop, rejectLoop) {
        function next(done) {
          if (done) {
            resolveLoop();
          } else {
            PerformPromiseThen(pipeStep(), next, rejectLoop);
          }
        }
        next(false);
      });
    }
    function pipeStep() {
      if (shuttingDown) {
        return promiseResolvedWith(true);
      }
      return PerformPromiseThen(writer._readyPromise, function() {
        return newPromise(function(resolveRead, rejectRead) {
          ReadableStreamDefaultReaderRead(reader, {
            _chunkSteps: function(chunk) {
              currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop);
              resolveRead(false);
            },
            _closeSteps: function() {
              return resolveRead(true);
            },
            _errorSteps: rejectRead
          });
        });
      });
    }
    isOrBecomesErrored(source, reader._closedPromise, function(storedError) {
      if (!preventAbort) {
        shutdownWithAction(function() {
          return WritableStreamAbort(dest, storedError);
        }, true, storedError);
      } else {
        shutdown(true, storedError);
      }
    });
    isOrBecomesErrored(dest, writer._closedPromise, function(storedError) {
      if (!preventCancel) {
        shutdownWithAction(function() {
          return ReadableStreamCancel(source, storedError);
        }, true, storedError);
      } else {
        shutdown(true, storedError);
      }
    });
    isOrBecomesClosed(source, reader._closedPromise, function() {
      if (!preventClose) {
        shutdownWithAction(function() {
          return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
        });
      } else {
        shutdown();
      }
    });
    if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
      var destClosed_1 = new TypeError("the destination writable stream closed before all data could be piped to it");
      if (!preventCancel) {
        shutdownWithAction(function() {
          return ReadableStreamCancel(source, destClosed_1);
        }, true, destClosed_1);
      } else {
        shutdown(true, destClosed_1);
      }
    }
    setPromiseIsHandledToTrue(pipeLoop());
    function waitForWritesToFinish() {
      var oldCurrentWrite = currentWrite;
      return PerformPromiseThen(currentWrite, function() {
        return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0;
      });
    }
    function isOrBecomesErrored(stream, promise, action) {
      if (stream._state === "errored") {
        action(stream._storedError);
      } else {
        uponRejection(promise, action);
      }
    }
    function isOrBecomesClosed(stream, promise, action) {
      if (stream._state === "closed") {
        action();
      } else {
        uponFulfillment(promise, action);
      }
    }
    function shutdownWithAction(action, originalIsError, originalError) {
      if (shuttingDown) {
        return;
      }
      shuttingDown = true;
      if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
        uponFulfillment(waitForWritesToFinish(), doTheRest);
      } else {
        doTheRest();
      }
      function doTheRest() {
        uponPromise(action(), function() {
          return finalize(originalIsError, originalError);
        }, function(newError) {
          return finalize(true, newError);
        });
      }
    }
    function shutdown(isError2, error) {
      if (shuttingDown) {
        return;
      }
      shuttingDown = true;
      if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
        uponFulfillment(waitForWritesToFinish(), function() {
          return finalize(isError2, error);
        });
      } else {
        finalize(isError2, error);
      }
    }
    function finalize(isError2, error) {
      WritableStreamDefaultWriterRelease(writer);
      ReadableStreamReaderGenericRelease(reader);
      if (signal !== void 0) {
        signal.removeEventListener("abort", abortAlgorithm);
      }
      if (isError2) {
        reject(error);
      } else {
        resolve3(void 0);
      }
    }
  });
}
function IsReadableStreamDefaultController(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_controlledReadableStream")) {
    return false;
  }
  return x instanceof ReadableStreamDefaultController;
}
function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
  var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
  if (!shouldPull) {
    return;
  }
  if (controller._pulling) {
    controller._pullAgain = true;
    return;
  }
  controller._pulling = true;
  var pullPromise = controller._pullAlgorithm();
  uponPromise(pullPromise, function() {
    controller._pulling = false;
    if (controller._pullAgain) {
      controller._pullAgain = false;
      ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }
  }, function(e) {
    ReadableStreamDefaultControllerError(controller, e);
  });
}
function ReadableStreamDefaultControllerShouldCallPull(controller) {
  var stream = controller._controlledReadableStream;
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    return false;
  }
  if (!controller._started) {
    return false;
  }
  if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    return true;
  }
  var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
  if (desiredSize > 0) {
    return true;
  }
  return false;
}
function ReadableStreamDefaultControllerClearAlgorithms(controller) {
  controller._pullAlgorithm = void 0;
  controller._cancelAlgorithm = void 0;
  controller._strategySizeAlgorithm = void 0;
}
function ReadableStreamDefaultControllerClose(controller) {
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    return;
  }
  var stream = controller._controlledReadableStream;
  controller._closeRequested = true;
  if (controller._queue.length === 0) {
    ReadableStreamDefaultControllerClearAlgorithms(controller);
    ReadableStreamClose(stream);
  }
}
function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    return;
  }
  var stream = controller._controlledReadableStream;
  if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    ReadableStreamFulfillReadRequest(stream, chunk, false);
  } else {
    var chunkSize = void 0;
    try {
      chunkSize = controller._strategySizeAlgorithm(chunk);
    } catch (chunkSizeE) {
      ReadableStreamDefaultControllerError(controller, chunkSizeE);
      throw chunkSizeE;
    }
    try {
      EnqueueValueWithSize(controller, chunk, chunkSize);
    } catch (enqueueE) {
      ReadableStreamDefaultControllerError(controller, enqueueE);
      throw enqueueE;
    }
  }
  ReadableStreamDefaultControllerCallPullIfNeeded(controller);
}
function ReadableStreamDefaultControllerError(controller, e) {
  var stream = controller._controlledReadableStream;
  if (stream._state !== "readable") {
    return;
  }
  ResetQueue(controller);
  ReadableStreamDefaultControllerClearAlgorithms(controller);
  ReadableStreamError(stream, e);
}
function ReadableStreamDefaultControllerGetDesiredSize(controller) {
  var state = controller._controlledReadableStream._state;
  if (state === "errored") {
    return null;
  }
  if (state === "closed") {
    return 0;
  }
  return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableStreamDefaultControllerHasBackpressure(controller) {
  if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
    return false;
  }
  return true;
}
function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
  var state = controller._controlledReadableStream._state;
  if (!controller._closeRequested && state === "readable") {
    return true;
  }
  return false;
}
function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
  controller._controlledReadableStream = stream;
  controller._queue = void 0;
  controller._queueTotalSize = void 0;
  ResetQueue(controller);
  controller._started = false;
  controller._closeRequested = false;
  controller._pullAgain = false;
  controller._pulling = false;
  controller._strategySizeAlgorithm = sizeAlgorithm;
  controller._strategyHWM = highWaterMark;
  controller._pullAlgorithm = pullAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  stream._readableStreamController = controller;
  var startResult = startAlgorithm();
  uponPromise(promiseResolvedWith(startResult), function() {
    controller._started = true;
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
  }, function(r) {
    ReadableStreamDefaultControllerError(controller, r);
  });
}
function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
  var controller = Object.create(ReadableStreamDefaultController.prototype);
  var startAlgorithm = function() {
    return void 0;
  };
  var pullAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  var cancelAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  if (underlyingSource.start !== void 0) {
    startAlgorithm = function() {
      return underlyingSource.start(controller);
    };
  }
  if (underlyingSource.pull !== void 0) {
    pullAlgorithm = function() {
      return underlyingSource.pull(controller);
    };
  }
  if (underlyingSource.cancel !== void 0) {
    cancelAlgorithm = function(reason) {
      return underlyingSource.cancel(reason);
    };
  }
  SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
}
function defaultControllerBrandCheckException$1(name) {
  return new TypeError("ReadableStreamDefaultController.prototype." + name + " can only be used on a ReadableStreamDefaultController");
}
function ReadableStreamTee(stream, cloneForBranch2) {
  if (IsReadableByteStreamController(stream._readableStreamController)) {
    return ReadableByteStreamTee(stream);
  }
  return ReadableStreamDefaultTee(stream);
}
function ReadableStreamDefaultTee(stream, cloneForBranch2) {
  var reader = AcquireReadableStreamDefaultReader(stream);
  var reading = false;
  var readAgain = false;
  var canceled1 = false;
  var canceled2 = false;
  var reason1;
  var reason2;
  var branch1;
  var branch2;
  var resolveCancelPromise;
  var cancelPromise = newPromise(function(resolve3) {
    resolveCancelPromise = resolve3;
  });
  function pullAlgorithm() {
    if (reading) {
      readAgain = true;
      return promiseResolvedWith(void 0);
    }
    reading = true;
    var readRequest = {
      _chunkSteps: function(chunk) {
        queueMicrotask2(function() {
          readAgain = false;
          var chunk1 = chunk;
          var chunk2 = chunk;
          if (!canceled1) {
            ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
          }
          if (!canceled2) {
            ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
          }
          reading = false;
          if (readAgain) {
            pullAlgorithm();
          }
        });
      },
      _closeSteps: function() {
        reading = false;
        if (!canceled1) {
          ReadableStreamDefaultControllerClose(branch1._readableStreamController);
        }
        if (!canceled2) {
          ReadableStreamDefaultControllerClose(branch2._readableStreamController);
        }
        if (!canceled1 || !canceled2) {
          resolveCancelPromise(void 0);
        }
      },
      _errorSteps: function() {
        reading = false;
      }
    };
    ReadableStreamDefaultReaderRead(reader, readRequest);
    return promiseResolvedWith(void 0);
  }
  function cancel1Algorithm(reason) {
    canceled1 = true;
    reason1 = reason;
    if (canceled2) {
      var compositeReason = CreateArrayFromList([reason1, reason2]);
      var cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function cancel2Algorithm(reason) {
    canceled2 = true;
    reason2 = reason;
    if (canceled1) {
      var compositeReason = CreateArrayFromList([reason1, reason2]);
      var cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function startAlgorithm() {
  }
  branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
  branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
  uponRejection(reader._closedPromise, function(r) {
    ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
    ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
    if (!canceled1 || !canceled2) {
      resolveCancelPromise(void 0);
    }
  });
  return [branch1, branch2];
}
function ReadableByteStreamTee(stream) {
  var reader = AcquireReadableStreamDefaultReader(stream);
  var reading = false;
  var readAgainForBranch1 = false;
  var readAgainForBranch2 = false;
  var canceled1 = false;
  var canceled2 = false;
  var reason1;
  var reason2;
  var branch1;
  var branch2;
  var resolveCancelPromise;
  var cancelPromise = newPromise(function(resolve3) {
    resolveCancelPromise = resolve3;
  });
  function forwardReaderError(thisReader) {
    uponRejection(thisReader._closedPromise, function(r) {
      if (thisReader !== reader) {
        return;
      }
      ReadableByteStreamControllerError(branch1._readableStreamController, r);
      ReadableByteStreamControllerError(branch2._readableStreamController, r);
      if (!canceled1 || !canceled2) {
        resolveCancelPromise(void 0);
      }
    });
  }
  function pullWithDefaultReader() {
    if (IsReadableStreamBYOBReader(reader)) {
      ReadableStreamReaderGenericRelease(reader);
      reader = AcquireReadableStreamDefaultReader(stream);
      forwardReaderError(reader);
    }
    var readRequest = {
      _chunkSteps: function(chunk) {
        queueMicrotask2(function() {
          readAgainForBranch1 = false;
          readAgainForBranch2 = false;
          var chunk1 = chunk;
          var chunk2 = chunk;
          if (!canceled1 && !canceled2) {
            try {
              chunk2 = CloneAsUint8Array(chunk);
            } catch (cloneE) {
              ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
              ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
              resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
              return;
            }
          }
          if (!canceled1) {
            ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
          }
          if (!canceled2) {
            ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
          }
          reading = false;
          if (readAgainForBranch1) {
            pull1Algorithm();
          } else if (readAgainForBranch2) {
            pull2Algorithm();
          }
        });
      },
      _closeSteps: function() {
        reading = false;
        if (!canceled1) {
          ReadableByteStreamControllerClose(branch1._readableStreamController);
        }
        if (!canceled2) {
          ReadableByteStreamControllerClose(branch2._readableStreamController);
        }
        if (branch1._readableStreamController._pendingPullIntos.length > 0) {
          ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
        }
        if (branch2._readableStreamController._pendingPullIntos.length > 0) {
          ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
        }
        if (!canceled1 || !canceled2) {
          resolveCancelPromise(void 0);
        }
      },
      _errorSteps: function() {
        reading = false;
      }
    };
    ReadableStreamDefaultReaderRead(reader, readRequest);
  }
  function pullWithBYOBReader(view, forBranch2) {
    if (IsReadableStreamDefaultReader(reader)) {
      ReadableStreamReaderGenericRelease(reader);
      reader = AcquireReadableStreamBYOBReader(stream);
      forwardReaderError(reader);
    }
    var byobBranch = forBranch2 ? branch2 : branch1;
    var otherBranch = forBranch2 ? branch1 : branch2;
    var readIntoRequest = {
      _chunkSteps: function(chunk) {
        queueMicrotask2(function() {
          readAgainForBranch1 = false;
          readAgainForBranch2 = false;
          var byobCanceled = forBranch2 ? canceled2 : canceled1;
          var otherCanceled = forBranch2 ? canceled1 : canceled2;
          if (!otherCanceled) {
            var clonedChunk = void 0;
            try {
              clonedChunk = CloneAsUint8Array(chunk);
            } catch (cloneE) {
              ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
              ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
              resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
              return;
            }
            if (!byobCanceled) {
              ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
            }
            ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
          } else if (!byobCanceled) {
            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
          }
          reading = false;
          if (readAgainForBranch1) {
            pull1Algorithm();
          } else if (readAgainForBranch2) {
            pull2Algorithm();
          }
        });
      },
      _closeSteps: function(chunk) {
        reading = false;
        var byobCanceled = forBranch2 ? canceled2 : canceled1;
        var otherCanceled = forBranch2 ? canceled1 : canceled2;
        if (!byobCanceled) {
          ReadableByteStreamControllerClose(byobBranch._readableStreamController);
        }
        if (!otherCanceled) {
          ReadableByteStreamControllerClose(otherBranch._readableStreamController);
        }
        if (chunk !== void 0) {
          if (!byobCanceled) {
            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
          }
          if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
            ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
          }
        }
        if (!byobCanceled || !otherCanceled) {
          resolveCancelPromise(void 0);
        }
      },
      _errorSteps: function() {
        reading = false;
      }
    };
    ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
  }
  function pull1Algorithm() {
    if (reading) {
      readAgainForBranch1 = true;
      return promiseResolvedWith(void 0);
    }
    reading = true;
    var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
    if (byobRequest === null) {
      pullWithDefaultReader();
    } else {
      pullWithBYOBReader(byobRequest._view, false);
    }
    return promiseResolvedWith(void 0);
  }
  function pull2Algorithm() {
    if (reading) {
      readAgainForBranch2 = true;
      return promiseResolvedWith(void 0);
    }
    reading = true;
    var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
    if (byobRequest === null) {
      pullWithDefaultReader();
    } else {
      pullWithBYOBReader(byobRequest._view, true);
    }
    return promiseResolvedWith(void 0);
  }
  function cancel1Algorithm(reason) {
    canceled1 = true;
    reason1 = reason;
    if (canceled2) {
      var compositeReason = CreateArrayFromList([reason1, reason2]);
      var cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function cancel2Algorithm(reason) {
    canceled2 = true;
    reason2 = reason;
    if (canceled1) {
      var compositeReason = CreateArrayFromList([reason1, reason2]);
      var cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function startAlgorithm() {
    return;
  }
  branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
  branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
  forwardReaderError(reader);
  return [branch1, branch2];
}
function convertUnderlyingDefaultOrByteSource(source, context) {
  assertDictionary(source, context);
  var original = source;
  var autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
  var cancel = original === null || original === void 0 ? void 0 : original.cancel;
  var pull = original === null || original === void 0 ? void 0 : original.pull;
  var start = original === null || original === void 0 ? void 0 : original.start;
  var type = original === null || original === void 0 ? void 0 : original.type;
  return {
    autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, context + " has member 'autoAllocateChunkSize' that"),
    cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, context + " has member 'cancel' that"),
    pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, context + " has member 'pull' that"),
    start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, context + " has member 'start' that"),
    type: type === void 0 ? void 0 : convertReadableStreamType(type, context + " has member 'type' that")
  };
}
function convertUnderlyingSourceCancelCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(reason) {
    return promiseCall(fn, original, [reason]);
  };
}
function convertUnderlyingSourcePullCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(controller) {
    return promiseCall(fn, original, [controller]);
  };
}
function convertUnderlyingSourceStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(controller) {
    return reflectCall(fn, original, [controller]);
  };
}
function convertReadableStreamType(type, context) {
  type = "" + type;
  if (type !== "bytes") {
    throw new TypeError(context + " '" + type + "' is not a valid enumeration value for ReadableStreamType");
  }
  return type;
}
function convertReaderOptions(options, context) {
  assertDictionary(options, context);
  var mode = options === null || options === void 0 ? void 0 : options.mode;
  return {
    mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, context + " has member 'mode' that")
  };
}
function convertReadableStreamReaderMode(mode, context) {
  mode = "" + mode;
  if (mode !== "byob") {
    throw new TypeError(context + " '" + mode + "' is not a valid enumeration value for ReadableStreamReaderMode");
  }
  return mode;
}
function convertIteratorOptions(options, context) {
  assertDictionary(options, context);
  var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
  return { preventCancel: Boolean(preventCancel) };
}
function convertPipeOptions(options, context) {
  assertDictionary(options, context);
  var preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
  var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
  var preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
  var signal = options === null || options === void 0 ? void 0 : options.signal;
  if (signal !== void 0) {
    assertAbortSignal(signal, context + " has member 'signal' that");
  }
  return {
    preventAbort: Boolean(preventAbort),
    preventCancel: Boolean(preventCancel),
    preventClose: Boolean(preventClose),
    signal
  };
}
function assertAbortSignal(signal, context) {
  if (!isAbortSignal(signal)) {
    throw new TypeError(context + " is not an AbortSignal.");
  }
}
function convertReadableWritablePair(pair, context) {
  assertDictionary(pair, context);
  var readable = pair === null || pair === void 0 ? void 0 : pair.readable;
  assertRequiredField(readable, "readable", "ReadableWritablePair");
  assertReadableStream(readable, context + " has member 'readable' that");
  var writable = pair === null || pair === void 0 ? void 0 : pair.writable;
  assertRequiredField(writable, "writable", "ReadableWritablePair");
  assertWritableStream(writable, context + " has member 'writable' that");
  return { readable, writable };
}
function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
  if (highWaterMark === void 0) {
    highWaterMark = 1;
  }
  if (sizeAlgorithm === void 0) {
    sizeAlgorithm = function() {
      return 1;
    };
  }
  var stream = Object.create(ReadableStream.prototype);
  InitializeReadableStream(stream);
  var controller = Object.create(ReadableStreamDefaultController.prototype);
  SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
  return stream;
}
function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
  var stream = Object.create(ReadableStream.prototype);
  InitializeReadableStream(stream);
  var controller = Object.create(ReadableByteStreamController.prototype);
  SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
  return stream;
}
function InitializeReadableStream(stream) {
  stream._state = "readable";
  stream._reader = void 0;
  stream._storedError = void 0;
  stream._disturbed = false;
}
function IsReadableStream(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_readableStreamController")) {
    return false;
  }
  return x instanceof ReadableStream;
}
function IsReadableStreamLocked(stream) {
  if (stream._reader === void 0) {
    return false;
  }
  return true;
}
function ReadableStreamCancel(stream, reason) {
  stream._disturbed = true;
  if (stream._state === "closed") {
    return promiseResolvedWith(void 0);
  }
  if (stream._state === "errored") {
    return promiseRejectedWith(stream._storedError);
  }
  ReadableStreamClose(stream);
  var reader = stream._reader;
  if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
    reader._readIntoRequests.forEach(function(readIntoRequest) {
      readIntoRequest._closeSteps(void 0);
    });
    reader._readIntoRequests = new SimpleQueue();
  }
  var sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
  return transformPromiseWith(sourceCancelPromise, noop);
}
function ReadableStreamClose(stream) {
  stream._state = "closed";
  var reader = stream._reader;
  if (reader === void 0) {
    return;
  }
  defaultReaderClosedPromiseResolve(reader);
  if (IsReadableStreamDefaultReader(reader)) {
    reader._readRequests.forEach(function(readRequest) {
      readRequest._closeSteps();
    });
    reader._readRequests = new SimpleQueue();
  }
}
function ReadableStreamError(stream, e) {
  stream._state = "errored";
  stream._storedError = e;
  var reader = stream._reader;
  if (reader === void 0) {
    return;
  }
  defaultReaderClosedPromiseReject(reader, e);
  if (IsReadableStreamDefaultReader(reader)) {
    reader._readRequests.forEach(function(readRequest) {
      readRequest._errorSteps(e);
    });
    reader._readRequests = new SimpleQueue();
  } else {
    reader._readIntoRequests.forEach(function(readIntoRequest) {
      readIntoRequest._errorSteps(e);
    });
    reader._readIntoRequests = new SimpleQueue();
  }
}
function streamBrandCheckException$1(name) {
  return new TypeError("ReadableStream.prototype." + name + " can only be used on a ReadableStream");
}
function convertQueuingStrategyInit(init2, context) {
  assertDictionary(init2, context);
  var highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
  assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
  return {
    highWaterMark: convertUnrestrictedDouble(highWaterMark)
  };
}
function byteLengthBrandCheckException(name) {
  return new TypeError("ByteLengthQueuingStrategy.prototype." + name + " can only be used on a ByteLengthQueuingStrategy");
}
function IsByteLengthQueuingStrategy(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_byteLengthQueuingStrategyHighWaterMark")) {
    return false;
  }
  return x instanceof ByteLengthQueuingStrategy;
}
function countBrandCheckException(name) {
  return new TypeError("CountQueuingStrategy.prototype." + name + " can only be used on a CountQueuingStrategy");
}
function IsCountQueuingStrategy(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_countQueuingStrategyHighWaterMark")) {
    return false;
  }
  return x instanceof CountQueuingStrategy;
}
function convertTransformer(original, context) {
  assertDictionary(original, context);
  var flush = original === null || original === void 0 ? void 0 : original.flush;
  var readableType = original === null || original === void 0 ? void 0 : original.readableType;
  var start = original === null || original === void 0 ? void 0 : original.start;
  var transform = original === null || original === void 0 ? void 0 : original.transform;
  var writableType = original === null || original === void 0 ? void 0 : original.writableType;
  return {
    flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, context + " has member 'flush' that"),
    readableType,
    start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, context + " has member 'start' that"),
    transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, context + " has member 'transform' that"),
    writableType
  };
}
function convertTransformerFlushCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(controller) {
    return promiseCall(fn, original, [controller]);
  };
}
function convertTransformerStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(controller) {
    return reflectCall(fn, original, [controller]);
  };
}
function convertTransformerTransformCallback(fn, original, context) {
  assertFunction(fn, context);
  return function(chunk, controller) {
    return promiseCall(fn, original, [chunk, controller]);
  };
}
function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
  function startAlgorithm() {
    return startPromise;
  }
  function writeAlgorithm(chunk) {
    return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
  }
  function abortAlgorithm(reason) {
    return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
  }
  function closeAlgorithm() {
    return TransformStreamDefaultSinkCloseAlgorithm(stream);
  }
  stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
  function pullAlgorithm() {
    return TransformStreamDefaultSourcePullAlgorithm(stream);
  }
  function cancelAlgorithm(reason) {
    TransformStreamErrorWritableAndUnblockWrite(stream, reason);
    return promiseResolvedWith(void 0);
  }
  stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
  stream._backpressure = void 0;
  stream._backpressureChangePromise = void 0;
  stream._backpressureChangePromise_resolve = void 0;
  TransformStreamSetBackpressure(stream, true);
  stream._transformStreamController = void 0;
}
function IsTransformStream(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_transformStreamController")) {
    return false;
  }
  return x instanceof TransformStream;
}
function TransformStreamError(stream, e) {
  ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
  TransformStreamErrorWritableAndUnblockWrite(stream, e);
}
function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
  TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
  WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
  if (stream._backpressure) {
    TransformStreamSetBackpressure(stream, false);
  }
}
function TransformStreamSetBackpressure(stream, backpressure) {
  if (stream._backpressureChangePromise !== void 0) {
    stream._backpressureChangePromise_resolve();
  }
  stream._backpressureChangePromise = newPromise(function(resolve3) {
    stream._backpressureChangePromise_resolve = resolve3;
  });
  stream._backpressure = backpressure;
}
function IsTransformStreamDefaultController(x) {
  if (!typeIsObject(x)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x, "_controlledTransformStream")) {
    return false;
  }
  return x instanceof TransformStreamDefaultController;
}
function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
  controller._controlledTransformStream = stream;
  stream._transformStreamController = controller;
  controller._transformAlgorithm = transformAlgorithm;
  controller._flushAlgorithm = flushAlgorithm;
}
function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
  var controller = Object.create(TransformStreamDefaultController.prototype);
  var transformAlgorithm = function(chunk) {
    try {
      TransformStreamDefaultControllerEnqueue(controller, chunk);
      return promiseResolvedWith(void 0);
    } catch (transformResultE) {
      return promiseRejectedWith(transformResultE);
    }
  };
  var flushAlgorithm = function() {
    return promiseResolvedWith(void 0);
  };
  if (transformer.transform !== void 0) {
    transformAlgorithm = function(chunk) {
      return transformer.transform(chunk, controller);
    };
  }
  if (transformer.flush !== void 0) {
    flushAlgorithm = function() {
      return transformer.flush(controller);
    };
  }
  SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
}
function TransformStreamDefaultControllerClearAlgorithms(controller) {
  controller._transformAlgorithm = void 0;
  controller._flushAlgorithm = void 0;
}
function TransformStreamDefaultControllerEnqueue(controller, chunk) {
  var stream = controller._controlledTransformStream;
  var readableController = stream._readable._readableStreamController;
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
    throw new TypeError("Readable side is not in a state that permits enqueue");
  }
  try {
    ReadableStreamDefaultControllerEnqueue(readableController, chunk);
  } catch (e) {
    TransformStreamErrorWritableAndUnblockWrite(stream, e);
    throw stream._readable._storedError;
  }
  var backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
  if (backpressure !== stream._backpressure) {
    TransformStreamSetBackpressure(stream, true);
  }
}
function TransformStreamDefaultControllerError(controller, e) {
  TransformStreamError(controller._controlledTransformStream, e);
}
function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
  var transformPromise = controller._transformAlgorithm(chunk);
  return transformPromiseWith(transformPromise, void 0, function(r) {
    TransformStreamError(controller._controlledTransformStream, r);
    throw r;
  });
}
function TransformStreamDefaultControllerTerminate(controller) {
  var stream = controller._controlledTransformStream;
  var readableController = stream._readable._readableStreamController;
  ReadableStreamDefaultControllerClose(readableController);
  var error = new TypeError("TransformStream terminated");
  TransformStreamErrorWritableAndUnblockWrite(stream, error);
}
function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
  var controller = stream._transformStreamController;
  if (stream._backpressure) {
    var backpressureChangePromise = stream._backpressureChangePromise;
    return transformPromiseWith(backpressureChangePromise, function() {
      var writable = stream._writable;
      var state = writable._state;
      if (state === "erroring") {
        throw writable._storedError;
      }
      return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    });
  }
  return TransformStreamDefaultControllerPerformTransform(controller, chunk);
}
function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
  TransformStreamError(stream, reason);
  return promiseResolvedWith(void 0);
}
function TransformStreamDefaultSinkCloseAlgorithm(stream) {
  var readable = stream._readable;
  var controller = stream._transformStreamController;
  var flushPromise = controller._flushAlgorithm();
  TransformStreamDefaultControllerClearAlgorithms(controller);
  return transformPromiseWith(flushPromise, function() {
    if (readable._state === "errored") {
      throw readable._storedError;
    }
    ReadableStreamDefaultControllerClose(readable._readableStreamController);
  }, function(r) {
    TransformStreamError(stream, r);
    throw readable._storedError;
  });
}
function TransformStreamDefaultSourcePullAlgorithm(stream) {
  TransformStreamSetBackpressure(stream, false);
  return stream._backpressureChangePromise;
}
function defaultControllerBrandCheckException(name) {
  return new TypeError("TransformStreamDefaultController.prototype." + name + " can only be used on a TransformStreamDefaultController");
}
function streamBrandCheckException(name) {
  return new TypeError("TransformStream.prototype." + name + " can only be used on a TransformStream");
}
var SymbolPolyfill, globals, rethrowAssertionErrorRejection, originalPromise, originalPromiseThen, originalPromiseResolve, originalPromiseReject, queueMicrotask2, QUEUE_MAX_ARRAY_SIZE, SimpleQueue, AbortSteps, ErrorSteps, CancelSteps, PullSteps, NumberIsFinite, MathTrunc, ReadableStreamDefaultReader, _a2, AsyncIteratorPrototype, ReadableStreamAsyncIteratorImpl, ReadableStreamAsyncIteratorPrototype, NumberIsNaN2, ReadableStreamBYOBRequest, ReadableByteStreamController, ReadableStreamBYOBReader, supportsAbortController, WritableStream, WritableStreamDefaultWriter, closeSentinel, WritableStreamDefaultController, NativeDOMException, DOMException$1, ReadableStreamDefaultController, ReadableStream, byteLengthSizeFunction, ByteLengthQueuingStrategy, countSizeFunction, CountQueuingStrategy, TransformStream, TransformStreamDefaultController;
var init_ponyfill = __esm({
  "../../../node_modules/web-streams-polyfill/dist/ponyfill.mjs"() {
    SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : function(description) {
      return "Symbol(" + description + ")";
    };
    globals = getGlobals();
    rethrowAssertionErrorRejection = noop;
    originalPromise = Promise;
    originalPromiseThen = Promise.prototype.then;
    originalPromiseResolve = Promise.resolve.bind(originalPromise);
    originalPromiseReject = Promise.reject.bind(originalPromise);
    queueMicrotask2 = function() {
      var globalQueueMicrotask = globals && globals.queueMicrotask;
      if (typeof globalQueueMicrotask === "function") {
        return globalQueueMicrotask;
      }
      var resolvedPromise = promiseResolvedWith(void 0);
      return function(fn) {
        return PerformPromiseThen(resolvedPromise, fn);
      };
    }();
    QUEUE_MAX_ARRAY_SIZE = 16384;
    SimpleQueue = function() {
      function SimpleQueue2() {
        this._cursor = 0;
        this._size = 0;
        this._front = {
          _elements: [],
          _next: void 0
        };
        this._back = this._front;
        this._cursor = 0;
        this._size = 0;
      }
      Object.defineProperty(SimpleQueue2.prototype, "length", {
        get: function() {
          return this._size;
        },
        enumerable: false,
        configurable: true
      });
      SimpleQueue2.prototype.push = function(element) {
        var oldBack = this._back;
        var newBack = oldBack;
        if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
          newBack = {
            _elements: [],
            _next: void 0
          };
        }
        oldBack._elements.push(element);
        if (newBack !== oldBack) {
          this._back = newBack;
          oldBack._next = newBack;
        }
        ++this._size;
      };
      SimpleQueue2.prototype.shift = function() {
        var oldFront = this._front;
        var newFront = oldFront;
        var oldCursor = this._cursor;
        var newCursor = oldCursor + 1;
        var elements = oldFront._elements;
        var element = elements[oldCursor];
        if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
          newFront = oldFront._next;
          newCursor = 0;
        }
        --this._size;
        this._cursor = newCursor;
        if (oldFront !== newFront) {
          this._front = newFront;
        }
        elements[oldCursor] = void 0;
        return element;
      };
      SimpleQueue2.prototype.forEach = function(callback) {
        var i = this._cursor;
        var node = this._front;
        var elements = node._elements;
        while (i !== elements.length || node._next !== void 0) {
          if (i === elements.length) {
            node = node._next;
            elements = node._elements;
            i = 0;
            if (elements.length === 0) {
              break;
            }
          }
          callback(elements[i]);
          ++i;
        }
      };
      SimpleQueue2.prototype.peek = function() {
        var front = this._front;
        var cursor = this._cursor;
        return front._elements[cursor];
      };
      return SimpleQueue2;
    }();
    AbortSteps = SymbolPolyfill("[[AbortSteps]]");
    ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
    CancelSteps = SymbolPolyfill("[[CancelSteps]]");
    PullSteps = SymbolPolyfill("[[PullSteps]]");
    NumberIsFinite = Number.isFinite || function(x) {
      return typeof x === "number" && isFinite(x);
    };
    MathTrunc = Math.trunc || function(v) {
      return v < 0 ? Math.ceil(v) : Math.floor(v);
    };
    ReadableStreamDefaultReader = function() {
      function ReadableStreamDefaultReader2(stream) {
        assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
        assertReadableStream(stream, "First parameter");
        if (IsReadableStreamLocked(stream)) {
          throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readRequests = new SimpleQueue();
      }
      Object.defineProperty(ReadableStreamDefaultReader2.prototype, "closed", {
        get: function() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        },
        enumerable: false,
        configurable: true
      });
      ReadableStreamDefaultReader2.prototype.cancel = function(reason) {
        if (reason === void 0) {
          reason = void 0;
        }
        if (!IsReadableStreamDefaultReader(this)) {
          return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
        }
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("cancel"));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      };
      ReadableStreamDefaultReader2.prototype.read = function() {
        if (!IsReadableStreamDefaultReader(this)) {
          return promiseRejectedWith(defaultReaderBrandCheckException("read"));
        }
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("read from"));
        }
        var resolvePromise;
        var rejectPromise;
        var promise = newPromise(function(resolve3, reject) {
          resolvePromise = resolve3;
          rejectPromise = reject;
        });
        var readRequest = {
          _chunkSteps: function(chunk) {
            return resolvePromise({ value: chunk, done: false });
          },
          _closeSteps: function() {
            return resolvePromise({ value: void 0, done: true });
          },
          _errorSteps: function(e) {
            return rejectPromise(e);
          }
        };
        ReadableStreamDefaultReaderRead(this, readRequest);
        return promise;
      };
      ReadableStreamDefaultReader2.prototype.releaseLock = function() {
        if (!IsReadableStreamDefaultReader(this)) {
          throw defaultReaderBrandCheckException("releaseLock");
        }
        if (this._ownerReadableStream === void 0) {
          return;
        }
        if (this._readRequests.length > 0) {
          throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
        }
        ReadableStreamReaderGenericRelease(this);
      };
      return ReadableStreamDefaultReader2;
    }();
    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
      cancel: { enumerable: true },
      read: { enumerable: true },
      releaseLock: { enumerable: true },
      closed: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamDefaultReader",
        configurable: true
      });
    }
    if (typeof SymbolPolyfill.asyncIterator === "symbol") {
      AsyncIteratorPrototype = (_a2 = {}, _a2[SymbolPolyfill.asyncIterator] = function() {
        return this;
      }, _a2);
      Object.defineProperty(AsyncIteratorPrototype, SymbolPolyfill.asyncIterator, { enumerable: false });
    }
    ReadableStreamAsyncIteratorImpl = function() {
      function ReadableStreamAsyncIteratorImpl2(reader, preventCancel) {
        this._ongoingPromise = void 0;
        this._isFinished = false;
        this._reader = reader;
        this._preventCancel = preventCancel;
      }
      ReadableStreamAsyncIteratorImpl2.prototype.next = function() {
        var _this = this;
        var nextSteps = function() {
          return _this._nextSteps();
        };
        this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
        return this._ongoingPromise;
      };
      ReadableStreamAsyncIteratorImpl2.prototype.return = function(value) {
        var _this = this;
        var returnSteps = function() {
          return _this._returnSteps(value);
        };
        return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
      };
      ReadableStreamAsyncIteratorImpl2.prototype._nextSteps = function() {
        var _this = this;
        if (this._isFinished) {
          return Promise.resolve({ value: void 0, done: true });
        }
        var reader = this._reader;
        if (reader._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("iterate"));
        }
        var resolvePromise;
        var rejectPromise;
        var promise = newPromise(function(resolve3, reject) {
          resolvePromise = resolve3;
          rejectPromise = reject;
        });
        var readRequest = {
          _chunkSteps: function(chunk) {
            _this._ongoingPromise = void 0;
            queueMicrotask2(function() {
              return resolvePromise({ value: chunk, done: false });
            });
          },
          _closeSteps: function() {
            _this._ongoingPromise = void 0;
            _this._isFinished = true;
            ReadableStreamReaderGenericRelease(reader);
            resolvePromise({ value: void 0, done: true });
          },
          _errorSteps: function(reason) {
            _this._ongoingPromise = void 0;
            _this._isFinished = true;
            ReadableStreamReaderGenericRelease(reader);
            rejectPromise(reason);
          }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promise;
      };
      ReadableStreamAsyncIteratorImpl2.prototype._returnSteps = function(value) {
        if (this._isFinished) {
          return Promise.resolve({ value, done: true });
        }
        this._isFinished = true;
        var reader = this._reader;
        if (reader._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("finish iterating"));
        }
        if (!this._preventCancel) {
          var result = ReadableStreamReaderGenericCancel(reader, value);
          ReadableStreamReaderGenericRelease(reader);
          return transformPromiseWith(result, function() {
            return { value, done: true };
          });
        }
        ReadableStreamReaderGenericRelease(reader);
        return promiseResolvedWith({ value, done: true });
      };
      return ReadableStreamAsyncIteratorImpl2;
    }();
    ReadableStreamAsyncIteratorPrototype = {
      next: function() {
        if (!IsReadableStreamAsyncIterator(this)) {
          return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
        }
        return this._asyncIteratorImpl.next();
      },
      return: function(value) {
        if (!IsReadableStreamAsyncIterator(this)) {
          return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
        }
        return this._asyncIteratorImpl.return(value);
      }
    };
    if (AsyncIteratorPrototype !== void 0) {
      Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
    }
    NumberIsNaN2 = Number.isNaN || function(x) {
      return x !== x;
    };
    ReadableStreamBYOBRequest = function() {
      function ReadableStreamBYOBRequest2() {
        throw new TypeError("Illegal constructor");
      }
      Object.defineProperty(ReadableStreamBYOBRequest2.prototype, "view", {
        get: function() {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("view");
          }
          return this._view;
        },
        enumerable: false,
        configurable: true
      });
      ReadableStreamBYOBRequest2.prototype.respond = function(bytesWritten) {
        if (!IsReadableStreamBYOBRequest(this)) {
          throw byobRequestBrandCheckException("respond");
        }
        assertRequiredArgument(bytesWritten, 1, "respond");
        bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
        if (this._associatedReadableByteStreamController === void 0) {
          throw new TypeError("This BYOB request has been invalidated");
        }
        if (IsDetachedBuffer(this._view.buffer))
          ;
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      };
      ReadableStreamBYOBRequest2.prototype.respondWithNewView = function(view) {
        if (!IsReadableStreamBYOBRequest(this)) {
          throw byobRequestBrandCheckException("respondWithNewView");
        }
        assertRequiredArgument(view, 1, "respondWithNewView");
        if (!ArrayBuffer.isView(view)) {
          throw new TypeError("You can only respond with array buffer views");
        }
        if (this._associatedReadableByteStreamController === void 0) {
          throw new TypeError("This BYOB request has been invalidated");
        }
        if (IsDetachedBuffer(view.buffer))
          ;
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      };
      return ReadableStreamBYOBRequest2;
    }();
    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
      respond: { enumerable: true },
      respondWithNewView: { enumerable: true },
      view: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamBYOBRequest",
        configurable: true
      });
    }
    ReadableByteStreamController = function() {
      function ReadableByteStreamController2() {
        throw new TypeError("Illegal constructor");
      }
      Object.defineProperty(ReadableByteStreamController2.prototype, "byobRequest", {
        get: function() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("byobRequest");
          }
          return ReadableByteStreamControllerGetBYOBRequest(this);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ReadableByteStreamController2.prototype, "desiredSize", {
        get: function() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("desiredSize");
          }
          return ReadableByteStreamControllerGetDesiredSize(this);
        },
        enumerable: false,
        configurable: true
      });
      ReadableByteStreamController2.prototype.close = function() {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("close");
        }
        if (this._closeRequested) {
          throw new TypeError("The stream has already been closed; do not close it again!");
        }
        var state = this._controlledReadableByteStream._state;
        if (state !== "readable") {
          throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be closed");
        }
        ReadableByteStreamControllerClose(this);
      };
      ReadableByteStreamController2.prototype.enqueue = function(chunk) {
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("enqueue");
        }
        assertRequiredArgument(chunk, 1, "enqueue");
        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError("chunk must be an array buffer view");
        }
        if (chunk.byteLength === 0) {
          throw new TypeError("chunk must have non-zero byteLength");
        }
        if (chunk.buffer.byteLength === 0) {
          throw new TypeError("chunk's buffer must have non-zero byteLength");
        }
        if (this._closeRequested) {
          throw new TypeError("stream is closed or draining");
        }
        var state = this._controlledReadableByteStream._state;
        if (state !== "readable") {
          throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be enqueued to");
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
      };
      ReadableByteStreamController2.prototype.error = function(e) {
        if (e === void 0) {
          e = void 0;
        }
        if (!IsReadableByteStreamController(this)) {
          throw byteStreamControllerBrandCheckException("error");
        }
        ReadableByteStreamControllerError(this, e);
      };
      ReadableByteStreamController2.prototype[CancelSteps] = function(reason) {
        ReadableByteStreamControllerClearPendingPullIntos(this);
        ResetQueue(this);
        var result = this._cancelAlgorithm(reason);
        ReadableByteStreamControllerClearAlgorithms(this);
        return result;
      };
      ReadableByteStreamController2.prototype[PullSteps] = function(readRequest) {
        var stream = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) {
          var entry = this._queue.shift();
          this._queueTotalSize -= entry.byteLength;
          ReadableByteStreamControllerHandleQueueDrain(this);
          var view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
          readRequest._chunkSteps(view);
          return;
        }
        var autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== void 0) {
          var buffer = void 0;
          try {
            buffer = new ArrayBuffer(autoAllocateChunkSize);
          } catch (bufferE) {
            readRequest._errorSteps(bufferE);
            return;
          }
          var pullIntoDescriptor = {
            buffer,
            bufferByteLength: autoAllocateChunkSize,
            byteOffset: 0,
            byteLength: autoAllocateChunkSize,
            bytesFilled: 0,
            elementSize: 1,
            viewConstructor: Uint8Array,
            readerType: "default"
          };
          this._pendingPullIntos.push(pullIntoDescriptor);
        }
        ReadableStreamAddReadRequest(stream, readRequest);
        ReadableByteStreamControllerCallPullIfNeeded(this);
      };
      return ReadableByteStreamController2;
    }();
    Object.defineProperties(ReadableByteStreamController.prototype, {
      close: { enumerable: true },
      enqueue: { enumerable: true },
      error: { enumerable: true },
      byobRequest: { enumerable: true },
      desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableByteStreamController",
        configurable: true
      });
    }
    ReadableStreamBYOBReader = function() {
      function ReadableStreamBYOBReader2(stream) {
        assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
        assertReadableStream(stream, "First parameter");
        if (IsReadableStreamLocked(stream)) {
          throw new TypeError("This stream has already been locked for exclusive reading by another reader");
        }
        if (!IsReadableByteStreamController(stream._readableStreamController)) {
          throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readIntoRequests = new SimpleQueue();
      }
      Object.defineProperty(ReadableStreamBYOBReader2.prototype, "closed", {
        get: function() {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        },
        enumerable: false,
        configurable: true
      });
      ReadableStreamBYOBReader2.prototype.cancel = function(reason) {
        if (reason === void 0) {
          reason = void 0;
        }
        if (!IsReadableStreamBYOBReader(this)) {
          return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
        }
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("cancel"));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      };
      ReadableStreamBYOBReader2.prototype.read = function(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return promiseRejectedWith(byobReaderBrandCheckException("read"));
        }
        if (!ArrayBuffer.isView(view)) {
          return promiseRejectedWith(new TypeError("view must be an array buffer view"));
        }
        if (view.byteLength === 0) {
          return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
        }
        if (view.buffer.byteLength === 0) {
          return promiseRejectedWith(new TypeError("view's buffer must have non-zero byteLength"));
        }
        if (IsDetachedBuffer(view.buffer))
          ;
        if (this._ownerReadableStream === void 0) {
          return promiseRejectedWith(readerLockException("read from"));
        }
        var resolvePromise;
        var rejectPromise;
        var promise = newPromise(function(resolve3, reject) {
          resolvePromise = resolve3;
          rejectPromise = reject;
        });
        var readIntoRequest = {
          _chunkSteps: function(chunk) {
            return resolvePromise({ value: chunk, done: false });
          },
          _closeSteps: function(chunk) {
            return resolvePromise({ value: chunk, done: true });
          },
          _errorSteps: function(e) {
            return rejectPromise(e);
          }
        };
        ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
        return promise;
      };
      ReadableStreamBYOBReader2.prototype.releaseLock = function() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException("releaseLock");
        }
        if (this._ownerReadableStream === void 0) {
          return;
        }
        if (this._readIntoRequests.length > 0) {
          throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
        }
        ReadableStreamReaderGenericRelease(this);
      };
      return ReadableStreamBYOBReader2;
    }();
    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
      cancel: { enumerable: true },
      read: { enumerable: true },
      releaseLock: { enumerable: true },
      closed: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamBYOBReader",
        configurable: true
      });
    }
    supportsAbortController = typeof AbortController === "function";
    WritableStream = function() {
      function WritableStream2(rawUnderlyingSink, rawStrategy) {
        if (rawUnderlyingSink === void 0) {
          rawUnderlyingSink = {};
        }
        if (rawStrategy === void 0) {
          rawStrategy = {};
        }
        if (rawUnderlyingSink === void 0) {
          rawUnderlyingSink = null;
        } else {
          assertObject(rawUnderlyingSink, "First parameter");
        }
        var strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
        var underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
        InitializeWritableStream(this);
        var type = underlyingSink.type;
        if (type !== void 0) {
          throw new RangeError("Invalid type is specified");
        }
        var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
        var highWaterMark = ExtractHighWaterMark(strategy, 1);
        SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
      }
      Object.defineProperty(WritableStream2.prototype, "locked", {
        get: function() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("locked");
          }
          return IsWritableStreamLocked(this);
        },
        enumerable: false,
        configurable: true
      });
      WritableStream2.prototype.abort = function(reason) {
        if (reason === void 0) {
          reason = void 0;
        }
        if (!IsWritableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$2("abort"));
        }
        if (IsWritableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
        }
        return WritableStreamAbort(this, reason);
      };
      WritableStream2.prototype.close = function() {
        if (!IsWritableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$2("close"));
        }
        if (IsWritableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
        }
        if (WritableStreamCloseQueuedOrInFlight(this)) {
          return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
        }
        return WritableStreamClose(this);
      };
      WritableStream2.prototype.getWriter = function() {
        if (!IsWritableStream(this)) {
          throw streamBrandCheckException$2("getWriter");
        }
        return AcquireWritableStreamDefaultWriter(this);
      };
      return WritableStream2;
    }();
    Object.defineProperties(WritableStream.prototype, {
      abort: { enumerable: true },
      close: { enumerable: true },
      getWriter: { enumerable: true },
      locked: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStream",
        configurable: true
      });
    }
    WritableStreamDefaultWriter = function() {
      function WritableStreamDefaultWriter2(stream) {
        assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
        assertWritableStream(stream, "First parameter");
        if (IsWritableStreamLocked(stream)) {
          throw new TypeError("This stream has already been locked for exclusive writing by another writer");
        }
        this._ownerWritableStream = stream;
        stream._writer = this;
        var state = stream._state;
        if (state === "writable") {
          if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
            defaultWriterReadyPromiseInitialize(this);
          } else {
            defaultWriterReadyPromiseInitializeAsResolved(this);
          }
          defaultWriterClosedPromiseInitialize(this);
        } else if (state === "erroring") {
          defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
          defaultWriterClosedPromiseInitialize(this);
        } else if (state === "closed") {
          defaultWriterReadyPromiseInitializeAsResolved(this);
          defaultWriterClosedPromiseInitializeAsResolved(this);
        } else {
          var storedError = stream._storedError;
          defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
          defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        }
      }
      Object.defineProperty(WritableStreamDefaultWriter2.prototype, "closed", {
        get: function() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
          }
          return this._closedPromise;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(WritableStreamDefaultWriter2.prototype, "desiredSize", {
        get: function() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("desiredSize");
          }
          if (this._ownerWritableStream === void 0) {
            throw defaultWriterLockException("desiredSize");
          }
          return WritableStreamDefaultWriterGetDesiredSize(this);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(WritableStreamDefaultWriter2.prototype, "ready", {
        get: function() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
          }
          return this._readyPromise;
        },
        enumerable: false,
        configurable: true
      });
      WritableStreamDefaultWriter2.prototype.abort = function(reason) {
        if (reason === void 0) {
          reason = void 0;
        }
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
        }
        if (this._ownerWritableStream === void 0) {
          return promiseRejectedWith(defaultWriterLockException("abort"));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
      };
      WritableStreamDefaultWriter2.prototype.close = function() {
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("close"));
        }
        var stream = this._ownerWritableStream;
        if (stream === void 0) {
          return promiseRejectedWith(defaultWriterLockException("close"));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream)) {
          return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
        }
        return WritableStreamDefaultWriterClose(this);
      };
      WritableStreamDefaultWriter2.prototype.releaseLock = function() {
        if (!IsWritableStreamDefaultWriter(this)) {
          throw defaultWriterBrandCheckException("releaseLock");
        }
        var stream = this._ownerWritableStream;
        if (stream === void 0) {
          return;
        }
        WritableStreamDefaultWriterRelease(this);
      };
      WritableStreamDefaultWriter2.prototype.write = function(chunk) {
        if (chunk === void 0) {
          chunk = void 0;
        }
        if (!IsWritableStreamDefaultWriter(this)) {
          return promiseRejectedWith(defaultWriterBrandCheckException("write"));
        }
        if (this._ownerWritableStream === void 0) {
          return promiseRejectedWith(defaultWriterLockException("write to"));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
      };
      return WritableStreamDefaultWriter2;
    }();
    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
      abort: { enumerable: true },
      close: { enumerable: true },
      releaseLock: { enumerable: true },
      write: { enumerable: true },
      closed: { enumerable: true },
      desiredSize: { enumerable: true },
      ready: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStreamDefaultWriter",
        configurable: true
      });
    }
    closeSentinel = {};
    WritableStreamDefaultController = function() {
      function WritableStreamDefaultController2() {
        throw new TypeError("Illegal constructor");
      }
      Object.defineProperty(WritableStreamDefaultController2.prototype, "abortReason", {
        get: function() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("abortReason");
          }
          return this._abortReason;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(WritableStreamDefaultController2.prototype, "signal", {
        get: function() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("signal");
          }
          if (this._abortController === void 0) {
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          }
          return this._abortController.signal;
        },
        enumerable: false,
        configurable: true
      });
      WritableStreamDefaultController2.prototype.error = function(e) {
        if (e === void 0) {
          e = void 0;
        }
        if (!IsWritableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$2("error");
        }
        var state = this._controlledWritableStream._state;
        if (state !== "writable") {
          return;
        }
        WritableStreamDefaultControllerError(this, e);
      };
      WritableStreamDefaultController2.prototype[AbortSteps] = function(reason) {
        var result = this._abortAlgorithm(reason);
        WritableStreamDefaultControllerClearAlgorithms(this);
        return result;
      };
      WritableStreamDefaultController2.prototype[ErrorSteps] = function() {
        ResetQueue(this);
      };
      return WritableStreamDefaultController2;
    }();
    Object.defineProperties(WritableStreamDefaultController.prototype, {
      abortReason: { enumerable: true },
      signal: { enumerable: true },
      error: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "WritableStreamDefaultController",
        configurable: true
      });
    }
    NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
    DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
    ReadableStreamDefaultController = function() {
      function ReadableStreamDefaultController2() {
        throw new TypeError("Illegal constructor");
      }
      Object.defineProperty(ReadableStreamDefaultController2.prototype, "desiredSize", {
        get: function() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("desiredSize");
          }
          return ReadableStreamDefaultControllerGetDesiredSize(this);
        },
        enumerable: false,
        configurable: true
      });
      ReadableStreamDefaultController2.prototype.close = function() {
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("close");
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
          throw new TypeError("The stream is not in a state that permits close");
        }
        ReadableStreamDefaultControllerClose(this);
      };
      ReadableStreamDefaultController2.prototype.enqueue = function(chunk) {
        if (chunk === void 0) {
          chunk = void 0;
        }
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("enqueue");
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
          throw new TypeError("The stream is not in a state that permits enqueue");
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      };
      ReadableStreamDefaultController2.prototype.error = function(e) {
        if (e === void 0) {
          e = void 0;
        }
        if (!IsReadableStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException$1("error");
        }
        ReadableStreamDefaultControllerError(this, e);
      };
      ReadableStreamDefaultController2.prototype[CancelSteps] = function(reason) {
        ResetQueue(this);
        var result = this._cancelAlgorithm(reason);
        ReadableStreamDefaultControllerClearAlgorithms(this);
        return result;
      };
      ReadableStreamDefaultController2.prototype[PullSteps] = function(readRequest) {
        var stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
          var chunk = DequeueValue(this);
          if (this._closeRequested && this._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(this);
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
          readRequest._chunkSteps(chunk);
        } else {
          ReadableStreamAddReadRequest(stream, readRequest);
          ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
      };
      return ReadableStreamDefaultController2;
    }();
    Object.defineProperties(ReadableStreamDefaultController.prototype, {
      close: { enumerable: true },
      enqueue: { enumerable: true },
      error: { enumerable: true },
      desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStreamDefaultController",
        configurable: true
      });
    }
    ReadableStream = function() {
      function ReadableStream2(rawUnderlyingSource, rawStrategy) {
        if (rawUnderlyingSource === void 0) {
          rawUnderlyingSource = {};
        }
        if (rawStrategy === void 0) {
          rawStrategy = {};
        }
        if (rawUnderlyingSource === void 0) {
          rawUnderlyingSource = null;
        } else {
          assertObject(rawUnderlyingSource, "First parameter");
        }
        var strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
        var underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
        InitializeReadableStream(this);
        if (underlyingSource.type === "bytes") {
          if (strategy.size !== void 0) {
            throw new RangeError("The strategy for a byte stream cannot have a size function");
          }
          var highWaterMark = ExtractHighWaterMark(strategy, 0);
          SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
        } else {
          var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
          var highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
        }
      }
      Object.defineProperty(ReadableStream2.prototype, "locked", {
        get: function() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("locked");
          }
          return IsReadableStreamLocked(this);
        },
        enumerable: false,
        configurable: true
      });
      ReadableStream2.prototype.cancel = function(reason) {
        if (reason === void 0) {
          reason = void 0;
        }
        if (!IsReadableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$1("cancel"));
        }
        if (IsReadableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
        }
        return ReadableStreamCancel(this, reason);
      };
      ReadableStream2.prototype.getReader = function(rawOptions) {
        if (rawOptions === void 0) {
          rawOptions = void 0;
        }
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("getReader");
        }
        var options = convertReaderOptions(rawOptions, "First parameter");
        if (options.mode === void 0) {
          return AcquireReadableStreamDefaultReader(this);
        }
        return AcquireReadableStreamBYOBReader(this);
      };
      ReadableStream2.prototype.pipeThrough = function(rawTransform, rawOptions) {
        if (rawOptions === void 0) {
          rawOptions = {};
        }
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("pipeThrough");
        }
        assertRequiredArgument(rawTransform, 1, "pipeThrough");
        var transform = convertReadableWritablePair(rawTransform, "First parameter");
        var options = convertPipeOptions(rawOptions, "Second parameter");
        if (IsReadableStreamLocked(this)) {
          throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
        }
        if (IsWritableStreamLocked(transform.writable)) {
          throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
        }
        var promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        setPromiseIsHandledToTrue(promise);
        return transform.readable;
      };
      ReadableStream2.prototype.pipeTo = function(destination, rawOptions) {
        if (rawOptions === void 0) {
          rawOptions = {};
        }
        if (!IsReadableStream(this)) {
          return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
        }
        if (destination === void 0) {
          return promiseRejectedWith("Parameter 1 is required in 'pipeTo'.");
        }
        if (!IsWritableStream(destination)) {
          return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
        }
        var options;
        try {
          options = convertPipeOptions(rawOptions, "Second parameter");
        } catch (e) {
          return promiseRejectedWith(e);
        }
        if (IsReadableStreamLocked(this)) {
          return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
        }
        if (IsWritableStreamLocked(destination)) {
          return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
        }
        return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
      };
      ReadableStream2.prototype.tee = function() {
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("tee");
        }
        var branches = ReadableStreamTee(this);
        return CreateArrayFromList(branches);
      };
      ReadableStream2.prototype.values = function(rawOptions) {
        if (rawOptions === void 0) {
          rawOptions = void 0;
        }
        if (!IsReadableStream(this)) {
          throw streamBrandCheckException$1("values");
        }
        var options = convertIteratorOptions(rawOptions, "First parameter");
        return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
      };
      return ReadableStream2;
    }();
    Object.defineProperties(ReadableStream.prototype, {
      cancel: { enumerable: true },
      getReader: { enumerable: true },
      pipeThrough: { enumerable: true },
      pipeTo: { enumerable: true },
      tee: { enumerable: true },
      values: { enumerable: true },
      locked: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
        value: "ReadableStream",
        configurable: true
      });
    }
    if (typeof SymbolPolyfill.asyncIterator === "symbol") {
      Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
        value: ReadableStream.prototype.values,
        writable: true,
        configurable: true
      });
    }
    byteLengthSizeFunction = function(chunk) {
      return chunk.byteLength;
    };
    try {
      Object.defineProperty(byteLengthSizeFunction, "name", {
        value: "size",
        configurable: true
      });
    } catch (_a3) {
    }
    ByteLengthQueuingStrategy = function() {
      function ByteLengthQueuingStrategy2(options) {
        assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
        options = convertQueuingStrategyInit(options, "First parameter");
        this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
      }
      Object.defineProperty(ByteLengthQueuingStrategy2.prototype, "highWaterMark", {
        get: function() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("highWaterMark");
          }
          return this._byteLengthQueuingStrategyHighWaterMark;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ByteLengthQueuingStrategy2.prototype, "size", {
        get: function() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("size");
          }
          return byteLengthSizeFunction;
        },
        enumerable: false,
        configurable: true
      });
      return ByteLengthQueuingStrategy2;
    }();
    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
      highWaterMark: { enumerable: true },
      size: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: "ByteLengthQueuingStrategy",
        configurable: true
      });
    }
    countSizeFunction = function() {
      return 1;
    };
    try {
      Object.defineProperty(countSizeFunction, "name", {
        value: "size",
        configurable: true
      });
    } catch (_a3) {
    }
    CountQueuingStrategy = function() {
      function CountQueuingStrategy2(options) {
        assertRequiredArgument(options, 1, "CountQueuingStrategy");
        options = convertQueuingStrategyInit(options, "First parameter");
        this._countQueuingStrategyHighWaterMark = options.highWaterMark;
      }
      Object.defineProperty(CountQueuingStrategy2.prototype, "highWaterMark", {
        get: function() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("highWaterMark");
          }
          return this._countQueuingStrategyHighWaterMark;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(CountQueuingStrategy2.prototype, "size", {
        get: function() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("size");
          }
          return countSizeFunction;
        },
        enumerable: false,
        configurable: true
      });
      return CountQueuingStrategy2;
    }();
    Object.defineProperties(CountQueuingStrategy.prototype, {
      highWaterMark: { enumerable: true },
      size: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: "CountQueuingStrategy",
        configurable: true
      });
    }
    TransformStream = function() {
      function TransformStream2(rawTransformer, rawWritableStrategy, rawReadableStrategy) {
        if (rawTransformer === void 0) {
          rawTransformer = {};
        }
        if (rawWritableStrategy === void 0) {
          rawWritableStrategy = {};
        }
        if (rawReadableStrategy === void 0) {
          rawReadableStrategy = {};
        }
        if (rawTransformer === void 0) {
          rawTransformer = null;
        }
        var writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
        var readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
        var transformer = convertTransformer(rawTransformer, "First parameter");
        if (transformer.readableType !== void 0) {
          throw new RangeError("Invalid readableType specified");
        }
        if (transformer.writableType !== void 0) {
          throw new RangeError("Invalid writableType specified");
        }
        var readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
        var readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
        var writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
        var writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
        var startPromise_resolve;
        var startPromise = newPromise(function(resolve3) {
          startPromise_resolve = resolve3;
        });
        InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
        if (transformer.start !== void 0) {
          startPromise_resolve(transformer.start(this._transformStreamController));
        } else {
          startPromise_resolve(void 0);
        }
      }
      Object.defineProperty(TransformStream2.prototype, "readable", {
        get: function() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("readable");
          }
          return this._readable;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TransformStream2.prototype, "writable", {
        get: function() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("writable");
          }
          return this._writable;
        },
        enumerable: false,
        configurable: true
      });
      return TransformStream2;
    }();
    Object.defineProperties(TransformStream.prototype, {
      readable: { enumerable: true },
      writable: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
        value: "TransformStream",
        configurable: true
      });
    }
    TransformStreamDefaultController = function() {
      function TransformStreamDefaultController2() {
        throw new TypeError("Illegal constructor");
      }
      Object.defineProperty(TransformStreamDefaultController2.prototype, "desiredSize", {
        get: function() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("desiredSize");
          }
          var readableController = this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        },
        enumerable: false,
        configurable: true
      });
      TransformStreamDefaultController2.prototype.enqueue = function(chunk) {
        if (chunk === void 0) {
          chunk = void 0;
        }
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("enqueue");
        }
        TransformStreamDefaultControllerEnqueue(this, chunk);
      };
      TransformStreamDefaultController2.prototype.error = function(reason) {
        if (reason === void 0) {
          reason = void 0;
        }
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("error");
        }
        TransformStreamDefaultControllerError(this, reason);
      };
      TransformStreamDefaultController2.prototype.terminate = function() {
        if (!IsTransformStreamDefaultController(this)) {
          throw defaultControllerBrandCheckException("terminate");
        }
        TransformStreamDefaultControllerTerminate(this);
      };
      return TransformStreamDefaultController2;
    }();
    Object.defineProperties(TransformStreamDefaultController.prototype, {
      enqueue: { enumerable: true },
      error: { enumerable: true },
      terminate: { enumerable: true },
      desiredSize: { enumerable: true }
    });
    if (typeof SymbolPolyfill.toStringTag === "symbol") {
      Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: "TransformStreamDefaultController",
        configurable: true
      });
    }
  }
});

// ../../node/fs/lib/esm/file-handle.js
var _FileHandle, FileHandle;
var init_file_handle = __esm({
  "../../node/fs/lib/esm/file-handle.js"() {
    init_lib();
    init_read_stream();
    init_write_stream();
    init_stats();
    init_encoding();
    init_GLib_2_0();
    init_ponyfill();
    _FileHandle = class {
      constructor(options) {
        this.options = options;
        this.options.flags ||= "r";
        this.options.mode ||= 438;
        this._file = GLib_2_0_default.IOChannel.new_file(options.path.toString(), this.options.flags);
        this.fd = this._file.unix_get_fd();
        _FileHandle.instances[this.fd] = this;
        return _FileHandle.getInstance(this.fd);
      }
      static getInstance(fd) {
        const instance = _FileHandle.instances[fd];
        if (!instance) {
          throw new Error("No instance found for fd!");
        }
        return _FileHandle.instances[fd];
      }
      async appendFile(data, options) {
        const encoding = getEncodingFromOptions(options);
        if (typeof data === "string") {
          data = Buffer.from(data);
        }
        if (encoding)
          this._file.set_encoding(encoding);
        const [status, written] = this._file.write_chars(data, data.length);
        if (status === GLib_2_0_default.IOStatus.ERROR) {
          throw new Error("Error on append to file!");
        }
      }
      async chown(uid, gid) {
        warnNotImplemented("fs.FileHandle.chown");
      }
      async chmod(mode) {
        warnNotImplemented("fs.FileHandle.chmod");
      }
      createReadStream(options) {
        return new ReadStream2(this.options.path, options);
      }
      createWriteStream(options) {
        return new WriteStream2(this.options.path, options);
      }
      async datasync() {
        warnNotImplemented("fs.FileHandle.datasync");
      }
      async sync() {
        warnNotImplemented("fs.FileHandle.sync");
      }
      async read(args) {
        let buffer;
        let offset;
        let length2;
        let position;
        if (typeof args[0] === "object") {
          const options = args[0];
          buffer = options.buffer;
          offset = options.offset;
          length2 = options.length;
          position = options.position;
        } else {
          buffer = args[0];
          offset = args[1];
          length2 = args[2];
          position = args[3];
        }
        if (offset) {
          const status2 = this._file.seek_position(offset, GLib_2_0_default.SeekType.CUR);
          if (status2 === GLib_2_0_default.IOStatus.ERROR) {
            throw new Error("Error on set offset!");
          }
        }
        if (length2)
          this._file.set_buffer_size(length2);
        if (position) {
          const status2 = this._file.seek_position(position, GLib_2_0_default.SeekType.SET);
          if (status2 === GLib_2_0_default.IOStatus.ERROR) {
            throw new Error("Error on set position!");
          }
        }
        const [status, buf, bytesRead] = this._file.read_chars();
        if (status === GLib_2_0_default.IOStatus.ERROR) {
          throw new Error("Error on read!");
        }
        buffer = buf;
        return {
          bytesRead,
          buffer
        };
      }
      readableWebStream() {
        return new ReadableStream();
      }
      async readFile(options) {
        const encoding = getEncodingFromOptions(options, "buffer");
        if (encoding)
          this._file.set_encoding(encoding);
        const [status, buf] = this._file.read_to_end();
        if (status === GLib_2_0_default.IOStatus.ERROR) {
          throw new Error("Error on read from file!");
        }
        const res = encodeUint8Array(encoding, buf);
        return res;
      }
      async stat(opts) {
        warnNotImplemented("fs.FileHandle.stat");
        return new Stats(this.options.path.toString());
      }
      async truncate(len) {
        warnNotImplemented("fs.FileHandle.truncate");
      }
      async utimes(atime, mtime) {
        warnNotImplemented("fs.FileHandle.utimes");
      }
      async writeFile(data, options) {
        warnNotImplemented("fs.FileHandle.writeFile");
      }
      async write(data, ...args) {
        let position = null;
        let encoding = null;
        let offset = null;
        let length2 = null;
        if (typeof data === "string") {
          position = args[0];
          encoding = args[1];
        } else {
          offset = args[0];
          length2 = args[1];
          position = args[2];
        }
        encoding = getEncodingFromOptions(encoding, typeof data === "string" ? "utf8" : null);
        if (encoding) {
          console.log("set_encoding", encoding, this._file.get_encoding(), typeof data);
          this._file.set_encoding(encoding === "buffer" ? null : encoding);
        }
        if (offset) {
          const status2 = this._file.seek_position(offset, GLib_2_0_default.SeekType.CUR);
          if (status2 === GLib_2_0_default.IOStatus.ERROR) {
            throw new Error("Error on set offset!");
          }
        }
        if (length2)
          this._file.set_buffer_size(length2);
        if (position) {
          const status2 = this._file.seek_position(position, GLib_2_0_default.SeekType.SET);
          if (status2 === GLib_2_0_default.IOStatus.ERROR) {
            throw new Error("Error on set position!");
          }
        }
        let bytesWritten = 0;
        let status;
        if (typeof data === "string") {
          status = this._file.write_unichar(data);
          bytesWritten = data.length;
        } else {
          const [_status, _bytesWritten] = this._file.write_chars(data, length2);
          bytesWritten = _bytesWritten;
          status = _status;
        }
        if (status === GLib_2_0_default.IOStatus.ERROR) {
          throw new Error("Error on write to file!");
        }
        return {
          bytesWritten,
          buffer: data
        };
      }
      async writev(buffers, position) {
        warnNotImplemented("fs.FileHandle.writev");
        return {
          bytesWritten: 0,
          buffers: []
        };
      }
      async readv(buffers, position) {
        warnNotImplemented("fs.FileHandle.readv");
        return {
          bytesRead: 0,
          buffers: []
        };
      }
      async close() {
        this._file.close();
      }
    };
    FileHandle = _FileHandle;
    FileHandle.instances = {};
  }
});

// ../../node/fs/lib/esm/sync.js
var import_path4;
var init_sync = __esm({
  "../../node/fs/lib/esm/sync.js"() {
    init_GLib_2_0();
    init_Gio_2_0();
    init_lib();
    init_esm2();
    import_path4 = __toESM(require_path_browserify());
    init_fs_watcher();
    init_encoding();
    init_file_handle();
    init_dirent();
    init_utils2();
  }
});

// ../../node/fs/lib/esm/index.js
var init_esm9 = __esm({
  "../../node/fs/lib/esm/index.js"() {
    init_sync();
    init_callback();
    init_fs_watcher();
    init_read_stream();
    init_promises2();
  }
});

// ../../node/process/lib/esm/hrtime.js
var hrtime, NS_PER_SEC;
var init_hrtime = __esm({
  "../../node/process/lib/esm/hrtime.js"() {
    hrtime = (previousTimestamp) => {
      const baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
      const clocktime = performance.now() * 1e-3;
      let seconds = Math.floor(clocktime) + baseNow;
      let nanoseconds = Math.floor(clocktime % 1 * 1e9);
      if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
          seconds--;
          nanoseconds += 1e9;
        }
      }
      return [seconds, nanoseconds];
    };
    NS_PER_SEC = 1e9;
    hrtime.bigint = () => {
      const diff = hrtime();
      return BigInt(diff[0] * NS_PER_SEC + diff[1]);
    };
  }
});

// ../../node/process/lib/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  abort: () => abort,
  arch: () => arch2,
  argv: () => argv,
  argv0: () => argv0,
  cwd: () => cwd,
  default: () => src_default3,
  env: () => env2,
  exit: () => exit,
  hrtime: () => hrtime,
  memoryUsage: () => memoryUsage,
  nextTick: () => nextTick,
  pid: () => pid,
  platform: () => platform,
  stderr: () => stderr,
  stdin: () => stdin,
  stdout: () => stdout,
  title: () => title,
  uptime: () => uptime,
  version: () => version,
  versions: () => versions
});
var File3, System, TIME, Process, process2, src_default3, stdout, stderr, stdin, arch2, argv, argv0, env2, pid, platform, title, version, versions, abort, cwd, exit, nextTick, uptime, memoryUsage;
var init_esm10 = __esm({
  "../../node/process/lib/esm/index.js"() {
    init_lib();
    init_esm4();
    init_esm7();
    init_esm9();
    init_Gjs();
    init_GLib_2_0();
    init_Gio_2_0();
    init_hrtime();
    File3 = Gio_2_0_default.File;
    System = Gjs_default.system;
    TIME = Date.now();
    Process = class extends EventEmitter {
      constructor() {
        super();
        this.hrtime = hrtime.bind(this);
        this.stdout = new WriteStream(0);
        this.stderr = new WriteStream(0);
        this.stdin = new ReadStream(0);
        this._startTime = TIME;
      }
      _listenerCount(eventName) {
        return this.listeners(eventName).length;
      }
      get arch() {
        return arch;
      }
      get argv() {
        const [__filename] = GLib_2_0_default.filename_from_uri(import.meta.url);
        const arr = [__filename];
        ARGV.forEach((arg) => {
          if (arg[0] !== "-") {
            arr.push(
              existsSync(arg) ? File3.new_for_path(arg).get_path() : arg
            );
          } else {
            arr.push(arg);
          }
        });
        return arr;
      }
      get argv0() {
        return File3.new_for_path(GLib_2_0_default.filename_from_uri(import.meta.url)[0]).get_basename();
      }
      get env() {
        return GLib_2_0_default.listenv().reduce(
          (env22, key) => {
            env22[key] = GLib_2_0_default.getenv(key);
            return env22;
          },
          {}
        );
      }
      get pid() {
        return new Gio_2_0_default.Credentials().get_unix_pid();
      }
      get platform() {
        return os();
      }
      get title() {
        return GLib_2_0_default.get_prgname();
      }
      get version() {
        const v = System.version.toString();
        return `${v[0]}.${+(v[1] + v[2])}.${+(v[3] + v[4])}`;
      }
      get versions() {
        return {
          gjs: this.version,
          http_parser: "0.0",
          node: "0.0",
          v8: "0.0",
          uv: "0.0",
          zlib: "0.0",
          ares: "0.0",
          icu: "0.0",
          modules: "0",
          openssl: "0.0"
        };
      }
      abort() {
        process2.emit("abort");
        System.exit(1);
      }
      cwd() {
        return GLib_2_0_default.get_current_dir();
      }
      exit(status) {
        process2.emit("exit", status);
        System.exit(status || 0);
      }
      nextTick(cb, ...args) {
        if (typeof cb !== "function") {
          throw new TypeError("handler is not a function");
        }
        setImmediate.apply(null, arguments);
      }
      uptime() {
        return Math.floor((Date.now() - this._startTime) / 1e3);
      }
      memoryUsage() {
        return {
          rss: 0,
          heapTotal: Number.MAX_SAFE_INTEGER,
          heapUsed: 0,
          external: 0
        };
      }
    };
    process2 = new Process();
    src_default3 = process2;
    stdout = process2.stdout;
    stderr = process2.stderr;
    stdin = process2.stdin;
    arch2 = process2.arch;
    argv = process2.argv;
    argv0 = process2.argv0;
    env2 = process2.env;
    pid = process2.pid;
    platform = process2.platform;
    title = process2.title;
    version = process2.version;
    versions = process2.versions;
    abort = process2.abort;
    cwd = process2.cwd;
    exit = process2.exit;
    nextTick = process2.nextTick;
    uptime = process2.uptime;
    memoryUsage = process2.memoryUsage;
  }
});

// ../../gjs/unit/lib/esm/index.js
init_esm3();
var mainloop = globalThis?.imports?.mainloop;
var countTestsOverall = 0;
var countTestsFailed = 0;
var countTestsIgnored = 0;
var runtime = "";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BLUE = "\x1B[34m";
var GRAY = "\x1B[90m";
var RESET = "\x1B[39m";
var print = globalThis.print || console.log;
var MatcherFactory = class {
  constructor(actualValue, positive, negated) {
    this.actualValue = actualValue;
    this.positive = positive;
    if (negated) {
      this.not = negated;
    } else {
      this.not = new MatcherFactory(actualValue, !positive, this);
    }
  }
  triggerResult(success, msg) {
    if (success && !this.positive || !success && this.positive) {
      ++countTestsFailed;
      throw new Error(msg);
    }
  }
  to(callback) {
    this.triggerResult(
      callback(this.actualValue),
      `      Expected callback to validate`
    );
  }
  toBe(expectedValue) {
    this.triggerResult(
      this.actualValue === expectedValue,
      `      Expected values to match using ===
      Expected: ${expectedValue} (${typeof expectedValue})
      Actual: ${this.actualValue} (${typeof this.actualValue})`
    );
  }
  toEqual(expectedValue) {
    this.triggerResult(
      this.actualValue == expectedValue,
      `      Expected values to match using ==
      Expected: ${expectedValue} (${typeof expectedValue})
      Actual: ${this.actualValue} (${typeof this.actualValue})`
    );
  }
  toEqualArray(expectedValue) {
    let success = Array.isArray(this.actualValue) && Array.isArray(expectedValue) && this.actualValue.length === expectedValue.length;
    for (let i = 0; i < this.actualValue.length; i++) {
      const actualVal = this.actualValue[i];
      const expectedVal = expectedValue[i];
      success = actualVal == expectedVal;
      if (!success)
        break;
    }
    this.triggerResult(
      success,
      `      Expected array items to match using ==
      Expected: ${expectedValue} (${typeof expectedValue})
      Actual: ${this.actualValue} (${typeof this.actualValue})`
    );
  }
  toMatch(expectedValue) {
    if (typeof this.actualValue.match !== "function") {
      throw new Error(`You can not use toMatch on type ${typeof this.actualValue}`);
    }
    this.triggerResult(
      !!this.actualValue.match(expectedValue),
      "      Expected values to match using regular expression\n      Expression: " + expectedValue + "\n      Actual: " + this.actualValue
    );
  }
  toBeDefined() {
    this.triggerResult(
      typeof this.actualValue !== "undefined",
      `      Expected value to be defined`
    );
  }
  toBeUndefined() {
    this.triggerResult(
      typeof this.actualValue === "undefined",
      `      Expected value to be undefined`
    );
  }
  toBeNull() {
    this.triggerResult(
      this.actualValue === null,
      `      Expected value to be null`
    );
  }
  toBeTruthy() {
    this.triggerResult(
      this.actualValue,
      `      Expected value to be truthy`
    );
  }
  toBeFalsy() {
    this.triggerResult(
      !this.actualValue,
      `      Expected value to be falsy`
    );
  }
  toContain(needle) {
    this.triggerResult(
      this.actualValue instanceof Array && this.actualValue.indexOf(needle) !== -1,
      `      Expected ` + this.actualValue + ` to contain ` + needle
    );
  }
  toBeLessThan(greaterValue) {
    this.triggerResult(
      this.actualValue < greaterValue,
      `      Expected ` + this.actualValue + ` to be less than ` + greaterValue
    );
  }
  toBeGreaterThan(smallerValue) {
    this.triggerResult(
      this.actualValue > smallerValue,
      `      Expected ` + this.actualValue + ` to be greater than ` + smallerValue
    );
  }
  toBeCloseTo(expectedValue, precision) {
    const shiftHelper = Math.pow(10, precision);
    this.triggerResult(
      Math.round(this.actualValue * shiftHelper) / shiftHelper === Math.round(expectedValue * shiftHelper) / shiftHelper,
      `      Expected ` + this.actualValue + ` with precision ` + precision + ` to be close to ` + expectedValue
    );
  }
  toThrow(ErrorType) {
    let errorMessage = "";
    let didThrow = false;
    let typeMatch = true;
    try {
      this.actualValue();
      didThrow = false;
    } catch (e) {
      errorMessage = e.message || "";
      didThrow = true;
      if (ErrorType) {
        typeMatch = e instanceof ErrorType;
      }
    }
    const functionName = this.actualValue.name || typeof this.actualValue === "function" ? "[anonymous function]" : this.actualValue.toString();
    this.triggerResult(
      didThrow,
      `      Expected ${functionName} to ${this.positive ? "throw" : "not throw"} an exception ${!this.positive && errorMessage ? `, but an error with the message "${errorMessage}" was thrown` : ""}`
    );
    if (ErrorType) {
      this.triggerResult(
        typeMatch,
        `      Expected Error type '${ErrorType.name}', but the error is not an instance of it`
      );
    }
  }
};
var describe = async function(moduleName, callback) {
  print("\n" + moduleName);
  await callback();
  beforeEachCb = null;
  afterEachCb = null;
};
var beforeEachCb;
var afterEachCb;
var it = async function(expectation, callback) {
  try {
    if (typeof beforeEachCb === "function") {
      await beforeEachCb();
    }
    await callback();
    if (typeof afterEachCb === "function") {
      await afterEachCb();
    }
    print(`  ${GREEN}\u2714${RESET} ${GRAY}${expectation}${RESET}`);
  } catch (e) {
    print(`  ${RED}\u274C${RESET} ${GRAY}${expectation}${RESET}`);
    print(`${RED}${e.message}${RESET}`);
  }
};
var expect = function(actualValue) {
  ++countTestsOverall;
  const expecter = new MatcherFactory(actualValue, true);
  return expecter;
};
var assert4 = function(success, message) {
  ++countTestsOverall;
  if (!success) {
    ++countTestsFailed;
  }
  src_default(success, message);
};
assert4.strictEqual = function(actual, expected, message) {
  ++countTestsOverall;
  try {
    src_default.strictEqual(actual, expected, message);
  } catch (error) {
    ++countTestsFailed;
    throw error;
  }
};
assert4.throws = function(promiseFn, ...args) {
  ++countTestsOverall;
  let error;
  try {
    promiseFn();
  } catch (e) {
    error = e;
  }
  if (!error)
    ++countTestsFailed;
  src_default.throws(() => {
    if (error)
      throw error;
  }, args[0], args[1]);
};
assert4.deepStrictEqual = function(actual, expected, message) {
  ++countTestsOverall;
  try {
    src_default.deepStrictEqual(actual, expected, message);
  } catch (error) {
    ++countTestsFailed;
    throw error;
  }
};
var runTests = async function(namespaces) {
  for (const subNamespace in namespaces) {
    const namespace = namespaces[subNamespace];
    if (typeof namespace === "function") {
      await namespace();
    } else if (typeof namespace === "object") {
      await runTests(namespace);
    }
  }
};
var printResult = () => {
  if (countTestsIgnored) {
    print(`
${BLUE}\u2714 ${countTestsIgnored} ignored test${countTestsIgnored > 1 ? "s" : ""}${RESET}`);
  }
  if (countTestsFailed) {
    print(`
${RED}\u274C ${countTestsFailed} of ${countTestsOverall} tests failed${RESET}`);
  } else {
    print(`
${GREEN}\u2714 ${countTestsOverall} completed${RESET}`);
  }
};
var getRuntime = async () => {
  if (runtime && runtime !== "Unknown") {
    return runtime;
  }
  if (globalThis.Deno?.version?.deno) {
    return "Deno " + globalThis.Deno?.version?.deno;
  } else {
    let process3 = globalThis.process;
    if (!process3) {
      try {
        process3 = await Promise.resolve().then(() => (init_esm10(), esm_exports2));
      } catch (error) {
        console.error(error);
        console.warn(error.message);
        runtime = "Unknown";
      }
    }
    if (process3?.versions?.gjs) {
      runtime = "Gjs " + process3.versions.gjs;
    } else if (process3?.versions?.node) {
      runtime = "Node.js " + process3.versions.node;
    }
  }
  return runtime || "Unknown";
};
var printRuntime = async () => {
  const runtime2 = await getRuntime();
  print(`Running on ${runtime2}`);
};
var run = async (namespaces) => {
  printRuntime().then(async () => {
    return runTests(namespaces).then(() => {
      printResult();
      print();
      mainloop?.quit();
    });
  });
  mainloop?.run();
};

// index.spec.ts
var index_spec_default = async () => {
  await describe("true", async () => {
    await it("should be true", async () => {
      expect(true).toBeTruthy();
    });
  });
};

// test.mts
run({ testSuite: index_spec_default });
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
