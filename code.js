let rockPaperScissors = ["rock", "paper", "scissors"];
let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let streak = 0;
let highScore = 0;

let helpButton = document.querySelector('.help-button');
let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let scissorsButton = document.querySelector('.scissors-button');
let helpText = document.querySelector('.help-text');
let playerText = document.querySelector('.player-choice');
let computerText = document.querySelector('.computer-choice');
let outcomeText = document.querySelector('.outcome-text');
let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');


helpButton.addEventListener('click', () => {
    helpText.classList.toggle('hidden');
});

rockButton.addEventListener('click', () => {
    playerText.textContent = "Rock";
    play('rock');
});

paperButton.addEventListener('click', () => {
    playerText.textContent = "Paper";
    play('paper');
});

scissorsButton.addEventListener('click', () => {
    playerText.textContent = "Scissors";
    play('scissors');    
});





function getComputerChoice() {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    return (computerChoice = rockPaperScissors[randomComputerChoice]);
}

function play(humanChoice, computerChoice = getComputerChoice()) {
    computerText.textContent = (computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    if (humanChoice == computerChoice) {
        outcomeText.textContent = 'Tie!';
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
        outcomeText.textContent = 'You Win!';
        humanScore++;
        playerScoreText.textContent = humanScore;
    } else {
        outcomeText.textContent = 'You Lose!';
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
}

