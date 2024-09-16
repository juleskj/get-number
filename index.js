let max = 10;

const Number = document.querySelector("#number");

Number.addEventListener("mousedown", newNumber);

function newNumber() {
  Number.innerHTML = Math.round(Math.random() * max);
}
