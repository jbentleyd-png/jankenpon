/* Generate Computer's Move: */
function getCompPlay() {
  let number = Math.random();
  let play = number < 0.33 ? "Rock" : number < 0.66 ? "Paper" : "Scissors";
  return play;
}

// console.log(getCompPlay());

/* Get User's Move: */
function getUserMove(tieMessage = "") {
  let play;
  while (!(play === "Rock" || play === "Paper" || play === "Scissors")) {
    //check for what we want, not what we don't want.
    play = prompt(tieMessage + "Please enter 'Rock', 'Paper', or 'Scissors'"); //decent, add in reformatting in a second.
    play = capitalize(play);
  }
  return play;
}

// console.log("Player threw " + getUserMove() + ".");

/* Standardize spelling so user input is not case sensitive:*/
function capitalize(word) {
  let first = word[0].toUpperCase(); //select and capitalize first lettter
  let rest = word.slice(1).toLowerCase(); //work with the end
  //combine
  return first + rest;
}

console.log(capitalize("fROg"));

function playRound() {
  let userMove = getUserMove();
  let compPlay = getCompPlay();
  let win; // scope issue?
  while (userMove == compPlay) {
    //has to be WHILE.
    //check for ties first.
    let userMove = getUserMove("It's a tie! Throw again! "); //communicate that the tie happened.
    compPlay = getCompPlay(); // computer has to throw again, too.
  }
  // determine win:
  if (userMove == "Rock") {
    if (compPlay == "Scissors") {
      win = true;
    } else {
      win = false;
    }
  } else if (userMove == "Paper") {
    if (compPlay == "Rock") {
      win = true;
    } else {
      win = false;
    }
  } else if (compPlay == "Paper") {
    win = true;
  } else {
    win = false;
  }
  tellResult(userMove, compPlay, win); // alert result
  return win; //return win status
}

// alert based on win:
function tellResult(user, comp, win) {
  let message;
  if (win == true) {
    message = "You Win!";
  } else {
    message = "You Lose.";
  }
  alert(user + " vs. " + comp + "\n" + message);
}
/*
playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
playRound();
*/
function playJankenPon() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

playJankenPon();
