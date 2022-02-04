// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Determine whether a triangle can be built from a given set of edges

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort(function (a, b) { return a - b });
    let a, b, c;

    for (let i = 0; i < A.length; i++) {
        a = A[i];
        b = A[i + 1];
        c = A[i + 2];
        if (a + b > c && a + c > b && b + c > a) {
            return 1;
        }
    }
    return 0;
}