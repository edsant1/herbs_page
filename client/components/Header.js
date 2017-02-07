import React from 'react';

class Header extends React.Component {

	headerHeight() {
		const header = document.querySelector('.header-panel');
		header.style.height = window.innerHeight + 'px';
	}

	render() {
		return(
			<div className="header-panel row">
				<h1 className="header-title center">Landscape Artisan</h1>
			</div>
		)
	}
}

export default Header;