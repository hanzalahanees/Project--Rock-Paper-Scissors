// randomly generates Rock, Paper or Scissors

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
}