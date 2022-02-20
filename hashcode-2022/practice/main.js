import { read } from './file-reader.js';

console.log('-----STARTED-----');


const solve = async () => {
    
    let problem = await read('./input/a_an_example.in.txt');
    console.log(problem);
}


await solve();