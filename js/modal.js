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

    var modalActive;


    // Listen for click on "show modal" link
    if ( modalOpen ) {
        modalOpen.addEventListener('click', modalShow, false);
    }

    // Listen for click on "close modal" link
    if ( modalClose ) {
        modalClose.addEventListener('click', modalDismiss, false);
    }

    // Click outside of the modal to close it
    if ( modal ) {
        window.addEventListener('click', function() {
            if (event.target === modal) {
                modalDismiss();
            }
        });

        // Close with escape keypress
        window.addEventListener('keydown', function () {
            if (modalActive && event.keyCode === 27) {
                event.preventDefault();
                modalDismiss();
            }
        });

    }

    // Show the modal window:
    function modalShow(e) {
        modal.style.display = "block";
        modal.removeAttribute('aria-hidden');
        modalActive = true;
        event.preventDefault();
    }

    // Dismiss the modal window:
    function modalDismiss() {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
        modalActive = false;
    }

}, false);