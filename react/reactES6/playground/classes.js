class Person {
    constructor (name = 'Anonym', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting () {
        return `Hi! I'm ${this.name}.`;
    }

    toString() {
        return JSON.stringify(this);
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Child extends Person {
    constructor (name, age, like) {
        super(name, age);
        this.like = like;
    }
    getGreeting () {
        return `Hiiiii! My name is ${this.name} and i like ${this.like}.`;
    }

}

class Baby extends Person {
    getGreeting() {
        return `Waaaaah`;
    }
}


var me = new Person('Alex', 36);

console.log({age: 25}.toString());
console.log(me.getGreeting());

var i = new Child('Max', 3, 'Cars');

console.log(i.getGreeting());

var baby = new Baby();
console.log(baby.getGreeting());