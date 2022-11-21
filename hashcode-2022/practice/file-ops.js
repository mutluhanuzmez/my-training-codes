import fs from 'fs';

const read = async (path) => {
    console.log('PATH -> [', path, ']');

    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data.toString());
            }   
        })
    })
}

const write = async (numberOfIngredients, ingredientTypes, path) => {
    console.log('Writing to file');

    let solution = '';

    solution += numberOfIngredients.toString();

    for(let i = 0; i < ingredientTypes.length; i++){
        solution += ' ';
        solution+=ingredientTypes[i];
    }

    fs.writeFile(path, solution, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });


}

export { read, write };

