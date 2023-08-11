'use strict';

// ================ Players ================//

const player1 = {
  score: document.querySelector('#score--0'),
  currentScore: document.getElementById('current--0'),
  playerBox: document.querySelector('.player--0'),
  id: 0,
};

const player2 = {
  score: document.querySelector('#score--1'),
  currentScore: document.getElementById('current--1'),
  playerBox: document.querySelector('.player--1'),
  id: 1,
};

const players = [player1, player2];

function resetPlayers() {
  currentPlayer = player1;
  for (let i = 0; i < players.length; i++) {
    players[i].score.textContent = 0;
    players[i].currentScore.textContent = 0;
  }
}

let currentPlayer = player1;

// ===================== Propertties ========//

const defaultBG = '#c7365f';
const defaultWidth = '65%';
const activeBG = '#5D9C59';
const activeWidth = '70%';

// ================== switch style =============//
function resetStyle() {
  const currentBox = document.querySelector(`.current--${currentPlayer.id}`);
  currentBox.style.width = defaultWidth;
  currentBox.style.backgroundColor = defaultBG;
  currentPlayer.playerBox.classList.remove('player--active');
}

function activeStyle() {
  const currentBox = document.querySelector(`.current--${currentPlayer.id}`);
  currentBox.style.width = activeWidth;
  currentBox.style.backgroundColor = activeBG;
  currentPlayer.playerBox.classList.add('player--active');
}

// =========================================//

// Selecting elements
const diceElement = document.querySelector('.dice');

player1.score.textContent = 0;
player2.score.textContent = 0;

diceElement.classList.add('hidden');

// =============== Switch player function =============
function switchPlayer() {
  resetStyle();
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  activeStyle();
}

// ====================== reset current score =============
function resetCurrentScore() {
  currentPlayer.currentScore.textContent = 0;
}

// ===============Dice roll function================== //

function diceRoll() {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${randomNumber}.png`;

  if (randomNumber === 1) {
    resetCurrentScore();
    switchPlayer();
  } else {
    currentPlayer.currentScore.textContent =
      Number(currentPlayer.currentScore.textContent) + randomNumber;
  }
}

// =================Dice roll button=================== //

const rollBtn = document.querySelector('.btn--roll');
rollBtn.addEventListener('click', diceRoll);

// =================== Hold Button Function =============//
function hold() {
  currentPlayer.score.textContent =
    Number(currentPlayer.currentScore.textContent) +
    Number(currentPlayer.score.textContent);
  resetCurrentScore();
  if (Number(currentPlayer.score.textContent) >= 100) {
    currentPlayer.playerBox.style.backgroundColor = activeBG;
    rollBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
  } else {
    switchPlayer();
  }
}

// ================== Hold Button ==================== //

const holdBtn = document.querySelector('.btn--hold');
holdBtn.addEventListener('click', hold);

activeStyle();

// ================= Reset Game =================== //
function resetGame() {
  currentPlayer.playerBox.style.backgroundColor = null;
  rollBtn.classList.remove('hidden'); // can use classlist.toggle instead
  holdBtn.classList.remove('hidden');
  diceElement.classList.add('hidden');
  resetStyle();
  resetPlayers();
  activeStyle();
}

const newGame = document.querySelector('.btn--new');
newGame.addEventListener('click', resetGame);


