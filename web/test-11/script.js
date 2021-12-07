'use strict';

const URI = 'http://jsonplaceholder.typicode.com/todos/1';

function testPromise() {
    const isResolved = false;

    return new Promise(function (resolve, reject) {
            // Put async stuff here...

            // Check if the promise has been resolved or rejected
            if (isResolved) {
                resolve('Promise has been resolved!'); // Pass the resolve value
            } else {
                reject('Promise has been rejected!'); // Pass the reject reason
            }
        },
    );
}

// The callbacks for .then() and .catch() will be added to the microtask queue and executed later
testPromise().then(function (value) {
                 // The .then() callback is invoked if the promise is resolved
                 console.log(value);
                 // The .then() callback wraps the returned value inside a resolved promise
                 return true;
             })
             .catch(function (reason) {
                 // The .catch() callback is invoked if the promise is rejected
                 console.log(reason);
             });

// Synchronous code here
console.log('I come before the promise message!');


function loadJson(url) {
    return fetch(url).then(function (response) {
        if (response.status === 200) {

            // Returning a value inside the .then() callback:

            // 1. Here response.json() returns a promise (resolved or rejected)
            // 2. The .then() callback wraps the return value with return Promise.resolve(response.json())
            // 3. And if the argument to Promise.resolve() is a promise itself then it is simply returned

            return response.json();
        } else {

            // Throwing an error inside the .then() callback:

            // 1. The throw statement is translated to return Promise.reject(response.status.toString())
            // 2. The rejected promise is returned with the thrown error as the Promise.reject() argument
            // 3. The expression is thus equivalent to return Promise.reject(response.json().toString())

            throw new Error(response.status.toString());
        }

        // No return statement means that a resolved promise with the value undefined will be returned
    });
}

loadJson(URI).then(function (response) {
                 console.log(response);
             })
             .catch(function (error) {
                 console.warn(error.toString());
             });


// Example using async/await
async function loadJsonAsync(url) {

    // The await keyword waits for the promise to be resolved:

    // 1. If the promise is resolved then it replaces .then() and returns the resolved value
    // 2. If the promise is rejected then it throws an error with the reject reason as the error message
    // 3. And throwing an error inside an async function is equivalent to returning a rejected promise

    let response = await fetch(url);

    // The code after the await expression can be thought of as existing in a .then() callback

    if (response.status === 200) {
        return response.json(); // Returns a promise (resolved or rejected)
    } else {
        throw new Error(response.status.toString()); // Returns a rejected promise
    }

    // No return statement means that a resolved promise with the value undefined will be returned
}

loadJsonAsync(URI).then(function (response) {
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.warn(error.toString());
                  });


// Example using async/await enclosed in a try/.catch block
async function tryLoadJsonAsync(url) {
    try {
        // If an error is thrown it will be immediately caught in the .catch block
        let response = await fetch(url);

        // The code after the await expression can be thought of as existing in a .then() callback

        if (response.status === 200) {
            return await response.json(); // Returns a promise *always* resolved
        } else {
            throw new Error(response.status.toString()); // The thrown error will be immediately caught
        }

    } catch (error) {
        // The .catch statement is equivalent to the .catch() callback invoked on the returned promise
        console.warn(error.toString());
    }

    // No return statement means that a resolved promise with the value undefined will be returned
}

// The promise is *implicitly* resolved with the value undefined so there is no need for a .catch() callback
tryLoadJsonAsync('invalid-url.xxx').then();


// Implementation of a two seconds sleep using async/await
async function waitTwoSecond() {

    // Synchronous code here
    console.log('Taking a break...');

    // Waits for the promise to be resolved
    await new Promise(function (resolve, reject) {
        // The Promise.resolve() method will be called in two seconds
        setTimeout(resolve, 2000);
    });

    // The code after the await expression can be thought of as existing in a .then() callback
    console.log('Two seconds later...');

    // No return statement means that a resolved promise with the value undefined will be returned
}

// The promise is *implicitly* resolved with the value undefined so there is no need for a .catch() callback
waitTwoSecond().then();
