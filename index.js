const express = require('express')
const app = express()

app.use(express.json())

const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });

app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const updateCallBack = req.body
  const date = Date.now();
    res.send([
        {updateCallBack,date}
    ])
})



