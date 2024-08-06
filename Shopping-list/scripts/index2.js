let inputField = document.querySelector("#item-value");
let priorityInput = document.querySelector("#priority-input");
let checkbox = document.querySelector("#checkbox");
let heading1 = document.querySelector("h1");
let form = document.getElementById("item-form");
let displayValueField = document.querySelector("#entered-value");

function onSubmit(e) {
  e.preventDefault();
  const inputField = document.querySelector("#item-value");
  const priorityInput = document.querySelector("#priority-input");
  console.log(inputField, priorityInput);
}

form.addEventListener("submit", onSubmit);

function onInput(e) {
  heading1.textContent = e.target.value;
}

function onChecked(e) {
  console.log("checked boolean", e.target.checked);
  const checkedValue = e.target.checked;
  const isChecked = checkedValue ? "checked" : "notChecked";
  console.log("isChecked", isChecked);
}

function onFocus() {
  console.log("Input is focused");
  inputField.style.outline = "5px solid green";
}

function onBlur() {
  console.log("Input is Blur");
  inputField.style.backgroundColor = "red";
}

// checkbox.addEventListener("click", onChecked);
// inputField.addEventListener("input", onInput);
// priorityInput.addEventListener("change", onInput);
// checkbox.addEventListener("input", onChecked);
// inputField.addEventListener("focus", onFocus);
// inputField.addEventListener("blur", onBlur);
