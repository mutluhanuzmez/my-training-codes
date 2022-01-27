// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Count minimal number of jumps from position X to Y.

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(X == Y){
        return 0;
    }
    
    return Math.ceil((Y-X)/D)
}