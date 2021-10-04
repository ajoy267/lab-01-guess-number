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

### PseudoCode for Event
 ```javascript
 // What Events am I listening for?
 // on button click do the following:
 //   decrement or increment the guess count
 //   get the value of the user guess from the input
 //   CONVERT THE INPUT TO A NUMBER
 //   compare the user guess to the randomNumber
 //   if(userGuess === randomNum) -- display you won!
 //   else if (numGuesses === 4 ) -- display you lost, out of guesses
 //  else if (userGuess > randomNum) -- display Guess too High
 //  else if (userGuess < randomNum) -- display Guess too Low
 ```