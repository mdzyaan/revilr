import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/main.scss'
import AppRouter from './routers/AppRouter'


console.log('app.js is running')
ReactDOM.render(<AppRouter/>, document.getElementById('app'));