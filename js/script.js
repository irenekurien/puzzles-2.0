var splash = document.querySelector(".splash-screen");
var video = document.getElementById("video");
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
function c() {
  if (video.muted) video.muted = false;
  else video.muted = true;
}