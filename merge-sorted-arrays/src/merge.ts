export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection_3.length - 1; 

  while (
    i < collection_1.length ||
    j < collection_2.length ||
    k >= 0
  ) {
    let minValue = Infinity;
    let source = "";

    if (i < collection_1.length && collection_1[i] < minValue) {
      minValue = collection_1[i];
      source = "c1";
    }

    if (j < collection_2.length && collection_2[j] < minValue) {
      minValue = collection_2[j];
      source = "c2";
    }

    if (k >= 0 && collection_3[k] < minValue) {
      minValue = collection_3[k];
      source = "c3";
    }

    result.push(minValue);

    if (source === "c1") i++;
    else if (source === "c2") j++;
    else k--;
  }

  return result;
}
