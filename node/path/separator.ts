// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.

import { isWindows } from "../../_util/os.js";

export const SEP = isWindows ? "\\" : "/";
export const SEP_PATTERN = isWindows ? /[\\/]+/ : /\/+/;
