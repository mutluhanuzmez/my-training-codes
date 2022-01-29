// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Calculate the values of counters after applying all alternating operations:
// increase counter by 1; set value of all counters to current maximum.

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxValue = 0;
    let minValue = 0;
    let counterArray = new Array(N).fill(0);

    for (let i = 0; i < A.length; i++) {
        let temp = A[i] - 1;
        if (temp >= N) {
            minValue = maxValue;
        }
        else {
            counterArray[temp] = Math.max(counterArray[temp] + 1, minValue + 1);
            maxValue = Math.max(maxValue, counterArray[temp]);
        }
    }

    for (let i = 0; i < N; i++) {
        if (counterArray[i] < minValue) {
            counterArray[i] = minValue;
        }
    }

    return counterArray;
}