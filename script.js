// Select buttons
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');


// Select score display
const playerScoreDisplay = document.querySelector(".player-points")
const computerScoreDisplay = document.querySelector(".computer-points")

// Initialize scores
let playerScore = 0
let computerScore = 0
let roundWinner = ``

// Update score display
function updateScore(){
    playerScoreDisplay.textContent = `You: ${playerScore}`
    computerScoreDisplay.textContent = `Computer: ${computerScore}`
}

// Computer move
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

// Game logic
function round(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        roundWinner = 'tie'
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++
        roundWinner = "You Win!"
    } else{
        computerScore++
        roundWinner = "Computer Wins!"
    }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundWinner = ``;
  playerSelectionDisplay.textContent = `You: `;
  computerSelectionDisplay.textContent = `Computer: `;
  updateScore();
  updateMarkers();
}

function updateMarkers() {
    const targetScore = 5

    const playerMarker = document.querySelector('.player-marker')
    const computerMarker = document.querySelector('.computer-marker')
    const prizeMarker = document.querySelector('.prize')

    playerMarker.style.left = `${Math.min(50, (playerScore / targetScore) * 50)}%`;
    computerMarker.style.left = `${Math.max(50, 100 - (computerScore / targetScore) * 50)}%`;
    prizeMarker.style.left = '50%'
}

function handleClick(playerSelection) {
  if (playerScore >= 5 || computerScore >= 5) return;

  const computerSelection = getComputerChoice();
  playerSelectionDisplay.textContent = `You: ${playerSelection}`;
  computerSelectionDisplay.textContent = `Computer: ${computerSelection}`;
  round(playerSelection, computerSelection);
  updateScore();
  updateMarkers();

  if (playerScore >= 5 || computerScore >= 5) {
    showPlayAgainPrompt();
  }
}

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))

const playAgainModal = document.getElementById('playAgainModal');
const modalMessage = document.getElementById('modalMessage');
const playAgainBtn = document.getElementById('playAgainBtn');

function showPlayAgainPrompt() {
    modalMessage.textContent = `Game over! Final score: You ${playerScore} - ${computerScore} Computer`;
    playAgainModal.style.display = 'flex';
}

playAgainBtn.addEventListener('click', function() {
    playAgainModal.style.display = 'none';
    resetGame();
});


