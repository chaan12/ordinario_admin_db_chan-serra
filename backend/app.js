const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');  
const estudiantesRoutes = require('./routes/estudiantes');
const profesoresRoutes = require('./routes/profesores');
const asignaturasRoutes = require('./routes/asignaturas');
const calificacionesRoutes = require('./routes/calificaciones');

// Cargar variables de entorno
dotenv.config();


const app = express();
app.use(express.json());


app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/profesores', profesoresRoutes);
app.use('/api/asignaturas', asignaturasRoutes);
app.use('/api/calificaciones', calificacionesRoutes);

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Puerto donde corre el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
