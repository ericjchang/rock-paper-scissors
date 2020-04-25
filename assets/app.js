let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// random computer choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randonNumber = Math.floor(Math.random() * 3);
  return choices[randonNumber];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
      break;
    case "p":
      return "Paper";
      break;
    case "s":
      return "Scissors";
      break;
  }
}

function changeScore() {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
}

function gameResult(userChoice, compChoice, result) {
  const userLetter = "user".fontsize(3).sub();
  const compLetter = "comp".fontsize(3).sub();
  switch (result) {
    case "win":
      userScore++;
      changeScore();
      result_div.innerHTML = `${convertToWord(userChoice)}${userLetter} beats ${convertToWord(
        compChoice
      )}${compLetter} You win!"`;
      document.getElementById(userChoice).classList.add("green-glow");
      setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green-glow");
      }, 500);
      break;
    case "lose":
      compScore++;
      changeScore();
      result_div.innerHTML = `${convertToWord(userChoice)}${userLetter} beats ${convertToWord(
        compChoice
      )}${compLetter} You lose!"`;
      document.getElementById(userChoice).classList.add("red-glow");
      setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red-glow");
      }, 500);
      break;
    case "draw":
      result_div.innerHTML = `${convertToWord(userChoice)}${userLetter} equals ${convertToWord(
        compChoice
      )}${compLetter} Draw!"`;
      document.getElementById(userChoice).classList.add("grey-glow");
      setTimeout(() => {
        document.getElementById(userChoice).classList.remove("grey-glow");
      }, 500);
      break;
  }
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      gameResult(userChoice, compChoice, "win");
      break;
    case "sr":
    case "rp":
    case "ps":
      gameResult(userChoice, compChoice, "lose");
      break;
    case "rr":
    case "pp":
    case "ss":
      gameResult(userChoice, compChoice, "draw");
      break;
  }
}

// get user choice
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
