let topple = document.querySelector('.yap');

let duck = document.querySelector('.dogs');

ColorWhite.innerHTML = JSON.parse( localStorage.getItem('keepMemory'));

topple.addEventListener('click', () => {
  topple.classList.toggle('yee');
  duck.classList.toggle('yep');
  
})