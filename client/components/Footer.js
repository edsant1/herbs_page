import React from 'react';

class Footer extends React.Component {

	render() {
		return (
			<div className="row ft-bkgrd">
				<div className="contactDiv col m5 s12">
					<h4 style={{marginBottom: '1.4rem', fontSize: '5rem', fontWeight:'300'}}>Contact Us</h4>
					<p>Call or text: 801.668.5796</p>
					<p>Email: herb84054@gmail.com</p>
				</div>
				<div className="logoDiv col m3 s6 offset-m2">
					<img src={'socialMediaLogos/FB-f-Logo__white_58.png'} />
				</div>
				<div className=" col m12 s12 cp-cby">
					<p>Website by CK</p>
				</div>
			</div>
		)
	}
}

export default Footer;