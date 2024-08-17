// const addMovieModal = document.querySelector("add-modal");
//  const addMovieModal = document.body.children[1];

const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("#addmovie-btn");
const modalClose = document.querySelector(".btn-close");
const modalCancelButton = document.querySelector("#modalCancel-button");
const confirmAddMovieButton = document.querySelector("#confirm-add-movie-btn");
const userInputs = document.querySelectorAll("input");
const entryTextSection = document.querySelector("#entry-text");

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

let movieInfo = JSON.parse(localStorage.getItem("movies"));

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

function saveToStorage() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function renderAllItems() {
  const li = document.querySelector("ul");
  let html;
  movieInfo.forEach((listItem) => {
    html += `
      <div class="card">
        <img src="${listItem.image}" alt=${listItem.title} class="card-img" />
        <h1>${listItem.title}</h1>
        <p class="title">${listItem.rating}/5 stars</p>
      </div>
  `;
    li.innerHTML = html;
  });
}

renderAllItems();

const renderNewMovieElement = (title, imageUrl, rating) => {
  const li = document.createElement("li");
  li.className = "movie-element";
  li.innerHTML = `
    <div class="card">
      <img src="${imageUrl}" alt=${title} class="card-img" />
      <h1>${title}</h1>
      <p class="title">${rating}/5 stars</p>
    </div>
  `;

  const listRoot = document.querySelector("#movie-list");
  listRoot.appendChild(li);
};

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
    id: Math.floor(Math.random() * 10),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);

  const { title, image, rating } = newMovie;

  toggleModalCard();
  clearInputsHandler();
  saveToStorage();
  updateUI();
  renderNewMovieElement(title, image, rating);
};

// click events triggering when clicking the button
startAddMovieButton.addEventListener("click", toggleModalCard);
modalClose.addEventListener("click", closeModal);
modalCancelButton.addEventListener("click", closeModal);
confirmAddMovieButton.addEventListener("click", () => {
  addMovieHandler();
});
