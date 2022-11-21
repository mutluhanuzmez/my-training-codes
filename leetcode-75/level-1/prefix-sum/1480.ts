function runningSum(nums: number[]): number[] {
    let sums : number[] = [];
    const numsLength : number = nums.length;
    sums.push(nums[0]);

    for(let i = 0; i < numsLength-1; i++){
        sums.push(sums[i] + nums[i+1]);
    }

    return sums;
};