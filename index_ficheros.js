const fs = require('fs');
const P = require('bluebird');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/* fs.readFile('./prueba.txt', 'utf8', (err, resultado) => {
    console.log(resultado);
}) */

const sumas = [];

/* fs.readFile('./prueba.txt', 'utf8', (err, resultado) => {
    const arr1 = resultado.split(',');
    sumas.push(arr1);
}); */

function leerFichero(fichero) {
    return readFile(fichero, 'utf8')
    .then((resultado) => {
        const arr1 = resultado.split(',');
        return arr1;
    })
}

console.log(leerFichero('./prueba.txt'));

/* leerFichero('./prueba.txt',)
.then(console.log)
.catch(console.error); */