//apollo para el de las carpetas
const fs = require('fs');
const util = require('util');
const fs_readfile = util.promisify(fs.readFile);
const nameFolder= 'moment';



function getPackageJson(nameFolder) {
    const file = `./node_modules/${nameFolder}/package.json`;
    return fs_readfile(file, 'utf8')
        .then(stringToJson)
        .then(parserData)
        .catch(() => {});
}

function stringToJson(data){
    return JSON.parse(data);
}

function parserData(data){
    data = data || {};
    return {
        name: data.name,
        description: data.description,
        version: data.version,
        license: data.license
    }
}

module.exports = getPackageJson;