var menu = 1;
var vetorAni = [];
var contAni = 1;
var vetorAni2 = [];
var contAni2 = 1;
let timer = 60;
var largura = 400;
var altura = 100;
var xMenu = 760;
var yMenu1 = 380;
var yMenu2 = 550;
var yMenu3 = 720;
var xVolta = 50;
var yVolta = 850;
var vLargura = 50;
var vAltura = 50;

function preload(){
  for ( i=1; i < 45; i++){  
  vetorAni[i] = loadImage('assets/sprite/ok/tile0'+ i +'.png') 
  }
  for ( o=1; o < 61; o++){  
    vetorAni2[o] = loadImage('assets/sprite/th/tile0'+ o +'.png') 
    }
}

function setup() {
  bg = loadImage('assets/bg.png');
  met = loadImage('assets/metal.png');
  pap = loadImage('assets/papel.png');
  pla = loadImage('assets/plast.png');
  vid = loadImage('assets/vidro.png');

  cup = loadImage('assets/copo.png');
  gar = loadImage('assets/garrafa.png');
  gap = loadImage('assets/garrafapet.png');
  lat = loadImage('assets/lata.png');
  rev = loadImage('assets/revista.png');

  createCanvas(1879, 970);  
    
}

function draw() {
  textStyle(NORMAL);
  background(bg); 
  textAlign(CENTER);
  
  
  if (menu == 1){

    textSize(100);  
    text("ReciclAção", 960, 240);
    textSize(30);  

    fill(0,0,0,127);
    rect(xMenu, yMenu1, largura, altura, 30);
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
    text("Jogar", 960, 440);
    
    
    fill(0,0,0,127);
    rect(xMenu, yMenu2, largura, altura, 30);
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
    text("Tutorial", 960, 610);
    
    fill(0,0,0,127);
    rect(xMenu, yMenu3, largura, altura, 30);
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
    text("Informações", 960, 780);
    
    
  }
  
  if (menu == 2){
    
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);
    
    image(pap, 50, 650, 390, 302);
    image(met, 535, 620, 396, 300);
    image(pla, 953, 650, 406, 302);
    image(vid, 1426, 617, 411, 300);

    fill(0,0,0,127);
    rect(560, 150, 800, 400, 30);
    fill(480);
    text("A que tipo de lixo pertence o seguinte material?", 960, 210);

    image(gar, (width/2)-150, 200, 300, 300);
    if (mouseX > 1426 && mouseX < 1426 + 411 && mouseY > 617 && mouseY < 617 + 300){
      if(mouseIsPressed){
        menu = 2.1;
      }
    }else{
      if(mouseX > 50 && mouseX < 50 + 390 && mouseY > 650 && mouseY < 650 + 302 || mouseX > 535 && mouseX < 535 + 396 && mouseY > 620 && mouseY < 620 + 300 || mouseX > 953 && mouseX < 953 + 406 && mouseY > 650 && mouseY < 650 + 302){
        if(mouseIsPressed){
          menu = 2.9;    
        }
      }
    }

    image(vetorAni2[contAni2], 1600,300);
    contAni2++;
    if (contAni2 > 60){
      contAni2 = 1;
    }

  }

  if (menu == 2.1){
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);

    fill(0,0,0,127);
    rect(560, 150, 800, 200, 30);
    fill(480);
    text("Parabéns pelo Acerto!", 960, 260);

    if (mouseX > 1460 && mouseX < 1460 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 2.2;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(1460, 400, 200, 100, 30);
    fill(480);
    text("Continuar", 1560, 460);

    if (mouseX > 260 && mouseX < 260 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(260, 400, 200, 100, 30);
    fill(480);
    text("Desistir", 360, 460);

    image(vetorAni[contAni], 900,500);
    contAni++;
    if (contAni > 44){
      contAni = 1;
    }

  }

  if (menu == 2.2){
     
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);
    
    image(pap, 50, 650, 390, 302);
    image(met, 535, 620, 396, 300);
    image(pla, 953, 650, 406, 302);
    image(vid, 1426, 617, 411, 300);

    fill(0,0,0,127);
    rect(560, 150, 800, 400, 30);
    fill(480);
    text("A que tipo de lixo pertence o seguinte material?", 960, 210);

    image(cup, (width/2)-150, 230, 300, 300); 
    if (mouseX > 953 && mouseX < 953 + 406 && mouseY > 650 && mouseY < 650 + 302){
      if(mouseIsPressed){
        menu = 2.3;  
      }
    }else{
      if(mouseX > 50 && mouseX < 50 + 390 && mouseY > 650 && mouseY < 650 + 302 || mouseX > 535 && mouseX < 535 + 396 && mouseY > 620 && mouseY < 620 + 300 || mouseX > 1426 && mouseX < 1426 + 406 && mouseY > 511 && mouseY < 617 + 300){
        if(mouseIsPressed){
          menu = 2.9;    
        }
      }
    }

    image(vetorAni2[contAni2], 1600,300);
    contAni2++;
    if (contAni2 > 60){
      contAni2 = 1;
    }

  }

  if (menu == 2.3){
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);

    fill(0,0,0,127);
    rect(560, 150, 800, 200, 30);
    fill(480);
    text("Parabéns pelo Acerto!", 960, 260);

    if (mouseX > 1460 && mouseX < 1460 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 2.4;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(1460, 400, 200, 100, 30);
    fill(480);
    text("Continuar", 1560, 460);

    if (mouseX > 260 && mouseX < 260 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(260, 400, 200, 100, 30);
    fill(480);
    text("Desistir", 360, 460);

    image(vetorAni[contAni], 900,500);
    contAni++;
    if (contAni > 44){
      contAni = 1;
    }

  }

  if (menu == 2.4){

    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);
    
    image(pap, 50, 650, 390, 302);
    image(met, 535, 620, 396, 300);
    image(pla, 953, 650, 406, 302);
    image(vid, 1426, 617, 411, 300);

    fill(0,0,0,127);
    rect(560, 150, 800, 400, 30);
    fill(480);
    text("A que tipo de lixo pertence o seguinte material?", 960, 210);

    image(gap, (width/2)-150, 230, 300, 300);
    if (mouseX > 953 && mouseX < 953 + 406 && mouseY > 650 && mouseY < 650 + 302){
      if(mouseIsPressed){
        menu = 2.5;  
      }
    }else{
      if(mouseX > 50 && mouseX < 50 + 390 && mouseY > 650 && mouseY < 650 + 302 || mouseX > 535 && mouseX < 535 + 396 && mouseY > 620 && mouseY < 620 + 300 || mouseX > 1426 && mouseX < 1426 + 406 && mouseY > 511 && mouseY < 617 + 300){
        if(mouseIsPressed){
          menu = 2.9;    
        }
      }
    }

    image(vetorAni2[contAni2], 1600,300);
    contAni2++;
    if (contAni2 > 60){
      contAni2 = 1;
    }

  }

  if (menu == 2.5){
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);

    fill(0,0,0,127);
    rect(560, 150, 800, 200, 30);
    fill(480);
    text("Parabéns pelo Acerto!", 960, 260);

    if (mouseX > 1460 && mouseX < 1460 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 2.6;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(1460, 400, 200, 100, 30);
    fill(480);
    text("Continuar", 1560, 460);

    if (mouseX > 260 && mouseX < 260 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(260, 400, 200, 100, 30);
    fill(480);
    text("Desistir", 360, 460);

    image(vetorAni[contAni], 900,500);
    contAni++;
    if (contAni > 44){
      contAni = 1;
    }

  }

  if (menu == 2.6){

    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);
    
    image(pap, 50, 650, 390, 302);
    image(met, 535, 620, 396, 300);
    image(pla, 953, 650, 406, 302);
    image(vid, 1426, 617, 411, 300);

    fill(0,0,0,127);
    rect(560, 150, 800, 400, 30);
    fill(480);
    text("A que tipo de lixo pertence o seguinte material?", 960, 210);

    image(lat, (width/2)-150, 200, 300, 300);
    if (mouseX > 535 && mouseX < 535 + 396 && mouseY > 620 && mouseY < 620 + 300){
      if(mouseIsPressed){
        menu = 2.7;  
      }
    }else{
      if(mouseX > 50 && mouseX < 50 + 390 && mouseY > 650 && mouseY < 650 + 302 || mouseX > 953 && mouseX < 953 + 406 && mouseY > 650 && mouseY < 650 + 302 || mouseX > 1426 && mouseX < 1426 + 406 && mouseY > 511 && mouseY < 617 + 300){
        if(mouseIsPressed){
          menu = 2.9;    
        }
      }
    }

    image(vetorAni2[contAni2], 1600,300);
    contAni2++;
    if (contAni2 > 60){
      contAni2 = 1;
    }

  }

  if (menu == 2.7){
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);

    fill(0,0,0,127);
    rect(560, 150, 800, 200, 30);
    fill(480);
    text("Parabéns pelo Acerto!", 960, 260);

    if (mouseX > 1460 && mouseX < 1460 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 2.8;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(1460, 400, 200, 100, 30);
    fill(480);
    text("Continuar", 1560, 460);

    if (mouseX > 260 && mouseX < 260 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(260, 400, 200, 100, 30);
    fill(480);
    text("Desistir", 360, 460);

    image(vetorAni[contAni], 900,500);
    contAni++;
    if (contAni > 44){
      contAni = 1;
    }

  }

  if (menu == 2.8){
    text(timer, 50, 50);
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      menu = 1;
      timer = 60;
    }

    if (mouseX > 1800 && mouseX < 1800 + vLargura && mouseY > 25 && mouseY < 25 +vAltura){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(120);
    rect(1800, 25, vLargura, vAltura, 30);
    
    fill(480);
    noStroke();
    text("Retornar", 1720, 60);
    
    image(pap, 50, 650, 390, 302);
    image(met, 535, 620, 396, 300);
    image(pla, 953, 650, 406, 302);
    image(vid, 1426, 617, 411, 300);

    fill(0,0,0,127);
    rect(560, 150, 800, 400, 30);
    fill(480);
    text("A que tipo de lixo pertence o seguinte material?", 960, 210);

    image(rev, (width/2)-150, 230, 300, 300);
    if (mouseX > 50 && mouseX < 50 + 390 && mouseY > 650 && mouseY < 650 + 302){
      if(mouseIsPressed){
        menu = 42;  
      }
    }else{
      if(mouseX > 953 && mouseX < 953 + 406 && mouseY > 650 && mouseY < 650 + 302 || mouseX > 535 && mouseX < 535 + 396 && mouseY > 620 && mouseY < 620 + 300 || mouseX > 1426 && mouseX < 1426 + 406 && mouseY > 511 && mouseY < 617 + 300){
        if(mouseIsPressed){
          menu = 2.9;    
        }
      }
    }

    image(vetorAni2[contAni2], 1600,300);
    contAni2++;
    if (contAni2 > 60){
      contAni2 = 1;
    }

  }

  if (menu == 2.9){

    fill(0,0,0,127);
    rect(310, 150, 1300, 200, 30);
    fill(480);
    text("Infelizmente você errou, não se preocupe, a chave do sucesso é a força de vontade!", 960, 260);

    if (mouseX > 1460 && mouseX < 1460 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 2;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(1460, 400, 200, 100, 30);
    fill(480);
    text("Outra\nVez", 1560, 445);

    if (mouseX > 260 && mouseX < 260 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(260, 400, 200, 100, 30);
    fill(480);
    text("Desistir", 360, 460);
    
  }

  if (menu == 42){
    
    fill(0,0,0,127);
    rect(310, 150, 1300, 200, 30);
    fill(480);
    text("Parabéns!!! Você conseguiu separar todo o lixo corretamente\nagora vamos colocar isso em pratica na nossa vida.", 960, 250);

    if (mouseX > 1460 && mouseX < 1460 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 2;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(1460, 400, 200, 100, 30);
    fill(480);
    text("De novo!", 1560, 460);

    if (mouseX > 260 && mouseX < 260 + 200 && mouseY > 400 && mouseY < 400 + 100){
      if(mouseIsPressed){
        menu = 1;
        timer = 60;
      }
    }
    stroke(200);
    fill(0,0,0,127);
    rect(260, 400, 200, 100, 30);
    fill(480);
    text("Menu\nInicial", 360, 445);

    image(vetorAni[contAni], 900,500);
    contAni++;
    if (contAni > 44){
      contAni = 1;
    }

  }
  
  if (menu == 3){
    
    fill(0,0,0,127);
    rect(210, 250, 1500, 500, 30);
    fill(480);
    text("Ação e Reciclagem", 960, 330);
    
    text("Para jogar basta retornar ao menu principal e clicar na caixa 'Jogar' você terá\n60 segundos para responder em que lixo especifico vai aquele objeto, dependendo de seu material,\ne lembre-se\n\nMetais no recipiente Amarelo\nPapeis no recipiente Azul\nPlastico no recipiente Laranja\nVidro no recipiente Verde", 960, 400);
    
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
    text("Retornar", 150, 920);
  }
  
  if (menu == 4){
    
    fill(0,0,0,127);
    rect(260, 300, 1400, 400, 30);
    fill(480);
    text("Jogo Infantil focado em Ciência", 960, 390);  
    
    text("Jogo com o intuito de exercer a identificação dos tipos diferentes de materiais em nosso dia a dia\n e conscientizar sobre a forma adequada de trata-los.", 960, 490);  
    
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
    text("Retornar", 150, 920);
  }
}