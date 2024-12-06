const express = require('express');
const db = require('../db');
const router = express.Router();

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

router.post('/', (req, res) => {
  const { estudiante_id, maestro_id, materia_id, create_user } = req.body;

  if (!estudiante_id || !maestro_id || !materia_id || !create_user) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const query = `
    INSERT INTO calificaciones (estudiante_id, maestro_id, materia_id, create_user, create_date)
    VALUES (?, ?, ?, ?, NOW())
  `;
  const values = [estudiante_id, maestro_id, materia_id, create_user];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar calificación:', err);
      return res.status(500).send('Error al agregar calificación');
    }
    res.status(201).send('Calificación agregada correctamente');
  });
});

module.exports = router;
