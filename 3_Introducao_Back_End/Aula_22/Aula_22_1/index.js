// index.js
const { saudacao, despedida } = require('./meuModulo');

console.log(saudacao("Carlos"));
console.log(despedida("Carlos"));

// index.js
const _ = require('lodash');

const numeros = [1, 2, 3, 4, 5];
const dobro = _.map(numeros, (n) => n * 2);

console.log(dobro); // [2, 4, 6, 8, 10]

