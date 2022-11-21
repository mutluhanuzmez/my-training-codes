import { read, write } from './file-ops.js';

console.log('STARTED...');


class Customer {
    id = null;
    likes = [];
    dislikes = [];
    crossCustomers = [];
}
class Problem {

    customers = [];
    numberOfIngredient = 0;
    ingredientTypes = [];
    likeMap = new Map();
    dislikeMap = new Map();

    constructor(problemLines) {
        this.numberOfCustomers = parseInt(problemLines[0]);
        let idCounter = 0;
        for (let i = 1; i < problemLines.length; i += 2) {
            idCounter++;
            this.customers.push(this.seperateLikesAndDislikes(problemLines[i], problemLines[i + 1], idCounter));
        }

        this.setLikesAndDislikesMap();
        console.log('PROBLEM CONSTRUCTED');
    }

    seperateLikesAndDislikes(likeLine, dislikeLine, idCounter) {
        let customer = new Customer();

        customer.id = idCounter;

        const likeLineSplit = likeLine.split(' ');
        customer.likes = likeLineSplit.slice(1, likeLineSplit.length);

        const dislikeLineSplit = dislikeLine.split(' ');
        customer.dislikes = dislikeLineSplit.slice(1, dislikeLineSplit.length);

        return customer;
    }

    setLikesAndDislikesMap() {
        let counter;
        let currentLikes;
        let currentDislikes;

        for (let i = 0; i < this.customers.length; i++) {
            currentLikes = this.customers[i].likes;
            currentDislikes = this.customers[i].dislikes;

            for (let j = 0; j < currentLikes.length; j++) {
                if (this.likeMap.has(currentLikes[j])) {
                    counter = this.likeMap.get(currentLikes[j]);
                    this.likeMap.set(currentLikes[j], counter+1);
                } else {
                    this.likeMap.set(currentLikes[j], 1);
                }
            }

            for (let j = 0; j < currentDislikes.length; j++) {
                if (this.dislikeMap.has(currentDislikes[j])) {
                    counter = this.dislikeMap.get(currentDislikes[j]);
                    this.dislikeMap.set(currentDislikes[j], counter+1);
                } else {
                    this.dislikeMap.set(currentDislikes[j], 1);
                }
            }
        }
    }

    basicSolver() {
        const keys = Array.from(this.likeMap.keys());
        let result = [];

        for (let i = 0; i < keys.length; i++){
            let ingredient = keys[i];
            let numberOfLikes = this.likeMap.get(ingredient);
            if(this.dislikeMap.has(ingredient)){
                if(numberOfLikes > this.dislikeMap.get(ingredient)){
                    result.push(ingredient);
                }
            } else {
                result.push(ingredient);
            }
        }

        return result;
    }
}

const inputPathCreator = (path) => {
    return "./input/".concat(path).concat('.in.txt');
}

const outputPathCreator = (path) => {
    return "./output/".concat(path).concat('.out.txt');
}

const solve = async () => {

    // const problemText = await read(inputPathCreator('a_an_example'));
    // const problemText = await read(inputPathCreator('b_basic'));
    const problemText = await read(inputPathCreator('c_coarse'));
    // const problemText = await read(inputPathCreator('d_difficult'));
    // const problemText = await read(inputPathCreator('e_elaborate'));

    const problemLines = problemText.split(/\r?\n/);
    const problem = new Problem(problemLines);

    const result = problem.basicSolver();

    await write(result.length, result, outputPathCreator('c_coarse'));
    // console.log(problem.numberOfCustomers, problem.customers);
    // console.log(problem.likeMap, problem.dislikeMap);
    console.log(problem.basicSolver());
}


await solve();