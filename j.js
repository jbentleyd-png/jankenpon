function getCompMove() {
  let number = Math.random();
  let play = number < 0.33 ? "Rock" : number < 0.66 ? "Paper" : "Scissors";
  return play;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", getUserMove);
});

function getUserMove(tieMessage = "") {
  let play;
  while (
    //check backwards for what we want, not what we don't want:
    !(play === "Rock" || play === "Paper" || play === "Scissors") ||
    play == ""
  ) {
    play = prompt(
      tieMessage +
        "Please enter 'Rock', 'Paper', or 'Scissors'\n('r', 'p', and 's' work too.):",
    );
    play = standardizeInput(play);
  }
  return play;
}

function standardizeInput(word) {
  // prevent empty inputs by returning falsy values as "" (see condition above)
  if (!word) return "";

  //allow one-letter input
  if (word.length == 1) {
    word = word.toUpperCase();
    if (word == "R") return "Rock";
    if (word == "P") return "Paper";
    if (word == "S") return "Scissors";
  }

  //or standardize the full word
  let first = word[0].toUpperCase();
  let rest = word.slice(1).toLowerCase();
  return first + rest;
}

function playRound(roundCount) {
  let userMove = getUserMove();
  let compMove = getCompMove();
  let win;
  while (userMove == compMove) {
    //has to be WHILE.
    //check for ties first.
    compMove = getCompMove(); // computer has to throw again, too (BEFORE we ask for the player's play, so there is no advantage)
    console.log("Rethrow = " + compMove);
    userMove = getUserMove("It's a tie! Throw again! ");
  }
  console.log(compMove);

  if (userMove == "Rock") {
    if (compMove == "Scissors") {
      win = true;
    } else {
      win = false;
    }
  } else if (userMove == "Paper") {
    if (compMove == "Rock") {
      win = true;
    } else {
      win = false;
    }
  } else if (compMove == "Paper") {
    win = true;
  } else {
    win = false;
  }
  tellRoundResult(roundCount, userMove, compMove, win);
  return win;
}

function tellRoundResult(roundCount, user, comp, win) {
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

/*legacy running the code was just to write the function*/
// playJankenPon();

console.log("ok now we on a whole new BRANCH, baby");
