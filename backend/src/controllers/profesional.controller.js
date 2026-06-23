const profesionalService = require('../services/profesional.service');

const registrar = async (req, res) => {
  try {
    const { nombre_completo, oficio, contacto } = req.body;

    // Validación simple (KISS)
    if (!nombre_completo || !oficio || !contacto) {
      return res.status(400).json({ message: 'Nombre, oficio y contacto son obligatorios' });
    }

    const nuevoProfesional = await profesionalService.crearProfesional(req.body);
    res.status(201).json(nuevoProfesional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { registrar };