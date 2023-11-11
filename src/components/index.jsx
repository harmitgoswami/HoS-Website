import React, {Component} from 'react';
import './style.css';

class Card extends Component {
	render() {
		return (
			<label htmlFor="checkbox" class="card">
				<input type="checkbox" id="checkbox" />
				<span class="profile">
					<h1>Emaan</h1>
					<img
						src= {`../src/profiles/${this.props.image}`}
						alt={this.props.name}
						width="250"
						height="250"
					/>
					<p>Hi I'm Emaan</p>
				</span>
				<figure>
					<img
						src= {`../src/profiles/${this.props.image}`}
						alt={this.props.name}
						width="500"
						height="500"
					/>
					<figcaption>{this.props.name}</figcaption>
				</figure>
				<p>{this.props.role}</p>
			</label>
		);
	}
}

export default Card;