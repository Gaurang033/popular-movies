const defaultState = {
    details: {}
}

function movieDetailsReducer(state=defaultState, action){
    switch(action.type){
        default:
            return state
        case 'GET_MOVIE_DETAILS':
            console.log('GET_MOVIE_DETAILS')
            return {
                ...state,
                details: action.data
            }
    }
}

export default movieDetailsReducer