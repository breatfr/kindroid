// ==UserScript==
// @name        Kindroid - Chat page new features mobile
// @description New features for Kindroid's chat page
// @namespace   https://kindroid.ai
// @match       https://kindroid.ai/home
// @match       https://kindroid.ai/groupchat/*
// @version     1.09
// @updateURL   https://raw.githubusercontent.com/breatfr/Kindroid/main/js/kindroid_chat_page_new_features_mobile.user.js
// @author      BreatFR
// @copyright   2023, BreatFR (https://breat.fr)
// @icon        data:image/png;base64,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
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
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
    var blurContentEnabled = getCookie('blurContentEnabled') === 'true';

    if (window.location.href.includes("/home")) {
        // User interface
        var uiContainer = document.createElement('div');
        uiContainer.style.position = 'fixed';
        uiContainer.style.left = '50%';
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
        autoConfirmLabel.innerHTML = '<abbr title="Auto Confirm Regenerate">ACR </abbr>';
        autoConfirmLabel.appendChild(autoConfirmCheckbox);

        var autoFocusCheckbox = document.createElement('input');
        autoFocusCheckbox.type = 'checkbox';
        autoFocusCheckbox.checked = autoFocusEnabled;
        autoFocusCheckbox.addEventListener('change', function() {
            autoFocusEnabled = autoFocusCheckbox.checked;
            setCookie('autoFocusEnabled', autoFocusEnabled, 30); // Save user preference in cookie
        });

        var autoFocusLabel = document.createElement('label');
        autoFocusLabel.innerHTML = '<abbr title="Auto Focus Textarea">AFT </abbr>';
        autoFocusLabel.appendChild(autoFocusCheckbox);

        var blurContentCheckbox = document.createElement('input');
        blurContentCheckbox.type = 'checkbox';
        blurContentCheckbox.checked = blurContentEnabled;
        blurContentCheckbox.addEventListener('change', function() {
            blurContentEnabled = blurContentCheckbox.checked;
            setCookie('blurContentEnabled', blurContentEnabled, 30); // Save user preference in cookie
            toggleContentBlur();
        });

        var blurContentLabel = document.createElement('label');
        blurContentLabel.innerHTML = '<abbr title="Blur Content">BLUR </abbr>';
        blurContentLabel.appendChild(blurContentCheckbox);

        var spacer = document.createElement('span');
        spacer.innerHTML = '&nbsp;&nbsp;&nbsp;'; // Adjust as needed

        uiContainer.appendChild(autoConfirmLabel);
        uiContainer.appendChild(spacer); // Add spacer
        uiContainer.appendChild(blurContentLabel); // Move BLUR after ACR
        uiContainer.appendChild(document.createElement('br')); // Add line break
        uiContainer.appendChild(autoFocusLabel);

        document.body.appendChild(uiContainer);
    } else {
      // Masquer l'interface de la page chat
    }

    // Autoconfirm regenerate
    function autoConfirmRegenerate() {
        if (!autoConfirmEnabled) {
          return;
        }

        // Cherchez le bouton "Confirm" dans le message de régénération
        const confirmButton1 = document.querySelector('.css-mqmatd');
        const confirmButton2 = document.querySelector('.css-gtytcb');
        const confirmButton3 = document.querySelector('.css-1jbciej');

        // Vérifiez d'abord si le texte spécifique est présent avant de sélectionner le bouton Confirm
        const confirmationText = document.querySelector('.css-6a2m2n');
        if (confirmationText && confirmationText.textContent.includes("Suggest a revision")) {
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
        var textareaElement1 = document.querySelector('.css-ymugf1');
        var textareaElement2 = document.querySelector('.css-14m2to8');
        if (textareaElement1) {
            textareaElement1.focus();
        } else if (textareaElement2) {
            textareaElement2.focus();
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

    // Function to toggle content blur
    function toggleContentBlur() {
        const blurElements = document.querySelectorAll('.css-ppua9z, .css-19hb772, .css-1hmzamm, .css-gnnge1, .css-1j9xj7u > .css-0 > p, .css-teti0a > .css-0 > p');
        blurElements.forEach(function(element) {
            if (blurContentEnabled) {
                element.style.filter = 'blur(8px)';
                element.style.webkitFilter = 'blur(8px)';
            } else {
                element.style.filter = 'none';
                element.style.webkitFilter = 'none';
            }
        });
    }

    // Initial toggle of content blur based on saved preference
    toggleContentBlur();

    // Hide icons on right
    const style = document.createElement('style');
    style.innerHTML = `
        .css-1rdhwuq {
            display: none !important;
        }
    `;

    // Ajouter le style au header
    document.head.appendChild(style);
})();
