const API_KEY = "53ca7bf9"// otra key es "bc6bbdfa";
const BASE_URL = "https://www.omdbapi.com/";
//constantes anteriores deberian estar guardado en carpeta git ignore o en un file .env
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const ADD_MOVIE_FAVOURITE = 'ADD_MOVIE_FAVOURITE';
export const DELETE_MOVIE_FAVOURITE = 'DELETE_MOVIE_FAVOURITE';
export const RESET_MOVIE_DETAIL = 'RESET_MOVIE_DETAIL';
//las constante anteriores podrian estar en otra carpeta y ser importadas aqui
//{imdbID, Title}
 
export function addMovieFavourite(movie) {
  //{imdbID, Title}
  return {
      type: ADD_MOVIE_FAVOURITE,
      payload: movie
  }
}

export function deleteMovieFavourite(imdbID) {
  return {
      type: DELETE_MOVIE_FAVOURITE,
      payload: imdbID
  }
}

export function getMovies(name) { //titanic
  return function(dispatch) {
      //https://www.omdbapi.com/?s=titanic&apikey=bc6bbdfa devuelve un json con tres propiedades donde Search es quien muestra las peliculas
      let url = `${BASE_URL}?s=${name}&apikey=${API_KEY}`
      return fetch(url)
      .then((response) => response.json())
      .then((json) => {
          dispatch({
              type: GET_MOVIES,
              payload: json.Search
          })
      })
      .catch(e => console.log(e))
  }
}

export function getMovieById(id) {
  return function(dispatch) {
      let url = `${BASE_URL}?i=${id}&apikey=${API_KEY}`
      return fetch(url)
      .then(response =>  response.json())
      .then((json) => {
          dispatch({
              type: GET_MOVIE_BY_ID,
              payload: json
          })
      })
      .catch((e) => console.log(e))
  }
}

export function resetMovieDetail() {
  return {
      type: RESET_MOVIE_DETAIL
  }
}