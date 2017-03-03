
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


