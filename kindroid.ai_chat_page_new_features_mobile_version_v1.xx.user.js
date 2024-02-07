// ==UserScript==
// @name        Kindroid - Chat page new features mobile version v1.xx
// @description New features for Kindroid's chat page
// @namespace   https://kindroid.ai/home
// @match       https://kindroid.ai/home
// @version     1.06
// @updateURL   https://raw.githubusercontent.com/breatfr/Kindroid/main/kindroid.ai_chat_page_new_features_mobile_version_v1.xx.user.js
// @author      BreatFR
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAkTSURBVGhD1ZoJVFTXGccf68wwMCOgsVZiTKunbaqeuvZoLJqouBxzFBOs0ZhoUokYUxUEBmaBQWUxRpMYd9kEBUVlUxBBVqNgLSQ1FdwRwRUFJVHrwr/ffTODIz7FNzYV3jn/84Z3733v+8397vfdbx7c0w43NzdZ586d3+/UqVO0q6vrYTrXKZXKn+h8n4RfUPfoObdcXFyqSfnOzs5fd+nSZazRrLaPbt26daaBX9KNLra68ctUM4GcJPmTibYGSwUO6jCcxMiFbvJSRXbxos+HSK8ZTX50UOMwarhj7NRuZbTvLLn1r42mc5xCoXChi3Xt3XiTmJ2kAjLdigegi6s6ivEmMXtpFj7gunbtKqc/6oU6tWcZZ6GQM4ZKwU4dQJeY+8S0uthhRPmiiSM/KhVq7CC6y2agrtXFp4r5ndTBBjYSDrYkdmayJlnZc5DKJXyfp421c5CCs7ch2ZnJ3iA7O9jIZHAWGPsMPeCM2wOhxickd5JhZP9ZmDk6EjPe0mLmW2rMeluFj9/2x/yxwRjRZwxkjtInxjHjraX2GNdnMCLfmQn9uPewdJwnwsdPQtSEiVg+YQJWTpqEgJEj4aRQQNlq/DPUzGbgOfc2Stg7WCNwWg4y9UBq8G3sUd9EjuYaCrQXcSyyEQETQ/mZMB/n3MkZtg4S/MHtdVRr44Avd6F5eQLwRTSwYh3pG+Crr4DVq/HRkCHU1+Gx8W2IBxBqEJASEnKfv0/ZhW2qe9jiexFJfuexc/EppPsfx0FdNT4fq+LdyXyco8KJZsUBGd6RaIzYjbrQaFzTr0ejfjV+DluJ+0uigFWrEObhwbuR+djnkUUAWwPvI54AthFAyuLTSPOvRInuvCAAZ28F9fhP0BCZjWpdAgHE4GroBjTov0WTfiWw8ltkzZpNLiaFk1L52NjnkWiAz1sALhFADXYsPoPUxVUo5gGCWgCY33MSa4zu8ybOh+3D2ZAUAkhEbYgB4AYBIGotzgRo8StXF0jkcrELmJcFALuRGPgAcb6XsdXvAnb4mQBqaCE/ApDKZejepRtK/JJxTp+Nk9rtOMcDxOJK6EY0LV2P20u/gXvv34GTUvSitfLkM9uWeADPVAJ4iNhFl5FIANv9zmL34hMo0l1oAVAoFbCR2mLNjEhULy3Bj5pUAthBAFtxISQOV/WbaBHHY4H7GPJ7G4uNZxINMH9KKhJ4gCtI9K0lgHPYRQCFulo+lDIAjiLRbPeZOLX0CL5X7yWANJzQpuCsbhtqCODB8mTETPMmF7MjWPF+by7xAJ5pBNCMGAJIIIBkHuAkAdQRgBq0uUX/3w7AEfV3KNcUoEKd1QJwhmagMTwFpQsi6FtXQubkKPAccRIN8BkB
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

    // Function to toggle content blur
    function toggleContentBlur() {
        const blurElements = document.querySelectorAll('.css-1hmzamm, .css-gnnge1, .css-1j9xj7u > .css-0 > p, .css-teti0a > .css-0 > p');
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
