let bg = setInterval(() => {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}, 500);

//<

// Variable definition

let qN = 1;

let playBtn = document.querySelector(".play-btn");
let closeBtn = document.querySelector(".close-btn");
let logo = document.querySelector(".logo");
let buttons = document.querySelectorAll(".quiz-btn");
let question = document.querySelector(".question-container");

//<

// Function definition

function gameOver() {
  clearInterval(bg);
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = "Crashed ! Reload the page to retry.";
}

function letQuestion() {
  fetch("assets/data/questions.json", (data) => {
    question.innerHTML = "ok";
    data.json().then((jsonData) => {
      question.innerHTML = JSON.stringify(jsonData);
    });
  });
}

function startGame() {
  document.querySelector(".centered").style.display = "none";
  document.querySelector(".game-panel").style.display = "flex";

  letQuestion();
}

//<

closeBtn.addEventListener("click", () => {
  gameOver();
});

playBtn.addEventListener("click", () => {
  startGame();
});
