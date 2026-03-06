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
  while (
    !(play === "Rock" || play === "Paper" || play === "Scissors") ||
    play == ""
  ) {
    //check for what we want, not what we don't want.
    play = prompt(
      tieMessage +
        "Please enter 'Rock', 'Paper', or 'Scissors'\n('r', 'p', and 's' work too.):",
    );
    play = standardize(play);
  }
  return play;
}

// console.log("Player threw " + getUserMove() + ".");

/* Standardize spelling so user input is not case sensitive: */
function standardize(word) {
  // prevent empty inputs by returning falsy values as "" (see condition above)
  if (!word) return "";

  //if single letters were inputted, return them as the full word:
  if (word.length == 1) {
    word = word.toUpperCase();
    if (word == "R") return "Rock";
    if (word == "P") return "Paper";
    if (word == "S") return "Scissors";
  }

  //or standardize the full word
  let first = word[0].toUpperCase(); //select and capitalize first lettter
  let rest = word.slice(1).toLowerCase(); //lowercase the end
  //combine
  return first + rest;
}

// console.log(standardize("fROg"));

/* Play a round and get result: */
function playRound(roundCount) {
  let userMove = getUserMove();
  let compPlay = getCompPlay();
  let win;
  while (userMove == compPlay) {
    //has to be WHILE.
    //check for ties first.
    compPlay = getCompPlay(); // computer has to throw again, too (BEFORE we ask for the player's play, so there is no advantage)
    console.log("Rethrow = " + compPlay); //watching
    userMove = getUserMove("It's a tie! Throw again! "); //communicate that the tie happened.
  }
  console.log(compPlay); //watching
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
  tellResult(roundCount, userMove, compPlay, win); // alert result
  return win; //return win status
}

// alert based on win:
function tellResult(roundCount, user, comp, win) {
  let message;
  if (win == true) {
    message = "You Win!";
  } else {
    message = "You Lose.";
  }
  alert(
    "Round " + roundCount + "/5:\n\n" + user + " vs. " + comp + "\n" + message,
  );
}

/* old "test suite":
playRound();
playRound();
playRound();
*/

function playJankenPon() {
  let winCount = 0;
  let roundCount = 1;
  for (let i = 0; i < 5; i++) {
    if (playRound(roundCount) == true) {
      //pass round count through all the functions that need to see it so that it displays in the result notification
      winCount++;
      console.log(winCount);
    }
    roundCount++;
  }
  alert("Good Game!\nWins: " + winCount + " | Losses: " + (5 - winCount));
}

/*OK, PLAY! */
playJankenPon();
