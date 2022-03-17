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

      console.log(random);

      buttons.forEach((button, index) => {
        button.innerHTML = q.buttons[index].content;
        button.onclick = () => {
          if (q.buttons[index].makeWin) letQuestion(random);
          else gameOver();
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
