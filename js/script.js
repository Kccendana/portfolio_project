const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.desktop-view-links');
const navMenu = document.querySelectorAll('.navMenu');
const logo = document.querySelector('.logo');
const seeProj1 = document.querySelector('.see-proj1');
const seeProj2 = document.querySelector('.see-proj2');
const seeProj3 = document.querySelector('.see-proj3');
const seeProj4 = document.querySelector('.see-proj4');
const seeProj5 = document.querySelector('.see-proj5');
const seeProj6 = document.querySelector('.see-proj6');
const seeProj7 = document.querySelector('.see-proj7');

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
    name: 'Keeping track of hundreds  of components website',
    image: 'assets/mobile/SnapshootPortfolio.svg',
    imageDescription: 'Snapshoot portfolio',
    description:
    ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s."],
    techList: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
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
    image: 'assets/mobile/ImgPlaceholder.svg',
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
    image: 'assets/mobile/ImgPlaceholder.svg',
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

seeProj1.addEventListener('click', () => {
  ShowModal(0);
});

seeProj2.addEventListener('click', () => {
  ShowModal(1);
});

seeProj3.addEventListener('click', () => {
  ShowModal(2);
});

seeProj4.addEventListener('click', () => {
  ShowModal(3);
});

seeProj5.addEventListener('click', () => {
  ShowModal(4);
});

seeProj6.addEventListener('click', () => {
  ShowModal(5);
});

seeProj7.addEventListener('click', () => {
  ShowModal(6);
});