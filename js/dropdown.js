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
 * <div class="dropdown">
 *
 *     <a id="dropdownMenu1" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>
 *
 *     <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
 *         <li><a role="menuitem" href="#">Link 1</a></li>
 *         <li><a role="menuitem" href="#">Link 2</a></li>
 *         <li><a role="menuitem" href="#">Link 3</a></li>
 *         <li><a role="menuitem" href="#">Link 4</a></li>
 *     </ul>
 *
 * </div>
 */


// Set event listeners for dropdown menus
var dropdownTrigger = document.querySelectorAll("[data-toggle=dropdown] a");

for (var x = 0; x < dropdownTrigger.length; x++) {

    // Make onblur work in Chrome / Safari
    dropdownTrigger[x].setAttribute('tabindex', '0');

    // Toggle dropdowns onclick
    dropdownTrigger[x].onclick = function() {
        var subMenu = this.parentNode.getElementsByClassName("dropdown-menu-content")[0];
        if (subMenu.classList.contains('active')) {
            subMenu.classList.remove("active");
        } else {
            subMenu.classList.add("active");
        }
    }

    // Close dropdowns onblur
    dropdownTrigger[x].onblur = function() {
        var subMenu = this.parentNode.getElementsByClassName("dropdown-menu-content")[0];
        if (subMenu.classList.contains('active')) {
            subMenu.classList.remove("active");
        }
    }

}
