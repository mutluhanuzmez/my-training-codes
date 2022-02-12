// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let map = new Map();
    let dominator;
    let dominatorCount;
    const dominationNumber = Math.floor(A.length / 2);

    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i]) + 1);
        } else {
            map.set(A[i], 1);
        }
        if (map.get(A[i]) > dominationNumber) {
            dominator = A[i];
            dominatorCount = map.get(A[i]);
        }
    }

    let rightSideDominators = dominatorCount;
    let leftSideDominators = 0;
    let rightSideTotal = A.length;
    let leftSideTotal = 0;
    let equileaderCount = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] == dominator) {
            rightSideDominators--;
            leftSideDominators++;
        }
        rightSideTotal--;
        leftSideTotal++;

        if (leftSideDominators > Math.floor(leftSideTotal / 2) && rightSideDominators > Math.floor(rightSideTotal / 2)) {
            equileaderCount++;
        }
    }

    return equileaderCount;
}

console.log(solution([4, 3, 4, 4, 4, 2]));