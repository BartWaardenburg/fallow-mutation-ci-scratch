import { describe, expect, it } from "vitest";
import { clampPort, describePort } from "../src/extra/port";

describe("clampPort", () => {
  it("returns a number", () => {
    expect(typeof clampPort(80)).toBe("number");
  });
  it("describes", () => {
    expect(describePort(80)).toBeTypeOf("string");
  });
});
