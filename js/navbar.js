// ---------------------------------------------------
// Mobile Menu Hide and Show:
// ---------------------------------------------------

"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var navMobileToggle = document.getElementById('nav-toggle');

    // Set tabindex
    navMobileToggle.setAttribute('tabindex', '0');

    // Toggle mobile menu:
    navMobileToggle.onclick = function() {
        document.getElementById('nav-list').classList.toggle('active');
    };

    // onblur:
    /*
    navMobileToggle.onblur = function() {
        document.getElementById('nav-list').classList.toggle('active');
    };
    */

}, false);