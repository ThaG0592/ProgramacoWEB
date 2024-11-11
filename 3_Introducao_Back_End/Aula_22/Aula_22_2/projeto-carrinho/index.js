// index.js
const calcularTotal = require('./calculoCarrinho');
const mostrarTotal = require('./mostrarTotal');

const itensCarrinho = [
  { nome: 'Maçã', preco: 2.5, quantidade: 3 },
  { nome: 'Banana', preco: 1.5, quantidade: 5 },
  { nome: 'Laranja', preco: 3.0, quantidade: 2 },
];

const total = calcularTotal(itensCarrinho);
mostrarTotal(total);
