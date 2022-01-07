const API_KEY = "bc6bbdfa";
const BASE_URL = "https://www.omdbapi.com/";
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const ADD_MOVIE_FAVOURITE = 'ADD_MOVIE_FAVOURITE';
export const DELETE_MOVIE_FAVOURITE = 'DELETE_MOVIE_FAVOURITE';
export const RESET_MOVIE_DETAIL = 'RESET_MOVIE_DETAIL';

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
        //https://www.omdbapi.com/?s=titanic&apikey=bc6bbdfa
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