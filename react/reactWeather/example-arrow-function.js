// var names = ['Alex', 'Tanya', 'Max'];

// // ES5
// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// // ES6
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Sasha'));

// var person = {
//     name: 'Andrew',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         })
//     }
// };

// person.greet();


function add (a, b) {
    return a + b;
}

// console.log(add(1, 3));
// console.log(add(9, 0));

let addStatement = (a, b) => {
    return a + b;
};

let addExpression = (a, b) => a + b;

console.log(addStatement(4, 7));
console.log(addExpression(5, 4));

