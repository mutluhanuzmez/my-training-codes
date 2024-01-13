/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            return true;
        } else {
            hashMap.set(nums[i], true);
        }
    }

    return false;
};