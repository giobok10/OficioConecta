const express = require('express');
const router = express.Router();
const profesionalController = require('../controllers/profesional.controller');

router.post('/', profesionalController.registrar);

module.exports = router;