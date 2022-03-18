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
let lives = document.querySelector("#live-container");
let buttons = document.querySelectorAll(".quiz-btn");
let question = document.querySelector(".question-container");

//<

// Functions definitions

function handleLives() {
  lives.innerText = lives.innerText.slice(0, lives.innerText.length - 1);

  buttons.forEach((btn) => {
    btn.style.backgroundColor = "#ff0000";
  });

  if (lives.innerText.length <= 0) return gameOver();

  setTimeout(() => {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "#ffffff";
    });
  }, 1000);
}

function gameOver() {
  clearInterval(bg);
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = "Crashed ! Reload the page to retry.";
}

function letQuestion(n) {
  fetch("./assets/data/questions.json")
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      let random = Math.floor(Math.random() * data.length);
      if (n != undefined && random === n) {
        if (n === data.length - 1) random = 0;
        else random++;
      }
      let q = data[random];

      question.innerHTML = q.question;

      buttons.forEach((button, index) => {
        button.innerHTML = q.buttons[index].content;
        button.onclick = () => {
          if (q.buttons[index].makeWin) letQuestion(random);
          else handleLives();
        };
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
