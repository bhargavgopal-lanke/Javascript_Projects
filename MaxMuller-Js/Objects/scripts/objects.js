const addMoviebutton = document.getElementById("add-movie-btn");

const searchButton = document.getElementById("serach-btn");

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  // if there are no movies execute below code and remove the classname visible from movie-list div
  // if we have movies in the movielist add class visible

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

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

  movies.push(newMovie);
  renderMovies();
};

addMoviebutton.addEventListener("click", addMovieHandler);
