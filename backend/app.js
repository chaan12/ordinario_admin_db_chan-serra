const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');  
const estudiantesRoutes = require('./routes/estudiantes');
const maestrosRoutes = require('./routes/maestros');  
const materiasRoutes = require('./routes/materias');
const calificacionesRoutes = require('./routes/calificaciones');

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());


app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/maestros', maestrosRoutes); 
app.use('/api/materias', materiasRoutes);
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
