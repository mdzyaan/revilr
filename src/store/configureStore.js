import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import historyReducers from '../reducers/historyReducers';
import authReducers from '../reducers/authReducers';
import mostViewedReducers from '../reducers/mostViewedReducers';
import detailReducers from '../reducers/detailReducers';
import bookmarkReducer from '../reducers/bookmarkReducer';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            history: historyReducers,
            auth: authReducers,
            mostViewed: mostViewedReducers,
            detail: detailReducers,
            bookmark: bookmarkReducer,
        }),
        composeEnhansers(applyMiddleware(thunk))
    );

    return store;
}


