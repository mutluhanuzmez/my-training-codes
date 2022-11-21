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

const write = async (result, path) => {
    console.log('Writing to file');

    let solution = '';

    let numberOfPlannedProjects = result.length;


    solution += numberOfPlannedProjects.toString();

    for(let i = 0; i < result.length; i++){
        solution += '\n';
        solution+=result[i].name;
        solution += '\n';
        for(let j = 0; j < result[i].contributors.length; j++){
            solution+=result[i].contributors[j];
            solution += ' ';
        }
    }

    fs.writeFile(path, solution, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });


}

export { read, write };

