import React, { useState, useEffect } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const buscarUsuarios = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/usuarios');
      const dados = await resposta.json();
      setUsuarios(dados);
    } catch (err) {
      console.error('Erro ao buscar usuários', err);
    }
  };

  useEffect(() => {
    buscarUsuarios(); // Busca inicial
    const intervalo = setInterval(buscarUsuarios, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
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
