import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
                                <Link to= {"/movie/"+movie.id} >
                                    <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt={movie.title} />
                                </Link>
                            </div>
                        )
                    }
                </div>
                : <div>Loading...</div>
        )
    }
}