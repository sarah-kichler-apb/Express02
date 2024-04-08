const express = require('express');
var morgan = require('morgan');
const server = express();
server.listen(3000);

//Criar o arquivo de logs (log = requisição no servidor / é uma listagem das informações a respeito do que foi feito na requisição)
//server.use(morgan('tiny'));
server.use(morgan('Método = :method | Status = :status | Url = :url'));

server.get('/',(req,res)=>{
    res.send('TEXTE');
})
