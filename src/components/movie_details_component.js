import React, { Component } from 'react'
import '../index.css'

export default class MovieDetailsComponent extends Component {
    render() {
        let movie = this.props.details;
        return (
            movie ?
                <div className="test">
                    <div className="detailsHeader">{movie.title}</div>
                    <div className="movieDetails">
                        <div className="left">
                            <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt={movie.title} />
                        </div>
                        <div className="right">
                            <p>year: {movie.release_date}</p>
                            <p>runtime: {movie.runtime}</p>
                            <p>rating: {movie.vote_average}/10</p>
                        </div>
                    </div>
                    <div>{movie.overview}</div>
                </div>
                : <div>Loading .....</div>
        )
    }
}
