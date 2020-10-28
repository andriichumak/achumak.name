window.addEventListener('load', () => {
	let topBtnTimeout = undefined;
	const topBtn = document.querySelector('#top');
	topBtn.addEventListener('click', e => {
		e.preventDefault();
		e.stopPropagation();
		window.scroll({top: 0, behavior: 'smooth'});
	});
	document.addEventListener('scroll', e => {
		clearTimeout(topBtnTimeout);
		if (window.scrollY < window.innerHeight) {
			hideTopButton();
		} else {
			if (!topBtnTimeout) {
				topBtn.classList.add('top-in');
			}
			topBtnTimeout = setTimeout(hideTopButton, 3000);
		}
	});
	function hideTopButton() {
		topBtn.classList.remove('top-in');
		topBtnTimeout = undefined;
	}


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

	document.querySelector('#print').addEventListener('click', () => {
		window.print();
	});
});
