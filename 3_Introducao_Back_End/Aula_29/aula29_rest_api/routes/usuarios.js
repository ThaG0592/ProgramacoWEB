const express = require('express');
const router = express.Router();
const usuarios = require('../data/usuarios'); // Importa os dados separados

// 1. Criar um novo usuário (POST)
router.post('/', (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios!' });
    }
    const novoUsuario = { id: Date.now(), nome, email };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// 2. Listar todos os usuários (GET)
router.get('/', (req, res) => {
    res.json(usuarios);
});

// 3. Atualizar um usuário (PUT)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    res.json(usuario);
});

// 4. Excluir um usuário (DELETE)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(u => u.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    usuarios.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
