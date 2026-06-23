const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const profesionalRoutes = require('./routes/profesional.routes');

const app = express();

// Seguridad de cabeceras HTTP
app.use(helmet());

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});