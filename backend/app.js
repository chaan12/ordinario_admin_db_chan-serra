const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// es la conexión a la db
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
  console.log('Conexión exitosa a la base de datos.');
});

// si muestra esto, es buena señal jiji (debe mostrar esto junto al codigo de la linea 25)
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});


// get pa estudiantes
app.get('/api/estudiantes', (req, res) => {
  const query = 'SELECT * FROM estudiantes';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener estudiantes:', err);
      res.status(500).send('Error al obtener estudiantes');
    } else {
      res.json(results);
    }
  });
});

// post de estudiantes
app.post('/api/estudiantes', (req, res) => {
  const { nombre, apellidos, email, matricula, edad, semestre } = req.body;

  // comprueba que se pongan todos los campos 
  if (!nombre || !apellidos || !email || !matricula || !edad || !semestre) {
      return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
      INSERT INTO estudiantes (nombre, apellidos, email, matricula, edad, semestre, usuario_creacio)
      VALUES (?, ?, ?, ?, ?, ?, 'admin')
  `;
  const values = [nombre, apellidos, email, matricula, edad, semestre];

  // Pa ver si se hizo o no
  db.query(query, values, (err, results) => {
      if (err) {
          console.error('Error al agregar estudiante:', err);
          return res.status(500).send('Error al agregar estudiante');
      }
      res.status(201).send('Estudiante agregado correctamente');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
