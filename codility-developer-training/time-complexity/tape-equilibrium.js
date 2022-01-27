// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 1){
        return A[0];
    }

    let totalSum = 0;

    for(let i = 0; i < A.length;i++){
        totalSum += A[i];
    }

    let increasingSum = 0;
    let currentValue;
    let minVal = Number.MAX_VALUE;

    for(let i = 1; i < A.length;i++){
        increasingSum += A[i-1];
        currentValue = Math.abs(2*increasingSum - totalSum);
        if(currentValue < minVal){
            minVal = currentValue;
        }
    }

    return minVal;
}