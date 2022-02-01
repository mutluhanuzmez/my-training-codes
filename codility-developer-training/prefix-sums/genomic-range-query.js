// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    // S DNA Sequence
    // P and Q holds nucleotide position
    const queryLength = P.length;
    const nucleotideMap = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 };

    let minimalImpactArray = [];

    for (let i = 0; i < queryLength; i++) {
        let min = Number.MAX_VALUE;
        const start = P[i];
        const end = Q[i];

        for (let j = start; j <= end; j++) {
            let temp = nucleotideMap[S[j]];
            if (min > temp) {
                min = temp;
            }
        }

        minimalImpactArray.push(min);
    }

    return minimalImpactArray;
}