const express = require('express');

// express serveris
const app = express();
const cors = require('cors');

app.use(cors());
app.listen(4000);

app.get("/info", (req, res) => {
  const info = 'server is running';
  res.send({ info })
});

let names = [];

app.get('/user/:name', (req, res) => {

  const { name } = req.params;

  names.push(name);

  //siunciam uzklausa, grazinam i fornta atsakyma, kitaip pakibs frontas
  res.send({ names })
})

app.delete('/user/:name', (req, res) => {
  const { name } = req.params;
  const temp = names.filter((dbname) => dbname !== name);
  names = temp;

  res.send({ names })
})