import * as https from "../https.js";
import { assert } from "../../testing/asserts.js";
import type { IncomingMessageForClient } from "../http.js";
https.request("https://localhost:4505", (res: IncomingMessageForClient) => {
  let data = "";
  assert(res.socket);
  assert(Object.hasOwn(res.socket, "authorized"));
  // @ts-ignore socket is TLSSocket, and it has "authoried"
  assert(res.socket.authorized);
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
}).end();
