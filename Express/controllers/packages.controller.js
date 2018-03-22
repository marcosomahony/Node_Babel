const db = require('../../db');
const httpStatus = require('http-status');
const APIError = require('../lib/apierror');
const packageModel = require('../models/packages.model');

function list(req, res, next) {
    packageModel.list()
        .then(res.json.bind(res))
        .catch(next);
    /* simplificacion de:
      .then((data) => {
          return res.json(data);
      })
      .catch((error) => {
          next(error);
      })
      */
}

function get(name) {
    return new Promise((Resolve, reject) => {
        if (!name) {
            return reject(new APIError('no params'));
        }
        return packageModel.get(name).then(Resolve);
    });
}

function create(req, res, next) {
    if (!req.body.name) {
        const error = new APIError('no hay nombre', httpStatus.BAD_REQUEST);
        return next(error);
    }
    db.push(req.body);
    return res.json(req.body);
}

module.exports = {
    list, get, create,
};
