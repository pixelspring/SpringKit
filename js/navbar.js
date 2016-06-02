// ---------------------------------------------------
// Mobile Menu Hide and Show:
// ---------------------------------------------------

"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var navMobileToggle = document.getElementById('nav-toggle');

    if ( navMobileToggle ) {

        // Set tabindex
        navMobileToggle.setAttribute('tabindex', '0');

        // Toggle mobile menu:
        navMobileToggle.addEventListener('click', function() {
            document.getElementById('nav-list').classList.toggle('active');
        });

    }

}, false);