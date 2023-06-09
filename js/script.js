const navButton = document.querySelector('.nav-button');// \r\n
const navList = document.querySelector('.desktop-view-links');// \r\n
const navMenu = document.querySelectorAll('.navMenu');// \r\n
const logo = document.querySelector('.logo');

navButton.addEventListener('click', () => {
  navList.classList.toggle('show');
  navButton.classList.toggle('close');
  logo.classList.toggle('hide');
}, false);

navMenu.forEach((links) => links.addEventListener('click', () => {
  navList.classList.remove('show');
  navButton.classList.remove('close');
  logo.classList.remove('hide');
}));

window.onresize = () => { if (window.innerWidth > 760) navList.classList.remove('show'); };

const projectsLists = [
  {
    name: 'Multi-Post Stories',
    image: 'assets/mobile/ImgPlaceholder-desk.svg',
    imageDescription: 'Img Placeholder',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    techList: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  }, {
    name: 'Profesional Art Printing Data More',
    image: 'assets/mobile/Portfolio2.svg',
    imageDescription: 'Image Design',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Data Dashboard Healthcare',
    image: 'assets/mobile/Portfolio3.svg',
    imageDescription: 'Portfolio image',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Website Portfolio',
    image: 'assets/mobile/Portfolio.svg',
    imageDescription: 'Portfolio image placeholder',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Profesional Art Printing Data More',
    image: 'assets/mobile/Portfolio2.svg',
    imageDescription: 'Image Design',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Data Dashboard Healthcare',
    image: 'assets/mobile/Portfolio3.svg',
    imageDescription: 'Portfolio image',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Website Portfolio',
    image: 'assets/mobile/Portfolio3.svg',
    imageDescription: 'Portfolio image placeholder',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const mainProject = document.querySelector('#multi-post-con');
const cardWrapper = document.querySelector('.card-wrapper');

projectsLists.forEach((project, index) => {
  if (index === 0) {
    const techList = project.techList.map((list) => `<li>${list}</li>`).join('');

    const mainProjectDisplay = `<img class="multi-con-img" src="${project.image}" alt="${project.imageDescription}">
    <div class="multi-post-stories ">
        <h4 class="title sub-title">${project.name}</h4>
        <p class="font-body-reg">${project.description}</p>
        <ul class="skill-lists border-1 w-314">
            ${techList}
        </ul>
        <button class="see-proj${index + 1} button w-135">See project</button>`;

        mainProject.innerHTML = `<div class="multi-post-con" id="multi-post-con">${mainProjectDisplay}</div>`;
  } else {
    const techList = project.techList.map((list) => `<li>${list}</li>`).join('');

    const displayProjectcards = ` 
    <div class="card-works">
        <h5 class="title">${project.name}</h5>
        <p class="font-body-reg">${project.description}</p>
        <ul class="skill-lists w-247 bg-list">
        ${techList}
        </ul>
      </div>
      <button class="see-proj${index + 1} button w-100">See Project</button>`;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${project.image})`;
    card.innerHTML = displayProjectcards;
    cardWrapper.appendChild(card);
  }
});

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.close-button');

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-open');
});

function ShowModal(index) {
  modal.classList.toggle('modal-open');
  const modalTitle = document.querySelector('.name');
  const modalImage = document.querySelector('.modal-image');
  const projectDescription = document.querySelector('.project-description');
  const techList = document.querySelector('.tech-container');
  const seeLive = document.querySelector('.see-live');
  const seeSource = document.querySelector('.see-source');
  const project = projectsLists[index];

  modalTitle.textContent = project.name;
  modalImage.setAttribute('src', project.image);
  projectDescription.textContent = project.description;
  seeLive.setAttribute('href', project.link);
  seeSource.setAttribute('href', project.source);

  techList.innerHTML = '';

  project.techList.forEach((tech) => {
    const li = document.createElement('li');
    li.innerText = tech;
    techList.appendChild(li);
  });
}

const seeProjButtons = document.querySelectorAll('[class^="see-proj"]');

seeProjButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    ShowModal(index);
  });
});

const errorMessage = document.querySelector('.error-message');
const form = document.querySelector('.form');
const email = document.querySelector('#email');
const userName = document.querySelector('#name');
const message = document.querySelector('#message');
const formDatakey = 'formData';

let formObject = {
  userName: '',
  email: '',
  message: '',
};

function SaveFormData() {
  formObject.userName = userName.value;
  formObject.email = email.value;
  formObject.message = message.value;
  localStorage.setItem(formDatakey, JSON.stringify(formObject));
}

email.addEventListener('input', SaveFormData);
userName.addEventListener('input', SaveFormData);
message.addEventListener('input', SaveFormData);

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent = 'Please enter email in lowercase.';
    email.value = email.value.toLowerCase();
  }
});
form.addEventListener('reset', () => {
  localStorage.removeItem(formDatakey);
});

window.addEventListener('load', () => {
  const dataStored = localStorage.getItem(formDatakey);
  if (dataStored !== null) {
    formObject = JSON.parse(dataStored);
    email.value = formObject.email;
    userName.value = formObject.userName;
    message.value = formObject.message;
  }
});
