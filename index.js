let playerSelection = prompt("Choose Rock, Paper or Scissors:").toLowerCase();
let computerSelection = getComputerChoice();
console.log(`comp choice is ${computerSelection}`);

function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a TIE";
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats  Paper";
    }
}
console.log(playRound(playerSelection, computerSelection));