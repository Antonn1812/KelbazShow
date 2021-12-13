let bg = setInterval(() => {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}, 500);

let playBtn = document.querySelector(".play-btn");
let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  gameOver();
});

let gameOver = function () {
  clearInterval(bg);
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = "Crashed ! Reload the page to retry.";
  
  while (true) {
    console.log("DED !");
  }
};
