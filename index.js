// leer carpetas de node module
// de cada carpeta sacar su package.json

const fs = require('fs');
const util = require('util');
const path = require('path');
const fs_readfile = util.promisify(fs.readFile);
const file = './node_modules/moment/package.json';

function getPackageFromFolder() {
    
}