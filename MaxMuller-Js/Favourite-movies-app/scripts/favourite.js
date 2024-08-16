// const addMovieModal = document.querySelector("add-modal");
//  const addMovieModal = document.body.children[1];

const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("#addmovie-btn");
const modalClose = document.querySelector(".btn-close");
const modalCancelButton = document.querySelector("#modalCancel-button");

// on click the add movie button toggle the add movie section card
function toggleModalCard() {
  addMovieModal.classList.toggle("visible");
}

// remove the visibile class on click of the close buttons
function closeModal() {
  addMovieModal.classList.remove("visible");
}

// click events triggering when clicking the button
startAddMovieButton.addEventListener("click", () => toggleModalCard);
modalClose.addEventListener("click", () => closeModal);
modalCancelButton.addEventListener("click", () => closeModal);
