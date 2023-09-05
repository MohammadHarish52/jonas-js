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

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

let message = document.querySelector('.message');

const label_Score = document.querySelector('.label-score');
const body = document.getElementById('body');
const again = document.getElementById('again');

const guessButtonElement = document.querySelector('.check');
guessButtonElement.addEventListener('click', () => {
  const guessedValue = Number(document.querySelector('.guess').value);

  // when the input is empty

  if (!guessedValue) {
    message.textContent = `😂 Bhai kuch likh to pehle usme`;
  }

  //when the value is correct
  else if (guessedValue === number) {
    message.textContent = `${number}`;
    body.style.backgroundColor = `#183D3D`;

    label_Score.textContent = `Score: ${score}`;
    console.log('yes');
    message.textContent = `correct Number 😍`;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guessed value is wrong
  else if (guessedValue !== number) {
    if (score > 0) {
      score = score - 1;
      label_Score.textContent = `👌 Score: ${score}`;
      message.textContent =
        guessedValue < number ? `Too Low 🤣` : `tooo high 🤣`;
    } else {
      body.style.backgroundColor = `#9A3B3B`;
      message.textContent = `You lost the game😘😘`;
      label_Score.textContent = 0;
    }
  }

  //too high
  //   else if (guessedValue > number) {
  //     if (score > 0) {
  //     } else {
  //       body.style.backgroundColor = `#9A3B3B`;
  //       message.textContent = `You lost the game😘😘`;
  //     }
  //   }

  //   //too low
  //   else if (guessedValue < number) {
  //     if (score > 0) {
  //     } else {
  //       body.style.backgroundColor = `#9A3B3B`;
  //       message.textContent = `You lost the game😘😘`;
  //     }
  //   }
});

again.addEventListener('click', () => {
  number = Math.floor(Math.random() * 20 + 1);

  score = 20;

  body.style.backgroundColor = `#222`;

  document.querySelector('.guess').value = ``;
  label_Score.textContent = `💯  Score: ${score}`;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').textContent = '?';
});

//dom is also used to chane css styling
