(function () {
let leftBar = document.querySelector(".leftBar");
let rightContent = document.querySelector('.rightContent');

oneHeight();

window.onresize = oneHeight;


function oneHeight () {
	let hRightContent = rightContent.offsetHeight;
	console.log(hRightContent);
	leftBar.style.height = hRightContent +60  + "px";
}
}());