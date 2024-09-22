import { $, $$ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";
let max = 10;

$("button").addEventListener("mousedown", newNumber);

function newNumber() {
  $("button").innerHTML = getRandomNumber(max);
}
