const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const url ='mongodb+srv://startuplova:nwD1imRLYV6JYTuf@cluster0.kcxgiqe.mongodb.net/?retryWrites=true&w=majority'


const app = express()

const dbName = 'myApiBase';
const collectionName = 'myCollectionAoi';

const client = new MongoClient(url, { useNewUrlParser: true });


app.use(express.json())

const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port)
    const ip = request.connection.remoteAddress
    console.log('Your IP address is: ${ip}')
  });

app.put('/users/:id', (req, res) => {
  const updateCallBack = req.body
  const date = Date.now();
    res.send([
        {updateCallBack,date}
    ])
    client.connect(err => {
        if (err) {
          console.error('Error connecting to MongoDB Atlas:', err);
        } else {
          console.log('Connected to MongoDB Atlas');
      
          const db = client.db(dbName);
          const collection = db.collection(collectionName);
      
          // Insert a new document into the collection
          const document = [ {updateCallBack,date}];
          collection.insertOne(document, (err, result) => {
            if (err) {
              console.error('Error inserting document:', err);
            } else {
              console.log('Inserted document:', result.ops[0]);
            }
            client.close();
          });
        }
      });

})



