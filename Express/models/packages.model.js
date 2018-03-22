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
  Package.findOne({ name: pkg.name })
    .then((existsPkg) => {
      console.log(existsPkg);
      if (!existsPkg) {
        return new APIError('Same name');
      } return new Package(pkg).save();
    });
}

module.exports = {
  list,
  get,
  create,
};
