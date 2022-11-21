function twoSum(nums: number[], target: number): number[] {

    const nLength:number = nums.length;
    let i,j;

    for(i = 0; i < nLength; i++) {
        for(j = nLength -1; j < nLength; j--){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }

    return [0,0];
};