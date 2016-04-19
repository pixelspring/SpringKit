// ------------------------------------------------
// DROPDOWN.JS
// ------------------------------------------------
//
// (1) Get list of all elements that are dropdown triggers
// (2) Add click + blur event listeners
// (3) Onclick add "open" to the target element's class names / remove if exists
// (4) Onblur remove "open" from the target element's class names
//
// ------------------------------------------------

/*
<div class="dropdown">

    <a id="dropdownMenu1" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>

    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
        <li><a role="menuitem" href="#">Link 1</a></li>
        <li><a role="menuitem" href="#">Link 2</a></li>
        <li><a role="menuitem" href="#">Link 3</a></li>
        <li><a role="menuitem" href="#">Link 4</a></li>
    </ul>

</div>
*/

// Show a dropdown menu
function openDropdown(event) {
    event = event || window.event;
    var eventTarget = event.currentTarget || event.srcElement;
    eventTarget.parentElement.classList.toggle('open');
    return false;
}

// Close a dropdown menu
function closeDropdown(event) {
    event = event || window.event;
    var eventTarget = event.currentTarget || event.srcElement;
    eventTarget.parentElement.classList.remove('open');

    // Trigger the click event on the target if it not opening another menu
    if(event.relatedTarget && event.relatedTarget.getAttribute('data-toggle') !== 'dropdown') {
        event.relatedTarget.click();
    }
    return false;
}

// Set event listeners for dropdown menus
var dropdownList = document.querySelectorAll('[data-toggle=dropdown]');

for (var k = 0, dropdown, lenk = dropdownList.length; k < lenk; k++) {
    dropdown = dropdownList[k];
    dropdown.setAttribute('tabindex', '0'); // Fix to make onblur work in Chrome
    dropdown.onclick = openDropdown;
    dropdown.onblur = closeDropdown;
}