const title = document.getElementById("addbutton");

// get /change content

title.textContent = "hello world";
// title.innerText = "hello text";
// title.innerHTML = '<strong>Shopping</strong>'

title.style.color = "red";
title.style.backgroundColor = "white";
title.style.padding = "20px";

// we can select the items by element ,class, id and input type using query selector
console.log(document.querySelector("h1"));
console.log(document.querySelector(".class-name"));
console.log(document.querySelector("#id-name"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)"));

const secondItem = document.querySelector("entered-value");

secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// if we want to select all the items we select querySelectorAll()
