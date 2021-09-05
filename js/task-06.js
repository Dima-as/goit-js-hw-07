
const inputEl = document.querySelector("#validation-input")
const inputData = inputEl.getAttribute("data-length")

inputEl.addEventListener('blur', inputPlacehoderFocus)
function inputPlacehoderFocus (event){
	if (inputEl.value.length === Number(inputData) ) {
		 inputEl.classList = "valid"
	}
	 else  inputEl.classList = "invalid"
	         
	return;
}