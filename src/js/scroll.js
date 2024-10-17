'use strict';
export const scrollBtn = document.querySelector('.scroll-btn');
let lastScrollTop = 0;
let isScrollingUp = true;

window.addEventListener('scroll', e => {
  let currentTop = window.scrollY;

  if (currentTop < lastScrollTop && isScrollingUp) {
    scrollBtn.classList.add('is-active-scroll');
    isScrollingUp = false;
  }
  else if (currentTop > lastScrollTop && !isScrollingUp) {
    scrollBtn.classList.remove('is-active-scroll');
    isScrollingUp = true;
  }
  else if (currentTop === 0) {
    scrollBtn.classList.remove('is-active-scroll');
  }
  lastScrollTop = currentTop <= 0 ? 0 : currentTop;
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  scrollBtn.classList.remove('is-active-scroll');
});