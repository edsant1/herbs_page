import React from 'react';

class LandscapePanel extends React.Component {

	render() {
		return(
			<div className="row panel">
				<div className="banner panel1">
					<div className="overlaid" style={{height: '550px', width: '100%'}}>
						<h4 className="services center">Landscaping</h4>
					</div>
				</div>
			</div>
		)
	}
}

export default LandscapePanel;