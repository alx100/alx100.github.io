// 1+++++++++++
function identity(x) {
  return x;
}

var identity = function identity(x) {
  return x;
};

// 2+++++++++++
function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

// 3++++++++++++
function identityf(x){
  return function() {
    return x;
  };
}

var three = identityf(3);

three()  //3

// 4++++++++++
function addf(first) {
  return function (second) {
    return first + second;
  } 
}

addf(3)(4) //7
// +++++++++++++++++++++
function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}



//5============ Higher order funcs
function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    };
  };
}

var addfu = liftf(add);
addfu(3)(4) //7
liftf(mul)(5)(6) // 30
liftf(sub)(5)(6) // -1

//6=======================
function curry(binary, first) {
  return function(second) {
    return binary(first, second);
  };
}

var add3 = curry(add, 3);
add3(4) //7

curry(mul, 5)(6) //30

// OR

function curry2(binary, first) {
 return liftf(binary)(first);
}

//or ES6 
function curry3(func, ...first) {
  return function(...second) {
    return func(...first, ...second);
  };
}

//7==================


var inc = addf(1) ;
var inc2 = liftf(add)(1);
var inc3 = curry(add, 1);


inc(5)      //6
inc(inc(5)) //7

// **************************************************************
//8
function twice(binary) {
  return function(arg) {
    return binary(arg, arg);
  };
}

// add(11, 11) = 22

var doubl = twice(add);
doubl(11) // 22
var square = twice(mul);
square(11) // 121

//9=========================

function reverse(binary){
  return function(first, second) {
    return binary(second, first);
  };
}

function reverse1(func){
  return function(...args) {
    return func(...args.reverse());
  };
}

var bus = reverse(sub);
bus(3, 2); //-1

//10=============================

function composeu(f, g) {
  return function(a) {
    return g(f(a));
  };
}

function composeu1(unary1, unary2){
  return function(arg){
    var arg2 = unary1(arg);
    var arg3 = unary2(arg2);
    return arg3;
  }; 
}

composeu(doubl, square)(5); //100

//11===============================

function composeb(f, g) {
  return function(a, b, c) {
    return g(f(a, b), c);
  };
}



composeb(add, mul)(2, 3, 7);  //35

//12==============================
function limit(binary, count){
  return function(a, b){
    if(count >= 1){
      count -= 1;
      return binary(a, b);
    }  
    return undefined;
    };
  }

var add_ltd = limit(add, 1);
add_ltd(3, 4); //7
add_ltd(3, 5); //undefined

//13=================================
// function generator

function from(start){
  return function(){
    var next = start;
    start += 1;
    return next;
  };
}

var index = from(0);
index() //0
index() //1
index() //2

// 14 generator with limit =============
function to(gen, end) {
  return function(){
    var value = gen();
    if (value < end) {
      return value;
    }
    return undefined;
  };
}


function to2(f, count) {
  var start = 1;
  return function(a){
    if(start < count){
      start += 1;
      return f(a)
    }
    return undefined;
  };
}

var index = to(from(1), 3);
index() //1
index() //2
index() //undefined

// 15=====================================
function fromTo(start, end){
  return to(from(start), end);
}

var index = fromTo(0, 3);

index() //0
index() //1
index() //2
index() //undefined

// 16==================================
function element(arr, gen){
  if (gen === undefined) {
    gen = fromTo(0, array.length);
  }
  return function(){
    var index = gen();
    if (index !== undefined){
      return array[index];
    }
  };
}

var ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));

ele() //'b'
ele() //'c'
ele() //undefined

// 17=================================
function collect(gen, arr){
  return function(){
    var res = gen();
    if(res !==undefined){
      arr.push(res);
    }
    return res;
  };

}

var array = [],
    col = collect(fromTo(0, 2), array);
    col() //0
    col() //1
    col() // undefined
    array // [0,1]



// 18===================================
function filter(gen, predicate){
  return function(){
    var value;
    do {
      value = gen();
    } while (
      value !== undefined &&
      !predicate(value)
    );
    return value; 
  }

}

function filterES6(gen, predicate) {
  return function recur() {
    var value = gen();
    if (
      value === undefined
      || predicate(value)
    ) {
      return value;
    }
    return recur();
  }
}

var fil = filter(fromTo(0, 5), 
    function third(value){
      return (value % 3) === 0;
    });


fil() //0
fil() //3
fil() //undefined

// 19================================
function concat(gen1, gen2){
  var gen = gen1;
  return function(){
    var value = gen();
    if (value !== undefined) {
      return value;
    }
    gen = gen2;
    return gen();
  };
}

function concatES6(...gens){
  var next = element(gens),
      gen = next();
  return function recur(){
      var value = gen();
      if (value === undefined) {
        gen = next();
        if (gen !==undefined) {
          return recur();
        }
      }
      return value;
  };
}

var con = concat(fromTo(0, 3), fromTo(0, 2));
con() //0
con() //1
con() //2
con() //0
con() //1
con() //undefined

//20==================================
function gensymf(prefix){
  var number = 0;
  return function(){
      number += 1;
      return prefix + number;
  }
}

var geng = gensymf("G"),
    genh = gensymf("H");

geng()  //"G1"
genh()  //"H1"
geng()  //"G2"
genh()  //"H2"

//21==================================
function fibonaccif(a, b){
  var i = 0;
  return function() {
    var next;
    switch(i){
      case 0:
        i = 1;
        return a;
      case 1:
        i = 2;
        return b;
      default:
        next = a + b;
        a = b;
        b = next;
        return next;
    }
  };
}

function fibonaccif2(a, b){
  return function(){
    var next = a;
    a = b;
    b += next;
    return next;
  }
}

var fib = fibonaccif(0, 1);
fib() //0
fib() //1
fib() //1
fib() //2
fib() //3
fib() //5

// 22=======================
function counter(value){
  return {
    up: function() {
      value += 1;
      return value;
    },
    down: function() {
      value -= 1;
      return value;
    }
  };
}

var object = counter(10),
    up = object.up,
    down = object.down;

up()   //11
down() //10
down() //9
uo() //10

// 23 =======================
function revocable(binary) {
  return {
    invoke: function (first, second) {
      if (binary !==undefined) {
        return binary(
          first,
          second
        );
      }
    },
    revoke: function () {
      binary = undefined;
    }
  };
}


var rev = revocable(add),
    add_rev = rev.invoke;

add_rev(3, 4); // 7
rev.revoke();
add_rev(5, 7); // undefined   