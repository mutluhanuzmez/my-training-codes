// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Determine whether a given string of parentheses (multiple types) is properly nested.

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    const lengthS = S.length;
    const bracketMatchMap = { '{': '}', '[': ']', '(': ')' };
    let bStack = [];

    if (lengthS == 0) {
        return 1;
    }

    for (let i = 0; i < lengthS; i++) {
        if (S[i] == "{" || S[i] == "[" || S[i] == "(") {
            bStack.push(S[i]);
        } else {
            if (bStack.length == 0) {
                return 0;
            }
            const lastBracket = bStack.pop();

            if (bracketMatchMap[lastBracket] != S[i]) {
                return 0;
            }
        }
    }

    if (bStack.length > 0) {
        return 0;
    }

    return 1;
}


let S1 = "{[()()]}{[()()]}";
let S2 = "([)()]";

console.log(solution(S1));
console.log(solution(S2));