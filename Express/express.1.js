const express = require('express');
const app = express();
const db = require('../db.js');
console.log(db[0]);

app.post('/users', (req, res) => {
  console.log(req.params.id);
  return res.json({ user: 'hola'});
});

app.get('/users/:id', (req, res, next) => {
  console.log(req.params.id);
  return res.json({user: 'otro'});
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
