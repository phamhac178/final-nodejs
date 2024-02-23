const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/Home.controller');


router.get('/login', HomeController.showlogin);
router.post('/onlogin', HomeController.onLogin);
router.get('/register', HomeController.showregister);
router.post('/qregister', HomeController.register);
router.get('/logout', HomeController.logout);



router.get('/', HomeController.home);


module.exports = router;