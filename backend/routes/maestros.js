const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  const query = 'SELECT * FROM maestros';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener maestros:', err);
      res.status(500).send('Error al obtener maestros');
    } else {
      res.json(results);
    }
  });
});

router.post('/', (req, res) => {
  const { nombre, edad, telefono, correo, usuario_creacio } = req.body;

  if (!nombre || !edad || !telefono || !correo || !usuario_creacio) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const fecha_creacion = new Date();

  const query = `
    INSERT INTO maestros (nombre, edad, telefono, correo, usuario_creacio, fecha_creacion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [nombre, edad, telefono, correo, usuario_creacio, fecha_creacion];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al agregar maestro:', err);
      return res.status(500).send('Error al agregar maestro');
    }
    res.status(201).send('Maestro agregado correctamente');
  });
});

module.exports = router;
