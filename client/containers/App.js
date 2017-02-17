import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';
import Footer from '../components/Footer';
import $ from 'jquery';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.goTo = this.goTo.bind(this);
	}

  componentDidMount() {
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
		}if(e.target.matches('.contact')) {
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
		  				<li><a ref="contact" className="nav-links contact" onClick={this.goTo}>Contact Us</a></li>
		  			</ul>
		  			<ul className="side-nav" id="mobile">
		  				<li><a ref="land" className="nav-links land" onClick={this.goTo}>Landscaping</a></li>
		  				<li><a ref="lights" className="nav-links lights" onClick={this.goTo}>Holiday Lights</a></li>
		  				<li><a ref="contact" className="nav-links contact" onClick={this.goTo}>Contact Us</a></li>
		  			</ul>
		  		</div>
		  	</nav>
		  	<main>
		  	{this.props.children}
		  	</main>
		  	<Footer />
		  </div>
  	)
	}
};

export default App;
