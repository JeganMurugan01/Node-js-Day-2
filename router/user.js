const express = require('express');
const userController = require('../controller/user.js');

const router = express.Router();

router.post('/', userController.user);
router.get('/', userController.findUserdetails)
router.delete('/', userController.deletuser);
router.get('/alluser',userController.allusers);


module.exports = router;
