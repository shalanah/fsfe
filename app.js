const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hey there I\'m express!');
});

app.listen(port, () => {console.log(`Running running running and listening on port ${port}`)});
