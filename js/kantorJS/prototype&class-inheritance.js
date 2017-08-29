// 1.Prototype inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  eat() {
    alert(`${this.name} eats`);
  }
}



function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  bark() {
    alert('Gav, gav, gav!');
  }
}

Dog.prototype.__proto__ = Animal.prototype;

let dog = new Dog('Tuzik');


dog.bark();
dog.eat();


//2. ES6 class inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    alert(`${this.name} eats`);
  }
};

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  // if no constructor = constructor(...args) { super(...args) }

  bark() {
    alert(`Gav, gav, gav! ${this.age}`);
  }

  eatBark() {
    this.bark();
    super.eat(); //вызов метода родителя через super
  }
};