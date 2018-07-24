import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Mainho extends Component{

	render(){
		return(
			<div>
				<h1>MAin PAGE</h1>
				<h2>{this.props.match.params.yohans}</h2>
				<Link to="/">Home</Link>
			</div>
		)
	}

}

export default Mainho;