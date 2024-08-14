//Funções são blocos de código reutilizáveis que executam uma tarefa específica. 
//Elas ajudam a organizar e modularizar o código, tornando-o mais legível e fácil de manter.
function saudacao() {
    console.log("Olá, mundo!");
}

//Para criar uma função, usamos a palavra-chave function seguida do nome da função, 
//parênteses e chaves.
function soma() {
    let a = 5;
    let b = 10;
    console.log(a + b);
}

//Chamando uma Função
soma();  // Chama a função e exibe "15" no console

//Parâmetros são valores passados para a função, que ela pode usar para executar suas tarefas.
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Jones");  // Exibe "Olá, Jones!"

//Usamos a palavra-chave return para fazer uma função devolver um valor.
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(5, 3);
console.log(resultado);  // Exibe "15"

//Variáveis declaradas dentro de uma função têm escopo local e só podem 
//ser acessadas dentro dessa função.
function exemplo() {
    let local = "Estou dentro da função";
    console.log(local);
}

exemplo();  // Exibe "Estou dentro da função"
//console.log(local);  // Erro: local não está definido

//Variáveis declaradas fora de qualquer função têm escopo global e podem 
//ser acessadas de qualquer parte do código.
let global = "Estou fora de qualquer função";

function mostrarGlobal() {
    console.log(global);
}

mostrarGlobal();  // Exibe "Estou fora de qualquer função"
console.log(global);  // Exibe "Estou fora de qualquer função"

//Variáveis podem ser acessadas no escopo em que foram definidas e em 
//escopos aninhados, mas não em escopos externos.
let externo = "Sou uma variável global";

function externa() {
    let interna = "Sou uma variável local";

    function internaFunc() {
        console.log(externo);  // Acessa a variável global
        console.log(interna);  // Acessa a variável local
    }

    internaFunc();
}

externa();  // Exibe "Sou uma variável global" e "Sou uma variável local"


//Exemplo1
function calcularArea(base, altura, comprimento) {
    return base * altura * comprimento;
}

let area = calcularArea(5, 10, 3);
console.log("Área do retângulo: " + area);  // Exibe "Área do retângulo: 50"


//Exemplo2
function saudacaoPersonalizada(nome, periodo) {
    if (periodo === "manhã") {
        return "Bom dia, " + nome + "!";
    } else if (periodo === "tarde") {
        return "Boa tarde, " + nome + "!";
    } else if (periodo === "noite") {
        return "Boa noite, " + nome + "!";
    } else {
        return "Olá, " + nome + "!";
    }
}

console.log(saudacaoPersonalizada("Jones", "manhã"));  // Exibe "Bom dia, Thais!"

//Exemplo3
function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

console.log(calculadora(10, 5, "+"));  // Exibe "15"
console.log(calculadora(10, 5, "/"));  // Exibe "2"

//Exemplo4
function calculadoraCompleta(num1, num2) {
    console.log("Soma: " + (num1 + num2));
    console.log("Subtração: " + (num1 - num2));
    console.log("Multiplicação: " + (num1 * num2));
    console.log("Divisão: " + (num1 / num2));
}

calculadoraCompleta(10, 5);
