'use strict';

// Animal is the concrete object for behavioral delegation with OLOO (Objects Linked to Other Objects)
let Animal = {
    // The initialization function (equivalent to the constructor)
    init: function (name, age) {
        this.count = 1;
        this.name = name;
        this.age = age;
    },

    // Methods added directly to the concrete object will be delegated
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    },

    // Static methods are not truly static since they are delegated to derived objects as well
    sayHello: function () {
        console.log('Hello');
    },
    sayGoodbye: function () {
        console.log('Goodbye');
    },
};


// Misleading: not a static method
Animal.sayHello();

let animal = Object.create(Animal); // Creates a new derived object from the concrete object
animal.init('Mia', 12); // Initializes properties

// Prototype delegation to the Animal concrete object
console.log(animal.getName());
console.log(animal.getAge());


// Dog is the inherited concrete object and delegates to Animal
let Dog = Object.create(Animal);

// Defines the initialization function (equivalent to the constructor)
Dog.init = function (name, age, breed, color) {
    Animal.init.call(this, name, age); // Equivalent to super(name, age)
    this.breed = breed;
    this.color = color;
};

// Methods are added directly to the inherited concrete object
Dog.getBreed = function () {
    return this.breed;
};

Dog.getColor = function () {
    return this.color;
};


let dog = Object.create(Dog); // Creates a new derived object from the inherited concrete object
dog.init('Teddy', 2, 'Labrador', 'black'); // Initializes properties

// Prototype delegation to Dog which also delegates to Animal
console.log(dog.getName());
console.log(dog.getAge());

// Prototype delegation to Dog
console.log(dog.getBreed());
console.log(dog.getColor());

// Prototype delegation to Animal and not a static method since you can also write dog.sayGoodbye()
Dog.sayGoodbye();
