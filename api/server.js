import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient , ServerApiVersion } from 'mongodb';

const app = express();
const port = 4000;

// MongoDB Connection URI
const uri = "";// dont add link directly , add to .env  and import it from config folder
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(cors());
app.use(bodyParser.json());

// Route for handling form submission
app.post('/submit', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        await client.connect(); // Connect to MongoDB
        await client.db("Cluster0").command({ ping: 1 });
        const database = client.db('UserDb');
        const collection = database.collection('logindata');

        // Insert the user data into the MongoDB collection
        const result = await collection.insertOne({
            name: name,
            email: email,
            password: password
        });
        console.log(name, email ,password)
        console.log("User saved successfully:", result.insertedId);

        res.status(200).json({ message: 'User saved successfully' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close(); // Close the MongoDB connection
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
