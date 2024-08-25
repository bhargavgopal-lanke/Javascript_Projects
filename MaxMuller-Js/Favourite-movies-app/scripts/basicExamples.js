// slice and splice methods

const hobbies = ["sports", "cooking"];

hobbies.push("Reading");
hobbies.unshift("coding");

// console.log("hobbies", hobbies);

hobbies[1] = "coding";

// console.log("hobbies", hobbies, hobbies[3]);

hobbies.splice(1, 0, "good food");

// console.log("hobbies", hobbies);

const removedElements = hobbies.splice(-2, 1);

// console.log("splice hobbies", hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// slice is used for selecting ranges
// the slice method selects from a given start, up to a given end
// it does not change the original array
// negative values also works the same way from start to the end.
const storedResults = testResults.slice(1, 4);

testResults.push(5.91);

console.log(storedResults, testResults);

// splice method adds or remove elements
// splice method overwrites the original array

// indexOf() method returns negative value -1 if it doesn't find anything

const personData = [{ name: "Max" }, { name: "Bhargav" }];

console.log(personData.indexOf({ name: "Manuel" }));

// find method example
// find method is used to find the element
const manuel = personData.find((person, idx, persons) => {
  return person.name === "Bhargav";
});

console.log("Manuel", manuel);

// manuelIndex method

const manuelIndex = personData.findIndex((person, idx, persons) => {
  return person.name === "Bhargav";
});

console.log("findIndex", manuelIndex);

// example 1

const prices = [1, 5.3, 1.5, 10.99, -5, 10];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  //   taxAdjustedPrices.push(price * (1 + tax));
  //   taxAdjustedPrices.push(priceObj);
  return priceObj;
});

console.log("taxAdjustedPrices", taxAdjustedPrices);

// convert an array into an object
function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  return numberArray.map((number) => {
    return { val: number };
  });
}

transformToObjects([1, 2, 3]);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices);
// console.log(sortedPrices.reverse());

const filteredArray = prices.filter((p) => p > 6);

console.log("filteredArray", filteredArray);

// split the string into an array

const dataString = "new york;10.99;2000";

const transformedData = dataString.split(";");
console.log("transformedData", transformedData);

// join method

const nameFragments = ["Max", "Schwarz"];

const nameJoin = nameFragments.join(" ");

console.log("nameJoin", nameJoin);
