export async function sortArray(arr: number[]): Promise<number[]> {
  const sort = arr.slice().sort((a, b) => a - b);
  return sort;
}

export async function percentile(arr: number[], p: number): Promise<number> {
  if (p < 0 || p > 100) {
    throw new Error("Percentile must be between 0 and 100");
  }
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const index = (p / 100) * (sortedArr.length - 1);
  const lowerIndex = Math.floor(index);
  const upperIndex = Math.ceil(index);
  const weight = index - lowerIndex;
  return sortedArr[lowerIndex] * (1 - weight) + sortedArr[upperIndex] * weight;
}

export async function calculateIQR(arr: number[]): Promise<number> {
  const q25 = await percentile(arr, 25);
  const q75 = await percentile(arr, 75);
  return q75 - q25;
}

export async function calculateMode(arr: number[]): Promise<number[]> {
  const frequency: { [key: number]: number } = {};
  arr.forEach((value) => {
    frequency[value] = (frequency[value] || 0) + 1;
  });
  const maxFrequency = Math.max(...Object.values(frequency));
  const modes = Object.keys(frequency)
    .filter((key) => frequency[+key] === maxFrequency)
    .map((key) => +key);
  if (modes.length > 1) {
    return [modes[modes.length - 1]];
  } else {
    return modes;
  }
}

export async function findMin(arr: number[]): Promise<number> {
  const min = Math.min(...arr);
  return min;
}

export async function findMax(arr: number[]): Promise<number> {
  const max = Math.max(...arr);
  return max;
}
