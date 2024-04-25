let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  noStroke();
  fill(255, 0, 132);
  circle(mouseX, mouseY, 25);

}

function mousePressed() {
  background(0);
}