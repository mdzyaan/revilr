import {createStore, combineReducers} from 'redux';
import historyReducer from '../reducers/history';

export default () => {
    const store = createStore(
        combineReducers({
            history: historyReducer
        })
    );

    return store;
}


