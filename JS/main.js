const menuButton = document.querySelector('.menu-button-container');
const navbar = document.querySelector('#menu-display');
const closingButton = document.querySelector('.cancel-button');
const itemshow = document.querySelectorAll('.menu-item');

function menuToggler() {
  navbar.style.display = 'block';
  menuButton.style.display = 'none';
}

function menuClosing() {
  navbar.style.display = 'none';
  menuButton.style.display = 'block';
}

menuButton.addEventListener('click', menuToggler);
closingButton.addEventListener('click', menuClosing);
itemshow.forEach((element) => element.addEventListener('click', menuClosing));
