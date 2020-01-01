
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
/// functions 
/*var updateBandChoice = function () {

    return bandToChoose;
};

// 
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
//updateBandLetter();
updateGuessesLeft();

var bandPick = `${bandToChoose}`;
for (var bandLetter = 0; bandLetter < bandPick.length; bandLetter++) {
    console.log(bandPick[bandLetter]);
};



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
    // We'll check if there's a match.
    if (letter === bandLetter) {

        // If there is then we win and we'll update the HTML to display the win.
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        // Then we'll reset the game
        reset();
    }

    // If we are out of guesses...
    if (guessesLeft === 0) {

        // Then we will loss and we'll update the HTML to display the loss.
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        // Then we'll call the reset.
        reset();
    }
};

// <h3 id="word-blanks">_ _ _ _ _ _ _ _ _ </h3>
// <strong>Wrong Guesses: </strong> <span id="wrong-guesses"></span>
// <strong>Guesses Left: </strong> <span id="guesses-left">9</span>
// <strong>Wins: </strong> <span id="win-counter">0</span>
// <strong>Losses: </strong> <span id="loss-counter">0</span>  */
</script>

</body>


</html>
};