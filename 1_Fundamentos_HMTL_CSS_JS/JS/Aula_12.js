//Elementos do DOM

//getElementById: Seleciona um elemento pelo seu ID.
let titulo = document.getElementById("meuTitulo");
console.log(titulo.innerText);

//getElementsByClassName: Seleciona elementos pela classe.
let itens = document.getElementsByClassName("item");
console.log(itens[0].innerText);

//querySelector e querySelectorAll: Seleciona elementos usando seletores CSS.
let primeiroParagrafo = document.querySelector("p");
let todosOsParagrafos = document.querySelectorAll("p");

//Modificação de Conteúdo: propriedade innerText ou innerHTML 
let titulo1 = document.getElementById("meuTitulo");
titulo.innerText = "Novo Título";

//Modificação de Estilo: Acesse a propriedade style para alterar o CSS de um elemento.
titulo.style.color = "blue";
titulo.style.fontSize = "24px";

//Atributos HTM:  getAttribute, setAttribute e removeAttribute para manipular atributos HTML.
let link = document.querySelector("a");
link.setAttribute("href", "https://www.example.com");

//Criando Elementos:Utilize document.createElement para criar novos elementos.
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é um novo parágrafo.";
document.body.appendChild(novoParagrafo);

//Removendo Elementos:Utilize removeChild ou remove para remover elementos do DOM.
let elementoParaRemover = document.getElementById("meuTitulo");
elementoParaRemover.remove();

//Adicionando Event Listeners:Utilize addEventListener para reagir a eventos
// como cliques, mouseover, e teclas pressionadas.
let botao = document.querySelector("button");
botao.addEventListener("click", function() {
    alert("Botão clicado!");
});
//ventos Comuns:click, mouseover, keydown, submit.

//Utilize addEventListener para reagir a eventos como cliques, mouseover, e teclas pressionadas.
let botao1 = document.querySelector("button");
botao1.addEventListener("click", function() {
    alert("Botão clicado!");
});

//Adicione um botão que, ao ser clicado, mude o texto do parágrafo.
let botao2 = document.querySelector("button");
botao2.addEventListener("click", function() {
    let paragrafo = document.querySelector("p");
    paragrafo.innerText = "Texto alterado!";
});

//Crie uma lista de itens. Adicione um botão para adicionar um novo item à 
//lista e outro para remover o último item.
let botaoAdicionar = document.getElementById("adicionar");
let botaoRemover = document.getElementById("remover");

botaoAdicionar.addEventListener("click", function() {
    let novoItem = document.createElement("li");
    novoItem.innerText = "Novo Item";
    document.querySelector("ul").appendChild(novoItem);
});

botaoRemover.addEventListener("click", function() {
    let lista = document.querySelector("ul");
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
});

//Crie uma imagem que, ao clicar em um botão, altere o atributo src para uma nova imagem.
let botaoImagem = document.getElementById("trocarImagem");
botaoImagem.addEventListener("click", function() {
    let imagem = document.querySelector("img");
    imagem.setAttribute("src", "novaImagem.jpg");
});
