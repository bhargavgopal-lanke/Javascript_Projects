const person = {
  name: "Bhargav",
  age: 30,
  hobbies: ["sports", "cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

const personOne = {
  "first name": "Bhargav",
  age: 30,
  hobbies: ["sports", "cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

console.log("object key value destructure",personOne["first name"]);
