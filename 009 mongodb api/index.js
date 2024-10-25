const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/files', express.static('./uploads'));

const url = 'mongodb://localhost:27017';
const dbname = 'wslc_283_290';

const client = new MongoClient(url);

const connect = async () => {
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection('products');

    return collection;
};

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + Math.floor(Math.random() * 9999999) + path.extname(file.originalname));
    }
})

const uploads = multer({ storage: diskStorage }).fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'images', maxCount: 10 }
]);

app.post('/insert-product', uploads, async (req, res) => {
    try {

        const data = req.body;

        if (req.files) {
            if (req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;

            if (req.files.images) data.images = req.files.images.map((file) => file.filename);
        }

        const collection = await connect();

        const response = await collection.insertOne(data);

        res.status(200).json({ message: 'success', data: response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
});

app.get('/read-products', async (req, res) => {
    try {
        const collection = await connect();
        const response = await collection.find().toArray();

        const filepath = `${req.protocol}://${req.get('host')}/files/`
        const dataWithPath = response.map((product) => {
            product.thumbnail = filepath + product.thumbnail;
            product.images = product.images.map((img) => filepath + img);

            return product;
        })



        res.status(200).json({ massge: 'success', data: dataWithPath, filepath });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' });
    }
});

app.delete('/delete-product/:_id', async(req, res)=>{
    try{
        const collection = await connect();
        const data = await collection.findOne({_id: new ObjectId(req.params._id)});

        if(!data) return res.status(401).json({message: 'invalid object id'});

        if(fs.existsSync(`./uploads/${data.thumbnail}`)) fs.unlinkSync(`./uploads/${data.thumbnail}`);

        data.images.forEach((img)=>{
            if(fs.existsSync(`./uploads/${img}`)) fs.unlinkSync(`./uploads/${img}`);
        })

        const response = await collection.deleteOne({_id: new ObjectId(req.params._id)});

        res.status(200).json({message: 'data deleted', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});

app.put('/update-product/:id',uploads, async(req, res)=>{
    try{
        const collection = await connect();
        const data = req.body;

        const olddata = await collection.findOne({_id: new ObjectId(req.params.id)});
        console.log(olddata);
        if(!olddata) return res.status(401).json({message: 'invalid object id'});
        
        if(req.files){
            if (req.files.thumbnail) {
                data.thumbnail = req.files.thumbnail[0].filename;

                if(fs.existsSync(`./uploads/${olddata.thumbnail}`)) fs.unlinkSync(`./uploads/${olddata.thumbnail}`);
            }

            if (req.files.images) {
                data.images = req.files.images.map((file) => file.filename);

                olddata.images.forEach((img)=>{
                    if(fs.existsSync(`./uploads/${img}`)) fs.unlinkSync(`./uploads/${img}`);
                })
            }
        };

        const response = await collection.updateOne(
            {_id: new ObjectId(req.params.id)},
            {
                $set: data
            }
        );

        res.status(200).json({message: 'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'});
    }
});

app.listen(5200, () => {
    console.log('server is running on port 5200');
});