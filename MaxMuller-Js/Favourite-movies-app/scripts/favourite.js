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

// empty the input fileds value after submit
const clearInputsHandler = () => {
  // using for loop
  for (let usrInputs of userInputs) {
    usrInputs.value = "";
  }
  // userInputs.forEach((item) => {
  //   item.value = "";
  // });
};

const movies = [];

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  // trim method remove the excess whitespace in the beginning and at the end of the input
  // check the rating numbers that are too small and too high
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    console.log("Please enter valid values (rating between 1 and 5)");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    ratingValue: ratingValue,
  };

  movies.push(newMovie);

  // toggleModalCard();
  clearInputsHandler();
};

// click events triggering when clicking the button
startAddMovieButton.addEventListener("click", toggleModalCard);
modalClose.addEventListener("click", closeModal);
modalCancelButton.addEventListener("click", closeModal);
confirmAddMovieButton.addEventListener("click", () => {
  addMovieHandler();
});
