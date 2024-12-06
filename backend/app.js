require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // localhost
  port: process.env.DB_PORT,       // 3309
  user: process.env.DB_USER,       // admin
  password: process.env.DB_PASSWORD, // admin_password
  database: process.env.DB_NAME,   // ordinario_modelo_admin
});

// Intentar conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
