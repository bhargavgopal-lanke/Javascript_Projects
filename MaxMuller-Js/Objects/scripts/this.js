// 1. this in global context (i.e. outside of any function)
function something() {
  console.log("something");
}

console.log("this outside of any function", this); // logs global object always (also in strict mode)!

