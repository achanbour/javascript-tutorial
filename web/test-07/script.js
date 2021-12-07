'use strict';

// Creates a new mixin
let sayHelloMixin = {
    sayHello: function () {
        console.log(`Hello ${this.getName()}`);
    },
    sayGoodbye: function () {
        console.log(`Goodbye ${this.getName()}`);
    },
};


// Creates a new constructor function
function User(name, age, country, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}


// Mixin usage:

// 1. Copies properties from sayHelloMixin to User.prototype
// 2. Methods are NOT copied since they are objects and thus passed by reference
// 3. You have to set the reference to the constructor explicitly

User.prototype = Object.assign(sayHelloMixin);
User.prototype.constructor = User;

// Set additional methods on User.prototype
User.prototype.getName = (() => this.name);
User.prototype.getAge = (() => this.age);
User.prototype.getEmail = (() => this.email);

// Creates a new user
let user = new User('Anastasia', 20, 'anastasia@example.com');

// The created user has access to the mixin methods
user.sayHello();
user.sayGoodbye();
