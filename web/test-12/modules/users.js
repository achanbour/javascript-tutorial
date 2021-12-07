'use strict';

// Creates a container object which acts as a namespace
var users = {

    // Users count
    count: 0,

    // The array that contains all the users
    list: [],

    // Constructor in a closure
    CreateUser: function (name, age, country, email) {

        // Reference to the parent container
        self = this;

        // Constructor function called with this bound to the blank object created by this
        function User(name, age, country, email) {
            this.name = name;
            this.age = age;
            this.country = country;
            this.email = email;

            // The variables are still accessible from the closure lexical environment
            self.list.push(this);
            self.count++;
        }

        User.prototype.getName = function () {
            return this.name;
        };

        User.prototype.getAge = function () {
            return this.age;
        };

        User.prototype.getCountry = function () {
            return this.country;
        };

        User.prototype.getEmail = function () {
            return this.email;
        };

        return new User(name, age, country, email); // Return the newly created object
    },

    getCount: function () {
        return this.count;
    },

    getList: function () {
        return this.list;
    },
};


// Export the container object as default (one export per module)
// export { users as default };

// This line is equivalent (notice the lack of curly braces) to the previous line:
export default users;
