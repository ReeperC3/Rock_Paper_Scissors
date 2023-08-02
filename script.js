let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  let aiChoice = Math.floor(Math.random() * 3);
  return aiChoice;
}






// 0 is rock, 1 is paper, 2 is scissors

  


function play() {
  let playerSelection = getPlayerSelection();
  let computerSelection = computerChoice();

  function whoWon(playerSelected, computerSelected) {
  if (playerSelected === "rock" && computerSelected === 2) {
    playerScore++;
    return "Congratulations! Rock beats scissors.";
  } else if (playerSelected === "rock" && computerSelected === 0) {
    return "It is a draw. Rock and rock.";
  } else if (playerSelected === "rock" && computerSelected === 1) {
    computerScore++;
    return "Unlucky. Paper beats your rock.";
  } else if (playerSelected === "paper" && computerSelected === 0) {
    playerScore++;
    return "Congratulations! Paper beats rock.";
  } else if (playerSelected === "paper" && computerSelected === 1) {
    return "It is a draw. Paper and paper.";
  } else if (playerSelected === "paper" && computerSelected === 2) {
    computerScore++
    return "Unlucky. Scissors beats your paper.";
  } else if (playerSelected === "scissors" && computerSelected === 2) {
    playerScore++;
    return "Congratulations! Scissors beats paper.";
  } else if (playerSelected === "scissors" && computerSelected === 0) {
    return "It is a draw. Scissors and scissors.";
  } else if (playerSelected === "scissors" && computerSelected === 1) {
    computerScore++;
    return "Unlucky. Rock beats your scissors.";
  } else {
    return "That is not a valid input. You must enter rock, paper, or scissors."
  }
} 
  
  
  console.log(whoWon(playerSelection, computerSelection));
  console.log(`Player: ${playerScore}. Computer: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
  let playerChoice = prompt("Please enter: Rock, paper or scissors?");
  function getPlayerSelection() {
    if (playerChoice.toLowerCase() === "rock") {
      return "rock";
    } else if (playerChoice.toLowerCase() === "paper") {
      return "paper";
    } else if (playerChoice.toLowerCase() === "scissors") {
      return "scissors";
    } else {
      return "invalid"
    }
  }
  play();
  if (playerScore === 3) {
    console.log("You won! refresh the page to play again.")
    break;
  } else if (computerScore === 3) {
    console.log("You lost. Refresh the page to play again.")
    break;
  } 
  
}





