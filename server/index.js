const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const userCollection = client.db('coffeeDB').collection('user')

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
    
    app.get('/coffees/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.findOne(query);
      res.send(result)
    })

    app.delete('/coffees/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.deleteOne(query)
      res.send(result)
    })

    app.put('/coffees/:id',async(req,res)=>{
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const data = req.body
        const query = {$set:data}

        const result = await coffeeCollection.updateOne(filter,query)
        res.send(result)
    })

    app.post('/user',async(req,res)=>{
      const data = req.body
     const result = await userCollection.insertOne(data)
     res.send(result)
    })

    app.get('/users',async(req,res)=>{
      const result = await userCollection.find().toArray()
      res.send(result)

    })

    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id;
      const filter =  {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(filter)
      res.send(result)
    })

    app.patch('/users',async(req,res)=>{
    const {email,lastSignInTime} = req.body
    const filter= {email:email}
    const query = {$set:{
      lastSignInTime:lastSignInTime
    }}

    const result = await userCollection.updateOne(filter,query)

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
