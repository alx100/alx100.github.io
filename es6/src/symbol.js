// let symbol = Symbol('name');
// let symbol2 = Symbol('name');
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol === symbol2);

// use Symbol.for

let symbol = Symbol.for('name');
// let symbol2 = Symbol.for('name');
let name = Symbol.keyFor(symbol);
// console.log(symbol === symbol2);
console.log(name);

let user = {
    username: 'r2d2',
    [Symbol.for('password')]: 'c3po'
};

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

let password = user[Symbol.for('password')];
console.log(password);

console.log(Object.getOwnPropertySymbols(user));