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

module.exports = {
  list, get,
};
