1. Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100
<code>console.log(Math.round(Math.random() * 100));<code>

2. Opdater din funktion så den skriver det tilfædige tal til HTML.
<code>
const Number = document.querySelector(".number");

Number.addEventListener("mousedown", newNumber);

function newNumber() {
  console.log(Math.round(Math.random() * 100));

}
<code>

3.Opdater din funktionen så den kan modtage parameteret “max”. Det tilfældige tal skal så være fra og med 0 til og med “max”
<code>
const max = 10;

const Number = document.querySelector(".number");

Number.addEventListener("mousedown", newNumber);

function newNumber() {
  console.log(Math.round(Math.random() * max));
}
<code>


4.Opdater din funktion så den også modtager en querySelector som parameter som tallet skal udskrives til
 <code>
 let max = 10;

const Number = document.querySelector("#number");

Number.addEventListener("mousedown", newNumber);

function newNumber() {
  Number.innerHTML = Math.round(Math.random() * max);
}

 <code>

Det er ok at tallet bare genereres når siden loader, så et nyt tal fremkommer når du refresher siden!