// Pure function
function add (a, b) {
    return a + b;
}
//

// Not pure function
var a = 3;
function add (b) {
    return a + b;
}

var result;
function add (a, b) {
    result =  a + b;
    return result;
}

function add (a, b) {
    return a + b + new Date().getSeconds();
}
//

function changeProp(obj) {
    return {
        ...obj,
        name: 'Jen'
    };
    // obj.name = 'Jen';
    // return obj;
}

var startingValue = {
    name: 'Alex',
    age: 25
};

var res = changeProp(startingValue);

console.log(startingValue);
console.log(res);