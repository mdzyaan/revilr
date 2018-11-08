import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import historyReducer from '../reducers/history';
import thunk from 'redux-thunk';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            history: historyReducer
        }),
        composeEnhansers(applyMiddleware(thunk))
    );

    return store;
}


