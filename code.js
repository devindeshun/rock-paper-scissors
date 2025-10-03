let rockPaperScissors = ["rock", "paper", "scissors"];
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let streak = 0;

function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    return (computerChoice = rockPaperScissors[randomComputerChoice]);
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, Scissors? ('help' for instructions)").toLowerCase();
    if (humanChoice == 'help'){
        console.log('Rock beats Scissors, Paper beats Rock, Scissors beat Paper. Streak is only reset when you lose! Good Luck!')
    }

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
        console.log(`Current Score: Computer: ${computerScore}, Human: ${humanScore}. Streak: ${streak}!`);
        play();
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You Win!");
        humanScore++;
        streak++;
        console.log(`Current Score: Computer: ${computerScore}, Human: ${humanScore}. Streak: ${streak}!`);
        play();
    } else {
        console.log("You Lose!");
        computerScore++;
        streak = 0;
        console.log(`Current Score: Computer: ${computerScore}, Human: ${humanScore}. Streak: ${streak}!`);
        play();
    }
}

play();