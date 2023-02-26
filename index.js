const express = require('express')
const app = express()

app.use(express.json())

const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });

app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const updateCallBack = req.body
//   console.log(updatedUser)
  const date = Date.now();
  const index = users.findIndex(user => user.id === parseInt(id))
  if (index !== -1) {
    // users[index] = updatedUser
    res.send([
        {updateCallBack,date}
    ])
    
    console.log('Client call Put API')
  } else {
    res.status(404).send('User not found')
  }
})



