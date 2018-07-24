import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Login extends Component{

	render(){
		return(
			<div>
				<h1>Login</h1>
				Login Page
				<Link to="/">Home</Link>
			</div>
		)
	}

}

export default Login;