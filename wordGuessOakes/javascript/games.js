
/////Variable Area
var bands = ['replacements', 'soul asylum', 'husker du', 'prince', 'pixies','cure',
'new order', 'sonic youth', 'minuteman'];

var guessedLetters =[];

var letterToGuess = null;

var guessesLeft = 10;

var wins = 0;

var losses = 0;

/// functions 
var updateBandGuess = function () {
letterToGuess = bands[Math.floor(Math.random * bands.length)];
};

var updateGuessesLeft = function () {
    document.querySelector('#guesses-left').innerHTML = guessesLeft;
   };

   var updateGuessesSoFar = function () {
       document.querySelector('#guesses-made').innerHTML = guessedLetters.join(", ");
   };

   var reset = function () {
    guessesLeft = 10;
    guessedLetters = [];
    updateBandGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

updateBandGuess();
updateGuessesLeft();

//Full Function///MAIN FUNCTION/////////////////////
// This function will capture the keyboard clicks.
document.onkeydown = function (event) {
   
   
    // It's going to reduce the guesses by one
    guessesLeft--;

    // Lowercase the letter
    var letter = event.key.toLowerCase();

    // Then add the guess to the guessedLetters array
    guessedLetters.push(letter);

    // Then its going to run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();
