const container = document.querySelector("#container");
const clearButton = document.querySelector("#clearButton");

let gridSizePrompt = prompt("How big do you want this thing? 100 is the limit");

while (
  gridSizePrompt > 100 ||
  gridSizePrompt <= 0 ||
  isNaN(gridSizePrompt) ||
  !Number.isInteger(Number(gridSizePrompt))
) {
  alert("ERROR: Please enter a whole number between 1 and 100.");
  gridSizePrompt = prompt("How big do you want this thing? 100 is the limit");
}

let rows = (cols = gridSizePrompt);

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.className = "grid-item";
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "red";
    });

    container.appendChild(cell);
  }
}

makeRows(rows, cols);

clearButton.addEventListener("click", function () {
  if (
    confirm(
      "You are about to destroy this masterpiece, you sure you wanna do that?"
    ) === true
  ) {
    const allCells = document.querySelectorAll(".grid-item");
    allCells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  }
});
