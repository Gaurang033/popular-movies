const defaultState  = {
    movies: [],
    page: 1
}


function movieReducer(state=defaultState, action){
    switch(action.type){
        default:
            return state
        case 'FETCH_POPULAR_SHOWS':
            console.log("FETCH_POPULAR_SHOWS")
            return{
                ...state,
                movies: [...state.movies, ...action.data]
            }
        
        case 'INCREMENT_PAGE':
            return {
                ...state,
                page: state.page + 1 
            }
    }
}

export default movieReducer