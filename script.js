console.log("hello Etch-a-Sketch");

function createGridOfDivs() {
  const divs = 16;
  const height = "120px";
  const width = "120px";
  const container = document.querySelector(".container");

  for (let i = 0; i < divs; i++) {
    const div = document.createElement("div");
    div.style.height = height;
    div.style.width = width;
    div.style.backgroundColor = "black";
    div.id = i;
    div.className = "grid";

    container.appendChild(div);
  }
}

createGridOfDivs();
