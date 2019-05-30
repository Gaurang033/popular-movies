import axios from 'axios'
import data from '../resources/credential.json'

export function getMovieDetail(movieId){
    return function(dispatch) {
        axios.get("http://api.themoviedb.org/3/movie/popular?page="+page+"&api_key="+data.api_key)
        .then(response =>{
            return dispatch(popularShowsAction(response.data.results))
        }).catch(response =>{
            console.log("error Occured")
        })
    }
}

