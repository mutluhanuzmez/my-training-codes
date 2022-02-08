// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Determine whether a given string of parentheses (single type) is properly nested.

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    const lengthS = S.length;

    let pStack = [];

    for (let i = 0; i <lengthS; i++){
        if(S[i] == '('){
            pStack.push(S[i]);
        }else{
            if(pStack.length == 0){
                return 0;
            }else{
                pStack.pop();
            }
        }
    }

    if(pStack.length != 0){
        return 0;
    }

    return 1;
}

let S1 = "(()(())())";
let S2 = "())";

console.log(solution(S1));
console.log(solution(S2));