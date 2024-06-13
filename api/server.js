import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 4000;

// MongoDB Connection URI
const uri = process.env.MONGO_URI || "mongodb+srv://satasiyadevam:mygoodsea23@cluster0.py2vmj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { 
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

await client.connect();
const db = client.db("UserDb");
const usersCollection = db.collection("logindata");

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, // This allows the browser to send cookies
};

app.use(cors(corsOptions));

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwtoken;
  console.log("-------3242----------------------")
  console.log(token)
  console.log("----------------------------------")
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Endpoint to get user details
app.get('/user', authenticateToken, async (req, res) => {
  try {
    const user = await usersCollection.findOne({ _id: new ObjectId(req.user.id) });
    if (user) {
      res.json({ name: user.name, email: user.email });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Server error'); 
  }
});

// Register a new user
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { name, email, password: hashedPassword };

  try {
    const result = await usersCollection.insertOne(newUser);
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Authenticate user and issue token
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await usersCollection.findOne({ email });
    //if (user && await bcrypt.compare(password, user.password)) {
    if (user && (password === user.password)) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.cookie('jwtoken', token, { httpOnly: true, maxAge: 3600000, sameSite: 'Strict' });
      res.sendStatus(200);
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
