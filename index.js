const fs = require('fs');

/* fs.readFile('./prueba.txt', 'utf8', (err, resultado) => {
    console.log(resultado);
}) */

const sumas = [];

/* fs.readFile('./prueba.txt', 'utf8', (err, resultado) => {
    const arr1 = resultado.split(',');
    sumas.push(arr1);
}); */

function leerFichero(fichero) {
    return new Promise((resolve) => {
        fs.readFile(fichero, 'utf8', (err, resultado) => {
            if(err){
                return rejecct(err);
            }
            const arr1 = resultado.split(',');
            resolve(resultado);
        });
    })
}

leerFichero('./prueba.txt',)
.then(console.log)
.catch(console.error);