const express = require('express');
const cors = require('cors');
const profesionalRoutes = require('./routes/profesional.routes');

const app = express();
// Configuración profesional de CORS
app.use(cors({
  origin: 'http://localhost:5173', // El puerto por defecto de Vite
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