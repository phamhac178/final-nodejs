const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/admin.controller');

router.post('/update', adminController.update);
router.post('/delete', adminController.delete);
router.post('/create', adminController.create);
router.get('/', adminController.index);


module.exports = router;