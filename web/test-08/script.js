'use strict';

var redSquare = {
    elem: document.getElementById('red-square'),
    xPos: 0,
    yPos: 0,
    speed: 10,
    direction: 'ltr',
};

var blueSquare = {
    elem: document.getElementById('blue-square'),
    xPos: 0,
    yPos: 0,
    speed: 5,
    direction: 'ltr',
};

function moveShape(shape) {
    if (shape.xPos <= 500 && shape.direction === 'ltr') {
        shape.xPos += shape.speed;
    } else {
        shape.direction = 'rtl';
    }

    if (shape.xPos >= 0 && shape.direction === 'rtl') {
        shape.xPos -= shape.speed;
    } else {
        shape.direction = 'ltr';
    }

    // Update the position
    shape.elem.style.transform = 'translateX(' + shape.xPos + 'px)';
}

function animateShape(shape) {
    // Move the shape
    moveShape(shape);

    // Invoke the callback before the next repaint
    window.requestAnimationFrame(() => animateShape(shape));
}

// Animate
window.requestAnimationFrame(() => animateShape(redSquare));

// Get the time from the range input
var timeInput = document.getElementById('time-input');
var timeValue = document.getElementById('time-value');

var timer = window.setInterval(() => moveShape(blueSquare), timeInput.value);

timeInput.onchange = function () {
    // Update the time value
    timeValue.textContent = 'Delta time: ' + timeInput.value + 'ms';

    // Clear the callback queue and set a new interval based on the time
    window.clearInterval(timer);
    timer = window.setInterval(() => moveShape(blueSquare), timeInput.value);
};
