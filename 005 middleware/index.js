const express = require('express');
const key = '123456';

const app = express();

app.use(express.json());


const m1 = (req, res, next)=>{

    console.log(req.params);
   
    if(!req.params.key) return res.status(400).json({message: 'please send a key'});

    if(req.params.key != key) return res.status(401).json({message: 'please send a valid key'})

    next();
};

// app.use(m1);

app.get('/register/:key?', (req, res)=>{

    console.log(req.body);
    res.send('welcome to api');
});

app.post('/greet/:key?', (req, res)=>{
    res.status(200).json({message: 'hello world'});
});

app.listen(3946, ()=>{
    console.log('server is running on port 3946');
});