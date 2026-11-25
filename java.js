
// let data = (responce => respose.json);

// let search = document.getElementById("nav-bar__search");

const API_KEY = '19d01bc6';

const searchBar = document.querySelector('#searchForm');

const searchInput = document.querySelector('#searchBtn');

const movieContainer = document.querySelector('#movie-results');

const resultsInfo = document.querySelector('#search-term')

const filter = document.querySelector('#sort');

let movieResults = [];

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  const resultsInfo = searchInput.value.trim();
  if (resultsInfo) {
    fetchMovies(resultsInfo);
  }
});



function searchMovies(searchInput) {
  
  if (!searchInput.trim()) {
    movieContainer.innerHTML = "";
    movieResults = [];
    return;
  }
  
  const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchInput)}`

fetch(apiURL) 
  .then(response => response.json())
  .then(data => {
    if (data.Response === "True") {
      movieResults = []; 
    } else {
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



function displayMovies(movies) {
  const movieHTML = movies.map(movie => {
    const Poster = movie.Poster !== 'N/A' ? movie.Poster : '';

    return movieContainer.movieHTML = `
      <div class="movie__card">
        <img src="${Poster}" alt="Movie Poster" class="movie__card--img">
        <div class="movie__card--text">
          <h4 class="movie__card--title">${movie.Title}</h4>
          <h4 class="movie__year">${movie.Year}</h4>
        </div>
      </div>
      `
  }).join('');
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