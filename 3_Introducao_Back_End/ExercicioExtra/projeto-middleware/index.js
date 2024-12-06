const express = require('express');
const logRequests = require('./middlewares/logRequests');
const authenticate = require('./middlewares/authenticate');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = 3000;

// Usando middlewares
app.use(express.json());
app.use(logRequests);
app.use(authenticate);

// Rota principal
app.get('/', (req, res) => {
    res.send({ message: 'Bem-vindo ao Projeto Middleware!' });
});

// Rota que gera um erro de exemplo
app.get('/error', (req, res) => {
    throw new Error('Erro simulado');
});

// Middleware de tratamento de erros (deve ser o último)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
