const sound = new Howl({
  src: ['music.mp3'],
  autoplay: false, 
  loop: true,
  volume: 0.5
});

const soundToggle = document.getElementById('soundToggle');
let isPlaying = false; // par défaut off


soundToggle.textContent = '🔇';

soundToggle.addEventListener('click', () => {
  if (isPlaying) {
    sound.pause();
    soundToggle.textContent = '🔇';
  } else {
    sound.play();
    soundToggle.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});

document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.getElementById("stars");
  const numStars = 350;

  for (let i = 0; i < numStars; i++) {
    // Position aléatoire
    const x = Math.random();
    const y = Math.random();

    // Modulation de probabilité : Plus proche de (1, 0), plus dense
    const probability = x * (1 - y); // Favorise en haut à droite
    if (Math.random() < probability) {
      // Création de l'étoile
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      star.classList.add("star");
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${y * 100}%`; 
      star.style.left = `${x * 100}%`;
      star.style.animationDelay = `${Math.random() * 1}s`;
      starContainer.appendChild(star);
    }
  }
});


