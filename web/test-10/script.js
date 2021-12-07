'use strict';

// Define our custom BadError constructor inherited from Error
function BadError(message) {
    // The Error constructor does not manipulate this but returns the message argument
    this.message = Error.call(null, message);
    this.name = 'BadError';
}

// Prototype inheritance
BadError.prototype = Object.create(Error.prototype);
BadError.prototype.constructor = BadError;
BadError.__proto__ = Error;


function badFunction() {
    // Some code...

    // The throw statement will short-circuit here and return
    throw new BadError('I am a thrown error!');

    // Everything that follows will never be executed...
    console.log('I will never be executed...');
}

function goodFunction() {
    // Some other code...

    // The execution stops here because an error has been thrown
    badFunction();

    // This return statement will never be evaluated...
    return 42;
}

try {
    let goodValue = goodFunction(); // The thrown error short-circuit the code execution here

    // Everything that follows will never be executed...
    console.log(goodValue);

} catch (error) {
    console.warn(error.message); // The thrown error is caught here
}
