import { describe, test, expect } from "bun:test";

export function multiplicationTable(size: number): number[][] {
  return Array(size)
    .fill(-1)
    .map((_, i) => {
      return Array(size)
        .fill(-1)
        .map((_, j) => (i + 1) * (j + 1));
    });
}

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
