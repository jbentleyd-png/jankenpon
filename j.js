/* Generate Computer's Move: */
function getCompPlay() {
  let number = Math.random();
  let play = number < 0.33 ? "Rock" : number < 0.66 ? "Paper" : "Scissors";
  return play;
}

console.log(getCompPlay());
console.log(getCompPlay());
console.log(getCompPlay());
console.log(getCompPlay());
console.log(getCompPlay());

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

console.log("Player threw " + getUserMove() + ".");

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
  let outcome;
  if (userMove == compPlay) {
    //check for ties first.
    let userMove = getUserMove("It's a tie! Throw again! "); //communicate that the tie happened.
  }
}

playRound();
playRound();
playRound();
playRound();
playRound();
