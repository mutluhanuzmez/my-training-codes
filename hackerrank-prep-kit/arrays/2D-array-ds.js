'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var temp;
    var max = -99999999999;
    for (var i = 1; i < 5; i++){
        for (var j = 1; j < 5; j++){
            temp = 0;
            temp += arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1]
            temp += arr[i][j]
            temp += arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1]
            if (temp > max) {
                max = temp
            }
        }
    }

    return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
