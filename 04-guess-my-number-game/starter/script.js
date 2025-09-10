//Game Development Hour 1 - Game Foundation & DOM Basics

'use strict';

//DOM Selection
//const messagE1 = document.querySelector('.message');
//console.log(messagE1);
//console.log(messagE1.textContent);
//messagE1.textContent = 'Hello from JavaScript! 🎉';

//const scorE1 = document.querySelector('.score');
//console.log('Score element:', scorE1);
//scorE1.textContent = '50';

//const guessInput = document.querySelector('.guess');

const numberE1 = document.querySelector('.number');
//numberE1.textContent = '13';

const highscoreE1 = document.querySelector('.highscore');
//highscoreE1.textContent = '100';

const guessE1 = document.querySelector('.guess');
//guessE1.value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number:', secretNumber);

//track the currrent score// this is your current score
let score = 40;
let highscore = 0;

// change the value of score UI dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');

// Basic Game Logic
document.querySelector('.check').addEventListener('click', function () {
    console.log('Check button clicked!');

    const guess = Number(document.querySelector('.guess').value);
    console.log('Player guess:', guess);

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
        }

    } else if (guess > secretNumber) {
        console.log('Your guess is too high!');
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;

        if (score <= 1) {
            document.querySelector('.message').textContent = '💥 You have lost, press again!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        } 

    } else if (guess < secretNumber) {
        console.log('Your guess is too low!');
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;

        if (score <= 1) {
            document.querySelector('.message').textContent = '💥 You have lost, press again!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //restart the message display
    document.querySelector('.message').textContent = 'Start guessing...';
    //restart question mark or the reveal number
    document.querySelector('.number').textContent = '?';
    //update the score in the UI
    document.querySelector('.score').textContent = score;
    //restart guess input value
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});



