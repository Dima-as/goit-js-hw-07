const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
 const listEl=document.querySelector('#ingredients')

  const elements = ingredients.map(element =>{
	const liItemEl = document.createElement('li');
	liItemEl.classList.add('ingredients__item');
	liItemEl.textContent = element;
	return liItemEl
})
listEl.append(...elements)
console.log(listEl);

