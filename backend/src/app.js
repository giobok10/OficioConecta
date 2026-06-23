const express = require('express');
const cors = require('cors');
const profesionalRoutes = require('./routes/profesional.routes');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

// Rutas
app.use('/api/profesionales', profesionalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});