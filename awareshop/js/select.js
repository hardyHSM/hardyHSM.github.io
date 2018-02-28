let select = document.querySelectorAll(".select");


for (let i = 0 ; i < select.length; i++) {

		select[i].onclick = function () {
			var context = this;
		  let selectOption = this.getElementsByClassName("selectOption")[0];
		  selectOption.classList.toggle("selectToggle");
		  for (let i = 0; i < selectOption.children.length ; i++) {
		    selectOption.children[i].addEventListener("click", function () {
		     	let selectTitle = selectOption.parentNode.childNodes[0];
			    selectTitle.innerHTML = this.innerHTML;
		    })
		  }
		  document.onclick = function (e) {
		  	if(e.target == context.parentNode) {
		  		 selectOption.classList.remove("selectToggle");
		  	}
		  	// selectOption.classList.remove("selectToggle");
		  }
	}
}