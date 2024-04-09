// Exerecício simples com parâmetros

const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Servidor em  execução.');
})

// Dados dos clientes
const clientes = [
    { id: 1, nome: "Alexandre", telefone: '111111111', email: 'alta@gmail.com' },
    { id: 2, nome: "Bruno", telefone: '222222222', email: 'bruno@gmail.com' },
    { id: 3, nome: "Caio", telefone: '333333333', email: 'caio@gmail.com' },
    { id: 4, nome: "Duda", telefone: '444444444', email: 'duda@gmail.com' },
    { id: 5, nome: "Eduardo", telefone: '555555555', email: 'edu@gmail.com' }
]

// Rotas
app.get('/', (req, res) => {
    res.send('API de clientes');
})

// Rota com o total de clientes
app.get('/total_clientes', (req, res) => {
    res.send('Número de clientes cadastrados: ' + clientes.length);
})

// Rota para apresentar os dados de um cliente em específico
app.get('/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));

    // Se não existir o cliente
    if (!cliente) res.status(400).send('Cliente donti encontrado.');

    // O cliente  existe, vamos apresentar as informações dele numa frase
    res.send(`Cliente: ${cliente.nome}, telefone: ${cliente.telefone} e email: ${cliente.email}.`)
})

