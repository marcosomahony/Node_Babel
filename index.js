const P = require('bluebird');

function suma(a, b) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 20);
    });
}

const array = [[2,3], [4,5]];
const promesas = [];
array.forEach((par) => promesas.push(suma(par[0], par[1])));

console.log(promesas);

P.map(promesas, (result) => result * 20)
.then(console.log);

/* Promise.all(promesas)
.then((result) => {
    console.log(result);
}); */