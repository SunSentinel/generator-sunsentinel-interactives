import Swiper from 'swiper/dist/js/swiper.js';

export default function doSlider() {
	const swiper = new Swiper('.swiper-container', {
		// If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
		speed: 400,
	  spaceBetween: 20,
	  slidesPerView: 2,
	  slidesPerGroup: 2,
	  preloadImages: false,
	  lazyLoading: true,
	  a11y: true,
	  pagination: false,
	  grabCursor: true,
	  breakpoints: {
	    1280: {
	      slidesPerView: 2,
	      slidesPerGroup: 2,
	      spaceBetween: 20
	    },

	    600: {
	      slidesPerView: 1,
	      slidesPerGroup: 1,
	      spaceBetween: 0
	    }
	  }
	});
};

export { doSlider };