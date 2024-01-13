function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(target - nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) && i !== hashMap.get(nums[i])) {
      return [i, hashMap.get(nums[i])];
    }
  }
}
