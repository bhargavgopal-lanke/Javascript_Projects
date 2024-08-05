const title = document.getElementById("addbutton");

// get /change content

// title.textContent = "hello world";
// title.innerText = "hello text";
// title.innerHTML = '<strong>Shopping</strong>'

// title.style.color = "red";
// title.style.backgroundColor = "white";
// title.style.padding = "20px";

// we can select the items by element ,class, id and input type using query selector
// console.log(document.querySelector("h1"));
// console.log(document.querySelector(".class-name"));
// console.log(document.querySelector("#id-name"));
// console.log(document.querySelector("input[type='text']"));
// console.log(document.querySelector("li:nth-child(2)"));

// const secondItem = document.querySelector("entered-value");

// secondItem.innerText = "Apple Juice";
// secondItem.style.color = "red";

// if we want to select all the items we select querySelectorAll()

// console.log(document.querySelectorAll("h1[0]"));

// let output;

// const parent = document.querySelector(".parent");

// output = parent.childNodes;
// output = parent.childNodes[3].textContent;
// // output = parent.childNodes[1];
// // output = parent.childNodes[2];
// output = parent.childNodes[5].outerHTML;
// output = parent.childNodes[5].innerText = "Child three";
// output = parent.childNodes[5].style.color = "red";
// output = parent.childNodes[5].style.fontWeight = "bold";
// output = parent.childNodes[5].style.fontWeight = "bold";

// console.log("output", output);

// if we want to add text inside a body
let div = document.createElement("li");
div.innerText = "New Text";
// let bodyText = document.body.appendChild(div);

// if we want to add new list inside an ul

let ul = document.querySelector("ul").appendChild(div);

// appending the test using createTextNode()

// const text = document.createTextNode("New text added");
// div.appendChild(text);

// create list item
// quick and dirty way
function createListItem(item) {
  const li = document.createElement("li");

  li.innerHTML = `${item} 
    <button>x</button>`;
  document.querySelector(".parent").appendChild(li);
}

createListItem("eggs");

// creating the list item in a clean and performant way

function createCleanListItem(item) {
  const button = createButton();
  const li = createNewListItem(item);
  li.appendChild(button);
  let allLists = document.querySelectorAll("li");
  let listAllItems;
  allLists.forEach((listItem) => {
    listAllItems += listItem.setAttribute("style", "padding: 15px");
  });
  console.log("listAllItems", listAllItems);
  document.querySelector(".parent").appendChild(li);
}

createCleanListItem("cheese");

function createButton() {
  const button = document.createElement("button");
  button.className = "btn btn-styling";
  button.innerText = "xml";
  button.style.padding = "5px 15px";

  return button;
}

function createNewListItem(item) {
  const li = document.createElement("li");
  li.className = "li list-li";
  li.appendChild(document.createTextNode(item));
  li.style.padding = "15px 0";
  return li;
}

// insertAdjacentElement Example

function insertElement() {
  const filter = document.querySelector(".parent");

  const h1 = document.createElement("h1");
  h1.innerText = "insertAdjacentElement text";
  // this takes two parameters where to add and what to add
  filter.insertAdjacentElement("beforebegin", h1);
}

insertElement();

// insertBefore Example

function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "insert   Before";

  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}

// insert the element challenge

// insert after example

// function insertAfter() {
//   // new element to insert
//   const li = document.createElement("li");
//   li.innerText = "Insert text After the selected element";
//   // esisting element to insert after
//   const firstItem = document.querySelector("li:first-child");
//   firstItem.parentElement.insertBefore(li, firstItem.nextSibling);
// }

// insertAfter();

// replace first item

function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.innerText = "Replace text with first child";
  firstItem.replaceWith(li);
}

replaceFirstItem();

// replace all items

function replaceAllItems() {
  const li = document.querySelectorAll("li");

  li.forEach((item, index) => {
    if (index === 2) {
      item.innerText = "two";
    } else {
      item.innerText = "Replace All";
    }
  });
}

replaceAllItems();

// replace something in the html

function replaceHeading() {
  const header = document.querySelector(".header");
  const h1 = document.querySelector(".header h1");

  const h2 = document.createElement("h2");
  h2.innerHTML = `Shopping List`;
  h2.id = "app-title";
  header.replaceChild(h2, h1);
}

replaceHeading();

//  clear button example

function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  // using remove method we can delete an item in the dom
  clearBtn.remove();
}

function removeFirstItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

function remooveListItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  // remove the items not based on zero index.
  li[itemNumber - 1].remove();
}

removeClearButton();
// removeFirstItem(5);
remooveListItem3(3);

const clearBtn = document.querySelector("#clear");
function onClear() {
  const itemList = document.querySelector("ul");
  const items = document.querySelectorAll("li");
  // this below line will empty the item list
  // itemList.innerHTML = "";
  // removing all the items from the list array
  items.forEach((item) => item.remove());
}

clearBtn.addEventListener("click", () => {
  onClear();
});
