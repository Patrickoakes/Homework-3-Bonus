





var bands = ['replacements', 'soul asylum', 'husker du', 'prince', 'pixies','cure',
'new order', 'sonic youth', 'minuteman'];

var guessedLetters =[];

var letterToGuess = null;

var guessesLeft = 10;

var wins = 0;

var losses = 0;

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