function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let computerChoice = rps[Math.floor(Math.random() * 3)];
    return computerChoice;
}
