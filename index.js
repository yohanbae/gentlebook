import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute } from "react-router";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import Mainho from './Mainho';
import Login from './Login';

import registerServiceWorker from './registerServiceWorker';


const app = document.getElementById('root');

ReactDOM.render((
	<BrowserRouter>
		<div>
		<Route exact path="/" component={App}></Route>
		<Route path="/mainho/:param?" component={Mainho}></Route>
		<Route path="/login" component={Login}></Route>
		</div>
	</BrowserRouter>
), app)


registerServiceWorker();
