
const valueEl =document.querySelector('#value')
const btnDecrementEl = document.querySelector('[data-action="decrement"]')
const btnIncrementEl = document.querySelector('[data-action="increment"]')
let counterValue = 0;
const decrement = () => (valueEl.textContent = counterValue -= 1);
const increment = () => (valueEl.textContent = counterValue += 1);


btnIncrementEl.addEventListener('click', increment)
btnDecrementEl.addEventListener('click',decrement)