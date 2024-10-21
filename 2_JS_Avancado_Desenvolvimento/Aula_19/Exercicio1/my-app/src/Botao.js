import React from 'react';

function Botao({ valor, aoClicar }) {
  return (
    <button onClick={() => aoClicar(valor)} style={{ padding: '10px', margin: '5px', fontSize: '18px' }}>
      {valor}
    </button>
  );
}

export default Botao;
