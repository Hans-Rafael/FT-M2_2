import React from 'react';
import { connect } from 'react-redux';
import { getMovieById, resetMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getMovieById(id)
    }
    componentWillUnmount() {
        this.props.resetMovieDetail()
    }

    render() {
        console.log(this.props)
        return (
            <div className="movie-detail">
                {
                    this.props.movieDetail ? //si es null, dice cargando
                    <>
                        <h2>
                            {this.props.movieDetail.Title}
                        </h2>
                        <img src={this.props.movieDetail.Poster}/>
                        <p>
                            Actores: {this.props.movieDetail.Actors}
                        </p>
                        <p>
                            Año: {this.props.movieDetail.Year}
                        </p>
                    </>
                    :
                    <p>CARGANDO!</p>
                }
            </div>
        );
    }
}

function mapStateToProps(state) { //recibe el estado
    return {//retornar un objeto nuevo
        movieDetail: state.movieDetail
    } //este objeto se mezcla con mis props, entonces  yo tengo movieDetail en mis props
}

const mapDispatchToProps = {
    getMovieById, //esta funcion se va a agregar
    resetMovieDetail
}//a nuestras props!
//cuando la ejecute desde las props
//store.dispatch(getMovieById())

const conexion = connect(mapStateToProps, mapDispatchToProps)

export default conexion(Movie)


// export default connect(mapStateToProps, {getMovieById}) (Movie);