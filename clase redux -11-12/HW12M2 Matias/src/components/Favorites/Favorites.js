import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { deleteMovieFavourite } from "../../actions";

import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movieFavourites.map((movie) => {
              return <li>
                <span>
                  <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title}
                  </ Link>
                  </span>
                <button onClick={ () => this.props.deleteMovieFavourite(movie.imdbID)}>X</button>
                </li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieFavourites: state.movieFavourites
  }
}

export default connect(mapStateToProps, {deleteMovieFavourite})(ConnectedList);
