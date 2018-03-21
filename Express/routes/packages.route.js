const express = require('express');

const router = express.Router();
const packagesCtrl = require('../controllers/packages.controller');

router.route('/') // (/ = packages), se lo pasa app.use en express.js
  .get(packagesCtrl.list) // equivale al app.get return res.json(db)
  .post(packagesCtrl.create);

router.route('/:name')
  .get(packagesCtrl.get);

module.exports = router;
