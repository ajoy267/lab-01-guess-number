//input
const userInput = document.getElementById('user-input');

//buttons
const button = document.getElementById('guess-button');

//Results
const resultMessage = document.getElementById('result-message');

//numbers
let numGuessedRemaining = document.getElementById('number-of-guesses');
const randomNum = Math.floor(Math.random() * 20) + 1;
let numGuessed = 4;

button.addEventListener('click', () => {
    const userGuess = Number(userInput.value);
    numGuessed--;
    numGuessedRemaining.textContent = numGuessed;
    let result;

    if (userGuess === randomNum) {
        result = `You're Correct, You Win!`;
        button.disabled = true;
    } else if (userGuess < randomNum) {
        result = `Guess Too Low, Try Again`;
        button.disabled = false;
    } else {
        result = `Guess Too High, Try Again!`;
        button.disabled = false;
    }
    if (numGuessed === 0) {
        result = `You ran out of guesses! Game Over! The answer was ${randomNum}`;
        button.disabled = true;
    } else {
        button.disabled = false;
    }
    resultMessage.textContent = result;
});

