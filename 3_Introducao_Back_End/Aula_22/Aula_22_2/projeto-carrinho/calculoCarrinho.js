// calculoCarrinho.js
function calcularTotal(itens) {
    return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }
  
  module.exports = calcularTotal;

  