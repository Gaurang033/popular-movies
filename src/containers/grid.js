import React, { Component } from 'react'
import MoviesComponent from '../components/movies';
import {connect} from 'react-redux'
import { getPopularMovies, incrementePage } from '../actions/get_popular_movies';

class GridContainer extends Component {
    render() {
        return (
            <MoviesComponent
                fetchShows = {this.props.fetchShows}
                popular_movies = {this.props.movieReducer.movies}
                incrementePage = {this.props.incrementePage}
                page = {this.props.movieReducer.page}
            />
        )
    }
}

const mapStateToProps = state => {
    return state
  }
  
const mapDispatchToProps = dispatch => {
    return {
        fetchShows: (page) => dispatch(getPopularMovies(page)),
        incrementePage: () => dispatch(incrementePage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)