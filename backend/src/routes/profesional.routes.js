const express = require('express');
const router = express.Router();
const profesionalController = require('../controllers/profesional.controller');

router.post('/', profesionalController.registrar); // RF-01
router.get('/', profesionalController.buscar);    // RF-02
router.get('/:id', profesionalController.verPerfil); // RF-03: Consulta individual

module.exports = router;
