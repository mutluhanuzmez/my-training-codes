// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)

    let counter = 0;
    let wrappersSet = new Set();
    let startPoint = 0;
    while(true){
        let mod = startPoint % N;
        if(wrappersSet.has(mod)){
            return counter;
        }
        
        if(mod == startPoint){
            wrappersSet.add(mod);
            counter++;
            startPoint += M;
            startPoint = startPoint % N;
        }
    }
}

console.log(solution(10,7));
