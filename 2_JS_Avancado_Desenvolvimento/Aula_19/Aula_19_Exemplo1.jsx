// Botao.js
import React from 'react';

function Botao({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>;
}

export default Botao;

// Contador.js
import React, { useState } from 'react';
import Botao from './Botao';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <Botao texto="Aumentar" onClick={() => setContagem(contagem + 1)} />
      <Botao texto="Diminuir" onClick={() => setContagem(contagem - 1)} />
    </div>
  );
}

export default Contador;
