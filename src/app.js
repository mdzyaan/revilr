import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/main.scss'
import AppRouter from './routers/AppRouter'
import "./styles/assets/img/pubgCover.png";
import "./styles/assets/font/Facon.ttf";



console.log('app.js is running');


ReactDOM.render(<AppRouter/>, document.getElementById('app'));