'use strict';

// Select elements for the gallery
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

// Loop through images
for (let i = 0; i < 5; i++) {
    // Creates new img element
    const newImage = document.createElement('img');

    // Set the src attribute for the new img
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');

    // Register some event code for the click event to update the src of the displayed img
    newImage.addEventListener('click', function () {
        displayedImage.setAttribute('src', 'images/pic' + i + '.jpg');
    });

    // Append the img to the thumbBar
    thumbBar.appendChild(newImage);
}

// Select elements for the darken/lighten effect
const btn = document.querySelector('.btn-dark');
const overlay = document.querySelector('.overlay');

// Wire up the darken/lighten button using event register code
btn.onclick = function () {
    // Check if the button is set to dark
    if (btn.className === 'btn-dark') {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, .6)';

        // Change to lighten
        btn.setAttribute('class', 'btn-light');
        btn.textContent = 'Lighten';
    } else {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';

        // Change to darken
        btn.setAttribute('class', 'btn-dark');
        btn.textContent = 'Darken';
    }
};

// Current picture index
let currentIndex = 0;

// Slideshow callback function
function startSlideshow() {
    // Each index is an equivalence class of the quotient set of Z/5Z
    let index = currentIndex % 5;
    displayedImage.setAttribute('src', 'images/pic' + index + '.jpg');

    // Prevent the current index from exceeding the maximum value
    if (currentIndex === Number.MAX_SAFE_INTEGER) {
        currentIndex = index;
    }
    currentIndex++;

    // Call the startSlideshow() function again asynchronously in two seconds
    setTimeout(startSlideshow, 2000);
}

// Start the slideshow
startSlideshow();
