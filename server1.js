const express = require('express');

const server = express();

server.listen(3000);

//Inserindo middleware - conjunto de códigos que vem antes do server.get (a parte em que retornamos para o servidos oq deve aparecer na página)
server.use((req, res, next) => {
    console.log('Teste');
    next();
})

server.use((req, res, next)=>{
    req.requestTime = Date.now();
    next();
})

server.get('/', (req, res) => {
    console.log(req.requestTime);
    res.send('<h1>Tô só textando!! Acalmi-si pelo amorr de Deux!!</h1>');
})
