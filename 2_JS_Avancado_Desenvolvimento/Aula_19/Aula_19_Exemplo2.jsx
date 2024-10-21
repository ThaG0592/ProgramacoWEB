// Formulario.js
import React, { useState } from 'react';

function Formulario({ aoEnviar }) {
  const [nome, setNome] = useState('');

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <button onClick={() => aoEnviar(nome)}>Enviar</button>
    </div>
  );
}

export default Formulario;

// Perfil.js
import React from 'react';

function Perfil({ nome }) {
  return <p>Bem-vindo, {nome}!</p>;
}

export default Perfil;

// App.js
import React, { useState } from 'react';
import Formulario from './Formulario';
import Perfil from './Perfil';

function App() {
  const [nome, setNome] = useState('');

  return (
    <div>
      <Formulario aoEnviar={setNome} />
      {nome && <Perfil nome={nome} />}
    </div>
  );
}

export default App;
