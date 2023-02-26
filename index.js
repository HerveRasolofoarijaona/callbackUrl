const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})


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



