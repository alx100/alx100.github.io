'use strict';

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,

    // sayHello: function() {
    //     console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
    // }

    sayHello: function sayHello() {
        console.log('Hi my name is ' + this.firstName + ' ' + this.lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

// ES5 get&set

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

console.log(person);
// person.sayHello();

// function createCar(property, value) {
//     return {
//         [property]: value,
//         ['_' + property]: value,
//         [property.toUpperCase()]: value,
//         ['get' + property]() {
//             return this[property];
//         }
//     };
// }

// console.log(createCar('vin', 1));