const menuButton = document.querySelector('.menu-button-container');
const navbar = document.querySelector('#menu-display');
const closingButton = document.querySelector('.cancel-button');
const itemshow = document.querySelectorAll('.menu-item');
const navb = document.querySelector('.nav-bar')

function menuToggler() {
  navbar.style.display = 'flex';
  menuButton.style.display = 'none';
  navb.style.position = 'fixed';

}

function menuClosing() {
  navbar.style.display = 'none';
  menuButton.style.display = 'block';
  navb.style.position = 'absolute';
}

menuButton.addEventListener('click', menuToggler);
closingButton.addEventListener('click', menuClosing);
itemshow.forEach((element) => element.addEventListener('click', menuClosing));
