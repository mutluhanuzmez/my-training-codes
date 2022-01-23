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

class Player {
    name: string;
    score: number;
}

function readLine(): string {
    return inputLines[currentLine++];

}

function main() {
    // Enter your code here
    let allPlayers = []
    for(let i = 1; i < inputLines.length; i++){
        let player = new Player();
        player.name = inputLines[i].split(' ')[0];
        player.score = parseInt(inputLines[i].split(' ')[1]);
        allPlayers.push(player);
    }
    allPlayers.sort(
    function(a, b) {          
      if (a.score === b.score) {
         return a.name.localeCompare(b.name);
      }
      return a.score < b.score ? 1 : -1;
   });
    allPlayers.forEach(player => {
        console.log(player.name + ' ' + player.score.toString())
    })
    
}
