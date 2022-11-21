function pivotIndex(nums: number[]): number {
    let sumLeft : number = 0;
    let sumRight : number= 0;
    const numsLength : number = nums.length;
    const hashMapLeft = new Map<number, number>();
    const hashMapRight = new Map<number, number>();
    
    for (let i = 0; i <= numsLength - 1; i++) {
        if(i != 0){
            sumLeft += nums[i-1];
            sumRight += nums[numsLength - i];
        }

        hashMapLeft.set(i, sumLeft);
        hashMapRight.set(numsLength - i - 1, sumRight);
    }

    for (let i = 0; i <= numsLength - 1; i++) {
        if(hashMapLeft.get(i) == hashMapRight.get(i)){
            return i;
        }
    }

    return -1;
};