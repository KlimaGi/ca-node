const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');
const chatController = require('../controllers/chatController');

router.get('/info', controller.getInfo);
router.get('/user/:name', controller.getNames);
router.post('/createUser', controller.createUser);
router.delete('/user/:name', controller.deleteUser);

router.post('/createMessage', chatController.createMessage);
router.post('/deleteMessage', chatController.deleteMessage);

module.exports = router; 