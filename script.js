window.addEventListener('load', () => {
	const header = document.querySelector('header');
	const menuBtn = header.querySelector('.menu-button');
	const nav = header.querySelector('nav');
	menuBtn.addEventListener('click', e => {
		e.stopPropagation();
		e.preventDefault();
		header.classList.toggle('unfold');
	});
	nav.addEventListener('click', e => {
		header.classList.remove('unfold');
	});
});
