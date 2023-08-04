let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  let aiChoice = Math.floor(Math.random() * 3);
  return aiChoice;
} // 0 is rock, 1 is paper, 2 is scissors

const choiseRock = document.querySelector('.rock')
const choisePaper = document.querySelector('.paper')
const choiseScissors = document.querySelector('.scissors')
const result = document.querySelector('.result');
const score = document.querySelector('.score')
const reset = document.querySelector('.reset')
const winner = document.querySelector('.winner')

choiseRock.addEventListener("click", function () {
  if (computerChoice() === 0) {
    result.textContent = "DRAW";
  } if (computerChoice() === 1) {
    result.textContent = "LOSE";
    computerScore += 1;
  } if (computerChoice() === 2) {
    result.textContent = "WIN";
    playerScore += 1;
  }
  score.innerHTML = `YOU: ${playerScore}. COMPUTER: ${computerScore}.`
  if (playerScore === 5) {
    winner.innerHTML = "You won! Play again?";
  }
  if (computerScore === 5) {
    winner.innerHTML = "You lost. Play again?";
  }
}); 
choisePaper.addEventListener("click", 
function () {
  if (computerChoice() === 0) {
    result.textContent = "WIN";
    playerScore += 1;
  } if (computerChoice() === 1) {
    result.textContent = "DRAW";
  } if (computerChoice() === 2) {
    result.textContent = "LOSE";
    computerScore += 1;
  }
  score.innerHTML = `YOU: ${playerScore}. COMPUTER: ${computerScore}.`
  if (playerScore === 5) {
    winner.innerHTML = "You won! Play again?";
  }
  if (computerScore === 5) {
    winner.innerHTML = "You lost. Play again?";
  }
});
choiseScissors.addEventListener("click", 
function () {
  if (computerChoice() === 0) {
    result.textContent = "LOSE";
    computerScore += 1;
  } if (computerChoice() === 1) {
    result.textContent = "WIN";
    playerScore += 1;
  } if (computerChoice() === 2) {
    result.textContent = "DRAW";
  }
  score.innerHTML = `YOU: ${playerScore}. COMPUTER: ${computerScore}.`
  if (playerScore === 5) {
    winner.innerHTML = "You won! Play again?";
  }
  if (computerScore === 5) {
    winner.innerHTML = "You lost. Play again?";
  }
});
reset.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  winner.innerHTML = "";
  result.innerHTML = "";
  score.innerHTML = `YOU: ${playerScore}. COMPUTER: ${computerScore}.`;
});







