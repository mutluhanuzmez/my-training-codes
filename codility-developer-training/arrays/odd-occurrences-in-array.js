// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find value that occurs in odd number of elements.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const lengthA = A.length;

    let map = new Map();

    for (let i = 0; i < lengthA; i++) {
        if (map.has(A[i])) {
            map.delete(A[i]);
        } else {
            map.set(A[i]);
        }
    }

    return map.keys().next().value;
}