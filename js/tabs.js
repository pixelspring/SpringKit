// ------------------------------------------------
// TABS.JS
// ------------------------------------------------


/**
 * @example
 *
 * <div class="tabs">
 *     <div class="tab">
 *         <a class="tab-button" href="#" role="tab">Tab One</a>
 *         <div class="tab-content" role="tabpanel">
 *             <h4>Tab Content One</h4>
 *         </div>
 *     </div>
 *     <div class="tab">
 *         <a class="tab-button" href="#" role="tab">Tab Two</a>
 *         <div class="tab-content" role="tabpanel">
 *             <h4>Tab Content Two</h4>
 *         </div>
 *     </div>
 * </div>
 */

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Define Classes:
    var tabsClass = 'tabs';
    var tabClass = 'tab';
    var tabButtonClass = 'tab-button';
    var activeClass = 'active';

    // Activate the chosen tab and deactivates the rest
    function activateTab(chosenTabElement) {

        var tabList = chosenTabElement.parentNode.querySelectorAll('.' + tabClass);

        for (var i = 0; i < tabList.length; i++) {
            var tabElement = tabList[i];

            tabElement.setAttribute('tabindex', '0');

            if (tabElement.isEqualNode(chosenTabElement)) {
                tabElement.classList.add(activeClass);
                tabElement.removeAttribute('aria-hidden', true);
            } else {
                tabElement.classList.remove(activeClass);
                tabElement.setAttribute('aria-hidden', true);
            }
        }

    }

    // Initialize each tabbed container
    var tabbedContainers = document.body.querySelectorAll('.' + tabsClass);

    for (var i = 0; i < tabbedContainers.length; i++) {

        var tabbedContainer = tabbedContainers[i];

        // List of tabs for this tabbed container
        var tabList = tabbedContainer.querySelectorAll('.' + tabClass);

        // Make the first tab active when the page loads
        activateTab(tabList[0]);

        // Activate tab when its link clicked
        for (var _i = 0; _i < tabList.length; _i++) {
            var tabElement = tabList[_i];
            var tabButton = tabElement.querySelector('.' + tabButtonClass);
            tabButton.addEventListener('click', function (event) {
                event.preventDefault();
                activateTab(event.target.parentNode);
            });
        }
    }



}, false);
