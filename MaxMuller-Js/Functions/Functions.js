const startGameBtn = document.getElementById("start-game-btn");

// variables defined outside can be accessed inside an function
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = "ROCK";

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

startGameBtn.addEventListener("click", () => {
  let playerChoiceResult = getPlayerChoice();
  console.log("getPlayerChoice", playerChoiceResult);
});
