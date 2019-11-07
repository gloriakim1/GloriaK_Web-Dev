var ground, ground1, ground2, ground3, bush; 
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;
let img;
var butterfly;

// function preload(){
// 	butterfly = loadImage("butterfly.png");
//	sparkles = loadImage("sparkles.png");
// }

function setup(){

	createCanvas(900, 600);

	//background gradient
	c2 = color(64, 138, 237);
	c1 = color(6, 33, 69);
	setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
  	setGradient(0, 0, windowWidth, windowHeight, c2, c1, X_AXIS);

  	filter(BLUR, 3);

  	// image(img, 400, 300);

}

function draw(){

	//moon
	fill(227, 230, 211)
	ellipse(695, 100, 50, 50);

	//trees
	push();
	translate(0, -50);
	tree();
	translate(0, 50);
	translate(30, 0);
	tree();
	translate(100, 50);
	tree();
	translate(250, -50);
	tree();
	translate(20, 0);
	tree();
	translate(200, -50);
	tree();
	translate(10, 0);
	tree();
	translate(180, 0);
	tree();
	pop();
 
 	//foreground
 	fill(79, 62, 8);
 	noStroke();
 	ground = rect(0, 350, 900, 250);
 	fill(107, 87, 24);
 	ground1 = quad(100, 355, 358, 550, 386, 355, 300, 500);
 	ground2 = quad(600, 355, 658, 550, 886, 355, 700, 550);
 	fill(43, 35, 8);
 	ground3 = quad(128, 550, 500, 405, 686, 655, 500, 450);

 	//bushes
 	push();
 	translate(600, -80);
 	bush();
 	translate(-550, 60);
 	bush();
 	translate(50, 10);
 	bush();
 	pop();

 	// cursor(none);
 	// image(butterfly, mouseX, mouseY, 20, 30);

}

//https://p5js.passionforcoding.org/p5/sketches/BJuUXXQL-M

function setGradient(x, y, w, h, c1, c2, axis){
	noFill();
  	if (axis == X_AXIS) {  
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function bush(){
	fill(9, 54, 12);
	ellipse(70, 510, 55, 55);
	ellipse(100, 500, 55, 55);
	ellipse(90, 480, 55, 55);
	fill(11, 69, 16);
	ellipse(130, 500, 55, 55);
	fill(18, 71, 21);
	ellipse(100, 500, 55, 55);
}

function tree(){
	fill(0);
	beginShape();
 	vertex(45, 100);
 	vertex(65, 0);
	vertex(65, 455);
	vertex(75, 50);
	vertex(50, 455);
	endShape(CLOSE);

}