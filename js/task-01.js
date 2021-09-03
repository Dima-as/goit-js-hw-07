const listEl = document.querySelector('#categories')
console.log(listEl.children.length);

const itemEl = document.querySelectorAll('.item')
itemEl.forEach(element =>{
	const firstEl = element.firstElementChild.firstChild
	const lastEl = element.lastElementChild.childElementCount

	console.log('Категория:',firstEl);
	console.log('Количество элементов:',lastEl);
	
})
