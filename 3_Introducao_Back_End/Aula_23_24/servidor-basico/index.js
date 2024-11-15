// index.js
const express = require('express');
const app = express();
const usuariosRouter = require('./usuarios');
const port = 3000;

// Rota básica
app.get('/', (req, res) => {
  res.send('Olá, bem-vindo ao servidor Express!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/sobre', (req, res) => {
    res.send('Esta é a rota /sobre.');
});
  
app.get('/contato', (req, res) => {
    res.send('Entre em contato conosco pelo e-mail: contato@exemplo.com.');
});
  
app.use('/usuarios', usuariosRouter);
