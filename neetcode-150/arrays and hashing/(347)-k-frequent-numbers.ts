function topKFrequent(nums: number[], k: number): number[] {
  let result = [];
  let kMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (kMap.has(nums[i])) {
      kMap.set(nums[i], kMap.get(nums[i]) + 1);
    } else {
      kMap.set(nums[i], 1);
    }
  }

  const sortedArray = Array.from(kMap).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0]);
  }

  return result;
}
