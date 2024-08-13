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

// 3. pass a function as an parameter to this function
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    // if the number is not a number replace it with zero or keep the number
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (let num of numbers) {
    sum += validateNumber(num);
  }
  // 4. call the function and pass the result argument inside this function
  resultHandler("adding", sum);
};

const subtratcUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const sub of numbers) {
    sum -= sub;
  }
  resultHandler("subtracting", sum);
};

// 1. crate a function and pass it as an parameter to another function
// we can't directly pass the function as an argument
// we have to pass this as an parameter while calling a function and call this argument inside that function
const showResult = (messageText, result) => {
  console.log(`The result after ${messageText} all the numbers is ${result}`);
};

// 2. pass a function as an parameter to another function
sumUp(showResult, 1, 2, 3, -4, 8, 9, 11);
subtratcUp(showResult, 1, 2, 3, -4, 8, 9, 11);
