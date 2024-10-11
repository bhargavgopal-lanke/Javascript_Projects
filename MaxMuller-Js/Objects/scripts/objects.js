const addMoviebutton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("serach-btn");

const movies = [];

const renderMovies = (filter = "") => {
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

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // check if a value is present in an object or not
    if ("info" in movie) {
      console.log("run this code");
    }
    // execute the if condition if info is not present inside the object.
    if (!("info" in movie)) {
      console.log("run this code");
    }
    // extract the method from an object.
    const { info, ...otherProps } = movie;
    const { getFormattedTitle } = movie;
    console.log("getFormattedTitle", movie.getFormattedTitle());
    const { title: movieTitle } = info; // destructuring with different name
    let text = movie.getFormattedTitle() + " - ";
    // accessing the dynamic values when we dont know what user going to enter
    // then loop through the object using for in loop and assign the value to variable
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key} : ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  let extraName = document.getElementById("extra-name").value;
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
    id: Math.floor(Math.random() * 10),
    getFormattedTitle: function () {
      // this keyword defines, look into the object where this function is part of.
      // this in regular functions defines the object it belongs to
      return this.info?.title?.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

addMoviebutton.addEventListener("click", addMovieHandler);

// dynamic key passing practice
// objects outputs in an alphabetical order.
const userKeyName = "hobbies";

let person = {
  "first name": "Bhargav",
  age: 30,
  [userKeyName]: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

const keyName = "first name";

console.log(person);
