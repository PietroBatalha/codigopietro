//primeira variável - selecionei o id titulo da tag titulo
let titulo = document.getElementById("titulo");
//segunda variável - selecionei o id meuBotao da tag botao
let meuBotao = document.getElementById("meuBotao");
//terceira variável - selecionei o id conteudo da tag conteudo
let conteudo = document.getElementById("conteudo");

//adicionei conteudo na tag h1
titulo.textContent = "titulo modificado"

//adicionei um clique que adiciona o comando 
meuBotao.addEventListener("click", function(){
    conteudo.textContent = "o botão foi clicado!";
});

//adicionei a clase no parágrafo do id conteúdo
conteudo.classList.add('conteudo');

//adicionando uma classe no titulo no id titulo
titulo.classList.add('tituloClasse')