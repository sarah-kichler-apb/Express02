// Colocando parâmetros nas rotas
const express = require('express');
const app = express();
app.listen(3000, ()=>{
    console.log('Servidor em execução.');
})

//Rota
app.get('/', (req,res)=>{
    res.send('Primeiro');
})

//Rota com 1 parâmetro
app.get('/ola/:nomeDaCrianca', (req,res)=>{
    res.send('Segundo: <br> Nome: ' + req.params.nomeDaCrianca + ".");
})
//Rota com 2 parâmetros
app.get('/ola/:nomeDaCrianca/:empresaDaCrianca', (req,res)=>{
    res.send('Terceiro: <br> Tudo bem, ' + req.params.nomeDaCrianca + "? Sua empresa é a " + req.params.empresaDaCrianca + ", correto?");
})

//Rota com soma de 2 parâmetros
app.get('/soma/:a/:b', (req,res)=>{
    res.send('Quarto: <br> O resultado da soma é: ' + ((parseInt(req.params.a)) + (parseInt(req.params.b))));
})