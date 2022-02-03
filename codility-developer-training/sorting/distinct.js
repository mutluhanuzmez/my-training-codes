// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Compute number of distinct values in an array.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let distinctSet = new Set();

    for (let index = 0; index < A.length; index++) {
        const element = A[index];
        if (!distinctSet.has(element)) {
            distinctSet.add(element);
        }
    }

    return distinctSet.size;
}


console.log(solution([1, 1, 2, 3, 3, 2, 4, 2, 1, 2, 3, 1,5]));
