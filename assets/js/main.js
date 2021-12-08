document.addEventListener("DOMContentLoaded", function () {
  document.body.style.backgroundColor = "black";

  var logo = document.createElement("img");
  logo.src = "https://kodbaz.github.io/KelbazShow/assets/img/logo.png";
  logo.className = "logo";
  document.body.appendChild(logo);

  var centered = document.createElement("div");
  centered.className = "centered";
  centered.appendChild(logo);
  document.body.appendChild(centered);

  centered.style.position = "absolute";

  centered.style.left = "50%";
  centered.style.top = "50%";

  centered.style.transform = "translate(-50%, -50%)";

  var playButton = document.createElement("button");
  playButton.innerHTML = "Play";
  playButton.className = "playButton";
  centered.appendChild(playButton);

  centered.style.display = "flex";

  centered.style.flexDirection = "column";

  centered.style.justifyContent = "space-between";

  playButton.style.backgroundColor = "#09f";
  playButton.style.color = "white";
  playButton.style.padding = "10px";
  playButton.style.borderRadius = "5px";
  playButton.style.border = "none";
  playButton.style.fontSize = "1.5em";

  playButton.addEventListener("mouseover", function () {
    playButton.style.backgroundColor = "#f05";
  });
  playButton.addEventListener("mouseout", function () {
    playButton.style.backgroundColor = "#09f";
  });

  logo.style.marginBottom = "20px";

  setInterval(function () {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, 500);
});
