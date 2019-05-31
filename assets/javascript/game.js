var choices = ["a", "b", "c","d", "e", "f", "g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x", "y", "z"];
var user = document.getElementById("user-guess");
// var random = document.getElementById("computer-guess");
var outcome = document.getElementById("outcome");
var guesses = document.getElementById("user-guess-arr");
var win = document.getElementById("w");
var loss = document.getElementById("l");
var livesLeft = document.getElementById("lives-left")
var wi = 0;
var lo = 0;
var lives = 10;
var userGuessArr = [];
var randomGuess = choices[Math.floor(Math.random() * choices.length)];
console.log("Computer Guess: " + randomGuess);

document.onkeyup = function(event) {
  var userGuess = event.key;
  userGuessArr.push(userGuess);
  guesses.textContent = userGuessArr.join(", ");
  user.textContent = event.key;

  if (randomGuess == userGuess){
    console.log("You win!");
    outcome.textContent = "You win!";
    wi++;
    win.textContent = wi;
    // reset the game
    //  - choose another randomGuess
    //  - empty out the user guesses array
    //  - On the page, clear out the 
    //  - reset the lifes to 10
    randomGuess = choices[Math.floor(Math.random() * choices.length)];
    userGuessArr = [];
    guesses.textContent = userGuessArr;
    lives = 10;
    livesLeft.textContent = lives;
  }
  else {
    // decrement the lives by 1
    // lives = lives - 1
    lives--;
    livesLeft.textContent = lives;
    // if lives === 0, they lost, and we need to tick up lo by 1 restart the game
    if (lives === 0) {
      console.log("You lose!");
      outcome.textContent = "You lose!";
      lo++;
      loss.textContent = lo;
      // reset the game
      //  - choose another randomGuess
      //  - empty out the user guesses array
      //  - reset the lives to 10
      randomGuess = choices[Math.floor(Math.random() * choices.length)];
      userGuessArr = [];
      guesses.textContent = userGuessArr;
      lives = 10;
      livesLeft.textContent = lives;
    }
    else {
      outcome.textContent = "Guess again!";
    }
    

    // otherwise, keep playing
      
  }
}