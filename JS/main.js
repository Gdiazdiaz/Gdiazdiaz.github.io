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

let cardsgenerator = '';

projectList.forEach((project) => {
  cardsgenerator += `
  <!-- recent work card ${project.id + 1} -->
  <div class="portfolio-${project.id + 2} card-container">
            <img src="${project.imgUrl}" alt="img" class="portfolio-img" />
            <div class="card-content">
                <h2 class="card-title">${project.title}</h2>
                <ul class="card-tags">
                ${project.tags
    .map((tag) => `<li class="tag">${tag}</li>`)
    .join(' ')}
                </ul>
                <button type="button" onClick="popupW(${
  project.id
})" class="card-button">
                <p>See this project</p>
                <img class="button-arrow" src="media/arrow.png" />
                </button>
            </div>
        </div>
  `;
});

recentWorkCardsContainer.innerHTML += cardsgenerator;