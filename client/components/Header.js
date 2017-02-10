import React from 'react';

class Header extends React.Component {

	componentDidMount() {
		const header = document.querySelector('.header-panel');
		header.style.height = window.innerHeight + 'px';
	}

	render() {
		return(
			<div className="header-panel row">
				<h1 className="header-title center">Bountiful Landsaping</h1>
			</div>
		)
	}
}

export default Header;