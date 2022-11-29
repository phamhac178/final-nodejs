const express = require('express');
const router = express.Router();
const tieusuController = require('../app/controllers/tieusu.controller');


router.get('/:slug', tieusuController.show);
router.post('/', tieusuController.search);
router.get('/', tieusuController.tieusu);


module.exports = router;