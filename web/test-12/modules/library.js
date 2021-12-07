'use strict';

// Creates a container object for the library
var myLibrary = {};

// The module pattern closes over local variables and puts methods directly into the container object
(function () {

    // This variable will remain private since it is closed by the anonymous function
    var secretId = 40;

    // Methods have access to the lexical environment in outer scope created by the closure
    this.incrementSecretId = function () {
        secretId++;
    };

    this.getSecretId = function () {
        return secretId;
    };

}).call(myLibrary); // Call the closure with the container object bound to the this context


// Export the module pattern container object
export { myLibrary };
