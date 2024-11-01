import { describe, test, expect } from "bun:test";
import { multiplicationTable } from "./multiplicationTable";

describe("Multiplication Table", () => {
  test("size = 1", () => {
    const actual = multiplicationTable(1);
    expect(actual).toEqual([[1]]);
  });

  test("size = 2", () => {
    const actual = multiplicationTable(2);
    expect(actual).toEqual([
      [1, 2],
      [2, 4],
    ]);
  });

  test("size = 3", () => {
    const actual = multiplicationTable(3);
    expect(actual).toEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
