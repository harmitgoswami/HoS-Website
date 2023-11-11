import React, {Component} from 'react';
import './style.css';

class AboutUs2 extends Component {
	render() {
		return (
			<section class="AboutUs2">
					<section class="AboutUsText2">
						<h1>About Us</h1>
						<p>The club aims to showcase the different stories of the community members in order to spread a positive outlook and to increase community engagement. Our content ranges from past engineering experiences to life advice to best moments of the individuals during their engineering degree years. The club also aims at teaching photography, videography, interviewing and leadership in unconventional engineering areas through a series of workshops, seminars and competitions to the Skule community members.</p>
						</section>
					<img 
						src="./src/img/logo.png" 
						alt="Logo"
						class="center"
					/>
			</section>
		);
	}
}

export default AboutUs2;