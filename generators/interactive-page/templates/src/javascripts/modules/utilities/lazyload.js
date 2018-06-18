import Blazy from 'blazy';

export default function doLazyLoad() {
  const lazy = new Blazy({
    offset: 300,
    selector: '.js-lazy',

    success: function(el) {
      el.parentNode.className += ' loaded';
    }
  });
};

export { doLazyLoad };