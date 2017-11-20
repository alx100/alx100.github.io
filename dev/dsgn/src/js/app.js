// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import Nav from './modules/nav';
import Grid from './modules/grid';
import Popup from './modules/popup';
import Gmap from './modules/map';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        
        Nav();
        Grid();
        Popup();
        Gmap();

    });

})(jQuery);