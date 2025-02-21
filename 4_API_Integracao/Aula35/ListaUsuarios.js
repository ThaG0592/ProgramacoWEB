import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Receber lista de usuários do servidor
    socket.on('usuariosAtualizados', (dados) => {
      setUsuarios(dados);
    });

    return () => {
      socket.off('usuariosAtualizados');
    };
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
