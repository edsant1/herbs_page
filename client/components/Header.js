import React from 'react';

class Header extends React.Component {

	componentDidMount() {
		const header = document.querySelector('.header-panel');
		header.style.height = window.innerHeight + 'px';
	}

	render() {
		return(
			<div className="header-panel row">
				<div className="hd-ovrly" style={{width: '100%'}}>
					<h1 className="header-title">Nature Artisans</h1>
				</div>
			</div>
		)
	}
}

export default Header;