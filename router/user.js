const express = require('express');
const userController = require('../controller/user.js');

const router = express.Router();

router.post('/', userController.user);
router.get('/', userController.findUserdetails)


module.exports = router;
