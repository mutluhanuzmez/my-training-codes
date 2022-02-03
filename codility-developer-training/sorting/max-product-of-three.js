// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).

let largest3Arr = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
let smallest2Arr = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

largest = (a) => {
    if (a > largest3Arr[0]) {
        largest3Arr[2] = largest3Arr[1];
        largest3Arr[1] = largest3Arr[0];
        largest3Arr[0] = a
    } else if (a > largest3Arr[1]) {
        largest3Arr[2] = largest3Arr[1];
        largest3Arr[1] = a
    } else if (a > largest3Arr[2]) {
        largest3Arr[2] = a
    }
}

smallest = (a) => {
    if (a < smallest2Arr[0]) {
        smallest2Arr[1] = smallest2Arr[0];
        smallest2Arr[0] = a
    } else if (a < smallest2Arr[1]) {
        smallest2Arr[1] = a
    }
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (let i = 0; i < A.length; i++) {
        largest(A[i]);
        smallest(A[i]);
    }

    const productAllPositive = largest3Arr[0] * largest3Arr[1] * largest3Arr[2]
    const productOnePositive = largest3Arr[0] * smallest2Arr[0] * smallest2Arr[1]

    return Math.max(productAllPositive, productOnePositive);
}


console.log(solution([-2, -3, -1, -4, 0, 3, 4]));