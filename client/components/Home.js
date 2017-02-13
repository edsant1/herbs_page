import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import LandscapePanel from '../components/LandscapePanel';
import ChristmasLights from '../components/ChristmasLights';
import Contact from '../components/Contact';

class Home extends React.Component {

	render() {
		return(
			<div>
				<Header />
	  		<Link to="/landscape"><LandscapePanel /></Link>
	  		<ChristmasLights />
	  		<Contact />
			</div>
		)
	}
}

export default Home;