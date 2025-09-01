// JavaScript Fundamentals Part 2 - Hour 4
//Final Project: Interactive Score Tracker

// Game state object
const gameState = {
  scores: [0, 0], // Player 1 and Player 2 scores
  targetScore: 5,
  gameActive: true,

  // Update score display
  updateDisplay: function () {
    document.getElementById('score-1').textContent = this.scores[0];
    document.getElementById('score-2').textContent = this.scores[1];
    document.querySelector('.target').textContent = this.targetScore;
  },

  // Add point for a player
  addPoint: function (playerIndex) {
    if (!this.gameActive) return;
    this.scores[playerIndex]++;
    this.updateDisplay();
    this.checkWinner();
  },

  // Check if someone won
  checkWinner: function () {
    if (this.scores[0] >= this.targetScore) {
      this.showWinner(0);
    } else if (this.scores[1] >= this.targetScore) {
      this.showWinner(1);
    }
  },

  // Show winner styling and message
  showWinner: function (playerIndex) {
    this.gameActive = false;

    const players = document.querySelectorAll('.player');
    players.forEach((player, index) => {
      player.classList.remove('winner', 'loser');
      if (index === playerIndex) player.classList.add('winner');
      else player.classList.add('loser');
    });

    const winnerText = document.querySelector('.winner');
    winnerText.classList.remove('hidden');
    winnerText.querySelector('.winner-name').textContent = `Player ${playerIndex + 1}`;
  },

  // Reset game
  resetGame: function () {
    this.scores = [0, 0];
    this.gameActive = true;

    document.querySelectorAll('.player').forEach(player => {
      player.classList.remove('winner', 'loser');
    });

    document.querySelector('.winner').classList.add('hidden');

    this.updateDisplay();
  },

  // Update target score
  updateTargetScore: function (newScore) {
    this.targetScore = newScore;
    this.updateDisplay();
  }
};

// === Event Listeners ===

// Add points buttons
document.querySelectorAll('.btn-add').forEach(button => {
  button.addEventListener('click', function () {
    const player = parseInt(this.dataset.player) - 1;
    gameState.addPoint(player);
  });
});

// Reset button
document.getElementById('btn-reset').addEventListener('click', () => {
  gameState.resetGame();
});

// Target score input
document.getElementById('winning-score').addEventListener('change', function () {
  const newScore = parseInt(this.value);
  if (newScore > 0) gameState.updateTargetScore(newScore);
});

// Keyboard shortcuts: 1, 2, R
document.addEventListener('keydown', (e) => {
  if (e.key === '1') gameState.addPoint(0);
  if (e.key === '2') gameState.addPoint(1);
  if (e.key.toLowerCase() === 'r') gameState.resetGame();
});

// Initialize display
gameState.updateDisplay();
