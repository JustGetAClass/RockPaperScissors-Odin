let computerScore = 0;
let playerScore = 0;
function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a TIE";
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        computerScore ++;
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        computerScore ++;
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        computerScore ++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore ++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore ++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore ++;
        return "You Win! Scissors beats  Paper";
    }
}

function game(){
        for (let i=0; i<5; i++){
            let playerSelection = prompt("Choose Rock, Paper or Scissors:").toLowerCase();
            let computerSelection = getComputerChoice();
            console.log(`comp choice is ${computerSelection}`);
            console.log(playRound(playerSelection, computerSelection));
        }
        if (computerScore > playerScore){
            console.log("The COMPUTER WINS!!!")
        } else if (playerScore > computerScore){
            console.log("The PLAYER WINS!!!")
        } else {
            console.log("TIE!!!")
        }
}

game();
