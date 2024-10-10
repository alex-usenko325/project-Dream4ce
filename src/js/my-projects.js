import managerFinanceImg from '../img/my-projects/manager-finance.jpg';
import managerFinanceImg2x from '../img/my-projects/maneger-finance-x2-min.jpg';

import vegetablesImg from '../img/my-projects/vegetables.jpg';
import vegetablesImg2x from '../img/my-projects/vegetables-x2-min.jpg';

import discoverImg from '../img/my-projects/discover.jpg';
import discoverImg2x from '../img/my-projects/discover-x2-min.jpg';

import transformYourImg from '../img/my-projects/transform-your.jpg';
import transformYourImg2x from '../img/my-projects/transform-your-x2-min.jpg';

import traditionsUkraineImg from '../img/my-projects/traditions-ukraine.jpg';
import traditionsUkraineImg2x from '../img/my-projects/traditions-ukarain-x2-min.jpg';

import getBodyImg from '../img/my-projects/get-body.jpg';
import getBodyImg2x from '../img/my-projects/get-body-x2-min.jpg';

import miminoImg from '../img/my-projects/mimino.jpg';
import miminoImg2x from '../img/my-projects/mimino-x2-min.jpg';

import brandImg from '../img/my-projects/brand.jpg';
import brandImg2x from '../img/my-projects/brand-x2-min.jpg';

import freshImg from '../img/my-projects/fresh.jpg';
import freshImg2x from '../img/my-projects/fresh-x2-min.jpg';

import turnYourImg from '../img/my-projects/turn-your.jpg';
import turnYourImg2x from '../img/my-projects/turn-your-x2-min.jpg';

import arrowIcon from '../img/symbol-defs.svg#icon-arrow';

const projects = [
    {
        title: "Wallet Webservice",
        image: managerFinanceImg,
        image2x: managerFinanceImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Wallet Webservice Project",
        svg: arrowIcon
    },
    {
        title: "Green harvest webservice",
        image: vegetablesImg,
        image2x: vegetablesImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Green harvest",
        svg: arrowIcon
    },
    {
        title: "English Exellence webservice",
        image: discoverImg,
        image2x: discoverImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "English Exellence",
        svg: arrowIcon
    },
    {
        title: "Transform your webservice",
        image: transformYourImg,
        image2x: transformYourImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Transform your",
        svg: arrowIcon
    },
    {
        title: "Ukraine traditions webservice",
        image: traditionsUkraineImg,
        image2x: traditionsUkraineImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Ukraine traditions",
        svg: arrowIcon
    },
    {
        title: "Stay Healthy webservice",
        image: getBodyImg,
        image2x: getBodyImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Stay Healthy",
        svg: arrowIcon
    },
    {
        title: "Mimino webservice",
        image: miminoImg,
        image2x: miminoImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Mimino",
        svg: arrowIcon
    },
    {
        title: "Transformation with a Touch of the Brush webservice",
        image: brandImg,
        image2x: brandImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Transformation with a Touch of the Brush",
        svg: arrowIcon
    },
    {
        title: "Fresh harvest box webservice",
        image: freshImg,
        image2x: freshImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Fresh harvest box",
        svg: arrowIcon
    },
    {
        title: "Transform your business webservice",
        image: turnYourImg,
        image2x: turnYourImg2x,
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://github.com/kononova1986/project-15",
        alt: "Transform your business",
        svg: arrowIcon
    }
];


    let currentIndex = 0;
    const projectsPerPage = 3;
    let observer;

    function loadProjects() {
        const projectListEl = document.querySelector('.project-list');
        const projectsToLoad = projects.slice(currentIndex, currentIndex + projectsPerPage);

        const projectsItems = projectsToLoad.map(({image, image2x, alt, techStack, title, link, svg }, index) => {
            const directionClass = (currentIndex + index) % 2 === 0 ? 'left' : 'right';
            return `
            <li class="project-item ${directionClass}">
                <img  srcset="${image} 1x, ${image2x} 2x" src="${image}"  alt="${alt}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${techStack}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${title}</h3>
                        <div class="centered">
                            <button type="button" class="project-button">
                                <a href="${link}" class="project-link" target="_blank">VISIT
                                    <svg class="project-icon">
                                        <use href="${svg}"></use>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            `;
        }).join('');

        projectListEl.innerHTML += projectsItems;
        
        
        const newProjectItems = document.querySelectorAll('.project-item:not(.observed)');
        newProjectItems.forEach((item) => {
            observer.observe(item);
            item.classList.add('observed');
        });
        
        currentIndex += projectsPerPage;
    

        if (currentIndex >= projects.length) {
            document.querySelector('.load-more').style.display = 'none';
        }
    }

    document.querySelector('.load-more').addEventListener('click', loadProjects);

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });
    loadProjects();