import React, { Component } from 'react'
import Grid from './grid';

export default class MoviesComponent extends Component {
    componentDidMount() {
        this.props.fetchShows()
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    handleScroll = (e) => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (Math.ceil(windowBottom) >= docHeight) {
            console.log("bottom Reached")
            this.props.incrementePage(this.props.page)
            console.log(this.props)
            this.props.fetchShows(this.props.page)
        } else {
        }
    }

    render() {
        // console.log(this.props)
        // let popular_movies = this.props.popular_movies
        // const items = popular_movies.length > 0 ? popular_movies.map((item)=> <div key={item.id}>item.title</div>) : "Loading"  
        return (
            <div className="row" onScroll={this.handleScroll}>
                <Grid popular_movies={this.props.popular_movies} />
            </div>
        )
    }
}
