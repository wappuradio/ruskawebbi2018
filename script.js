var video = document.getElementById("video"),
    videoBtn = document.getElementById("video-btn"),
    radio = document.getElementById("radio"),
    radioBtn = document.getElementById("radio-btn"),
    main = document.getElementById("main");

function playPause(elem, cls) {
  if (elem.paused) {
    elem.play();
    main.classList.add("-" + cls);
  }
  else {
    elem.pause();
    main.classList.remove("-" + cls);
  }
}

videoBtn.addEventListener("click", function() {
  console.log("moi");
  playPause(video, "video");
});

radioBtn.addEventListener("click", function() {
  console.log("moi");
  playPause(radio, "radio");
});
