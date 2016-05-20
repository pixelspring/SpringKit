// ------------------------------------------------
// UTILITIES.JS
// ------------------------------------------------

/// skToggleClass
/// Toggler:

function skToggleClass(element, className){

    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);

    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }

    element.className = classString;
}

// Usage:
/*
document.getElementById('toggleButton').addEventListener('click', function() {

    skToggleClass(document.getElementById('elementToToggle'), 'added-class');

});
*/



// ------------------------------------------------
// hasClass
// ------------------------------------------------
/**
 * @summary Check if element has a certain CSS class.
 *
 * @example
 * document.getElementById('button').onclick = function() {
 *     if (hasClass(document.getElementById('button'), 'superman')) {
 *         this.innerHTML = 'Mission success: \'superman\' class exists.';
 *     }
 * }
 */

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}


// ------------------------------------------------
// addClass
// ------------------------------------------------
/**
 * @summary Add CSS class to element.
 *
 * @example
 * document.getElementById('button').onclick = function() {
 *     addClass(this, 'active');
 *     this.innerHTML = 'Woop! Class Added!';
 * }
 */

function addClass(elem, className) {

    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }

}





// ------------------------------------------------
// removeClass
// ------------------------------------------------
/**
 * @summary Remove CSS class from element.
 *
 * @example
 * document.getElementById('button').onclick = function() {
 *     removeClass(this, 'active');
 *     this.innerHTML = 'Yellow is much nicer.';
 * }
 */

function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';

    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }

}



// ------------------------------------------------
// toggleClass
// ------------------------------------------------
/**
 * @summary Toggle CSS class on/off on element.
 *
 * @example
 * document.getElementById('button').onclick = function() {
 *     toggleClass(this, 'active');
 * }
 */

function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';

    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}
