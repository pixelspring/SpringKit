// ---------------------------------------------------
// Mobile Menu Hide and Show:
// ---------------------------------------------------
var navMobileToggle = document.getElementById('nav-toggle');

// Toggle mobile menu:
navMobileToggle.addEventListener('click', function() {
    console.log("Mobile nav toggle clicked");
    document.getElementById('nav-list').classList.toggle('active');
});