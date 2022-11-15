const menuButton = document.querySelector('.menu-button-container');


function menuToggler() {
    const navbar = document.querySelector('#menu-display');
    navbar.style.display = 'block';
    menuButton.style.display = 'none';
  }

  

menuButton.addEventListener('click', menuToggler);