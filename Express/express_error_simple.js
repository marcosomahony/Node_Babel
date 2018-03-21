const express = require('express');

const app = express();
const _ = require('lodash');
const db = require('../db.js');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/packages', (req, res) => res.json(db));

app.get('/packages/:name', (req, res, next) => {
  console.log(req.params.name);
  const name = req.params.name.split('-');
  console.log(name.join(' '));
  return res.json(_.find(db, { name: req.params.name }));
});

app.post('/packages', (req, res) => {
  if (!req.body.name) {
    res.status(httpStatus.BAD_REQUEST).json({ error: 'No name' });
  }
  db.push(req.body);
  return res.json(req.body);
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
