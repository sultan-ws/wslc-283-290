const fs = require('fs');

// console.log(__dirname, __filename);

//create file
fs.writeFileSync('./public/hello.html', '<h1>hello everyone</h1>');

//read file

// fs.readFile('./public/hello.html', 'utf-8', (error, data)=>{
//     console.log(data);
// });


//update file
// fs.appendFileSync('./public/hello.txt', ' and updated');

//if file available
// fs.existsSync('./public/hello.txt');

// fs.existsSync(`${__dirname}/public/hello.txt`);

//delete file

// fs.unlinkSync('./public/hello.html');