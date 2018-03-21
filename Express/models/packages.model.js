const db = require('../../db.js');
const APIError = require('../lib/apierror');

function list() {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject(new APIError('No hay db', 500));
    }
    resolve(db);
  });
}

function get(name) {

}

module.exports = {
  list, get,
};
