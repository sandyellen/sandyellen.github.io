var cX = 200;
var cY = 200;

var cXSpeed =0;
var cYSpeed = 0;

var left_key_pressed = false
var up_key_pressed = false
var right_key_pressed = false
var down_key_pressed = false

var targetX = 100;
var targetY = 100;
var hit = 0;

//Variáveis do placar
var pontosMeus = 0;
var pontosOponente = 0;

var ponto;

//Função do placar
function setup() {
  createCanvas(400, 400);
}

//Desenhar placar
function draw() { //Desenha jogo
  
  if(frameCount < 100){
  telaInicial();
  }else{ //Passou os 12 segundos iniciais
  jogo();
  }
}//Fim do draw

function telaInicial(){
fill("deepSkyBlue");//Preenchimento do retângulo
  rect(0, 0, 500, 400);
  fill("deepPink");
  textAlign(CENTER);
  textSize(20);
  text("SENAI - Serviço Nacional de Aprendizagem",          200,120);
  text("Industrial",200, 140);
  text("Programador de Computador", 200,160);
  text("Professor Tarcísio Nunes", 200,180);
  text("Sandy Ellen e Camilly Lupas", 200,200);
  
  
  
  
}

function jogo(){
  colorMode(HSB)
  background(0,50,100);
  fill(250,100,100)
  ellipse(cX,cY,20)
  fill(0,hit,100)
  ellipse(targetX,targetY,40);
  moveCircle();
  collision();
  mostrarPlacar();
  
 //marcaPonto();
  


}

function mostrarPlacar(){
  textSize(30);
  strokeWeight(4);
  stroke(950,38,174);
  
  
  fill(0,200,2);
  rect(425,15,60,30,10);
  rect(125,12,60,35,10);
  
  fill(0,220,0);
  textAlign(CENTER);//Alinhamento centralizado do texto
  //text(pontosMeus, 450, 40);
  text(pontosOponente, 150, 40);
}




function keyPressed(){
if(keyCode == LEFT_ARROW){
left_key_pressed = true;  
}  
if(keyCode == UP_ARROW){
up_key_pressed = true;  
}  
if(keyCode == RIGHT_ARROW){
right_key_pressed = true;  
}  
if(keyCode == DOWN_ARROW){
down_key_pressed = true;  
	}  
}

function keyReleased(){
if(keyCode == LEFT_ARROW){
left_key_pressed = false;  
}  
if(keyCode == UP_ARROW){
up_key_pressed = false;  
}  
if(keyCode == RIGHT_ARROW){
right_key_pressed = false;  
}  
if(keyCode == DOWN_ARROW){
down_key_pressed = false;  
	}  
}

function moveCircle(){
cXSpeed *= 0.96;
cYSpeed *= 0.96;
cX += cXSpeed;
cY += cYSpeed;
if(left_key_pressed){
cXSpeed += -0.3 
	}
if(up_key_pressed){
cYSpeed += -0.3 
	}
if(right_key_pressed){
cXSpeed += 0.3 
	}
if(down_key_pressed){
cYSpeed += 0.3 
	}
  
if(cX > width || cX < 0){
cXSpeed *= -1  
}
if(cY > height || cY < 0){
cYSpeed *= -1  
}
}

function collision(){
if(dist(cX,cY,targetX,targetY) < 30){
hit = 100;
targetX = random(0,width);
targetY = random(0,height);
  pontosOponente++;
}
else{
hit = 0
}
}







