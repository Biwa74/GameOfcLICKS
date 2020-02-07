function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(0,0,400,400);
  rect(150,150,100,100);
  button= createButton('click');
  button.position(180,190);
  button.mousePressed();
  BIGGER= rect(150, 150, 110, 110)
  
}
