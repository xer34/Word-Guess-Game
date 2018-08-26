// the words

var wordList = [
    "skyrim",
    "fallout",
    "mario",
    "kirby",
    "metroid",
    "xcom",
    "counterstrike",
    "halflife",
];

// tries 

const maximumTries = 10;

// guessed letters array

var guessedLetters = [];

// current word in the index

var indexedWord;

// the word itself

var currentWord = [];

// how many guesses left and wins

var remainingGuess = 0;
var wins = 0; 

var gameStart = false;
var gameFinish = false;

// -----------------------------------------

function updateDisplay() {

document.getElementById("wins").innerText = wins;
document.getElementById("remainingGuess").innerText = remainingGuess;
document.getElementById("guessedLetters").innerText = guessedLetters;

}