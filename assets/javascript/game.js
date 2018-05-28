// letters used for computeer to guess
var computerChoice = ["a", "b", "c" ,"d" ,"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ;
//allows computer to guess letter 
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//Setting all to zero
var wins = 0;
var losses = 0;

var guessesLeft = 9;
var guessedSoFar = [];

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guess
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)]; // trigger computer guess
    guessedSoFar.push(userGuess); //pushing user guess to guesses so far
    if (userGuess == computerGuess) {
        wins++;
        alert('Correct guess you are psychic!');
        guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
        guessedSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guessesLeft == 0){
        losses++;
        alert(' You couldnt predict that and now have to refresh to try again.');
        guessesLeft = 9;
        guessedSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; //decrementing the guesses left
    }  
   
  

// Taking the tallies and displaying them in HTML    
var html = 
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Total Wins: " + 
wins + 
"</p>" +
"<p>Total Losses: " + 
losses + 
"</p>" +
"<p>Guesses Left: " + 
guessesLeft + 
"</p>" +
"<p>Your Guesses so far: " +
guessedSoFar +
"</p>"
;
// Placing the html into the game ID
document.querySelector('#game').innerHTML = html;
}




                                               