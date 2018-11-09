import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetGames} from './actions/history';
import { login, logout } from './actions/auth';
import {firebase} from './firebase/firebase';
// import styles and assets
import 'normalize.css/normalize.css';
import './styles/main.scss';
import "./styles/assets/img/pubgCover.png";
import "./styles/assets/font/Facon.ttf";

import './firebase/firebase';

const store = configureStore();

const index = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(index, document.getElementById('app'));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetGames());
        renderApp();
        history.push('/home')
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})

