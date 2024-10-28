const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CODE}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;

mongoose.connect(url)
.then(()=>{
    console.log("connected to database...");
})
.catch((error)=>{
    console.log(error);
});