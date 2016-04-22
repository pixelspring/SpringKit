// ------------------------------------------------
// ALERT.JS
// ------------------------------------------------

// Prefix helper function for eventListeners
//
// Rather than using something like:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// parentElem.addEventListener("animationstart",function(e){
//     // Animation Started, do stuff
// },false);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var pfx = ["webkit", "moz", "MS", "o", ""];

function prefixedEventListener(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
};

// Dismiss the element:
function dismissElement() {

    var parentElem = this.parentNode;

    // Add fade out CSS to parent element:
    parentElem.classList.add("animated", "fadeOut");

    // Listen for animation start:
    prefixedEventListener(parentElem,"AnimationStart",function(e){
        // Animation Started
        // console.log("Animation Started");
    },false);

    // Listen for iterations:
    prefixedEventListener(parentElem,"Animationiteration",function(e){
        // Animation Iteration
        // console.log("Animation Iteration");
    },false);

    // Listen for animation end:
    prefixedEventListener(parentElem,"Animationend",function(e){
        // Animation End
        // console.log("Animation End");

        // Remove the parent element
        parentElem.remove(this);
    },false);

    return false;
}

// Find all "[data-dismiss]" dataset instances
var dismissList = document.querySelectorAll('[data-dismiss]'), i=dismissList.length;

while (i--) {
    dismissList[i].onmouseup = dismissElement;
}

/*
// Find all "[data-dismiss]" dataset instances

var dismissList = document.querySelectorAll('[data-dismiss]'), l=dismissList.length;

for ( var i = 0; i<l; i++ ) {
    dismissList[i].onmouseup = dismissElement;
};
*/