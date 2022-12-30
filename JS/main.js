const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('nav-list');
const closingButton = document.getElementById('closing-button');

function openMenu(){
    menu.style.display = 'flex';
    closingButton.style.display = 'block';
    menuButton.style.display = 'none';
}

function closeMenu(){
    menu.style.display = 'none';
    closingButton.style.display = 'none';
    menuButton.style.display = 'block';
}

menuButton.addEventListener('click', openMenu);
closingButton.addEventListener('click', closeMenu);

const recentWorkCardsContainer = document.querySelector('.portfolio-card-container');