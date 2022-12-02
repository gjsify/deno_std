// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

import { TextLineStream } from "./text_line_stream.ts";
import { assertEquals } from "../testing/asserts.ts";

Deno.test("[streams] TextLineStream", async () => {
  const textStream = new ReadableStream({
    start(controller) {
      controller.enqueue("qwertzu");
      controller.enqueue("iopasd\r\nmnbvc");
      controller.enqueue("xylk\rjhgfds\napoiuzt\r");
      controller.enqueue("qwr\r09ei\rqwrjiowqr\r");
      controller.enqueue("\nrewq0987\n\n654321");
      controller.enqueue("\nrewq0987\r\n\r\n654321\r");
      controller.close();
    },
  });

  const lines = [];
  for await (const chunk of textStream.pipeThrough(new TextLineStream())) {
    lines.push(chunk);
  }
  assertEquals(lines, [
    "qwertzuiopasd",
    "mnbvcxylk\rjhgfds",
    "apoiuzt\rqwr\r09ei\rqwrjiowqr",
    "rewq0987",
    "",
    "654321",
    "rewq0987",
    "",
    "654321\r",
  ]);

  const textStream2 = new ReadableStream({
    start(controller) {
      controller.enqueue("rewq0987\r\n\r\n654321\n");
      controller.close();
    },
  });

  const lines2 = [];
  for await (const chunk of textStream2.pipeThrough(new TextLineStream())) {
    lines2.push(chunk);
  }
  assertEquals(lines2, [
    "rewq0987",
    "",
    "654321",
    "",
  ]);
});

Deno.test("[streams] TextLineStream - allowCR", async () => {
  const textStream = new ReadableStream({
    start(controller) {
      controller.enqueue("qwertzu");
      controller.enqueue("iopasd\r\nmnbvc");
      controller.enqueue("xylk\rjhgfds\napoiuzt\r");
      controller.enqueue("qwr\r09ei\rqwrjiowqr\r");
      controller.enqueue("\nrewq0987\n\n654321");
      controller.enqueue("\nrewq0987\r\n\r\n654321\r");
      controller.close();
    },
  });

  const lines = [];
  for await (
    const chunk of textStream.pipeThrough(new TextLineStream({ allowCR: true }))
  ) {
    lines.push(chunk);
  }
  assertEquals(lines, [
    "qwertzuiopasd",
    "mnbvcxylk",
    "jhgfds",
    "apoiuzt",
    "qwr",
    "09ei",
    "qwrjiowqr",
    "rewq0987",
    "",
    "654321",
    "rewq0987",
    "",
    "654321",
    "",
  ]);

  const textStream2 = new ReadableStream({
    start(controller) {
      controller.enqueue("rewq0987\r\n\r\n654321\n");
      controller.close();
    },
  });

  const lines2 = [];
  for await (const chunk of textStream2.pipeThrough(new TextLineStream())) {
    lines2.push(chunk);
  }
  assertEquals(lines2, [
    "rewq0987",
    "",
    "654321",
    "",
  ]);
});

Deno.test("[streams] TextLineStream - large chunks", async () => {
  const textStream = new ReadableStream({
    start(controller) {
      controller.enqueue("\n".repeat(10000));
      controller.enqueue("\n".repeat(10000));
      controller.close();
    },
  });

  let lines = 0;
  for await (const chunk of textStream.pipeThrough(new TextLineStream())) {
    assertEquals(chunk, "");
    lines++;
  }
  assertEquals(lines, 20001);
});
