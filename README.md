# lab-01-guess-number

## Guess a Number app
* The user has 4 guesss to guess a random number between 1 and 20 to win

### HTML Elements
* header
* user input 
* Guess button
* user message (changes based on user guess)

### State
* User guess - holds the value of the input 
* random number - generates a random number between 1-20 
* number of guesses - counts down until there are no more guesses left or the user has guessed the correct anwer
* user message
    - 'You're Correct, You Win!': userGuess === randomNum
    - 'Guess too high': userGuess > randomNum
    - 'Guess too low': userGuess < randomNum
    - 'Invalid Guess': if guess is higher than 20