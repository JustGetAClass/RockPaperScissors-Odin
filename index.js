let computerScore = 0;
let playerScore = 0;
let buttons = document.querySelectorAll(".btn")
let r = document.querySelector("#r")
let p = document.querySelector("#p")
let s = document.querySelector("#s")
let again = document.querySelector("#playAgain")
let standing = document.querySelector(".standing h2")
let player1 = document.querySelector(".score .player1 h2")
let player2 = document.querySelector(".score .player2 h2")
let cchoice = document.querySelector(".choices .cchoice span")
let pchoice = document.querySelector(".choices .pchoice span")


function game() {
    again.disabled = true;
    again.addEventListener("click", function () {
        computerScore = 0;
        player2.innerHTML = computerScore;
        playerScore = 0;
        player1.innerHTML = playerScore;
        enable();

    });
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var computerChoice = getComputerChoice();
            console.log(computerChoice);
            var playerChoice = this.innerHTML;
            console.log(playerChoice);

            playRound(playerChoice, computerChoice);
            endGame(playerScore, computerScore);

        });

    }
}


function endGame(pScore, cScore) {
    if ((pScore === 5) && (pScore > cScore) ){
        standing.innerHTML = "YOU WIN !!! GAME OVER";
        disable();
    } else if ((cScore === 5) && (cScore > pScore)){
        standing.innerHTML = "COMPUTER WINS!!! GAME OVER";
        disable();
    }
}


function disable() {
    r.disabled = true;
    p.disabled = true;
    s.disabled = true;
    again.disabled = false;
}


function enable() {
    r.disabled = false;
    p.disabled = false;
    s.disabled = false;
    again.disabled = true;
    standing.innerHTML = "Make a Choice!";
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


game();
