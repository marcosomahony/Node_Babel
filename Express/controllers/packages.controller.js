const db = require('../../db');
const _ = require('lodash')

function list(req, res, next) {
    return res.json(db);  
}

function get(req, res) {
    return res.json(_.find(db, {'name': req.params.name}));
}

function create(req, res, next){
    if(!req.body.name){                             
        const error = new APIError('no hay nombre', httpStatus.BAD_REQUEST)
        return next(error);
    } 
    db.push(req.body);                              
    return res.json(req.body);
}

module.exports = {
    list, get, create
};