const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hey there I'm express!")
})

app.get('/teapot', (req, res) => {
  res.set( 'X-Custom', 'Custom' )
  res.status(418)
  res.send('I am a teapot')
})

app.listen(port, () => {
  console.log(`Running running running and listening on port ${port}`)
})
