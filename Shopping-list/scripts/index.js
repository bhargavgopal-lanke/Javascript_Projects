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
    html += `<p class="">${item} <span id="delete-item" data-delete-id="">x</span></p>`;
  });
  displayValueField.innerHTML = html;
  document.getElementById("item-value").value = "";
}



// delete the selected item
document.querySelector("#btn-add-new").addEventListener("click", () => {
  const listNewItem1 = document.querySelector("#entered-value");

  // listNewItem1.forEach((items) => {
  // console.log(">>>>", items.childNodes);
  listNewItem1.addEventListener("click", (e) => {
    console.log("event", e.target.tagName);
    if (e.target.tagName === "P") {
      e.target.remove();
    }
  });

  // });
});



// set the array val to empty to delete all the items

function deleteAllItems() {
  addItemsArray = [];
  addItems();
}

// document.querySelector("a").addEventListener("click", (e) => {
//   // this is stopping the link to jump to google page
//   e.preventDefault();
//   console.log("Link was created");
// });

function onDrag1(e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

const logo = document.querySelector("img");

// logo.addEventListener("dragstart", (e) => {
//   onDrag1(e);
// });

// logo.addEventListener("dragend", (e) => {
//   onDrag1(e);
// });

const itemInput = document.getElementById("item-value");

const onKeyPress = (e) => {
  if (e.keyCode === 13) {
    alert("you pressed enter");
  }

  //code
  if (e.code === "Digit2") {
    console.log("you pressed 1");
  }

  if (e.repeat) {
    console.log("You are holding down " + e.key);
  }

  const inputValue = e.target.value;
  console.log("inputValue", inputValue);
};

// itemInput.addEventListener("keydown", onKeyPress);

// on load

// window.load = function () {
//   document.querySelector("h1").textContent = "Hello World";
// };

// instead of window.load we can use window.addEventListener load
// load event waits for the entire page to load including all resourses
window.addEventListener("load", () => {
  document.querySelector("li").textContent = "hello world";
});

// DOMcontentLoaded is loaded as soon as the DOM is parsed and loaded

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("h1").textContent = "Hello Bhargav";
});
