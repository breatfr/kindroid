// ==UserScript==
// @name        Kindroid - New features
// @description New features for Kindroid
// @namespace
// @match       https://kindroid.ai/*
// @updateURL   https://raw.githubusercontent.com/breatfr/Kindroid/main/kindroid.ai_new_features_v1.xx.user.js
// @version     1.01
// @author      BreatFR
// @icon        https://play-lh.googleusercontent.com/plaMooDMA0URmZGnfDJmn-v4DEP1SGMUXxC0grATSPuXQ8-HgAgijTXVvyU1y1ir_fRd=w240-h480-rw
// @license     GNU GPL v3 (https://www.gnu.org/licenses/quick-guide-gplv3.en.html)
// ==/UserScript==

(function() {
    'use strict';

    // User interface
    var uiContainer = document.createElement('div');
    uiContainer.style.position = 'fixed';
    uiContainer.style.top = '5px';
    uiContainer.style.left = '15%';
    uiContainer.style.color = '#cbcbcb';
    uiContainer.style.zIndex = '9999';

    var autoFocusCheckbox = document.createElement('input');
    autoFocusCheckbox.type = 'checkbox';
    autoFocusCheckbox.checked = true;
    autoFocusCheckbox.addEventListener('change', function() {
        autoFocusEnabled = autoFocusCheckbox.checked;
    });

    var autoFocusLabel = document.createElement('label');
    autoFocusLabel.innerText = 'Auto Focus Textarea ';
    autoFocusLabel.appendChild(autoFocusCheckbox);

    var autoConfirmCheckbox = document.createElement('input');
    autoConfirmCheckbox.type = 'checkbox';
    autoConfirmCheckbox.checked = true;
    autoConfirmCheckbox.addEventListener('change', function() {
        autoConfirmEnabled = autoConfirmCheckbox.checked;
    });

    var autoConfirmLabel = document.createElement('label');
    autoConfirmLabel.innerText = 'Auto Confirm Regenerate ';
    autoConfirmLabel.appendChild(autoConfirmCheckbox);

    uiContainer.appendChild(autoFocusLabel);
    uiContainer.appendChild(document.createElement('br'));
    uiContainer.appendChild(autoConfirmLabel);

    document.body.appendChild(uiContainer);

    // Choose your feature needed
    var autoFocusEnabled = true; // Autofocus on textarea
    var autoConfirmEnabled = true; // Autoconfirm regenerate

    // Autofocus on textarea
    function focusTextarea() {
        var textareaElement = document.querySelector('.css-ymugf1');
        if (textareaElement) {
            textareaElement.focus();
        }
    }

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (autoFocusEnabled) {
                focusTextarea();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setInterval(function() {
        if (autoFocusEnabled) {
            focusTextarea();
        }
    }, 500);

    // Autoconfirm regenerate
    function autoConfirmRegenerate() {
        if (!autoConfirmEnabled) {
            return;
        }

        const confirmButton = document.querySelector('button.chakra-button .chakra-text');
        if (confirmButton && confirmButton.textContent === 'Confirm') {
            confirmButton.click();
        } else {
            setTimeout(autoConfirmRegenerate, 500);
        }
    }

    autoConfirmRegenerate();
})();
