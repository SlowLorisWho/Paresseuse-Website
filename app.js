const blueButton = document.getElementById("blueButton");

function blueSwap() {
  const root = document.documentElement;

  // Apply the new colour globally
  root.style.setProperty('--main-colour', 'rgba(7, 108, 131, 1)');
}

blueButton.addEventListener("click", blueSwap);

const greenButton = document.getElementById("greenButton");

function greenSwap() {
  const root = document.documentElement;

  // Apply the new colour globally
  root.style.setProperty('--main-colour', 'rgba(37, 138, 47, 1)');
  root.style.setProperty('--blue-special', 'rgba(98, 150, 167, 1)');
}

greenButton.addEventListener("click", greenSwap);


const redButton = document.getElementById("redButton");

function redSwap() {
  const root = document.documentElement;

  // Apply the new colour globally
  root.style.setProperty('--main-colour', 'rgba(138, 37, 37, 1)');
  root.style.setProperty('--blue-special', 'rgba(98, 150, 167, 1)');
}

redButton.addEventListener("click", redSwap);


