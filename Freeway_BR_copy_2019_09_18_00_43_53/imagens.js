//imagens.js
//Definição das variáveis do Jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoAtor2;
let imagensCarros = []; //Array de Imagens
//Sons
let trilhaSonora;
let somColidiu;
let somPonto;

function preload(){
  //Pré-carregamento dos sons
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
  
  //Pré-carregamento das imagens nas variáveis
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoAtor2 = loadImage("imagens/ator-1.png");
  imagensCarros[0] = loadImage("imagens/carro-1.png");
  imagensCarros[1] = loadImage("imagens/carro-2.png");
  imagensCarros[2] = loadImage("imagens/carro-3.png");
  //Mais 3 carrinhos
  imagensCarros[3] = loadImage("imagens/carro-1.png");
  imagensCarros[4] = loadImage("imagens/carro-2.png");
  imagensCarros[5] = loadImage("imagens/carro-3.png");
  
}