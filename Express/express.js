const bodyParser = require('body-parser');
const APIError = require('./lib/apierror.js');
const packagesRouter = require('./routes/packages.route');
const mongoose = require('mongoose');
const util = require('util');
const express = require('express');

const app = express();

mongoose.connect('mongodb://51.15.194.153:27017/test');

if (process.env.MONGO_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    const msg = `${collectionName}.${method}`;
    console.log(msg, util.inspect(query, false, 20), doc);
  });
}

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/packages', packagesRouter);

app.use((error, req, res, next) => {
  if (error instanceof APIError) {
    res.status(error.status).json({ message: error.message });
  }
  return next(error);
});

app.use((error, req, res) => // pasa a este error cuando ha liquidado todas las demas opciones
  res.status(500).json({ message: 'unknown error' }));

app.listen(3000);
