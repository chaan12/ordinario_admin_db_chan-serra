const express = require('express');
const db = require('../db');
const router = express.Router();

// GET para Obtener todos los profesores
router.get('/', (req, res) => {
  const query = 'SELECT * FROM profesores';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener profesores:', err);
      res.status(500).send('Error al obtener profesores');
    } else {
      res.json(results);
    }
  });
});

// POST para Crear un nuevo profesor
router.post('/', (req, res) => {
  const { nombre, apellidos, email, materia } = req.body;

  if (!nombre || !apellidos || !email || !materia) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
    INSERT INTO profesores (nombre, apellidos, email, materia)
    VALUES (?, ?, ?, ?)
  `;
  const values = [nombre, apellidos, email, materia];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar profesor:', err);
      return res.status(500).send('Error al agregar profesor');
    }
    res.status(201).send('Profesor agregado correctamente');
  });
});

module.exports = router;
