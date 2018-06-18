//check for loaded libraries
import { loadExample }  from './modules';
loadExample();

//utilities
import { doLazyLoad } from './modules/utilities/lazyload';
import { doNavigation } from './modules/utilities/nav';
import { loadComments } from './modules/utilities/comments';
import { doQuoteReveal } from './modules/utilities/quotes';
import { doSlider } from './modules/utilities/slider';
import { doShare } from './modules/utilities/share';
import { doVideo } from './modules/utilities/video';
import { doMap } from './modules/utilities/map';

doLazyLoad();
doNavigation();
loadComments();
doQuoteReveal();
doSlider();
doShare();
doVideo();
doMap();

console.log(`app.js has loaded!`);