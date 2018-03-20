// leer carpetas de node module
// de cada carpeta sacar su package.json

const fs = require('fs');
const util = require('util');
const path = require('path');
const fs_readFolder = util.promisify(fs.readdir);
const readFile = require('./readFile');
const FOLDER = './node_modules';
const nameFolder= 'moment';
const _ = require('lodash');

// se podria meter esto en getPackageJson
/* new Promise((resolve, reject) => {
    fs.readdir('FOLDER', (error, data) => {
        if (error) {
            return reject(error);
        }
        return resolve(data);
    })
}) */

function getListFolders() {
    return fs_readFolder(FOLDER);
}

function getPackagesFromList(list) {
    const promises = [];
    list.forEach((element) => {
        promises.push(resolveVersion(element));
    });
    return Promise.all(promises);
}

function resolveVersion(folder) {
    return readFile(folder);
}

function filterPackagesNull(array) {
    return _.filter(array, (element) => element !== null)
}

function getPackagesJson() {
    return getListFolders()
    .then(getPackagesFromList) // le pasas la lista de carpetas de getListFolders
    .then(filterPackagesNull)
    .then((data) => console.log(data))
}

getPackagesJson();
