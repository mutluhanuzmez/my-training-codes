// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Count the number of passing cars on the road.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let passingCounter = 0;
    let numberOfEast = 0; 
    const lengthArr = A.length;

    for (let i = 0; i < lengthArr; i++) {
        if(A[i] == 0){
            numberOfEast++;
        }else{
            passingCounter += numberOfEast;
        }
        if (passingCounter > 1000000000){
            return -1;
        }
    }

    return passingCounter;
}