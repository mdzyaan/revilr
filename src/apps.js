import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetGames} from './actions/history';
import { login, logout } from './actions/auth';
import { startAddDetail } from './actions/detail';
import {startSetGameMostViewed} from './actions/mostViewed';
import {startSetBookmarkGames} from './actions/bookmark';
import {firebase} from './firebase/firebase';
// import styles and assets
import 'normalize.css/normalize.css';
import './styles/main.scss';
import "./styles/assets/img/pubgCover.png";
import "./styles/assets/font/Facon.ttf";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
        store.dispatch(startAddDetail(user.providerData[0]))
        store.dispatch(startSetBookmarkGames())
        store.dispatch(startSetGames());
        store.dispatch(startSetGameMostViewed());
        
        renderApp();
        history.goForward()
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})

