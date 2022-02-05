// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Compute the number of intersections in a sequence of discs.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const lengthA = A.length;
    
    let counter = 0;
    let left, right;
    let leftCompared, rightCompared;

    for(let i = 0; i < lengthA - 1; i++) {
        left = i - A[i];
        right = i + A[i];
        for(let j = i+1; j < lengthA; j++) {
            leftCompared = j - A[j];
            rightCompared = j + A[j];
            if(leftCompared <= right && rightCompared >= left){
                counter++;
                if(counter > 10000000){
                    return -1;
                }
            }

        } 
    }
    return counter;
}

console.log(solution([1,5,2,1,4,0]));