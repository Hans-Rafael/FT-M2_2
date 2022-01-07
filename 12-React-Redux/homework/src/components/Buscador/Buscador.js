import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies } from "../../actions";
import { addMovieFavorite } from "../../actions";
//import {mapDispatchToProps} from '../../actions';
//import {mapStateToProps} from '../../Favorites/Favorites';




export class Buscador extends Component {
  //this.props si tuviera props
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
    this.props.getMovies(this.state.title);
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
        <ul>
          {/* Aqui tienes tu codigo para mostrar la lista de peliculas */
          this.props.movies && this.props.movies.map(movie =>(
            <div key={movie.imdbID} >
              <Link to={`/movie/${movie.imdbID}`} >
                <li>{movie.Title}</li>
              </Link>
              <button onClick={()=>this.props.addMovieFavorite(
                {
                  id: movie.imdbID,
                  title: movie.Title,
                }
              )}>Favorite </button>
            </div>
           ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded

  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (title) => dispatch(addMovieFavorite(title)),
    
  };
} 
export default connect() (Buscador);

/* ###### Lo mismo pero  con funciones en lugar de classes ####
export default function Buscador(props)({props1, props2}){
  const [title, setTitle] = useState("");
  let handleChange = (e) => {
    setTitle(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    props.getMovies(title);
  }

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
        <ul>
         {/### Aqui tienes que escribir tu codigo para mostrar la lista de peliculas ###/}
         </ul>
    </div>
  )
}
*/
