
const inputEl = document.querySelector("#validation-input")
const inputData = inputEl.getAttribute("data-length")

inputEl.addEventListener('blur', inputPlacehoderFocus)
function inputPlacehoderFocus (event){
	if (inputEl.value.length == inputData ) {
		return inputEl.classList.add("valid"),
		      inputEl.classList.remove("invalid")

	}
	 return inputEl.classList.add("invalid"),
	          inputEl.classList.remove("valid")
	
}