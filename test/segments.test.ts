import { describe, expect, test } from "vitest";
import { hasTooManySegments } from "../src";

describe("hasTooManySegments", () => {
  test("a short path is within the limit", () => {
    expect(hasTooManySegments("/a/b", 5)).toBe(false);
  });

  test("a long path is over the limit", () => {
    expect(hasTooManySegments("/a/b/c/d/e/f", 2)).toBe(true);
  });
});
