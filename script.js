"use strict";

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector(".guessing").textContent = message;
}
// CHECK BUTTON

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector("input").value);
  console.log(guess);
  document.querySelector(".score span").textContent = score;

  // When there's no number
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  // When user win
  else if (guess === number) {
    if (score > 0) {
      document.querySelector(".number").style.padding = "35px 70px";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".score span").textContent = score;
      document.querySelector(".number").textContent = number;
      displayMessage("🎉Congratulations ");
      if (score >= highscore) {
        highscore = score;
      }
      document.querySelector(".highscore span").textContent = highscore;
    }
  }

  //When guess is too high or low
  else {
    if (score > 1) {
      score--;
      document.querySelector(".score span").textContent = score;
      displayMessage(guess > number ? "Too high" : "Too low");
    } else {
      if (score === 1) {
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "red";
        displayMessage(" 💥 You lost the game ");
        document.querySelector(".score span").textContent = --score;
      }
    }
  }
});

// AGAIN BUTTON

document.querySelector(".Again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.padding = "35px 50px";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing... ");
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("input").value = null;

  score = 20;
  document.querySelector(".score span").textContent = score;
});
