import React from 'react';
import $ from 'jquery';

class LandscapePanel extends React.Component {
	constructor(props) {
		super(props);
		this.handleEventEnter = this.handleEventEnter.bind(this);
		this.handleEventLeave = this.handleEventLeave.bind(this);
	}

	componentDidMount() {
		this.refs.hover.addEventListener('mouseover', this.handleEventEnter);
		this.refs.hover.addEventListener('mouseleave', this.handleEventLeave);
	}

	handleEventEnter(e) {
		landscape.classList.add('hovered');
	}

	handleEventLeave(e) {
		landscape.classList.remove('hovered');
	}

	render() {
		return(
			<div className="row panel">
				<div className="banner panel1">
					<h4 ref="hover" className="services center">Landscaping</h4>
				</div>
			</div>
		)
	}
}

export default LandscapePanel;