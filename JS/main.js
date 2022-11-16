const menuButton = document.querySelector('.menu-button-container');
const navbar = document.querySelector('#menu-display');
const closingButton = document.querySelector('.cancel-button');
const itemshow = document.querySelectorAll('.menu-item');
const navb = document.querySelector('.nav-bar');
const popupw = document.querySelector('.popup-window');
const closeb = document.querySelector('.close-btn');
const projectBtn = document.querySelectorAll('.card-button');

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

function openPopup() {
  popupw.style.display = 'flex';
}

const projectList = [
  {
    id: 0,
    title: 'Project name goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    imgUrl: 'media/Rectangle 1.png',
    live: 'https://gdiazdiaz.github.io/',
    source: 'https://github.com/Gdiazdiaz/Gdiazdiaz.github.io',
  },
  {
    id: 1,
    title: 'Project name goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    imgUrl: 'media/Rectangle 2.png',
    live: 'https://gdiazdiaz.github.io/',
    source: 'https://github.com/Gdiazdiaz/Gdiazdiaz.github.io',
  },
  {
    id: 2,
    title: 'Project name goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    imgUrl: 'media/Rectangle 3.png',
    live: 'https://gdiazdiaz.github.io/',
    source: 'https://github.com/Gdiazdiaz/Gdiazdiaz.github.io',
  },
  {
    id: 3,
    title: 'Project name goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    imgUrl: 'media/Rectangle 4.png',
    live: 'https://gdiazdiaz.github.io/',
    source: 'https://github.com/Gdiazdiaz/Gdiazdiaz.github.io',
  },
  {
    id: 4,
    title: 'Project name goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    imgUrl: 'media/Rectangle 5.png',
    live: 'https://gdiazdiaz.github.io/',
    source: 'https://github.com/Gdiazdiaz/Gdiazdiaz.github.io',
  },
  {
    id: 5,
    title: 'Project name goes here',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tags: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    imgUrl: 'media/Rectangle 6.png',
    live: 'https://gdiazdiaz.github.io/',
    source: 'https://github.com/Gdiazdiaz/Gdiazdiaz.github.io',
  },
];

menuButton.addEventListener('click', menuToggler);
closingButton.addEventListener('click', menuClosing);
itemshow.forEach((element) => element.addEventListener('click', menuClosing));
closeb.addEventListener('click', closepopup);
projectBtn.forEach((element) => element.addEventListener('click', openPopup));
