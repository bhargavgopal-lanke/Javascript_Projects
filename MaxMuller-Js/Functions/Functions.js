const startGameBtn = document.getElementById("start-game-btn");

// variables defined outside can be accessed inside an function
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

// the playyer choice
const getPlayerChoice = function () {
  // convert the entered values to uppercase using uppercase method.
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We Chose ${DEFAULT_CHOICE} for you`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

// get the winner

const getWinner = (pChoice, cChoice) => {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    console.log("RESULT_PLAYER_WINS", RESULT_PLAYER_WINS);
    return RESULT_PLAYER_WINS;
  } else {
    console.log("RESULT_COMPUTER_WINS", RESULT_COMPUTER_WINS);
    return RESULT_COMPUTER_WINS;
  }
};

//  the computer choice
function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 10);
  let computerResult;

  if (randomValue <= 3) {
    computerResult = ROCK;
  } else if (randomValue <= 6) {
    computerResult = PAPER;
  } else {
    computerResult = SCISSORS;
  }
  return computerResult;
}
function playGame() {
  const computerChoiceValue = getComputerChoice();
  const playerChoiceValue = getPlayerChoice();
  getWinner(computerChoiceValue, playerChoiceValue);
}

startGameBtn.addEventListener("click", () => {
  playGame();
});
