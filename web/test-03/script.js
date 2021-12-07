'use strict';

class Animal {

    count = 1; // Public field: equivalent to this.count = 1

    constructor(name, age) {
        // Properties and/or methods defined directly on the object
        this.name = name;
        this.age = age;
    }

    // Methods defined directly on the Animal constructor object
    static sayHello() {
        console.log('Hello');
    }

    static sayGoodbye() {
        console.log('Goodbye');
    }

    // Methods defined on Animal.prototype
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

// Calling the static method sayHello()
Animal.sayHello();

// Creates a new instance of Animal
let animal = new Animal('Mia', 12);

// Calls the object prototype methods
console.log(animal.getName());
console.log(animal.getAge());


class Dog extends Animal {
    constructor(name, age, breed, color) {
        super(name, age); // Call the parent constructor
        this.breed = breed;
        this.color = color;
    }

    getBreed() {
        return this.breed;
    }

    getColor() {
        return this.color;
    }
}

// Creates a new instance of Dog
let dog = new Dog('Teddy', 2, 'Labrador', 'black');

// Calling the inherited methods
console.log(dog.getName());
console.log(dog.getAge());

// Calling the object prototype methods
console.log(dog.getBreed());
console.log(dog.getColor());

// The static methods are also inherited
Dog.sayGoodbye();
