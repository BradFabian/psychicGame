// letters used for computeer to guess
var computerChoice = ["a", "b", "c" ,"d" ,"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ;
//allows computer to guess letter 
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = [];

//Allows the user 9 guesses
// guesses = guesses || 9

                                               