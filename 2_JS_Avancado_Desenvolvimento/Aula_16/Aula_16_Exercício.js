/*Exercício 1: Utilizando Promises com setTimeout:
Crie uma função que retorna uma Promise e simula uma operação demorada usando setTimeout. Se a operação 
for bem-sucedida, resolva a Promise, caso contrário, rejeite-a.*/

function operacaoDemorada() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let sucesso = true;
            if (sucesso) {
                resolve('Operação concluída com sucesso!');
            } else {
                reject('Erro na operação.');
            }
        }, 3000);
    });
}

operacaoDemorada()
    .then(function(mensagem) {
        console.log(mensagem);
    })
    .catch(function(erro) {
        console.error(erro);
    });


/*Exercício 2: Refatorando com async/await:
Refaça o exercício anterior utilizando async/await ao invés de Promises encadeadas.*/

async function executarOperacao() {
    try {
        let resultado = await operacaoDemorada();
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

executarOperacao();

/*Exercício 3: Consumindo uma API com async/await:
Utilize a função fetch para buscar dados de uma API pública e exibi-los no console. 
Refaça o código usando async/await.*/

async function buscarDados() {
    try {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
    }
}

buscarDados();
