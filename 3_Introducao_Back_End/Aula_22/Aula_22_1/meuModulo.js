// meuModulo.js
function saudacao(nome) {
    return `Olá, ${nome}!`;
  }
  
  function despedida(nome) {
    return `Até logo, ${nome}!`;
  }
  
  module.exports = {
    saudacao,
    despedida,
  };
  