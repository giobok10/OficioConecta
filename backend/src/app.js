const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const profesionalRoutes = require('./routes/profesional.routes');

const app = express();

// Seguridad de cabeceras HTTP
app.use(helmet({
  contentSecurityPolicy: false, // Deshabilitar para no bloquear assets del frontend si es necesario
}));

const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:5173'];
if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://127.0.0.1:5173');
}

// Configuración de CORS flexible para dev y producción
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/api/profesionales', profesionalRoutes);

// Servir frontend en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../public')));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});