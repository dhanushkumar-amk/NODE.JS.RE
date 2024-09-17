const fs = require('fs');


// create a directory using file stream 
if (!fs.existsSync('./hello')) {
  fs.mkdir('./hello', (err) => {
    if (err) throw err;
    console.log('Created Directory');
  });
}


// delete a directory using file steam


if (fs.existsSync('./hello')) {
    fs.rmdir('./hello', (err) => {
      if (err) throw err;
      console.log('Removed Directory');
    });
  }