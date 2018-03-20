const express = require('../node_modules/express');
const app = express();

app.use((req, res, next) => {
    const promise = new Promise((resolve) => resolve('hola'));
    promise.then((result) => {
        req.hola = 'hola';
        next();
    })
})

function login(req, res, next) {
    res.status(401).send('Login incorrect');
}

app.post('/user/:id', (req, res, next) => {
    console.log('hola');
    next();
}, (req, res) => {
    console.log(req.params.id);
    return res.json({user: 'hola'});
});

app.get('/user/:id', (req, res, next) => {
    console.log(req.params.id);
    return res.json({user: 'otro'});
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));