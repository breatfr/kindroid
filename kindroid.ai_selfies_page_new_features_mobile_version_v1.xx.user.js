// ==UserScript==
// @name        Kindroid - Selfies page new features mobile version v1.xx
// @description New features for Kindroid's selfies page
// @namespace   https://kindroid.ai/selfies
// @match       https://kindroid.ai/selfies
// @version     1.01
// @updateURL   https://raw.githubusercontent.com/breatfr/Kindroid/main/kindroid.ai_selfies_page_new_features_mobile_version_v1.xx.user.js
// @author      BreatFR
// @icon        data:image/webp;base64,UklGRgYFAABXRUJQVlA4TPkEAAAvL8ALEE0oaNtG0u6/c/kTPhIR/U+okqRvaa132g96W2vJwkgkKSsZFIr+0ZCkQBHCQCSZyX0EMAJQ20hSMzGR99B/W5TS/8Rfc4Q7fAClhA2A30qaBgAfLfXwxUGQbbP5Y393iIgJoFXrMjSU7P8fN9/shRIUsQlKcCTEYlD3Xjd+Cj7PUwEVUB1VcLx80z/rONxhYJdt2pr4CzgZdRF2EWwDAGyhd6Y+tx94RHYcwS2yy+wHrjD3rXcTQEf6/0VS9m/BV9DQ3d3dPXUL3TXeFHc5gbvnnrnE7raKTU83OrXNCb4XIPwV/osg2+xXQ8QV3OEGG7MpB3CIPZxsroBfgDO82Z7hrYJj29by5N73WdwHkOD0tE4HtdX0LCZGzxBcerc67vnlQZIkyZESmdUziBHIG///Bx/gxkNWLz3dTMUECAcYa4N41l+2V9U1SYxILyxa/Xp1FZbiVG5aVQ9qZMduMR9is44EtlkT261krGqeWFqB/XfsOimw947ldPpzgO2RPoww3s5mAmu18s9atqpaSw6D2LhGFzlVyBAz+3oKaxSxhf2kyB7v3sX18MlfBLiWOvns8vZju6uyTbPtuWaa6Ziw9b0Rv98AeMaRvkivi4Nmq7L1+vWIsSOmRCglL/nok8gACrsDTExKUwOAIrBQHaQfUEoc1f58m3LzaAM/YHobIOc+HgCffAAopErlGIFwToMCABBJWh56wa0OjK1D55QKXkSWdaBSfCMoKSJQTCgoAQEgRg5lN8eYMev/MSiwI/hDGiUE3RqAeA84sIaEAD9vBsiOtp8NTqaFr9WkFAUoxTQUuxpjAeKf/hICRMxAdHnqlE2DEVQqh0EObYI1mOAqsUKCmYDI3GMTV7JI2BQcCUp6uQfDxPlKLpxTMH1niDAOldZ8iBJSLIqE2O+Bh0dTaLvDzXM3CHDE/8sj20YTM9sQsQgbqrkYzHkzglzhBEdEEKGoqLbFexqVA4kAprJCvEodEgnuCgIQssUl7Vu2dPTSTCQ6vIPMFNIPO1xmAsA2KJbMloiIWdGHyTi/hfU73Ka/5yAiScQsYqjm2etn3cg1R00iDGIRYTyrwQcrjHD5HJiFSNgLMRGJTWdRN2VEFgaXACIwS2C5NENhR+JyEllwEUQZITobbrGIiCO+v0XbBosBEYHZCxoQeOe7SxQM4pFIWltmST9gQleJCAWTu2f/YxqP5AoR0W9mIOX0NmFwsWkGRGw4k9Iy1Mji4ArAIkQiKaK/yPK0lMVUiTBwtrD0iqFGAjf+kgAsSUD66XWxehOLjhASuXy2vr2lmXZrhAsAMZSaASB8SlROfY6/0mQq8115rYu6FF4Hh3v6vhSJt3NBDSBB5C4C0ESpR2RtLi2257tB3A3aqdMj2qUlskL6AfEG4nOKYgYDSG11c/V3LbkiCTLz1YKJq1GLQLJPSRA+xwwF8w2cnB7MeTp3PpozV5umSkxMVJBF1001MtoP9W1m5YveAP/5rSQVGj5YSAtYCmlMAAidK9Zn/5NHw/9Zsa1YnsQW5IEMs7XL7EMwJJ/O8xZA53xYL+MpleDEqBgAIcNmuvEkI2DPGXBdcdpknF4URwHwIgzglP9wSj0oPTidrxIoTkHOyDWd3Bh5s7Z208+t9eB9HdlKQcBZckqAB2fHTTyAfymplfSV7acjvZPWyizx3vuIkuzt6DffPWcrAA==
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
    uiContainer.style.left = '50%';
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
    autoLoadMoreLabel.innerText = 'SAI ';
    autoLoadMoreLabel.appendChild(autoLoadMoreCheckbox);

    var downloadAllButton = document.createElement('button');
    downloadAllButton.innerText = 'DLI';
    downloadAllButton.title = 'Please make sure to enable "See All Images" before downloading.'; // Add tooltip
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
