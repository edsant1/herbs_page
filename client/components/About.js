import React from 'react';
import SecondaryNav from './SecondaryNav';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		window.scrollTo(0,0);
    window.jQuery('.button-collapse').sideNav({
  		closeOnClick: true
  	});
	}

	render() {
		return (
			<div>
				<SecondaryNav />
				<div className="overview">
					<div className="row">
						<h2>Our About Us page maybe a gallery soon</h2>
						&nbsp;
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet urna eros.
						 Donec sagittis tellus ac pulvinar convallis. Donec vel auctor eros. Nullam vel vestibulum quam.
						 Morbi eleifend neque vel facilisis viverra. In aliquam placerat nunc, nec posuere nibh eleifend a.
						 Pellentesque commodo dictum velit id molestie. Maecenas ornare a ligula eu sagittis. Sed auctor,
						 leo sed condimentum pulvinar, enim nisl facilisis sapien, eu pellentesque eros risus sed sapien.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;