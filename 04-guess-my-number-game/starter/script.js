//Game Development Hour 1 - Game Foundation & DOM Basics

'use strict';

// CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helper
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackgroundColor(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

// Game state
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('First Secret Number:', secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  setMessage('Start guessing...');
  setNumber('?');
  score = START_SCORE;
  setScore(score);
  setBackgroundColor('');
  clearInput();
  disablePlay(false);
}

resetGameState();

// change the value of score UI dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

// Basic Game Logic
checkBtnEl.addEventListener('click', function () {
  console.log('Check button clicked!');

  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // check if our guess input value is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!!!';
    return;
  }

  if (guess === secretNumber) {
    console.log('Correct number!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.message').textContent = 'You have won the game!';
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'green';
    }
  } else if (guess < secretNumber) {
    console.log('Your guess is too low!');
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;

    if (score <= 1) {
      document.querySelector('.message').textContent =
        '💥 You have lost, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.guess').value = '';
    }
  }
});

// Reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // restart the message display
  document.querySelector('.message').textContent = 'Start guessing...';
  // restart question mark or the reveal number
  document.querySelector('.number').textContent = '?';
  // update the score in the UI
  document.querySelector('.score').textContent = score;
  // restart guess input value
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
