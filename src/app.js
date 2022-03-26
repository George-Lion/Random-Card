/* eslint-disable */
import "bootstrap";
import "./style.css";

let newCards = [];
let position = 1;
let cards = ["♥", "♣", "♦", "♠"];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
for (let value of numbers) {
  for (let stick of cards) {
    let x = [value, stick];
    newCards.push(x);
    newCards.sort(() => Math.random() - 0.5);
  }
}
function deckOfCards() {
  let distribute = newCards[position];
  document.querySelector("#number").innerHTML = distribute[0];
  document.querySelector("#stick1").innerHTML = distribute[1];
  document.querySelector("#stick2").innerHTML = distribute[1];

  position = position + 1;
  if (position == newCards.length - 1) {
    document.querySelector("#number").innerHTML = "X";
    document.querySelector("#stick1").innerHTML = "X";
    document.querySelector("#stick2").innerHTML = "X";
    start.disabled = true;
  }
}

function newTT() {
  newCards = a(newCards);
  position = 0;
}
start.addEventListener("click", deckOfCards);
/* reset.addEventListener("click", nuevoMazo); */
