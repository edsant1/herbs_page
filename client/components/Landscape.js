import React from 'react';
import $ from 'jquery';
import SecondaryNav from './SecondaryNav';

class Landscape extends React.Component {
	constructor(props) {
		super(props);
		this.fixedServRow = this.fixedServRow.bind(this);
		this.goToTop = this.goToTop.bind(this);
		this.goToLinks = this.goToLinks.bind(this);
		this.state = { count: 0 };
	}

	componentDidMount() {
 		window.scrollTo(0,0);
 		window.jQuery('.button-collapse').sideNav({
  		closeOnClick: true
  	});
  	document.body.classList.remove('serv-row-fixed');
  	window.addEventListener('scroll', this.fixedServRow);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.fixedServRow);
		document.body.classList.remove('serv-row-fixed');
	}

	fixedServRow(e) {
		const nav = document.querySelector('.sec-nav-color');
		const contain = document.querySelector('.overview');
		const servRow = document.querySelector('.serv-row');
		const bottomOfNav = nav.offsetHeight;

		if(window.scrollY >= servRow.offsetTop - bottomOfNav) {
			contain.style.paddingTop = (60 + servRow.offsetHeight + 'px');
			document.body.classList.add('serv-row-fixed');
		}
		if(window.scrollY <= servRow.offsetHeight) {
			contain.style.paddingTop = 4 + 'rem';
			document.body.classList.remove('serv-row-fixed');
		}
	}

	goToTop(e) {
		const topOfPageId = e.nativeEvent.toElement;

		if(topOfPageId.matches('#topOfPage')) {
			$('html, body').clearQueue().animate({
    		scrollTop: (0,0)
			}, 700);
		}
	}

	goToLinks(e) {
		const elementId = e.nativeEvent.toElement;
		const bottomOfNav = document.querySelector('.sec-nav-color').offsetHeight;
		const servLinks = document.querySelector('.serv-row').offsetHeight;
		const bottomOfNewLinks = bottomOfNav + servLinks;

		if(elementId.matches('#toSprinklers')) {
			$('html, body').clearQueue().animate({
    		scrollTop: $('.sprinkDiv').offset().top - bottomOfNewLinks
			}, 700);
		}

		if(elementId.matches('#toFencing')) {
			$('html, body').clearQueue().animate({
				scrollTop: $('.fenceDiv').offset().top - bottomOfNewLinks
			}, 700);
		}

		if(elementId.matches('#toRetaining')) {
			$('html, body').clearQueue().animate({
				scrollTop: $('.retainDiv').offset().top - bottomOfNewLinks
			}, 1000);
		}

	}
	
	render() {
		return(
			<div>
				<SecondaryNav />
				<div className="filler" style={{width: '100%', height: '6rem',}}></div>
				<div className="serv-row">
					<span id="topOfPage" className="top" onClick={this.goToTop}>Go To Top</span>
					<span id="toSprinklers" className="work" onClick={this.goToLinks}>Sprinklers</span>
					<span id="toFencing" className="work" onClick={this.goToLinks}>Fencing</span>
					<span id="toRetaining" className="work" onClick={this.goToLinks}>Retaining Walls</span>
				</div>
				<hr />
				<div className="row overview">
					<h2 className="col s12" style={{paddingBottom: '3rem'}}>Maintenance</h2>
					<div id="maintainDscrpt" className="row">
						<p className="col s12 m6">Our family has been providing landscape maintenance and yard clean-ups 
						along the Wasatch Front since 2007. Our goal is to provide you with fast 
						services that leave a lasting impression. Here are some quick samples of some
						of our work. Call us to come out to your home and provide you with a free
						estimate.</p>
						<div className="row imgs-div col s12 m6">
							<div>
								<div ref="slide1" className="slides slide1">
									<img style={{height: '400px', width: '100%'}} src={'pictures/retaining1.jpg'} alt={'pictures/landscape2copy.jpg'} />
								</div>						
							</div>
						</div>
					</div>
				</div>
				<div className="row sprinkDiv" style={{background: 'white'}}>
					<div id="sprinklerDscrpt">
						<h2 className="sprinklers left-align col s12" style={{paddingBottom: '3rem', paddingLeft: '0'}}>Sprinklers</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget porta nulla, id
						 lacinia dui. Mauris euismod iaculis sem. Suspendisse finibus, augue nec sollicitudin rutrum,
						 velit mauris molestie enim, et commodo elit velit id mauris. Etiam at efficitur metus, 
						 sed posuere nulla. Nullam porta viverra faucibus. Nam magna diam, pharetra sed sollicitudin 
						 consequat, consectetur id eros. Nam fringilla lectus sit amet nunc vestibulum, sit amet 
						 bibendum erat sollicitudin. Etiam vitae bibendum purus. Cras blandit felis in commodo 
						 imperdiet.
						 </p>
					</div>
					 <div className="row imgs-div">
						<div className="sprink-pic">
							<div>
								<img style={{height: '400px', width: '70%'}} src={'pictures/sod1.jpg'} />
							</div>							
						</div>
					</div>
				</div>
				<div className="row fenceDiv">
					<div id="fenceDscrpt">
						<h2 className="fencing left-align col s12" style={{paddingBottom: '3rem'}}>Fencing</h2>
						<p className="col m6 s12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget porta nulla, id
						 lacinia dui. Mauris euismod iaculis sem. Suspendisse finibus, augue nec sollicitudin rutrum,
						 velit mauris molestie enim, et commodo elit velit id mauris. Etiam at efficitur metus, 
						 sed posuere nulla. Nullam porta viverra faucibus. Nam magna diam, pharetra sed sollicitudin 
						 consequat, consectetur id eros. Nam fringilla lectus sit amet nunc vestibulum, sit amet 
						 bibendum erat sollicitudin. Etiam vitae bibendum purus. Cras blandit felis in commodo 
						 imperdiet.
						 </p>
					</div>
					 <div className="row imgs-div col m6 s12">
						<div className="fenc-pic">
							<div>
								<img style={{height: '400px', width: '85%'}} src={'pictures/tramp1.jpg'} />
							</div>							
						</div>
					</div>
				</div>
				<div className="row retainDiv" style={{background: 'white'}}>
					<div id="retainDscrpt">
						<h2 className="retainingWall left-align col s12" style={{paddingBottom: '3rem', paddingLeft: '0'}}>Retaining Wall</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget porta nulla, id
						 lacinia dui. Mauris euismod iaculis sem. Suspendisse finibus, augue nec sollicitudin rutrum,
						 velit mauris molestie enim, et commodo elit velit id mauris. Etiam at efficitur metus, 
						 sed posuere nulla. Nullam porta viverra faucibus. Nam magna diam, pharetra sed sollicitudin 
						 consequat, consectetur id eros.
						 </p>
					</div>
					 <div className="row imgs-div">
						<div className="retain-pic">
							<div>
								<img style={{height: '400px', width: '60%'}} src={'pictures/retaining3.jpg'} />
							</div>							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Landscape;