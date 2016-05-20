
// Port Me to vanilla:
/*

$(document).ready(function() {
  $('.mobile').click(function () {
      $('nav').toggleClass('active');
   });

   $('nav ul li ul').each(function() {
    $(this).before('<span class=\"arrow\"></span>');
  });

  $('nav ul li').click(function() {
    $(this).children('ul').toggleClass('active');
     $(this).children('.arrow').toggleClass('rotate');
  });
});

*/


// ---------------------------------------------------
// Create toggler for mobile nav menu:
/*
document.getElementById('navBarToggle').addEventListener('click', function() {
    skToggleClass(document.getElementById('navBar'), 'active');
});
*/


// ---------------------------------------------------
// Set event listeners for dropdown menus
/*
var subNav = document.querySelectorAll('nav ul li ul');
// var subNav = document.querySelectorAll('.dropdown');

Array.prototype.forEach.call(subNav, function(el, i){
    el.insertAdjacentHTML('beforebegin', '<span class=\"arrow\"></span>');
});
*/


// ---------------------------------------------------
// Create toggler for mobile nav submenus:

/*
document.querySelectorAll('.has-dropdown').addEventListener('click', function() {

    // $(this).children('ul').toggleClass('active');
    // $(this).children('.arrow').toggleClass('rotate');

    console.log("CLICKY");
    // console.log(this.children);

    // this.children.skToggleClass(document.getElementById('ul'), 'active');

});
*/


/*
function openSubMenu(event) {

    console.log(this);

    // Toggle active class:
    this.children[2].classList.toggle('active');

    // Toggle rotate class for icon:
    this.children[1].classList.toggle('rotate');
}

var navSubMenu = document.querySelectorAll('.has-dropdown');
// var navSubMenu = document.querySelectorAll('li.has-dropdown a');

for (var ddlc = 0, dropdown, lenk = navSubMenu.length; ddlc < lenk; ddlc++) {
    dropdown = navSubMenu[ddlc];
    // dropdown.setAttribute('tabindex', '0'); // Make onblur work in Chrome
    dropdown.onclick = openSubMenu;
}
*/






/*
// Vanilla Bootstrap Navbar:

// Navbar and dropdowns
var toggle = document.getElementsByClassName('has-dropdown')[0];
var collapse = document.getElementsByClassName('navbar-collapse')[0];
var dropdowns = document.getElementsByClassName('dropdown');

// Toggle if navbar menu is open or closed
function toggleMenu() {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
}

// Close all dropdown menus
function closeMenus() {
    for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
        dropdowns[j].classList.remove('open');
    }
}

// Add click handling to dropdowns
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
        if (document.body.clientWidth < 768) {
            var open = this.classList.contains('open');
            closeMenus();
            if (!open) {
                this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
                this.classList.toggle('open');
            }
        }
    });
}

// Close dropdowns when screen becomes big enough to switch to open by hover
function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
        closeMenus();
        collapse.classList.add('collapse');
        collapse.classList.remove('in');
    }
}

// Event listeners
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);
*/


/*
// Working jQuery for dropdowns:
(function($) { // Begin jQuery
    $(function() { // DOM ready

        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();

            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });

        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });

        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });

    }); // end DOM ready
})(jQuery); // end jQuery
*/



/*
var navSubMenu = document.querySelectorAll('.has-dropdown');
var navMobileToggle = document.getElementById('nav-toggle');

// Toggle dropdown menus:
function openDropdown(event) {

    // Toggle active class:
    this.children[1].classList.toggle('active');

}


for (var i = 0, dropdown, len = navSubMenu.length; i < len; i++) {
    dropdown = navSubMenu[i];
    dropdown.onclick = openDropdown;
}



// Toggle mobile menu:
navMobileToggle.addEventListener('click', function() {

    document.getElementById('nav-list').classList.toggle('active');

});
*/



// ---------------------------------------------------
// Navbar dropdowns
// ---------------------------------------------------
var dropdowns = document.getElementsByClassName('has-dropdown');
var toggle = document.getElementsByClassName('nav-dropdown')[0];


// Close all dropdown menus
function closeDropdownMenus() {
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].getElementsByClassName('nav-dropdown')[0].classList.remove('active');
        dropdowns[i].classList.remove('active');
    }
}


// Event handling for dropdowns:
for (var i = 0; i < dropdowns.length; i++) {

    dropdowns[i].addEventListener('blur', handler, false);
    dropdowns[i].addEventListener('mouseenter', handler, false);
    dropdowns[i].addEventListener('click', handler, false);


    function handler(event) {

        if (event.type === "blur") {
            // console.log("BLUR");
        }

        else if (event.type === "mouseenter") {
            // console.log("MOUSEENTER");
        }

        // Click Event:
        else if (event.type === "click") {
            console.log("CLICK");

            var open = this.classList.contains('active');
            closeDropdownMenus();
            if (!open) {
                this.getElementsByClassName('nav-dropdown')[0].classList.toggle('active');
                this.classList.toggle('active');
            }

        }

    }

}

/*
window.addEventListener('click', function(event){

    for(var i=0; i < dropdowns.length; i++){

        var dd = document.getElementById(dropdowns[i]);

        if(event.target != dd && event.target.parentNode != dd){
            closeDropdownMenus();
        }

    }

});
*/


// ---------------------------------------------------
// Mobile Menu Hide and Show:
// ---------------------------------------------------
var navMobileToggle = document.getElementById('nav-toggle');

// Toggle mobile menu:
navMobileToggle.addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
});