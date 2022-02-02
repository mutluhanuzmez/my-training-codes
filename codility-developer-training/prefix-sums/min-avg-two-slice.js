// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the minimal average of any slice containing at least two elements

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minValue = Number.MAX_VALUE;
    let minValueIndex = 0;
    let div;
    const arrLength = A.length;

    for (let i = 0; i < arrLength - 2; i++) {
        div = (A[i] + A[i + 1]) / 2;
        if (div < minValue) {
            minValue = div;
            minValueIndex = i;
        }

        div = (A[i] + A[i + 1] + A[i + 2]) / 3;
        if (div < minValue) {
            minValue = div;
            minValueIndex = i;
        }
    }

    // to cover last 2 index
    div = (A[arrLength - 2] + A[arrLength - 1]) / 2;
    if (div < minValue) {
        minValue = div;
        minValueIndex = arrLength - 2;
    }

    return minValueIndex;
}