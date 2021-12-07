'use strict';

// The anonymous function closes over the variables defined locally in the lexical environment
var myClosure = (function () {

    // This variable will remain private since it is closed by the anonymous function
    var secretId = 40;

    return {
        // The returned method has still access to the lexical environment in outer scope created by the closure
        incrementSecretId: function () {
            secretId++;
        },

        getSecretId: function () {
            return secretId;
        },
    };
})();


// Export the closured object
export { myClosure };
