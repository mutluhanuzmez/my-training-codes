// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the minimal nucleotide from a range of sequence DNA.

function returnMinNucleotide(start, end) {
    for (const item of Object.keys(start)) {
        if (end[item] - start[item] > 0) {
            return item;
        }
    }
}

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    // S DNA Sequence
    // P and Q holds nucleotide position
    const sequenceLength = S.length;
    const queryLength = P.length;
    const nucleotideMap = { A: 1, C: 2, G: 3, T: 4 };

    let dnaDataMap = [];
    let minimalImpactArray = [];
    let nucletiodeCounter = { A: 0, C: 0, G: 0, T: 0 };

    for (let i = 0; i < sequenceLength; i++) {
        nucletiodeCounter[S[i]]++;
        let temp = { ...nucletiodeCounter };
        dnaDataMap.push(temp);
    }

    let key;

    for (let i = 0; i < queryLength; i++) {
        const start = (P[i] == 0 ? { A: 0, C: 0, G: 0, T: 0 } : dnaDataMap[P[i] - 1]);
        const end = dnaDataMap[Q[i]];

        key = returnMinNucleotide(start, end);
        minimalImpactArray.push(nucleotideMap[key]);
    }

    return minimalImpactArray;
}