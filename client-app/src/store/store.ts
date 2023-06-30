import {combineReducers, createStore} from 'redux';
import loggedUserReducer from './loggedUserReducer';
import getPostsReducer from './getPostsReducer';

const reducers = combineReducers({
    loggedUserReducer,
    getPostsReducer,
})

const store = createStore(reducers);

export default store;