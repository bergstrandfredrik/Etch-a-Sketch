const alphabet = ["A", "B", "C", "D", "E", "F", "G"];

console.log("hello Etch-a-Sketch");

function createGridOfDivs() {
  const divs = 10000;
  const container = document.querySelector(".container");

  for (let i = 0; i < divs; i++) {
    const div = document.createElement("div");
    div.style.width = "1%";
    div.style.height = "1%";
    div.id = `grid${i}`;
    div.className = "grid";

    container.appendChild(div);
  }
  container.addEventListener("mousemove", colorMe);
}

const colorMe = (event) => {
  const div = document.querySelector(`#${event.target.id}`);
  div.style.backgroundColor = getRandomRGBColor();
  div.style.borderRadius = "50%";
};

const getRandomRGBColor = () => {
  return `rgb(${getRndNr()}, ${getRndNr()}, ${getRndNr()})`;
};

const getRndNr = () => {
  return Math.floor(Math.random() * 256);
};

createGridOfDivs();
