const test = require('node:test');
const assert = require('node:assert');
const profesionalController = require('../src/controllers/profesional.controller');
const profesionalService = require('../src/services/profesional.service');

test('Prueba de Registro (RF-01) - Exitoso', async (t) => {
  const req = {
    body: {
      nombre_completo: 'Carlos Plomero',
      oficio: 'Plomero',
      contacto: '+57 300 123 4567',
      ubicacion: 'Bogotá',
      descripcion: 'Servicios de plomería garantizados'
    }
  };

  let statusSet = null;
  let jsonSent = null;

  const res = {
    status(code) {
      statusSet = code;
      return this;
    },
    json(data) {
      jsonSent = data;
      return this;
    }
  };

  // Mockear el servicio para evitar llamar a la DB real
  const mockCrear = t.mock.method(profesionalService, 'crearProfesional', async (datos) => {
    return { id: 1, ...datos };
  });

  await profesionalController.registrar(req, res);

  assert.strictEqual(statusSet, 201);
  assert.strictEqual(jsonSent.id, 1);
  assert.strictEqual(jsonSent.nombre_completo, 'Carlos Plomero');
  assert.strictEqual(jsonSent.oficio, 'Plomero');
  assert.strictEqual(mockCrear.mock.calls.length, 1);
});

test('Prueba Unitaria de API (Técnica) - Registro Incompleto', async (t) => {
  // Caso 1: Falta oficio (requerido por RF-01)
  const reqIncompleto = {
    body: {
      nombre_completo: 'Carlos Plomero',
      contacto: '+57 300 123 4567'
    }
  };

  let statusSet = null;
  let jsonSent = null;

  const res = {
    status(code) {
      statusSet = code;
      return this;
    },
    json(data) {
      jsonSent = data;
      return this;
    }
  };

  const mockCrear = t.mock.method(profesionalService, 'crearProfesional', async () => {
    throw new Error('No debería interactuar con la DB');
  });

  await profesionalController.registrar(reqIncompleto, res);

  assert.strictEqual(statusSet, 400);
  assert.strictEqual(jsonSent.message, 'Nombre, oficio y contacto son obligatorios');
  assert.strictEqual(mockCrear.mock.calls.length, 0); // No toca la base de datos
});

test('Prueba de Búsqueda (RF-02) - Búsqueda por Oficio', async (t) => {
  const req = {
    query: { q: 'Plomero' }
  };

  let statusSet = null;
  let jsonSent = null;

  const res = {
    status(code) {
      statusSet = code;
      return this;
    },
    json(data) {
      jsonSent = data;
      return this;
    }
  };

  const mockBuscar = t.mock.method(profesionalService, 'buscarProfesionales', async (termino) => {
    assert.strictEqual(termino, 'Plomero');
    return [
      { id: 1, nombre_completo: 'Carlos Plomero', oficio: 'Plomero', contacto: '+57 300 123 4567' }
    ];
  });

  await profesionalController.buscar(req, res);

  assert.strictEqual(statusSet, 200);
  assert.strictEqual(Array.isArray(jsonSent), true);
  assert.strictEqual(jsonSent.length, 1);
  assert.strictEqual(jsonSent[0].oficio, 'Plomero');
  assert.strictEqual(mockBuscar.mock.calls.length, 1);
});
