
const refs = {
	input: document.querySelector('#font-size-control'),
	text: document.querySelector('#text')
	
	}
	
	refs.input.addEventListener('change', inputChange);
	
	function inputChange (event) {
	console.log(event.currentTarget.value);
	refs.text.style.fontSize = event.currentTarget.value+'px'
	
	}
