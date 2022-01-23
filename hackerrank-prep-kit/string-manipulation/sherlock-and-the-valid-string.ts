'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s: string): string {
    // Write your code here
    let charMap = new Map();
    let charList = s.split('');
    let difCharCounter = 0
    let modeMap = new Map();
    charList.forEach(charx => {
        if(charMap.has(charx)){
            charMap.set(charx, charMap.get(charx)+1);   
        }
        else{
            charMap.set(charx, 1);  
            difCharCounter++;
        }
    })
    charMap.forEach((v) => {
        if(modeMap.has(v)){
            modeMap.set(v, modeMap.get(v)+1);   
        }
        else{
            modeMap.set(v, 1);
        }
    })
    //console.log( Array.from(modeMap.entries()).reduce((a, b) => a[1] < b[1] ? b : a))
    let mode = Array.from(modeMap.entries()).reduce((a, b) => a[1] < b[1] ? b : a)[0];
    let oneMistake = false;
    let endFlag = false;
    console.log(mode)
    charMap.forEach((v) => {
        if(v != mode){
            if(oneMistake){
               endFlag = true;
               return 'NO' 
            }else{
                if(Math.abs(mode-v) > 1 && v > 1){
                    endFlag = true;
                    return 'NO'
                }
                oneMistake = true;    
            }  
        }
    })
    
    return endFlag ? 'NO' :'YES';
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
