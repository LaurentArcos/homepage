const sound = new Howl({
  src: ['music.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5
});

const soundToggle = document.getElementById('soundToggle');
let isPlaying = true;

soundToggle.addEventListener('click', () => {
  if (isPlaying) {
    sound.pause();
    soundToggle.textContent = '🔈';
  } else {
    sound.play();
    soundToggle.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});
