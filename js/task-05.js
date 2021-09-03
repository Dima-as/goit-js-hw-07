
	 const inputEl = document.querySelector('#name-input')
	 inputEl.addEventListener('input', onInputChange)
	 const spanOutput = document.querySelector('#name-output')
		console.log(spanOutput.textContent);
		
	 function onInputChange(event){
		 console.log(event.currentTarget.value);
		
		if (event.currentTarget.value) {
			return spanOutput.textContent = event.currentTarget.value
		}
	      return spanOutput.textContent = 'незнакомец'
		 
		 
	 }