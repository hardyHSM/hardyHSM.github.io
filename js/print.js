(function () {
	let productContent = document.querySelector(".contentShop");
	let out = "";

	for (var key in products) {
		let i = 1;
		i++;
		out += "<div class='productItem' data-id='" + key + "'>";
		out += "<span class='productItem__title'>" + products[key].title + "</span>";
		out += "<img class='productItem__img' src='" + products[key].picture + "'>";
		out += "<span class='productItem__price'>" + products[key].price + "</span>";
		out += products[key].select;
		out += products[key].button;
		out += "<div class='" + products[key].pin +"'></div>";
		out += "<div class='productItem__oldPrice'> " + products[key].oldPrice  + "</div>";
		out += "</div>"
	}
	productContent.innerHTML += out;
}());
