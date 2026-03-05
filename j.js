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
function getUserMove() {
  let play;
  while (play == undefined || play == "Enter") {
    play = prompt("Please enter 'Rock', 'Paper', or 'Scissors'", "Enter"); //decent, add in reformatting in a second.
  }
  return play;
}

console.log("Player threw " + getUserMove() + ".");
