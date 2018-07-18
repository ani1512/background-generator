var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right,"+color1.value+", "+ color2.value+")";
	css.innerHTML = body.style.background;
}

function randomColor() {
	var color = "#";
	var letters = "0123456789ABCDEF";
	for (var i=0; i<6; i++) 
		color += letters[Math.floor(Math.random()*16)];
	return color;
}

function randomGradient(argument) {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

body.style.background = "linear-gradient(to right, #00FF00, #F00000)";
css.innerHTML = body.style.background;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient)