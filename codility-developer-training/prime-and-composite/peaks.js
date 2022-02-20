// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let peaks = [];

    for (let i = 1; i < A.length - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    if (peaks.length == 0) {
        return 0;
    }

    for (let blockLength = 3; blockLength <= A.length / 2; blockLength++) {

        if (A.length % blockLength != 0) {
            continue;
        }

        let currentPeak = 0;

        let ok = true;

        for (let blockStart = 0; blockStart < A.length; blockStart += blockLength) {

            let foundPeak = false;

            while (currentPeak < peaks.length) {
                if (peaks[currentPeak] < blockStart + blockLength) {
                    foundPeak = true;
                    currentPeak++;
                } else if (peaks[currentPeak] >= blockStart + blockLength) {
                    break;
                }
            }

            if (!foundPeak) {
                ok = false;
                break;
            }
        }

        if (ok) {
            return A.length / blockLength;
        }
    }

    return 1;
}


console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));