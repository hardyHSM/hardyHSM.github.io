(function () {
	let button = document.querySelector('.button-burger');
	let menu = document.querySelector('.header-bottom__nav-bar');
	let submitBtn = document.getElementById("form-submit");
	let form = document.querySelector('#form_find');
	let serachbtn = document.querySelector('.button-search');
	let searchForm = document.querySelector('.form-search--header');

	submitBtn.addEventListener("click", function (e) {
		e.preventDefault();

		setTimeout(function () {
		  form.innerHTML += "<p class='foundedItem'>Founded 0</p>";
		}, 500)
	})
	serachbtn.addEventListener("click", function () {
		searchForm.classList.toggle("form-search--header--active");
	})


	button.addEventListener("click", function (e) {
		this.classList.toggle("button-burger--open");
		menu.classList.toggle("header-bottom__nav-bar--active");
	})

}());