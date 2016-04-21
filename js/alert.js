// ------------------------------------------------
// ALERT.JS
// ------------------------------------------------


function dismissElement() {
    this.parentNode.remove(this);
    return false;
}

// Find all "[data-dismiss]" dataset instances
var dismissList = document.querySelectorAll('[data-dismiss]');

for (   var i = 0, l=dismissList.length;
        i<l;
        i++ ) {
    dismissList[i].onmouseup = dismissElement;
};