import { describe, test, expect } from "bun:test";
import { dirReduc } from "./dirReduc";

describe("dirReduc", () => {
  test(`["NORTH", "SOUTH", "EAST]`, () => {
    const actual = dirReduc(["NORTH", "SOUTH", "EAST"]);
    expect(actual).toEqual(["EAST"]);
  });

  test(`["NORTH", "WEST", "SOUTH", "EAST"]`, () => {
    const actual = dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
    expect(actual).toEqual(["NORTH", "WEST", "SOUTH", "EAST"]);
  });

  test(`["WEST", "SOUTH", "North]`, () => {
    const actual = dirReduc(["WEST", "SOUTH", "NORTH"]);
    expect(actual).toEqual(["WEST"]);
  });

  test(`["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]`, () => {
    const actual = dirReduc([
      "NORTH",
      "SOUTH",
      "SOUTH",
      "EAST",
      "WEST",
      "NORTH",
      "WEST",
    ]);
    expect(actual).toEqual(["WEST"]);
  });
});
