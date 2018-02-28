(function () {
	let burgerButton = document.querySelector('.topLine__toggle');
	let menuSettings = document.querySelector('.navigationMenu-burger');


	burgerButton.addEventListener("click", function () {
		menuSettings.classList.toggle("navigationMenu-burger-toggle");
	})
}());