import { describe, test, expect } from "bun:test";
import { josephusSurvivor } from "./josephusSurvivor";

describe("Josephus Survivor", () => {
  test("n is 1", () => {
    const actual = josephusSurvivor(1, 3);
    expect(actual).toEqual(1);
  });

  test("n more than 1", () => {
    const actual = josephusSurvivor(3, 1);
    expect(actual).toEqual(3);
  });

  test("n more than 1 and k more than 1", () => {
    const actual = josephusSurvivor(40, 3);
    expect(actual).toEqual(28);
  });
});
