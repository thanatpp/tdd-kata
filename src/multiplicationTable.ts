export function multiplicationTable(size: number): number[][] {
  return Array(size)
    .fill(-1)
    .map((_, i) => {
      return Array(size)
        .fill(-1)
        .map((_, j) => (i + 1) * (j + 1));
    });
}
