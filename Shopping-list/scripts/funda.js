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
  const button = document.createElement("button");
  button.className = "Test";
  button.innerText = "x"
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item))
  li.appendChild(button);
  document
    .querySelector(".parent")
    .appendChild(li);

}

createCleanListItem("cheese");

