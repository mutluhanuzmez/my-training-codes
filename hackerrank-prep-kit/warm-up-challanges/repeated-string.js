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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var aCounter = 0;
    var aCounterInString = 0;

    for (var i = 0; i < s.length; i++){
        if (s[i] === 'a')
            aCounterInString++;
    }

    var strCounter = Math.floor(n / s.length);
    var strRemain = n % s.length;

    aCounter = strCounter * aCounterInString;

    for (var i = 0; i < strRemain; i++) {
        if (s[i] === 'a')
            aCounter++;
    }

    return aCounter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
