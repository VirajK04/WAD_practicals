const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json());

// GET all data
app.get('/getData', async (req, res) => {
    const db = await dbConnect();
    const result = await db.find().toArray();
    res.send(result);
});

// POST new data
app.post('/insertData', async (req, res) => {
    const db = await dbConnect();
    const result = await db.insertOne(req.body);
    res.send("Data inserted successfully");
});

// PUT update by name
app.put('/updateData/:name', async (req, res) => {
    const db = await dbConnect();
    await db.updateOne(
        { name: req.params.name },
        { $set: req.body }
    );
    res.send("The info updated");
});

// DELETE by name
app.delete('/deleteData/:name', async (req, res) => {
    const db = await dbConnect();
    await db.deleteOne({ name: req.params.name });
    res.send("Data deleted successfully");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
