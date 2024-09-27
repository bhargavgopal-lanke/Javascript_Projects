const addMoviebutton = document.getElementById("add-movvie-btn");

const searchButton = document.getElementById("serach-btn");

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
}

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
