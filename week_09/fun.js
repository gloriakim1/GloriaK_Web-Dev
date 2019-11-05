
function switchTitle(){
	document.getElementById("reading1").innerHTML = "What is Web 2.0? <br> - Tim O'Reilly, 2005";
}

function switchTitle2(){
	document.getElementById("reading1").innerHTML = "Web Squared <br> - Tim O'Reilly & John Battelle, 2009";
}

document.addEventListener("keydown", event => {
	if(event.keyCode === 32){
		changeColor();
	}
})

function changeColor(){
	var color = document.getElementById("color").value;
	document.body.style.background = "black";
	document.getElementById("content").style.color = "white";
}

document.getElementById("hover").addEventListener("mouseover", mouseOver);
document.getElementById("hover").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("hover").style.color = "black";
}

function mouseOut() {
  document.getElementById("hover").style.color = "lavender";
}