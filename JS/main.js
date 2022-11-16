const menuButton = document.querySelector('.menu-button-container');
const navbar = document.querySelector('#menu-display');
const closingButton = document.querySelector('.cancel-button');
const itemshow = document.querySelectorAll('.menu-item');
const navb = document.querySelector('.nav-bar');
const popupw = document.querySelector('#popup');
const closeb = document.querySelector('.close-btn');
const projectBtn = document.querySelectorAll('.card-button');
const recentWorkCardsContainer = document.querySelector('.grid-container')

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

let cardsgenerator = '';

projectList.forEach((project) => {
  cardsgenerator += `
  <!-- recent work card ${project.id} -->
  <div class="container-1">
  ${project.id === 0? "<h1 class='section-tittle'>porject</h1>": ''}
                
                <div class="card-container">
                    <img class="card-img-1 img" src="${project.imgUrl}">
                    <div class="card-content">
                        <h2 class="card-tittle">${project.title}</h2>
                        <div>
                            <ul class="card-tags">
                            ${project.tags.map((tag) => `<li class="tag">${tag}</li>`).join(' ')}
                            </ul>
                        </div>
                        <button type="button" class="card-button">
                            <p>See this project</p>
                            <img class="button-arrow" src="media/arrow.png">
                        </button>
                    </div>
                </div>
            </div>
  `;
});

recentWorkCardsContainer.innerHTML = cardsgenerator;

function popupW(id) {
  const popupgenerator = `
  <div class="popup-window">
            <button type="button" class="close-btn btn">
            <img src="media/Cancel.png">
            </button>
            <h2 class="popup-title">${projectList[id].title}</h2>
            <div>
                <ul class="popup-tags">
                ${projectList[id].tags.map((tag) => `<li class="popup-tag">${tag}</li>`).join(' ')}
                </ul>
            </div>
            <img class="popup-img" src="${projectList[id].imgUrl}">
            <p class="popup-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, alias aperiam? Blanditiis, at? Laudantium ratione quidem ea ut sequi nesciunt, ad suscipit, doloremque aliquid, necessitatibus veritatis laborum? Voluptates, reprehenderit excepturi?</p>
            <div class="btn-container">
            <button type="button" class="popup-btn">See live<img class="sl-img" src="media/sl-bt.png"></button>
            <button type="button" class="popup-btn">see source<img class="ss-img" src="media/ic_github_white.png"></button>
            </div>
        </div>
`;

  popupw.innerHTML = popupgenerator;

  popupw.style.display = 'flex';
}


menuButton.addEventListener('click', menuToggler);
closingButton.addEventListener('click', menuClosing);
itemshow.forEach((element) => element.addEventListener('click', menuClosing));
projectBtn.forEach((element) => element.addEventListener('click', openPopup));
