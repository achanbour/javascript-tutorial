'use strict';

// Select the videoBox
let videoBox = document.querySelector('.video-box');

// Select showButton and hideMessage elements
let showButton = document.getElementById('show-btn');
let hideMessage = document.getElementById('hide-msg');

// Show the videoBox if the button is clicked
showButton.addEventListener('click', function () {
    videoBox.setAttribute('class', 'video-box');

    // Hide the showButton and show the hideMessage
    showButton.setAttribute('class', 'hidden');
    hideMessage.setAttribute('class', 'text');
});

// Hide the videoBox if the videoBox is clicked
videoBox.addEventListener('click', function () {
    videoBox.setAttribute('class', 'hidden');

    // Show the showButton and hide the hideMessage
    showButton.setAttribute('class', 'btn');
    hideMessage.setAttribute('class', 'hidden');
});

// Select the video element
let video = document.querySelector('video');
let playMessage = document.getElementById('play-msg');

// Play and pause the video if the video element is clicked
video.addEventListener('click', function (event) {
    if (video.paused) {
        // Retrieve play promise
        let playPromise = video.play();

        // Using the fat arrow function syntax
        if (playPromise !== undefined) {
            playPromise.then((value) => {
                           playMessage.setAttribute('class', 'text');
                       })
                       .catch((error) => {
                           // Playback error
                           console.log(error.message);
                       });
        }
    } else {
        video.pause();
        playMessage.setAttribute('class', 'hidden');
    }

    // Prevent event bubbling from triggering click event for the parent videoBox
    event.stopPropagation();
});
