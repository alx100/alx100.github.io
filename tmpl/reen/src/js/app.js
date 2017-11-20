// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Navbar from './modules/navbar';
import MainSlider from './modules/mainSlider';
import WorksSlider from './modules/worksSlider';
import ScrollTop from './modules/scrollTop';

(($) => {
  'use strict';

  // When DOM is ready

  $(() => {

    Navbar();
    MainSlider();
    WorksSlider();
    ScrollTop();

  });

})(jQuery);