// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Count factors of given number n.

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    let sqrt = Math.sqrt(N);

    for (let i = 1; i <= sqrt; i++) {
        if (N % i == 0) {
            if (i < sqrt) {
                counter += 2;
            } else {
                counter++;
            }
        }
    }

    return counter;
}

console.log(solution(1));
console.log(solution(24));
console.log(solution(Number.MAX_SAFE_INTEGER));