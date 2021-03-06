import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import LandscapePanel from '../components/LandscapePanel';
import ChristmasLights from '../components/ChristmasLights';
import AboutPanel from '../components/AboutPanel';
import $ from 'jquery';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.goTo = this.goTo.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
    window.jQuery('.button-collapse').sideNav({
  		closeOnClick: true
  	});
	}


	goTo(e) {
		if(e.target.matches('.land')) {
			$('html, body').clearQueue().animate({
    		scrollTop: $('.panel1').offset().top
			}, 1000);
		}if(e.target.matches('.lights')) {
			$('html, body').clearQueue().animate({
    		scrollTop: $('.panel2').offset().top
			}, 1000);
		}if(e.target.matches('.about')) {
			$('html, body').clearQueue().animate({
    		scrollTop: $('.panel3').offset().top
			}, 1000);
		}
	}


	render() {
		return(
			<div>
				<nav className="transparent">
		  		<div className="wrapper">
		  			<Link to="/" className="brand-logo"><i className="material-icons">local_florist</i></Link>
		  			<a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
		  			<ul className="right hide-on-med-and-down">
		  				<li><a ref="land" className="nav-links land" onClick={this.goTo}>Landscaping</a></li>
		  				<li><a ref="lights" className="nav-links lights" onClick={this.goTo}>Holiday Lights</a></li>
		  				<li><a ref="about" className="nav-links about" onClick={this.goTo}>About</a></li>
		  			</ul>
		  			<ul className="side-nav" id="mobile">
		  				<li><a ref="land" className="nav-links land" onClick={this.goTo}>Landscaping</a></li>
		  				<li><a ref="lights" className="nav-links lights" onClick={this.goTo}>Holiday Lights</a></li>
		  				<li><a ref="about" className="nav-links about" onClick={this.goTo}>About</a></li>
		  			</ul>
		  		</div>
		  	</nav>
				<Header />
	  		<Link to="/landscape"><LandscapePanel /></Link>
	  		<Link to="/holidaylights"><ChristmasLights /></Link>
	  		<Link to="/about"><AboutPanel /></Link>
			</div>
		)
	}
}

export default Home;