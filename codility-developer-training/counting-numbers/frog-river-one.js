// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the earliest time when a frog can jump to the other side of a river.

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leaveMap = new Map();

    for (let i = 1; i <= X; i++) {
        leaveMap.set(i, false);
    }

    for (let i = 0; i < A.length; i++) {
        if (leaveMap.has(A[i])) {
            leaveMap.delete(A[i]);
        }
        if (leaveMap.size == 0) {
            return i;
        }
    }

    return -1;
}