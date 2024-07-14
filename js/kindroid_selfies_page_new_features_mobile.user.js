// ==UserScript==
// @name        Kindroid - Selfies page new features mobile
// @description New features for Kindroid's selfies page
// @namespace   https://gitlab.com/breatfr
// @match       https://kindroid.ai/selfies
// @version     1.07.1
// @homepageURL https://gitlab.com/breatfr/Kindroid
// @downloadURL https://gitlab.com/breatfr/Kindroid/-/raw/main/js/kindroid_selfies_page_new_features_mobile.user.js
// @updateURL   https://gitlab.com/breatfr/Kindroid/-/raw/main/js/kindroid_selfies_page_new_features_mobile.user.js
// @author      BreatFR
// @copyright   2023, BreatFR (https://breat.fr)
// @grant       none
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAkTSURBVGhD1ZoJVFTXGccf68wwMCOgsVZiTKunbaqeuvZoLJqouBxzFBOs0ZhoUokYUxUEBmaBQWUxRpMYd9kEBUVlUxBBVqNgLSQ1FdwRwRUFJVHrwr/ffTODIz7FNzYV3jn/84Z3733v+8397vfdbx7c0w43NzdZ586d3+/UqVO0q6vrYTrXKZXKn+h8n4RfUPfoObdcXFyqSfnOzs5fd+nSZazRrLaPbt26daaBX9KNLra68ctUM4GcJPmTibYGSwUO6jCcxMiFbvJSRXbxos+HSK8ZTX50UOMwarhj7NRuZbTvLLn1r42mc5xCoXChi3Xt3XiTmJ2kAjLdigegi6s6ivEmMXtpFj7gunbtKqc/6oU6tWcZZ6GQM4ZKwU4dQJeY+8S0uthhRPmiiSM/KhVq7CC6y2agrtXFp4r5ndTBBjYSDrYkdmayJlnZc5DKJXyfp421c5CCs7ch2ZnJ3iA7O9jIZHAWGPsMPeCM2wOhxickd5JhZP9ZmDk6EjPe0mLmW2rMeluFj9/2x/yxwRjRZwxkjtInxjHjraX2GNdnMCLfmQn9uPewdJwnwsdPQtSEiVg+YQJWTpqEgJEj4aRQQNlq/DPUzGbgOfc2Stg7WCNwWg4y9UBq8G3sUd9EjuYaCrQXcSyyEQETQ/mZMB/n3MkZtg4S/MHtdVRr44Avd6F5eQLwRTSwYh3pG+Crr4DVq/HRkCHU1+Gx8W2IBxBqEJASEnKfv0/ZhW2qe9jiexFJfuexc/EppPsfx0FdNT4fq+LdyXyco8KJZsUBGd6RaIzYjbrQaFzTr0ejfjV+DluJ+0uigFWrEObhwbuR+djnkUUAWwPvI54AthFAyuLTSPOvRInuvCAAZ28F9fhP0BCZjWpdAgHE4GroBjTov0WTfiWw8ltkzZpNLiaFk1L52NjnkWiAz1sALhFADXYsPoPUxVUo5gGCWgCY33MSa4zu8ybOh+3D2ZAUAkhEbYgB4AYBIGotzgRo8StXF0jkcrELmJcFALuRGPgAcb6XsdXvAnb4mQBqaCE/ApDKZejepRtK/JJxTp+Nk9rtOMcDxOJK6EY0LV2P20u/gXvv34GTUvSitfLkM9uWeADPVAJ4iNhFl5FIANv9zmL34hMo0l1oAVAoFbCR2mLNjEhULy3Bj5pUAthBAFtxISQOV/WbaBHHY4H7GPJ7G4uNZxINMH9KKhJ4gCtI9K0lgHPYRQCFulo+lDIAjiLRbPeZOLX0CL5X7yWANJzQpuCsbhtqCODB8mTETPMmF7MjWPF+by7xAJ5pBNCMGAJIIIBkHuAkAdQRgBq0uUX/3w7AEfV3KNcUoEKd1QJwhmagMTwFpQsi6FtXQubkKPAccRIN8BkB
// @license     AGPL-3.0-or-later; https://www.gnu.org/licenses/agpl-3.0.txt
// ==/UserScript==

(function() {
    'use strict';

    // Import JSZip library
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    document.head.appendChild(script);

    let includePromptsInDownload = getCookie('includePromptsInDownload') === 'true';

    if (window.location.href.includes("/selfies")) {
        // User interface
        var uiContainer = document.createElement('div');
        uiContainer.style.position = 'fixed';
        uiContainer.style.left = '10%';
        uiContainer.style.color = '#cbcbcb';
        uiContainer.style.zIndex = '9999';

        // Create table for layout
        var table = document.createElement('table');
        table.style.borderCollapse = 'collapse'; // Collapse border spacing
        table.style.width = '100%'; // Set table width

        // First row for labels and checkboxes
        var row1 = document.createElement('tr');
        table.appendChild(row1);

        const cellBorderStyle = 'solid 3px #fff0f0';

        // Cell for "Help Create Prompts" label and checkbox
        var cell1 = document.createElement('td');
        cell1.style.borderRight = cellBorderStyle;
        row1.appendChild(cell1);

        var autoCreateModalLabel = document.createElement('label');
        autoCreateModalLabel.innerHTML = '<abbr title="Help Create Prompts">HCP </abbr>';
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

        const paddingLeft = '5px';

        // Cell for "See All Images" label and checkbox
        var cell2 = document.createElement('td');
        cell2.style.borderLeft = cellBorderStyle;
        cell2.style.paddingLeft = paddingLeft;
        row1.appendChild(cell2);

        var autoLoadMoreLabel = document.createElement('label');
        autoLoadMoreLabel.innerHTML = '<abbr title="See All Images">SAI </abbr>';
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

        // Include prompts label and checkbox
        const includePromptsLabel = document.createElement('label');
        includePromptsLabel.innerText = 'Include Prompts ';
        includePromptsLabel.style.marginRight = '15px'; // Add some margin to separate from checkbox
        includePromptsInDownload = getCookie('includePromptsInDownload') === 'true';
        const includePromptsCheckbox = document.createElement('input');
        includePromptsCheckbox.type = 'checkbox';
        includePromptsCheckbox.checked = includePromptsInDownload;
        includePromptsCheckbox.addEventListener('change', function () {
            includePromptsInDownload = includePromptsCheckbox.checked;
            // Set cookie to remember user choice
            setCookie('includePromptsInDownload', includePromptsInDownload, 30);
        });

        autoLoadMoreLabel.appendChild(autoLoadMoreCheckbox);
        cell2.appendChild(autoLoadMoreLabel);

        // Second row for empty space and "Download All Images" button
        var row2 = document.createElement('tr');
        table.appendChild(row2);
        
        const includePromptsCell = document.createElement('td');
        includePromptsCell.style.borderRight = cellBorderStyle;
        includePromptsLabel.appendChild(includePromptsCheckbox);
        includePromptsCell.appendChild(includePromptsLabel);
        row2.appendChild(includePromptsCell);

        // Cell for "Download All Images" button
        var cell3 = document.createElement('td');
        cell3.style.borderLeft = cellBorderStyle;
        cell3.style.paddingLeft = paddingLeft;
        row2.appendChild(cell3);

        var downloadAllButton = document.createElement('button');
        downloadAllButton.innerHTML = '<abbr title="Download All Images">DAI</abbr>';
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
    } else {
        // Masquer l'interface de la page chat
    }

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
        var loadMoreButton = document.querySelector('button.chakra-button.css-1m67823');
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
        const images = document.querySelectorAll('.css-3vu8ng img.css-1regj17');
        console.log('Found Images:', images);
        if (images.length === 0) {
            alert('No images found.');
            return;
        }

        const zip = new JSZip();
        let count = 0;
        const totalImages = images.length;
        downloadStatus.innerText = ' Downloading... (0/' + totalImages + ')';
        images.forEach(function(image, index) {
            fetch(image.src)
                .then(response => response.blob())
                .then(blob => {
                    const filename = ('0000' + (totalImages - index)).slice(-4); // Reverse numbering
                    zip.file(`${filename}.jpg`, blob);
                    if (includePromptsInDownload) {
                        const prompt = image.alt;
                        const promptFile = new Blob([prompt], { type: 'text/plain' });
                        zip.file(`${filename}.txt`, promptFile);
                    }

                    ++count;
                    downloadStatus.innerText = ' Downloading... (' + count + '/' + totalImages + ')';
                    if (count === totalImages) {
                        zip.generateAsync({ type: 'blob' })
                            .then(content => {
                                // Trigger file download
                                const a = document.createElement('a');
                                a.href = URL.createObjectURL(content);
                                a.download = 'Kindroid.zip';
                                a.click();
                                downloadStatus.innerText = '';
                                // Show the "Load More" button again after download is complete
                                const loadMoreButton = document.querySelector('button.chakra-button.css-1q03dzc');
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
        modal.style.top = '20%';
        modal.style.width = '100%';
        modal.style.height = 'auto';
        modal.style.zIndex = '9998';

        // Create the legend
        var legend = document.createElement('div');
        legend.innerText = 'If the content is blocked, click the link to open it in new tab:';
        legend.style.marginRight = '5px';
        legend.style.color = '#cbcbcb';
        legend.style.background = '#161616';

        // Create the link with the site name
        var link = document.createElement('a');
        link.href = 'https://www.feedough.com/stable-diffusion-prompt-generator/';
        link.target = '_blank';
        link.innerText = 'Feedough Prompt Generator';
        link.style.background = 'linear-gradient(88.55deg, rgb(139, 109, 255) 22.43%, rgb(254, 132, 132) 92.28%)';
        link.style.background = '-moz-linear-gradient(88.55deg, rgb(139, 109, 255) 22.43%, rgb(254, 132, 132) 92.28%)';
        link.style.backgroundClip = 'text';
        link.style.textAlign = 'center';
        link.style.color = 'transparent';

        // Create a container to hold the legend and the link on the same line
        var container = document.createElement('div');
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.position = 'absolute';
        container.style.left = '5%';
        container.style.right = '5%';
        container.style.top = '5%';
        container.style.background = '#161616';
        container.style.padding = '5px';
        container.style.borderRadius = '10px';
        container.style.border = '1px solid #cbcbcb';

        // Add the link and legend to the container
        container.appendChild(legend);
        container.appendChild(link);

        modal.appendChild(container);

        document.body.appendChild(modal);

        // Close modal when clicked outside
        document.addEventListener('click', function(event) {
            var target = event.target;
            // Check if the click target is not inside the modal
            if (target !== modal && !modal.contains(target) && target !== showModalCheckbox && !showModalCheckbox.contains(target)) {
                // Close the modal
                modal.parentNode.removeChild(modal);
                // Uncheck the checkbox
                showModalCheckbox.checked = false;
            }
        });
    }

    // Function to format date
    function formatDate(dateString) {
        // Parse the date
        let date = new Date(dateString);

        // Get the browser's language
        let language = navigator.language;

        // Format the date
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(language, options);
    }

    // Function to format dates in modal
    function formatModalDates() {
        // Get all date elements
        let dateElements = document.querySelectorAll('.chakra-text.css-151uqsi');

        // Loop over each date element
        dateElements.forEach(function(element) {
            // Get the current date string
            let dateString = element.textContent;

            // Format the date
            let formattedDate = formatDate(dateString);

            // Update the element with the new date
            element.textContent = formattedDate;
        });
    }

    // Create a mutation observer to watch for changes in the DOM
    let observer = new MutationObserver(function(mutations) {
        // For each mutation
        mutations.forEach(function(mutation) {
            // If the mutation added nodes
            if (mutation.addedNodes.length) {
                // Format the dates in the modal
                formatModalDates();
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
})();
