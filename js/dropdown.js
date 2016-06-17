// ------------------------------------------------
// DROPDOWN.JS
// ------------------------------------------------
//
// (1) Get a list of all elements that are dropdown triggers: [data-toggle=dropdown] a
// (2) Add click + blur event listeners
// (3) Onclick add "active" to the target element's class names / remove if exists
// (4) Onblur remove "active" from the target element's class names
//
// ------------------------------------------------

/**
 * @example
 *
 * <ul class="dropdown-menu">
 *     <li class="dropdown-menu-toggle" data-toggle="dropdown">
 *         <a href="#">Dropdown Link</a>
 *         <ul class="dropdown-menu-content">
 *             <li><a role="menuitem" href="#">Linkylink</a></li>
 *             <li><a role="menuitem" href="#">Linkylink</a></li>
 *             <li><a role="menuitem" href="#">Linkylink</a></li>
 *         </ul>
 *     </li>
 * </ul>
 */


"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var dropdownTriggers = document.querySelectorAll('[data-toggle=dropdown] a');

    if ( dropdownTriggers ) {

        Array.prototype.forEach.call(dropdownTriggers, function(el, x){

            // Make onblur work in Chrome / Safari
            el.setAttribute('tabindex', '0');

            // Toggle dropdowns on click
            el.addEventListener('click', function(e) {

                e.preventDefault();

                var subMenu = this.parentNode.getElementsByClassName("dropdown-menu-content")[0];

                if (subMenu.classList.contains('active')) {
                    subMenu.classList.remove("active");
                } else {
                    subMenu.classList.add("active");
                }

            });

            // Close dropdowns on blur
            el.addEventListener('blur', function() {

                var subMenu = this.parentNode.getElementsByClassName("dropdown-menu-content")[0];

                if (subMenu.classList.contains('active')) {
                    subMenu.classList.remove("active");
                }

            });

        });


    }

}, false);
