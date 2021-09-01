$('video, audio').mediaelementplayer({
	// Configuration
	success: function(media) {
		var isNative = /html5|native/i.test(media.rendererName);

		var isYoutube = ~media.rendererName.indexOf('youtube');

		// etc.
	}
});


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const play_button = player.querySelector('.player__button-big');
const toggle = player.querySelector('.toggle-button');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
