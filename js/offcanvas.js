// ---------------------------------------------------
// Offcanvas Hide and Show:
// ---------------------------------------------------

"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var offCanvasToggle = document.querySelectorAll("[data-toggle=offcanvas]");

    if ( offCanvasToggle ) {
        for (var x = 0; x < offCanvasToggle.length; x++) {

            offCanvasToggle[x].addEventListener('click', function(e) {
                document.getElementById('offCanvas').classList.toggle('active');
                container.classList.toggle('container-pushed');
                offCanvasMask.classList.toggle('active');
                document.body.classList.toggle('body-pushed');
                e.preventDefault();
            });

        }

    }

}, false);
