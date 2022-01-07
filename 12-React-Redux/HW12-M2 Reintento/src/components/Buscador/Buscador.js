import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavourite } from "../../actions";
import './Buscador.css';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    this.setState({
      title: ""
    })
  }
  addFavourite = (imdbID, Title) => {
    this.props.addMovieFavourite({imdbID, Title})
  }
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        
        <div>
          {this.props.movies.map((movie) => {
            return <>
              <img src={movie.Poster}></img>
              <h4>
                <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title}
                </Link>
              </h4>
              <button onClick={() => this.addFavourite(movie.imdbID, movie.Title)}>Agregar a favoritos!!</button>
              <p>{movie.Year}</p>
              <p>Type: {movie.Type}</p>
            </>
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { getMovies, addMovieFavourite })(Buscador);
