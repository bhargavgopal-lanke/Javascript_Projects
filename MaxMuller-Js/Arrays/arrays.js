// array practice
// the length of an array is alway indexValues - 1
// arrays are index based and the first element starts with zero.

const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");
hobbies.unshift("Coding");
const poppedValue = hobbies.pop();
hobbies.shift();

console.log(hobbies);

hobbies[1] = 'Coding';

hobbies.splice(0, 0, 'Good Food');
// 1. splice without index position will delete all the items for that 
// index position inside an array
hobbies.splice(0);
// 2. if we give negative index value splice will check from last value in the array.
const removedElements = hobbies.splice(-1, 1);

console.log("hobbies", hobbies);

const personalData = [30, "Max", { moreDetail: [] }];

// multidimentional array
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

// if the data is a string variable declaration and forloop inside code.
// let loopData = ''     ===>  loopData +=  `${dataPoint}, `;  ;
// if the data is getting pushed into an array

let loopData = [];
for (const data of analyticsData) {
  for (const dataPoint of data) {
    loopData.push(dataPoint);
  }
}

console.log("loopData", loopData);
