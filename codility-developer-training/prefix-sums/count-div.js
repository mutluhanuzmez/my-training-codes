// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Compute number of integers divisible by k in range [a..b].

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    const start = Math.ceil(A / K);
    const end = Math.floor(B / K);

    let counter = (end - start);
    counter++;

    return counter;
}