import React from 'react';

class XmasLights extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="container overview">
				<div className="row">
					<h2>This is the Holiday lights page</h2>
					&nbsp;
					<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet urna eros.
					 Donec sagittis tellus ac pulvinar convallis. Donec vel auctor eros. Nullam vel vestibulum quam.
					 Morbi eleifend neque vel facilisis viverra. In aliquam placerat nunc, nec posuere nibh eleifend a.
					 Pellentesque commodo dictum velit id molestie. Maecenas ornare a ligula eu sagittis. Sed auctor,
					 leo sed condimentum pulvinar, enim nisl facilisis sapien, eu pellentesque eros risus sed sapien.</h5>
				</div>
				<div className="row img-div">
					<img style={{height: '35vh', width: '100%'}} src={'pictures/emeraldLake.jpg'} alt={'pictures/landscape2copy.jpg'} />
				</div>
			</div>
		)
	}
}

export default XmasLights;