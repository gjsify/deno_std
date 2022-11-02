// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { withoutAll } from "../../collections/without_all.js";
import config from "./config.json" assert { type: "json" };

// deno-lint-ignore no-explicit-any
type Object = Record<string, any>;

const encoder = new TextEncoder();

const NODE_API_BASE_URL = "https://api.github.com/repos/nodejs/node";
const NODE_BASE_URL = "https://github.com/nodejs/node";
const NODE_IGNORED_TEST_DIRS = [
  "addons",
  "async-hooks",
  "cctest",
  "doctool",
  "embedding",
  "fixtures",
  "fuzzers",
  "js-native-api",
  "node-api",
  "overlapped-checker",
  "report",
  "testpy",
  "tick-processor",
  "tools",
  "v8-updates",
  "wasi",
  "wpt",
];

async function getNodeTestDirSHA(): Promise<string> {
  const response = await fetch(NODE_API_BASE_URL + "/contents");
  const body = await response.json();
  return body
    .find(({ name }: Object) => name === "test")
    .sha;
}

async function getNodeTests(sha: string): Promise<string[]> {
  const url = NODE_API_BASE_URL + "/git/trees/" + sha + "?recursive=1";
  const response = await fetch(url);
  const body = await response.json();

  return body.tree
    .filter(({ path }: Object) =>
      path.includes("/test-") && path.endsWith(".js") &&
      !NODE_IGNORED_TEST_DIRS.some((dir) => path.startsWith(dir))
    )
    .map(({ path }: Object) => path);
}

function getDenoTests(): string[] {
  return Object.entries(config.tests)
    .filter(([testDir]) => !NODE_IGNORED_TEST_DIRS.includes(testDir))
    .flatMap(([testDir, tests]) => tests.map((test) => testDir + "/" + test));
}

async function getMissingTests(): Promise<string[]> {
  const nodeTestDirSHA = await getNodeTestDirSHA();
  const nodeTests = await getNodeTests(nodeTestDirSHA);

  const denoTests = await getDenoTests();

  return withoutAll(nodeTests, denoTests);
}

async function main() {
  const file = await Deno.open(new URL("./TODO.md", import.meta.url), {
    write: true,
  });

  await file.write(encoder.encode("# Remaining Node Tests\n\n"));

  const missingTests = await getMissingTests();
  for (let i = 0; i < missingTests.length; i++) {
    const test = missingTests[i];
    await file.write(
      encoder.encode(
        `${i + 1}. [${test}](${NODE_BASE_URL + "/tree/main/test/" + test})\n`,
      ),
    );
  }

  file.close();
}

if (import.meta.main) {
  await main();
}
