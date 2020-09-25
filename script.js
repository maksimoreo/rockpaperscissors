// Chooses between Rock, Paper and Scissors randomly
function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

// This function returns array where 0 indexed element indicates if player won
// and 1 indexed element is an explanation
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    let result;
    if (playerSelection === "rock")
    {
        if (computerSelection === "rock")
            result = [false, "Draw! Rock vs Rock"];
        else if (computerSelection === "paper")
            result = [false, "You Lose! Paper beats Rock"];
        else if (computerSelection === "scissors")
            result = [true, "You Win! Rock beats Scissors"];
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock")
            result = [true, "You Win! Paper beats Rock"];
        else if (computerSelection === "paper")
            result = [false, "Draw! Paper vs Paper"];
        else if (computerSelection === "scissors")
            result = [false, "You Lose! Scissors beat Paper"];
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock")
            result = [false, "You Lose! Rock beats Scissors"];
        else if (computerSelection === "paper")
            result = [true, "You Win! Scissors beat paper"];
        else if (computerSelection === "scissors")
            result = [false, "Draw! Scissors vs Scissors"];
    }
    
    return result;
}

function playGame(playerSelection) {
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    resultContainer.textContent = result[1];
    winsNumber += result[0];

    gamesPlayed++;
    if (gamesPlayed >= NUM_OF_GAMES)
        endGame();
    
    // Update games number text
    gamesNumText.textContent = `Games played: ${gamesPlayed} of ${NUM_OF_GAMES}`;
}

function endGame() {
    // Remove buttons
    container.removeChild(buttonContainer);
    container.removeChild(playNextText);

    // Create text to show wins number
    let winText = document.createElement('p');
    winText.textContent = `You won ${winsNumber} games of ${NUM_OF_GAMES}. ${winsNumber != 0 ? 'Congrats!' : 'Loser.'}`;
    container.appendChild(winText);

    // Create play again button
    let playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.onclick = () => location.reload();
    container.appendChild(playAgainButton);
}

// Game info
let gamesPlayed = 0;
const NUM_OF_GAMES = 5;
let winsNumber = 0;


// HTML elements
//     Page container
let container = document.querySelector('#container');

//     Result div
let resultContainer = document.querySelector('#result-text');

//     Games number text
let gamesNumText = document.querySelector('#games-num-text');

//     Rock button
let buttonRock = document.querySelector('#rock-btn');
buttonRock.addEventListener('click', () => {
    playGame("Rock");
});

//     Paper button
let buttonPaper = document.querySelector('#paper-btn');
buttonPaper.addEventListener('click', () => {
    playGame("Paper");
});

//     Scissors button
let buttonScissors = document.querySelector('#scissors-btn');
buttonScissors.addEventListener('click', () => {
    playGame("Scissors");
});

//     Button container
let buttonContainer = document.querySelector('#button-container');

//     Play next text
let playNextText = document.querySelector('#play-next-text');
