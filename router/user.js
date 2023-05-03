const express = require('express');
const userController = require('../controller/user.js');

const router = express.Router();

router.post('/adduser', userController.user);
router.get('/userfind', userController.findUserdetails)
router.delete('/deleteuser', userController.deletuser);
router.get('/alluser',userController.allusers);


module.exports = router;
