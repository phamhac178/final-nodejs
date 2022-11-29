const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/Home.controller');


router.get('/show/login', HomeController.showlogin);
router.post('/login', HomeController.login);
router.get('/show/register', HomeController.showregister);
router.post('/qregister', HomeController.register);



router.get('/', HomeController.home);


module.exports = router;