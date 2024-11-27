import { describe, test, expect } from "bun:test";
import { isSolved } from "./ticTacToeChecker";

describe("Tic Tac Toe Checker", () => {
  test("the board is not finished", () => {
    const actual = isSolved([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);

    expect(actual).toEqual(-1);
  });

  test("vertical win", () => {
    const actual1 = isSolved([
      [1, 2, 2],
      [1, 0, 0],
      [1, 0, 0],
    ]);

    const actual2 = isSolved([
      [2, 1, 2],
      [0, 1, 0],
      [0, 1, 0],
    ]);

    const actual3 = isSolved([
      [2, 2, 1],
      [0, 0, 1],
      [0, 0, 1],
    ]);

    expect(actual1).toEqual(1);
    expect(actual2).toEqual(1);
    expect(actual3).toEqual(1);
  });

  test("horizontal win", () => {
    const actual = isSolved([
      [2, 2, 2],
      [1, 1, 0],
      [1, 0, 0],
    ]);

    const actual1 = isSolved([
      [1, 1, 0],
      [2, 2, 2],
      [1, 0, 0],
    ]);

    const actual2 = isSolved([
      [1, 1, 0],
      [1, 0, 0],
      [2, 2, 2],
    ]);

    expect(actual).toEqual(2);
    expect(actual1).toEqual(2);
    expect(actual2).toEqual(2);
  });

  test("cross win", () => {
    const actual1 = isSolved([
      [2, 2, 1],
      [1, 2, 2],
      [1, 1, 2],
    ]);

    const actual2 = isSolved([
      [1, 2, 2],
      [1, 2, 2],
      [2, 1, 1],
    ]);

    expect(actual1).toEqual(2);
    expect(actual2).toEqual(2);
  });

  test("the board is draw", () => {
    const actual = isSolved([
      [1, 2, 1],
      [2, 2, 1],
      [1, 1, 2],
    ]);

    expect(actual).toEqual(0);
  });
});
