import { describe, test, expect } from "bun:test";

// source: https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript
export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h < 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let bounces = h * bounce;
  let count = 1;
  while (bounces > window) {
    count = count + 2;
    bounces = bounces * bounce;
  }

  return count;
}

describe("Bouncing Ball", () => {
  test("h should be greater than 0", () => {
    const actual = bouncingBall(-1, 0.5, -1);
    expect(actual).toBe(-1);
  });

  test("bounce should be greater than 0 and less than 1", () => {
    const actual = bouncingBall(-1, -1, -1);
    const actual1 = bouncingBall(10, 0.1, 2);
    const actual2 = bouncingBall(-1, 1, -1);

    expect(actual).toBe(-1);
    expect(actual1).toBe(1);
    expect(actual2).toBe(-1);
  });

  test("window must be less than h", () => {
    const actual = bouncingBall(10, 0.5, 9);
    const actual1 = bouncingBall(10, 0.5, 11);

    expect(actual).toBe(1);
    expect(actual1).toBe(-1);
  });

  test("window must be less than h", () => {
    const actual = bouncingBall(10, 0.5, 9);
    const actual1 = bouncingBall(10, 0.5, 11);

    expect(actual).toBe(1);
    expect(actual1).toBe(-1);
  });

  test("bounces down", () => {
    const actual = bouncingBall(10, 0.5, 6);
    expect(actual).toBe(1);
  });

  test("bounces down up down", () => {
    const actual = bouncingBall(10, 0.5, 4);
    expect(actual).toBe(3);
  });

  test("bounces down when first bounces is equal window", () => {
    const actual = bouncingBall(10, 0.5, 5);
    expect(actual).toBe(1);
  });
});
