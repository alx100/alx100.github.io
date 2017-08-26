// function add(x, y) {
//     return x + y;
// };

let add = (x, y) => x + y;

// let square = function(x) {
//     return x * x;
// };

let square = x => x * x;
  
//  let giveMeAnswer = function() {
//      return 42;
//  } ;

let giveMeAnswer = () => 42;

// let log = function() {
//     console.log('Logging');
// };

let log = () => console.log('Logging');

// let multiply = function(x, y) {
//     let result = x * y;
//     return result;
// };

let multiply = (x, y) => {
    let result = x * y;
    return result;
};
 
// let getPerson = function() {
//     return { name: 'John'};
// };

let getPerson = () => ({ name: 'John'});

// (function(){
//     console.log('IIFE');
// })();

(() => console.log('IIFE'))();


// console.log(add(2, 5));
// console.log(square(3));
// console.log(giveMeAnswer());
// log();
// console.log(multiply(4, 6));
// console.log(getPerson());


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

// numbers.forEach(function(num) {
//     sum += num;
// });

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);

console.log(sum);
console.log(squared);

// let person = {
//     name: 'Bob',
//     greet: function() {
//         console.log('Hello, my name is ' + this.name);
//         console.log(this);
//     }
// };

// let person = {
//     name: 'Bob',
//     greet: function() {
//         var that = this;
//         window.setTimeout(function() {
//             console.log('Hello, my name is ' + this.name);
//             console.log('"this" is', this);
//             console.log('"that" is', that);
//             }, 2000);
//     }
// };

let person = {
    name: 'Bob',
    greet: function() {
        window.setTimeout(() => {
            console.log('Hello, my name is ' + this.name);
            console.log('"this" is', this);
            }, 2000);
    }
};

person.greet();