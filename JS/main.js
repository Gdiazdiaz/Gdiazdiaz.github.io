const menuButton = document.querySelector('.menu-button-container');
const navbar = document.querySelector('#menu-display');
const closingButton = document.querySelector('.cancel-button');
const itemshow = document.querySelectorAll('.menu-item');
const navb = document.querySelector('.nav-bar');
const popupw = document.querySelector('.popup-window');

const projectBtn = document.querySelectorAll('.card-button');
const recentWorkCardsContainer = document.querySelector('.portfolio-card-container');

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
  <!-- recent work card ${project.id + 1} -->
  <div class="portfolio-${project.id + 2} card-container">
            <img src="${project.imgUrl}" alt="img" class="portfolio-img" />
            <div class="card-content">
                <h2 class="card-tittle">${project.title}</h2>
                <ul class="card-tags">
                ${project.tags.map((tag) => `<li class="tag">${tag}</li>`).join(' ')}
                </ul>
                <button type="button" onClick="popupW(${project.id})" class="card-button">
                <p>See this project</p>
                <img class="button-arrow" src="media/arrow.png" />
                </button>
            </div>
        </div>
  `;
});

recentWorkCardsContainer.innerHTML += cardsgenerator;

function popupW(id) {
  const popupgenerator = `
            <button type="button" class="close-btn btn" onClick="closepopup()">
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
`;
  popupw.innerHTML = popupgenerator;
  popupw.style.display = 'flex';
}
const x = 0;
if (x === 1) {
  popupW();
  closepopup();
}
menuButton.addEventListener('click', menuToggler);
closingButton.addEventListener('click', menuClosing);
itemshow.forEach((element) => element.addEventListener('click', menuClosing));
projectBtn.forEach((element) => element.addEventListener('click', openPopup));

//------------//
//form-validation//

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#contact-form");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});