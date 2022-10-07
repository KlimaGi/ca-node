let names = [];
let usersData = [];

module.exports = {
  getInfo: (req, res) => {
    const info = 'server is running';
    res.send({ info })
  },
  getNames: (req, res) => {
    const { name } = req.params;
    names.push(name);
    //siunciam uzklausa, grazinam i fornta atsakyma, kitaip pakibs frontas
    res.send({ names })
  },
  createUser: (req, res) => {
    usersData.push(req.body);
    res.send(usersData)
  },
  deleteUser: (req, res) => {
    const { name } = req.params;
    const temp = names.filter((dbname) => dbname !== name);
    names = temp;

    res.send({ names })
  }

}