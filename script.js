var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// body.style.background = "yellow";
function setGradient() {
		body.style.background ="linear-gradient(to right," + color1.value + "," + color2.value + ")"; 
		css.textContent = body.style.background + ".";
	} 
// input event gets triggered and calls the function automatically and hence no need to put setGradient()
	color1.addEventListener("input" ,  setGradient );
	color2.addEventListener("input" ,  setGradient );	


