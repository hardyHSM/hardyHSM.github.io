(function(){

	let toggleButton = document.querySelectorAll('.menuSettings__toggleButton');

	for (var i = 0; i < toggleButton.length; i++) {
			toggleButton[i].addEventListener("click", function () {

			let menuSettings = this.closest(".menuSettings");
			let menuInner = menuSettings.querySelector('.menuSettingsMenu').offsetHeight;
			let headerMenu = this.closest('.menuSettings__caption').offsetHeight;
			console.log(menuSettings.querySelector('.menuSettingsMenu').offsetHeight);

			menuSettings.style.height = menuInner +  headerMenu +  'px';
			menuSettings.classList.toggle("menuSettings-close");
			});
		}	

}());