import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://22bce174:22bce174@c2.o15unbg.mongodb.net/?retryWrites=true&w=majority&appName=C2";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

class Insert{
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    async save(){
        try {
            await client.connect();
            await client.db("Cluster0").command({ ping: 1 });

            const database = client.db('UserDb');
            const collection = database.collection('logindata');

            const result = await collection.insertOne({
                name: this.name,
                email: this.email,
                password: this.password
            });
            
            console.log("InsertId of the data :- ", result.insertedId);

        } 
        
        catch (error) {
            console.error("Error inserting data:", error);
        } 
        
        finally {
            await client.close();
        }
        console.log("Mongo is Connected. Chal have kaam e lag");
    }

    // async modify(){
    //     try {
    //         await client.connect();
    //         await client.db("C2").command({ ping: 1 });

    //         const database = client.db('Practise');
    //         const collection = database.collection('todo');

            
    //     } 
        
    //     catch (error) {
            
    //     }
    // }
}

export default Insert;

const newUser = new Insert('mpp@rediff.com', 'Mann', 'abcd@3456');
newUser.save().catch(console.dir);
