const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let result;

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'rock';
    }

    if (randomNumber === 1) {
        computerChoice = 'paper';
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.textContent = computerChoice;
}

function addScore(result) {
    if (result === 'You win!') {
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore;
    }

    if (result === 'You lost!') {
        computerScore += 1;
        computerScoreDisplay.textContent = computerScore;
    }
}

function evaluateResults() {
    if (computerChoice === playerChoice) {
        result = 'Draw!';
    }

    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'You win!';
    }

    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'You lost!';
    }

    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = 'You win!';
    }

    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'You lost!';
    }

    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'You win!';
    }

    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'You lost!';
    }

    resultDisplay.textContent = result;
}

choices.forEach(choice => choice.addEventListener('click', (event) => {
    playerChoice = event.target.id;
    playerChoiceDisplay.textContent = playerChoice;
    generateComputerChoice();
    evaluateResults();
    addScore(result);
}))