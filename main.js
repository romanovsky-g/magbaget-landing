'use strict';

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}

var swiper = new Swiper('.swiper-container', {
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 70,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

function element(selector) {
	return document.querySelector(selector)
}

window.addEventListener('scroll', (e) => {
	if (window.scrollY > 130) {
		element('.navbar').style = `position: sticky;
	top: 0;
	left: 0;
	height: 50px;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.8);
	transition: 0.5s;`;
	} else {
		element(
			'.navbar'
		).style = `background-color: var(--primary-color);
		height: 70px;
		transition: 0.5s;`;
	}
});

function offset(selector) {
	var rect = element(selector).getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function scroll_to(selector) {
	close_sidebar();
	let y = offset(selector).top;
	let h = element(selector).getBoundingClientRect().height;

	window.scrollTo(0, y - (window.innerHeight / 2 - h / 2));
}

function open_sidebar() {
	element('.sidebar').classList.add('sidebar-opened');
	element('.cover').classList.add('cover-show');
}

function close_sidebar() {
	element('.sidebar').classList.remove('sidebar-opened');
	element('.cover').classList.remove('cover-show');
}

 function calcCost() {
	let height = element('#calcH').value;
	let width = element('#calcW').value;
	let type = element('input[name="calcType"]:checked').value;
	let cost = (((height*4.87)+(width*4.89))*type).toFixed(2);

	if (height!=0 && width!=0) {
		element('.calc-result').innerText = cost + " руб.";
	} else {
		element('.calc-result').innerText = '0.00 руб.';
	}
 }