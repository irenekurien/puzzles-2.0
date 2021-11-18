var splash = document.querySelector(".splash-screen");
var video = document.getElementById("video");
var muteButton=document.querySelector(".mute-button");
video.pause();
document.addEventListener("DOMContentLoaded", async () => {
  setTimeout(() => {
    if(video.readyState>=3){
      splash.classList.add("remove-splash");
    setTimeout(() => {
      splash.remove();
    }, 2000);
    video.play();
    } 
  }, 4000);
});

muteButton.addEventListener("click", toggleMute);
function toggleMute() {
  muteButton.innerHTML = video.muted ? "<i class='fas fa-volume-up'></i>" : "<i class='fas fa-volume-mute'></i>";
  if (video.muted) video.muted = false;
  else video.muted = true;
}