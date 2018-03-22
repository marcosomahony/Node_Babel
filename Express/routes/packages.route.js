const express = require('express');

const router = express.Router();
const packagesCtrl = require('../controllers/packages.controller');
/* const libCache = require('../lib/cache'); */
/*
function getCachePackage(req, res, next) {
  libCache.getCache(req.params.name)
    .then((pkg) => {
      console.log('entra get cache');
      if (pkg) {
        console.log('cache');
        return res.json(pkg);
      }
      return next();
    });
} */

// function setPackage(req, res, next) {
//   libCache.setPackage().then();
// }

router.route('/')
  .get(packagesCtrl.list)
  .post((req, res, next) => {
    return packagesCtrl.create(req.body)
    .then(res.json.bind(res))
    .catch(next);
  });

function resolvePackageAndNext(req, res, next) {
  console.log('param', req.params.name);
  packagesCtrl.get(req.params.name)
    .then((data) => {
      console.log('data', data);
      req.bbcache = data;
      next();
    })
    .catch(error => next(error));
}

function cachedPackageAndResponse(req, res, next) {
  console.log('req.cache', req.bbcache);
  libCache.saveCache(req.bbcache)
    .then(() => res.json(req.bbcache))
    .catch(error => next(error));
}

router.route('/:name')
  .get(
    getCachePackage,
    resolvePackageAndNext,
    cachedPackageAndResponse,
);

module.exports = router;

