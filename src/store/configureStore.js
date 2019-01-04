import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import historyReducers from '../reducers/historyReducers';
import authReducers from '../reducers/authReducers';
import mostViewedReducers from '../reducers/mostViewedReducers';
import detailReducers from '../reducers/detailReducers';
import thunk from 'redux-thunk';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            history: historyReducers,
            auth: authReducers,
            mostViewed: mostViewedReducers,
            detail: detailReducers,
        }),
        composeEnhansers(applyMiddleware(thunk))
    );

    return store;
}


