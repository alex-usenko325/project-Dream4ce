import managerFinanceImg from '/img/my-projects/maneger-finance.png';
import managerFinanceImg2x from '/img/my-projects/maneger-finance-2x.png';

import vegetablesImg from '/img/my-projects/vegetables.png';
import vegetablesImg2x from '/img/my-projects/vegetables-2x.png';

import discoverImg from '/img/my-projects/discover.png';
import discoverImg2x from '/img/my-projects/discover-2x.png';

import transformYourImg from '/img/my-projects/transform-your.png';
import transformYourImg2x from '/img/my-projects/transform-your-2x.png';

import traditionsUkraineImg from '/img/my-projects/traditions-ukarain.png';
import traditionsUkraineImg2x from '/img/my-projects/traditions-ukarain-2x.png';

import getBodyImg from '/img/my-projects/get-body.png';
import getBodyImg2x from '/img/my-projects/get-body-2x.png';

import miminoImg from '/img/my-projects/mimino.png';
import miminoImg2x from '/img/my-projects/mimino-2x.png';

import brandImg from '/img/my-projects/brand.png';
import brandImg2x from '/img/my-projects/brand-2x.png';

import freshImg from '/img/my-projects/fresh.png';
import freshImg2x from '/img/my-projects/fresh-2x.png';

import turnYourImg from '/img/my-projects/turn-your.png';
import turnYourImg2x from '/img/my-projects/turn-your-2x.png';

import urlSprite from '/img/icons.svg';

const projects = [
  {
    title: 'Wallet Webservice',
    image: managerFinanceImg,
    image2x: managerFinanceImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Wallet Webservice Project',
  },
  {
    title: 'Green harvest webservice',
    image: vegetablesImg,
    image2x: vegetablesImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Green harvest',
  },
  {
    title: 'English Exellence webservice',
    image: discoverImg,
    image2x: discoverImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'English Exellence',
  },
  {
    title: 'Transform your webservice',
    image: transformYourImg,
    image2x: transformYourImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Transform your',
  },
  {
    title: 'Ukraine traditions webservice',
    image: traditionsUkraineImg,
    image2x: traditionsUkraineImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Ukraine traditions',
  },
  {
    title: 'Stay Healthy webservice',
    image: getBodyImg,
    image2x: getBodyImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Stay Healthy',
  },
  {
    title: 'Mimino webservice',
    image: miminoImg,
    image2x: miminoImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Mimino',
  },
  {
    title: 'Transformation with a Touch of the Brush webservice',
    image: brandImg,
    image2x: brandImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Transformation with a Touch of the Brush',
  },
  {
    title: 'Fresh harvest box webservice',
    image: freshImg,
    image2x: freshImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Fresh harvest box',
  },
  {
    title: 'Transform your business webservice',
    image: turnYourImg,
    image2x: turnYourImg2x,
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/alex-usenko325/project-Dream4ce',
    alt: 'Transform your business',
  },
];

let currentIndex = 0;
const projectsPerPage = 3;
let observer;

function loadProjects() {
  const projectListEl = document.querySelector('.project-list');
  const projectsToLoad = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  const projectsItems = projectsToLoad
    .map(({ image, image2x, alt, techStack, title, link, svg }, index) => {
      const directionClass =
        (currentIndex + index) % 2 === 0 ? 'left' : 'right';
      return `
            <li class="project-item ${directionClass}">
                <img  srcset="${image} 1x, ${image2x} 2x" src="${image}"  alt="${alt}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${techStack}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${title}</h3>
                        <div class="centered">
                                <a href="${link}" class="project-link" target="_blank">VISIT
                                 <svg class="project-icon" width="15" height="15">
                                        <use href="${urlSprite}#icon-vector"></use>
                                    </svg>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </li>
            `;
    })
    .join('');

  projectListEl.innerHTML += projectsItems;

  const newProjectItems = document.querySelectorAll(
    '.project-item:not(.observed)'
  );
  newProjectItems.forEach(item => {
    observer.observe(item);
    item.classList.add('observed');
  });

  currentIndex += projectsPerPage;

  if (currentIndex >= projects.length) {
    document.querySelector('.load-more').style.display = 'none';
  }
}

document.querySelector('.load-more').addEventListener('click', loadProjects);

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});
loadProjects();
