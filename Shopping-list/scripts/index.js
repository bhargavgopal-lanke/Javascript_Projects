// get the value from the input field
// when click on add button add the text inside the users list.
// try to add multiple items in the list by pushing the items inside an array.
// get the items from the array and diplay the list

// get all the inputs

let addItemsArray = ["Bhargav", "Gopal", "web developer"];

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

document.querySelector("a").addEventListener("click", (e) => {
  // this is stopping the link to jump to google page
  e.preventDefault();
  console.log("Link was created");
});

function onDrag1(e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

const logo = document.querySelector("img");

logo.addEventListener("dragstart", (e) => {
  onDrag1(e);
});

logo.addEventListener("dragend", (e) => {
  onDrag1(e);
});
