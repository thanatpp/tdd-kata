export function josephusSurvivor(n: number, k: number) {
  let numbers = new Array(n).fill(0).map((_, i) => i + 1);

  let lastPosition = 0;
  while (numbers.length > 1) {
    const position = (k + lastPosition) % numbers.length;
    lastPosition = (position === 0 ? numbers.length : position) - 1;
    numbers = removeByIndex(numbers, lastPosition);
  }

  return numbers[0];
}

const removeByIndex = (list: number[], index: number) => [
  ...list.slice(0, index),
  ...list.slice(index + 1),
];
