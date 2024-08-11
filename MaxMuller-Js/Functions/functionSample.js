const start = function startGame() {
  console.log("game is starting");
};

const person = {
  name: "max",
  greet: function () {
    console.log("hello there");
  },
};

// startGameBtn.addEventListener("click", start);
// function declaration / function statement
// it can be hoisted to the top, can be declared anywhere in the file.

function multiply(a, b) {
  return a * b;
}

// function expression
// hoisted to the top but not initialized/defined (i.e: not after it's used.)
// multiply();  Cannot access multiply before initilization.

const multiply1 = function (a, b) {};
