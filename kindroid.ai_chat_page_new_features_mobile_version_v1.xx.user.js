// ==UserScript==
// @name        Kindroid - Chat page new features v1.xx
// @description New features for Kindroid's chat page
// @namespace   https://kindroid.ai/home
// @match       https://kindroid.ai/home
// @version     1.04
// @author      BreatFR
// @icon        https://play-lh.googleusercontent.com/plaMooDMA0URmZGnfDJmn-v4DEP1SGMUXxC0grATSPuXQ8-HgAgijTXVvyU1y1ir_fRd=w240-h480-rw
// @license     GNU GPL v3 (https://www.gnu.org/licenses/quick-guide-gplv3.en.html)
// ==/UserScript==

(function() {
    'use strict';

    // Function to set cookie
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

    // Function to get cookie
    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Load user preferences from cookies
    var autoConfirmEnabled = getCookie('autoConfirmEnabled') === 'true';
    var autoFocusEnabled = getCookie('autoFocusEnabled') === 'true';

    // User interface
    var uiContainer = document.createElement('div');
    uiContainer.style.position = 'fixed';
    uiContainer.style.top = '5px';
    uiContainer.style.left = '30%';
    uiContainer.style.color = '#cbcbcb';
    uiContainer.style.zIndex = '9999';

    var autoConfirmCheckbox = document.createElement('input');
    autoConfirmCheckbox.type = 'checkbox';
    autoConfirmCheckbox.checked = autoConfirmEnabled;
    autoConfirmCheckbox.addEventListener('change', function() {
        autoConfirmEnabled = autoConfirmCheckbox.checked;
        setCookie('autoConfirmEnabled', autoConfirmEnabled, 30); // Save user preference in cookie
    });

    var autoConfirmLabel = document.createElement('label');
    autoConfirmLabel.innerText = 'Auto Confirm Regenerate ';
    autoConfirmLabel.appendChild(autoConfirmCheckbox);

    var autoFocusCheckbox = document.createElement('input');
    autoFocusCheckbox.type = 'checkbox';
    autoFocusCheckbox.checked = autoFocusEnabled;
    autoFocusCheckbox.addEventListener('change', function() {
        autoFocusEnabled = autoFocusCheckbox.checked;
        setCookie('autoFocusEnabled', autoFocusEnabled, 30); // Save user preference in cookie
    });

    var autoFocusLabel = document.createElement('label');
    autoFocusLabel.innerText = 'Auto Focus Textarea ';
    autoFocusLabel.appendChild(autoFocusCheckbox);

    uiContainer.appendChild(autoConfirmLabel);
    uiContainer.appendChild(document.createElement('br'));
    uiContainer.appendChild(autoFocusLabel);

    document.body.appendChild(uiContainer);

    // Autoconfirm regenerate
    function autoConfirmRegenerate() {
        if (!autoConfirmEnabled) {
            return;
        }
    
        // Cherchez le bouton "Confirm" dans le message de régénération
        const confirmButton1 = document.querySelector('.css-mqmatd .chakra-text');
        const confirmButton2 = document.querySelector('.css-1jbciej'); // Ajout du sélecteur pour le bouton Confirm
    
        // Vérifiez d'abord si le texte spécifique est présent avant de sélectionner le bouton Confirm
        const confirmationText = document.querySelector('.css-10813k0');
        if (confirmationText && confirmationText.textContent.includes("Are you sure you want to regenerate this message?")) {
            if (confirmButton1 && confirmButton1.textContent === 'Confirm') {
                confirmButton1.click();
            } else if (confirmButton2) { // Utilisation du deuxième sélecteur si le premier n'est pas trouvé
                confirmButton2.click();
            }
        }
    
        // Vérifiez régulièrement si le bouton réapparaît
        setTimeout(autoConfirmRegenerate, 500);
    }

    autoConfirmRegenerate();

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
})();
