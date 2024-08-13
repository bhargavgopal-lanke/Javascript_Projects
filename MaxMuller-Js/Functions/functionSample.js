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

const sumUp = (...numbers) => {
  const validateNumber = (number) => {
    // if the number is not a number replace it with zero or keep the number
   return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (let num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const subtratcUp = (...numbers) => {
  let sum = 0;
  for (const sub of numbers) {
    sum -= sub;
  }
  return sum;
};

console.log(sumUp(1, 2, 3, -4, 'iu', 9, 11));
console.log(subtratcUp(1, 2, 3, -4, 8, 9, 11));
