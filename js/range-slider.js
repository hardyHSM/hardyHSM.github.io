let rangeSLider = document.getElementById("range");
let minValue = document.querySelector(".numbersCount__min");
let maxValue = document.querySelector(".numbersCount__max");

noUiSlider.create(rangeSLider, {
	start: [ 50, 235 ],
	connect: true,
	range: {
		'min': [ 0 ],
		'max': [ 300 ]
	}
});

rangeSLider.noUiSlider.on('update', function( values, handle ) {
	if(handle == 0 ) {
		minValue.innerHTML = "$" +  Number(values[0]).toFixed(0) ;
	} else if (handle == 1) {
		maxValue.innerHTML = "$" +  Number(values[1]).toFixed(0) ;
	}
});