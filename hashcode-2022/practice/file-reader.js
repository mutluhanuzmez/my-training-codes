import fs from 'fs';

const read = async (path) => {
    console.log('file path -->   ', path);

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

export { read };

