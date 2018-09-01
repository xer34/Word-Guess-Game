// grab dom elements

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var placeHolderArrayText = document.getElementById("placeHolderArrayText");
var remainingGuessText = document.getElementById("remainingGuessText");
var lettersGuessedText = document.getElementById("lettersGuessedText");
var resetButton = document.getElementById("resetButton");

// create var for wins losses arrays

var wordBank = ["zelda", "kirby", "doom", "mario", "contra", "rampage"];
var wins = 0;
var losses = 0;
var placeHolderArray = [];
var remainingGuess = 10;
var pickedWord = "";
var lettersGuessed = [];
var incorrectLetterBank = [];
var gameRunning = false;

// new game function for reset

function newGame() {
    remainingGuess = 10;
    incorrectLetterBank = [];
    placeHolderArray = [];
    lettersGuessed = [];
    gameRunning = true;
    console.log(placeHolderArray);

// pick a word!

pickedWord = wordBank[Math.floor(Math.random()  * wordBank.length)];

    for (i = 0; i < pickedWord.length; i++) {
    placeHolderArray.push(" __ ");
    }
}

// write stuff to DOM

winsText.textContent = wins;
lossesText.textContent = losses;
placeHolderArrayText.textContent = placeHolderArray;
lettersGuessedText.textContent = incorrectLetterBank;
remainingGuessText.textContent = remainingGuess;

//button

resetButton.addEventListener("click", newGame);

