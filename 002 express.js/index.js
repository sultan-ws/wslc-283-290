const express = require('express');

const app = express();

app.use(express.json());

app.get('/:name', (req, res)=>{
    console.log(req.query);
    console.log(req.params);
    res.send('hello everyone');
});

app.get('/contact', (req, res)=>{
    res.send('contact api')
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send('post route');
});

app.listen(5000);

// server router