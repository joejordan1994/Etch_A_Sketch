const container = document.querySelector("#container");

function createGrid(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}

createGrid(16, 16);
