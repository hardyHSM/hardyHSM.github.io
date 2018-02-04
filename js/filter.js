(function () {
	let button = document.querySelector('.button-filter');
	let filterSide = document.querySelector('.leftBar');

	button.addEventListener("click", function () {
		console.log(true);
		filterSide.classList.toggle("leftBar-open");
	})
}());