const scoreboard = document.querySelector("#scoreboard");
const directions = document.querySelector("#directions");
let userScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

function getCompMove() {
  let number = Math.random();
  let play = number < 0.33 ? "Rock" : number < 0.66 ? "Paper" : "Scissors";
  return play;
}

function playRound(buttonEventObject) {
  let compMove = getCompMove();
  let userMove = buttonEventObject.target.id;
  let win;
  if (userMove == compMove) {
    directions.textContent = "It's a tie! Throw again!";
    return;
  }

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
  tellRoundResult(userMove, compMove, win);
  console.log(userScore);
  checkWinLose();
  return win;
}

function tellRoundResult(user, comp, win) {
  let message;
  if (win == true) {
    message = "You Win!";
    ++userScore;
  } else {
    message = "You Lose.";
    ++compScore;
  }
  scoreboard.innerHTML = "User : " + userScore + "  CPU : " + compScore;
  directions.innerHTML = user + " vs. " + comp + "<br>" + message;
}

function checkWinLose() {
  if (userScore >= 5 || compScore >= 5) {
    let finalResult = userScore > compScore ? "YOU WIN!" : "YOU LOSE!";
    alert(finalResult);
    compScore = 0;
    userScore = 0;
  }
}

console.log("ok now we on a whole new BRANCH, baby");
