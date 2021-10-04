//input
const userInput = document.getElementById('user-input');

//buttons
const button = document.getElementById('guess-button');
const reset = document.getElementById('play-again');

//Results
const resultMessage = document.getElementById('result-message');

//numbers
let numGuessedRemaining = document.getElementById('number-of-guesses')
const randomNum = Math.floor(Math.random()*20)+1;
let numGuessed = 4;

button.addEventListener('click', () => {
    const userGuess = Number(userInput.value);
    numGuessed--;
    let result

    if (userGuess === randomNum) {
        result = `You're Correct, You Win!`;
    } else if (userGuess < randomNum) {
      result = `Guess Too Low, Try Again`;
    } else {
      result = `Guess Too High, Try Again!`;
    }
    resultMessage.textContent = result;
});