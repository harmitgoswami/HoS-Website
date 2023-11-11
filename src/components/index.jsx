import React, {Component} from 'react';
import './style.css';

class Nav extends Component {
	render() {
		return (
			<nav style={{backgroundImage: `url(../src/img/${this.props.navImage})`}}>
				<p>{this.props.title}</p>
			</nav>
		);
	}
}

export default Nav;