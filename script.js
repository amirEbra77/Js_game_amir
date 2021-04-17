'use strict';
//selecting elements
const player0El = document.querySelector('.p;ayer--0');
const player0El = document.querySelector('.p;ayer--0');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNEw = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHoll = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
//rolling dice functionality
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  //1)generate a random dice
  const dice = Math.trunc(Math.random() * 6 + 1);

  //2)display dice
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;

  //3)check for rooled 1:if true ,switch to next player
  if (dice !== 1) {
    //add  dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
