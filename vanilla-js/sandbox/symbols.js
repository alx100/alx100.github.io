// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

console.log(Symbol('123') === Symbol('123')); // false

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj);

// Symbols are not enumerable in 'for...in'
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.sringify
console.log(JSON.stringify(myObj));