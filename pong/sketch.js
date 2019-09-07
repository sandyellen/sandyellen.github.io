//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [242,78,9]
let velocidadeX = 3;
let velocidadeY = 3;

//Váriaveis Raquete
let alturaRaquete = 100;
let larguraRaquete = 20;

//Váriaveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [255,255,255];

//Váriaveis Raquete do Oponente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [255,0,0];

//Váriaveis  placar
let pontosMeus = 0;
let pontosOponente = 0;

let ponto;
let raquetada;

function preload(){
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}


//Configuraçaõ Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+" Altura: "+altura);
  
}

//Desenha - Looping infinito while(1)
function draw() {
  background(0,0,0);
  //Se os pontosMeus não forem maiores ou 
  //iguais a 10 ou os pontos do oponente
  //não forem maiores ou igual a 10, então
  //JOGA!
  if(!(pontosMeus >= 10 || pontosOponente >=10))
    jogo();
  else
    mostraVencedor();
  
  }//draw - desenha

  function mostraVencedor(){
    if(pontosMeus >= 10){
        fill(255,130,0);
        rect(300,0,300,400);
        textAlign(CENTER);
        fill(0);
        textSize(30);
        text("Lado direito é campeão",300,200);
     }else{
        fill(255,130,0);
        rect(0,0,300,400);
        textAlign(CENTER);
        fill(0);
        textSize(30);
        text("Lado esquerdo é campeão",300,200);
      
   }
    
  }

function jogo(){
mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  marcaPonto();
  mostrarPlacar();
}

function mostrarPlacar(){
  textSize(30);
  strokeWeight(4);
  stroke(93,36,173);
  
  
  fill(0,200,0);
  rect(425,15,60,30,10);
  rect(125,12,60,35,10);
  
  fill(0,220,0);
  textAlign(CENTER);//Alinhamento centralizado do texto
  text(pontosMeus, 450, 40);
  text(pontosOponente, 150, 40);
  
  
}

function marcaPonto(){
  if(xBolinha < 10){
    //Incrementar os pontos
    pontosMeus += 1;
    ponto.play();
}
  if(xBolinha > 590){
    pontosOponente += 1;
    ponto.play();
}
   print("Meu pontos: "+pontosMeus+" Oponente: "+pontosOponente);
  
}//Função marca ponto não me apague
//criação das funções


function verificaColisaoRaquete(){
if(xBolinha + raio > xMinhaRaquete 
   && yBolinha -raio < yMinhaRaquete + alturaRaquete
   && yBolinha +raio > yMinhaRaquete){
  
  if(!(xBolinha < 300 && velocidadeX > 0 ||
      xBolinha > 300 && velocidadeX < 0)){
      velocidadeX *= -1;
        raquetada.play();
  
}
}//Minha raquete
  if(xBolinha - raio < xRaqueteOponente + larguraRaquete &&
     yBolinha - raio < yRaqueteOponente + alturaRaquete &&
     yBolinha + raio > yRaqueteOponente){
     velocidadeX *= -1;
    
      if(!(xBolinha < 300 && velocidadeX > 0 ||
      xBolinha > 300 && velocidadeX < 0)){
      velocidadeX *= -1;
        raquetada.play();
        
  
}
  }

}//Não me delete
   
  function movimentaMinhaRaquete(){
    if(keyIsDown(UP_ARROW)){//SETA_Para_Cima - 87 w
      if(yMinhaRaquete < 0){
      yMinhaRaquete = 0; //Corrigindo
      }else{
    yMinhaRaquete -= 10;//Velocidade da Raquete
     
      }
  }
    
 
  if(keyIsDown(DOWN_ARROW)){//SETA_Para_Baixo - 83 s
    if(yMinhaRaquete > 300){
    yMinhaRaquete = 300; //Corrigindo
    }else{
    yMinhaRaquete += 10;//Velocidade da Raquete
    }
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){//SETA_Para_Cima - 87 w
      if(yRaqueteOponente < 0){//Em cima
      yRaqueteOponente = 0; //Corrigindo
      }else{
    yRaqueteOponente -= 10;//Velocidade da Raquete
     
      }
  }
    
 
  if(keyIsDown(83)){//SETA_Para_Baixo - 83 s
    if(yRaqueteOponente > 300){//Embaixo
    yRaqueteOponente = 300; //Corrigindo
    }else{
    yRaqueteOponente += 10;//Velocidade da Raquete
    }
  }
    
}

function mostraRaquete(){
  //Mostra Raquete á direita
fill(corMinhaRaquete);
rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  //Mostra Raquete do Oponente á esquerda
  fill(corRaqueteOponente);
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function verificaColisao(){
   //Colisão Horizontal com bordas laterais
  if(xBolinha + raio > largura || xBolinha - raio < 0){
    //velocidadeX = velocidadeX * -1
    velocidadeX *= -1;
  }
  //Colisão Vertical com bordas superior e inferior
  if(yBolinha + raio > altura || yBolinha - raio < 0){
  velocidadeY *= -1;
  }
}

function movimentaBolinha(){
  if(frameCount > 300){
//Velocidade Horizontal
xBolinha += velocidadeX;//Incremento X
//Velocidade Vertial
yBolinha += velocidadeY;//Incremento Y
  }
}

function mostraBolinha(){
noStroke();
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
}