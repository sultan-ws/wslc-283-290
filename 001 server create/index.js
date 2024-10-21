const http = require('http');

http.createServer((req, res)=>{
    console.log(req.url);
    console.log(req.method);
    res.end('hello')
}).listen(4200);

//express.js