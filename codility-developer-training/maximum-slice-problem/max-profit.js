// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Given a log of stock prices compute the maximum possible earning.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxProfit = 0;
    let buyPoint = Number.MAX_VALUE;
    let buyPointIndex = 0;
    let sellPoint = Number.MIN_VALUE;
    let sellPointIndex = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] < buyPoint) {
            buyPoint = A[i];
            buyPointIndex = i;
        }
        sellPoint = A[i];
        sellPointIndex = i;
        if (buyPoint < sellPoint && buyPointIndex < sellPointIndex) {
            maxProfit = Math.max(maxProfit, sellPoint - buyPoint);
        }
    }
    return maxProfit;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));