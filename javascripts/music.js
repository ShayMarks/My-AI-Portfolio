function playSong(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}

function pauseSong(audioId) {
  var audio = document.getElementById(audioId);
  audio.pause();
}

function updateProgress(audio) {
  var progressBar = document.getElementById(audio.id + "-progress");
  progressBar.value = (audio.currentTime / audio.duration) * 100;
}

function seekSong(audioId) {
  var audio = document.getElementById(audioId);
  var progressBar = document.getElementById(audioId + "-progress");
  var seekTo = audio.duration * (progressBar.value / 100);
  audio.currentTime = seekTo;
}

document.addEventListener("DOMContentLoaded", function () {
  var audios = document.querySelectorAll("audio");
  audios.forEach(function (audio) {
    audio.addEventListener("timeupdate", function () {
      updateProgress(audio);
    });
  });
});
