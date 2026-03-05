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
