// ==UserScript==
// @name        Kindroid - New features
// @description New features for Kindroid
// @namespace
// @match       https://kindroid.ai/*
// @version     1.00
// @author      BreatFR
// @icon        https://play-lh.googleusercontent.com/plaMooDMA0URmZGnfDJmn-v4DEP1SGMUXxC0grATSPuXQ8-HgAgijTXVvyU1y1ir_fRd=w240-h480-rw
// @license     GNU GPL v3 (https://www.gnu.org/licenses/quick-guide-gplv3.en.html)
// ==/UserScript==

(function() {
    'use strict';

    // Textarea auto focus
    function focusTextarea() {
        var textareaElement = document.querySelector('.css-w2nlit');
        if (textareaElement) {
            textareaElement.focus();
        }
    }

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            focusTextarea();
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setInterval(function() {
        focusTextarea();
    }, 500);
})();
