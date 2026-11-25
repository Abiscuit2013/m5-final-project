
// let data = (responce => respose.json);

// let search = document.getElementById("nav-bar__search");

const API_KEY = '19d01bc6';

const searchBar = document.querySelector('#searchForm');

const searchInput = document.querySelector('#search-movies');

const searchBtn = document.querySelector('#searchBtn');

const movieContainer = document.querySelector('#movie-results');

const resultsInfo = document.querySelector('#showing-results')

const filter = document.querySelector('#sort');

let movieResults = [];

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const resultsInfo = searchInput.value.trim();
  console.log(resultsInfo);
  if (resultsInfo === true) {
    fetchMovies(resultsInfo);
  }
});



function fetchMovies(movieContainer
) {
  
  if (!searchInput.trim()) {
    movieContainer.innerHTML = "";
    movieResults = [];
    displayMovies(movieContainer);
    return;
  }
  
  const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchInput)}`
  
  function displayMovies(movies) {
    const innerHTML = movies.map(movie => {
      const Poster = movie.Poster !== 'N/A' ? movie.Poster : '';
  
      return movieContainer.innerHTML = movieResults;
    }).join('');
  }

fetch(apiURL) 
  .then(response => response.json())
  .then(data => {
    if (data.Response === "True") {
      movieResults = data; 
      movieContainer.innerHTML = displayMovies(movieResults);
    } 
    else {
      movieContainer.innerHTML = `<p>No movies found. Please refine your search and try again..</p>`;
    }
  })
  
  .catch(error => {
    console.error("Something went wrong:", error);
    movieContainer.innerHTML = `
    <p>Error</p>
    `
  });
}













// `
//       <div class="movie__card">
//         <img src="${movie.Poster}" alt="Movie Poster" class="movie__card--img">
//         <div class="movie__card--text">
//           <h4 class="movie__card--title">${movie.Title}</h4>
//           <h4 class="movie__year">${movie.Year}</h4>
//         </div>
//       </div>
//       `