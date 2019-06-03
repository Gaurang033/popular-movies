import axios from 'axios'
import data from '../resources/credential.json'

export function getMovieDetail(movieId){
    return function(dispatch) {
        axios.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+data.api_key)
        .then(response =>{
            return dispatch(getMovieDetailAction(response.data))
        }).catch(response =>{
            console.log("error Occured")
        })
    }
}

function getMovieDetailAction(data){
    return{
        'type': 'GET_MOVIE_DETAILS',
        'data': data
    }
}
