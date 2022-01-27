// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the missing element in a given permutation.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let mySet = new Set();

    for (let i = 1; i <= A.length+1; i++) {
        mySet.add(i);
    }

    for (let i = 0; i < A.length; i++) {
        mySet.delete(A[i]);
    }

    return mySet.values().next().value;
}