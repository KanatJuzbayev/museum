const player = document.querySelector('.player');
let video = player.querySelector('.viewer');
const play_button = player.querySelector('.play');
const toggle = player.querySelector('.toggle');
const videoButton = player.querySelector('.video-button');


function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  console.log('клик');
}

videoButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
// player__control.addEventListener('click', togglePlay);
console.log(video);

//progress__slider
const progress__slider = document.querySelector('.progress__slider');
const progress = document.querySelector('.progress');

progress__slider.oninput = function(){
  progress.style.width = `${this.value}%` ;
};


//volume__slider
const volume__slider = document.querySelector('.volume__slider');
const volume = document.querySelector('.volume');

volume__slider.oninput = function(){
  volume.style.width = `${this.value}%` ;
};
