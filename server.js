const express = require('express');
const app = express();

const dogs = ['Doggo', 'Pupper', 'Woofer']

app.get('/api/dogs', (req, res) => {
  res.send(dogs)
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
