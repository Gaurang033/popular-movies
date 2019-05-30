// const defaultState  = {
//     shows: [],
//     page: 1
// }

// const mainReducer = (state=defaultState, action) =>{
//     switch(action.type){
//         default:
//             return state
//         case 'FETCH_POPULAR_SHOWS':
//             return{
//                 ...state,
//                 shows: [...state.shows, ...action.data]
//             }
        
//         case 'INCREMENT_PAGE':
//             return {
//                 ...state,
//                 page: state.page + 1 
//             }
//     }
// }

// export default mainReducer

import { combineReducers } from 'redux'
import movieReducer from './movie_reducers'

export default combineReducers({
    movieReducer
})