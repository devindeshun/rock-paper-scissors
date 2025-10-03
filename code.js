let rockPaperScissors = ["rock", "paper", "scissors"];
let computerChoice = '';

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    return (computerChoice = rockPaperScissors[randomComputerChoice]);
}

getComputerChoice();

console.log(computerChoice)