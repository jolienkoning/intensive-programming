var	inputElement = document.getElementById("input");

var	nameElements = document.getElementsByClassName("name");

inputElement.addEventListener("keyup", changeName);

function changeName(){
	for (var key = 0; key<nameElements.length; key++) {
		
		if (inputElement.value === "") {
			nameElements[key].innerHTML = "~name is empty~";
		}

		else {
			nameElements[key].innerHTML = inputElement.value;
		}
	}
}