var menu = 1;
var largura = 400;
var altura = 100;
var xMenu = 100;
var yMenu1 = 80;
var yMenu2 = 250;
var yMenu3 = 420;
var xVolta = 50;
var yVolta = 450;
var vLargura = 50;
var vAltura = 50;

function setup() {
  createCanvas(600, 600);  
    
}

function draw() {
  textStyle(NORMAL);
  ellipse( mouseX, mouseY, 20, 20 );
  
  
  if (menu == 1){
    
    background(20);
    textAlign(CENTER);
    textSize(30);
    
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 +altura){
    stroke(200);
    fill(120);
    rect(xMenu, yMenu1, largura, altura, 30);
      if(mouseIsPressed){
        menu = 2;
      }
    }
    
    fill(480);
    noStroke();
    text("Jogar", 300, 140);
    
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 +altura){
    stroke(200);
    fill(120);
    rect(xMenu, yMenu2, largura, altura, 30);
      if(mouseIsPressed){
        menu = 3;
      }
    }
      
    fill(480);
    noStroke();
    text("Instruções", 300, 310);
    
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 +altura){
    stroke(200);
    fill(120);
    rect(xMenu, yMenu3, largura, altura, 30);
      if(mouseIsPressed){
        menu = 4;
      }
    }
      
    fill(480);
    noStroke();
    text("Créditos", 300, 480);
    
    
  }
  
  if (menu == 2){
    background(20); 
    textAlign(CENTER);
    textSize(30);
    
  stroke(200);
    fill(120);
      if(mouseIsPressed){
        menu = 2.5;
      }
    
  }
  
  if (menu == 3){
    background(20);
    textAlign(CENTER);
    textSize(20);
    
    text("ECT2203 - LÓGICA DE PROGRAMAÇÃO - T05 (2021.2)", 300, 40);
    
    text("O jogo criado para este trabalho é um simples prototipo\nque visa testar e avaliar as habilidades\nmotoras e criativas a fim do desestresse", 300, 120);
    
    if (mouseX > xVolta && mouseX < xVolta + vLargura && mouseY > yVolta && mouseY < yVolta +vAltura){
      if(mouseIsPressed){
        menu = 1;
      }
    }
    stroke(200);
    fill(120);
    rect(xVolta, yVolta, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 150, 510);
  }
  
  if (menu == 4){
    background(20);
    textAlign(CENTER);
    textSize(20);
    
    text("Créditos", 300, 40);  
    
    text("João: Programação\nMaria: Direção", 300, 140);  
    
    if (mouseX > xVolta && mouseX < xVolta + vLargura && mouseY > yVolta && mouseY < yVolta +vAltura){
      if(mouseIsPressed){
        menu = 1;
      }
    }
    stroke(200);
    fill(120);
    rect(xVolta, yVolta, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 150, 510);
  }
}