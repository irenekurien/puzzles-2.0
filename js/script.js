var splash = document.querySelector(".splash-screen");
var video = document.getElementById("video");
var muteButton=document.querySelector(".mute-button");
var circle=document.querySelector(".button-circle");
video.pause();
document.addEventListener("DOMContentLoaded", async () => {
  setTimeout(() => {
    splash.classList.add("remove-splash");
    setTimeout(() => {
      splash.remove();
    }, 2000);
    video.play();
  }, 4000);
});

muteButton.addEventListener("click", toggleMute);
function toggleMute() {
  if (video.muted) video.muted = false;
  else video.muted = true;
  muteButton.classList.toggle("mute-button-active");
}