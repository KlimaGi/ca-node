const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');

router.get('/info', controller.getInfo);
router.get('/user/:name', controller.getNames);
router.post("/createUser", controller.createUser);
router.delete('/user/:name', controller.deleteUser)

module.exports = router;