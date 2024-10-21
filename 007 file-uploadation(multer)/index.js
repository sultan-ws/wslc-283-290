const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.json());

// no file input
app.post('/file-upload', multer().none(), (req, res)=>{
    console.log(req.body);
    res.status(200).json({message: 'success'});
});

// single file input with single file

const upload1 =  multer({storage: multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './uploads');
    },
    filename: (req, file, next) => {
        console.log(file);
        next(null, Date.now() + Math.floor( Math.random() * 9999999) + path.extname(file.originalname));
    }
})}).single('profile');

app.post('/file-upload-single', upload1, (req, res)=>{
    res.status(200).json({message: 'success'});
});


// single file input with multiple files

const upload2 = multer({storage: multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './uploads');
    },
    filename:(req, file, next)=>{
        next(null, Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
})}).array('profile', 10);

app.post('/file-upload-multiple', upload2, (req, res)=>{
    res.status(200).json({message: 'success'});
});

//multiple file inputs 

const upload3 = multer({storage: multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './uploads');
    },
    filename:(req, file, next)=>{
        next(null, Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
})}).fields([
    {name: 'profile', maxCount: 1},
    {name: 'images', maxCount:10}
]);

app.post('/file-upload-multiple-fields', upload3, (req, res)=>{
    res.status(200).json({message: 'success'});
});

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
});