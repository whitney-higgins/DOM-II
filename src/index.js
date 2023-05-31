import "./less/index.less";

const homeBtn = document.querySelector(".nav .nav-link");
homeBtn.addEventListener("mouseover", (event) => {
  event.target.style.color = "red";
});

const keyPressed = document.querySelector("h2");

function changeColor(event) {
  if (event.key === "Control") {
    keyPressed.style.fontWeight = "bold";
  }
}

document.addEventListener("keydown", changeColor);

// const mainImg = document.querySelector(".intro img");
// console.log(mainImg);

// mainImg.addEventListener("focus", (event) => {
//   event.
// });

const buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener("dblclick", (event) => {
  event.target.textContent = "Ouch!";
});
