const express = require('express')

// test:TJUQ92IHuWVHncVY

const app = express()

const dbName = 'myApiBase';
const collectionName = 'myCollectionAoi';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'banyta1xrvb3umtoagof-mysql.services.clever-cloud.com',
  user: 'ula4etzv4xwsbzue',
  password: 'NMjQvyFMuxEKKNx5Rs5n',
  database: 'banyta1xrvb3umtoagof'
});





app.use(express.json())

const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port)
  });

app.get('/',(req,res)=>{

  let base ='Not connected'
  
  console.log('I will send data to MariadDB');
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    base = 'Connected';
  });

  const ipAddress = req.socket.remoteAddress;

  res.send([{
    ipAddress,
    base    
  }]);
});

app.put('/users/:id', (req, res) => {
  const updateCallBack = req.body
  const correlationId = req.params.id;
  
  const now = Date.now(); // get current Unix timestamp in milliseconds
  const date = new Date(now); // create new Date object from timestamp
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months start at zero
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


  res.send([{
      updateCallBack,
      dateString,
      correlationId
    }]);

const author = { dateReceived:dateString , objectID:JSON.stringify(updateCallBack), correlationId: correlationId  };

connection.query('INSERT INTO authors SET ?', author, (err, res) => {
  if(err) throw err;
  console.log('Last insert ID:', res.insertId);
});



 })