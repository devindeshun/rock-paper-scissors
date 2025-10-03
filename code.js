let rockPaperScissors = ["rock", "paper", "scissors"];
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    return (computerChoice = rockPaperScissors[randomComputerChoice]);
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (humanChoice == "rock" || humanChoice == 'paper' || humanChoice == 'scissors') {
    } else {
        getHumanChoice();
    }
    return humanChoice;
}

function play(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    console.log(`You chose *${humanChoice}* and the computer chose *${computerChoice}*...`);

    if (humanChoice == computerChoice) {
        console.log("Tie!")
        console.log(`Current Score: Computer: ${computerScore}, Human: ${humanScore}`);
        play();
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You Win!");
        humanScore++;
        console.log(`Current Score: Computer: ${computerScore}, Human: ${humanScore}`);
        play();
    } else {
        console.log("You Lose!");
        computerScore++;
        console.log(`Current Score: Computer: ${computerScore}, Human: ${humanScore}`);
        play();
    }
}

play();