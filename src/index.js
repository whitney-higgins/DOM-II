import "./less/index.less";

const homeBtn = document.querySelector(".nav .nav-link");
homeBtn.addEventListener("mouseover", (event) => {
  event.target.style.color = "red";
});

// KEYDOWN
const keyPressed = document.querySelector("h2");

function changeColor(event) {
  if (event.key === "Control") {
    keyPressed.style.fontWeight = "bold";
  }
}

document.addEventListener("keydown", changeColor);

// RESIZE
window.addEventListener("resize", (event) => {
  document.body.textContent = "GONE!";
});

// DOUBLE CLICK
const buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener("dblclick", (event) => {
  event.target.textContent = "Ouch!";
});

// SCROLL
const image = document.querySelector("img");

window.addEventListener("scroll", (event) => {
  image.style.visibility = "hidden";
});

// LOAD 
window.addEventListener("load", (event) => {
  document.body.style.backgroundColor = "tan";
});
