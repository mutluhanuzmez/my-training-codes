// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the maximal sum of any double slice

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let fromStart = new Array(A.length).fill(0);
    let fromEnd = new Array(A.length).fill(0);
    let maxSum = 0;

    for(let i = 1; i < A.length-1; i++) {
        fromStart[i] = Math.max(A[i], fromStart[i-1] + A[i]);
        if(fromStart[i] < 0){
            fromStart[i] = 0;
        }
    }

    for(let i = A.length-2; i > 0; i--) {
        fromEnd[i] = Math.max(A[i], fromEnd[i+1] + A[i]);
        if(fromEnd[i] < 0){
            fromEnd[i] = 0;
        }
    }

    for (let i = 1; i < A.length-1;i++){
        maxSum = Math.max(maxSum, fromStart[i-1]+fromEnd[i+1]);
    }

    return maxSum;
}

// console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));
// console.log(solution([3, 2, -6, 4, 0]));
// console.log(solution([-1, -2, -3, -4, -5]));