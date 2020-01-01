/////Variable Area
        //Global variables: ACCESSIBLE BY ALL FUNCTIONS


        var bands = ["replacements", "soulasylum", "huskerdu", "prince", "pixies", "cure",
            "neworder", "sonicyouth", "minuteman"];

        var bandToChoose = ""; //null;

        var bandLetters = []; //var lettersInBandToChose = [];     

        var numBlanks = 0;// non-existent

        var blanksAndSuccesses = [];//non-existent

        var wrongGuesses = [];//Non-existent

        //Game counters?
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;


        function startGame() {

            guessesLeft = 10;

            bandToChoose = bands[Math.floor(Math.random() * bands.length)];

            bandLetters = bandToChoose.split("");

            numBlanks = bandLetters.length;
            console.log(bandToChoose);

            blanksAndSuccesses = [];

            wrongGuesses = [];

            for (var i = 0; i < numBlanks; i++) {
                blanksAndSuccesses.push("_");
            }

            document.getElementById("guesses-left").innerHTML = guessesLeft;

            document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

            document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
        }

        function checkLetters(letter) {

            var letterInWord = false;

            for (var i = 0; i < numBlanks; i++) {
                if (bandToChoose[i] === letter) {
                    letterInWord = true;
                }
            }
            if (letterInWord) {
                for (var j = 0; j < numBlanks; j++) {
                    if (bandToChoose[j] === letter) {
                        blanksAndSuccesses[j] = letter;
                    }
                }
            }
            else {
                wrongGuesses.push(letter);
                guessesLeft--;
            }
        }
        function roundComplete() {
            document.getElementById("guesses-left").innerHTML = guessesLeft;

            document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

            document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

            if (bandLetters.toString() === blanksAndSuccesses.toString()) {
                wins++;
                alert("You win!");
                document.getElementById("win-counter").innerHTML = wins;
                startGame();
            }

            else if (guessesLeft === 0) {
                losses++;
                alert("You lose");
                document.getElementById("loss-counter").innerHTML = losses;
                startGame();
            }

        }

        // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
        // ==================================================================================================

        // Starts the Game by running the startGame() function
        startGame();

        // Then initiate the function for capturing key clicks.
        document.onkeyup = function (event) {
            // Check if the key pressed is a letter.
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                // Converts all key clicks to lowercase letters.
                var letterGuessed = event.key.toLowerCase();
                // Runs the code to check for correctness.
                checkLetters(letterGuessed);
                // Runs the code after each round is done.
                roundComplete();
            }
        };