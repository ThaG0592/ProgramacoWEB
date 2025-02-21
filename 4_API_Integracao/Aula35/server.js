const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

let usuarios = [{ id: 1, nome: 'Alice' }, { id: 2, nome: 'Bob' }];

// Enviar lista de usuários para o cliente quando conectar
io.on('connection', (socket) => {
  console.log('Cliente conectado');
  
  socket.emit('usuariosAtualizados', usuarios);

  socket.on('novoUsuario', (usuario) => {
    usuarios.push(usuario);
    io.emit('usuariosAtualizados', usuarios); // Atualiza todos os clientes
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor WebSocket rodando na porta 3000');
});
