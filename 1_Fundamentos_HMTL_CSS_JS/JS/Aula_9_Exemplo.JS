console.log("Olá, mundo!");

/*
var: Escopo global ou de função, pode ser redeclarado e atualizado.
let: Escopo de bloco, pode ser atualizado mas não redeclarado no mesmo escopo.
const: Escopo de bloco, não pode ser atualizado nem redeclarado.
*/

//Declaração com var
var nome = "Thais";
console.log(nome);

//Declaração com let
let idade = 30;
console.log(idade);

//Declaração com const
const pi = 3.14;
console.log(pi);

//String: Cadeia de caracteres.
let saudacao = "Olá, mundo!";
console.log(saudacao);

//Number: Números, incluindo inteiros e decimais.
let inteiro = 10;
let decimal = 10.5;
console.log(inteiro, decimal);

//Boolean: Verdadeiro ou falso.
let isEstudante = true;
console.log(isEstudante);

//Array: Lista de valores.
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas);

//Object: Estrutura de dados com pares chave-valor.
let pessoa = {
    nome: "Thais",
    idade: 30
};
console.log(pessoa);

//Null: Intencionalmente vazio.
let vazio = null;
console.log(vazio);

let indefinido;
console.log(indefinido);



