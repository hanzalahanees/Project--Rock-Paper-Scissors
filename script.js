//Declaration
let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll('input');
const playAgain = document.getElementById('playAgain');

//Disable Buttons
function disable() {
  btns.forEach(btn => {
    btn.disabled = true
  });
}

function computerPlay() {
  let select = ["", "rock", "paper", "scissors"];
  return select[Math.floor(Math.random() * 3) + 1];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let userScore = "";
  let compScore = "";
  let result = "";

  if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {

    playerScore += 1;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    userScore = `${playerScore}`;
    compScore = `${computerScore}`;

    if (playerScore == 5) {
      result = "You won the game !!!";
      disable();
      playAgain.style.visibility = 'visible';
    }

  } else if (playerSelection == computerSelection) {

    result = "It's a tie";
    userScore = `${playerScore}`;
    compScore = `${computerScore}`;

  } else {

    computerScore += 1;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    compScore = `${computerScore}`;
    userScore = `${playerScore}`;

    if (computerScore == 5) {
      result = "You lost the game !!!";
      disable();
      playAgain.style.visibility = 'visible';
    }
  }
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('compScore').innerHTML = compScore;
  document.getElementById('result').innerHTML = result;
  return;
}
//Add event with buttons for choose weapons
btns.forEach(btn => {
  btn.addEventListener('click', function () {
    playRound(btn.value.toLowerCase())
  });
})

// Game play again and again button
playAgain.addEventListener('click',function(){
  window.location.reload();
});

/* ***************************
 RPS-UI has been completed
*******************************/








/* Old Code for console 
// randomly generates Rock, Paper or Scissors

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
}

// play a single round of the game

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper";
  } else if (playerSelection == computerSelection) {
    return "Draw";
  }
}

function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt(
        "Enter Rock, Paper or Scissors - Case-Insensetive"
      );
      playerSelection=playerSelection.toLowerCase();
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }

  game();
  */