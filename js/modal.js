// ------------------------------------------------
// MODAL.JS
// ------------------------------------------------
//
// (1)
// (2)
// (3)
//
// ------------------------------------------------

/**
 * @example
 *
 * <div id="modalWindow" class="modal">
 *     <div class="modal-content">
 *         <span class="modal-close">x</span>
 *         <p>Modal content goes here</p>
 *     </div>
 * </div>
 *
 */

"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var modal = document.getElementById('modalWindow');
    var modalOpen = document.getElementById("openModal");
    var modalClose = document.getElementsByClassName("modal-close")[0];



    // Show the modal
    if ( modalOpen ) {
        modalOpen.addEventListener('click', function() {
            modal.style.display = "block";
        });
    }

    // Close the modal via close link
    if ( modalClose ) {
        modalClose.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    // Click outside of the modal to close it
    if ( modal ) {
        window.addEventListener('click', function() {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }



}, false);