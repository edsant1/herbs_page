
const brand = document.querySelector('.brand-logo');

function backgroundChange(e) {
	brand.classList.add('active');
}

function revertBack() {
	brand.classList.remove('active');
}

brand.addEventListener('mouseover', backgroundChange);
brand.addEventListener('mouseleave', revertBack);

const landscape = document.querySelector('.panel1');
const lightPanel = document.querySelector('.panel2');
const contactPanel = document.querySelector('.panel3');
const landPanelBottom = landscape.offsetTop + landscape.offsetHeight;
// const startingPoint = (window.scrollY + window.innerHeight);
// const landLoc = (landPanelBottom - startingPoint) + startingPoint;


