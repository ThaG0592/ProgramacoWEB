// Operadores Aritméticos
let a = 10;
let b = 5;
console.log("Operadores Aritméticos:");
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo:", a % b);

// Operadores de Comparação
let x = 10;
let y = 5;
console.log("Operadores de Comparação:");
console.log("Igual:", x == y);
console.log("Estritamente Igual:", x === y);
console.log("Diferente:", x != y);
console.log("Estritamente Diferente:", x !== y);
console.log("Maior que:", x > y);
console.log("Maior ou Igual:", x >= y);
console.log("Menor que:", x < y);
console.log("Menor ou Igual:", x <= y);

// Operadores Lógicos (+ com + = + // + com  - = -// - com  - = + )
let c = true;
let d = false;
console.log("Operadores Lógicos:");
console.log("E:", c && d);
console.log("Ou:", c || d);
console.log("Não (c):", !c);
console.log("Não (d):", !d);

// Estrutura if-else
let idade = 18;
if (idade > 21) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Estrutura else-if
let nota = 85;
if (nota >= 90) {
    console.log("Nota: A");
} else if (nota >= 80) {
    console.log("Nota: B");
} else if (nota >= 70) {
    console.log("Nota: C");
} else if (nota >= 60) {
    console.log("Nota: D");
} else {
    console.log("Nota: F");
}

// Estrutura switch
let dia = 3;
let diaDaSemana;
switch (dia) {
    case 1:
        diaDaSemana = "Domingo";
        break;
    case 2:
        diaDaSemana = "Segunda-feira";
        break;
    case 3:
        diaDaSemana = "Terça-feira";
        break;
    case 4:
        diaDaSemana = "Quarta-feira";
        break;
    case 5:
        diaDaSemana = "Quinta-feira";
        break;
    case 6:
        diaDaSemana = "Sexta-feira";
        break;
    case 7:
        diaDaSemana = "Sábado";
        break;
    default:
        diaDaSemana = "Dia inválido";
}
console.log("Dia da semana:", diaDaSemana);
