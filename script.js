window.addEventListener('DOMContentLoaded', (event) => {
	const navbar = document.querySelector('#navbar');
	const mainSections = document.querySelectorAll('.main-section');

	if (!navbar || !mainSections) return;

	mainSections.forEach((section) => {
		// navbar auto
		const id = section.getAttribute('id');

		if (!id) return;

		const viewId = id.replace(/_/g, ' ');

		if (!viewId) return;

		const link = document.createElement('a');
		link.classList.add('nav-link');
		link.textContent = viewId;
		link.href = '#' + id;

		navbar.appendChild(link);
	});

	const links = navbar.querySelectorAll('.nav-link');

	links.forEach((link) => {
		// scroll animate
		link.addEventListener('click', (e) => {
			e.preventDefault();
			let href = link.href;

			href = href.split('#')[1];

			const target = document.getElementById(href);

			if (!target) return;

			target.scrollIntoView({ behavior: 'smooth' });
		});
	});
});
