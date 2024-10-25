import React, { useState, useEffect } from 'react';

function ListaItens() {
  const [itens, setItens] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setItens((prevItens) => [...prevItens, `Item ${contador + 1}`]);
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    // Limpa o intervalo após 5 segundos
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    // Limpa intervalos e timeouts na desmontagem
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [contador]);

  return (
    <div>
      <h3>Lista de Itens:</h3>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaItens;
