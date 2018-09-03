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

    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (i = 0; i < pickedWord.length; i++) {
      placeHolderArray.push(" __ ");
    }

       //change image depending on game
   if (gameRunning === true && pickedWord === "zelda") {
    document.getElementById('gameImg').src="Assets/Images/zelda.png";}
  else if (pickedWord === "mario") {
  document.getElementById('gameImg').src="Assets/Images/mario.png";}
  else if (pickedWord === "contra") {
  document.getElementById('gameImg').src="Assets/Images/contra.png";}
  else if (pickedWord === "rampage") {
  document.getElementById('gameImg').src="Assets/Images/rampage.jpg";}
  else if (pickedWord === "doom") {
  document.getElementById('gameImg').src="Assets/Images/doom.jpg";}
  else if (pickedWord === "kirby") {
  document.getElementById('gameImg').src="Assets/Images/kirby.png";}

    // write stuff to DOM

    winsText.textContent = wins;
    lossesText.textContent = losses;
    placeHolderArrayText.textContent = placeHolderArray.join("");
    lettersGuessedText.textContent = incorrectLetterBank;
    remainingGuessText.textContent = remainingGuess;
  }

  //button

  resetButton.addEventListener("click", newGame);

  // game logic

  function letterGuess(letter) {
    console.log(letter);

    // if game is running, and gussed letter is not in arrary, pushes letter
    if (gameRunning === true && lettersGuessed.indexOf(letter) === -1) {
      lettersGuessed.push(letter);

      // replaces place holder with letter

      for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === letter) {
          placeHolderArray[i] = pickedWord[i];
        }
      }

      }
      //run the incorrect letter function
      checkIncorrect(letter);
      //check losses
      checkLoss();
      // check win
      checkWin();
      //join the placeholder array
      placeHolderArrayText.textContent = placeHolderArray.join("");
    }

//function to check losses

function checkLoss() {
  if (remainingGuess === 0) {
    losses++;
    gameRunning = false;
    lossesText.textContent = losses;
    alert("You lose, seriously?")
  }
}

function checkWin() {
  if (pickedWord === placeHolderArray.join("")){
    wins++;
    gameRunning = false;
    winsText.textContent = wins;
    alert("You win, you awesome!")
  }
}

  // check incorrect letter
  function checkIncorrect(letter) {
    // if not in now filled placeholder array
    if (placeHolderArray.indexOf(letter) === -1); {
      // remaining guess -1
      remainingGuess--;
      //push to incorrect letter bank
      incorrectLetterBank.push(letter);
      //update dom with incorrect letter bank, join to change into string
      lettersGuessedText.textContent = incorrectLetterBank.join("");
      //update dom with remainging guesses
      remainingGuessText.textContent = remainingGuess;
    }
  }



  //onkeyup event for letter guessin
  document.onkeyup = function(event) {
    console.dir(event) 
    //greater than A less than Z
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      letterGuess(event.key);
    }
  }
