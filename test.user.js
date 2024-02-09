// ==UserScript==
// @name        Kindroid - Selfies test
// @description New features for Kindroid's selfies page
// @namespace   https://kindroid.ai/selfies
// @match       https://kindroid.ai/selfies
// @version     1.03
// @author      BreatFR
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
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

    // Create table for layout
    var table = document.createElement('table');
    table.style.borderCollapse = 'collapse'; // Collapse border spacing
    table.style.width = '70%'; // Set table width

    // First row for labels and checkboxes
    var row1 = document.createElement('tr');
    table.appendChild(row1);

    // Cell for "Help Create Prompts" label and checkbox
    var cell1 = document.createElement('td');
    cell1.style.whiteSpace = 'nowrap'; // Prevent word wrap
    row1.appendChild(cell1);

    var autoCreateModalLabel = document.createElement('label');
    autoCreateModalLabel.innerHTML = '<abbr title="Help Create Prompt">HCP</abbr> ';
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
    cell2.style.whiteSpace = 'nowrap'; // Prevent word wrap
    row1.appendChild(cell2);

    var autoLoadMoreLabel = document.createElement('label');
    autoLoadMoreLabel.innerHTML = '<abbr title="See All Images">SAI</abbr> ';
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
    cell3.style.whiteSpace = 'nowrap'; // Prevent word wrap
    row2.appendChild(cell3);

    var downloadAllButton = document.createElement('button');
    downloadAllButton.innerHTML = '<abbr title="Download All Images">DLI</abbr>';
    downloadAllButton.addEventListener('click', function() {
        if (autoLoadMoreEnabled) {
            downloadAllImages();
        } else {
            alert('Please make sure to enable "See All Images" before downloading.');
        }
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

    // Function to create and show the modal
    function createModal() {
        // Create the modal
        var modal = document.createElement('div');
        modal.id = 'promptModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
        modal.style.zIndex = '9998';

        // Create the iframe
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.feedough.com/stable-diffusion-prompt-generator/';
        iframe.style.width = '80%';
        iframe.style.height = '80%';
        iframe.style.position = 'absolute';
        iframe.style.top = '10%';
        iframe.style.left = '10%';

        modal.appendChild(iframe);
        document.body.appendChild(modal);

        // Close modal when clicked outside
        document.addEventListener('click', function(event) {
            var target = event.target;
            // Check if the click target is not inside the modal
            if (target !== modal && !modal.contains(target)) {
                // Close the modal
                modal.parentNode.removeChild(modal);
                // Uncheck the checkbox
                showModalCheckbox.checked = false;
            }
        });
    }
})();
