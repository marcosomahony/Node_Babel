const express = require('express');
const app = express();
const _ = require('lodash')
const db = require('../db.js');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const APIError = require('./lib/apierror.js');
const packagesRouter = require('./routes/packages.route');

app.use(bodyParser.json({limit: '50mb'}));  

app.use('/packages', packagesRouter)

app.use((error, req, res, next) => {
    if(error instanceof APIError){
        res.status(error.status).json({message: error.message});
    }
    return next(error);
})

app.use((error, req, res, next) => {                // pasa a este error cuando ha liquidado todas las demas opciones
    return res.status(500).json({message: 'unknown error'});
}) 

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
