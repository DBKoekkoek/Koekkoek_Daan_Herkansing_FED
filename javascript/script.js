
const navi = document.querySelector("nav:nth-child(2)");
const menuButton = document.querySelector("header nav > button");

var playPauseButton = document.getElementById('playPauseButton');

//De thema's van mijn website//
const light = document.querySelector("nav:nth-child(2) section button:nth-child(1)"); 
const dark = document.querySelector("nav:nth-child(2) section button:nth-child(2)");
const custom = document.querySelector("nav:nth-child(2) section button:nth-child(3)");

const video = document.getElementById("myVideo");
const button = document.querySelector("article:first-of-type button ");

menuButton.onclick = toggleMenu;

function setTheme(theme) {
  document.body.classList.remove('light-mode', 'dark-mode', 'custom-mode');
  document.body.classList.add(theme + '-mode');
}

function toggleMenu() {
  menuButton.classList.toggle("nav-open");
  navi.classList.toggle("dropdown")
}

function toggleVideo() {
  if (video.paused) {
      video.play();

  } else {
      video.pause();
  }
}

// Add event listener for double click to toggle video playback
let clicks = 0;
button.addEventListener("click", function() {
  clicks++;
  if (clicks === 2) {
      toggleVideo();
      clicks = 0;
  }
});
