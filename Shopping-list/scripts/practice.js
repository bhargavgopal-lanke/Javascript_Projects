const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");

const items = document.querySelectorAll("li");

function run() {
  //   console.log(1);
  // add className to the paragraph
  //   text.className = "dark card";

  //   itemList.classList.forEach((c) => console.log(c));
  // add the class on click of the button
  text.classList.add("dark");
  // toggle the class on click of the button
  text.classList.toggle("hidden");
  // replace the existing class with new class
  text.classList.replace("dark", "card");
  // change style
  itemList.style.lineHeight = "3";
}

// get the button from the dom and assign the function to the event listener
// when we click on this button add the class to the paragraph
// document.querySelector("button").onclick = run;
