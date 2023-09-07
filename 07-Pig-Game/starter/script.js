'use strict';

// pig game
// selecting elements
const scoreEl = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentEl = document.getElementById('current--0');
const currentEl2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//starting condition
score1El.textContent = 0;
scoreEl.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
  //switch to next player
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0; // setting the current score to 0
  activePlayer = activePlayer === 0 ? 1 : 0;
};

btnRoll.addEventListener('click', () => {
  // generating a random dice roll
  if (playing) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    // diplay dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;
    //check for rolled 1: true switch to next player
    if (randomNumber !== 1) {
      currentScore = currentScore + randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // player1.classList.remove('player--active');
      // player0.classList.add('player--active');
    } else {
      //switch player
      switchPlayer();
      // player0.classList.remove('player--active');
      // player1.classList.add('player--active');
      //using toggle hoga to add krdega nhi hga to remve krdega
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // Add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //finish
    if (scores[activePlayer] >= 100) {
      diceEl.classList.add('hidden');
      playing = false; //to stop game when someone wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
