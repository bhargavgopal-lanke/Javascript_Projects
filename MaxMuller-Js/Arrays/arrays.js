// array practice

const hobbies = ["Cooking", "Sports"];
const personalData = [30, "Max", { moreDetail: [] }];

// flatten arrays
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
