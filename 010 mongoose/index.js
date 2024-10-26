const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const url = 'mongodb+srv://sultankhan:sj1XtNfoMKK1If1T@sultan.luvya.mongodb.net/?retryWrites=true&w=majority&appName=sultan';

mongoose.connect(url)
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((error)=>{
    console.log('Error connecting to MongoDB', error);
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true
    }
});

const User = mongoose.model('users', userSchema);

app.post('/create-user', async(req, res)=>{
    try{
        console.log(req.body);
        const data = new User(req.body);
        const response = await data.save();
        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});

app.put('/update-user/:_id', async (req, res) =>{
    try{
       const response = await User.updateOne(
        req.params,
        {
            $set:req.body
        }
       );

       res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});


app.delete('/delete-user/:_id', async (req, res) =>{
    try{
       const response = await User.deleteOne(req.params);

       res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});

app.get('/read-users', async (req, res) =>{
    try{
       const response = await User.find();

       res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})

// '123456789'