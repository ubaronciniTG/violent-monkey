// ==UserScript==
// @name         GitHub Copilot Immersive Mode Auto-Activator
// @namespace    http://your-namespace.com/
// @version      1.0
// @description  Automatically opens GitHub Copilot in immersive mode when GitHub is launched as a PWA
// @match        https://github.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Function to check if the app is running in standalone (PWA) mode.
     * @returns {boolean} True if running as PWA, else false.
     */
    function isStandalone() {
        return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    }

    /**
     * Function to simulate a click event on a given DOM element.
     * @param {Element} element - The DOM element to be clicked.
     */
    function simulateClick(element) {
        if (element) {
            element.click();
            console.log(`Clicked on element: ${element}`);
        } else {
            console.warn('Element to click not found.');
        }
    }

    /**
     * Main function to perform the automated clicks.
     */
    function activateCopilotImmersiveMode() {
        // First Button: GitHub Copilot Menu Button
        const copilotMenuButton = document.getElementById('global-copilot-menu-button');

        if (copilotMenuButton) {
            simulateClick(copilotMenuButton);

            // Wait for the dropdown menu to appear
            setTimeout(() => {
                // Second Element: Immersive Mode Option in Dropdown
                // Using querySelector to find the link with href="/copilot"
                const immersiveOption = document.querySelector('#\\:rc\\:');

                // Alternatively, if aria-label is not reliable, use another selector:
                // const immersiveOption = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Immersive');

                simulateClick(immersiveOption);
            }, 500); // Adjust the delay if necessary
        } else {
            console.warn('GitHub Copilot menu button not found.');
        }
    }

    /**
     * Initialize the script only if GitHub is running as a PWA.
     */
    if (isStandalone()) {
        console.log('GitHub is running as a standalone PWA. Initializing Copilot Immersive Mode activation.');

        // Wait for the page to fully load
        window.addEventListener('load', () => {
            // Delay the activation to ensure elements are available
            setTimeout(() => {
                activateCopilotImmersiveMode();
            }, 1000); // Adjust the delay if necessary based on your connection speed
        });
    } else {
        console.log('GitHub is running in a regular browser window. Script will not activate.');
    }
})();
