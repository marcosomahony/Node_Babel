const express = require('express');

const router = express.Router();
const packagesCtrl = require('../controllers/packages.controller');
const libCache = require('../lib/cache');

function getCachePackage(req, res, next) {
  libCache.getCache(req.params.name)
  .then((pack) => {
    if(pack) {
      console.log('cache');
      return res.json(pack);
    }
    return next();
  });
}

function setPackage(req, res, next) {
  libCache.setPackage().then();
}

router.route('/') // (/ = packages), se lo pasa app.use en express.js
  .get(packagesCtrl.list) // equivale al app.get return res.json(db)
  .post(packagesCtrl.create);

router.route('/:name')
  .get(getCachePackage, packagesCtrl.get);

module.exports = router;
