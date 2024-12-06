const express = require('express');
const db = require('../db');
const router = express.Router();

// GET para Obtener todas las materias
router.get('/', (req, res) => {
  const query = 'SELECT * FROM materias';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener materias:', err);
      res.status(500).send('Error al obtener materias');
    } else {
      res.json(results);
    }
  });
});

// POST para Crear una nueva materia
router.post('/', (req, res) => {
  const { nombre, profesor_id, create_user } = req.body;

  if (!nombre || !profesor_id || !create_user) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
    INSERT INTO materias (nombre, profesor_id, create_user, create_date)
    VALUES (?, ?, ?, NOW())
  `;
  const values = [nombre, profesor_id, create_user];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar materia:', err);
      return res.status(500).send('Error al agregar materia');
    }
    res.status(201).send('Materia agregada correctamente');
  });
});

module.exports = router;
