let computerScore = 0;
let playerScore = 0;
let standing = document.querySelector(".standing h2")
let player1 = document.querySelector(".score .player1 h2")
let player2 = document.querySelector(".score .player2 h2")


for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var computerChoice = getComputerChoice();
        console.log(computerChoice);
        var playerChoice = this.innerHTML;
        console.log(playerChoice);

        playRound(playerChoice, computerChoice);

    });

}

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        standing.innerHTML = "It's a TIE";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        player2.innerHTML = computerScore;
        standing.innerHTML = "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        player2.innerHTML = computerScore;
        standing.innerHTML = "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        player2.innerHTML = computerScore;
        standing.innerHTML = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        player1.innerHTML = playerScore;
        standing.innerHTML = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        player1.innerHTML = playerScore;
        standing.innerHTML = "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        player1.innerHTML = playerScore;
        standing.innerHTML = "You Win! Scissors beats  Paper";
    }
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = playerChoice;
//         let computerSelection = getComputerChoice();
//         console.log(`comp choice is ${computerSelection}`);
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (computerScore > playerScore) {
//         console.log("The COMPUTER WINS!!!")
//     } else if (playerScore > computerScore) {
//         console.log("The PLAYER WINS!!!")
//     } else {
//         console.log("TIE!!!")
//     }
// }

// game();
