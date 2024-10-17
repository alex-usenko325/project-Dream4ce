 import ScrollReveal from "scrollreveal";
document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1400,
    delay: 0,
    reset: true,
  });
  const elementsToReveal = ['.hero-bg-wrapper', '.title-names-one', '.img-hero-people', '.title-names-two', '.hero-button-link', '.text-hero'];
  elementsToReveal.forEach((element, index) => sr.reveal(element, { delay: 200 + index * 100 }));
});
