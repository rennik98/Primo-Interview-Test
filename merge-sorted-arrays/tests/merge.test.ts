import { merge } from "../src/merge";

describe("merge sorted arrays", () => {
  test("merges three arrays correctly", () => {
    const c1 = [0, 3, 6];
    const c2 = [1, 4, 7];
    const c3 = [9, 8, 5, 2];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("works with empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
  });

  test("handles duplicates", () => {
    const c1 = [1, 2, 2];
    const c2 = [2, 3];
    const c3 = [3, 2, 1];

    expect(merge(c1, c2, c3)).toEqual([1, 1, 2, 2, 2, 2, 3, 3]);
  });
});
