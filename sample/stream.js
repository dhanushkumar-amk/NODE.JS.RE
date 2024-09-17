const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding : 'utf8'});

const ws = fs.createWriteStream('./files/new.txt');

// create a text using file stream
/*
rs.on('data', (dataChunks) => {
    ws.write(dataChunks);
})

*/

// another way to create 
rs.pipe(ws);
