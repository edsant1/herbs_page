import React from 'react';
import { Link } from 'react-router';


class SecondaryNav extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<nav className="sec-nav-color">
		  		<div className="wrapper">
		  			<Link to="/" className="brand-logo"><i className="material-icons">local_florist</i></Link>
		  			<a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
		  			<ul className="right hide-on-med-and-down">
		  				<li><Link to="/landscape" ref="land" className="nav-links land">Landscaping</Link></li>
		  				<li><Link to="/holidaylights" ref="lights" className="nav-links lights">Holiday Lights</Link></li>
		  				<li><Link to="/about" ref="about" className="nav-links about">About</Link></li>
		  			</ul>
		  			<ul className="side-nav" id="mobile">
		  				<li><Link to="/landscape" ref="land" className="nav-links land">Landscaping</Link></li>
		  				<li><Link to="/holidaylights" ref="lights" className="nav-links lights">Holiday Lights</Link></li>
		  				<li><Link to="/about" ref="about" className="nav-links about">About</Link></li>
		  			</ul>
		  		</div>
		  	</nav>
			</div>

		)
	}
}

export default SecondaryNav;