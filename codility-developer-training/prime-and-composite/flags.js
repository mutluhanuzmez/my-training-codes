// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the maximum number of flags that can be set on mountain peaks.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let peaks = [];

    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    if (peaks.length == 0) {
        return 0;
    }

    const peekDistance = peaks[peaks.length - 1] - peaks[0];
    const maxPossibility = Math.ceil(Math.sqrt(peekDistance));

    for (let i = maxPossibility; i > 0; i--) {
        let distIndex = 0;
        let counter = 1;
        for (let j = 1; j < peaks.length; j++) {
            let distance = peaks[j] - peaks[distIndex];
            if (distance >= i) {
                distIndex = j;
                counter++;
            }
        }
        if (counter >= i) {
            return i;
        }
    }

    return 1;
}


console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2, 4, 6, 2, 5, 3, 5, 6, 2, 6, 8, 3]));
console.log(solution([1, 5, 3, 4, 3]));
console.log(solution([1, 3, 1]));
console.log(solution([1, 3]));