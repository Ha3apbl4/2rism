document.querySelector('.menu__open').onclick = () => {
	let mobileMenu = document.querySelector('.mobile__menu')
	if (mobileMenu.classList.contains('mobile__menu--close')) {
		mobileMenu.classList.remove('mobile__menu--close')
		mobileMenu.classList.add('mobile__menu--open')
	}
}
document.querySelector('.mobile__menu__close').onclick = () => {
	let mobileMenu = document.querySelector('.mobile__menu')
	if (mobileMenu.classList.contains('mobile__menu--open')) {
		mobileMenu.classList.remove('mobile__menu--open')
		mobileMenu.classList.add('mobile__menu--close')
	}
}
