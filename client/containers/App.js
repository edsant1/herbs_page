import React from 'react';
import Header from '../components/Header';
import LandscapePanel from '../components/LandscapePanel';
import ChristmasLights from '../components/ChristmasLights';


const App = () => (

  <div>
  	<nav className="transparent">
  		<div className="wrapper">
  			<a href="/" className="brand-logo"><i className="material-icons">local_florist</i></a>
  			<a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
  			<ul className="right hide-on-med-and-down">
  				<li><a className="nav-links">Landscaping</a></li>
  				<li><a className="nav-links">Christmas Lights</a></li>
  				<li><a className="nav-links">Contact Us</a></li>
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
  	</main>
  </div>
);

export default App;
