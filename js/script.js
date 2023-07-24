var text = document.querySelector(".text");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg = document.getElementById("gradient");

function setGradient(){
    bg.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    text.style.background = "#fff";
    text.textContent = bg.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);