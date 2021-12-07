'use strict';

// Classic import for variables or functions
import { myClosure } from './modules/closure.js';
import { myLibrary } from './modules/library.js';
// Import everything from the module greetings.js contained into the greetings object
import * as greetings from './modules/greetings.js';
// Import the default export (under any name) from the module users.js (notice the lack of curly braces)
import users from './modules/users.js';
// Import the default export (under any name) from the module class.js (notice the lack of curly braces)
import MyClass from './modules/class.js';


// The method is returned inside a literal object and have access to the closure lexical environment
myClosure.incrementSecretId();
myClosure.incrementSecretId();

// Get the encapsulated variable closed by the closure function
console.log(myClosure.getSecretId());

// The method is directly defined on the object bound to the this context
myLibrary.incrementSecretId();
myLibrary.incrementSecretId();

// Get the encapsulated variable closed by the closure function
console.log(myLibrary.getSecretId());


// Creates users
users.CreateUser('Edwy', 23, 'France', 'edwy@example.com');
users.CreateUser('Anastasia', 19, 'England', 'anastasia@example.com');
users.CreateUser('Rick', 99, 'United States', 'rick@example.com');

console.log(`Users count: ${users.getCount()}`);

// Iterates over each value of the list
for (let user of users.getList()) {
    greetings.sayHello(user.getName());

    // Iterates over each property of the object
    for (let prop in user) {
        if (user.hasOwnProperty(prop)) {
            console.log(`${prop}: ${user[prop]}`);
        }
    }
}


// The class MyClass can be imported under any name
let myInstance = new MyClass('This is just a stupid class...');
myInstance.printMessage();
