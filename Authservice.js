import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://22bce174:22bce174@c2.o15unbg.mongodb.net/?retryWrites=true&w=majority&appName=C2";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function save(email, password) {
  try {
    await client.connect();
    console.log("MongoDB connected successfully");

    const database = client.db("UserDb");
    const collection = database.collection("logindata");

    const result = await collection.insertOne({
      email: email,
      password: password,
    });

    console.log("Inserted document ID:", result.insertedId);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

// Additional methods can be added here

