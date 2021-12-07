'use strict';

// Get the viewport width and height
const width = window.innerWidth;
const height = window.innerHeight;

// Get the canvas element and the drawing context
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Clear the canvas black
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

canvas.width = width;
canvas.height = height;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Shape(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = true;
}

function Ball(x, y, velX, velY, color, size) {
    Shape.call(this, x, y, velX, velY);
    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;
Ball.__proto__ = Shape;

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
};

Ball.prototype.update = function () {
    // Update the velocity
    this.x += this.velX;
    this.y += this.velY;

    // Prevent the ball from exiting the canvas area
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }
};

Ball.prototype.hasCollision = function (otherBall) {
    // Get the distance between the two balls
    const dx = this.x - otherBall.x;
    const dy = this.y - otherBall.y;

    // Compute the distance using Pythagorean distance formula
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the distance is less than the combined size of the two ball then there is a collision
    return distance < this.size + otherBall.size;
};

// Swap velocity in case of collision with an other ball
Ball.prototype.swapVelocity = function (otherBall) {
    let tmp;

    tmp = this.velX;
    this.velX = otherBall.velX;
    otherBall.velX = tmp;

    tmp = this.velY;
    this.velY = otherBall.velY;
    otherBall.velY = tmp;
};


// Array of balls
let balls = [];

// Fill the array of balls
while (balls.length < 50) {
    let size = random(10, 30);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size,
    );

    balls.push(ball);
}

function animateLoop() {
    // Clear the canvas on each new frame with little transparency
    ctx.fillStyle = 'rgba(0,0,0,.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {

        // Check for collisions with every other ball
        for (let j = 0; j < balls.length; j++) {
            // Change the color if there is a collision
            if (i !== j && balls[i].hasCollision(balls[j])) {
                // Swap velocity with the colliding ball
                balls[i].swapVelocity(balls[j]);
            }
        }

        // Draw the ball and update its position and velocity
        balls[i].draw();
        balls[i].update();
    }

    // Callback loop
    requestAnimationFrame(animateLoop);
}

// Staaaaart!
animateLoop();
