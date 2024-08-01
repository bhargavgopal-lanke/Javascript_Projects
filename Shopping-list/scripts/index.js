// get the value from the input field
// when click on add button add the text inside the users list.
// try to add multiple items in the list by pushing the items inside an array.
// get the items from the array and diplay the list

// get all the inputs

let addItemsArray = ["Bhargav", "Gopal", "web developer"];
let inputFieldValue = document.querySelector("#item-value").value;

function addItems() {
  let inputFieldValue = document.querySelector("#item-value").value;
  let displayValueField = document.querySelector("#entered-value");

  let html = "";
  if (inputFieldValue.length > 1) {
    addItemsArray.push(inputFieldValue);
  }
  addItemsArray.forEach((item) => {
    html += `<p class="">${item} <span>x</span></p>`;
  });
  displayValueField.innerHTML = html;
  document.getElementById("item-value").value = "";
}

addItems();

// set the array val to empty to delete all the items

function deleteAllItems() {
  addItemsArray = [];
  addItems();
}
