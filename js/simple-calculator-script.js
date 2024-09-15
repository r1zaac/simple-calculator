
let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.js-show').value = calculation


function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-show').value = calculation
  localStorage.setItem('calculation', calculation);
}
