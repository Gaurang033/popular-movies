import React, { Component } from 'react'
import { getMovieDetail } from '../actions/get_movie_details';
import { connect } from 'react-redux';
import MovieDetailsComponent from '../components/movie_details_component';


class MovieDetailsContainer extends Component {

    componentDidMount() {
        const movie_id = this.props.match.params.movie_id
        this.props.fetchMovieDetail(movie_id)
    }


    render() {
        return (
            <MovieDetailsComponent
                details={this.props.movie_detail}
            />

        )
    }

}

const mapStateToProps = (state) => {
    return {
        movie_detail: state.details.details
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)