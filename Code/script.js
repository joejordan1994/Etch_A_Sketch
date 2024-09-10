const container = document.querySelector("#container");

let gridSizePrompt = prompt("How big do you want this thing? 100 is the limit");

while (gridSizePrompt > 100 || gridSizePrompt <= 0 || isNaN(gridSizePrompt)) {
  alert("ERROR: Please enter a number between 1 and 100.");
  gridSizePrompt = prompt("How big do you want this thing? 100 is the limit");
}

let rows = (cols = gridSizePrompt);

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(rows, cols);
