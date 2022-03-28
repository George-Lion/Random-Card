/* eslint-disable */
import "@popperjs/core";
import "bootstrap";
import "./style.css";

let newCards = [];
let position = 1;
let distribute;
const cards = ["♥", "♣", "♦", "♠"];
const numbers = [
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
const num = document.querySelector("#number");
const stickUp = document.querySelector("#stick1");
const stickFooter = document.querySelector("#stick2");
const message = document.querySelector("#mensaje");

const inicio = () => {
  for (let value of numbers) {
    for (let stick of cards) {
      let arr = [value, stick];
      newCards.push(arr);
      newCards.sort(() => Math.random() - 0.5);
    }
  }
  return newCards;
};

inicio();

const random = newCards => {
  newCards.sort(() => Math.random() - 0.5);
  return newCards;
};

const deckOfCards = () => {
  reset.disabled = false;
  distribute = newCards[position];
  num.innerHTML = distribute[0];
  stickUp.innerHTML = distribute[1];
  stickFooter.innerHTML = distribute[1];

  position = position + 1;
  if (position == newCards.length - 1) {
    num.innerHTML = "X";
    stickUp.innerHTML = "";
    stickFooter.innerHTML = "";
    start.disabled = true;
    alert("EMPTY");
    message.innerHTML = "press reset to continue";
  }
};

const resetCards = () => {
  newCards = random(newCards);
  position = 0;
  num.innerHTML =
    "<img src=https://media2.giphy.com/media/JRluhfVtaCfKcq7Kxf/giphy.gif?cid=ecf05e4757b2hioh1zzw43dqrl745dk694iq080e60nct151&rid=giphy.gif&ct=g width=200px/>";
  stickUp.innerHTML = "";
  stickFooter.innerHTML = "";
  start.disabled = false;
  reset.disabled = true;
  message.innerHTML = "press start";
};

start.addEventListener("click", deckOfCards);
reset.addEventListener("click", resetCards);

window.onload = function() {
  reset.disabled = true;
  message.innerHTML = "press start";
};
