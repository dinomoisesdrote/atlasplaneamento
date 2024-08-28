



// JavaScript


let spanBotao = document.getElementById('meuBotao');

spanBotao.addEventListener('click', () => {
  window.location.href = 'galeria.html'; 
});


// Obter o elemento do link
//const galleryLink = document.getElementById('slider');

// Adicionar o evento de clique
//galleryLink.addEventListener('click', function(event) {
  // Prevenir o comportamento padrão do link (recarregar a página)
  //event.preventDefault();

  // Redirecionar o usuário para a página "galeria.html"
 // window.location.href = 'galeria.html';
//});











function abrirGaleria() {
  // Lógica para abrir a página da galeria
  console.log("Botão clicado! Abrindo a galeria...");
}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {});
});


// Adicione o evento de clique ao elemento
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", abrirGaleria);




// Seleciona todos os slides
const slides = document.querySelectorAll('.slide');

// Adiciona um evento de clique em cada slide
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    // Redireciona o usuário para a página da galeria
    window.location.href = 'galeria.html';
  });
});



// Adiciona um evento de clique no título H1
h1.addEventListener('click', () => {
  // Redireciona o usuário para a página da galeria
  window.location.href = 'galeria.html';
});
// Seleciona o título H1
const h1 = document.querySelector('h1');

// Adiciona um evento de hover ao título H1
h1.addEventListener('mouseover', () => {
  h1.style.backgroundColor = 'lightblue'; // Altera a cor de fundo ao passar o mouse
});

h1.addEventListener('mouseout', () => {
  h1.style.backgroundColor = ''; // Remove a cor de fundo ao retirar o mouse
});

// Adiciona um evento de clique ao título H1
h1.addEventListener('click', () => {
  window.location.href = 'galeria.html'; // Redireciona para a página da galeria ao clicar
});












