import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import mainReducer from '../reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]

const configureStore = () => {
    const store = createStore(
        mainReducer,
        composeEnhancers(applyMiddleware(...middleware))
    )

    return store

}

export default configureStore
