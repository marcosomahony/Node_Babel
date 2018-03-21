const fs = require('fs');
const util = require('util');

const fs_readfile = util.promisify(fs.readFile);
const file = './node_modules/moment/package.json';


function getPackageJson() {
  return fs_readfile(file, 'utf8')
    .then(stringToJson)
    .then(parserData)
    .then(console.log);
}

// con console logs para entederlo
/* function getPackageJson() {
    return fs_readfile(file, 'utf8')
        .then((data) => {
            console.log(typeof data);
            return JSON.parse(data);
        })
        .then((data) => {
            console.log(typeof data);
            console.log(data.author.name);
        })
        .then(parserData);
} */

function stringToJson(data) {
  return JSON.parse(data);
}

function parserData(data) {
  return {
    name: data.name,
    description: data.description,
    version: data.version,
    license: data.license,
  };
}

getPackageJson();
module.exports = getPackageJson;
