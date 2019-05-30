import axios from 'axios'
import data from '../resources/credential.json'


export function getPopularMovies(page) {
    console.log(data)
    return function (dispatch) {
        axios.get("http://api.themoviedb.org/3/movie/popular?page=" + page + "&api_key=" + data.api_key)
            .then(response => {
                return dispatch(popularMoviesAction(response.data.results))
            }).catch(response => {
                // Handle later 
                console.log("error Occured")
            })
    }
}

export function popularMoviesAction(data) {
    console.log(data)
    return {
        type: 'FETCH_POPULAR_SHOWS',
        data: data
    }
}

export function incrementePage() {
    // console.log(data)
    return {
        type: 'INCREMENT_PAGE'
    }
}
