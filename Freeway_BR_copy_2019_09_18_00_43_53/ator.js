//ator.js
let yAtor = 366;
let xAtor = 100;
let colidiu = false;
let placar = 0;

function mostraPlacar(){
  
  if(yAtor < 15){ //Marca ponto!
    placar += 1;
    voltaAtorParaPosicaoInicial();
    somPonto.play();
    }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(placar, 180, 30);
}

function verificaColisao(){
  //collideRectCircle(rx, ry, rComprimento, rAltura, cx, cy, diameter)
  for(let i=0; i < imagensCarros.length; i++){
    //Pergunta se colidiu, recebe resposta true ou false
    
    colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], altura, xAtor, yAtor,15);
    
    if(colidiu){
      console.log("Colidiu");
      voltaAtorParaPosicaoInicial();
      somColidiu.play();
      
      if(placar > 0) //Só tira ponto se for maior que ZERO
         placar -= 1; //Perde ponto
      
    }//Fim do if    
  }//Fim do for  
}//Fim do verificaColisao

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, 30, 30);
  

}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    //Se a seta para cima for pressionada
    //E o yAtor maior que 5, então sobe.
    if(yAtor > 5)
      yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor < 366)
      yAtor += 3;
  }
  
  //Mostrar Ator2

function mostraAtor2(){
  image(imagemDoAtor2,xAtor2, yAtor2, 30, 30);
  
}


function movimentaAtor2(){
  if (keyIsDown(UP_ARROW)) {
    //Se a seta para cima for pressionada
    //E o yAtor maior que 5, então sobe.
    if(yAtor2 > 5)
      yAtor2 -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor2 < 366)
      yAtor2 += 3;
    
    }
  }
}
