var submit = document.getElementById('submit');
var makeStory = function(){
	var myStory = document.getElementById("story");
	var noun = document.getElementById("noun_in").value;
	var adj = document.getElementById("adj_in").value;
	var person = document.getElementById("person_in").value;
	myStory.innerHTML = "After hiding the painting in his " + 
	noun + " for two years, he grew " + adj + 
	" and tried to sell it to " + person + 
	" in Florence, but was caught.";

};

submit.addEventListener("click", makeStory);

        
//toggle hide show //

function show() {
  var x = document.getElementById("story");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
}

