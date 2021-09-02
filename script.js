const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const play_button = player.querySelector('.play');
const toggle = player.querySelector('.toggle');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

video.addEventListener('cliсk', togglePlay);
