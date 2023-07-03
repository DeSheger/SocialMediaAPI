import {combineReducers, createStore} from 'redux';
import loggedUserReducer from './loggedUserReducer';
import getPostsReducer from './getPostsReducer';
import getMessagesReducer from './getMessagesReducer';

const reducers = combineReducers({
    loggedUserReducer,
    getPostsReducer,
    getMessagesReducer
})

const store = createStore(reducers);

export default store;