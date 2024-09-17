const os = require('os');
const path = require('path')

// const fs = require('fs');
const fsPromises = require('fs').promises;

// ? read an write the file


// file operations usings async and await with fs.promises

const fileOps = async () => {
    try {
        
        // readfile
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        
        
        
        // unlink file => delete the file 
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        
        // write file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'PromiseWriter.txt'), data)
        
        // append file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'PromiseWriter.txt'), "\n\n\n\ Nice to meet you guys")
        
        // rename file
        // await fsPromises.writeFile(path.join(__dirname, 'files', 'PromiseWriter.txt'))
        await fsPromises.rename(path.join(__dirname, 'files', 'PromiseWriter.txt'), path.join(__dirname, 'files', 'promiseRename.txt'))
        
        
        // new data 
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseRename.txt'), 'utf8');
        
        console.log(newData);
        
    } catch (error) {
        console.error(error);
    }
}

fileOps();
/*

fs.readFile('./files/starter.txt', 'utf8' ,(err,data) => {
    if(err) throw err;
    console.log(data);    
})
    
*/

// we can also readfile on another way  and it is a efficient way to solve '/' element
/*
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})

*/
// console.log(data.toString());
    

/*
process.on('uncaughtException', err => {
    console.error("There is an error in" + err);
    process.exit(1);
})

*/



// to write the file just simple modification of read file function
/*
fs.writeFile(path.join(__dirname, 'files', 'replay.txt'), 'Hello world', (err) => {
    if(err) throw err;
    console.log("operation completed");
    

    // rename the file
    
    // we use only this operations within in the callback functions else throw error
    
    fs.rename(path.join(__dirname, 'files', 'append.txt'), path.join(__dirname, 'files', 'appendfileRename.txt'), (err) => {
        if(err) throw err;
        console.log("rename complete completed");
    })
    
})

// to append the text on existing the text on the file , if file does not exist then create a new file   

fs.appendFile(path.join(__dirname, 'files', 'append.txt'), 'Hello world was append', (err) => {
    if(err) throw err;
    console.log("operation completed");
})

*/
// const math = require('./Math')

// import the module using destructure
/*
const {add, sub, mul, div} = require('./Math')

console.log(add(5,5));
console.log(sub(5,5));
console.log(mul(5,5));
console.log(div(5,5));

*/

/*

console.log(math.add( 5,5));
console.log(math.sub( 5,5));
console.log(math.mul( 5,5));
console.log(math.div( 5,5));

*/

/*
console.log(os.hostname());
console.log(os.type());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.version());
console.log(os.userInfo());


console.log("----------------------");
console.log((path.dirname(__filename)))
console.log((path.basename(__filename)))
console.log((path.extname(__filename)))


*/


// console.log("Hello world");


