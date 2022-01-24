// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = [];
    let rotateNum;
    const lengthA = A.length;
    
    if(lengthA == 0 || K == 0 || lengthA == K)
        return A;
    
    if(lengthA>K) {
        rotateNum = K;
    } else {
        rotateNum = lengthA%K;
    }

    const positionIndex = lengthA - rotateNum

    for(let i = positionIndex; i < lengthA; i++) {
        result.push(A[i]);
    }
    for(let i = 0 ; i < positionIndex; i++) {
        result.push(A[i]);
    }

    return result;
}
