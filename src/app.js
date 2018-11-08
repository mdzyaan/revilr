import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addGame} from './actions/history';
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
ReactDOM.render(index, document.getElementById('app'));