const APIError = require('../lib/apierror');
const mongoose = require('mongoose');

const Package = mongoose.model('Package', {
    name: String,
    description: String,
    version: String,
    license: String,
});

function list() {
  return Package.find({});
}

function get(name) {
  return Package.find({ name });
}

function create(pkg) {
  if (!pkg.name || !pkg.version) {
    return new Promise((resolve, reject) => {
      return reject(new APIError('No name or version'));
    });
  }
  Package.findOne({ name: pkg.name })
    .then((existsPkg) => {
      if (existsPkg) {
        throw new Error('Same name');
      }
      return new Package(pkg).save();
    });
}

module.exports = {
  list,
  get,
  create,
};
