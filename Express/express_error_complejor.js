const express = require('express');
const app = express();
const _ = require('lodash')
const db = require('../db.js');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const APIError = require('./apierror.js');
const packagesRouter = require('./routes/packages.route');

app.use(bodyParser.json({limit: '50mb'}));  

app.use('./packages', packagesRouter)

app.get('/packages', (req, res) => {
    return res.json(db);                        
});

app.get('/packages/:name', (req, res, next) => {
  console.log(req.params.name);
  const name = req.params.name.split('-');
  console.log(name.join(' '));
  return res.json(_.find(db, {'name': req.params.name}));                      
});

app.post('/packages', (req, res, next) => {
    if(!req.body.name){                             //si no esta bien, devuelve error
        const error = new APIError('no hay nombre', httpStatus.BAD_REQUEST)
        return next(error);
    } 
    db.push(req.body);                              // metemos en db
    return res.json(req.body);                      // si esta bien, devuelve lo que hemos metido  
});

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
