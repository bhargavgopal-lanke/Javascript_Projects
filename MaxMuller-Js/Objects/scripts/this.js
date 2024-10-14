// 1. this in global context (i.e. outside of any function)

function something() {
  console.log("something");
}

console.log("this outside of any function", this); // logs global object always (also in strict mode)!

// 2. this in a function (non-arrow) - called in the global context

function somethingOne() {
  console.log("this in regular function", this);
}

somethingOne(); // logs global object in non strict mode, undefined in strict mode

// 3.  this in an arrow function - called in an global context

const somethingTwo = () => {
  console.log("this in a arrow funtion", this);
};

somethingTwo(); // logs global object ALWAYS (also in strict mode)

// 4. this in an Method (non-arrow) - Called on an object

const personOne = {
  name: "Bhargav",
  greet: function () {
    // or use method shorthand: greet() {...}
    console.log("this in an regular method inside an object", this.name);
  },
};

personOne.greet(); // logs 'Bhargav', this refers to the person object in non arrow functions.

// 5.this in an method (arrow function) - Called on an object

const Person = {
  name: "Gopal",
  greet: () => {
    console.log("this in arrow method inside an object", this.name);
  },
};

Person.greet(); // logs nothing (or some global name on window object),
// this refers to global (window) object, even in strict mode

// Important examples to remember

const personThree = {
  name: "Bhargav",
  greetThree() {
    console.log("person three", this.name);
  },
};

const { greetThree } = personThree;
greetThree.call(personThree); // "this" is bound to the person object via call().

const personFour = {
  name: "Lanke",
  greetFour() {
    console.log("person four", this.name);
  },
};

const { greetFour } = personFour;
greetFour.call(this); // check this
