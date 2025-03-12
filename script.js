function createGridOfDivs(divs = 100) {
  const container = document.querySelector(".container");
  container.textContent = "";
  divGrid = divs * divs;

  let arrOfDivs = [];

  for (let i = 0; i < divGrid; i++) {
    const div = document.createElement("div");
    div.id = `grid${i}`;
    div.className = "grid";
    div.style.width = `${480 / divs}px`;
    div.style.height = `${480 / divs}px`;
    arrOfDivs.push(div);
  }
  arrOfDivs.forEach((div) => container.appendChild(div));
  container.addEventListener("mousemove", colorMe);
}

const colorMe = (event) => {
  const div = document.querySelector(`#${event.target.id}`);
  div.style.backgroundColor = getRandomRGBColor();
};

const getRandomRGBColor = () => {
  return `rgb(${getRndNr()}, ${getRndNr()}, ${getRndNr()})`;
};

const getRndNr = () => {
  return Math.floor(Math.random() * 256);
};

const btn = document.querySelector("#sketch-size");
btn.addEventListener("click", () => {
  let divs = parseInt(prompt("How many divs do you want to have? (max 100)"));

  if (divs > 100 || divs < -0) {
    alert("Not valid value...");
  } else {
    createGridOfDivs(divs);
  }
});
