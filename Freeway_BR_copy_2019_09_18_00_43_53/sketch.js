function setup() { //Preparação
  createCanvas(500, 400);
 // trilhaSonora.loop();
}

function draw() { //Desenha o Jogo
  background(imagemDaEstrada);    
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  verificaColisao();
  mostraPlacar();
 
}//Fim do Draw



