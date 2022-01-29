// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find the smallest positive integer that does not occur in a given sequence.

const solution = (A) => {
    let minValue = Number.MAX_VALUE;
    let maxValue = Number.MIN_VALUE;
    let occurences = new Set();

    for (let i = 0; i < A.length; i++){
        minValue = Math.min(A[i], minValue);
        maxValue = Math.max(A[i], maxValue);
    }

    if(minValue < 1 && maxValue < 1){
        return 1;
    };

    for(let i = 1; i <= maxValue; i++){
        occurences.add(i);
    }

    for(let i = 0; i < A.length; i++){
        if(occurences.has(A[i])){
            occurences.delete(A[i]);
        }
    }

    if(occurences.size == 0){
        return maxValue+1;
    }else{
        return occurences.keys().next().value;
    }
}