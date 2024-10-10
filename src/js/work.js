 import ScrollReveal from "scrollreveal";

document.addEventListener('DOMContentLoaded', () => {
    const scrl = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 2300,
        delay: 0,
        reset: true,
    });

    scrl.reveal('.work-wrapper', {delay: 200});

});
