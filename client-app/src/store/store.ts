import {combineReducers, createStore} from 'redux';
import loggedUserReducer from './loggedUserReducer';

const reducers = combineReducers({
    loggedUserReducer
})

const store = createStore(reducers);

export default store;