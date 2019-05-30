import React, { Component } from 'react'

export default class Grid extends Component {
    render() {
        let popular_movies = this.props.popular_movies
        console.log(popular_movies)
        return (
            popular_movies && popular_movies.length ?
                <div className="row">
                    {
                        popular_movies.map((movie) =>
                            <div className="block" key={movie.id}>
                                <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt={movie.title} />
                            </div>
                        )
                    }
                </div>
                : <div>Loading...</div>
        )
    }
}