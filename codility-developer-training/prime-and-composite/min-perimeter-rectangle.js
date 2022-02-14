// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the minimal perimeter of any rectangle whose area equals N.

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sqrt = Math.sqrt(N);
    let hSide;
    let vSide;

    for (let i = Math.floor(sqrt); i > 0; i--) {
        if (N % i == 0) {
            hSide = i;
            vSide = N / i;
            i = 0;
        }
    }

    return 2 * (hSide + vSide);
}


console.log(solution(36));
console.log(solution(35));
console.log(solution(30));
console.log(solution(1));
console.log(solution(1000000000));