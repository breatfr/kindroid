// ==UserScript==
// @name        Kindroid - Selfies page new features v1.xx
// @description New features for Kindroid's selfies page
// @namespace   https://kindroid.ai/selfies
// @match       https://kindroid.ai/selfies
// @version     1.01
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
