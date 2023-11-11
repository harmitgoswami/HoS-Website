import React, {Component} from 'react';
import './style.css';

class Heading extends Component {
	render() {
		return (
			<header>
				<h1>{this.props.head}</h1>
			</header>
		);
	}
}

export default Heading;
