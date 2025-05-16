const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@remadb.w7lg8gq.mongodb.net/?retryWrites=true&w=majority&appName=remaDb`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeeCollection = client.db('coffeeDB').collection('coffee')

    app.post('/coffees',async(req,res)=>{
      const newCoffee = req.body
     const result = await coffeeCollection.insertOne(newCoffee) 
     res.send(result)
     console.log(result)
    })


    app.get('/coffees',async(req,res)=>{
      const result = await coffeeCollection.find().toArray();
      res.send(result)
    })

    
  } 
  finally {
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log("server is running");
});
