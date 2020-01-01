var userGuess = e.key


var wins = 0;


var losses = 0;


var comChoice = Math.floor(Math.random() * 25 + 1);


var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ' k', 'l', 'm', ' n', ' o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letIndex = 0;

var guessesArr = ['', '', '', '', '', '', '', '', ''];
////////////////////////////////////// Turn var anything function () {}
//these went inside functions////
var winContainer = document.querySelector("winCount");
var lossContainer = document.querySelector("#lossCount");
var guessContainer = document.querySelector("#guessLeft");
const log = document.getElementById('guessCount');
//////////////////////////////////////
// for (guessesIndex = 0; guessesIndex < guessesArr.length; guessesIndex++) {
if (guessesArr[guessesIndex] === letters[letIndex]) {
} else (guessesIndex === guessesArr); {
    function updateLoss() {
        lossContainer.innerHTML = losses; losses++; updateLoss();
    }
}

function updateWin() {
    if (userGuess === comChoice)
        winContainer.innerHTML = wins; wins++; updateWin();
}














///MAIN PROCESS
updateWin();
updateLoss();

document.addEventListener('keyup', logKey);
function logKey(e) {
    log.textContent += `${e.key}`;
}

for (guessesIndex = 0; guessesIndex < guessesArr.length; guessesIndex++) {
    if (userGuess === letters[letIndex]) {
        log.textContent += `${e.key}`;
    } else (guessesIndex === guessesArr); {
        function updateLoss() {
            lossContainer.innerHTML = losses; losses++; updateLoss();
        }

    }
};
//////////////////////////////////////////////////////////////////////////

function updateWin() {
    if (userGuess === comChoice)
        winContainer.innerHTML = wins; wins++; updateWin();
}

function psychicFunction(comChoice, letters) {
    var comChoice = Math.floor(Math.random() * 25 + 1);
    console.log(letters[comChoice]);
}
console.log(letters[comChoice]);