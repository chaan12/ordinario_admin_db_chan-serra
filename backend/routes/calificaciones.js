const express = require('express');
const db = require('../db');
const router = express.Router();

// GET para Obtener todas las calificaciones
router.get('/', (req, res) => {
  const query = 'SELECT * FROM calificaciones';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener calificaciones:', err);
      res.status(500).send('Error al obtener calificaciones');
    } else {
      res.json(results);
    }
  });
});

// POST para Crear una nueva calificación
router.post('/', (req, res) => {
  const { alumno_id, asignatura_id, calificacion } = req.body;

  if (!alumno_id || !asignatura_id || !calificacion) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
    INSERT INTO calificaciones (alumno_id, asignatura_id, calificacion)
    VALUES (?, ?, ?)
  `;
  const values = [alumno_id, asignatura_id, calificacion];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar calificación:', err);
      return res.status(500).send('Error al agregar calificación');
    }
    res.status(201).send('Calificación agregada correctamente');
  });
});

module.exports = router;
