// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Rotate an array to the right by a given number of steps.

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = [];
    let rotateNum;
    const N = A.length;
    
    if(N == 0 || K == 0 || N == K)
        return A;
    
    if(N>K) {
        rotateNum = K;
    } else {
        rotateNum = K%N;
    }

    const positionIndex = N - rotateNum

    for(let i = positionIndex; i < N; i++) {
        result.push(A[i]);
    }
    for(let i = 0 ; i < positionIndex; i++) {
        result.push(A[i]);
    }

    return result;
}
