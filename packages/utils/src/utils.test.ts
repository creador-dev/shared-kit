import { describe, expect, it } from "vitest";
import { clamp, cn } from "./index";

describe("utils", () => {
  it("clamps values to an inclusive range", () => {
    expect(clamp(12, 0, 10)).toBe(10);
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  it("joins truthy class names", () => {
    expect(cn("button", false, undefined, "active")).toBe("button active");
  });
});

