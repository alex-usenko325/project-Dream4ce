import Accordion from 'accordion-js';

const faqAccList = document.querySelector('.faq-content-list');

const faqAccordion = new Accordion(faqAccList, {
  duration: 600,
  showMultiple: false,
  openOnInit: [0],
});

const faqAccWrap = document.querySelectorAll('.ac-faq-title');

faqAccWrap.forEach(item => {
  item.addEventListener('click', function () {
    // Close all other items and remove their active classes
    faqAccWrap.forEach(otherItem => {
      if (otherItem !== item) {
        const otherFaqIcon = otherItem.querySelector('.faq-item-icon');
        const otherFaqDescription = otherItem.nextElementSibling;
        otherFaqIcon.classList.remove('faq-is-active');
        otherFaqDescription.classList.add('hidden');
      }
    });

    // Toggle the clicked item's active class
    const faqIcon = item.querySelector('.faq-item-icon');
    const faqDescription = item.nextElementSibling;
    faqIcon.classList.toggle('faq-is-active');
    faqDescription.classList.toggle('hidden');
  });
});
