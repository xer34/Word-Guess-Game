//variables for html text

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var remainingGuessText = document.getElementById("remainingGuessText");
var incorrectLetterText = document.getElementById("incorrectLetterText");
var placeHolderArray = document.getElementById("placeHolderArray");

//variables for game stuff

var wordBank = ["mario", "zelda", "doom", "kirby", "paperboy", "contra"]
var wins = 0;
var losses = 0;
var remainingGuess = 10;
var gameRunning = false;
var pickedWord = "";
var guessedLetter = [];
var placeHolderArray = [];
var incorrectLetter = [];

//game reset

function newGame() {
gameRunning = true;
remainingGuess = 10;
incorrectLetter = [];
placeHolderArray = [];
correctLetter = [];

//word selection
pickedWord = wordBank [Math.floor(Math.random() * wordBank.length)]; 

//fill the blank letter array with blanks
for (var i = 0; i < pickedWord.length; i++) {
	placeHolderArray.push(" _ ")
}

//fill the HTML with the variables
winsText.innerHTML = wins;
lossesText.textContent  = losses;
remainingGuessText.textContent = remainingGuess;
placeHolderArray.textContent = placeHolderArray.join("");
incorrectLetterText.textContent = incorrectLetter;
}
//DONT PRESS THE BUTTTTTTONNNN
resetButton.addEventListener('click', newGame);

//letter guess function 
function letterGuess(letter) {


    if (gameRunning === true && correctLetter.indexOf(letter) === -1) {
    correctLetter.push(letter);
    }
    
    for (var i = 0; i < pickedWord.length; i++){
        if (pickedWord[i] === letter) {
            placeHolderArray[i] = pickedWord[i]
        }
    }

document.onkeyup = function(event) {
    console.log(this.onkeyup)

    var userGuess = event.key;
    
    if (userGuess.keyCode >= 65 && userGuess.KeyCode <=90) {
        letterGuess(userGuess);}
    }
}

