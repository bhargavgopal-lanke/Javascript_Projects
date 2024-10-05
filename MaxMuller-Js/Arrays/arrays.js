// array practice
// the length of an array is alway indexValues - 1  
// arrays are index based and the first element starts with zero.

const hobbies = ["Cooking", "Sports"];
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
