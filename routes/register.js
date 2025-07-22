const express = require('express');
const router = express.Router();
const { registerStudent } = require('../controllers/registerController');

router.post('/', registerStudent);

module.exports = router;