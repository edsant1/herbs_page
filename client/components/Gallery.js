import React from 'react';

class Landscape extends React.Component {
	constructor(props) {
		super(props);
		this.scrollLeft = this.scrollLeft.bind(this);
		this.scrollRight = this.scrollRight.bind(this);
		this.state = { count: 0 };
	}

	componentDidMount() {
  	window.addEventListener('scroll', this.fixedServRow);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.fixedServRow);
	}

		scrollLeft(e) {
		const pics = document.querySelectorAll('.slides');

		if(this.state.count > 0){
			this.setState({ count: this.state.count - 1}, () => {
				if(this.state.count >= 0) {
					pics.forEach( (pic) => {
						pic.classList.remove('activated');
					})
				}

				if(this.state.count <= pics.length - 1) {
					pics[this.state.count].classList.add('activated');
				}
			})
		}
	}

	scrollRight(e) {
		const pics = document.querySelectorAll('.slides');

		if(this.state.count < pics.length - 1) {
			this.setState({count: this.state.count + 1}, () => {
				if(this.state.count >= 0) {
					pics.forEach( (pic) => {
						pic.classList.remove('activated');
					})
				}

				if(this.state.count < pics.length) {
					pics[this.state.count].classList.add('activated');
				}
			})
		}
	}

	render() {
		return (
			<div>
				<div className="controls">
					<button type="button" className="carousel-cntrl cntrl-left" onClick={this.scrollLeft}>
						<i className="material-icons" style={{fontSize: '5rem'}}>chevron_left</i>
					</button>
					<button type="button" className="carousel-cntrl cntrl-right" onClick={this.scrollRight}>
						<i className="material-icons" style={{fontSize: '5rem'}}>chevron_right</i>
					</button>
				</div>
				<div className="row imgs-div">
					<div className="slides-wrapper">
						<div ref="slide1" className="slides slide1">
							<img style={{height: '400px', width: '100%'}} src={'pictures/retaining1.jpg'} alt={'pictures/landscape2copy.jpg'} />
						</div>
						<div ref="slide2" className="slides slide2">
							<img style={{height: '400px', width: '100%'}} src={'pictures/retaining2.jpg'} alt={'pictures/landscape2copy.jpg'} />
						</div>
						<div ref="slide3" className="slides slide3">
							<img style={{height: '400px', width: '100%'}} src={'pictures/retaining3.jpg'} alt={'pictures/landscape2copy.jpg'} />
						</div>							
					</div>
				</div>
			</div>
		)
	}
}