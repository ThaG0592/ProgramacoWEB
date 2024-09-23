/*Exercício 1: Manipulação de Arrays
Crie um array com 5 frutas. Adicione mais duas frutas ao final do array, 
remova a primeira fruta e depois exiba todas as frutas na console.*/
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pera"];
frutas.push("Manga", "Morango");
frutas.shift();
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// Output: "Banana", "Laranja", "Uva", "Pera", "Manga", "Morango"

/*Exercício 2: Manipulação de Objetos
Crie um objeto que represente um carro, com propriedades como marca, modelo e ano. 
Adicione uma nova propriedade chamada "cor" e modifique o ano para 2023. 
Em seguida, remova a propriedade "modelo" e exiba o objeto na console.*/
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

carro.cor = "Prata";
carro.ano = 2023;
delete carro.modelo;
console.log(carro);
// Output: {marca: "Toyota", ano: 2023, cor: "Prata"}

/*Exercício 3: Array de Objetos
Crie um array de objetos onde cada objeto representa um aluno com as propriedades nome,
idade e nota. Calcule a média das notas dos alunos e exiba-a na console.*/
let alunos = [
    {nome: "Pedro", idade: 20, nota: 8.5},
    {nome: "Carla", idade: 22, nota: 7.0},
    {nome: "Lucas", idade: 19, nota: 9.0}
];

let somaNotas = 0;
alunos.forEach(function(aluno) {
    somaNotas += aluno.nota;
});

let mediaNotas = somaNotas / alunos.length;
console.log("Média das notas: " + mediaNotas);
// Output: "Média das notas: 8.166666666666666"