const express = require('express');

// express serveris
const app = express();
const cors = require('cors');

app.use(cors());
// is front'o galiu siusti objektus, back'as lengvai juos skaityti gales
app.use(express.json());

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

let usersData = [];

app.post("/createUser", (req, res) => {
  console.log('req.body', req.body);

  usersData.push(req.body);
  console.log('usersData', usersData);
  res.send({ ok: "post is working" })
})

app.delete('/user/:name', (req, res) => {
  const { name } = req.params;
  const temp = names.filter((dbname) => dbname !== name);
  names = temp;

  res.send({ names })
})