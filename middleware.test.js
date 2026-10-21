import assert from "node:assert/strict";
import test from "node:test";
import { onEvent } from "./middleware.js";

test("drops an empty choices chunk", () => {
  const event = {
    choices: [],
    usage: {
      completion_tokens: 178,
      prompt_tokens: 3608,
      total_tokens: 3786,
    },
  };

  assert.equal(onEvent(event), null);
});

test("keeps content chunks", () => {
  const event = {
    choices: [{ delta: { content: "anch" } }],
    usage: null,
  };

  assert.equal(onEvent(event), undefined);
});

test("keeps the finish chunk", () => {
  const event = {
    choices: [{ delta: {}, finish_reason: "stop" }],
    usage: null,
  };

  assert.equal(onEvent(event), undefined);
});

test("drops an empty choices chunk without usage", () => {
  assert.equal(onEvent({ choices: [], usage: null }), null);
  assert.equal(onEvent({ choices: [] }), null);
});
