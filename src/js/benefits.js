import ScrollReveal from 'scrollreveal';
document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2300,
    delay: 0,
    reset: false,
  });
  const elementsToReveal = ['.benefits-title', '.benefits-list'];
  elementsToReveal.forEach(element => sr.reveal(element, { delay: 200 }));
});
