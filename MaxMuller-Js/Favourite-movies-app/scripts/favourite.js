// const addMovieModal = document.querySelector("add-modal");
//  const addMovieModal = document.body.children[1];

const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("#addmovie-btn");
const modalClose = document.querySelector(".btn-close");
const modalCancelButton = document.querySelector("#modalCancel-button");
const confirmAddMovieButton = document.querySelector("#confirm-add-movie-btn");
const userInputs = document.querySelectorAll("input");

// on click the add movie button toggle the add movie section card
function toggleModalCard() {
  addMovieModal.classList.toggle("visible");
}

// remove the visibile class on click of the close buttons
function closeModal() {
  addMovieModal.classList.remove("visible");
}

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  // trim method remove the excess whitespace in the beginning and at the end of the input
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === ""
  ) {
  }

  console.log(titleValue, imageUrlValue, ratingValue);
};

// click events triggering when clicking the button
startAddMovieButton.addEventListener("click", toggleModalCard);
modalClose.addEventListener("click", closeModal);
modalCancelButton.addEventListener("click", closeModal);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
