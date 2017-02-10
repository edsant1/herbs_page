import React from 'react';
import Header from '../components/Header';
import LandscapePanel from '../components/LandscapePanel';
import ChristmasLights from '../components/ChristmasLights';
import Contact from '../components/Contact';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.goTo = this.goTo.bind(this);
	}

	goTo(e) {

		if(e.target === this.refs.land) {
			landscape.classList.add('activated');
			window.scrollTo(0, landscape.offsetTop);
		}if(e.target === this.refs.lights) {
			window.scrollTo(0, lightPanel.offsetTop);
		}if(e.target === this.refs.contact) {
			window.scrollTo(0, contactPanel.offsetTop);
		}
	}


	render() {
		return(
		  <div>
		  	<nav className="transparent">
		  		<div className="wrapper">
		  			<a href="/" className="brand-logo"><i className="material-icons">local_florist</i></a>
		  			<a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
		  			<ul className="right hide-on-med-and-down">
		  				<li><a ref="land" className="nav-links land" onClick={this.goTo}>Landscaping</a></li>
		  				<li><a ref="lights" className="nav-links lights" onClick={this.goTo}>Christmas Lights</a></li>
		  				<li><a ref="contact" className="nav-links contact" onClick={this.goTo}>Contact Us</a></li>
		  			</ul>
		  			<ul className="side-nav" id="mobile">
		  				<li><a>Landscaping</a></li>
		  				<li><a>Christmas Lights</a></li>
		  				<li><a>Contact Us</a></li>
		  			</ul>
		  		</div>
		  	</nav>
		  	<main>
		  		<Header />
		  		<LandscapePanel />
		  		<ChristmasLights />
		  		<Contact />
		  	</main>
		  </div>
  	)
	}
};

export default App;
