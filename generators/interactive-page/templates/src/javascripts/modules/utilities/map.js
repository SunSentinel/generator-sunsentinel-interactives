import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';
import L from 'leaflet';
import {
  GeoSearchControl,
  GoogleProvider
} from 'leaflet-geosearch';

export default function doMap() {

//SET UP BASIC MAP
var mapCenter = [26.122173, -80.150485];
var mobileCenter = [26.12284,-80.142047];
var baseMap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd'
});

var map = L.map('map', {
  center: mapCenter,
  zoom: 15,
  // maxZoom: 17,
  // minZoom: 12,
  zoomControl: false,
  layers: [baseMap]
});

var pathStyle = {
  fillOpacity: 0.1,
  color: "#333",
  weight: 3
};

//DO WHATEVER YOU NEED HERE TO MAP YOUR DATA



//RESPONSIVE DESIGN FOR BREAKPOINTS
if ($(window).width() <= 700) {
  $(".main-intro").appendTo(".mobile-aside");
  $(".aside").removeClass("z-depth-5");
  $(".mobile-aside").addClass("z-depth-5");
  if ($(".info-panel").html().length > 0) {
    $(".desktop-aside").slideDown(500);
  } else if ($(".info-panel").html().length <= 0) {
    $(".desktop-aside").hide();
  }
  map.setView(mobileCenter, 14);
}


//OPTION TO SHOW/HIDE INFO
$(".hide-option span").click(function() {
  if ($(".main-intro .byline").is(":visible")) {
    $(".main-intro .byline").slideUp(500);
    $(".main-intro p").slideUp(500);
    $(this).html('Show <i class="fa fa-caret-down" aria-hidden="true"></i>')
  } else if ($(".main-intro .byline").is(":hidden")) {
    $(".main-intro .byline").slideDown(500);
    $(".main-intro p").slideDown(500);
    $(this).html('Hide <i class="fa fa-caret-up" aria-hidden="true"></i>')
  }
});

}
export {
  doMap
};