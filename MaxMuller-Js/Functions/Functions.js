const startGameBtn = document.getElementById("start-game-btn");

// variables defined outside can be accessed inside an function
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

// the player choice
const getPlayerChoice = () => {
  // convert the entered values to uppercase using uppercase method.
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We Chose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }
  return selection;
};

// get the winner

const getWinner = (pChoice = DEFAULT_USER_CHOICE, cChoice) => {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

//  the computer choice
const getComputerChoice = () => {
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
};

// when start btn clicked call this function and return the result.
const playGame = () => {
  const computerChoiceValue = getComputerChoice();
  const playerChoiceValue = getPlayerChoice();
  let winner;

  if (playerChoiceValue) {
    winner = getWinner(computerChoiceValue, playerChoiceValue);
  } else {
    winner = getWinner(computerChoiceValue);
  }

  let message = `You picked ${
    playerChoiceValue || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoiceValue},`;


  if (winner === RESULT_DRAW) {
    message += ` had a draw`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message += ` won`;
  } else {
    message += ` lost`;
  }
  console.log(message);
};

startGameBtn.addEventListener("click", () => {
  playGame();
});
