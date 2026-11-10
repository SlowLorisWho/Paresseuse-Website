const blueButton = document.getElementById("blueButton");

function blueSwap() {
  const root = document.documentElement;

  // Apply the new colour globally
  root.style.setProperty('--main-colour', 'rgba(7, 108, 131, 1)');
  root.style.setProperty('--glow-colour', 'rgba(64, 233, 233, 1)');
  root.style.setProperty('--bg-colour', 'rgba(205, 244, 250, 1)');
}

blueButton.addEventListener("click", blueSwap);

const greenButton = document.getElementById("greenButton");

function greenSwap() {
  const root = document.documentElement;

  // Apply the new colour globally  
  root.style.setProperty('--main-colour', 'rgba(17, 100, 20, 1)');
  root.style.setProperty('--bg-colour', 'rgba(226, 252, 201, 1)');
  root.style.setProperty('--blue-special', '#6296a7ff');
}

greenButton.addEventListener("click", greenSwap);


const redButton = document.getElementById("redButton");

function redSwap() {
  const root = document.documentElement;

  // Apply the new colour globally
  root.style.setProperty('--main-colour', 'rgba(138, 37, 37, 1)');
  root.style.setProperty('--glow-colour', 'rgba(255, 196, 0, 1)');
  root.style.setProperty('--bg-colour', 'rgba(254, 225, 216, 1)');
  root.style.setProperty('--blue-special', 'rgba(98, 150, 167, 1)');
}

redButton.addEventListener("click", redSwap);


