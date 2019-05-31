var choices = ["a", "b", "c","d", "e", "f"];
var user = document.getElementById("user-guess");
var random = document.getElementById("computer-guess");
var outcome = document.getElementById("outcome");
var win = document.getElementById("w");
var loss = document.getElementById("l");
var tie = document.getElementById("t");
var wi = 0;
var lo = 10;

document.onkeyup = function(event) {
  var userGuess = event.key;
  var randomGuess = choices[Math.floor(Math.random() * choices.length)];
  user.textContent = event.key;
  random.textContent = randomGuess;

  if (randomGuess == userGuess){
    console.log("You win!");
    outcome.textContent = "You win!";
    win.textContent = (wi=wi+1);
  }
  else (randomGuess !== userGuess); {
    console.log("You lose!");
    outcome.textContent = "Lose!";
    loss.textContent = (lo=lo-1);
  } 
  
}