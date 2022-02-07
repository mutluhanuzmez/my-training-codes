// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// N voracious fish are moving along a river. Calculate how many fish are alive.

let killerFishes = [];
let safeFishCounter = 0;

const aliveInFightArena = (currentFish) => {
    while (killerFishes.length > 0) {
        //kill them all or be killed
        let killerFish = killerFishes.pop();
        if (currentFish.size < killerFish.size) {
            //killed
            killerFishes.push(killerFish);
            return false;
        }
    }
    return true;
}

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const numberOfFishes = A.length;

    for (let i = 0; i < numberOfFishes; i++) {
        let currentFish = { size: A[i], direction: B[i] };

        if (currentFish.direction == 0) {
            if (killerFishes.length == 0) {
                safeFishCounter++;
            } else {
                let isAlive = aliveInFightArena(currentFish);

                if (isAlive) {
                    safeFishCounter++;
                }
            }
        } else {
            killerFishes.push(currentFish);
        }
    }

    return safeFishCounter + killerFishes.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));