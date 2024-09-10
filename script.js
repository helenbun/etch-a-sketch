const container = document.querySelector("#container")

for (i=0; i<16;i++) {
const horizontal = document.createElement("div");
horizontal.classList.add("horizontal", "pixel");
for (j=0; j<16; j++){
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