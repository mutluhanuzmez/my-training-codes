// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find an index of an array such that its value occurs at more than half of indices in the array.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let map = new Map();
    let temp;
    const dominationNumber = Math.floor(A.length / 2);

    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i]) +1);
        } else {
            map.set(A[i], 1);
        }
        if(map.get(A[i]) > dominationNumber){
            return i;
        }
    }
    return -1;
}


console.log(solution([]));
console.log(solution([ 1 ]));
console.log(solution([ 3, 4, 3, 2, 3, -1, 3, 3 ]));