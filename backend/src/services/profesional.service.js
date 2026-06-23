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
  return rows[0];
};

const buscarProfesionales = async (termino) => {
  const query = `
    SELECT * FROM profesionales 
    WHERE oficio ILIKE $1 OR nombre_completo ILIKE $1;
  `;
  const values = [`%${termino || ''}%`];
  const { rows } = await db.query(query, values);
  return rows;
};

const obtenerProfesionalPorId = async (id) => {
  const query = 'SELECT * FROM profesionales WHERE id = $1;';
  const { rows } = await db.query(query, [id]);
  return rows[0];
};

module.exports = { crearProfesional, buscarProfesionales, obtenerProfesionalPorId };
