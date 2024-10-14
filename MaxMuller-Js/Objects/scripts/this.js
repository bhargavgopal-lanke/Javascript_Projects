// 1. this in global context (i.e. outside of any function)

function something() {
  console.log("something");
}

console.log("this outside of any function", this); // logs global object always (also in strict mode)!

// 2. this in a function (non-arrow) - called in the global context

function somethingOne() {
  console.log(this);
}

somethingOne(); // logs global object in non strict mode, undefined in strict mode

// 3.  this in an arrow function - called in an global context

const somethingTwo = () => {
  console.log(this);
};

somethingTwo(); // logs global object ALWAYS (also in strict mode)
