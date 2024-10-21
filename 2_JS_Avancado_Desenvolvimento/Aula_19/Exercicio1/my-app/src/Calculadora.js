import React, { useState } from 'react';
import Botao from './Botao';

function Calculadora() {
  const [tela, setTela] = useState('');
  
  const handleClique = (valor) => {
    if (valor === '=') {
      try {
        setTela(eval(tela));  // Cálculo da expressão
      } catch (error) {
        setTela('Erro');      // Tratamento de erro
      }
    } else if (valor === 'C') {
      setTela('');  // Limpar tela
    } else {
      setTela(tela + valor);  // Atualizar a expressão
    }
  };

  return (
    <div>
      <div style={{ padding: '10px', border: '1px solid black', fontSize: '24px', marginBottom: '10px' }}>
        {tela || '0'}
      </div>
      <div>
        {['7', '8', '9', '/'].map((valor) => (
          <Botao key={valor} valor={valor} aoClicar={handleClique} />
        ))}
      </div>
      <div>
        {['4', '5', '6', '*'].map((valor) => (
          <Botao key={valor} valor={valor} aoClicar={handleClique} />
        ))}
      </div>
      <div>
        {['1', '2', '3', '-'].map((valor) => (
          <Botao key={valor} valor={valor} aoClicar={handleClique} />
        ))}
      </div>
      <div>
        {['0', '.', '=', '+'].map((valor) => (
          <Botao key={valor} valor={valor} aoClicar={handleClique} />
        ))}
      </div>
      <div>
        <Botao valor="C" aoClicar={handleClique} />
      </div>
    </div>
  );
}

export default Calculadora;
