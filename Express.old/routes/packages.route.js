const express = require('express');

const router = express.Router();
const packagesCtrl = require('../controllers/packages.controller');
const libCache = require('../lib/cache');

function getCachePackage(req, res, next) {
  libCache.getCache(req.params.name)
    .then((pack) => {
      if (pack) {
        console.log('cache');
        return res.json(pack);
      }
      return next();
    });
}

/* function setPackage(req, res, next) {
  libCache.setPackage().then();
} */

router.route('/') // (/ = packages), se lo pasa app.use en express.js
  .get(packagesCtrl.list) // equivale al app.get return res.json(db)
  .post(packagesCtrl.create);

router.route('/:name')
  .get(
    getCachePackage,
    (req, res, next) => {
      console.log('param', req.params.name);
      packagesCtrl.get(req.params.name)
        .then((data) => {
          console.log('data', data);
          req.bbcache = data;
          next();
        })
        .catch(error => next(error));
    },
    (req, res, next) => {
      console.log('req.cache', req.bbcache);
      libCache.saveCache(req.bbcache)
        .then(() => res.json(req.bbcache))
        .catch(error => next(error));
    },
);


module.exports = router;
