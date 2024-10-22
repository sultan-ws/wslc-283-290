const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbname = 'wslc_283_290';

const client = new MongoClient(url);

const connect = async () => {
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection('users');

    return collection;
};

//insert data

const insertData = async () => {
    const collection = await connect();

    const data = {
        "name": "John Doe",
        "age": 30,
        "city": "new york"
    };

    const response = await collection.insertOne(data);

    console.log(response);

};

// insertData();

const insertMultipleData = async () => {
    const collection = await connect();

    const data = [
        {
            name: 'john wick',
            age: 45,
            city: 'los angeles'
        },
        {
            name: 'john cena',
            age: 50,
            city: 'miami'
        }
    ];

    const response = await collection.insertMany(data);

    console.log(response);
};

// insertMultipleData();

const readData = async()=>{
    const collection = await connect();
    const response = await collection.find().toArray();

    console.log(response);
};

readData();

const searchData = async()=>{
    const collection = await connect();
    const response = await collection.find({name:'john cena'}).toArray();

    console.log(response);
};

// searchData();

const updateData = async ()=>{
    const collection = await connect();
    const response = await collection.updateOne(
        {name:'john wick'},
        {
            $set:{age:35, contact:'john@wick.mail.com'}
        }
    );

    console.log(response);
};

// updateData();

const deleteData = async ()=>{
    const collection = await connect();

    const response = await collection.deleteOne({name: 'john cena'});

    console.log(response);
};

// deleteData();