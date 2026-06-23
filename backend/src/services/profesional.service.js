const db = require('../models/db');

const crearProfesional = async (datos) => {
  const { nombre_completo, oficio, contacto, ubicacion, descripcion } = datos;
  const query = `
    INSERT INTO profesionales (nombre_completo, oficio, contacto, ubicacion, descripcion)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [nombre_completo, oficio, contacto, ubicacion, descripcion];
  
  const { rows } = await db.query(query, values);
  return rows;
};

module.exports = { crearProfesional };