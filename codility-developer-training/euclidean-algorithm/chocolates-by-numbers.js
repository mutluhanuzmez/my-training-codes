// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// There are N chocolates in a circle. Count the number of chocolates you will eat.

const floorDiv = (a, b) => {
    return Math.floor(a / b);
}

const gcd = (a, b, res) => {
    if (a == b) {
        return res * a;
    } else if ((a % 2 == 0) && (b % 2 == 0)) {
        return gcd(floorDiv(a, 2), floorDiv(b, 2), 2*res);
    } else if (a % 2 == 0) {
        return gcd(floorDiv(a, 2), b, res);
    } else if (b % 2 == 0) {
        return gcd(a, floorDiv(b, 2), res);
    } else if (a > b) {
        return gcd(a - b, b, res);
    } else {
        return gcd(a, b - a, res);
    }
}

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    return N/gcd(N,M,1);
}

console.log(solution(10, 1));
