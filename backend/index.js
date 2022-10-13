const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 3001 || process.env.PORT

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('rate-projects');
        console.log("settled") 
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.listen(3001, () => {
    console.log(`Listening on port ${PORT}`)
})