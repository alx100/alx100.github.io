// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Loader from './modules/loader';
import Tools from './modules/tools';
import Nav from './modules/nav';
import HomeScroll from './modules/homeScroll';
import HomeSlider from './modules/homeSlider';
import Gmap from './modules/map.js';
import FloorPlan from './modules/floorplan.js';
import UnitSlider from './modules/unitSlider.js';
import UnitPopup from './modules/unitPopup.js';
import DiscoverSlider from './modules/discoverSlider';
import Animations from './modules/animations';




(($) => {
  'use strict';
  window.initMap = Gmap;

  // When DOM is ready
  $(() => {
    
    Loader();
    Nav();
    HomeScroll();
    HomeSlider();
    Tools();
    FloorPlan();
    UnitSlider();
    UnitPopup();
    DiscoverSlider();
    Animations();
    
    $(window).resize(function(){
      Tools();
  });

   
  });

})(jQuery);