const menuButton = document.querySelector('.menu-button-container');
const navbar = document.querySelector('#menu-display');
const closingButton = document.querySelector('.cancel-button');
const itemshow = document.querySelectorAll('.menu-item');
const navb = document.querySelector('.nav-bar')
const popupw = document.querySelector('.popup-window')
const closeb = document.querySelector('.close-btn')
const projectBtn = document.querySelectorAll('.card-button')

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

function closepopup() {
  popupw.style.display = 'none';
}

function openPopup () {
  popupw.style.display = 'flex';
}

menuButton.addEventListener('click', menuToggler);
closingButton.addEventListener('click', menuClosing);
itemshow.forEach((element) => element.addEventListener('click', menuClosing));
closeb.addEventListener('click',closepopup);
projectBtn.forEach((element) => element.addEventListener('click', openPopup));

