// Rotas com hífens e pontos

const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Servidor no ar.');
})

// Rota base
app.get('/', (req,res)=>{
    res.send('Teste com parâmetros');
})

// Rotas com hífen
app.get("/distancia/:pontoA-:pontoB", (req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`A distância, usando hífen, entre ${pontoA} e ${pontoB} é: ${distancia}.`)
})

// Rotas com ponto
app.get("/distancia/:pontoA.:pontoB", (req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`A distância, usando ponto, entre ${pontoA} e ${pontoB} é: ${distancia}.`)
})