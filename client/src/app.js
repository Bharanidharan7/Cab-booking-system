import React from 'react';
import ReactDOM from 'react-dom'
// import { BrowserRouter, Route } from 'react-router-dom'
// import ConfirmPage from './components/pageE/confirmationPage';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

// import App from './components//page1/entirePage'
import AppRouter from './components/pageLink/AppRouter';



ReactDOM.render(<AppRouter/>, document.getElementById('app'));

