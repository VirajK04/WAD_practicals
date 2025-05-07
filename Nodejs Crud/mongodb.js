const { MongoClient } = require('mongodb');


const url = "mongodb+srv://veeru:pvdWMHn5WpN2kyB8@auth-project.ou5mxfs.mongodb.net/"; 


const database = 'student'; 

const client = new MongoClient(url);

const dbConnect = async () => {
    const result = await client.connect();
    const db = result.db(database); 
    return db.collection('profile'); 
}

module.exports = dbConnect;
