var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var copyButton = document.querySelector(".copyButton");


const setGradient = () => {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};

const copyGradientToClipboard = (color) => {
	console.log(css.textContent)
	navigator.clipboard.writeText(css.textContent)
		.then(() => {
			console.log("Color copied to clipboard successfully");
		})
		.catch(err => {
			console.error('Failed to copy color ', err);
		});
};


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
copyButton.addEventListener("click", copyGradientToClipboard);

