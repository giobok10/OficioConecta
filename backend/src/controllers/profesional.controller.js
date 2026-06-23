const profesionalService = require('../services/profesional.service');

const registrar = async (req, res) => {
  try {
    const { nombre_completo, oficio, contacto, ubicacion, descripcion } = req.body;

    // Validación simple (KISS)
    if (!nombre_completo || !oficio || !contacto || !ubicacion || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const nuevoProfesional = await profesionalService.crearProfesional(req.body);
    res.status(201).json(nuevoProfesional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const buscar = async (req, res) => {
  try {
    const { q } = req.query; // Recibe el término desde la URL: ?q=plomero
    const profesionales = await profesionalService.buscarProfesionales(q);
    res.status(200).json(profesionales);
  } catch (error) {
    res.status(500).json({ message: 'Error al realizar la búsqueda' });
  }
};

const verPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const profesional = await profesionalService.obtenerProfesionalPorId(id);
    
    if (!profesional) {
      return res.status(404).json({ message: 'Profesional no encontrado' });
    }
    
    res.status(200).json(profesional);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil' });
  }
};

module.exports = { registrar, buscar, verPerfil };
