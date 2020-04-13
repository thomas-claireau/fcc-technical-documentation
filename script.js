window.addEventListener('DOMContentLoaded', (event) => {
	// svg injector
	const svgPromise = new Promise((resolve, reject) => {
		const svgs = document.querySelectorAll('img.js-inject-me');
		SVGInjector(svgs, {}, (totalSVGsInjected) => resolve(totalSVGsInjected));
	});

	svgPromise.then((tsi) => {
		const svgs = document.querySelectorAll('.js-inject-me');
		svgs.forEach((svg) => {
			svg.classList.add('activeSvg');
		});
	});

	const header = document.querySelector('#header');

	if (!header) return;

	window.addEventListener('scroll', () => {
		if (window.scrollY) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	});
});
