const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
  const { nombre, apellidos, email, matricula, edad, semestre } = req.body;

  if (!nombre || !apellidos || !email || !matricula || !edad || !semestre) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
    INSERT INTO estudiantes (nombre, apellidos, email, matricula, edad, semestre)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [nombre, apellidos, email, matricula, edad, semestre];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar estudiante:', err);
      return res.status(500).send('Error al agregar estudiante');
    }
    res.status(201).send('Estudiante agregado correctamente');
  });
});


module.exports = router;
