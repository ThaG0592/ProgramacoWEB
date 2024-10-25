import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  // Executa na montagem e atualização (dependência: contador)
  useEffect(() => {
    console.log('Montagem e atualização: contador modificado');
    const intervalId = setInterval(() => setContador((prev) => prev + 1), 1000);

    // Função de limpeza chamada na desmontagem
    return () => {
      console.log('Desmontagem: limpando intervalo');
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log('contador atualizado para:', contador);
  }, [contador]);

  return <h2>Contador: {contador}</h2>;
}

export default Contador;
