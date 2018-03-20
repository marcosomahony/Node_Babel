const P = require('bluebird');
const fs = require('fs');

function suma(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

const array = [[2, 3], [4, 5]];
/* const promesas = [];                                             // muy util: .all
array.forEach((par) => promesas.push(suma(par[0], par[1])));
Promise.all(promesas).then(console.log); */                         // con .all

const promesas = [];                                             // con .map
array.forEach((par) => promesas.push(suma(par[0], par[1])));
P.map(array, map)
.then(console.log)

function map(result) {
    return suma(result[0], result[1])
        .then((result) => {
            return result;
        });
}

/* Promise.all(promesas)
.then((result) => {
    console.log(result);
}); */


