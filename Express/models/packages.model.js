const db = require('../../db.js');
const _ = require('lodash');


function list() {
  return new Promise((resolve) => {
    resolve(db);
  });
}

function get(name) {
  return new Promise((resolve) => {
    resolve(_.find(db, { name }));
  });
}

module.exports = {
  list, get,
};
