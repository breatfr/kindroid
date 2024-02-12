// ==UserScript==
// @name        Kindroid - Selfies page new features
// @description New features for Kindroid's selfies page
// @namespace   https://kindroid.ai/selfies
// @match       https://kindroid.ai/selfies
// @version     1.03
// @updateURL   https://raw.githubusercontent.com/breatfr/Kindroid/main/kindroid.ai_selfies_page_new_features_v1.xx.user.js
// @author      BreatFR
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAkTSURBVGhD1ZoJVFTXGccf68wwMCOgsVZiTKunbaqeuvZoLJqouBxzFBOs0ZhoUokYUxUEBmaBQWUxRpMYd9kEBUVlUxBBVqNgLSQ1FdwRwRUFJVHrwr/ffTODIz7FNzYV3jn/84Z3733v+8397vfdbx7c0w43NzdZ586d3+/UqVO0q6vrYTrXKZXKn+h8n4RfUPfoObdcXFyqSfnOzs5fd+nSZazRrLaPbt26daaBX9KNLra68ctUM4GcJPmTibYGSwUO6jCcxMiFbvJSRXbxos+HSK8ZTX50UOMwarhj7NRuZbTvLLn1r42mc5xCoXChi3Xt3XiTmJ2kAjLdigegi6s6ivEmMXtpFj7gunbtKqc/6oU6tWcZZ6GQM4ZKwU4dQJeY+8S0uthhRPmiiSM/KhVq7CC6y2agrtXFp4r5ndTBBjYSDrYkdmayJlnZc5DKJXyfp421c5CCs7ch2ZnJ3iA7O9jIZHAWGPsMPeCM2wOhxickd5JhZP9ZmDk6EjPe0mLmW2rMeluFj9/2x/yxwRjRZwxkjtInxjHjraX2GNdnMCLfmQn9uPewdJwnwsdPQtSEiVg+YQJWTpqEgJEj4aRQQNlq/DPUzGbgOfc2Stg7WCNwWg4y9UBq8G3sUd9EjuYaCrQXcSyyEQETQ/mZMB/n3MkZtg4S/MHtdVRr44Avd6F5eQLwRTSwYh3pG+Crr4DVq/HRkCHU1+Gx8W2IBxBqEJASEnKfv0/ZhW2qe9jiexFJfuexc/EppPsfx0FdNT4fq+LdyXyco8KJZsUBGd6RaIzYjbrQaFzTr0ejfjV+DluJ+0uigFWrEObhwbuR+djnkUUAWwPvI54AthFAyuLTSPOvRInuvCAAZ28F9fhP0BCZjWpdAgHE4GroBjTov0WTfiWw8ltkzZpNLiaFk1L52NjnkWiAz1sALhFADXYsPoPUxVUo5gGCWgCY33MSa4zu8ybOh+3D2ZAUAkhEbYgB4AYBIGotzgRo8StXF0jkcrELmJcFALuRGPgAcb6XsdXvAnb4mQBqaCE/ApDKZejepRtK/JJxTp+Nk9rtOMcDxOJK6EY0LV2P20u/gXvv34GTUvSitfLkM9uWeADPVAJ4iNhFl5FIANv9zmL34hMo0l1oAVAoFbCR2mLNjEhULy3Bj5pUAthBAFtxISQOV/WbaBHHY4H7GPJ7G4uNZxINMH9KKhJ4gCtI9K0lgHPYRQCFulo+lDIAjiLRbPeZOLX0CL5X7yWANJzQpuCsbhtqCODB8mTETPMmF7MjWPF+by7xAJ5pBNCMGAJIIIBkHuAkAdQRgBq0uUX/3w7AEfV3KNcUoEKd1QJwhmagMTwFpQsi6FtXQubkKPAccRIN8BkBbAkEAVwlgDoCqOZDaYHuIuaM9oeU/DnZZxcqQo+iLDgX5QRwTJOOKs1O1Op3okYXj/49e8NaZrnfm8sigHgCiF507bFckK+tw0cjFmC+hx8q9FUoURURQB4BZONf6gyagd24Hp6JGX9mfm/9PzGeyQKAdB5gMwGY54LMwJOInZuDnICjKFSV4WBQMUqDDuCfwfvwAwFcichFxCQfWh/WYrYKbUoUANvIzSOAuAAGUN+SC1L4XFCJHFUlclUVyA8sRUlQCUqD83mA0/o8JH0cCZncAXLKzML3t0wWAGQglgA2LbpuyAW+lMyMuWBPwI80A+U4EFiGYlUJDgfl42hwDgEcQMKscNpLSfithfD9LZNoAB8TwEIDQKKvKRdUIVtVhTzVMeTRDBSrDhJAAf4RvJ9C6R5cCj+A0IlzXr4L+XhmIoYANi68gVjfR7lgb1AN9FM3YNtn+1Gs/gFFBHDICFBBuaBSm47Ly/ZiyoARBEHJ6yl1g1hZBBDNAzQYQ6khF+Rqr+H9v8yH+x9HoSzkJIqCDuG7oEIcoVDKcsExygXV+nScUG/B79160rZZ+v8PowxgruceHmBDC0AdhdJq7Ke64FMPLZ/INJOX4Xt9JUUiBmAIpSwXVGpSUB+ejpy5yyB3dKQC6cXXg0UAmwlg/cJGs1xQzRc2cz104Gw5+mZdsH1eGspDjlIoNQFkoEq7C6e1SbgdlYYVk2fzrvSi60E0wKeT92CTPwO4yQOYcsE+TT0PwNfJMhsM6jUYZZpSHNUUUShlySyTZoABJKMmNBG3I5MxfbD7C68H8QCee7GRANYRgHku2Ke5Ti4UwgOw/mxD97eRn6BqSbkxmWXiuGY3TtG2mhU29UsScUm3Dn1f7UnAbD0IPbNtiQbwnmwCuPUoFxBAdisAJ6UT7GT2WDdzFU4tKaVQygBSCYBtqxNpWx2L/0Qm4PB8LRSUGxwsXA8WAWwggLULmgy5wFgXZGluwNsMgH2jErkUPbq+imJ/8v/QPPzbrC6opW31ZSpssGIL1r/7Ac2YnUXrQTTAnMlZPMCahU2GXGCsC7I0DQQQ2gLAZCgrrTD+T6NwOqwQx7UZBGCoC1hhczl0E5WW66i42YQ5Q4fTJs9WdGi1ACAb63mAn/lcEEuhNJFCaZam8QkAk1hhr3tnAS6GFxoLmyQCiCeAzagngLvha9EUtgKDX/8NbbPFrQcGcK/1RWExAGvMe68QcWrazBFEfMBDJAXexU7VLRSENWPe+AhYt/pdiElOhQvbA2X4rEFDVD6uLktDw7IU/BSxDfci4tAcSa70dTRqVVq89sorYtZDM/tl7pZAg6AUCke80WsMhvX7EEP7TsebfadheN+pcO/nhdH9p+GNnoPg6CR/YhxzCwkV+b2798TUQR6Y0n8k3h3gDq8Bw/HXAcMwbeBQTB84BN7DhqNfjx7iANjbQIEGQTFDHBxtIZFxvOx5WfGylXLURtP/lJjOrjsQnBUV+9ZSOzrbt4j9KmGSXKEQkxfuM4AigYaOojvs5d5qgYYOIXL/mxx7iSzU2EFUw3l5ednQh/OtGtq92DohpfNvKemDX3t8uf0sMQBXV9dRPMDAgQPt6OIRdrF1x/Yo47cfwxtvOuhCD2o8094hjPbl9erVS2I0/dFBbtSdOuSyTu0NxGQTabOg8eYHgXxIHXNpYK0xU98lPSA1s5v9wmLPeEhir77u0PMbyZazpJ2kVv92w3H/BfAdIrUSuc6XAAAAAElFTkSuQmCC
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

(function() {
    'use strict';

    // Import JSZip library
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    document.head.appendChild(script);

    if (window.location.href.includes("/selfies")) {
        // User interface
        var uiContainer = document.createElement('div');
        uiContainer.style.position = 'fixed';
        uiContainer.style.top = '5px';
        uiContainer.style.left = '8%';
        uiContainer.style.color = '#cbcbcb';
        uiContainer.style.zIndex = '9999';
    
        // Create table for layout
        var table = document.createElement('table');
        table.style.borderCollapse = 'collapse'; // Collapse border spacing
        table.style.width = '100%'; // Set table width
    
        // First row for labels and checkboxes
        var row1 = document.createElement('tr');
        table.appendChild(row1);
    
        // Cell for "Help Create Prompts" label and checkbox
        var cell1 = document.createElement('td');
        row1.appendChild(cell1);
    
        var autoCreateModalLabel = document.createElement('label');
        autoCreateModalLabel.innerText = 'Help Create Prompts ';
        autoCreateModalLabel.setAttribute('for', 'showModalCheckbox');
        autoCreateModalLabel.style.cursor = 'pointer'; // Make the label clickable
    
        var showModalCheckbox = document.createElement('input');
        showModalCheckbox.type = 'checkbox';
        showModalCheckbox.id = 'showModalCheckbox';
        showModalCheckbox.style.marginRight = '5px'; // Add some margin to separate from label
        showModalCheckbox.checked = false; // Initially unchecked
        showModalCheckbox.addEventListener('change', function() {
            if (showModalCheckbox.checked) {
                createModal();
            } else {
                var modal = document.getElementById('promptModal');
                if (modal) {
                    modal.parentNode.removeChild(modal);
                }
            }
        });
    
        autoCreateModalLabel.appendChild(showModalCheckbox);
        cell1.appendChild(autoCreateModalLabel);
    
        // Cell for "See All Images" label and checkbox
        var cell2 = document.createElement('td');
        row1.appendChild(cell2);
    
        var autoLoadMoreLabel = document.createElement('label');
        autoLoadMoreLabel.innerText = 'See All Images ';
        autoLoadMoreLabel.style.marginRight = '5px'; // Add some margin to separate from checkbox
    
        var autoLoadMoreCheckbox = document.createElement('input');
        autoLoadMoreCheckbox.type = 'checkbox';
        autoLoadMoreCheckbox.checked = getCookie('autoLoadMoreEnabled') === 'true'; // Set checkbox value based on cookie
        autoLoadMoreCheckbox.addEventListener('change', function() {
            autoLoadMoreEnabled = autoLoadMoreCheckbox.checked;
            // Set cookie to remember user choice
            setCookie('autoLoadMoreEnabled', autoLoadMoreEnabled, 30);
            // Trigger autoLoadMore function when the checkbox is changed
            autoLoadMore();
        });
    
        autoLoadMoreLabel.appendChild(autoLoadMoreCheckbox);
        cell2.appendChild(autoLoadMoreLabel);
    
        // Second row for empty space and "Download All Images" button
        var row2 = document.createElement('tr');
        table.appendChild(row2);
    
        // Empty cell to align with "Help Create Prompts" checkbox
        var emptyCell = document.createElement('td');
        row2.appendChild(emptyCell);
    
        // Cell for "Download All Images" button
        var cell3 = document.createElement('td');
        row2.appendChild(cell3);
    
        var downloadAllButton = document.createElement('button');
        downloadAllButton.innerText = 'Download All Images';
        downloadAllButton.title = 'Please make sure to enable "See All Images" before downloading.'; // Add tooltip
        downloadAllButton.addEventListener('click', function() {
            downloadAllImages();
        });

        // Create status text for download progress
        var downloadStatus = document.createElement('span');

        cell3.appendChild(downloadAllButton);
        cell3.appendChild(downloadStatus);

        uiContainer.appendChild(table);
        document.body.appendChild(uiContainer);

        // Check if autoLoadMore is enabled from cookie
        var autoLoadMoreEnabled = autoLoadMoreCheckbox.checked;

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

        // Auto load more images
        function autoLoadMore() {
            console.log('Auto Load More:', autoLoadMoreEnabled);
            if (autoLoadMoreEnabled) {
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(autoLoadMore, 1000); // Adjust the delay here (in milliseconds)
            }
        }

        // Function to download all images
        function downloadAllImages() {
            var imageElements = document.querySelectorAll('.image_container img');
            if (imageElements.length === 0) {
                downloadStatus.innerText = 'No images found.';
                return;
            }

            var zip = new JSZip();
            var count = 0;

            imageElements.forEach(function(img, index) {
                var imageUrl = img.src;
                var filename = 'image_' + index + '.png'; // You can modify the filename here if needed

                // Fetch image as blob
                fetch(imageUrl)
                    .then(response => response.blob())
                    .then(blob => {
                        zip.file(filename, blob);
                        count++;
                        downloadStatus.innerText = 'Downloading ' + count + ' of ' + imageElements.length + ' images...';
                        if (count === imageElements.length) {
                            // Generate zip file
                            zip.generateAsync({ type: 'blob' })
                                .then(function(content) {
                                    // Save zip file
                                    var link = document.createElement('a');
                                    link.href = URL.createObjectURL(content);
                                    link.download = 'kindroid_images.zip';
                                    link.click();
                                    downloadStatus.innerText = 'Download complete.';
                                });
                        }
                    });
            });
        }
    }

    function createModal() {
        var modal = document.createElement('div');
        modal.id = 'promptModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '9999';

        var modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '8px';
        modalContent.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        modal.appendChild(modalContent);

        var closeButton = document.createElement('button');
        closeButton.innerText = 'Close';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.border = 'none';
        closeButton.style.backgroundColor = 'transparent';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', function() {
            modal.parentNode.removeChild(modal);
        });
        modal.appendChild(closeButton);

        var promptTitle = document.createElement('h2');
        promptTitle.innerText = 'Help Create Prompts';
        modalContent.appendChild(promptTitle);

        var promptDescription = document.createElement('p');
        promptDescription.innerText = 'This feature is currently under development. Stay tuned for updates!';
        modalContent.appendChild(promptDescription);

        document.body.appendChild(modal);
    }
})();
