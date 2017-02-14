import React from 'react';
import Home from '../components/Home';
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
			$('html, body').animate({
    		scrollTop: $('.panel1').offset().top
			}, 1000);
		}if(e.target.matches('.lights')) {
			$('html, body').animate({
    		scrollTop: $('.panel2').offset().top
			}, 1000);
		}if(e.target.matches('.contact')) {
			$('html, body').animate({
    		scrollTop: $('.panel3').offset().top
			}, 1000);
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
		  				<li><a ref="land" className="nav-links land" onClick={this.goTo}>Landscaping</a></li>
		  				<li><a ref="lights" className="nav-links lights" onClick={this.goTo}>Christmas Lights</a></li>
		  				<li><a ref="contact" className="nav-links contact" onClick={this.goTo}>Contact Us</a></li>
		  			</ul>
		  		</div>
		  	</nav>
		  	<main>
		  	{this.props.children}
		  	</main>
		  </div>
  	)
	}
};

export default App;
