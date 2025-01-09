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

    function isHomepage() {
        return document.location.pathname == '/';
    }

    /**
     * Main function to perform the automated clicks.
     */
    function activateCopilotImmersiveMode() {
        document.location = '/copilot';
    }

    /**
     * Initialize the script only if GitHub is running as a PWA.
     */
    if (isStandalone() && isHomepage()) {
        console.log('GitHub is running as a standalone PWA. Initializing Copilot Immersive Mode activation.');
        activateCopilotImmersiveMode();
    } else {
        console.log('GitHub is running in a regular browser window. Script will not activate.');
    }
})();