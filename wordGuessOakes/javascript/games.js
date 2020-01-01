
/////Variable Area
var bands = ['replacements', 'soul asylum', 'husker du', 'prince', 'pixies','cure',
'new order', 'sonic youth', 'minuteman'];

var bandToChoose = null;

var bandLetter = [];

var guessedLetters =[];

var guessesLeft = 10;

var wins = 0;

var losses = 0;

/// functions 
var updateBandChoice = function () {
bandToChoose = bands[Math.floor(Math.random * bands.length)];
};

var bandLetter = bandToChoose[i];
for (var i = 0; i < bandLetter.length; i++) {
    console.log(bandToChoose.charAt(i));
};




// var updateBandLetter = function () {
//     bandLetter = bandToChoose[null];
// };

var updateGuessesLeft = function () {
    document.querySelector('#guesses-left').innerHTML = guessesLeft;
   };

   var updateGuessesSoFar = function () {
       document.querySelector('#guesses-made').innerHTML = guessedLetters.join(", ");
   };

   var reset = function () {
    guessesLeft = 10;
    guessedLetters = [];
    updateBandChoice();
    updateGuessesLeft();
    updateGuessesSoFar();
    updateBandLetter();
};

updateBandChoice();
updateBankChoice();
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

    //////////////////////////////////////////////////////////

};