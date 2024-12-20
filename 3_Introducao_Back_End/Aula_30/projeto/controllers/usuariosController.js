// Importando os dados de usuários de um arquivo externo
const usuarios = require('../data/usuarios'); // Arquivo que contém os dados dos usuários

// Criar um novo usuário
exports.criarUsuario = (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Nome e email são obrigatórios!' });
    }

    // Criando o novo usuário com id único (baseado no timestamp)
    const novoUsuario = { id: Date.now(), nome, email };

    // Adicionando o novo usuário ao array
    usuarios.push(novoUsuario);

    // Respondendo com o novo usuário criado
    return res.status(201).json(novoUsuario);
};

// Listar todos os usuários
exports.listarUsuarios = (req, res) => {
    // Verificando se existem usuários cadastrados
    if (usuarios.length === 0) {
        return res.status(404).json({ error: 'Nenhum usuário encontrado!' });
    }

    // Retornando todos os usuários
    res.json(usuarios);
};

// Atualizar um usuário
exports.atualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    // Buscando o usuário pelo id
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    // Atualizando o nome e/ou email
    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    // Respondendo com o usuário atualizado
    res.json(usuario);
};

// Excluir um usuário
exports.excluirUsuario = (req, res) => {
    const { id } = req.params;

    // Buscando o índice do usuário a ser excluído
    const index = usuarios.findIndex(u => u.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    // Removendo o usuário do array
    usuarios.splice(index, 1);

    // Respondendo com sucesso
    res.status(204).send();
};
