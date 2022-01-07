import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }



    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>
                <h2>{this.props.movie.Type} </h2>
                <h2>{this.props.movie.Year} </h2>
                <h2>{this.props.movie.Rated} </h2>
                <h2>{this.props.movie.Released} </h2>
                <h2>{this.props.movie.Genre} </h2>
                <h2>{this.props.movie.Director} </h2>
                <h2>{this.props.movie.Writer} </h2>
                <h2>{this.props.movie.Actors} </h2>
                <h2>{this.props.movie.Language} </h2>
                <h2>{this.props.movie.Awards} </h2>
                <h2>{this.props.movie.imdbRating} </h2>
                <img src={this.props.movie.Poster} alt = {this.props.movie.Title} />

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (movieID) => dispatch(getMovieDetail(movieID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);


//export default (Movie);