import { ADD_MOVIE_FAVOURITE, DELETE_MOVIE_FAVOURITE, GET_MOVIES, GET_MOVIE_BY_ID, RESET_MOVIE_DETAIL } from "../actions";

const initialState = {
    movies: [],
    movieDetail: null,
    movieFavourites: []
}
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MOVIE_FAVOURITE:
            return {
                ...state,
                movieFavourites: [...state.movieFavourites, action.payload]
            }
        case DELETE_MOVIE_FAVOURITE:
            return {
                ...state,
                movieFavourites: state.movieFavourites.filter((movie) => movie.imdbID !== action.payload)
            }
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case GET_MOVIE_BY_ID:
            return {
                ...state,
                movieDetail: action.payload
            }
        case RESET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: null
            }
        default:
            return state
    }
}