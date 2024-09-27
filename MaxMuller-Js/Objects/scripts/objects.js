const addMoviebutton = document.getElementById("add-movvie-btn");

const searchButton = document.getElementById("serach-btn");

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  // if there are no movies execute below code and remove the classname visible from movie-list div
  // if we have movies in the movielist add class visible
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
};

renderMovies();

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random() * 10,
  };

  return newMovie;
};
