function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById("boxes");
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const amount = document.querySelector('input[type="number"]').value;
  createBoxes(amount);
});
const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);
