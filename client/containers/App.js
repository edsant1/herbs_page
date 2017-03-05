import React from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';
import Footer from '../components/Footer';


class App extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return(
		  <div>
		  	<main>
		  	{this.props.children}
		  	</main>
		  	<Footer />
		  </div>
  	)
	}
};

export default App;
