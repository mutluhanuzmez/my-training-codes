// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Find longest sequence of zeros in binary representation of an integer.

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    // first find the binary format of the number
    // then find the longest gap between 1s
    // if it's possible consider to find longest gap while converting binary

    let binaryFormat = '';
    let quotient;
    let remainder;
    let maxZeros = 0;
    let counter = 0;

    while (N > 1) {
        quotient = parseInt(N / 2);
        remainder = N % 2;
        N = quotient;

        binaryFormat = remainder.toString().concat(binaryFormat);
    }

    binaryFormat = quotient.toString().concat(binaryFormat);

    for(let i=0; i < binaryFormat.length ; i++){
        if(binaryFormat[i] == '0'){
            counter++;
        }else{
            if(maxZeros < counter){
                maxZeros = counter;
            }
            counter = 0;
        }
    }

    return maxZeros;
}