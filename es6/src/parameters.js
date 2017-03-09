// function greet(greeting, name) {
//     console.log(`${greeting} ${name}`);
// }

// function greet(greeting, name) {
//     if (greeting !==undefined && name !==undefined) {
//         console.log(`${greeting} ${name}`);
//     } else if (greeting === undefined && name !== undefined) {
//         console.log(`Hello ${name}`);
//     } else if (greeting !== undefined && name === undefined) {
//         console.log(`${greeting} friend`);
//     } else {
//         console.log(`Hello friend`);
//     }
// }

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}



greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet(); 

// ES5
// function sum() {
//     console.log(arguments instanceof Array);

//     var sum = 0;

//     Array.prototype.forEach.call(arguments, function(value) {
//         sum += value;
//     });

//     console.log(sum);
// }

// ES6
// var.1 use .forEach

function sum(...values) {
    console.log(values instanceof Array);

    let sum = 0;

    values.forEach(function(value) {
       sum += value; 
    });

    console.log(sum);
}

// ES6
// var.2 use .reduce

function sum(...values) {
   console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}




sum(5, 7, 2, 10);