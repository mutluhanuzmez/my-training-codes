// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find a maximum sum of a compact subsequence of array elements.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxEnding = 0;
    let maxSlice = 0;
    let maxNegativeNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < A.length; i++) {
        maxEnding = Math.max(0, maxEnding + A[i]);
        maxSlice = Math.max(maxSlice, maxEnding);
        maxNegativeNum = Math.max(maxNegativeNum, A[i]);
    }

    if(maxSlice == 0){
        return maxNegativeNum;
    }

    return maxSlice;
}

console.log(solution([3, 2, -6, 4, 0]));
console.log(solution([-1, -2, -3, -4, -5]));