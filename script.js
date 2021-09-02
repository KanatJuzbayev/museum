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
