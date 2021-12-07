'use strict';


// Constructor function:

// 1. The reference Animal.prototype points to the default prototype Function.prototype
// 2. The reference Animal.__proto__ points to the default prototype Function.prototype

function Animal(name, age) {
    this.count = 1;
    this.name = name;
    this.age = age;
}

// Object methods added to Animal.prototype will be inherited for instances of Animal
Animal.prototype.getName = function () {
    return this.name;
};

Animal.prototype.getAge = function () {
    return this.age;
};

// Static methods are added directly to the constructor object Animal
Animal.sayHello = function () {
    console.log('Hello');
};

Animal.sayGoodbye = function () {
    console.log('Goodbye');
};


// Calling the static method sayHello()
Animal.sayHello();


// Constructor invokation:

// 1. The new keyword creates an empty object and its __proto__ points to Animal.prototype
// 2. The this keyword inside the constructor points to the newly created object
// 3. The constructor eventually returns the newly created object

let animal = new Animal('Mia', 12);

// The reference animal.__proto__ points to Animal.prototype which contains getName() and getAge()
console.log(animal.getName());
console.log(animal.getAge());


// Constructor inheritance: properties and/or methods defined in Animal are inherited

// 1. Creates a new constructor function Dog() and Dog.prototype points to Function.prototype
// 2. The constructor Animal is called in the context of this to inherits properties and/or methods

function Dog(name, age, breed, color) {
    Animal.call(this, name, age); // Equivalent to super(name, age)
    this.breed = breed;
    this.color = color;
}


// Prototype delegation: Dog.prototype.__proto__ references Animal.prototype

// 1. Dog.prototype contains a new blank object and its __proto__ points to Animal.prototype
// 2. The constructor property in Dog.prototype is created and points to the constructor Dog
// 3. Dog.__proto__ points to the parent constructor Animal to emulate the behavior of extends

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.__proto__ = Animal;


// Object methods added to Dog.prototype will be inherited for instances of Dog
Dog.prototype.getBreed = function () {
    return this.breed;
};

Dog.prototype.getColor = function () {
    return this.color;
};


// Creates a new object dog and dog.__proto__ points to Dog.prototype
let dog = new Dog('Teddy', 2, 'Labrador', 'black');


// Prototype chain:

// 1. The reference dog.__proto__ points to Dog.prototype
// 2. The reference Dog.prototype.__proto__ points to Animal.prototype
// 3. The object Animal.prototype contains both getName() and getAge()

console.log(dog.getName());
console.log(dog.getAge());

// The reference dog.__proto__ points to Dog.prototype which contains getBreed() and getColor()
console.log(dog.getBreed());
console.log(dog.getColor());

// Dog.__proto__ points to the parent constructor Animal and inherits the static methods of Animal
Dog.sayGoodbye();
