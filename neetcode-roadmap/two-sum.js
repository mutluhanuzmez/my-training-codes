/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j] == target){
                return [i,j];
            }
        }
    }
};

// 2nd Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let neg = new Map();

    for (let i = 0; i < nums.length; i++){
        if(neg.has(nums[i])){
            return [neg.get(nums[i]), i];
        }else{
            neg.set(target - nums[i], i);
        }
    }
};
