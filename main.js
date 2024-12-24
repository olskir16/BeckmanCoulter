const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
let timeoutId;
let currentTime;
const textArray = ["Bulldoze Parking Lot", "Traffic Patterns", "Different View", "Building Precast and Steel", "Rooftop", "Set RTUs", "Mezzanine and SOG", "Mezzanine Walls", "Rear View", "Overall View", "Pave Parking Lot"];
const timeArray = [9000, 8000, 7000, 25000, 4000, 4000, 15000, 8000, 9000, 17000, 9000];
let i = 0;

playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    document.getElementById('text').innerText = textArray[i];
    timeoutId = setTimeout(function() {
      video.pause();
      //currentTime = video.currentTime;
      i++;
    }, timeArray[i]); // Pause after x amount of time, given by timeArray
  } else {
     clearTimeout(timeoutId);
     video.pause();
  }
});

video.addEventListener('ended', function() {
    clearTimeout(timeoutId);
});
