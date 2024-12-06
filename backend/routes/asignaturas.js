const express = require('express');
const db = require('../db');
const router = express.Router();

// GET para Obtener todas las asignaturas
router.get('/', (req, res) => {
  const query = 'SELECT * FROM asignaturas';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener asignaturas:', err);
      res.status(500).send('Error al obtener asignaturas');
    } else {
      res.json(results);
    }
  });
});

// POST para Crear una nueva asignatura
router.post('/', (req, res) => {
  const { nombre, creditos } = req.body;

  if (!nombre || !creditos) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
    INSERT INTO asignaturas (nombre, creditos)
    VALUES (?, ?)
  `;
  const values = [nombre, creditos];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar asignatura:', err);
      return res.status(500).send('Error al agregar asignatura');
    }
    res.status(201).send('Asignatura agregada correctamente');
  });
});

module.exports = router;
