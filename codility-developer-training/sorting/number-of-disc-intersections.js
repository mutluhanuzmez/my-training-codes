// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Compute the number of intersections in a sequence of discs.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const lengthA = A.length;
    let starts = Array(lengthA).fill(0);
    let left;
    let totalCounter = 0;

    // find how many line started in that index
    for (let i = 0; i < lengthA; i++) { 
        left = i - A[i]
        if (left < 0){
            left = 0;
        }
        starts[left]++;
    }

    let total = 0; 
    for(let i = 0; i < lengthA; i++) { 
        total += starts[i];
        starts[i] = total;
    }


    for (let i = 0; i < lengthA; i++) {
        lastIndex = (i + A[i]) > lengthA-1 ? lengthA-1 : (i+A[i]);
        totalCounter += starts[lastIndex] - (i+1);
        if(totalCounter > 10000000) {
            return -1;
        }
    }

    return totalCounter;
}

//     0 1 2 3 4 5 6 7 8 9
//   1 ___
//   5 _____________
//   2 _________
//   1      ______
//   4 __________________
//   0           _

//     4 4 5 5 5 6

console.log(solution([1,5,2,1,4,0]));