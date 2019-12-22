// global variables
var img1, img2, img3, img4, img5, img6, img7;
var bg;



// loading images
function preload(){
	bg = loadImage("sheet_music.png");

	img1 = loadImage("sixteenth_note.png");
	img2 = loadImage("eighth_note.png");
	img3 = loadImage("quarter_note.png");
	img4 = loadImage("half_note.png");
	img5 = loadImage("dotted_half.png");
	img6 = loadImage("whole_note.png");
	img7 = loadImage("speech.png");

}

function setup(){

	//create a p5 canvas inside of an HTML div
	var canvas = createCanvas(windowWidth, windowHeight);     // canvas fills window
		canvas.parent("canvas");
	
	// soundFormats("mp3");
	// sound = loadSound("...");

	// note = new Note(width/2, height/2, 50);

}

// resizes canvas to window size ** doesnt completely work, window must be refreshed
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){

	background(255);

	let t = "1 whole note = 4 quarter notes \
	1 whole note = 2 half notes \
	1 whole note = 8 eighth notes \
	1 half note = 2 quarter notes"  
 	textSize(20);
 	fill(210, 226, 241);
 	text(t, 570, 0, 280, 120)

  // hover constraints for opacity

 	if (mouseX > 280 && mouseX < 370 
 		&& mouseY > 297 && mouseY < 377){
 		tint(255, 255);                      //half opacity
 		image(img1, 280, 297, 90, 80);
 		tint(255, 127);                      //half opacity
 		image(img2, 430, 297, 95, 80);
 		image(img3, 580, 300, 80, 78);
 		image(img4, 730, 305, 88, 73);
 		image(img5, 880, 303, 90, 75);
 		image(img6, 1030, 300, 105, 80); 
 		image(img7, 310, 190, 170, 120)      //speech bubble
 		let t = "sixteenth note = 1/4 beat"  
 		textSize(20);
 		fill(210, 226, 241);
 		text(t, 320, 215, 170, 120)

 }  else if (mouseX > 430 && mouseX < 525 
 		&& mouseY > 297 && mouseY < 377){
		tint(255, 127);                      //half opacity
 		image(img1, 280, 297, 90, 80);     
 		tint(255, 255);                      //full opacity
 		image(img2, 430, 297, 95, 80);
 		tint(255, 127);                      //half opacity
 		image(img3, 580, 300, 80, 78);
 		image(img4, 730, 305, 88, 73);
 		image(img5, 880, 303, 90, 75);
 		image(img6, 1030, 300, 105, 80);
 		image(img7, 450, 190, 170, 120)      //speech bubble
 		let t = "eighth note = 1/2 beat"  
 		textSize(20);
 		fill(210, 226, 241);
 		text(t, 460, 215, 170, 120)

 }  else if (mouseX > 590 && mouseX < 670 
 		&& mouseY > 297 && mouseY < 377){
		tint(255, 127);                      //half opacity
 		image(img1, 280, 297, 90, 80);
 		image(img2, 430, 297, 95, 80);
 		tint(255, 255);                      //full opacity         
 		image(img3, 590, 300, 80, 78);
 		tint(255, 127);                      //half opacity
 		image(img4, 730, 305, 88, 73);
 		image(img5, 880, 303, 90, 75);
 		image(img6, 1030, 300, 105, 80);
 		image(img7, 600, 190, 170, 120)      //speech bubble
 		let t = "quarter note = 1 beat"  
 		textSize(20);
 		fill(210, 226, 241);
 		text(t, 610, 215, 170, 120)	

 }  else if (mouseX > 730 && mouseX < 818 
 		&& mouseY > 297 && mouseY < 377){
		tint(255, 127);                      //half opacity
 		image(img1, 280, 297, 90, 80);
 		image(img2, 430, 297, 95, 80);        
 		image(img3, 580, 300, 80, 78);
 		tint(255, 255);                      //full opacity 
 		image(img4, 730, 305, 88, 73);
 		tint(255, 127);                      //half opacity
 		image(img5, 880, 303, 90, 75);
 		image(img6, 1030, 300, 105, 80);
 		image(img7, 745, 190, 170, 120)      //speech bubble
 		let t = "half note = 2 beats"  
 		textSize(20);
 		fill(210, 226, 241);
 		text(t, 755, 215, 170, 120)

 }  else if (mouseX > 880 && mouseX < 970 
 		&& mouseY > 297 && mouseY < 377){
		tint(255, 127);                      //half opacity
 		image(img1, 280, 297, 90, 80);
 		image(img2, 430, 297, 95, 80);        
 		image(img3, 580, 300, 80, 78);
 		image(img4, 730, 305, 88, 73);
 		tint(255, 255);                      //full opacity  
 		image(img5, 880, 303, 90, 75);
 		tint(255, 127);                      //half opacity
 		image(img6, 1030, 300, 105, 80);
 		image(img7, 900, 190, 170, 120)      //speech bubble
 		let t = "dotted half note = 3 beats"  
 		textSize(20);
 		fill(210, 226, 241);
 		text(t, 905, 215, 170, 120)
 		

 }  else if (mouseX > 1030 && mouseX < 1135 
 		&& mouseY > 297 && mouseY < 377){
		tint(255, 127);                      //half opacity
 		image(img1, 280, 297, 90, 80);
 		image(img2, 430, 297, 95, 80);        
 		image(img3, 580, 300, 80, 78);
 		image(img4, 730, 305, 88, 73);
 		image(img5, 880, 303, 90, 75);
 		tint(255, 255);                      //full opacity  
 		image(img6, 1030, 300, 105, 80);
 		image(img7, 1040, 190, 170, 120)     //speech bubble
 		let t = "whole note = 4 beats"  
 		textSize(20);
 		fill(210, 226, 241);
 		text(t, 1060, 215, 170, 120)
 		

 }  else{     // automatically display all notes full opacity

  	tint(255, 255);    
 	image(img1, 280, 297, 90, 80);
 	image(img2, 430, 297, 95, 80);
 	image(img3, 590, 300, 80, 78);
 	image(img4, 730, 305, 88, 73);
 	image(img5, 880, 307, 80, 70);
 	image(img6, 1030, 300, 105, 80);
  	
  }


	let y = "The same applies for rests!"  
 	textSize(30);
 	fill(210, 226, 241);
 	text(y, 530, 550, 650, 120);




}

// function mousePressed() {
//   if (note.contains(mouseX, mouseY)){
//   		sound.play();
//   }
// }
