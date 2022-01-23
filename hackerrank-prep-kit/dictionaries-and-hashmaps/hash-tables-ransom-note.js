'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // Write your code here
    let hasWords = true;
    var wordHash = new Map();
    
    magazine.reduce(function(map, obj) {
        if(wordHash.has(obj)){
            let val = wordHash.get(obj);
            wordHash.set(obj, val+1)
        }else{
            wordHash.set(obj, 1);
        }
        }, {});
    for(let i = 0; i<note.length; i++){
        if(wordHash.has(note[i])){
            let val = wordHash.get(note[i]);
            if(val>0){
                wordHash.set(note[i], val-1)
                if(wordHash.get(note[i])==0){
                    wordHash.delete(note[i]);
                }
            }
        }else{
            hasWords = false;
        }
    }
    hasWords === true ? console.log('Yes'): console.log('No')
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
