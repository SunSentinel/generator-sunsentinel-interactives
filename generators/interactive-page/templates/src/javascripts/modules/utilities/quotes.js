import ScrollReveal from 'scrollreveal';

export default function doQuoteReveal() {
  window.sr = ScrollReveal();
  sr.reveal('.pull-quote', {
    origin: 'right',
    duration: 1000,
    distance: '50vh',
    opacity: .2
  });
};

export { doQuoteReveal };