import React from 'react';
import $ from 'jquery';

class Landscape extends React.Component {
	constructor(props) {
		super(props);
		this.scrollLeft = this.scrollLeft.bind(this);
		this.scrollRight = this.scrollRight.bind(this);
		this.state = { count: 0 };
	}

	componentDidMount() {
 		window.scrollTo(0,0);
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
				console.log(pics);
			});
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
				console.log(pics);
			})
		}
	}
	
	render() {
		return(
			<div className="container overview">
				<div className="row">
					<h2>This is the Landscape page</h2>
					&nbsp;
					<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet urna eros.
					 Donec sagittis tellus ac pulvinar convallis. Donec vel auctor eros. Nullam vel vestibulum quam.
					 Morbi eleifend neque vel facilisis viverra. In aliquam placerat nunc, nec posuere nibh eleifend a.
					 Pellentesque commodo dictum velit id molestie. Maecenas ornare a ligula eu sagittis. Sed auctor,
					 leo sed condimentum pulvinar, enim nisl facilisis sapien, eu pellentesque eros risus sed sapien.</h5>
				</div>
				<div className="row imgs-div">
					<div className="controls">
						<button type="button" className="carousel-cntrl cntrl-left" onClick={this.scrollLeft}>
							<svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    						<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
						<button type="button" className="carousel-cntrl cntrl-right" onClick={this.scrollRight}>
							<svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    						<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
					</div>
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

export default Landscape;