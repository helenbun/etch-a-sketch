const container = document.querySelector("#container");
const btn = document.querySelector("button");
let gridSize = 16;


btn.addEventListener("click", () => {
    gridSize = Number(window.prompt("How big should I make your grid?", ""));
    while (gridSize <= 0 || gridSize > 100) {   
        gridSize = Number(window.prompt("Sorry, I can't do that. Please enter a number between 1 and 100", ""));
    }
    removeGrid();
    generateGrid(gridSize);
}
)

function generateGrid(size){
//generate grid of specified size.
for (i=0; i<size;i++) {
const horizontal = document.createElement("div");
horizontal.classList.add("horizontal", "pixel");
for (j=0; j<size; j++){
    const vertical = document.createElement("div");
    vertical.classList.add("vertical", "pixel");
    horizontal.appendChild(vertical);
}
container.appendChild(horizontal);
}
const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", () => {
        pixel.classList.add("filled");
    })    
});
}

generateGrid(gridSize);

function removeGrid() {
   const horizontals = document.querySelectorAll(".horizontal");
   horizontals.forEach((horizontal)=> {
        container.removeChild(horizontal);
   })
}