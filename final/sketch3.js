//global variables
var img1, img2, img3, img4, img5;


function preload(){

	//load images
	img1 = loadImage("staff.png");
	img2 = loadImage("treble_clef.png");
	img3 = loadImage("bass_clef.png");
	img4 = loadImage("arrow.jpeg");
	img5 = loadImage("whole_note.png");

}

function setup(){

	// create canvas in a div
	var canvas = createCanvas(windowWidth, windowHeight);     // canvas fills window
		canvas.parent("canvas");

}

//resize canvas to window size but doesnt really work
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){

	// display staff image
	image(img1, 500, 100, 700, 100);
	// arrow 
	image(img4, 530, 215, 25, 70);

	let t = "clef"  
 	textSize(30);
 	fill(210, 226, 241);
 	text(t, 510, 300, 280, 120);

 	// treble clef
 	image(img2, 500, 400, 50, 90);

 	let x = " = treble clef: notes to the right of middle C"  
 	textSize(20);
 	text(x, 610, 420, 280, 120);

 	// bass clef
 	image(img3, 490, 550, 70, 60);

 	let y = " = bass clef: notes to the left of middle C"  
 	text(x, 610, 560, 280, 120);

 	// notes on staff
 	image(img5, 650, 139, 75, 50);
 	image(img5, 700, 131, 75, 50);
 	image(img5, 750, 123, 75, 50);
 	image(img5, 800, 116, 75, 50);
 	image(img5, 850, 108, 75, 50);
 	image(img5, 900, 101, 75, 50);
 	image(img5, 950, 93, 75, 50);

 	let z = "E C A F"
 	textSize(13);
 	fill(252, 15, 3);
 	text(z, 620, 114, 10, 200);

}

