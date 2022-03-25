/* eslint-disable */
import "bootstrap";
import "./style.css";

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

let newCards = [];

for (let value of numbers) {
  for (let stick of cards) {
    newCards.push([value] + [stick]);
  }
}

newCards = random(newCards);

//desordenar

function random(Array) {
  var t = Array.sort(function(a, b) {
    return Math.random() - 0.5;
  });
  return [...t];
}

console.log(a);

// reset

function borrar() {
  a = random(a);
  position = 0;
}

console.log(a);
