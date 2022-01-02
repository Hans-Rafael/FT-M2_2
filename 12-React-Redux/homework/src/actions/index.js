////tipos de actions
const apikey = "53ca7bf9"
const URL = "http://www.omdbapi.com/?apikey=20dac387&s="
//const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
//const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
const GET_MOVIES = "GET_MOVIES"
//const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
 /**addMovieFavorite */


 export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }

  export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=53ca7bf9&s=" + titulo)
        .then(response => response.json())//json= array de objetos de peliculas
        .then(movies => {
          dispatch({ type: "GET_MOVIES", payload: movies });
        });
    };
  }
  export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
        .then(response => response.json())
        .then(detail => dispatch({ type: "GET_MOVIE_DETAIL", payload: detail }))
        }
  } 
  export function addMovieFavorite(title){
    return {
      type: "ADD_MOVIE_FAVORITE",
      payload: title
    }  
  }
  export function  removeMovieFavorite(id){
    return {
      type: "REMOVE_MOVIE_FAVORITE",
      payload: id
    }
  }