// ------------------------------------------------
// ACCORDION.JS
// ------------------------------------------------


/**
 * @example
 *
 */

/*
<dl class="accordion">
    <dt class="accordion-panel-toggle" data-toggle="accordion">Section 1</dt>
    <dd class="accordion-panel" role="tabpanel">Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</dd>

    <dt class="accordion-panel-toggle" data-toggle="accordion">Section 2</dt>
    <dd class="accordion-panel" role="tabpanel">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</dd>

    <dt class="accordion-panel-toggle" data-toggle="accordion">Section 3</dt>
    <dd class="accordion-panel" role="tabpanel">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</dd>
</dl>
*/

"use strict";

document.addEventListener('DOMContentLoaded', function() {

    var accordionPanelToggles = document.querySelectorAll("[data-toggle=accordion]");
    var accordionPanels = document.querySelectorAll(".accordion-panel");


    if ( accordionPanelToggles &&  accordionPanels ) {

        for (var i = 0; i < accordionPanelToggles.length; i++) {
            accordionPanelToggles[i].addEventListener("click", toggleAccordionPanel);
            accordionPanelToggles[i].setAttribute('tabindex', '0');
        }

        function toggleAccordionPanel(evt) {

            this.classList.toggle("accordion-panel-toggle-active");

            var panel = evt.currentTarget.nextElementSibling;
            panel.classList.toggle("accordion-panel-active");

            //close others
            for (var i = 0; i < accordionPanels.length; i++) {
                if (accordionPanels[i] !=panel) {
                    accordionPanels[i].classList.remove("accordion-panel-active");
                    accordionPanels[i].previousElementSibling.classList.remove("accordion-panel-toggle-active");
                }
            }

        }

    }

}, false);
