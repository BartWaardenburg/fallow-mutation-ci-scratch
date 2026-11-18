import { describe, expect, test } from "vitest";
import { hasTooManySegments } from "../src";

describe("hasTooManySegments", () => {
  test("a short path is within the limit", () => {
    expect(hasTooManySegments("/a/b", 5)).toBe(false);
  });

  test("a long path is over the limit", () => {
    expect(hasTooManySegments("/a/b/c/d/e/f", 2)).toBe(true);
  });

  test("a path at the limit is within the limit", () => {
    expect(hasTooManySegments("/ab/cd", 2)).toBe(false);
  });

  test("an empty input has no segments", () => {
    expect(hasTooManySegments(undefined, 0)).toBe(false);
  });
});
