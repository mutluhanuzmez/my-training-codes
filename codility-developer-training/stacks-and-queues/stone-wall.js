// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Cover "Manhattan skyline" using the minimum number of rectangles.

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = [];
    let counter = 0;

    for (let i = 0; i < H.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
            stack.pop();
        }
        if (stack.length > 0 && stack[stack.length - 1] == H[i]) {

        } else {
            stack.push(H[i]);
            counter++;
        }
    }

    return counter;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
