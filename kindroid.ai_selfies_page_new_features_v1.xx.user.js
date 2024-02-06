// ==UserScript==
// @name        Kindroid - Selfies page new features
// @description New features for Kindroid's selfies page
// @namespace   https://kindroid.ai/selfies
// @match       https://kindroid.ai/selfies
// @updateURL   https://raw.githubusercontent.com/breatfr/Kindroid/main/kindroid.ai_selfies_page_new_features_v1.xx.user.js
// @version     1.00
// @author      BreatFR
// @icon        https://play-lh.googleusercontent.com/plaMooDMA0URmZGnfDJmn-v4DEP1SGMUXxC0grATSPuXQ8-HgAgijTXVvyU1y1ir_fRd=w240-h480-rw
// @license     GNU GPL v3 (https://www.gnu.org/licenses/quick-guide-gplv3.en.html)
// ==/UserScript==

(function() {
    'use strict';

    // Import JSZip library
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    document.head.appendChild(script);

    // User interface
    var uiContainer = document.createElement('div');
    uiContainer.style.position = 'fixed';
    uiContainer.style.top = '5px';
    uiContainer.style.left = '15%';
    uiContainer.style.color = '#cbcbcb';
    uiContainer.style.zIndex = '9999';

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

    var autoLoadMoreLabel = document.createElement('label');
    autoLoadMoreLabel.innerText = 'See All Images ';
    autoLoadMoreLabel.appendChild(autoLoadMoreCheckbox);

    var downloadAllButton = document.createElement('button');
    downloadAllButton.innerText = 'Download All Images';
    downloadAllButton.addEventListener('click', function() {
        downloadAllImages();
    });

    var downloadStatus = document.createElement('span');

    uiContainer.appendChild(autoLoadMoreLabel);
    uiContainer.appendChild(document.createElement('br'));
    uiContainer.appendChild(downloadAllButton);
    uiContainer.appendChild(downloadStatus);

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
        if (!autoLoadMoreEnabled) {
            return;
        }

        // Find the "Load More" button
        var loadMoreButton = document.querySelector('button.chakra-button.css-1q03dzc');
        console.log('Load More Button:', loadMoreButton);
        if (loadMoreButton) {
            // Click the "Load More" button
            loadMoreButton.click();
            // Hide the "Load More" button
            loadMoreButton.style.display = 'none';
        }
    }

    // Download all images
    function downloadAllImages() {
        console.log('Download All Images');
        var images = document.querySelectorAll('.css-1dq4ssc img.css-1regj17');
        console.log('Found Images:', images);
        if (images.length === 0) {
            alert('No images found.');
            return;
        }

        var zip = new JSZip();
        var count = 0;
        var totalImages = images.length;
        downloadStatus.innerText = ' Downloading... (0/' + totalImages + ')';
        images.forEach(function(image, index) {
            fetch(image.src)
                .then(response => response.blob())
                .then(blob => {
                    var filename = ('0000' + (totalImages - index)).slice(-4) + '.jpg'; // Reverse numbering
                    zip.file(filename, blob);
                    count++;
                    downloadStatus.innerText = ' Downloading... (' + count + '/' + totalImages + ')';
                    if (count === totalImages) {
                        zip.generateAsync({ type: 'blob' })
                            .then(content => {
                                // Trigger file download
                                var a = document.createElement('a');
                                a.href = URL.createObjectURL(content);
                                a.download = 'Kindroid.zip';
                                a.click();
                                downloadStatus.innerText = '';
                                // Show the "Load More" button again after download is complete
                                var loadMoreButton = document.querySelector('button.chakra-button.css-1q03dzc');
                                if (loadMoreButton) {
                                    loadMoreButton.style.display = 'block';
                                }
                            });
                    }
                });
        });
    }

    // Call autoLoadMore function when the page is loaded
    window.addEventListener('load', function() {
        autoLoadMore();

        // Observe mutations in the DOM to detect addition of new elements
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                autoLoadMore();
            });
        });

        // Start observing mutations
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();
