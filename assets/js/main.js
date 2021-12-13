let bg = setInterval(() => {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}, 500);

// Function definition

let gameOver = function () {
  clearInterval(bg);
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = "Crashed ! Reload the page to retry.";
};

let startGame = function () {
  document.querySelector(".centered").style.display = "none";
  document.querySelector(".game-panel").style.display = "flex";

}

//<

// Variable definition

let qN = 1;

let playBtn = document.querySelector(".play-btn");
let closeBtn = document.querySelector(".close-btn");
let logo = document.querySelector(".logo");

//<

closeBtn.addEventListener("click", () => {
  gameOver();
});

playBtn.addEventListener("click", () => {
  startGame();
});
