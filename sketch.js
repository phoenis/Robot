function setup() {
  createCanvas(800,600);
  background(240);
}

function draw() {
  scale(0.96,0.96);
  
  // lines
  strokeWeight(2);
  stroke(0);
  line(width/2,170,width/2-40,91);
  line(width/2,170,width/2+50,20);
  line(width/2,170,width/2+100,210);
  
  // vertical lines
  line(width/2,170,width/2,430);
  line(width/2-18,170,width/2-18,430);
  line(width/2+18,170,width/2+18,430);
  
  // circles
  noStroke();
  
  fill(0);                         // testa
  ellipse(width/2,170,150,150);
  
  fill(255);                       // bianco  
  ellipse(415,160,55,55);
  
  fill(0);                         // pupilla
  ellipse(415,160,10,10);

  fill(130);                         // grigio 1
  ellipse(370,157,18,18);

  fill(130);                         // grigio 2
  ellipse(440,125,15,15);

  fill(130);                         // grigio 3
  ellipse(450,170,10,10);
  
  // grey circle
  fill(130);
  ellipse(width/2-20,height/2+240,120,120);
  
  // rect
  fill(0);
  rect(width/2-95,height/2+30,150,210);
  
  // grey bar
  fill(130);
  rect(width/2-95,height/2+55,150,13);
  
  
  
  
  
  
  
  
  
  
  
}