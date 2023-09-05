'use strict';
// // Dom manipulation
// let message = (document.querySelector('.message').innerHTML = `Correct Number`);
// console.log(message);

// // what is DOM
// // DOM is not a part of js instead it is a part of WEb APIS
// // Dom manipulation
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

// event listeners

const number = Math.floor(Math.random() * 20 + 1);
let score = 20;
const label_Score = document.querySelector('.label-score');
document.querySelector('.number').textContent = `${number}`;

const guessButtonElement = document.querySelector('.check');
guessButtonElement.addEventListener('click', () => {
  const guessedValue = Number(document.querySelector('.guess').value);
  if (!guessedValue) {
    var message = document.querySelector('.message');
    message.textContent = `😂 Bhai kuch likh to pehle usme`;
  } else if (guessedValue === number) {
    score = score + guessedValue;
    label_Score.textContent = `Score: ${score}`;
    console.log('yes');
    document.querySelector('.message').textContent = `correct Number 😍`;
  } else if (guessedValue > number) {
    if (score > 0) {
      score = score - 1;
      label_Score.textContent = `Score: ${score}`;
      document.querySelector('.message').textContent = `tooo high 🤣`;
    } else {
      document.querySelector('.message').textContent = `You lost the game😘😘`;
    }
  } else if (guessedValue < number) {
    if (score > 0) {
      score = score - 1;
      label_Score.textContent = `Score: ${score}`;
      document.querySelector('.message').textContent = `Too Low 🤣`;
    } else {
      document.querySelector('.message').textContent = `You lost the game😘😘`;
    }
  }
});
