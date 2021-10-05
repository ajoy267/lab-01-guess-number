//input
const userInput = document.getElementById('user-input');

//buttons
const button = document.getElementById('guess-button');
const resetButton = document.getElementById('play-again');

//Results
let resultMessage = document.getElementById('result-message');

//numbers
let numGuessedRemaining = document.getElementById('number-of-guesses');
let randomNum = Math.floor(Math.random() * 20) + 1;
let numGuessed = 4;

button.addEventListener('click', () => {
    const userGuess = Number(userInput.value);
    numGuessed--;
    numGuessedRemaining.textContent = numGuessed;
    let result;

    if (userGuess === randomNum) {
        result = `You're Correct, You Win!`;
    } else if (userGuess < randomNum) {
        result = `Guess Too Low, Try Again`;
    } else {
        result = `Guess Too High, Try Again!`;
    }
    if (numGuessed === 0) {
        result = `You ran out of guesses! Game Over! The answer was ${randomNum}`;
        button.disabled = true;
    } else if (userGuess === randomNum) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
    resultMessage.textContent = result;
});

resetButton.addEventListener('click', () => {
    let result;
    resultMessage.textContent = result;
    numGuessed = 4;
    button.disabled = false;
    numGuessedRemaining.textContent = numGuessed;
    randomNum = Math.floor(Math.random() * 20) + 1;
});